var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {

    //graphics
    game.load.image('player', 'assets/graphics/entities/player.png', 62, 62);
    game.load.spritesheet('bullet', 'assets/graphics/entities/bullet.png', 32, 32);

    //load the json level files
    game.load.tilemap('level1', 'assets/levels/hell1.json', null, Phaser.Tilemap.TILED_JSON);

    //load the tileset
    game.load.image('tiles', 'assets/graphics/tiles/hell.png');

    //Audio
    game.load.audio('rifleShot', 'assets/audio/effects/rifleFire.mp3');

}

var map;
var layer;

var player = new Player(game);
var cursors;
var wasd;

function create() {

    //TODO maybe add to some interface/debug file
    game.time.advancedTiming = true;

    //load the map
    map = game.add.tilemap('level1');

    //link the json name to the phaser name, 1st param is name in json/tiled. 2nd param is the loaded name in preload
    map.addTilesetImage('BasicHell', 'tiles');

    map.setCollisionBetween(0, 5);
    map.setCollisionBetween(7, 11);
    //map.setCollisionBetween(6, 10);

    //use the layer name from tiled / json file and creates something like a phaser sprite to display
    layer = map.createLayer('Tile Layer 1');



    layer.resizeWorld();

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // The player and its settings
    player.create();
    player.setPosition(game.world.width / 2, game.world.height / 2);

    //game.world.scale.setTo(2, 2);

    game.camera.follow(player.sprite, Phaser.Camera.FOLLOW_LOCKON);


    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

    wasd = {
      up: game.input.keyboard.addKey(Phaser.Keyboard.W),
      down: game.input.keyboard.addKey(Phaser.Keyboard.S),
      left: game.input.keyboard.addKey(Phaser.Keyboard.A),
      right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

}

function update() {

    game.physics.arcade.collide(player.sprite, layer);

    player.update();

    game.debug.text(game.time.fps, 2, 14, "#00ff00");

}

function render() {

    game.debug.text(game.time.fps, 2, 14, "#00ff00");

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 500);

}
