import Component from '@ember/component';
//import heroesTalents from 'heroesTalents';
//const HeroesTalents = require('heroes-talents')

export default Component.extend({
  hero: "Arthas",
  portrait: "http://s3.hotsapi.net/img/heroes/92x93/arthas.png",
  heroList: null,
  actions: {
    async generateRandomHero() {
      try {
        const heroes = await heroesTalents.loadHeroJSONFiles()
        const favoriteHero = heroes.alarak
        console.log(`My favorite hero is ${favoriteHero.name}. He is an ${favoriteHero.role}.`)
      } catch (err) {
        console.log(err)
      }

      let randnum = Math.floor((Math.random() * this.heroList.length) + 1);
      console.log(randnum);
      this.set('hero', this.heroList[randnum]['name']);
      this.set('portrait', this.heroList[randnum]['icon_url']['92x93']);
    }
  }
});
