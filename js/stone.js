class Stone{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r
        var options={
            restitution:0.1
        }

        this.body=Bodies.circle(this.x,this.y,r,options);
        World.add(world,this.body);
    }


    draw(){
    let pos=this.body.position;
    push();
    strokeWeight(1);
    image(sImg,pos.x,pos.y,70,70);
    
    pop();
    }
}