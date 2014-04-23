function Gui_HUD()
{
  system.log("Constructing HUD Gui...");
  var self = this;
  this.baseColor = 'rgb(200, 200, 255)';
  this.baseFont = '12px Arial';
  
  this.update = function()
  {
	
  }
  
  this.draw = function()
  {
	gui.drawText({text:'Engine | Blackmodule Studio', x:5, y:4, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
	gui.drawText({text:'Life | ' + player.life, x:5, y:system.height - 18, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
	gui.drawText({text:'Ammo | ' + player.secondaryAmmo, x:200, y:system.height - 18, font:this.baseFont, alignX:'left', alignY:'top', color:this.baseColor});
  }
}