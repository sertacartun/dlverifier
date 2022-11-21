function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

injectScript(chrome.runtime.getURL('inject.js'), 'body');

window.addEventListener('message', (e) => {
    if (e.data.source == 'popup.js') {
        chrome.storage.sync.get('testData', function (result) {
            if (Object.keys(result).length > 1) {
                postMessage({
                    source: "content.js",
                    msg: result.testData
                })
            }
            else {
                fetch(chrome.runtime.getURL("testData.json"))
                    .then(response => response.json())
                    .then(result => postMessage({
                        source: "content.js",
                        msg: result
                    }));
            }
        })
    }
})