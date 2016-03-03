function Player(game) {
  this.game = game;
  this.sprite = null;
  this.bullets = null;

  this.movespeed = 300;

  //gun variables - TODO should be moved to own class
  this.clipSize = 32;
  this.fireRate = 200;
  this.nextFire = 0;
  this.deviation = 0.1; //the lower the more accurate
  this.projectileSpeed = 1000;
  this.fireSound = null;

}

Player.prototype.setPosition = function(x, y) {
  this.sprite.x = x;
  this.sprite.y = y;
}

Player.prototype.create = function() {
  this.sprite = game.add.sprite(0, 0, 'player');

  this.fireSound = game.add.audio('rifleShot');

  //  We need to enable physics on the player
  this.game.physics.arcade.enable(this.sprite);
  this.sprite.body.collideWorldBounds = true;

  //this.sprite.scale.setTo(2,2);

  this.sprite.anchor.setTo(0.25, 0.5);

  //bullets
  this.bullets = this.game.add.group();
  this.bullets.enableBody = true;
  this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
  this.bullets.createMultiple(this.clipSize*2, 'bullet');

  this.bullets.setAll('anchor.x', 0.5);
  this.bullets.setAll('anchor.y', 0.5);
  this.bullets.setAll('outOfBoundsKill', true);
  this.bullets.setAll('checkWorldBounds', true);
  this.bullets.setAll('frame', 8);

}

Player.prototype.update = function() {

  //set the velocity from last frame to 0
  this.sprite.body.velocity.x = 0;
  this.sprite.body.velocity.y = 0;

  var direction = new Phaser.Point();

  //take inputs and work out the direction to move
  if (cursors.left.isDown || wasd.left.isDown)
  {
      //  Move to the left
      direction.x = -1;
  }
  else if (cursors.right.isDown || wasd.right.isDown)
  {
      //  Move to the right
      direction.x = 1;
  }

  if (cursors.up.isDown || wasd.up.isDown) {
    direction.y = -1;
  } else if (cursors.down.isDown || wasd.down.isDown) {
    direction.y = 1;
  }

  direction = direction.normalize();

  // set the velocities to the normalized direction
  this.sprite.body.velocity.x = direction.x * this.movespeed;
  this.sprite.body.velocity.y = direction.y * this.movespeed;

  //face the mouse
  this.sprite.rotation = game.physics.arcade.angleToPointer(this.sprite);

  //when mouse1 is pressed, try and shoot
  if (game.input.activePointer.isDown) {
    this.fire();
  }

}

Player.prototype.fire = function () {
  if (game.time.now > this.nextFire && this.bullets.countDead() > 0) {
    this.nextFire = game.time.now + this.fireRate;

    var bullet = this.bullets.getFirstExists(false);
    var point = new Phaser.Point();
    var point2 = new Phaser.Point();

    point.rotate(0, 0, this.sprite.rotation, false, 25);
    point2.rotate(0, 0, this.sprite.rotation, false, 10);

    //bullet.reset(this.sprite.x + point.x - point2.y, this.sprite.y + point.y + point2.x);
    bullet.reset(this.sprite.x, this.sprite.y);
    bullet.rotation = game.physics.arcade.angleToPointer(bullet);

    bullet.x += point.x - point2.y;
    bullet.y += point.y + point2.x;

    var acc = ((Math.random() * 2) - 1) * this.deviation;
    bullet.rotation += acc;

    game.physics.arcade.velocityFromRotation(bullet.rotation, this.projectileSpeed, bullet.body.velocity);
    this.fireSound.play();

  }
}
