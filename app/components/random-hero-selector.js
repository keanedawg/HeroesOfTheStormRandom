import Component from '@ember/component';
//import heroesTalents from 'heroesTalents';
//const HeroesTalents = require('heroes-talents')

export default Component.extend({
  heroName: "Arthas",
  portrait: "arthas.png",
  heroList: null,
  hero: null,
  actions: {
    async generateRandomHero() {
      let randnum = Math.floor((Math.random() * this.heroList.length));
      this.set('heroName', this.heroList[randnum]['name']);
      this.set('portrait', this.heroList[randnum]['icon']);
      this.set('hero', this.heroList[randnum]);
    }
  }
});
