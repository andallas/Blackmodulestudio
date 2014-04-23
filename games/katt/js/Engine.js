function Engine()
{
    system.log("Constructing Engine...");
    var self = this;
    this.running = true;

    this.run = function()
    {
        system.log("Initializing Game Loop...");
        setInterval(self.loop, 0);
    }

    this.loop = function()
    {
        clock.update();
        input.update();
        system.update();
        world.update();
        gui.update();
        graphic.update();
    }
}