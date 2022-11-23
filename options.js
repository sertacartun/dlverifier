chrome.storage.sync.get('testData', function (result) {
    if (Object.keys(result).length == 1) createTable(result.testData)
    else {
        fetch(chrome.runtime.getURL("testData.json"))
            .then(response => response.json())
            .then(json => createTable(json));
    }
});

var mainDiv = document.querySelector('#confTable')

function createTable(testData) {

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
                        <th style='width:20px'>Fx</th>
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
                <td class="fieldFx"><span class="rmvfield"> - </span></td>
            </tr>
            `
            document.querySelectorAll(".newtbl")[i].innerHTML += html
        })

        var html = `<span class="newfield">Add New Field</span>`
        document.querySelectorAll(".confs")[i].innerHTML += html
    });

    listeners()
}

function listeners() {

    let collapse = (i) => {
        if (document.querySelectorAll(".confs")[i].style.display != "none")
            document.querySelectorAll(".confs")[i].style.display = "none"
        else document.querySelectorAll(".confs")[i].style.display = "block"
    }

    let removeTask = (e) => {
        e.parentElement.nextElementSibling.remove()
        e.parentElement.remove()
    }

    let removeField = (e) => {
        e.parentElement.parentElement.parentElement.remove()
    }

    let newField = (i) => {
        var tbody = document.createElement('tbody')
        tbody.innerHTML = `
            <tr class='field'>
                <td class="fieldName"><input type='text' value=''></td>
                <td class="fieldValue"><input type='text' value=''></td>
                <td class="fieldFx"><span class="rmvfield"> - </span></td>
            </tr>
            `
        document.querySelectorAll(".newtbl")[i].appendChild(tbody)
        tbody.querySelector(".rmvfield").addEventListener("click", (e) => { removeField(e.target) })
    }

    let addTask = () => {
        var task = document.createElement('div')
        task.setAttribute('class', 'task')
        task.innerHTML = `
            <input class="eventnameinp" value="">
            <span class="collapse">h</span>
            <span class="rmvtask">x</span>
    `
        mainDiv.appendChild(task)

        var confs = document.createElement('div')
        confs.setAttribute('class', 'confs')
        confs.innerHTML = `
        <input class="urlinp" value="">
        <textarea class="exec" type="text" rows="10" placeholder="Execute Code"></textarea>
        <table class="newtbl">
            <tbody>
                <tr>
                    <th>NAME</th>
                    <th>VALUE</th>
                    <th style='width:20px'>Fx</th>
                </tr>
            </tbody>
            
            <tbody>
                <tr class="field">
                    <td class="fieldName"><input type='text' value=""></td>
                    <td class="fieldValue"><input type='text' value=""></td>
                    <td class="fieldFx"><span class="rmvfield"> - </span></td>
                </tr>
            </tbody>
        </table>
        <span class="newfield">Add New Field</span>
`

        mainDiv.appendChild(confs)
        
        var index = document.querySelectorAll('.task').length-1
        task.querySelector('.collapse').addEventListener('click',()=>{collapse(index)})
        task.querySelector(".rmvtask").addEventListener("click", (e) => { removeTask(e.target) })
        confs.querySelector(".rmvfield").addEventListener("click", (e) => { removeField(e.target) })
        confs.querySelector(".newfield").addEventListener("click", () => { newField(index) })

    }

    let saveAll = () => {
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
        chrome.storage.sync.set({ testData });
    }

    let collapseAll = () => {
        document.querySelectorAll(".confs").forEach((e)=>{
            e.style.display='none'
        })
    }

    

    document.querySelectorAll(".collapse").forEach((e, i) => { e.addEventListener("click", () => { collapse(i) }) })
    document.querySelectorAll(".rmvtask").forEach((e) => { e.addEventListener("click", () => { removeTask(e) }) })
    document.querySelectorAll(".rmvfield").forEach((e) => { e.addEventListener("click", () => { removeField(e) }) })
    document.querySelectorAll(".newfield").forEach((e, i) => { e.addEventListener("click", () => { newField(i) }) })
    document.querySelector(".collapseAll").addEventListener("click",collapseAll)
    document.querySelector(".add").addEventListener("click", addTask)
    document.querySelector(".save").addEventListener("click", saveAll)

}