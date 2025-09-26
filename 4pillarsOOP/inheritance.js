class Charcoal {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    charcoalInfo(){
        console.log("\n==Charcoal Pencil");
        console.log("I used "+ this.color + 
            " color for the highlights of my drawings.");

    }


}
class Graphite extends Charcoal{
    constructor(brand, hard){
        super(brand);
        this.hard = hard;

    }
    graphiteInfo(){
        console.log("\n==Graphite Pencil");
        console.log("I used "+ this.brand + " with " + this.hard +
            " pencil to control the hardness of lines");
    }
}
var char = new Charcoal("Faber Castle", "White");
char.charcoalInfo();
var gra = new Graphite("H&V","4b");
gra.graphiteInfo();