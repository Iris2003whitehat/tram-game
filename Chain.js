class chain
{
    constructor(b1, b2){
        var options = {
            bodyA: b1,
            bodyb: b2,
            stiffness: 0.5            
        }
        
       
        this.chain = Constraint.create(options);
        World.add(myworld, this.sling);
    }
   
   show(){
        
                strokeWeight(7);
                line(this.chain.bodyA.position.x , this.chain.bodyA.position.y,this.chain.bodyb.position.x , this.chain.bodyb.position.y);
               
    }
    
}