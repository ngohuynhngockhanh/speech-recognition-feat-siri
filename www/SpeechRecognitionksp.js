/*

    Cordova Plugin Speech Recognition feat. Siri API
    https://github.com/bluedesign/speech-recognition-feat-siri

    by SOHKAKUDO Ltd.
    MIT License

*/

var exec = require('cordova/exec');

var SpeechRecognitionksp = {
  recordButtonTapped: function(limitationSec, onSuccess, onFail) {
    exec(onSuccess, onFail, 'SpeechRecognitionksp', 'recordButtonTapped', [limitationSec]);
  }
};
module.exports = SpeechRecognition