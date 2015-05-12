// Everyone Class
var Everyone = function(loc) {
    this.loc = loc; 
};

// Enemy Class
var Enemy = function(loc) {
    this.sprite = 'images/enemy-bug.png';
    Everyone.call(this, loc);
};

Enemy.prototype.move = function() {
    this.loc++; 
};

Enemy.prototype.update = function(dt) {
    return this * dt; 
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player Class
var Player = function(loc) {
    this.sprite = 'images/char-princess-girl.png';
    Everyone.call(this, loc);
};

Player.prototype.update = function(dt) {
    return this * dt; 
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function() {
};

// Instantiate Enemies and Player
var enemy = [new Enemy(1), new Enemy(3), new Enemy(7)];
enemy.move();

var player = new Player(5);

// Key Press Listener
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
