Feature: RS Automation Login and Verify Feature

Scenario: RS Automation Login and Verify Price Test Scenario

Given user is already on home page
When user is clicks on login button
Then title of page is RS Components Electronic and Electrical Components
Then user enters username and password and click login

| username | password | 
| Test1@test.com | Pa55w0rd | 

Then user enters product in search box
Then enter no.of products and verify productprice
| no.of products | productprice |
| 5	| 122.39 |
| 10 | 114.55 |
| 27 | 107.79 |
| 49 | 107.79 |
| 50 | 100.90 |
| 151 | 94.85 |
And user clicks logout button 







