import Component from '@ember/component';

export default Component.extend({
  hero: "Arthas",
  portrait: "http://s3.hotsapi.net/img/heroes/92x93/arthas.png",
  heroList: [],
  actions: {
    generateRandomHero() {
      console.log("something")
      console.log(heroList)
    }
  }
});
