class bob{
    constructor(x, y, r) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1,
            "isStatic":false
        }
        this.r = r;
      this.x=x
      this.y=y
        this.body = Bodies.circle(x, y, (this.r)/2, options);
        
       
        World.add(world, this.body);
      }
      display(){
          var pos=this.body.position
      
        push();
        translate(this.body.position.x, this.body.position.y);
       fill("pink")
       ellipseMode(RADIUS)
       ellipse(0,0,this.r,this.r)
        // imageMode(CENTER)
        // image(this.image,0,0,50,50)
        pop();
      }
}