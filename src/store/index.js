import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ 
    state: {
        messageCount: 25
    },
    mutations: {
        addMessage(state, newMessage) {
            state.messages.push(newMessage)
         }  
        }
});













