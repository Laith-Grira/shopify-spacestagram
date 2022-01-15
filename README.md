# Spacestagram: Shopify Challenge Summer 2022

&nbsp;
## Website link:
#### https://upbeat-meitner-d1b726.netlify.app/

&nbsp;
## Overview
Welcome to my attempt to the Shopify FrontEnd challenge for Summer 2022. <br />
In this challenge, I have built a web page that displays some of the NASA pictures with description, these data are from the NASA API. <br />
The website is composed of a header, some description of the web page, some nasa pictures with description, date, and like/unlike buttons. There are 5 pictures by default, but you can increase or decrease this number using the input field in the web page. <br />
The website is responsive for mobile users too. <br />
-> The feature that I chose is to enable the user to choose the number of pictures that he/she wants to see. <br>

**N.B:** the API chosen does return random data each time it's called, so you might notice that during the page reload or when the input field is set to a different number, the data is changed. Also, some of the NASA pictures have an invalid url for the image (this is a rare case but it happens sometimes), you reload the page to see different pictures. 

&nbsp;
## Technologies & Libraries
- ReactJS
- Polaris (Shopify's Library)
- NodeJS
- Cypress

&nbsp;
## Test
The project contains Cypress e2e tests. To run those tests, make sure to have git and NodeJs installed in your machine. Copy the HTTPS url of this repository and run this command `git clone <repo-url>` under any folder in your machine, then navigate to the folder **/shopify-spacestagram** and run `npm install`. After installing the dependencies, start the application using `npm start`. Once the application is launched in you browser, run `npm test` under the same folder, this will launch Cypress tests in the CLI. 
![image](https://user-images.githubusercontent.com/59850587/149605662-133116f6-09fb-4218-844c-6c83a22c2632.png)


If you want to open the Cypess UI, you can run `cypress open`, and once the UI appears, click on any of the tests to run them (Make sure that the app is still running).
