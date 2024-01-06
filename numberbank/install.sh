#!/bin/sh

LF=$(printf '\\\012_')
LF=${LF%_}
EXTENSION_ID=numberbank
COLLABORATOR=con3office
EXTENSION_NAME='NumberBank 2.0'
EXTENSION_DESCRIPTION="Store value to cloud."

npm install firebase@10.7.1 --legacy-peer-deps
npm install @peculiar/webcrypto --legacy-peer-deps

mkdir -p node_modules/scratch-vm/src/extensions/scratch3_${EXTENSION_ID}
cp ${EXTENSION_ID}/scratch-vm/src/extensions/scratch3_${EXTENSION_ID}/index.js node_modules/scratch-vm/src/extensions/scratch3_${EXTENSION_ID}/
mv node_modules/scratch-vm/src/extension-support/extension-manager.js node_modules/scratch-vm/src/extension-support/extension-manager.js_orig
sed -e "s|class ExtensionManager {$|builtinExtensions['${EXTENSION_ID}'] = () => require('../extensions/scratch3_${EXTENSION_ID}');${LF}${LF}class ExtensionManager {|g" node_modules/scratch-vm/src/extension-support/extension-manager.js_orig > node_modules/scratch-vm/src/extension-support/extension-manager.js

mkdir -p src/lib/libraries/extensions/${EXTENSION_ID}
cp ${EXTENSION_ID}/scratch-gui/src/lib/libraries/extensions/${EXTENSION_ID}/${EXTENSION_ID}_entry.png src/lib/libraries/extensions/${EXTENSION_ID}/${EXTENSION_ID}-entry.png 
cp ${EXTENSION_ID}/scratch-gui/src/lib/libraries/extensions/${EXTENSION_ID}/${EXTENSION_ID}_inset.png src/lib/libraries/extensions/${EXTENSION_ID}/${EXTENSION_ID}-inset.png
mv src/lib/libraries/extensions/index.jsx src/lib/libraries/extensions/index.jsx_orig
DESCRIPTION="\
    {${LF}\
        name: (${LF}\
            <FormattedMessage
                defaultMessage='${EXTENSION_NAME}',${LF}\
                description='${EXTENSION_NAME}',${LF}\
                id='gui.extension.${EXTENSION_ID}blocks.name'${LF}\
            />${LF}\
        ),${LF}\
        extensionId: '${EXTENSION_ID}',${LF}\
        collaborator: '${COLLABORATOR}',${LF}\
        iconURL: ${EXTENSION_ID}IconURL,${LF}\
        insetIconURL: ${EXTENSION_ID}InsetIconURL,${LF}\
        description: (${LF}\
            <FormattedMessage${LF}\
                defaultMessage='${EXTENSION_DESCRIPTION}'${LF}\
                description='${EXTENSION_DESCRIPTION}'${LF}\
                id='gui.extension.${EXTENSION_ID}blocks.description'${LF}\
            />${LF}\
        ),${LF}\
        internetConnectionRequired: true,${LF}\
        featured: true,${LF}\
        translationMap: {${LF}\
          'ja': {${LF}\
              'gui.extension.${EXTENSION_ID}blocks.name': 'ナンバーバンク 2.0',${LF}\
              'gui.extension.${EXTENSION_ID}blocks.description': '値をクラウドに保存する。'${LF}\
          },${LF}\
          'ja-Hira': {${LF}\
              'gui.extension.${EXTENSION_ID}blocks.name': 'なんばーばんく 2.0',${LF}\
              'gui.extension.${EXTENSION_ID}blocks.description': 'あたいをクラウドにほぞんする。'${LF}\
          }${LF}\
        }${LF}\
    },"
sed -e "s|^export default \[$|import ${EXTENSION_ID}IconURL from './${EXTENSION_ID}/${EXTENSION_ID}-entry.png';${LF}import ${EXTENSION_ID}InsetIconURL from './${EXTENSION_ID}/${EXTENSION_ID}-inset.png';${LF}${LF}export default [${LF}${DESCRIPTION}|g" src/lib/libraries/extensions/index.jsx_orig > src/lib/libraries/extensions/index.jsx
