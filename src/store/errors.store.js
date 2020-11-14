
export const errorsModule = {
    namespace: false,
    state: {
        errors: ["Error: Nana"]
    },
    mutations: {
        pushError: (state, payload) => {
            console.log(state.errors);
            state.errors = [...state.errors, payload.error];
            console.log(payload.error);
            console.log(state.errors);
        }
    },
    // actions: {
    //     pushError: (context, payload) => {
    //         console.log('e');
    //         context.commit("pushError", payload);
    //     }
    // }
}
