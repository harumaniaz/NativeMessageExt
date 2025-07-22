document.getElementById('sendButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ command: "launch" }, (response) => {
    document.getElementById('response').innerText = response?.reply ?? "No response";
  });
});