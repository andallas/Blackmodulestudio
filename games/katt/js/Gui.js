function Gui()
{
  system.log("Constructing Gui base...");
  var self = this;
  function GUIText(Text, X, Y, fStyle, aX, aY, col)
  {//new GUIText("The String", x, y, "18px Helvetica", "center", "top", "rgb(96, 255, 96)");
	this.text = Text;
	this.x = X;
	this.y = Y;
	this.fontStyle = fStyle;
	this.alignX = aX;
	this.alignY = aY;
	this.color = col;
  }
  
  this.update = function()
  {
	if(system.debug){ debug.update(); }
  }
  
  this.draw = function()
  {
	if(system.debug){ debug.draw(); }
    else{hud.draw();}
  }
  
  //Utility Functions
  this.drawText = function(textHash)
  {
	buffer.beginPath();
		buffer.fillStyle = textHash.color;
		buffer.font = textHash.font;
		buffer.textAlign = textHash.alignX;
		buffer.textBaseline = textHash.alignY;
		buffer.fillText(textHash.text, textHash.x, textHash.y);
	buffer.closePath();
  }
}