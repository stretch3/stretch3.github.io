#!/bin/sh

LF=$(printf '\\\012_')
LF=${LF%_}

mv node_modules/scratch-vm/src/extension-support/extension-manager.js node_modules/scratch-vm/src/extension-support/extension-manager.js_orig
sed -e "s|this._loadedExtensions.set(extensionURL, serviceName);$|this._loadedExtensions.set(extensionURL, serviceName);${LF}            gtag('event', 'load_extension', {${LF}              'event_category': extensionURL${LF}            });${LF}|g" node_modules/scratch-vm/src/extension-support/extension-manager.js_orig > node_modules/scratch-vm/src/extension-support/extension-manager.js
