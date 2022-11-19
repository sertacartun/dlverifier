fetch(chrome.runtime.getURL("testData.json"))
    .then(response => response.json())
    .then(json => createTable(json));

function createTable(testData) {
    var mainDiv = document.querySelector('#confTable')

    Object.values(testData.tasks).forEach((e,i) => {
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
                    <th>NAME</th>
                    <th>VALUE</th>
                </table>
            </div>
        `
        mainDiv.innerHTML += html

        e.fields.forEach((e) => {
            var html=`
            <tr>
                <td><input type='text' value=${e.name}></td>
                <td><input type='text' value=${e.value}></td>
            </tr>
            `
            document.querySelectorAll(".newtbl")[i].innerHTML += html
        })
    });

    helpers()
}

function helpers(){

    document.querySelectorAll(".collapse").forEach((e,i)=>{
        e.addEventListener("click",()=>{
            if(document.querySelectorAll(".confs")[i].style.display!="none"){
                document.querySelectorAll(".confs")[i].style.display="none"
            }else{
                document.querySelectorAll(".confs")[i].style.display="block"
            }
        })
    })

    document.querySelectorAll(".rmvtask").forEach((e,i)=>{
        e.addEventListener("click",()=>{
                document.querySelectorAll(".task")[i].style.display="none"
        })
    })


}
