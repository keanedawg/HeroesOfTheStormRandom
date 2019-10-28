import Component from '@ember/component';

export default Component.extend({
  hero: "Arthas",
  portrait: "http://s3.hotsapi.net/img/heroes/92x93/arthas.png",
  heroList: [],
  actions: {
    generateRandomHero() {
      let randnum = Math.floor((Math.random() * this.heroList.length) + 1);
      console.log(randnum);
      this.set('hero', this.heroList[randnum]['name']);
      this.set('portrait', this.heroList[randnum]['icon_url']['92x93']);
    }
  }
});
