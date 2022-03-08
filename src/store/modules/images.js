import api from '../../api/imgur';

const state = {
    //below images is an array, which will have different objects, each object will represent a different image.
    images : []
};

const getters = {
    //below, allImages is a function, that simply returns all the images (from the above state)
    allImages: state => state.images
};

const actions = {
    async fetchImages ({ rootState, commit }) {
        //below is a ES2015 format that equals : const token = rootState.auth.token
        //Basically, below the rootState is allowing us to go into the 'auth' module, and access the 'token' property and bring it into this module.
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        console.log(response);
        commit('setImages', response.data.data);
    },
    //Below {commit} is traditionally used by 'actions' to call a mutation function
    // Below, the 'images' will contain a list of all images
    async uploadImages({commit}, images) {
        //Below, the console.log will log an event, which will have the 'target:input', inside which you will find 'files' which will have the data of the uploaded file.
        console.log('images: ', images);
        commit //just wrote to bypass eslint, for not using {commit}
    }
};

const mutations = {
    //below, is a standard format of any mutation function. The first argument is always the state & the 2nd argument is always a parameter that is passed to it.
    setImages: (state, images) => {
        //below, the passed object 'images' is assigned as the new state object.
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};