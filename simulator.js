const mqtt = require('mqtt');
const installAddon = require('./index');

const manager = {
  addAdapter() {},
  emit(event, data) {
    console.log('>', event, data ? data.value : data);
  },
  handleDeviceAdded(device) {
    console.log('+', device.id);
  },
	getGatewayVersion(){
		return 1;
	},
	getUserProfile(){
		return {};
	},
	getPreferences(){
		return {};
	},
	sendPropertyChangedNotification(){
		return {};
	}
};
const manifest = {
  moziot: {
    config: {
      mqtt: 'mqtt://localhost',
      prefix: 'zigbee2mqtt',
			serial_port:'/dev/ttyACM0',
			auto_update:true,
			debug:true,
    },
  },
};

installAddon(manager, manifest);
