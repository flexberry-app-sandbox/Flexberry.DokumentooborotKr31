import { Serializer as РасДокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dokumentooborot-kr3-рас-док';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасДокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
