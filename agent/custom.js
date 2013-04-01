/*!
 * Dependencies
 */

var agent = require('./_header')
  , device = require('../device');

/*!
 * Send message
 */

agent.createMessage()
  .device(device)
  .alert('Custom variables')
  .set('id_1', 12345)
  .set('id_2', 'abcdef')
  .send();
