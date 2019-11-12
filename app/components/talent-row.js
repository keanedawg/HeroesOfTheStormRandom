import Component from '@ember/component';

export default Component.extend({
  tagName: "tr",
  heroTalent: null,
  level: null,
  index: null,
  didReceiveAttrs() {
    this._super(...arguments);
    this.index = Math.floor((Math.random() * this.heroTalent.length));
    this.heroTalent = this.heroTalent[this.index];
  }
});
