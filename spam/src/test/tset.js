navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    if (device.kind === "videoinput") {
      console.log(`${device.label}: ${device.deviceId}`);
    }
  });
});
