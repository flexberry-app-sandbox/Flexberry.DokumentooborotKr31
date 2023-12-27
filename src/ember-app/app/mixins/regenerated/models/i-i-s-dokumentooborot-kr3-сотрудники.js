import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСотрудника: DS.attr('number'),
  датаПриема: DS.attr('date'),
  зарплата: DS.attr('decimal'),
  номерТелефона: DS.attr('number'),
  пол: DS.attr('i-i-s-dokumentooborot-kr3-пол'),
  фИОСотрудника: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-dokumentooborot-kr3-должности', { inverse: null, async: false }),
  отдел: DS.belongsTo('i-i-s-dokumentooborot-kr3-отдел', { inverse: null, async: false })
});

export let ValidationRules = {
  iDСотрудника: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-сотрудники.validations.iDСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаПриема: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-сотрудники.validations.датаПриема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  зарплата: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-сотрудники.validations.зарплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-сотрудники.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-сотрудники.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОСотрудника: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-сотрудники.validations.фИОСотрудника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-сотрудники.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-dokumentooborot-kr3-сотрудники', {
    iDСотрудника: attr('ID Сотрудника', { index: 0 }),
    фИОСотрудника: attr('ФИО сотрудника', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    датаПриема: attr('Дата приема', { index: 4 }),
    должности: belongsTo('i-i-s-dokumentooborot-kr3-должности', 'Должности', {
      должность: attr('Должность', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'должность' }),
    отдел: belongsTo('i-i-s-dokumentooborot-kr3-отдел', 'Отдел', {
      наименование: attr('Отдел', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' }),
    зарплата: attr('Зарплата', { index: 9 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-dokumentooborot-kr3-сотрудники', {
    iDСотрудника: attr('ID Сотрудника', { index: 0 }),
    фИОСотрудника: attr('ФИО Сотрудника', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    датаПриема: attr('Дата приема', { index: 4 }),
    должности: belongsTo('i-i-s-dokumentooborot-kr3-должности', 'Должность', {
      должность: attr('Должность', { index: 5 })
    }, { index: -1, hidden: true }),
    отдел: belongsTo('i-i-s-dokumentooborot-kr3-отдел', 'Отдел', {
      наименование: attr('Отдел', { index: 6 })
    }, { index: -1, hidden: true }),
    зарплата: attr('Зарплата', { index: 7 })
  });
};
