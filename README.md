# Sphero with AngularJS
In order to use this, a Rosbridge installation is necessary. If using Ubuntu, follow the instructions found [here](http://wiki.ros.org/ROS/Installation). If you are using a different operation system, we'll find a tutorial (or make one) as soon as possible.
**Note**: We were using Ubuntu 14.04, so we had to install the *jade* distribution.

Also, it is necessary to have Node.js installed. Assuming you are using Ubuntu, an easy way to get the required version of node is to run `sudo apt-get install nodejs`.
After installing Node.js, run `npm install`. This will download and install the required dependencies.

Also necessary is to have bower installed. The easiest way to install bower is to install it globally with *npm*, node's package manager. Type `npm install -g bower` to get it.
After bower is installed, type `bower install` to get the required bower dependencies.

Once node and bower are installed, it is also necessary to install grunt globally. Again, just use *npm* to do this with `npm install -g grunt-cli`.

Once everything is set up, all that is necessary is to run rosbridge with `roslaunch rosbridge_server rosbridge_websocket.launch`, and then run your code with `grunt serve`.

**Note**: The code to change/add to, to control the Sphero is found in app/modules/intruder/intruder.controller.js
