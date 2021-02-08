class Hammer{
constructor(x,y){
var options = {
    restitution: 0.8,
    density: 2,
    friction: 1
}
this.body = Bodies.rectangle(x,y,55,60,options)
this.width = 55
this.height = 60
World.add(world,this.body)
}
    display(){
var hii = this.body.position
var angle = this.body.angle

hii.x = mouseX
hii.y = mouseY

push();
translate(hii.x,hii.y);
rotate(angle)
fill("pink")
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop();
}
}