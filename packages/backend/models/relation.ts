import * as dynamoose from 'dynamoose'

export const Schema = new dynamoose.Schema({
  name: {
    type: String,
    hashKey: true
  },
  lang: {
    type: String,
    rangeKey: true,
    validate: val => ['en', 'zh'].includes(val)
  },
  extract: String,
  relations: [{
    key: String,
    value: Number
  }] as any
}, {
  timestamps: true,
  expires: 30 * 24 * 60 * 60 // 30 days
})

export default dynamoose.model('Relation', Schema)
