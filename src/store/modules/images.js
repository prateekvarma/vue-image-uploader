import { pick } from 'lodash';
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
        //below, strange 'api.fetchImages' location is because how we defined it at the top
        const response = await api.fetchImages(token);
        console.log(response);
        commit('setImages', response.data.data);
    },
    //Below {rootState} will have access to all the states in our VUEX store
    // Below, the 'images' will contain a list of all images
    async uploadImages({rootState}, images) {
        //Get the access token because the API docs require a bearer token
        const { token } = rootState.auth; //check format meaning above

        //Call a function in api/imgur.js module to do the upload
        //below, strange 'api.upload' location is because how we defined it at the top
        await api.upload(images, token);
        //Redirect user to the ImageList component
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