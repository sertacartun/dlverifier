jsonData = {
    "objName": "dataLayer",
    "website":"https://www.mytheresa.com/en-de/men.html",
    "tasks": {
        "task1": [
            {
                "exec": `

                `,
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

if (window[jsonData["objName"]]) {
    if (jsonData["tasks"]) {
        if (Object.keys(jsonData["tasks"]).length > 0) {
            for (let i = 0; i < Object.keys(jsonData["tasks"]).length; i++) {

                if (localStorage.getItem("index") != null) {
                    if (localStorage.getItem("index") != i + 1) {
                        eval(jsonData["tasks"]["task" + (i + 1)][0].exec)
                        localStorage.setItem("index", i + 1)
                    }
                }else{
                    localStorage.setItem("index", 0)
                    window.location.reload()
                }

                for (let index = 0; index < jsonData["tasks"]["task" + (i + 1)][0].fields.length; index++) {
                    fieldName = jsonData["tasks"]["task" + (i + 1)][0].fields[index].name
                    fieldValue = new RegExp(jsonData["tasks"]["task" + (i + 1)][0].fields[index].value, "i")

                    if (window[jsonData["objName"]][fieldName]) {
                        if (window[jsonData["objName"]][fieldName].match(fieldValue) != null) {
                            fresult = true
                            console.log(fresult)
                        } else {
                            fresult = false
                            console.log(fresult)
                        }
                    }
                }
            }
        }
    }
}


