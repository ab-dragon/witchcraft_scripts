# witchcraft_scripts
Collection of javascripts that can be executed everytime a website is opened

# motivation
Forget to select "Delete source branch when merge request is accepted" and "Squash commits when merge request is accepted" on your MRs?
Forgot to tag the MR with a label?
Your MR reviewer has noticed that your MR title does not follow the naming convention, and you have to change it?
Now imagine having to go back to all your MRs (in the complex merge) and make those corrections?
Even worse, any change will rerun the MR, so putting even more pressure on CI resoures and time. During critical situations where you have to get your MR out quickly, this could delay the delivery.

Not anymore - the cool tool witchcraft to the rescue.

The javascript for gitlab does the following - 
* Automatically checks the check-boxes as soon as you enter the MR page
* Does not allow you to submit the MR if
    * The title of the MR does not follow the naming convention
    * You have not set a label for your MR

If interested visit the website of Witchcraft for more information about how the tool works- https://luciopaiva.com/witchcraft/
If not, just follow the simple steps below

# steps to salvation

  * Clone this repo to your machine
  * Install the Witchcraft chrome extension and the chrome web server app - instructions here - https://luciopaiva.com/witchcraft/how-to-install.html
  * Change the port to 5743. Witchcraft will NOT work otherwise
  * In the settings of the webserver, set the location where you cloned this repo by clicking the "CHOOSE FOLDER"
  * Select the "Run in backgroud" and "Start on Login" checkboxes
  * Toggle the button to restart the web server
  * Now create a new MR, if the web server on the right port, witchcraft extension is running fine, then you should see the two damned check boxes pre-selected. And if your MR title is not in line with recommendation or you have not selected a label, you will not be allowed to Submit the MR (You will see warning message as soon as you hover over the "Submit MR")
