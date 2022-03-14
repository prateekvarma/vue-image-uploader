import qs from 'qs'; //installed using NPM,library to create query string URLs for API calls
import axios from 'axios';

const CLIENT_ID = 'XXX';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        //below is building an object that is compatible with the qs library to build a URL to make API calls
        const querystring = {
            client_id : CLIENT_ID,
            response_type : 'token'
        };
        //below will send the user to the following URL for auth
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },
    fetchImages(token) {
        //the '/3/account/me/images' below, comes from the imgur API docs
         return axios.get(`${ROOT_URL}/3/account/me/images`, {
             headers: {
                 Authorization: `Bearer ${token}`
             }
         })
    },
    upload(images, token) {
        //Below, take object 'image', convert it to an Array, then map each element into 'image'. This is because accroding to imgur docs, we can upload only one image at a time.
        Array.from(images).map(image => {
            //FormData is a native JS object that can build an object with form data, which we can use to send requests. FormData does not need to be imported, it's globally available.
            const formData = new FormData();
            //Below, we build the formData object, append a variable called 'image' containing the actual image. The name 'image' is required by the official docs of imgur
            formData.append('image', image);
            //Below, is the axios post request : 1st arg - url, 2nd arg - data, 3rd arg - access header token
            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            //the 'return' value above is going to be a promise, that represents the upload value itself. We need to combine all those individual uploads, and adjust them as one SINGLE promise for the upload function as a whole.
        });
    }
}