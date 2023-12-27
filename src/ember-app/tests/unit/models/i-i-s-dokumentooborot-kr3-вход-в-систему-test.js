import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot-kr3-вход-в-систему', 'Unit | Model | i-i-s-dokumentooborot-kr3-вход-в-систему', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dokumentooborot-kr3-ав-пользователи',
    'model:i-i-s-dokumentooborot-kr3-вход-в-систему',
    'model:i-i-s-dokumentooborot-kr3-должности',
    'model:i-i-s-dokumentooborot-kr3-отдел',
    'model:i-i-s-dokumentooborot-kr3-рас-док',
    'model:i-i-s-dokumentooborot-kr3-сотрудники',
    'model:i-i-s-dokumentooborot-kr3-т-ч-пользователь',
    'model:i-i-s-dokumentooborot-kr3-т-ч-права',
    'model:i-i-s-dokumentooborot-kr3-т-ч-созд-док',
    'model:i-i-s-dokumentooborot-kr3-т-ч-утверж-док',
    'model:i-i-s-dokumentooborot-kr3-форма-документа',
    'model:i-i-s-dokumentooborot-kr3-хр-док',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
