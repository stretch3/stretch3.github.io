#!/bin/sh

LF=$(printf '\\\012_')
LF=${LF%_}

mkdir -p node_modules/scratch-vm/src/extensions/microbitMore
cp scratch-microbit-more/scratch-vm/src/extensions/microbitMore/index.js node_modules/scratch-vm/src/extensions/microbitMore/
mv node_modules/scratch-vm/src/extension-support/extension-manager.js node_modules/scratch-vm/src/extension-support/extension-manager.js_orig
sed -e "s|class ExtensionManager {$|builtinExtensions['microbitMore'] = () => require('../extensions/microbitMore');${LF}${LF}class ExtensionManager {|g" node_modules/scratch-vm/src/extension-support/extension-manager.js_orig > node_modules/scratch-vm/src/extension-support/extension-manager.js

mkdir -p src/lib/libraries/extensions/microbitMore
cp scratch-microbit-more/scratch-gui/src/lib/libraries/extensions/microbitMore/microbitMore.png src/lib/libraries/extensions/microbitMore/
cp scratch-microbit-more/scratch-gui/src/lib/libraries/extensions/microbitMore/microbitMore-small.svg src/lib/libraries/extensions/microbitMore/
cp scratch-microbit-more/scratch-gui/src/lib/libraries/extensions/microbitMore/microbitMore-illustration.svg src/lib/libraries/extensions/microbitMore/
mv src/lib/libraries/extensions/index.jsx src/lib/libraries/extensions/index.jsx_orig
MICROBIT_MORE="\
    {${LF}\
        name: 'micro:bit More',${LF}\
        extensionId: 'microbitMore',${LF}\
        collaborator: 'Yengawa Lab',${LF}\
        iconURL: microbitMoreIconURL,${LF}\
        insetIconURL: microbitMoreInsetIconURL,${LF}\
        description: (${LF}\
            <FormattedMessage${LF}\
                defaultMessage='Connect your projects with the world.'${LF}\
                description='Description for the micro:bit more extension'${LF}\
                id='gui.extension.microbitmore.description'${LF}\
            />${LF}\
        ),${LF}\
        featured: true,${LF}\
        disabled: false,${LF}\
        bluetoothRequired: true,${LF}\
        internetConnectionRequired: false,${LF}\
        launchPeripheralConnectionFlow: true,${LF}\
        useAutoScan: false,${LF}\
        connectionIconURL: microbitMoreConnectionIconURL,${LF}\
        connectionSmallIconURL: microbitMoreConnectionSmallIconURL,${LF}\
        connectingMessage: (${LF}\
           <FormattedMessage${LF}\
               defaultMessage='Connecting'${LF}\
               description='Message to help people connect to their micro:bit.'${LF}\
               id='gui.extension.microbit.connectingMessage'${LF}\
           />${LF}\
        ),${LF}\
        helpLink: 'https://lab.yengawa.com/project/scratch-microbit-more/'${LF}\
    },"
sed -e "s|^export default \[$|import microbitMoreIconURL from './microbitMore/microbitMore.png';${LF}import microbitMoreInsetIconURL from './microbitMore/microbitMore-small.svg';${LF}import microbitMoreConnectionIconURL from './microbitMore/microbitMore-illustration.svg';${LF}import microbitMoreConnectionSmallIconURL from './microbitMore/microbitMore-small.svg';${LF}${LF}export default [${LF}${MICROBIT_MORE}|g" src/lib/libraries/extensions/index.jsx_orig > src/lib/libraries/extensions/index.jsx

