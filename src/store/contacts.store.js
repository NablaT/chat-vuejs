import axios from "axios";
import { contactsUrl } from "../configs/configs";

export const contactsModule = {
    state: {
        contacts: []
    },
    mutations: {
        setContacts: (state, payload) => {
            if (payload.contacts) {
                state.contacts = payload.contacts
            }
        },
    },
    actions: {
        async setContacts(context) {
            try {
                const response = await axios.get(contactsUrl);
                if (response.data) {
                    context.commit('setContacts', { contacts: response.data });
                }
            }
            catch (error) {
                console.log('error: ', error);
                context.commit('pushError', {error: error.toString()})
            }
        }
    }
}
