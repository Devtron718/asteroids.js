(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {}
  }

  var Ship = Asteroids.Ship = function (attributes) {
    attributes.velocity = attributes.velocity || [0, 0]
    attributes.color = Ship.COLOR
    attributes.radius = Ship.RADIUS
    Asteroids.MovingObject.call(this, attributes)
  }

  Ship.RADIUS = 11
  Ship.COLOR = "#800080" //purple
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject)

  Ship.prototype.relocate = function () {
    this.velocity = [0, 0];
    this.pos = Asteroids.Util.shipStartPosition();
  }

  Ship.prototype.power = function (impulse) {
    this.velocity[0] += impulse[0];
    this.velocity[1] += impulse[1];
  }
})();
