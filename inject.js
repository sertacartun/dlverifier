var testData = {
    "objName": "window.anLib.base.tms.eventCache",
    "website": "tailor-acceptance",
    "tasks": {
        "task1": {
            "url": "https://tailor-acceptance.mytheresa.com/de/en/women",
            "exec": `

                `,

            "event_name": "page_view",

            "fields": [
                {
                    "name": "platform.environment",
                    "value": "prod"
                },
                {
                    "name": "platform.version",
                    "value": "[0-9].[0-9].[0-9]"
                },
                {
                    "name": "platform.store",
                    "value": "1"
                },
                {
                    "name": "platform.storeView",
                    "value": "01"
                },
                {
                    "name": "platform.name",
                    "value": "mytheresa"
                },
                {
                    "name": "device.viewport",
                    "value": "XS|S|M|L|XL"
                },
                {
                    "name": "device.type",
                    "value": "dekstop|mobile|desktop"
                },
                {
                    "name": "page.country",
                    "value": "DE"
                },
                {
                    "name": "page.type",
                    "value": "home"
                },
                {
                    "name": "page.language",
                    "value": "en"
                },
                {
                    "name": "page.department",
                    "value": "women"
                },
                {
                    "name": "page.currencyCode",
                    "value": "EUR"
                },
                {
                    "name": "page.name",
                    "value": ".*Test.*"
                },
                {
                    "name": "page.sitemap",
                    "value": "home"
                },
                {
                    "name": "cart.products",
                    "value": ".*object.*"
                },
                {
                    "name": "cart.value",
                    "value": "[0-9]{1,6}"
                },
                {
                    "name": "cart.id",
                    "value": ".*"
                },
                {
                    "name": "wishlist.count",
                    "value": "[0-9]{3}"
                },
                {
                    "name": "wishlist.productids",
                    "value": ".*object.*"
                },
                {
                    "name": "user.loggedIn",
                    "value": "yes|no"
                },
                {
                    "name": "user.gender",
                    "value": "none"
                },
                {
                    "name": "user.csf",
                    "value": ".*"
                },
                {
                    "name": "user.cdf",
                    "value": ".*"
                },
                {
                    "name": "user.frontRow",
                    "value": "yes|no|na"
                },
                {
                    "name": "user.polymere",
                    "value": "unknown"
                },
                {
                    "name": "user.polymereCrit",
                    "value": "unknown"
                },
                {
                    "name": "user.polymereSha",
                    "value": "unknown"
                }

            ]
        },
        "task2": {
            "url": "https://tailor-acceptance.mytheresa.com/de/en/women/clothing",
            "exec": `

                `,

            "event_name": "product_list_view",

            "fields": [
                {
                    "name": "list.designerName",
                    "value": "multiple"
                },
                {
                    "name": "list.categoryName",
                    "value": "women::clothing"
                },
                {
                    "name": "list.categoryId",
                    "value": ".*"
                },
                {
                    "name": "list.totalNumProductsAll",
                    "value": "[0-9]{3}"
                },
                {
                    "name": "list.totalNumProductsList",
                    "value": "[0-9]{3}"
                },
                {
                    "name": "list.totalNumOnSale",
                    "value": "[0-9]{3}"
                },
                {
                    "name": "list.totalNumOutOfStock",
                    "value": "[0-9]{3}"
                },
                {
                    "name": "list.searchKeyword",
                    "value": ".*"
                },
                {
                    "name": "products",
                    "value": ".*object.*"
                }
            ]
        },
        "task3": {
            "url": "https://tailor-acceptance.mytheresa.com/de/en/women/loewe-p00685941-p00685941",
            "exec": `

                `,

            "event_name": "product_details",

            "fields": [
                {
                    "name": "product.id",
                    "value": ".*P00.*"
                },
                {
                    "name": "product.name",
                    "value": ".*loewe.*"
                },
                {
                    "name": "product.designerName",
                    "value": ".*loewe.*"
                },
                {
                    "name": "product.designerId",
                    "value": "000798"
                },
                {
                    "name": "product.categoryName",
                    "value": "Clothing::Tops::Sleeveless"
                },
                {
                    "name": "product.categoryId",
                    "value": "0006::0012::0943"
                },
                {
                    "name": "product.price",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceVatOnly",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceReducedVatOnly",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceFinalDuties",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceEur",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceEurVatOnly",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceEurReducedVatOnly",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceEurFinalDuties",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceTaxPercent",
                    "value": "21"
                },
                {
                    "name": "product.isOnSale",
                    "value": "true"
                },
                {
                    "name": "product.saleDiscount",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.isOutOfStock",
                    "value": "false"
                },
                {
                    "name": "product.sizesOnStock",
                    "value": "XS/null::y||S/null::y||M/null::y||L/null::n"
                }
            ]
        },
        "task4": {
            "url": "https://tailor-acceptance.mytheresa.com/de/en/women/loewe-p00685941-p00685941",
            "exec": `
                document.querySelectorAll('.productbuttons>div')[3].click()
                document.querySelector('.variantslist>div').click()
                document.querySelector('.productbuttons>div').click()
                `,

            "event_name": "product_cart_add",

            "fields": [
                {
                    "name": "product.id",
                    "value": ".*P00.*"
                },
                {
                    "name": "product.name",
                    "value": ".*loewe.*"
                },
                {
                    "name": "product.designerName",
                    "value": ".*loewe.*"
                },
                {
                    "name": "product.designerId",
                    "value": "000798"
                },
                {
                    "name": "product.categoryName",
                    "value": "Clothing::Tops::Sleeveless"
                },
                {
                    "name": "product.categoryId",
                    "value": "0006::0012::0943"
                },
                {
                    "name": "product.price",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceVatOnly",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceReducedVatOnly",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceFinalDuties",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceEur",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceEurVatOnly",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceEurReducedVatOnly",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceEurFinalDuties",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.priceTaxPercent",
                    "value": "21"
                },
                {
                    "name": "product.isOnSale",
                    "value": "true"
                },
                {
                    "name": "product.saleDiscount",
                    "value": ".*[0-9].*"
                },
                {
                    "name": "product.isOutOfStock",
                    "value": "false"
                },
                {
                    "name": "product.sizeId",
                    "value": "[0-9]"
                },
                {
                    "name": "product.sizesOnStock",
                    "value": "XS/null::y||S/null::y||M/null::y||L/null::n"
                }
            ]
        }
    }
}


function dlVerifier(status) {
    if (status == 'active') {
        localStorage.setItem('dl_verifier_status', 'active')
        window.location.reload()
    } else if (status == 'passive') {
        localStorage.setItem('dl_verifier_status', 'passive')
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

function checkStatus(taskid) { // main function to run tests
    var taskid = taskid
    var continueTest = false

    if (window.location.href != testData.tasks[taskid].url) { window.location.href = testData.tasks[taskid].url } else continueTest = true

    if (continueTest == true) {
        eval(testData.tasks[taskid].exec)
        setTimeout(() => { runTests(taskid) }, 5000);
    }
}

function runTests(taskid) {
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
        Object.values(JSON.parse(localStorage.getItem('dl_verifier'))).forEach((e, i) => {
            console.log('index : ' + 'task' + (i + 1))
            console.table(e)
        })
    }

} // End of the checkStatus function

window.onload = function () {
    if (window.location.href.includes(testData.website) && localStorage.getItem('dl_verifier_status') == 'active') {
        if (localStorage.getItem('dl_verifier')) {
            var lastCompletedTask = Object.keys(JSON.parse(localStorage.getItem('dl_verifier'))).length
            var nextTask = 'task' + (lastCompletedTask + 1)
            if (testData.tasks[nextTask]) { checkStatus(nextTask) } else localStorage.setItem('dl_verifier_status', 'passive')
        } else checkStatus('task1')
    }
}