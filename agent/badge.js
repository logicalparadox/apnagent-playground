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
  .alert('Time to set the badge number to 3.')
  .badge(3)
  .send();
