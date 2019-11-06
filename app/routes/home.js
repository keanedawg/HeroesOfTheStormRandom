import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return fetch('/hero-data/heroes.json').then(function (response) {
      return response.json();
    });
  }
});
