function Gui_Debug()
{
  system.log("Constructing Debug Gui...");
  var self = this;
  this.baseColor = 'rgb(200, 200, 255)';
  this.baseFont = '12px Arial';
  
  this.update = function()
  {
	
  }
  
  this.draw = function()
  {
	gui.drawText({text:'Engine | Blackmodule Studio', x:5, y:4, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
	gui.drawText({text:'FPS | ' + clock.fps, x:system.width - 60, y:4, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
	gui.drawText({text:'Tick | ' + clock.ticks, x:system.width - 115, y:4, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
	gui.drawText({text:'Event Tick | ' + clock.eventTicks, x:system.width - 200, y:4, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
	gui.drawText({text:'Current Frame | ' + clock.inc_fps, x:system.width - 315, y:4, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
	gui.drawText({text:'Keys Pressed | ' + input.keysPressed, x:5, y:system.height - 18, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
	gui.drawText({text:'Mouse | x:' + input.x + ' y:' + input.y + ' |', x:200, y:system.height - 18, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
  }
}