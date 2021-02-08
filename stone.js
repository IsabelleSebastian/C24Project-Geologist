class Stone{
    constructor(x,y){
    var options = {
        restitution: 0.4,
        density: 8,
        friction: 1
    }
    this.body = Bodies.rectangle(x,y,60,55,options)
    this.width = 60
    this.height = 55
    World.add(world,this.body)
    }
        display(){
    var hii = this.body.position
    var angle = this.body.angle
    
    push();
    translate(hii.x,hii.y);
    rotate(angle)
    fill("darkblue")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();
    }
    }