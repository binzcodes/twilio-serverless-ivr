# Serverless & Twilio - IVR

[Twilio](https://www.twilio.com) allows developers to easily integrate phone calls, SMS and more into using [TwiML](https://www.twilio.com/docs/glossary/what-is-twilio-markup-language-twiml).

This project deploys a serverless function using Twilio serverless runtime as the provider. The function responds with TwiML instructions to [forward the phone call](https://www.twilio.com/docs/voice/tutorials/call-forwarding) to any overseas number.

## Install
Install Twilio Node.js Provider Plugin & Service Dependencies
```
npm i -g serverless
npm i
```

Set environment variables locally (Twilio account credentials can be found [here](https://twilio.com/console/)).

- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `MY_PHONE_NUMBER`


## Deploy
Deploy directly with 
`sls deploy`

Ensure the function responds with expected Twiml with 
`sls invoke -f forward-call`
Expected response

```xml
<?xml version="1.0" encoding="UTF-8"?><Response><Say>Hello...</Say><Dial>+441...</Dial></Response>
```

Configure phone numbers in [Twilio Console](https://console.twilio.com/) selecting  Function and this service

## TODO:
- fix [github actions](https://github.com/marketplace/actions/serverless)

## Further reading
* [github.com/twilio-labs/serverless-framework-integration](https://github.com/twilio-labs/serverless-framework-integration).
- [serverless docs on CI/CD](https://www.serverless.com/framework/docs/guides/cicd/running-in-your-own-cicd)
- Due to poor actions support from sls it's likely sensible to [move to twilio-cli](https://www.twilio.com/blog/an-introduction-to-ci-cd-for-twilio-functions-using-github-actions) or host TwiML function on aws