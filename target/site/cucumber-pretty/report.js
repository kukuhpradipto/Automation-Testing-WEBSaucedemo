$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Complete.feature");
formatter.feature({
  "line": 3,
  "name": "Completed order",
  "description": "As a user I want to completed buy product",
  "id": "completed-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Complete"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "user completed order product",
  "description": "",
  "id": "completed-order;user-completed-order-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User input \"standard_user\" as userName and Input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User choice 2 product from the list \"\u003cproduk1\u003e\" and \"\u003cproduk2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on icon cart to verify product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User delete product \"\u003cdeleteProduct\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click button checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input Check Out Form in Firs Name \"Kukuh\", Last Name \"Pradipto\" and Partial Code \"123\".",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User verify nominal taxt",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verify Summary total Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click button finish",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User complete order",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "completed-order;user-completed-order-product;",
  "rows": [
    {
      "cells": [
        "produk1",
        "produk2",
        "deleteProduct"
      ],
      "line": 22,
      "id": "completed-order;user-completed-order-product;;1"
    },
    {
      "cells": [
        "Sauce Labs Onesie",
        "Test.allTheThings() T-Shirt (Red)",
        "Test.allTheThings() T-Shirt (Red)"
      ],
      "line": 23,
      "id": "completed-order;user-completed-order-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3503641095,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user completed order product",
  "description": "",
  "id": "completed-order;user-completed-order-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Complete"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User input \"standard_user\" as userName and Input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User choice 2 product from the list \"Sauce Labs Onesie\" and \"Test.allTheThings() T-Shirt (Red)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on icon cart to verify product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User delete product \"Test.allTheThings() T-Shirt (Red)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click button checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input Check Out Form in Firs Name \"Kukuh\", Last Name \"Pradipto\" and Partial Code \"123\".",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User verify nominal taxt",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verify Summary total Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click button finish",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User complete order",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 348375965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1360883109,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 35763264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "PurchaseSteps.sortProductValue(String)"
});
formatter.result({
  "duration": 1113216188,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.choiceBasket()"
});
formatter.result({
  "duration": 1132364030,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStep.clickIconsCart()"
});
formatter.result({
  "duration": 1061991586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 21
    }
  ],
  "location": "CheckoutStep.deleteProduct(String)"
});
formatter.result({
  "duration": 1050321338,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStep.clickOnCheckOut()"
});
formatter.result({
  "duration": 1053429697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kukuh",
      "offset": 40
    },
    {
      "val": "Pradipto",
      "offset": 59
    },
    {
      "val": "123",
      "offset": 87
    }
  ],
  "location": "CheckOutFromStep.inputCheckOutForm(String,String,String)"
});
formatter.result({
  "duration": 2252020822,
  "status": "passed"
});
formatter.match({
  "location": "CompleteStep.verifyNominalTax()"
});
formatter.result({
  "duration": 45788191,
  "status": "passed"
});
formatter.match({
  "location": "CompleteStep.verifyNominalTotal()"
});
formatter.result({
  "duration": 40874017,
  "status": "passed"
});
formatter.match({
  "location": "CompleteStep.clickOnBtnFinish()"
});
formatter.result({
  "duration": 5074787337,
  "status": "passed"
});
formatter.match({
  "location": "CompleteStep.verifyOnCheckOutCompletePage()"
});
formatter.result({
  "duration": 1000529502,
  "status": "passed"
});
formatter.after({
  "duration": 121908508,
  "status": "passed"
});
});