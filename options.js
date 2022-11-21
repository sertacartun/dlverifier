chrome.storage.sync.get('testData', function(result) {
    if(Object.keys(result).length>1) createTable(result.testData)
    else {
        fetch(chrome.runtime.getURL("testData.json"))
        .then(response => response.json())
        .then(json => createTable(json));
    }
});

function createTable(testData) {
    var mainDiv = document.querySelector('#confTable')

    var html = `
    <label for="mainObj">Main Tracking Object</label>
    <input id="mainObj" value=${testData.objName}>
    `
    mainDiv.innerHTML += html

    tasks = Object.values(testData.tasks)
    tasks.forEach((e, i) => {
        var html = `
            <div class="task">
                <input class="eventnameinp" value=${e.event_name}>
                <span class="collapse">h</span>
                <span class="rmvtask">x</span>
            </div>

            <div class="confs">
                <input class="urlinp" value=${e.url}>
                <textarea class="exec" type="text" rows="10" placeholder="Execute Code">${e.exec}</textarea>
                <table class="newtbl">
                    <tr>
                        <th>NAME</th>
                        <th>VALUE</th>
                    </tr>
                </table>
            </div>
        `
        mainDiv.innerHTML += html

        e.fields.forEach((e) => {
            var html = `
            <tr class="field">
                <td class="fieldName"><input type='text' value=${e.name}></td>
                <td class="fieldValue"><input type='text' value=${e.value}></td>
            </tr>
            `
            document.querySelectorAll(".newtbl")[i].innerHTML += html
        })

            var html=`<span class="newfield">Add New Field</span>`
            document.querySelectorAll(".confs")[i].innerHTML += html
    });

    helpers(testData)
}

function helpers(testData) {
    
    document.querySelectorAll(".collapse").forEach((e, i) => {
        e.addEventListener("click", () => {
            if (document.querySelectorAll(".confs")[i].style.display != "none") {
                document.querySelectorAll(".confs")[i].style.display = "none"
            } else {
                document.querySelectorAll(".confs")[i].style.display = "block"
            }
        })
    })

    document.querySelectorAll(".rmvtask").forEach((e, i) => {
        e.addEventListener("click", () => {
            taskNo="task"+(i+1)
            delete testData.tasks[taskNo]
            e.parentElement.nextElementSibling.remove()
            e.parentElement.remove()
        })
    })


    document.querySelector(".save").addEventListener("click", function () {
        console.log("clicked")
        testData = {}
        testData.tasks = {}
        testData.objName = document.querySelector("#mainObj").value

        document.querySelectorAll(".task").forEach((e, i) => {
            taskNo = "task" + (i + 1)
            testData.tasks[taskNo] = {}
            testData.tasks[taskNo].fields = []
            testData.tasks[taskNo].event_name = document.querySelectorAll(".eventnameinp")[i].value
            testData.tasks[taskNo].url = document.querySelectorAll(".urlinp")[i].value
            testData.tasks[taskNo].exec = document.querySelectorAll(".exec")[i].value
        })

        document.querySelectorAll(".confs").forEach((e, i) => {
            taskNo = "task" + (i + 1)
            e.querySelectorAll(".field").forEach((e, i) => {
                testData.tasks[taskNo].fields.push({
                    name: e.querySelector(".fieldName>input").value,
                    value: e.querySelector(".fieldValue>input").value
                })
            })
        })
        chrome.storage.sync.set({testData});
    })


}