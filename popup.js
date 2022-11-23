let startTesting = document.getElementById("startTesting");
let loadingScreen = document.querySelector('.black')

  chrome.storage.sync.get('status',(e)=>{
    if(e.status=='active'){
      loadingScreen.style.display='flex'
    }else if ('passive') {
      loadingScreen.style.display='none'
    }
  })


startTesting.addEventListener("click", async () => {

  chrome.storage.sync.set({status:'active'})
  loadingScreen.style.display='flex'

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: function(){
      window.postMessage({ source:'popup.js', msg:'active'}) 
    }
  });
  
});

//chrome.storage.sync.get("xxx", ({ xxx }) => {});