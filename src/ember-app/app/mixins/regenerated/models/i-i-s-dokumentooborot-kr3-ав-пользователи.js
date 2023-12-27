import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDПользователя: DS.attr('number'),
  датаРегистрации: DS.attr('date'),
  логин: DS.attr('string'),
  пароль: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-dokumentooborot-kr3-сотрудники', { inverse: null, async: false }),
  тЧПрава: DS.hasMany('i-i-s-dokumentooborot-kr3-т-ч-права', { inverse: 'авПользователи', async: false })
});

export let ValidationRules = {
  iDПользователя: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-ав-пользователи.validations.iDПользователя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаРегистрации: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-ав-пользователи.validations.датаРегистрации.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  логин: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-ав-пользователи.validations.логин.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пароль: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-ав-пользователи.validations.пароль.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-ав-пользователи.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПрава: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-ав-пользователи.validations.тЧПрава.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АвПользователиE', 'i-i-s-dokumentooborot-kr3-ав-пользователи', {
    датаРегистрации: attr('Дата регистрации', { index: 0 }),
    iDПользователя: attr('ID Пользователя', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dokumentooborot-kr3-сотрудники', 'ФИО Сотрудника', {
      фИОСотрудника: attr('ФИО Сотрудника', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИОСотрудника' }),
    логин: attr('Логин', { index: 4 }),
    пароль: attr('Пароль', { index: 5 }),
    тЧПрава: hasMany('i-i-s-dokumentooborot-kr3-т-ч-права', 'Права пользователя', {
      праваПол: attr('Права пользователя', { index: 0 })
    })
  });

  modelClass.defineProjection('АвПользователиL', 'i-i-s-dokumentooborot-kr3-ав-пользователи', {
    датаРегистрации: attr('Дата регистрации', { index: 0 }),
    iDПользователя: attr('ID Пользователя', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dokumentooborot-kr3-сотрудники', 'ФИО Сотрудника', {
      фИОСотрудника: attr('ФИО Сотрудника', { index: 2 })
    }, { index: -1, hidden: true }),
    логин: attr('Логин', { index: 3 }),
    пароль: attr('Пароль', { index: 4 })
  });
};
