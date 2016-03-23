# viewgodh8mile
Let's not give too many details about this yet. But it's a web app 
about email classifying (by hand for now) and publishing then if they
meet certain criteria. 


## installing and running ##

On Debian systems: 

`sudo apt-get install npm nodejs nodejs-legacy`

`git clone https://github.com/rkarhila/viewgodh8mile`

`npm install express --save`

`cp mail_and_system_conf.js.example mail_and_system_conf.js`

`$yourfavouriteeditor mail_and_system_conf.js` (Change the email & server settings)

and then

`node server.js`

You probably want to set nginx to direct to it. You should now better, 
you're a web developer, right? Otherwise you would have already stopped 
reading.
