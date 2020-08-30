# TimeSheet
A rough Estimate for man hours put into this project

For full transparency, as that's how I like to operate. 
I had to read up on redux and Auth with react-router as I haven't had experience with these in projects before, so a big chunk of time went in to the concepts before the application.

I know it said to keep external packages to a minimum, if you see 'grass-roots-react' or 'instant-mvc' mentioned, these are just both my packages, so think of them as an extension of myself.

I had fun with redux actually, and will use again. Although now reflecting, there are better ways to implement this by localising the store to the pages or HOC and passing the states down as props more often. 

It was over the time budget, however I wanted to put in a good mobile first design that looked and felt nice. The devil's in the details, and I wasn't 100% sure how involved of a solution you were expecting.

Originally I planned on using mongo atlas/mongoose for the authentication but in the end I'm using a simple JSON db in Heroku to get the idea across, so that's why this project has a server with api routes etc... As soon I see authentication I Immediately set the build up like this.

Overall it was 33hrs worth of work, 10hrs of which was Reading up and applying Auth and Redux with react.

Anyway, I hope you enjoy.


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
### 10:07pm stop for tea break (0.75hr)

### 10:16pm back from break
* created a turntable component, flips the sign-in and sign-up forms via a small button underneath the main (sign-up or create account buttons), was a bit fiddly, burned a bit of time but I had fun doing it.
* adjusted CSS slightly so for mobile friendly design and without the form being too big for desktop.
* signin page almost complete, the forms needs hooking up to the routes, and a better colour scheme, colour has not be chosen at this stage
### 12:02am stop for bed (1.75hr)

## Friday 28th August
### 8:26am start
* shifting focus to the dashboard, created sidebar, post, menubuttons and footer components. Have them returning trivial P tags for the moment
### 8:40am stop for meeting in the city (0.3 hr)

### 12:00pm start
* Added a PostList component to display an array of JSON objects to html
* started creating markup for the SideBar 
### 12:22pm stop for lunch and phone call (0.3hr)

### 1:00pm start
* Add footer component
* add css to display the Sidebar and Post side by side in flex box.
### 1:28pm stop for phone call (0.5hr)

### 2:03pm Start
* created utilites to hold API related functions. Calls the json endpoint required
* displays this in the sidebar
### 3:38pm stop for phone call (1.5hr)

### 4:00pm start
* Have been reading up about authentication with React, I have little experience in Auth
* Changed input compnents for sign-in/sign-up forms.
* Created lorem for the body for the post as it only has a title from the API
### 5:36pm break (1.5hr)

### 5:53pm start
* Reading up on react-redux. I have not previously used Redux before (clever prop drilling :D)
### 7:03pm stop for dinner (1.16hr)

### 8:31pm start
* Reading up on react redux, starting implementing the store and reducers
### 9:51pm stop for break (1.3hr)

### 10:33pm start
* Understand redux in a react context, now implementing to hook up the states up to the global store
### 12:30am Stop (2hr)


## Saturday 29th August
### 10:07am start
* add css for viewing an individual post
* add buttons into the header for logout and settings feature
### 11:30pm break (1.5hr)

### 12:00pm start
* created hamburger menu that replaces login and setting buttons under 576px
* created actions and reducers for opening settings modal and logging in and out of the app (on the front end)
### 1:40pm coffee break (1.6hr)

### 1:48pm back from break
* built a basic user database with rest methods using json file. I was going to use passport, however a full blown authentication system will be too time consuming. 
* all data is pretty mush hooked up, need a private and public system and to populate the modal with settings to update a user and change the colour scheme
### 4:38pm break (3hr)

### 4:47pm start
*  Have been reading up on delivering a Basic auth system with react router. 
*  The issue I'm having is that the redux store won't keep state when re-directing.
### 5:20pm break (0.5hr)

### 5:30pm start
* Right, history.push(/dashboard) was the magic answer
### 6:38pm break (1hr)

### 6:46pm start
### 8:50pm break (2hr)

### 9:00pm start
* playing with external npm package for a UI component update
* choose color palette for theme picker
* updated key colors around the app with palette choices
### finish 1:03am (4hr)

## Sunday 30th August
### 8:00am start
* built ThemePicker, allows user to choose a colour palette for the site from a list of defined palettes
### 9:30am break (1.5hr)

### 9:36am start
* made the sidebar Mobile responsive
* changed the width of the Post element to full width of it's container on Mobile
### 11:00am break (1.5hr)

### 11:11am start
* Add dropdown for the hamburger that renders the buttons it replaces in a container
* add event listener to the document to listen for clicks outside of the dropdown and close the dropdown
* Adding a little validation to the signin form for completeness
### 2:42pm stop (3.5hr)