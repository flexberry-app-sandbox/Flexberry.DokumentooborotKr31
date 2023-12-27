import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-dokumentooborot-kr3-вход-в-систему-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-dokumentooborot-kr3-т-ч-пользователь+авПользователи':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'iDПользователя',
            required: true,
            relationName: 'авПользователи',
            projection: 'АвПользователиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
