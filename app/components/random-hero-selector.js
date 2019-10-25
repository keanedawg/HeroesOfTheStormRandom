import Component from '@ember/component';

export default Component.extend({
  hero: "Arthas",
  portrait: "http://s3.hotsapi.net/img/heroes/92x93/arthas.png",
  heroList: [],
  actions: {
    generateRandomHero() {
      let randnum = Math.floor((Math.random() * this.heroList.length) + 1);
      console.log(randnum);
      this.hero = this.heroList.name;
      this.portrait = this.heroList.icon_url["92x93"];
    }
  }
});
