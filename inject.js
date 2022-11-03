jsonData = {
    "objName": "dataLayer",
    "website": "mytheresa",
    "tasks": {
        "task1": {
            "exec": `

                `,

            "event_name": "eeProductDetailView_old",

            "fields": [
                {
                    "name": "ecommerce.detail.products.0.id",
                    "value": ".*P00.*"
                },
                {
                    "name": "atom_prd",
                    "value": ".*value.*"
                },
                {
                    "name": "consent",
                    "value": ".*value.*"
                },
                {
                    "name": "myth_persistent_eh",
                    "value": ".*value.*"
                },
                {
                    "name": "noproblem",
                    "value": ".*value.*"
                }
            ]
        }
    }
}

if (window.location.href.includes(jsonData.website)) { // if the URL includes jsonData.webSite variable

    if (jsonData.objName.split('.').length > 1) { // flatten object if it is more than 1 dimension
        var splitObj = jsonData.objName.split('.')
        splitObj.forEach((e, i) => {
            i == 0 ? eObj = window[e] : eObj = eObj[e]
        });
    } else { // if it is 1 dimensional
        eObj = window[jsonData.objName]
    }

    function readData(dlv) {
        if (dlv.split('.').length > 1) {
            var dlv = dlv.split('.')
            dlv.forEach((e, i) => {
                i == 0 ? dlv = eObj[0][e] : dlv = dlv[e]
            });
        } else {
            var dlv = eObj[0][dlv]
        }
        return dlv
    }

    function runTest(taskid) { // main function to run tests

        var taskid = taskid

        eval(jsonData.tasks[taskid].exec)

        var eventName = jsonData.tasks[taskid].event_name

        eObj = eObj.filter(e => e.event_name == eventName || e.event == eventName)

        if (eObj.length > 0) { // if there is matching event

            taskStatus = {}
            taskStatus[taskid] = []

            jsonData.tasks[taskid].fields.forEach((e, i) => { //loop in expected fields
                var fieldName = e.name
                var fieldValue = new RegExp(e.value, "i")
                //create status object for every field
                taskStatus[taskid][i] = {
                    name: undefined,
                    expectedName: undefined,
                    value: undefined,
                    expectedValue: undefined,
                    currentValue: undefined,
                    status: undefined
                }

                if (readData(fieldName)) { // if there is expected variable in the event
                    taskStatus[taskid][i].name = true
                    taskStatus[taskid][i].expectedName = fieldName

                    if (readData(fieldName).match(fieldValue)) { // if expected variable matching with expected value
                        taskStatus[taskid][i].value = true
                        taskStatus[taskid][i].expectedValue = e.value
                        taskStatus[taskid][i].currentValue = readData(fieldName)
                        taskStatus[taskid][i].status = 'passed'
                    } else {
                        taskStatus[taskid][i].value = false
                        taskStatus[taskid][i].expectedValue = e.value
                        taskStatus[taskid][i].currentValue = readData(fieldName)
                        taskStatus[taskid][i].status = 'failed'
                    }
                } else { // if there is not expected variable in the event
                    taskStatus[taskid][i].name = false
                    taskStatus[taskid][i].expectedName = fieldName
                }
            }) // end of the loop in fields

            localStorage.setItem('dl_verifier', JSON.stringify(taskStatus))

        } else {
            // if there is no matching event
            taskStatus = {}
            taskStatus[taskid] = 'no event'
            localStorage.setItem('dl_verifier', JSON.stringify(taskStatus))
            //setTimeout(runTest(taskid), 1500) // try 1500 ms later again
        }

        taskid = 'task' + parseInt(taskid.split('task')[1]) + 1

        // pass to the next task if there is
        if (jsonData.tasks[taskid]) {
            runTest(taskid)
        }

    } // End of the runTest function

    runTest('task1')

} // End of the 'if URL matches' statement 