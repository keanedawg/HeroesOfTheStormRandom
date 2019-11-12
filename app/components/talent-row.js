import Component from '@ember/component';

export default Component.extend({
  tagName: "tr",
  heroTalent: null,
  level: null,
  index: null,
  didReceiveAttrs() {
    this._super(...arguments);
  }
});
