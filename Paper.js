class Paper{
	constructor(x,y)
	{
		var options={
			restitution:0.3,
	        density:1.2			
			}
		this.width=50;
		this.heigth=50;
		this.body=Bodies.rectangle(x, y, 50,50 , options);
        this.image=loadImage("paper.png")
 		World.add(world, this.body);

	}
	display()
	{
			var paperPos=this.body.position;		
			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.width, this.heigth);
			pop()
			}
        }