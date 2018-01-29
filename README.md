# Ampafy
Ampafy is a static page clone of Spotify, a web application that allows users to view and listen to music content from many different artists as well as compiling these songs into playlists.

Ampafy was created through a combination of React-Redux and Ruby on Rails. In the front-end React-Redux was used to render different contents dynamically and at the same time allowed some contents on the same page to be static. While React-Redux was used in the front-end in the back end Ruby on Rails was used to retrieve and save data.

# Main Features

## User Auth
![Login/Signup](/screenshot/Login.gif)
Users can access the LogIn and Signup through the LandingPage.
Each link will take you to a LogIn, Signup where you can enter through a GuestLogin or by creating a new account or entering the correct username/ password combination.

## Main Components
Some of the app's components were reused to render different contents. The Main Components that were widely used throughout are:

![MainPage](/screenshot/mainpage_toggling.gif)
1. Main Page
 * Album - contains all the different Albums
 * Playlist - contains all users playlists
 * Songs - contains all a list of all songs

![MainPage](/screenshot/Creating_Playlist.gif)
2. Top Nav Bar
 * Nav Bar for toggling different main Pages.
 * Includes a button that toggles modal


3. Side Nav Bar
 * Logout - logout to landing page
 * Home - allows you to navigate to the home album page

![MainPage](/screenshot/Creating_Playlist.gif)
4. Playbar
 * allows songs to play despite toggling to different pages
 * allows you to pause and play a song
 * shows input and album picture of the song


Future Direction

 *  Search Bar
 *  Que of Songs

Technologies Used
 *  React_modal
 *  HTML-DOM-Audio
