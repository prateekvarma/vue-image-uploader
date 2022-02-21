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
         axios.get(`${ROOT_URL}/3/account/me/images`, {
             headers: {
                 Authorization: `Bearer ${token}`
             }
         })
    }
}