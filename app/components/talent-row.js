import Component from '@ember/component';

export default Component.extend({
  tagName: "tr",
  heroTalent: null,
  index: null,
  init() {
    this._super(...arguments);
    //    let randnum = Math.floor((Math.random() * this.heroTalent.length()) + 1);
    //    this.index = randnum;
  }
});
