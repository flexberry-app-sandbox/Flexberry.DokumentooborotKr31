import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



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

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
