chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "launch") {
    chrome.runtime.sendNativeMessage(
      "com.my.nma",
      { text: message.text },
      (response) => {
        if (chrome.runtime.lastError) {
          sendResponse({ reply: "Native Error: " + chrome.runtime.lastError.message });
        } else {
          sendResponse({ reply: response.reply || JSON.stringify(response) });
        }
      }
    );
    return true; // 非同期で sendResponse を使うには必要
  }
});