class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(300,0);
        var inp = createInput('Name');
        inp.position(250,150);
        var button = createButton("PLAY");
        button.position(425, 450);
        button.mousePressed(()=>{
            var name = inp.value();
            var greeting = createElement("h3");
            greeting.html("Hello " + name);
            greeting.position(400, 250);
        })
    }
}