import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot-kr3-т-ч-созд-док', 'Unit | Serializer | i-i-s-dokumentooborot-kr3-т-ч-созд-док', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dokumentooborot-kr3-т-ч-созд-док',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dokumentooborot-kr3-пол',
    'transform:i-i-s-dokumentooborot-kr3-права-пол',
    'transform:i-i-s-dokumentooborot-kr3-утверждение',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
