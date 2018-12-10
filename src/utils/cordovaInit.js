import store from "@/store";

const cordovaInit = () => {
    if(!window.cordova){
        return;
    }
    document.addEventListener('deviceready', () => {
        if (window.device) {
            if (device.platform === 'Android') {
                store.commit('setIsAndroidMutation', true);
            } else if (device.platform === 'iOS') {
                store.commit('setIsIOSMutation', true);
            }
            store.commit('setIsMobileMutation', (store.state.isAndroid || store.state.isIOS));
        }
        if (cordova.file) {
            store.commit('setWrapperAssetsPathMutation', cordova.file.applicationDirectory);
        }
    }, false);
}

export default cordovaInit;