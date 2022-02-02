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

};

const mutations = {
    setToken: (state, token) => {
        //the state.token refers to the token variable in the object state's const above
        state.token = token;
    }
};