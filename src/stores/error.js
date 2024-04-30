import { create } from "zustand";
import { produce } from "immer";
import { nanoid } from "nanoid";

const initialState = {
  previous: {
    id: null,
    message: null,
    status: null,
    action: null,
    showUser: false,
  },
  next: {
    id: null,
    message: null,
    status: null,
    action: null,
    showUser: false,
  },
};

export const useErrorStore = create((set) => ({
  ...initialState,

  actions: {
    setError: (error) =>
      set(
        produce((state) => {
          const id = `${error.action?.type ?? "error"}-${nanoid(7)}`;
          if (state?.previous?.id === null && state?.next?.id === null) {
            state.previous = { ...error, id };
            state.next = { ...error, id };

            return;
          } else if (state?.previous?.id !== null && state?.next?.id === null) {
            state.previous = { ...state.previous };
            state.next = { ...error, id };
            return;
          } else {
            state.previous = { ...state?.next };
            state.next = { ...error, id };
            return;
          }
        })
      ),

    clearError: (type) =>
      set(
        produce((state) => {
          const mapActions = (type) => {
            const map = {
              next: () => {
                state.previous = { ...state.next };
                state.next = { ...initialState.next };
              },
              previous: () => {
                state.previous = { ...state.next };
                state.next = { ...initialState.next };
              },
              both: () => {
                state = { ...initialState };
              },
            };

            return map[type]();
          };

          mapActions(type);
        })
      ),
  },
}));

export default useErrorStore;
