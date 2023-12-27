import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ХрДокMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot-kr3-хр-док';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ХрДокMixin, Validations, {
});

defineProjections(Model);

export default Model;
