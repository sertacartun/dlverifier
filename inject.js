window.addEventListener('message', (e) => { // triggers dlVerifier() when user clicks to the 'Start' button  
    if (e.data.source=="content.js") {
        testData = e.data.msg
        localStorage.removeItem('dl_verifier')
        localStorage.removeItem('dl_verifier_status')
        dlVerifier('active')
    }
})

function readData(dlv) { // function to read data from dataLayer with dot notations
    var dlv = dlv.split('.')
    if (dlv.includes('window')) {
        dlv.splice(0, 1)
        dlv.forEach((e, i) => { i == 0 ? dlv = window[e] : dlv = dlv[e] });
    } else {
        dlv.forEach((e, i) => { try { i == 0 ? dlv = eventObject[0][e] : dlv = dlv[e] } catch (error) { dlv = undefined } });
    }
    return dlv
}

function dlVerifier(status) { // starter function
    if (status == 'active') {
        localStorage.setItem('dl_verifier_status', 'active')
        window.location.href = testData.tasks.task1.url
    } else if (status == 'passive') {
        localStorage.setItem('dl_verifier_status', 'passive')
    }
}

function checkStatus(taskid) { // decides to continue to test or locate to the next tasks url
    var taskid = taskid
    var continueTest = false

    if (window.location.href != testData.tasks[taskid].url) { window.location.href = testData.tasks[taskid].url } else continueTest = true

    if (continueTest == true) {
        eval(testData.tasks[taskid].exec)
        setTimeout(() => { runTests(taskid) }, 5000);
    }
}

function runTests(taskid) { // core function to handle tests
    var eventName = testData.tasks[taskid].event_name
    eventObject = readData(testData.objName).filter(e => e.event == eventName)

    if (eventObject.length > 0) { // if there is matching event
        taskStatus = JSON.parse(localStorage.getItem('dl_verifier')) || {}
        taskStatus[taskid] = []
        testData.tasks[taskid].fields.forEach((e, i) => { //loop in expected fields
            var fieldName = e.name
            var fieldValue = new RegExp(e.value, "i")

            //create status object for every field
            taskStatus[taskid][i] = {
                expectedName: undefined,
                expectedValue: undefined,
                currentValue: undefined,
                status: undefined
            }

            if (String(readData(fieldName))) { // if there is expected variable in the event
                taskStatus[taskid][i].expectedName = fieldName

                if (String(readData(fieldName)).match(fieldValue)) { // if expected variable matching with expected value
                    taskStatus[taskid][i].expectedValue = e.value
                    taskStatus[taskid][i].currentValue = String(readData(fieldName))
                    taskStatus[taskid][i].status = 'passed'
                } else {
                    taskStatus[taskid][i].expectedValue = e.value
                    taskStatus[taskid][i].currentValue = String(readData(fieldName))
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
    }

    // pass to the next task if there is
    taskid = 'task' + (parseInt(taskid.split('task')[1]) + 1)

    if (testData.tasks[taskid]) { checkStatus(taskid) } else {
        localStorage.setItem('dl_verifier_status', 'passive')
        Object.values(JSON.parse(localStorage.getItem('dl_verifier'))).forEach((e, i) => {
            console.log('index : ' + 'task' + (i + 1))
            console.table(e)
        })
    }

}

window.onload = function () { // allows to continue testing on every page change
    if (localStorage.getItem('dl_verifier_status') == 'active') {
        if (localStorage.getItem('dl_verifier')) {
            var lastCompletedTask = Object.keys(JSON.parse(localStorage.getItem('dl_verifier'))).length
            var nextTask = 'task' + (lastCompletedTask + 1)
            if (testData.tasks[nextTask]) { checkStatus(nextTask) } else localStorage.setItem('dl_verifier_status', 'passive')
        } else checkStatus('task1')
    }
}


