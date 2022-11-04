jsonData = {
    "objName": "window.anLib.base.tms.eventCache",
    "website": "tailor-acceptance",
    "tasks": {
        "task1": {
            "exec": `
            if(window.location.href!='https://tailor-acceptance.mytheresa.com/de/en/men'){
                window.location.href='https://tailor-acceptance.mytheresa.com/de/en/men'
            }else{
                isReady = ()=>{}
            }
                `,

            "event_name": "page_view",

            "fields": [
                {
                    "name": "device.type",
                    "value": "desktop|mobile|tablet"
                },
                {
                    "name": "page.currencyCode",
                    "value": "EUR|USD|GBP"
                },
                {
                    "name": "page.type",
                    "value": "home"
                }
            ]
        },
        "task2": {
            "exec": `

                `,

            "event_name": "add_to_cart",

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

function readData(dlv) {
    var dlv = dlv.split('.')
    if (dlv.includes('window')) {
        dlv.splice(0, 1)
        dlv.forEach((e, i) => { i == 0 ? dlv = window[e] : dlv = dlv[e] });
    } else {
        dlv.forEach((e, i) => { try { i == 0 ? dlv = eventObject[0][e] : dlv = dlv[e] } catch (error) { dlv = undefined } });
    }
    return dlv
}

async function runTest(taskid) { // main function to run tests
    var taskid = taskid
    eval(jsonData.tasks[taskid].exec)
    var eventName = jsonData.tasks[taskid].event_name

    eventObject = readData(jsonData.objName).filter(e => e.event == eventName)

    await isReady()
    

    if (eventObject.length > 0) { // if there is matching event
        taskStatus = JSON.parse(localStorage.getItem('dl_verifier')) || {}
        taskStatus[taskid] = []
        jsonData.tasks[taskid].fields.forEach((e, i) => { //loop in expected fields
            var fieldName = e.name
            var fieldValue = new RegExp(e.value, "i")

            //create status object for every field
            taskStatus[taskid][i] = {
                expectedName: undefined,
                expectedValue: undefined,
                currentValue: undefined,
                status: undefined
            }

            if (readData(fieldName)) { // if there is expected variable in the event
                taskStatus[taskid][i].expectedName = fieldName
                if (readData(fieldName).match(fieldValue)) { // if expected variable matching with expected value
                    taskStatus[taskid][i].expectedValue = e.value
                    taskStatus[taskid][i].currentValue = readData(fieldName)
                    taskStatus[taskid][i].status = 'passed'
                } else {
                    taskStatus[taskid][i].expectedValue = e.value
                    taskStatus[taskid][i].currentValue = readData(fieldName)
                    taskStatus[taskid][i].status = 'failed'
                }
            } else { // if there is not expected variable in the event
                taskStatus[taskid][i].expectedName = fieldName
                taskStatus[taskid][i].status = 'failed'
            }
        }) // end of the loop in fields
        localStorage.setItem('dl_verifier', JSON.stringify(taskStatus))
    } else {
        // if there is no matching event
        taskStatus = JSON.parse(localStorage.getItem('dl_verifier')) || {}
        taskStatus[taskid] = 'no event'
        localStorage.setItem('dl_verifier', JSON.stringify(taskStatus))
        //setTimeout(runTest(taskid), 1500) // try 1500 ms later again
    }

    // pass to the next task if there is
    var taskid = 'task' + (parseInt(taskid.split('task')[1]) + 1)
    console.log(taskid)
    if (jsonData.tasks[taskid]) { runTest(taskid) }

} // End of the runTest function

if (window.location.href.includes(jsonData.website)) {
    if (localStorage.getItem('dl_verifier')) {
        var lastCompletedTask = Object.keys(JSON.parse(localStorage.getItem('dl_verifier'))).length
        var nextTask = 'task' + (lastCompletedTask + 1)
        if (jsonData.tasks[nextTask]) {
            runTest(nextTask)
        }
    } else {
        runTest('task1')
    }
}