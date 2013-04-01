/*!
 * Dependencies
 */

var agent = require('./_header')
  , device = require('../device');

/*!
 * Send messages
 */

// set default to one day
agent.set('expires', '1d');

// send using default 1d
agent.createMessage()
  .device(device)
  .alert('You were invited to a new event.')
  .send();

// use custom for 1 hour
agent.createMessage()
  .device(device)
  .alert('New Event @ 4pm')
  .expires('1h')
  .send();

// set custom no expiration
agent.createMessage()
  .device(device)
  .alert('Event happening now!')
  .expires(0)
  .send();
