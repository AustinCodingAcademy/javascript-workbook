var blue = require("bluetoothctl");
 blue.Bluetooth()
 

 blue.on(blue.bluetoothEvents.Controller, function(controllers){
 console.log('Controllers:' + JSON.stringify(controllers,null,2))
 });


 blue.on(blue.bluetoothEvents.DeviceSignalLevel, function(devices,mac,signal){
     console.log('signal level of:' + mac + ' - ' + signal)

 });

 blue.on(blue.bluetoothEvents.Device, function (devices) {
     console.log('devices:' + JSON.stringify(devices,null,2))
 })

 var hasBluetooth=blue.checkBluetoothController();
 console.log('system has bluetooth controller:' + hasBluetooth)

 if(hasBluetooth) {
     console.log('isBluetooth Ready:' + blue.isBluetoothReady)
     blue.scan(true)
     setTimeout(function(){
         console.log('stopping scan')
         blue.scan(false)
         blue.info('00:0C:8A:8C:D3:71')
     },20000)
 }
