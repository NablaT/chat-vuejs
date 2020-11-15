import { createStore } from 'vuex'
import { serverUrl } from './configs/configs';

export default createStore({
    namespace: false,
    // State contains the store data. Here we store 2 numbers: count and maxLimit. The attributes should have initial value.
    state() {
        return {
            count: 1,
            maxLimit: 100
        }
    },
    // Mutations are the functions which modify the state. In this example, we have functions to modify the value of count in the state 
    mutations: {
        increment: state => state.count = state.count + 1,
        decrement: state => state.count = state.count - 1,
        incrementByNb: (state, payload) => state.count = state.count + payload.count,
        decrementByNb: (state, payload) => state.count = state.count - payload.count
    },
    // Getters are the functions which computes the data from the store to return derived data (new data).
    // In Vue.js, there is two ways to retrieve data:
    // - One without getters: just by doing this.$store.state.count 
    // - One with getters: in this example, several components needs to know the difference between the maxLimit and the count.
    //   Instead of duplicating the functions in all the components, the functions are written once in the store and the components 
    //   call the getters.
    getters: {
        remainingBeforeLimit: (state) => {
            return state.maxLimit - state.count;
        },
    },
    actions: {
        async setCountByNb(context) {
            try {
                const response = await axios.get(serverUrl);
                console.log('response: ', response); // Useful to see the response received, can be removed later.
                // context is the store instance, you can use it to manipulate the store
                // TODO: update the count in the state with the data received
                // example: context.commit('incrementByNb', { count: 12})
            }
            catch (error) {
                console.log('error: ', error);
            }
        },
        setCountByNb(context) {
            axios.get(serverUrl)
                .then((response) => {    
                    const response = await axios.get(serverUrl);
                    console.log('response: ', response); // Useful to see the response received, can be removed later.
                    // context is the store instance, you can use it to manipulate the store
                    // TODO: update the count in the state with the data received
                    // example: context.commit('incrementByNb', { count: 12})
                })
                .catch((error) => {
                    console.log('error: ', error);
                })
        }
    }
})



