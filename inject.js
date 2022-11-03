jsonData = {
    "objName": "anLib.base.tms.eventCache",
    "website": "tailor-acceptance",
    "tasks": {
        "task1": {
            "exec": `

                `,

            "event_name": "page_view",

            "fields": [
                {
                    "name": "atom_list",
                    "value": ".*women.*"
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
                    "name": "object",
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

    function runTest(taskid) { // main function to run tests

        var taskid = taskid

        eval(jsonData.tasks[taskid].exec)

        var eventName = jsonData.tasks[taskid].event_name

        var eObj = eObj.filter(e => e.event_name == eventName)

        if (eObj.length > 0) { // if there is matching event
            jsonData.tasks[taskid].fields.forEach((e) => { //loop in expected fields

                var fieldName = e.name
                var fieldValue = new RegExp(e.value, "i")

                //create status object for every field
                var taskStatus = {}
                taskStatus.eventName = eventName
                taskStatus[taskid] = {
                    name: undefined,
                    expectedName: undefined,

                    value: undefined,
                    expectedValue: undefined,
                    currentValue: undefined,

                    status: undefined
                }

                if (eObj[fieldName]) { // if there is expected variable in the event
                    taskStatus.taskid.name = true
                    taskStatus.taskid.expectedName = fieldName

                    if (eObj[fieldName].match(fieldValue)) { // if expected variable matching with expected value
                        taskStatus.taskid.value = true
                        taskStatus.taskid.expectedValue = e.value
                        taskStatus.taskid.currentValue = eObj.fieldValue
                        taskStatus.taskid.status = 'passed'
                    } else {
                        taskStatus.taskid.value = false
                        taskStatus.taskid.expectedValue = e.value
                        taskStatus.taskid.currentValue = eObj.fieldValue
                        taskStatus.taskid.status = 'failed'
                    }
                } else { // if there is not expected variable in the event
                    taskStatus.taskid.name = false
                    taskStatus.taskid.expectedName = fieldName
                }
            }) // end of the loop in fields

            localStorage.setItem('dl_verifier', JSON.stringify(taskStatus))

        } else {
            // if there is no matching event
            taskStatus[taskid] = 'no event'
            localStorage.setItem('dl_verifier', JSON.stringify(taskStatus))
            setTimeout(runTest(taskid), 1500) // try 1500 ms later again
        }

        taskid = 'task' + parseInt(taskid.split('task')[1]) + 1

        // pass to the next task if there is
        if (jsonData.tasks[taskid]) {
            runTest(taskid)
        }

    } // End of the runTest function

    runTest('task1')

} // End of the 'if URL matches' statement 
