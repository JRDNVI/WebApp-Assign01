# Assignment 1 - ReactJS app.

Name: [your name]

## Overview.

[A brief statement on the content of this repository.]

### Features.
+ Sorting movies by vote count or release date has been added.

+ Added another filter option by vote average. If a mvoie is below the user 
  specfied amount it will be removed from the list of movies.

+ Added firebase email and password authentication. 
  - The users account is being passed to the rest of the app.
  - There is a sign in and sign up option. 
  - The current user can be seen at the top left of the site header


## Setup requirements.
npm install
npm install firebase

## API endpoints.
Static Endpoints
+ Latest Movie - movie/latest
+ Popular Movies - movie/top_rated
+ Movies in Theatres - movie/now_playing

Parameterised Endpoints
+ Movie details - movie/:id
+ Actor Details - person?query=name
+ Full Actor Profile & Credited Movies - person/:id&append_to_response=movie_credits

## Routing.
+ /movies/topRated - Displays top rated movies
+ /actor/:name - Displays an actors profile and movies they have been in.
+ /movies/playingNow - Displays movies that are in threatres
+ /movies/mustWatch - Shows must watch movies

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).