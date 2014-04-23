function Clock()
{
  system.log("Constructing Engine Clock...");
  var self = this;
  this.delta, this.fps, this.inc_fps, this.ticks, this.seconds, this.minutes, this.hours, this.days,
  this.current_time, this.last_time, this.elapsed_time, this.tick_time;
  this.delta = this.fps = this.inc_fps = this.seconds = this.current_time = this.last_time = this.elapsed_time = this.ticks = this.e = 0;
  this.tick_time = 0.0;

  this.update = function()
  {
    this.inc_fps++;
    this.current_time = Date.now();
    this.elapsed_time = this.current_time - this.last_time;
    this.last_time = this.current_time;
    this.delta = this.elapsed_time / 1000;
    this.tick_time += this.delta;
	if(this.eventTicks == this.ticks){this.eventTicks = 0;}
    if(this.tick_time >= (this.ticks / 20))
    {
      this.ticks++;
	  this.eventTicks = this.ticks;
      if(this.ticks > 20)
      {
        this.inc_fps = 0;
        this.seconds++;
        this.ticks = 0;
        this.tick_time = 0.0;
      }
      this.fps = Math.floor(this.inc_fps / this.tick_time);
    }
  }
}