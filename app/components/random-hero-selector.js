import Component from '@ember/component';

export default Component.extend({
  hero: "Arthas",
  portrait: "http://s3.hotsapi.net/img/heroes/92x93/arthas.png",
  actions: {
    generateRandomHero() {
      this.login.deleteUser();
    }
  }
});
