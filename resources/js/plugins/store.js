import Vue from "vue";
import Vuex from "vuex";
import StoreService from "./StoreService.ts";
Vue.use(Vuex);

let storedCredential = StoreService.getCredential();

const store = new Vuex.Store({
    state: {
        user: storedCredential ? storedCredential.user : null,
        access_token: storedCredential ? storedCredential.access_token : null
    },
    getters: {
        getUser(state) {
            return state.user;
        },

        getAccessToken(state) {
            return state.access_token;
        }
    },
    mutations: {
        updateUserAndToken(state, credential) {
            state.access_token = credential.access_token;
            state.user = credential.user;
            StoreService.addCredentialToLocalStorage(credential);
        },

        removeUserAndToken(state) {
            state.user = null;
            state.access_token = null;
            StoreService.removeCredentialFromLocalStorage();
        }
    }
});

export default store;
