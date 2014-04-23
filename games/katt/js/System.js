function System()
{
  var self = this;
  this.fullscreen = false;
  this.width = 800;
  this.height = 600;
  this.debug = false;
  this.logging = true;

  this.update = function()
  {
	self.systemKeyCheck();
  }

  this.systemKeyCheck = function()
  {
	if(input.key['f2'] == 2){this.debug = !this.debug;}
  }
  
  this.log = function(out)
  {
    if(this.logging) {
      console.log(out);
    }
  }

  this.initSystemWindow = function()
  {
    this.log("System Dimensions: " + system.width + " x " + system.height);
    document.write('<div class="canvas" style="width:' + this.width + '; height:' + this.height + ';"><canvas id="canvas" width="' + this.width + '" height="' + this.height + '"></canvas></div>');
	self.initializeCanvas()
  }
  
  this.initializeCanvas = function()
  {
	system.log("Initializing 2d canvas context...");
	_canvas = document.getElementById('canvas');
	buffer = _canvas.getContext('2d');
  }
  self.log("Constructing System...");
}