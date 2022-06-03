FROM scratch

LABEL operators.operatorframework.io.bundle.mediatype.v1=registry+v1
LABEL operators.operatorframework.io.bundle.manifests.v1=manifests/
LABEL operators.operatorframework.io.bundle.metadata.v1=metadata/
LABEL operators.operatorframework.io.bundle.package.v1=ossmplugin
LABEL operators.operatorframework.io.bundle.channels.v1=${CHANNELS}
LABEL operators.operatorframework.io.bundle.channel.default.v1=${DEFAULT_CHANNEL}

COPY manifests /manifests/
COPY metadata /metadata/