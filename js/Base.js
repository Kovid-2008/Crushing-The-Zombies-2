class Base{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;

        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);

    }



    display(){
        var pos=this.body.position
         
         push();
         rectMode(CENTER);
         rect(pos.x,pos.y,this.w,this.h);
         pop();
    }
}

