var testData = {
  "objName": "window.anLib.base.tms.eventCache",
  "tasks": {
      "task1": {
          "url": "https://tailor-acceptance.mytheresa.com/de/en/women",
          "exec": `

              `,

          "event_name": "page_view",

          "fields": [
              {
                  "name": "platform.environment",
                  "value": "dev"
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

var mainTable = document.querySelector('#confTable')

Object.values(testData.tasks).forEach((e,i) => {

  var newth = document.createElement('th')
  newth.innerHTML='NAME'
  mainTable.appendChild(newth)

  var newth2 = document.createElement('th')
  newth2.innerHTML='VALUE'
  mainTable.appendChild(newth2)

  e.fields.forEach((e)=>{
    var newtr = document.createElement('tr')
    newtr.innerHTML = `
    <td>${e.name}</td>
    <td>${e.value}</td>
    `
    mainTable.appendChild(newtr)
  })
});
