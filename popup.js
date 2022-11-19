let startTesting = document.getElementById("startTesting");
startTesting.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: function(){ window.postMessage({ source:'popup.js', msg:'active' })
    },
  });
});

//chrome.storage.sync.get("xxx", ({ xxx }) => {});