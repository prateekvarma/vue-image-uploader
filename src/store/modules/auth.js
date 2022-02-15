import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token')
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
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    },
    login: () => {
        api.login();
    },
    //the 'hash' below = 'window.location.hash' from file AuthHandler.vue
    finalizeLogin: ({commit}, hash) => {
        //The hash contains a long URL string, with a lot of info, including some variables and values.
        //Below the "hash.replace('#', '')" will remove the # and replace it with ''
        const query = qs.parse(hash.replace('#', ''));
        //the qs above is a library, the parse is a function in the qs library, that take a string and separates out it's key value pairs. This will be then stored in the 'query' variable
        commit('setToken', query.access_token);
        //above, we're calling the setToken mutation, and passing the token value as 'query.access_token' -> which is a key-value pair's key, taken from the URL
        window.localStorage.setItem('imgur_token', query.access_token);
        //above, we're setting a variable named 'imgur_token' into the localStorage of the native browser. This way, we can access this variable & sustain login status of the user even when he goes to other URLs and returns back to find his login status intact.
    }
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