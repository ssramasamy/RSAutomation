$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/User/git/RSAutomationBDDFramework/src/main/java/Features/LoginAndVerify.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "user clicks logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAndVerifyPriceSteps.click_logout_button()"
});
formatter.result({
  "status": "passed"
});
});