class Plane {
    constructor(x, y,width,height) {
      var options = {
          'isStatic': false,
          'mass': 5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
  
      World.add(world, this.body);

      
    }
    display(){
      var pos = this.body.position;
      
      push();
      //fill("blue");
      translate(pos.x, pos.y);
      rect(0,0,this.width,this.height);
      pop();
    }
  }