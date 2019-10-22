import Route from '@ember/routing/route';
import fetch from 'fetch'; 

export default Route.extend({
    model() {
        return fetch('https://hotsapi.net/api/v1/heroes').then(function(response) {
            console.log(response)
            return response.json();
        });
    }
});
