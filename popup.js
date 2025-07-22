document.getElementById('sendButton').addEventListener('click', () => {
    const input = document.getElementById("inputText");
    const message = input.value;

    chrome.runtime.sendMessage({ action: "launch", text: message }, (response) => {
      document.getElementById('responseArea').innerText = response?.reply ?? "No response";
    });
});