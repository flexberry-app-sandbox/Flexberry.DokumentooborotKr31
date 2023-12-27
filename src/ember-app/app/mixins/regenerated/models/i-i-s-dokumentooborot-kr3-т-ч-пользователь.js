import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  авПользователи: DS.belongsTo('i-i-s-dokumentooborot-kr3-ав-пользователи', { inverse: null, async: false }),
  входВСистему: DS.belongsTo('i-i-s-dokumentooborot-kr3-вход-в-систему', { inverse: 'тЧПользователь', async: false })
});

export let ValidationRules = {
  авПользователи: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-т-ч-пользователь.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  входВСистему: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-т-ч-пользователь.validations.входВСистему.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПользовательE', 'i-i-s-dokumentooborot-kr3-т-ч-пользователь', {
    авПользователи: belongsTo('i-i-s-dokumentooborot-kr3-ав-пользователи', 'ID Пользователя', {
      сотрудники: belongsTo('i-i-s-dokumentooborot-kr3-сотрудники', '', {
        фИОСотрудника: attr('ФИО Сотрудника', { index: 1 })
      }, { index: -1, hidden: true }),
      логин: attr('Логин', { index: 2, hidden: true }),
      пароль: attr('Пароль', { index: 3 })
    }, { index: 0, displayMemberPath: 'iDПользователя' })
  });
};
