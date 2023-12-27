import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dokumentooborot-kr3-ав-пользователи-l');
  this.route('i-i-s-dokumentooborot-kr3-ав-пользователи-e',
  { path: 'i-i-s-dokumentooborot-kr3-ав-пользователи-e/:id' });
  this.route('i-i-s-dokumentooborot-kr3-ав-пользователи-e.new',
  { path: 'i-i-s-dokumentooborot-kr3-ав-пользователи-e/new' });
  this.route('i-i-s-dokumentooborot-kr3-вход-в-систему-l');
  this.route('i-i-s-dokumentooborot-kr3-вход-в-систему-e',
  { path: 'i-i-s-dokumentooborot-kr3-вход-в-систему-e/:id' });
  this.route('i-i-s-dokumentooborot-kr3-вход-в-систему-e.new',
  { path: 'i-i-s-dokumentooborot-kr3-вход-в-систему-e/new' });
  this.route('i-i-s-dokumentooborot-kr3-должности-l');
  this.route('i-i-s-dokumentooborot-kr3-должности-e',
  { path: 'i-i-s-dokumentooborot-kr3-должности-e/:id' });
  this.route('i-i-s-dokumentooborot-kr3-должности-e.new',
  { path: 'i-i-s-dokumentooborot-kr3-должности-e/new' });
  this.route('i-i-s-dokumentooborot-kr3-отдел-l');
  this.route('i-i-s-dokumentooborot-kr3-отдел-e',
  { path: 'i-i-s-dokumentooborot-kr3-отдел-e/:id' });
  this.route('i-i-s-dokumentooborot-kr3-отдел-e.new',
  { path: 'i-i-s-dokumentooborot-kr3-отдел-e/new' });
  this.route('i-i-s-dokumentooborot-kr3-рас-док-l');
  this.route('i-i-s-dokumentooborot-kr3-рас-док-e',
  { path: 'i-i-s-dokumentooborot-kr3-рас-док-e/:id' });
  this.route('i-i-s-dokumentooborot-kr3-рас-док-e.new',
  { path: 'i-i-s-dokumentooborot-kr3-рас-док-e/new' });
  this.route('i-i-s-dokumentooborot-kr3-сотрудники-l');
  this.route('i-i-s-dokumentooborot-kr3-сотрудники-e',
  { path: 'i-i-s-dokumentooborot-kr3-сотрудники-e/:id' });
  this.route('i-i-s-dokumentooborot-kr3-сотрудники-e.new',
  { path: 'i-i-s-dokumentooborot-kr3-сотрудники-e/new' });
  this.route('i-i-s-dokumentooborot-kr3-форма-документа-l');
  this.route('i-i-s-dokumentooborot-kr3-форма-документа-e',
  { path: 'i-i-s-dokumentooborot-kr3-форма-документа-e/:id' });
  this.route('i-i-s-dokumentooborot-kr3-форма-документа-e.new',
  { path: 'i-i-s-dokumentooborot-kr3-форма-документа-e/new' });
  this.route('i-i-s-dokumentooborot-kr3-хр-док-l');
  this.route('i-i-s-dokumentooborot-kr3-хр-док-e',
  { path: 'i-i-s-dokumentooborot-kr3-хр-док-e/:id' });
  this.route('i-i-s-dokumentooborot-kr3-хр-док-e.new',
  { path: 'i-i-s-dokumentooborot-kr3-хр-док-e/new' });
});

export default Router;
