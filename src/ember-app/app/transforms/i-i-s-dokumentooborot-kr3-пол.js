import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолEnum from '../enums/i-i-s-dokumentooborot-kr3-пол';

export default FlexberryEnum.extend({
  enum: ПолEnum,
  sourceType: 'IIS.DokumentooborotKr3.Пол'
});
