function Entity_Player()
{
    Entity(this);
    this.totalMissiles = 0;
    this.life = 100;
    this.lives = 3;
    this.maxLife = 100;
    this.shieldLevel = 0;
    this.shield = 100;
    this.maxShield = this.shield * this.shieldLevel;
    this.hasShield = false;
    
    this.weapon = 49;// 0 - 48
    //this.secondary = 49;//Starts at 50, 49 = no secondary.
    this.secondary = 9000;
    this.secondaryAmmo = 50;
    this.secondaryAmmoLevel = 1;
    this.maxSecondaryAmmo = 50 * this.secondaryAmmoLevel;
    
    this.weaponFunc = true;//Used for weapon effects
    this.didShoot = false;
    this.onTick = 0;
    this.money = 3000;
    this.currentFuel = 60;
    this.MAX_FUEL = 60;
    
    this.laser = false;//true if laser is on
    this.laserX = this.x;
    this.laserY = this.y - 25;
    this.laserWidth = 20;
    this.laserHeight = this.y - 25;
    
    this.update = function()
    {
        if(this.isAlive())
        {
            // Movement
            if(input.key['w'] == 1)
            {
                this.y -= this.speed * clock.delta;
            }
            if(input.key['a'] == 1)
            {
                this.x -= this.speed * clock.delta;
            }
            if(input.key['s'] == 1)
            {
                this.y += this.speed * clock.delta;
            }
            if(input.key['d'] == 1)
            {
                this.x += this.speed * clock.delta;
            }

            // Primary Shot
            if(clock.ticks != this.onTick)
            {
                this.onTick = clock.ticks;
                if(input.key['space'] == 1)
                {
                    this.shoot();
                }
            }
            
            // Secondary Shot
            if(input.key['b'] == 2)
            {
                this.shootSecondary();
            }
            
            //Laser Updating
            if(this.secondary >= 9000)
            {
                if(input.key['b'] == 2 && this.secondaryAmmo > 0)
                {
                    //if(!sfx.laserPlaying){ sfx.play(1); }
                    this.laser = true;
                    this.laserX = this.x;
                    this.laserY = 0;
                    this.laserHeight = this.y - 25;
                    if(clock.ticks == 0){ this.secondaryAmmo -= 3; if(this.secondaryAmmo < 0){this.secondaryAmmo = 0;} }
                } //else { if(sfx.laserPlaying){ sfx.pause(1); } this.laser = false; }
            } else
            {
                this.laser = false;
                //if(sfx.laserPlaying){ sfx.pause(1); }
            }
            
            if(this.hasShield)
            {
                if(this.shield <= 0)
                {
                    this.shield = 0;
                }
            }
            
            this.x1 = this.x;
            this.y1 = this.y - (this.height / 2);
            this.x2 = this.x - (this.width / 2);
            this.y2 = this.y + (this.height / 2);
            this.x3 = this.x + (this.width / 2);
            this.y3 = this.y + (this.height / 2);
            
            this.levelBoundingCheck();
        }
    }
    
    this.draw = function()
    {
        buffer.beginPath();
            buffer.strokeStyle = 'rgb(0, 128, 255)';
            buffer.lineWidth = 3;
            buffer.arc(this.x, this.y, 28, 0, Math.PI * 2, true);
            buffer.stroke();
        buffer.closePath();
        //buffer.drawImage(playerImages[0], this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height); 
    }
    
    // Utility functions
    this.isAlive = function()
    {
        return (this.life > 0);
    }
    
    this.damagePlayer = function(dmg)
    {
        if(this.hasShield && this.shield > 0)
        {
            this.shield -= dmg * 3;
        } else
        {
            this.life -= dmg;
            if(this.life < 0){this.life = 0;}
        }
        if(!this.isAlive())
        { 
            gco.ShowContinueScreen();
            sfx.play(0);
            explosion = new Explosion(player.x, player.y, 350, 5, 200, 0.1, 3, 0.1);
            explosions.push(explosion);
            this.laser = false;
        }
    }

    this.levelBoundingCheck = function()
	{
		if(this.y - this.height / 2 < 0){this.y = this.height / 2;}
		if(this.y + this.height / 2 > world.height){this.y = world.height - this.height / 2;}
		if(this.x - this.width / 2 < 0){this.x = this.width / 2;}
		if(this.x + this.width / 2 > world.width){this.x = world.width - this.width / 2;}
	}
    
    this.upgradeShield = function()
    {
        this.hasShield = true;
        this.shieldLevel += 1;
        this.maxShield = 100 * this.shieldLevel
        this.resetShield();
    }
    
    this.resetShield = function()
    {
        this.shield = this.maxShield;
    }
    
    this.upgradeSecondaryAmmo = function()
    {
        this.secondaryAmmoLevel += 1;
        this.maxSecondaryAmmo = 50 * this.secondaryAmmoLevel;
        this.resetSecondaryAmmo();
    }
    
    this.resetSecondaryAmmo = function()
    {
        if(this.secondaryAmmo < this.maxSecondaryAmmo)
        {
            this.secondaryAmmo = this.maxSecondaryAmmo;
        }
    }

    this.shoot = function()
    {
        console.log("pew");
        /*
        switch(this.weapon)
        {
            case 0:
            {
                this.totalMissiles += 1;
                if(this.weaponFunc)
                {
                    missile = new Missile(missiles.length, 300, this.weapon, this.x, this.y - 25, 1);
                    missiles.push(missile);
                }
                this.weaponFunc = !this.weaponFunc;
                break;
            }
            case 1:
            {
                this.totalMissiles += 1;
                if(this.weaponFunc)
                {
                    missile = new Missile(missiles.length, 300, this.weapon, this.x - 5, this.y - 25, 2);
                    missiles.push(missile);
                } else
                {
                    missile = new Missile(missiles.length, 300, this.weapon, this.x + 5, this.y - 25, 2);
                    missiles.push(missile);
                }
                this.weaponFunc = !this.weaponFunc;
                break;
            }
            case 2:
            {
                this.totalMissiles += 1;
                if(this.weaponFunc)
                {
                    missile = new Missile(missiles.length, 300, 1, this.x - 5, this.y - 25, 2);
                    missiles.push(missile);
                    missile = new Missile(missiles.length, 300, this.weapon, this.x + 5, this.y - 25, 2);
                    missiles.push(missile);
                } else
                {
                    missile = new Missile(missiles.length, 300, 1, this.x + 5, this.y - 25, 2);
                    missiles.push(missile);
                    missile = new Missile(missiles.length, 300, this.weapon, this.x - 5, this.y - 25, 3);
                    missiles.push(missile);
                }
                this.weaponFunc = !this.weaponFunc;
                break;
            }
            default:{break;}
        }
        */
    }
    
    this.shootSecondary = function()
    {
        if(this.secondaryAmmo > 0 && this.secondary < 9000)
        {
            switch(this.secondary)
            {
                case 50:
                {
                    this.secondaryAmmo -= 1;
                    this.totalMissiles += 1;
                    missile = new Missile(missiles.length, 200, this.secondary, this.x, this.y - 25, 20);
                    missiles.push(missile);
                    break;
                }
                case 51:
                {
                    this.secondaryAmmo -= 1;
                    this.totalMissiles += 1;
                    missile = new Missile(missiles.length, 200, this.secondary, this.x, this.y - 25, 15);
                    missiles.push(missile);
                    break;
                }
                case 52:
                {
                    this.secondaryAmmo -= 1;
                    this.totalMissiles += 1;
                    missile = new Missile(missiles.length, 200, this.secondary, this.x, this.y - 25, 25);
                    missiles.push(missile);
                    break;
                }
            }
        }
    }

}