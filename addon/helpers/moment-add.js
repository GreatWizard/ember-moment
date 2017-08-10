import { get } from '@ember/object';
import { typeOf } from '@ember/utils';
import { inject as service } from '@ember/service';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

export default BaseHelper.extend({
  moment: service(),

  globalAllowEmpty: false,

  compute: computeFn(function(params, { precision, locale, timeZone }) {
    this._super(...arguments);

    const moment = get(this, 'moment');
    const { length } = params;
    const args = [];
    const additionArgs = [];

    if (length === 1) {
      additionArgs.push(params[0]);
    } else if (length === 2 && typeOf(params[0]) === 'number' && typeOf(params[1]) === 'string') {
      additionArgs.push(...params);
    } else {
      args.push(params[0]);
      additionArgs.push(...params.slice(1));
    }

    return this.morphMoment(moment.moment(...args), { locale, timeZone }).add(...additionArgs, precision);
  })
});
