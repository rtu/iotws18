// The config file indicates how your GrovePi sensors are connected,
//    pin   - indicates which socket the sensor is connected to
//    type  - sensor type label, matching with switch() code in mainClient.js
//    attr  - the attribute name in device model that this sensor data is corresponding to
//    val   - the initial value for this attribute
//
// An sample config file looks like below, please take only the sensors that you are using,
// also make sure the attribute name (attr) and initial value (val) are properly set for your case.
// If you have other type of sensor, you can add an entry in this config file, and extend corresponding
// client.js code
//

var exports = module.exports = {};

exports.grovepi = [
  {
    "pin": "A2",
    "type": "RotaryAngleAnalogSensor",
    "attr": "angle",
    "val": 0
  },
  {
    "pin": "A1",
    "type": "LightAnalogSensor",
    "attr": "light",
    "val": 0
  },
  {
    "pin": "D3",
    "type": "Button",
    "attr": "button",
    "val": false
  }
];


// For Wio Node and sensors
// {
//   "pin": "A2",               -- which connector 
//   "type": "IN",              -- type: INPUT or OUTPUT
//   "property": "humidity",    -- type of reading
//   "attr": "humidity",        -- device model attribute
//   "val": 0                   -- default value for a model attribute
// }
exports.wio_node = [
  {
    // Humidity sensor
    "type": "INPUT",
    "pin": "GroveTempHumD1",
    "property": "humidity",
    "attr": "humidity",
    "val": 0
  },
  {
    // Temperature sensor
    "type": "INPUT",
    "pin": "GroveTempHumD1",
    "property": "termperature",
    "attr": "temperature",
    "val": 0
  },
  {
    // Light Sensor
    "type": "INPUT",
    "pin": "GroveLuminanceA0",
    "property": "light",
    "attr": "light",
    "val": 0
  },
  {
    // LED light
    "type": "OUTPUT",  
    "pin": "GenericDOutD1",
    "property": "onoff",
    "attr": "ledonoff",
    "val": "0"
  },
  {
    // LED Bar
    "type": "OUTPUT",  
    "pin": "GroveLEDBarUART0",
    "property": "toggle",
    "attr": "lightlevel",
    "val": "0"
  },
  {
    // Buzzer
    "type": "OUTPUT",  
    "pin": "GroveSpeakerD0",
    "property": "sound_start",
    "attr": "soundfreq",
    "val": "0"
  }
];

exports.wio_iot = {
  "location": "us",
  "token": "678daf8d876b57be49cceee69d69308a"
};

/*
// exports.wio_iot = {
//   "location": "us",
//   "token": "e922a7f9cba75778c840aed07c9ff306"
// };
*/
