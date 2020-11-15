import axios from "axios";
import { messagesUrl } from "../configs/configs";

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
            return state.messages.sort((a, b) => new Date(b.date) - new Date(a.date));
        },
    },
    actions: {
        async setMessages(context) {
            try {
                const response = await axios.get(messagesUrl);
                if (response.data) {
                    context.commit('setMessages', { messages: response.data });
                }
            }
            catch (error) {
                console.log('error: ', error);
                context.commit('pushError', {error: error.toString()})
            }
        }
    }
}
