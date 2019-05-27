import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        login:window.sessionStorage.getItem('user_login')=='true'?true:false
  },
  mutations: {
        setLogin(state,status){
          window.sessionStorage.setItem('user_login',status);
          state.login=status;
        }
  },
  actions: {
    
  }
})
