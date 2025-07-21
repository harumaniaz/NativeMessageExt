document.getElementById('sendButton').addEventListener('click', () => {
  var port = chrome.runtime.connectNative('com.yourcompany.NativeMessageApp');

  port.onMessage.addListener(function (msg) {
    console.log('Received: ' + msg);
  });

  port.onDisconnect.addListener(function () {
    console.log('Disconnected');
  });

  try {
    port.postMessage({text: 'Hello, World!'});
  } catch (error) {
    console.error('Error sending message:', error);
  }
});