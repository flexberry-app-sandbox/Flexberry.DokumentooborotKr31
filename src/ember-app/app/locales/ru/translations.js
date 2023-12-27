import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDokumentooborotKr3АвПользователиLForm from './forms/i-i-s-dokumentooborot-kr3-ав-пользователи-l';
import IISDokumentooborotKr3ВходВСистемуLForm from './forms/i-i-s-dokumentooborot-kr3-вход-в-систему-l';
import IISDokumentooborotKr3ДолжностиLForm from './forms/i-i-s-dokumentooborot-kr3-должности-l';
import IISDokumentooborotKr3ОтделLForm from './forms/i-i-s-dokumentooborot-kr3-отдел-l';
import IISDokumentooborotKr3РасДокLForm from './forms/i-i-s-dokumentooborot-kr3-рас-док-l';
import IISDokumentooborotKr3СотрудникиLForm from './forms/i-i-s-dokumentooborot-kr3-сотрудники-l';
import IISDokumentooborotKr3ФормаДокументаLForm from './forms/i-i-s-dokumentooborot-kr3-форма-документа-l';
import IISDokumentooborotKr3ХрДокLForm from './forms/i-i-s-dokumentooborot-kr3-хр-док-l';
import IISDokumentooborotKr3АвПользователиEForm from './forms/i-i-s-dokumentooborot-kr3-ав-пользователи-e';
import IISDokumentooborotKr3ВходВСистемуEForm from './forms/i-i-s-dokumentooborot-kr3-вход-в-систему-e';
import IISDokumentooborotKr3ДолжностиEForm from './forms/i-i-s-dokumentooborot-kr3-должности-e';
import IISDokumentooborotKr3ОтделEForm from './forms/i-i-s-dokumentooborot-kr3-отдел-e';
import IISDokumentooborotKr3РасДокEForm from './forms/i-i-s-dokumentooborot-kr3-рас-док-e';
import IISDokumentooborotKr3СотрудникиEForm from './forms/i-i-s-dokumentooborot-kr3-сотрудники-e';
import IISDokumentooborotKr3ФормаДокументаEForm from './forms/i-i-s-dokumentooborot-kr3-форма-документа-e';
import IISDokumentooborotKr3ХрДокEForm from './forms/i-i-s-dokumentooborot-kr3-хр-док-e';
import IISDokumentooborotKr3АвПользователиModel from './models/i-i-s-dokumentooborot-kr3-ав-пользователи';
import IISDokumentooborotKr3ВходВСистемуModel from './models/i-i-s-dokumentooborot-kr3-вход-в-систему';
import IISDokumentooborotKr3ДолжностиModel from './models/i-i-s-dokumentooborot-kr3-должности';
import IISDokumentooborotKr3ОтделModel from './models/i-i-s-dokumentooborot-kr3-отдел';
import IISDokumentooborotKr3РасДокModel from './models/i-i-s-dokumentooborot-kr3-рас-док';
import IISDokumentooborotKr3СотрудникиModel from './models/i-i-s-dokumentooborot-kr3-сотрудники';
import IISDokumentooborotKr3ТЧПользовательModel from './models/i-i-s-dokumentooborot-kr3-т-ч-пользователь';
import IISDokumentooborotKr3ТЧПраваModel from './models/i-i-s-dokumentooborot-kr3-т-ч-права';
import IISDokumentooborotKr3ТЧСоздДокModel from './models/i-i-s-dokumentooborot-kr3-т-ч-созд-док';
import IISDokumentooborotKr3ТЧУтвержДокModel from './models/i-i-s-dokumentooborot-kr3-т-ч-утверж-док';
import IISDokumentooborotKr3ФормаДокументаModel from './models/i-i-s-dokumentooborot-kr3-форма-документа';
import IISDokumentooborotKr3ХрДокModel from './models/i-i-s-dokumentooborot-kr3-хр-док';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dokumentooborot-kr3-ав-пользователи': IISDokumentooborotKr3АвПользователиModel,
    'i-i-s-dokumentooborot-kr3-вход-в-систему': IISDokumentooborotKr3ВходВСистемуModel,
    'i-i-s-dokumentooborot-kr3-должности': IISDokumentooborotKr3ДолжностиModel,
    'i-i-s-dokumentooborot-kr3-отдел': IISDokumentooborotKr3ОтделModel,
    'i-i-s-dokumentooborot-kr3-рас-док': IISDokumentooborotKr3РасДокModel,
    'i-i-s-dokumentooborot-kr3-сотрудники': IISDokumentooborotKr3СотрудникиModel,
    'i-i-s-dokumentooborot-kr3-т-ч-пользователь': IISDokumentooborotKr3ТЧПользовательModel,
    'i-i-s-dokumentooborot-kr3-т-ч-права': IISDokumentooborotKr3ТЧПраваModel,
    'i-i-s-dokumentooborot-kr3-т-ч-созд-док': IISDokumentooborotKr3ТЧСоздДокModel,
    'i-i-s-dokumentooborot-kr3-т-ч-утверж-док': IISDokumentooborotKr3ТЧУтвержДокModel,
    'i-i-s-dokumentooborot-kr3-форма-документа': IISDokumentooborotKr3ФормаДокументаModel,
    'i-i-s-dokumentooborot-kr3-хр-док': IISDokumentooborotKr3ХрДокModel
  },

  'application-name': 'Информация о сотрудниках',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Информация о сотрудниках',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Информация о сотрудниках',
          title: 'Dokumentooborot kr3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'информация-о-сотрудниках': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках',
          'i-i-s-dokumentooborot-kr3-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-dokumentooborot-kr3-отдел-l': {
            caption: 'Отделы',
            title: ''
          },
          'i-i-s-dokumentooborot-kr3-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        'администратору-системы': {
          caption: 'Администратору системы',
          title: 'Администратору системы',
          'i-i-s-dokumentooborot-kr3-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-dokumentooborot-kr3-ав-пользователи-l': {
            caption: 'Авторизованные пользователи',
            title: 'Ав пользователи'
          }
        },
        пользователю: {
          caption: 'Пользователю',
          title: 'Пользователю',
          'i-i-s-dokumentooborot-kr3-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: 'Вход в систему'
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-dokumentooborot-kr3-форма-документа-l': {
              caption: 'Форма Документа',
              title: 'Форма документа'
            },
            'i-i-s-dokumentooborot-kr3-рас-док-l': {
              caption: 'Рассмотренные документы',
              title: 'Рас док'
            },
            'i-i-s-dokumentooborot-kr3-хр-док-l': {
              caption: 'Хранение документов',
              title: 'Хр док'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-dokumentooborot-kr3-ав-пользователи-l': IISDokumentooborotKr3АвПользователиLForm,
    'i-i-s-dokumentooborot-kr3-вход-в-систему-l': IISDokumentooborotKr3ВходВСистемуLForm,
    'i-i-s-dokumentooborot-kr3-должности-l': IISDokumentooborotKr3ДолжностиLForm,
    'i-i-s-dokumentooborot-kr3-отдел-l': IISDokumentooborotKr3ОтделLForm,
    'i-i-s-dokumentooborot-kr3-рас-док-l': IISDokumentooborotKr3РасДокLForm,
    'i-i-s-dokumentooborot-kr3-сотрудники-l': IISDokumentooborotKr3СотрудникиLForm,
    'i-i-s-dokumentooborot-kr3-форма-документа-l': IISDokumentooborotKr3ФормаДокументаLForm,
    'i-i-s-dokumentooborot-kr3-хр-док-l': IISDokumentooborotKr3ХрДокLForm,
    'i-i-s-dokumentooborot-kr3-ав-пользователи-e': IISDokumentooborotKr3АвПользователиEForm,
    'i-i-s-dokumentooborot-kr3-вход-в-систему-e': IISDokumentooborotKr3ВходВСистемуEForm,
    'i-i-s-dokumentooborot-kr3-должности-e': IISDokumentooborotKr3ДолжностиEForm,
    'i-i-s-dokumentooborot-kr3-отдел-e': IISDokumentooborotKr3ОтделEForm,
    'i-i-s-dokumentooborot-kr3-рас-док-e': IISDokumentooborotKr3РасДокEForm,
    'i-i-s-dokumentooborot-kr3-сотрудники-e': IISDokumentooborotKr3СотрудникиEForm,
    'i-i-s-dokumentooborot-kr3-форма-документа-e': IISDokumentooborotKr3ФормаДокументаEForm,
    'i-i-s-dokumentooborot-kr3-хр-док-e': IISDokumentooborotKr3ХрДокEForm
  },

});

export default translations;
