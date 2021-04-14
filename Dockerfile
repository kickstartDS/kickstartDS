FROM ruhmesmeile/build-static-depsonly:lerna

COPY . /data

WORKDIR /data

CMD rm -rf dist/* && npm run build
