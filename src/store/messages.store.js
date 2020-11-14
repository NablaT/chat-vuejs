import axios from "axios";

export const messagesModule = {
    namespace: false,
    state() {
        return {
            count: 1,
            messages: []
        }
    },
    mutations: {
        setMessages: (state, payload) => {
            if (payload.messages) {
                state.messages = payload.messages
            }
        },
    },
    getters: {
        numberOfUnreadMessages: (state) => {
            return state.messages.filter((message) => !message.read).length;
        },
        sortMessagesByDate: (state) => {
            return state.messages.sort((a, b) => new Date(a.date) - new Date(b.date));
        },
    },
    actions: {
        async setMessages(context) {
            try {
                const response = await axios.get('httpss://jsonbox.io/box_929e20c02ac0c6aac0c3');
                if (response.data) {
                    context.commit('setMessages', { messages: response.data });
                }
            }
            catch (error) {
                context.commit('pushError', {error: error.toString()})
            }
        }
    }
}
