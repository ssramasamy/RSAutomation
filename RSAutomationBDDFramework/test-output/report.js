$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/User/git/git/RSAutomation/RSAutomationBDDFramework/src/main/java/Features/LoginAndVerify.feature");
formatter.feature({
  "name": "RS Automation Login and Verify Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "RS Automation Login and Verify Price Test Scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is already on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginAndVerifyPriceSteps.user_is_already_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginAndVerifyPriceSteps.user_is_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of page is RS Components Electronic and Electrical Components",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAndVerifyPriceSteps.title_of_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password and click login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Test1@test.com",
        "Pa55w0rd"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAndVerifyPriceSteps.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters product in search box",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAndVerifyPriceSteps.search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter no.of products and verify productprice",
  "rows": [
    {
      "cells": [
        "no.of products",
        "productprice"
      ]
    },
    {
      "cells": [
        "5",
        "122.39"
      ]
    },
    {
      "cells": [
        "10",
        "114.55"
      ]
    },
    {
      "cells": [
        "27",
        "107.79"
      ]
    },
    {
      "cells": [
        "49",
        "107.79"
      ]
    },
    {
      "cells": [
        "50",
        "100.90"
      ]
    },
    {
      "cells": [
        "151",
        "94.85"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAndVerifyPriceSteps.price(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d78.0.3904.87)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SFS223H\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.87, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50640}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 319235ce732ea8e706c5b1c4bd416646\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat stepDefinitions.LoginAndVerifyPriceSteps.price(LoginAndVerifyPriceSteps.java:72)\r\n\tat ✽.enter no.of products and verify productprice(file:/C:/Users/User/git/git/RSAutomation/RSAutomationBDDFramework/src/main/java/Features/LoginAndVerify.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAndVerifyPriceSteps.click_logout_button()"
});
formatter.result({
  "status": "skipped"
});
});