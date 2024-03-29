# AlmostFresh
https://almostfresh-4ee10.web.app
## 1. Project Description
Our team BBY30 is developing AlmostFresh™ to help people with excess food share that food with others so it does not go to waste by posting excess or imperfect food and produce [aimed towards farmers and regular people, unlike Too Good To Go™].

## 2. Names of Contributors
* Hi, my name is Matt! I am excited to start working on a project together!
* Anhad Sodhi is excited to be working on this project while talking in third person
* Hi my name is Dan! I am very confused right now!.
	
## 3. Technologies and Resources Used
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)
* Logo.com to generate a logo image for the navbar and favicon (https://app.logo.com/)
* W3Schools for miscellaneous HTML, CSS and JavaScript information (https://www.w3schools.com/)
* Google Material symbols and icons (https://fonts.google.com/icons)
* Mapbox api for the map
* Techtips B01a for the saving a users post in firebase
* Techtips M1 for the map displaying users location and having markers for posts
* In map.html the script and style code was taken from (https://www.geeksforgeeks.org/how-to-show-page-loading-div-until-the-page-has-finished-loading/)
* Techtips B01b for posting listings based on data in firebase
* Geeksforgeeks used for searchbar functionality (https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/)


## 4. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* Click on "Login" or "Create an account"
* That's it!
* Create listings by clicking on the plus icon in the bottom right
* Browse listings by clicking on the map icon at the top (to view listings on the map) or the "browse" text in the top dropdown menu (to view them as a list)
* View, edit and delete your own listings by clicking on the "your listings" text in the top dropdown menu and clicking on the listing

## 5. Known Bugs and Limitations
Here are some known bugs:
* "You do not currently have any listings" message on home page does not show up if the user is in desktop mode
* Blue pin (your location) sometimes does not load on the map page

## 6. Features for Future
What we'd like to build in the future:
* More sorting/filtering options
* A profile page so the user can edit their default location, phone number, etc.
* A way for the mapbox to display location based off the address entered by the user instead of the longitude/latitude at the time of posting
* A working form validation system that requires every field on the listing page to be filled in before being able to post.

## 7. Images
![image](https://github.com/AnhadSodhi/AlmostFresh/assets/96636073/5564f6ba-e2ce-4555-a190-b2ff9eaf54ec)
![image](https://github.com/AnhadSodhi/AlmostFresh/assets/96636073/2d575d6d-a8ef-43f6-891b-d2cf6d0ab7ad)
![image](https://github.com/AnhadSodhi/AlmostFresh/assets/96636073/c9fe621f-5f98-42eb-9078-a3f89f82e936)
![image](https://github.com/AnhadSodhi/AlmostFresh/assets/96636073/6939221d-5668-49d0-8b76-c29fdbdd388c)
![image](https://github.com/AnhadSodhi/AlmostFresh/assets/96636073/e95f6960-234f-4b9a-aa3a-864b2e58cb39)

## 8. Contact
* Anhad Sodhi  - Email: asodhi9@my.bcit.ca
* Matthew Dodd - Email: mdodd11@my.bcit.ca
* Dan Didac    - Email: ddidac@my.bcit.ca

## 9. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── index.html               # landing HTML file, this is what users see when they come to url
├── .gitignore               # Git ignore file
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images (all from logo.com)
    /favicon2.ico                # The favicon used for the website
    /indexImage.png              # The image used for the landing page
    /logo.png                    # The logo with the circle
    /logo2.png                   # The logo without the circle
├── pages                    # Folder for html pages
    /browsing.html               # browsing page
    /home.html                   # the landing page after the user logs in
    /listing.html                # the listing information page when the user clicks on a listing
    /listings.html               # the page that shows all of the user's listings
    /login.html                  # the login page
    /map.html                    # the map page that shows all the listings
    /submission.html             # the page to create a new listing
├── scripts                  # Folder for scripts
    /authentication.js           # Handles the login process
    /checkIfUser.js              # Redirects the user to login if they are on a page otehr than index/login
    /homelisting.js              # Handles the listings and buttons on the home screen
    /listing.js                  # Handles the listings show on the browsing page
    /listingParams.js            # Handles the information and buttons shown after clicking on a listing
    /map.js                      # Handles the mapbox/display for the map page
    /mapListing.js               # Handles the mapbox/display for the listing page
    /myListings.js               # Handles the display for the your listings page
    /script.js                   # Handles the logout function
    /search.js                   # Handles the search bar in the browsing page
    /skeleton.js                 # Displays the navbar and footer for each page
    /sorting.js                  # Handles the sorting/filtering in the browsing page
    /subdata.js                  # Handles the submission page form/display
├── styles                   # Folder for styles
    /style.css                   # Handles all the styles

Firebase hosting files: 
├── .firebase
	/hosting..cache
├── .firebaserc
├── 404.html
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── storage.rules

```


