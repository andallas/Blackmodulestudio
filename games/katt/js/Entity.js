function Entity(self)
{
    self.x = 400;
    self.y = 300;
    self.speed = 200;
    self.width = 32;
    self.height = 32;
    
    self.update = function()
    {
        console.log("Base");
    }
    
    world.entities.push(self);
}