# witchcraft_scripts
Collection of javascripts that can be executed everytime a website is opened

# motivation
Forget to select "Delete source branch when merge request is accepted" and "Squash commits when merge request is accepted" on your MRs?
And have to go back to all your MRs and check those boxes? Not anymore - the cool tool witchcraft to the rescue.

If interested visit the website of Witchcraft for more information about how the tool works- https://luciopaiva.com/witchcraft/
If not, just follow the simple steps below

# steps to salvation

  * Clone this repo to your machine
  * Install the Witchcraft chrome extension and the chrome web server app - instructions here - https://luciopaiva.com/witchcraft/how-to-install.html
  * Change the port to 5743. Witchcraft will NOT work otherwise
  * In the settings of the webserver, set the location where you cloned this repo by clicking the "CHOOSE FOLDER"
  * Toggle the button to restart the web server
  * Now create a new MR, if the web server on the right port, witchcraft extension is running fine, then you should see the two damned check boxes pre-selected.
