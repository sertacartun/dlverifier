function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

injectScript(chrome.runtime.getURL('inject.js'), 'body');

fetch(chrome.runtime.getURL("testData.json"))
.then(response => response.json())
.then(json => postMessage({
    source:"content.js",
    msg: json
}));

chrome.storage.sync.get('testData', function(result) {
    if(Object.keys(result).length!==0) {
        postMessage({
            source:"content.js",
            msg: result.testData
        })
    }
    else {
        fetch(chrome.runtime.getURL("testData.json"))
        .then(response => response.json())
        .then(result => postMessage({
            source:"content.js",
            msg: result
        }));
    }
});