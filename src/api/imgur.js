import qs from 'qs';
//the above is a Query String we installed using NPM, this is a nice library to create query string URLs for making API calls

const CLIENT_ID = '';
const ROOT_URL = '';

export default {
    login() {
        //below is building an object that is compatible with the qs library to build a URL to make API calls
        const querystring = {
            client_id = CLIENT_ID,
            response_type = 'token'
        };
        //below will send the user to the following URL for auth
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    }
}