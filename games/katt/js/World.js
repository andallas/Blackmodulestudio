function World()
{
    system.log("Constructing World...");
    var self = this;
    this.width = system.width;
    this.height = system.height;
    this.entities = [];

    this.update = function()
    {
        var i = this.entities.length;
        while(i--)
        {
            this.entities[i].update();
        }
    }
}