# Shopify Challange Summer 2022

&nbsp;
## Website link:
#### https://upbeat-meitner-d1b726.netlify.app/

&nbsp;
## Overview
Welcome to my attempt to the Shopify FrontEnd challange for Summer 2022. <br />
In this challange, I have built a web page that displays some of the NASA pictures with discription, these data are from the NASA API. <br />
The website is composed of a header, some discription of the web page, some nasa pictures with description, date, and like/unlike buttons. There is 5 pictures by default, but you can increse or decrese this number using the input field in the web page. <br />
The feature that I choosen is to enable the user choose the number of pictures that he/she want to see. <br />
N.B: the API choosen does return random data each time it's called, so you might notice that during the page reload or when the input field is set to a different number, the data is changed. Also, some of the NASA pictures have an invalid url for the image (this is a rare case but it happens sometimes), you reolod the page to see different pictures. 

&nbsp;
## Technologies
- ReactJS
- NodeJS
- Cypress

&nbsp;
## Test
The project has some Cypress tests. To run those tests, make sure to have git and nodejs installed in your machine. clone this repository and run this command `git clone <repo-url>`, then nagivate to the folder /FE-summer-2022 and run `npm install`. After installing the dependencies, run `npm test` under the same folder, this will launch the Cypess UI, you can click on any of the components to test them.
