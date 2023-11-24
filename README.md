# Assignment 1 - ReactJS app.

Name: Jordon Coady

## Overview.

[A brief statement on the content of this repository.]

### Features.
+ Sorting movies by vote count or release date has been added.

+ Searching for actors by name has been added on the people page.

+ Added another filter option by vote average. If a movie is below the user 
  specfied amount it will be removed from the list of movies.

+ Added firebase email and password authentication. 
  - Added new folder in components called auth.
    - authFunctions.js
      Contains sign-in and sign-out functions which were given by firebase.

    - signIn.js
      creates a form for the user to sign in through. The entered details are passed to the 
      sign-in function in authFunctions. If the user email and password are known by my project it will authenticate.

    - signUp.js
      Craetes a sign-up form and follows the same order of operations as the signIn file.

    - userProvider.js
      This file is responsible for setting the context of the current user and allowing every other component access to the user.
      The userProvider is wrapped around the routes in index.js. If there is no user signed in it will navigate to the authOtionPage.
  
  - Added authOptionPage which displays the signIn and signUp forms.
  - The site header has been changed to check to see if there is a current user if there isn't it won't render the 
    site header. This was done to prevent the user naviagting to different pages without signing in. If there is a 
    user signed in it will display there email at the top left and give them an option to sign out on the site header.

+ Added pagination
  - Changed API calls to take in a parameter for page number. Imported pagination,
    created a handle for when the pagination component is clicked which returns thr page number.
    Then the handle function sets the page the user wants and refetch is used to make a new API call with 
    the updated page number being passed to it.
  - Pagination works on the homepage, Poeple Page, Upcoming Page, Top Rated page and In Theathres Page.

## Setup requirements.
npm install
npm install firebase

## API endpoints.
Static Endpoints
+ Latest Movie - movie/latest
+ Popular Movies - movie/top_rated
+ Movies in Theatres - movie/now_playing
+ Get Popular Actors - person/popular

Parameterised Endpoints
+ Movie Credits - movie/:id
+ Actor Details - person?query=name
+ Full Actor Profile & Credited Movies - person/:id&append_to_response=movie_credits

## Routing.
+ /movies/topRated - Displays top rated movies
+ /actor/:name - Displays an actors profile and movies they have been in.
+ /movies/playingNow - Displays movies that are in theatres.
+ /movies/mustWatch - List of must watched movies
+ /actors - List of popular actors

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).