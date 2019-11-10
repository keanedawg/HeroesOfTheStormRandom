import Component from '@ember/component';
//import heroesTalents from 'heroesTalents';
//const HeroesTalents = require('heroes-talents')

export default Component.extend({
  hero: "Arthas",
  portrait: "arthas.png",
  heroList: null,
  actions: {
    async generateRandomHero() {
      let randnum = Math.floor((Math.random() * this.heroList.length) + 1);
      this.set('hero', this.heroList[randnum]['name']);
      this.set('portrait', this.heroList[randnum]['icon']);
    }
  }
});
