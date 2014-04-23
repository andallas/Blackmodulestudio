// System
document.write('<script type="text/javascript" src="js/System.js"></script>');
document.write('<script type="text/javascript" src="js/Clock.js"></script>');
document.write('<script type="text/javascript" src="js/Input.js"></script>');
document.write('<script type="text/javascript" src="js/World.js"></script>');

// Entities
document.write('<script type="text/javascript" src="js/Entity.js"></script>');
document.write('<script type="text/javascript" src="js/Entity_Player.js"></script>');

// Graphics
document.write('<script type="text/javascript" src="js/Gui.js"></script>');
document.write('<script type="text/javascript" src="js/Gui_Debug.js"></script>');
document.write('<script type="text/javascript" src="js/Gui_HUD.js"></script>');
document.write('<script type="text/javascript" src="js/Graphic.js"></script>');

// Audio

// Engine
document.write('<script type="text/javascript" src="js/Engine.js"></script>');

var system, clock, input, world, gui, debug, lighting, graphic, canvas, _canvas, he;
function InitializeObjectsAndRunEngine()
{
    // System
    system = new System();
        system.log("Initializing game objects and starting Engine...");
        clock = new Clock();
        input = new Input();
        world = new World();

    // Entities
    player = new Entity_Player();
        
    // Graphics
    graphic = new Graphic();
        gui = new Gui();
        debug = new Gui_Debug();
        hud = new Gui_HUD();

    // Audio
    
    // Engine
    engine = new Engine();
        engine.run();
}