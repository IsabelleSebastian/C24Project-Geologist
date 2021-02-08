class Sand{
    constructor(x,y){
    var options = {
        restitution: 1,
        density: 1.6,
        friction: 1
    }
    this.body = Bodies.rectangle(x,y,8,8,options)
    this.width = 8
    this.height = 8
    World.add(world,this.body)
    }
        display(){
    var hii = this.body.position
    var angle = this.body.angle
    
    push();
    translate(hii.x,hii.y);
    rotate(angle)
    fill("lightorange")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();
    }
    }