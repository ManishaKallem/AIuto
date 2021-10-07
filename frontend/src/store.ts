import { Storage } from '@capacitor/storage';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

export const key: InjectionKey<Store<State>> = Symbol();

// define your typings for the store state
export interface State {
  status: { loggedIn: boolean };
  accessToken: string | null;
}

let accessToken = null;
Storage.get({ key: 'accessToken' }).then((val) => (accessToken = val.value));

const initialState = accessToken
  ? { status: { loggedIn: true }, accessToken: accessToken }
  : { status: { loggedIn: false }, accessToken: null };

export const store = createStore<State>({
  modules: {
    auth: {
      namespaced: true,
      state: initialState,
      actions: {
        refreshToken({ commit }, accessToken: string) {
          commit('refreshToken', accessToken);
        },
      },
      mutations: {
        refreshToken(state, accessToken) {
          state.status.loggedIn = true;
          state.accessToken = accessToken;
        },
      },
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
