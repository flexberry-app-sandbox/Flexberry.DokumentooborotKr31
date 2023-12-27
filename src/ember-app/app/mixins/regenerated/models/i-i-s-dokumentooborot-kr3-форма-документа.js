import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  наименование: DS.attr('string'),
  содержание: DS.attr('string'),
  авПользователи: DS.belongsTo('i-i-s-dokumentooborot-kr3-ав-пользователи', { inverse: null, async: false }),
  отдел: DS.belongsTo('i-i-s-dokumentooborot-kr3-отдел', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-форма-документа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-форма-документа.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-форма-документа.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  авПользователи: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-форма-документа.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-dokumentooborot-kr3-форма-документа.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаДокументаE', 'i-i-s-dokumentooborot-kr3-форма-документа', {
    дата: attr('Дата составления', { index: 0 }),
    авПользователи: belongsTo('i-i-s-dokumentooborot-kr3-ав-пользователи', 'ID Пользователя', {
      сотрудники: belongsTo('i-i-s-dokumentooborot-kr3-сотрудники', '', {
        фИОСотрудника: attr('Ответственный документа', { index: 2 }),
        отдел: belongsTo('i-i-s-dokumentooborot-kr3-отдел', '', {
          наименование: attr('Отдел отправителя', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'iDПользователя' }),
    наименование: attr('Наименование документа', { index: 4 }),
    содержание: attr('Содержание документа', { index: 5 }),
    отдел: belongsTo('i-i-s-dokumentooborot-kr3-отдел', 'Отдел получателя', {
      наименование: attr('Отдел получателя', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ФормаДокументаL', 'i-i-s-dokumentooborot-kr3-форма-документа', {
    дата: attr('Дата составления', { index: 0 }),
    авПользователи: belongsTo('i-i-s-dokumentooborot-kr3-ав-пользователи', 'Ответственный документа', {
      сотрудники: belongsTo('i-i-s-dokumentooborot-kr3-сотрудники', '', {
        фИОСотрудника: attr('Ответственный документа', { index: 1 }),
        отдел: belongsTo('i-i-s-dokumentooborot-kr3-отдел', '', {
          наименование: attr('Отдел отправителя', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    наименование: attr('Наименование документа', { index: 3 }),
    содержание: attr('Содержание документа', { index: 4 }),
    отдел: belongsTo('i-i-s-dokumentooborot-kr3-отдел', 'Отдел получателя', {
      наименование: attr('Отдел получателя', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
