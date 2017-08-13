import Ember from 'ember';
import IsSameOrBeforeHelper from 'ember-moment/helpers/is-same-or-before';
import config from '../config/environment';

const { get } = Ember;

export default IsSameOrBeforeHelper.extend({
  globalAllowEmpty: !!get(config, 'moment.allowEmpty')
});
