import { Serializer as ХрДокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dokumentooborot-kr3-хр-док';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ХрДокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
