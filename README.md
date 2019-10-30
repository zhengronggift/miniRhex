# miniRhex
A small Rhex robot prototype for Software-Hardware Codesign. The design is planning to use 3 H-Bridge motor controllers (IC chips), 2 Arduino nano, 2 Ultrasonic sensors, and 1 Bluetooth module (HC-05).

10/7/19 Update:
Trying to set up the circuit, it did not work out as I thought. The wiring gets crazy that I cooked some LEDs by accident. Will need to skip some parts such as Bluetooth control and the 2 Ultrasonic sensors. As an alternative, I will set up WiFi control under Linux with an user interface available on web browser. Instead of 2 Ultrasonic sensors, I will use a camera on the Pi. This change should reduce the wires and the risk of cooking marshmallow on the microcontroller.

(This did not work, lol)
![header image](https://github.com/zhengronggift/miniRhex/blob/master/image/image2.jpeg?raw=true)
Rough draft:
![header image](https://github.com/zhengronggift/miniRhex/blob/master/image/image3.jpeg?raw=true)

10/14/19 Update:
Got the circuit set up, tested the 3 H-Bridges with LEDs, they all seem working properly.
A copy of the test code is in Development folder.
![header image](https://github.com/zhengronggift/miniRhex/blob/master/image/image4.jpeg?raw=true)

A YouTube Demonstration of the testing:
https://youtu.be/kHWFc5deUCg

10/19/19 Update:
Got the user interface set up to run 6 motors (assuming the LEDs as motors and running two directions: forward and reverse). The user interface is using NodeJS for socket communication between the Pi and Arduino. One good thing about using JS is that I can set up a server directly on the IP address by using Nginx (web server/reverse proxy tool).  

YouTube Demonstration of the user interface:
https://youtu.be/LP8_Rvzkqkg

10/28/19 Update:
Setup the Pi Camera. The camera is still under testing. It is using Python and serving the video streams on another port address by taking 24 images per second (hopefully I am using the term correctly here). The user interface is displaying the stream from that port number.


