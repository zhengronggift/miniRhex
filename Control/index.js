var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8000));
var five = require('johnny-five');

//Setting the path to static assets
app.use(express.static(__dirname + '/app'));

//Serving the static HTML file
app.get('/', function (res) {
    res.sendFile('/index.html')
});

/*var board = new five.Board({
    repl: false
});

board.on('ready', function () {
    var speed, commands, motors;
    motors = {
        a: new five.Motor([0, 2, 3]),
        b: new five.Motor([0, 4, 5]),
        c: new five.Motor([0, 6, 7]),
        d: new five.Motor([0, 8, 9]),
        e: new five.Motor([0, 10, 11]),
        f: new five.Motor([0, 12, 13])
    };

    commands = null;
    speed = 255;

    io.on('connection', function (socket) {
        socket.on('stop', function () {
	    speed = 120;
            motors.a.brake();
            motors.b.brake();
            motors.c.brake();
            motors.d.brake();
            motors.e.brake();
            motors.f.brake();
        });

        socket.on('start', function () {
            speed = 150;
            motors.a.fwd(speed);
            motors.b.fwd(speed);
            motors.c.fwd(speed);
            motors.d.fwd(speed);
            motors.e.fwd(speed);
            motors.f.fwd(speed);
        });

        socket.on('reverse', function () {
            speed = 120;
            motors.a.rev(speed);
            motors.b.rev(speed);
            motors.c.rev(speed);
            motors.d.rev(speed);
            motors.e.rev(speed);
            motors.f.rev(speed);
        });

        socket.on('left', function () {
            var aSpeed = 220;
            var bSpeed = 50;
            motors.a.fwd(aSpeed);
            motors.b.rev(bSpeed);
            motors.c.fwd(aSpeed);
            motors.d.rev(bSpeed);
            motors.e.fwd(aSpeed);
            motors.f.rev(bSpeed);
        });

        socket.on('right', function () {
            var aSpeed = 50;
            var bSpeed = 220;
            motors.a.rev(aSpeed);
            motors.b.fwd(bSpeed);
            motors.c.rev(aSpeed);
            motors.d.fwd(bSpeed);
            motors.e.rev(aSpeed);
            motors.f.fwd(bSpeed);
        });
    });
});
*/
