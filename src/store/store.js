import { createStore } from 'vuex'
import { contactsModule } from './contacts.store.js';
import { errorsModule } from './errors.store.js';
import { messagesModule } from './messages.store.js';

export default createStore({
    namespace: false,
    modules: {
        contactsModule: contactsModule,
        errorsModule: errorsModule,
        messagesModule: messagesModule,
    }
})


    // state() {
    //     return {
    //         count: 1,
    //         messages: messagesMock
    //     }
    // },
    // mutations: {
    //     increment: state => state.count++,
    //     decrement: state => state.count--,
    //     setMessages: (state, payload) => state.messages = payload.messages
    // },
    // getters: {
    //     numberOfUnreadMessages: (state) => {
    //         return state.messages.filter((message) => !message.read).length;
    //     },
    //     sortMessagesByDate: (state) => {
    //         return state.messages.sort((a, b) => new Date(a.date) - new Date(b.date));
    //     },
    // }