chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === "launch") {
    chrome.runtime.sendNativeMessage(
      "com.my.nma",
      { command: "launch" },
      (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          sendResponse({ reply: "Error: " + chrome.runtime.lastError.message });
        } else {
          sendResponse({ reply: response });
        }
      }
    );

    // Important: Keep the message channel open
    return true;
  }
});