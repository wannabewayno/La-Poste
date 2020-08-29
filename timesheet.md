# TimeSheet
A rough Estimate for man hours put into this project

## Thursday 27th August
### 4:00pm start
* so far, a react app, deployed on heroku <a href="https://la-poste.herokuapp.com/">here</a>, with basic api routing built, controllers built and react router displaying a simple 'this is a dashboard" or "this is a signin page"
### 5:03pm stop for coffee break (1hr)

### 6:10pm back from break
* made small adjustments whilst on the phone regards to import statements for react router.
* found background images from unsplash to use with background router
* troubleshoot react-router causing server error on heroku (missing require statement in routes)
* trouble shooting an import error with my own npm package :D. Fixed, now I can use all       custom built react components from this library through the rest of the build
### 7:41pm stop for a run and dinner (1hr 1/2)

### 9:22pm back from break
* create basic SignIn Form
* create basic SignUp Form
### 10:07pm stop for tea break

### 10:16pm back from break
* created a turntable component, flips the sign-in and sign-up forms via a small button underneath the main (sign-up or create account buttons), was a bit fiddly, burned a bit of time but I had fun doing it.
* adjusted CSS slightly so for mobile friendly design and without the form being too big for desktop.
* signin page almost complete, the forms needs hooking up to the routes, and a better colour scheme, colour has not be chosen at this stage
### 12:02am stop for bed

## Friday 28th August
### 8:26am start
* shifting focus to the dashboard, created sidebar, post, menubuttons and footer components. Have them returning trivial P tags for the moment
### 8:40am stop for meeting in the city

### 12:00pm start
* Added a PostList component to display an array of JSON objects to html
* started creating markup for the SideBar 
### 12:22pm stop for lunch and phone call

### 1:00pm start
* Add footer component
* add css to display the Sidebar and Post side by side in flex box.
### 1:28pm stop for phone call

### 2:03pm Start
* created utilites to hold API related functions. Calls the json endpoint required
* displays this in the sidebar
### 3:38pm stop for phone call

### 4:00pm start
* Have been reading up about authentication with React, I have little experience in Auth
* Changed input compnents for sign-in/sign-up forms.
* Created lorem for the body for the post as it only has a title from the API
### 5:36pm break

### 5:53pm start
* Reading up on react-redux. I have not previously used Redux before (clever prop drilling :D)
### 7:03pm stop for dinner

### 8:31pm start
* Reading up on react redux, starting implementing the store and reducers
### 9:51pm stop for break;

### 10:33pm start
* Understand redux in a react context, now implementing to hook up the states up to the global store
### 12:30am Stop


## Saturday 29th August
### 10:07am start
* add css for viewing an individual post
* add buttons into the header for logout and settings feature
### 11:30pm break

### 12:00pm start
* created hamburger menu that replaces login and setting buttons under 576px
* created actions and reducers for opening settings modal and logging in and out of the app (on the front end)
### 1:40pm coffee break

### 1:48pm back from break
* built a basic user database with rest methods using json file. I was going to use passport, however a full blown authentication system will be too time consuming. 
* all data is pretty mush hooked up, need an private and public system and to populate the modal with settings to update a user and change the colour scheme
### 4:38pm break

### 4:47pm start
*  Have been reading up on delivering a Basic auth system with react router. 
*  The issue I'm having is that the redux store won't keep state when re-directing.
### 5:20pm break

### 5:30pm start
### 




