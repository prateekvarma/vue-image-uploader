const state = {
    //below images is an array, which will have different objects, each object will represent a different image.
    images = []
};

const getters = {
    //below, allImages is a function, that simply returns all the images (from the above state)
    allImages: state => state.images
};

const actions = {

};

const mutations = {
    //below, is a standard format of any mutation function. The first argument is always the state & the 2nd argument is always a parameter that is passed to it.
    setImages = (state, images) => {
        //below, the passed object 'images' is assigned as the new state object.
        state.images = images;
    }
};