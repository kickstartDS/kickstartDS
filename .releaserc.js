module.exports = {
  branches: [
    { name: 'master', channel: 'latest' },
    { name: 'next', channel: 'next' },
    { name: 'next-major', channel: 'alpha' },
  ],
  plugins: [
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'modules/*/package.json'],
        message:
          'chore(release): new release ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
        notifyOnFail: true,
      },
    ],
  ],
  monorepo: {
    analyzeCommits: {
      path: '@semantic-release/commit-analyzer',
      parserOpts: {
        revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./,
      },
      segmentMatcher: function (packageSegments, fileSegments) {
        if (fileSegments[0] === 'modules') {
          fileSegments[0] = '@rm-frontend';
          fileSegments.unshift('packages');
        }

        return packageSegments.every(
          (packageSegment, i) => packageSegment === fileSegments[i]
        );
      },
    },
    generateNotes: {
      host: 'https://bitbucket.ruhmesmeile.tools',
      commit: 'commits',
      issue: 'issue',
      path: '@semantic-release/release-notes-generator',
      preset: 'angular-bitbucket',
      parserOpts: {
        revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./,
      },
    },
  },
  verifyConditions: [],
  verifyRelease: ['@semantic-release/npm', '@semantic-release/git']
    .map(require)
    .map((x) => x.verifyConditions),
};
