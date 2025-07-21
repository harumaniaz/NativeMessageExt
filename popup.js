document.getElementById('sendButton').addEventListener('click', () => {
  const message = { command: "sayHello" };

  chrome.runtime.sendNativeMessage(
    "com.yourcompany.NativeMessageApp", // ←ここはあなたのホスト名に置き換えて
    message,
    (response) => {
      document.getElementById('response').innerText =
        response ? JSON.stringify(response) : "No response";
    }
  );
});