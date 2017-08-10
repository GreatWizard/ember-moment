import { get } from '@ember/object';
import { inject as service } from '@ember/service';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

export default BaseHelper.extend({
  moment: service(),

  globalAllowEmpty: false,

  compute: computeFn(function(params, { precision, float, locale, timeZone }) {
    this._super(...arguments);

    if (!params || params && params.length !== 2) {
      throw new TypeError('ember-moment: Invalid Number of arguments, must be 2');
    }

    const moment = get(this, 'moment');
    const [dateA, dateB] = params;

    return this.morphMoment(moment.moment(dateB), { locale, timeZone }).diff(dateA, precision, float);
  })
});
