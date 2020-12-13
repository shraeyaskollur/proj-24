class Paper{
	constructor(x,y,r){
        var options = {
            density:1.1,
            friction:0.5,restitution:0.5
        }
	 this.body = Bodies.circle(x,y,r,options)  
     World.add(world, this.body)
     this.r= r

    }
    display(){
        circle(this.body.position.x, this.body.position.y, this.r*2)
    }
	}