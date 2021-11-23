class Building {
  constructor(x, y,width,height) {
    var options = {
        'isStatic': false,
        'mass': 5,
        'restitution': 0.09
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display(){
    console.log(this.velocity);
    var pos = this.body.position;
    
    push();
    fill("blue");
    translate(pos.x, pos.y);
    rect(0,0,this.width,this.height);
    pop();
  }
}