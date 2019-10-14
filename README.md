# miniRhex
A small Rhex robot prototype for Software-Hardware Codesign. The design is planned to use 3 H-Bridge motor controllers (IC chips), 2 Arduino nano, 2 Ultrasonic sensors, and 1 Bluetooth module (HC-05).

10/7/19 Update:
Trying to set up the circuit, it did not work out as I thought (The wiring gets crazy that I cooked some LEDs by accident). Will need to skip some parts such as Bluetooth control and the 2 Ultrasonic sensors (can't afford to cook more stuffs). As an alternative, I will set up WiFi control under Linux with an user interface available on web browser (To save the wires and possibly brown out the Bluetooth module during configuration process). Instead of 2 Ultrasonic sensors, I will use a ESP32 Camera module that come with WiFi capability. This change should reduce the wires and the risk of cooking marshmallow on the microcontroller.

(This did not work, lol)
![header image](https://github.com/zhengronggift/miniRhex/blob/master/image/image2.jpeg?raw=true)
![header image](https://github.com/zhengronggift/miniRhex/blob/master/image/image3.jpeg?raw=true)

10/14/19 Update:
Got the circuit set up, tested the 3 H-Bridges with LEDs, they all seem working properly
A copy of the test code is in Development.
![header image](https://github.com/zhengronggift/miniRhex/blob/master/image/image4.jpeg?raw=true)
