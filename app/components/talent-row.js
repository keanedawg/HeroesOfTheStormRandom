import Component from '@ember/component';

export default Component.extend({
  tagName: "tr",
  heroTalentList: null,
  heroTalent: null,
  level: null,
  index: null,
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('index', Math.floor((Math.random() * this.heroTalentList.length)));
    this.set('heroTalent', this.heroTalentList[this.index]);
  }
});
