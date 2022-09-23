module.exports = () => ({
  ks: {
    duration: {
      immediate: { value: '50ms' },
      fast: { value: '100ms' },
      medium: { value: '150ms' },
      slow: { value: '300ms' },
    },
    'timing-function': {
      bounce: { value: 'cubic-bezier(0.17,1,0.5,1.5)' },
      'ease-out': { value: 'ease-out' },
      'ease-in': { value: 'ease-in' },
      'ease-in-out': { value: 'ease-in-out' },
      linear: { value: 'linear' },
    },
    transition: {
      collapse: { value: '{ks.duration.slow} {ks.timing-function.ease-out}' },
      hover: { value: '{ks.duration.fast} {ks.timing-function.ease-in-out}' },
      fade: { value: '{ks.duration.slow} {ks.timing-function.ease-out}' },
    },
  },
});
