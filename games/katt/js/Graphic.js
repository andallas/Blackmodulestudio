function Graphic()
{
  system.log("Constructing Graphics Engine...");
  var self = this;

  this.clearCanvas = function()
  {
		buffer.clearRect(0, 0, system.width, system.height);
		buffer.fillStyle = "rgb(100, 100, 100)";
        buffer.fillRect(0, 0, system.width, system.height);
  }
  
  this.update = function()
  {
		self.clearCanvas();
        var i = world.entities.length;
        while(i--)
        {
            world.entities[i].draw();
        }
		gui.draw();
		buffer.drawImage(_canvas, 0, 0);
  }
}