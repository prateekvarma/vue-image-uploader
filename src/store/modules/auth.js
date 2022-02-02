import api from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => {
        //the !! below will return 'true' or 'false' based on if 'state.token' is set or not
        return !!state.token
    }
};

const actions = {
    //the {commit} underneath is just importing a keyword which is traditionally used by 'actions' to call a mutation function
    logout: ({ commit }) => {
        //below, we're calling the setToken mutation, and passing the token value as null -> which will logout the user.
        commit('setToken', null)
    },
    login: () => {
        api.login();
    },
};

const mutations = {
    setToken: (state, token) => {
        //the state.token refers to the token variable in the object state's const above
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};