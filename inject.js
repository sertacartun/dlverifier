var sweetAlert = document.createElement('script')
sweetAlert.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js')
document.head.appendChild(sweetAlert)



jsonData = {
    "objName": "anLib.base.tms.eventCache",
    "website": "tailor-acceptance",
    "tasks": {
        "task1": [
            {
                "exec": `

                `,

                "event_name": "page_view",

                "fields": [
                    {
                        "name": "gender",
                        "value": ".*women.*"
                    },
                    {
                        "name": "name",
                        "value": ".*value.*"
                    },
                    {
                        "name": "name",
                        "value": ".*value.*"
                    },
                    {
                        "name": "name",
                        "value": ".*value.*"
                    },
                    {
                        "name": "name",
                        "value": ".*value.*"
                    }
                ]
            }
        ]
    }
}

if (window.location.href.includes(jsonData.website)) {

    window.onload = (event) => {
        var splitObj = jsonData.objName.split('.')
        splitObj.forEach((e, i) => {
            i == 0 ? eObj = window[e] : eObj = eObj[e]
        });

        for (let i = 0; i < Object.keys(jsonData["tasks"]).length; i++) {

            //SAVE LAST TESTED TASK NUMBER TO LOCALSTORAGE
            if (localStorage.getItem("index") != null) {
                if (localStorage.getItem("index") != i + 1) {
                    eval(jsonData["tasks"]["task" + (i + 1)][0].exec)
                    localStorage.setItem("index", i + 1)
                }
            } else {
                localStorage.setItem("index", 0)
                window.location.reload()
            }


            //START TESTING THE TASKS
            for (let index = 0; index < jsonData["tasks"]["task" + (i + 1)][0].fields.length; index++) {
                eventName = jsonData["tasks"]["task" + (i + 1)][0].event_name
                fieldName = jsonData["tasks"]["task" + (i + 1)][0].fields[index].name
                fieldValue = new RegExp(jsonData["tasks"]["task" + (i + 1)][0].fields[index].value, "i")

                eObj = eObj.filter(e => e.event_name == eventName)

                if (eObj.fieldName) {
                    if (window[jsonData["objName"]][fieldName].match(fieldValue) != null) {
                        swal("Yes!", "Test Passed", "success");
                    } else {
                        swal("No!", "Test Failed", "error");
                    }
                } else {
                    swal("No!", "The required field name was not found in the tracking object. ", "error");
                }
            }
        }
    };
}