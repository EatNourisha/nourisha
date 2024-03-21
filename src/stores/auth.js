import create from "zustand";
import { produce } from "immer";
import omit from "lodash/omit";

import ls from "../utils/secureStorage";
import configs from "../config";


export const useAuthStore = create((set) => ({
  sub: null,
  isSignedIn: false,
  token: null,
  isVerified: false,
  roles: [],
  exp: null,
  status: "idle",

  passwordReset: {
    status: "idle",
  },

  persist: (data) =>
    set(
      produce((state) => {
        const auth = { ...data, isSignedIn: true };
        ls.set(configs.authKey, auth);
        return auth;
      })
    ),

  hydrate: () =>
    set(
      produce((state) => {
        const auth = ls.get(configs.authKey);
        return { ...(auth ?? omit(state, ["persist", "hydrate"])) };
      })
    ),

  dehydrate: () =>
    set(
      produce((_) => {
        ls.remove(configs.authKey);
        return {
          sub: null,
          isSignedIn: false,
          token: null,
          isVerified: false,
          roles: [],
          exp: null,
          status: "idle",
        };
      })
    ),

  setStatus: (status) =>
    set(
      produce((state) => {
        state.status = status;
      })
    ),

  setPasswordResetStatus: (status) =>
    set(
      produce((state) => {
        state.passwordReset.status = status;
      })
    ),
}));

export default useAuthStore;
