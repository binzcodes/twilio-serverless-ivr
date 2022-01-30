exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse()
  twiml.say('Hello, this call is being forwarded.')
  twiml.dial(context.MY_PHONE_NUMBER);
  callback(null, twiml);
};
