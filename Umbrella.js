class Umbrella{
    constructor(x,y){
        var option={isStatic:true}
        this.body= Bodies.circle(x,y,50,option);
        World.add(world.this.body)
        this.image=loadImage();
    }
}