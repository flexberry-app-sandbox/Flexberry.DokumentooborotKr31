import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.caption'),
          title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.title'),
          children: [{
            link: 'i-i-s-dokumentooborot-kr3-должности-l',
            caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-kr3-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-kr3-должности-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot-kr3-отдел-l',
            caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-kr3-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-kr3-отдел-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot-kr3-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-kr3-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-kr3-сотрудники-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.администратору-системы.caption'),
          title: i18n.t('forms.application.sitemap.администратору-системы.title'),
          children: [{
            link: 'i-i-s-dokumentooborot-kr3-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.администратору-системы.i-i-s-dokumentooborot-kr3-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.администратору-системы.i-i-s-dokumentooborot-kr3-сотрудники-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot-kr3-ав-пользователи-l',
            caption: i18n.t('forms.application.sitemap.администратору-системы.i-i-s-dokumentooborot-kr3-ав-пользователи-l.caption'),
            title: i18n.t('forms.application.sitemap.администратору-системы.i-i-s-dokumentooborot-kr3-ав-пользователи-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.пользователю.caption'),
          title: i18n.t('forms.application.sitemap.пользователю.title'),
          children: [{
            link: 'i-i-s-dokumentooborot-kr3-вход-в-систему-l',
            caption: i18n.t('forms.application.sitemap.пользователю.i-i-s-dokumentooborot-kr3-вход-в-систему-l.caption'),
            title: i18n.t('forms.application.sitemap.пользователю.i-i-s-dokumentooborot-kr3-вход-в-систему-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.пользователю.документация.caption'),
            title: i18n.t('forms.application.sitemap.пользователю.документация.title'),
            children: [{
              link: 'i-i-s-dokumentooborot-kr3-форма-документа-l',
              caption: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-kr3-форма-документа-l.caption'),
              title: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-kr3-форма-документа-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-dokumentooborot-kr3-рас-док-l',
              caption: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-kr3-рас-док-l.caption'),
              title: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-kr3-рас-док-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-dokumentooborot-kr3-хр-док-l',
              caption: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-kr3-хр-док-l.caption'),
              title: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-kr3-хр-док-l.title'),
              icon: 'phone',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})