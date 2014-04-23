function Input()
{
  system.log("Constructing Input...");
  var self = this;
  this.keysPressed = '';
	this.x = 0;
	this.y = 0;
  this.key = {};
  var keyMap = {
    65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i', 74:'j', 75:'k', 76:'l', 77:'m',
    78:'n', 79:'o', 80:'p', 81:'q', 82:'r', 83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x', 89:'y', 90:'z',
    37:'left', 38:'up', 39:'right', 40:'down', 32:'space', 17:'ctrl', 18:'alt',
    112:'f1', 113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 121:'f10',
    48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 57:'9',
    27:'escape', 8:'backspace', 13:'enter', 16:'shift', 192:'tilde', 187:'plus', 189:'minus',
    188:'comma', 190:'period', 191:'question', 186:'colon', 222:'quote', 219:'lbracket', 221:'rbracket', 220:'backslash'
  };
  addEventListener("mousemove", function(e){ self.getMousePos(_canvas, e); }, false);
  //addEventListener("click", doMouseClick, false);
  addEventListener("keydown", function(e){ self.key[keyMap[e.keyCode]] = 1; }, false);
  addEventListener("keyup", function(e){ self.key[keyMap[e.keyCode]] = 3; /*system.log(e.keyCode);*/ }, false);
  this.resetInput = function()
  {
	this.keysPressed = '';
    for (var k in this.key) {
      if(this.key[k] == 3) {
        this.key[k] = 2;
      } else
      if(this.key[k] == 2) { system.log(k + " pressed.");
        this.key[k] = 0;
      } else
	  if(this.key[k] == 1) {this.keysPressed += k;}
    }
  }
  
  this.getMousePos = function(canvas, evt)
  {
		var obj = canvas, top = 0, left = 0;
		while (obj && obj.tagName != 'BODY') {top += obj.offsetTop; left += obj.offsetLeft; obj = obj.offsetParent;}
		this.x = evt.clientX - left + window.pageXOffset;
		this.y = evt.clientY - top + window.pageYOffset;
  }

  this.update = function()
  {
    this.resetInput();
  }
}