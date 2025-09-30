let name = "Gracelie Mae Cepada";
let course = "Bachelor of Science in Information Technology";
let yearLevel = "2nd Year";
let tlhours = "8";
let tlstudy = "2";

console.log ("\nName: "+ name + "\nCourse: "+ course+ "\nYear Level: "+ yearLevel+ "\n\nTotal hours of sleep: "+ tlhours+"\nTotal hours of study: "+ tlstudy);

if(tlhours>=5){
    console.log("\nGreat! You studied enough today!");
}else{
    console.log("You need to study more.");
}

let subjects = ["Web Systems","Event Driven Programming","OOP","Networking","Database Management"];
    console.log ("\nList of my Subject this sem: ");

 for (let i=0; i<subjects.length; i++){
    console.log(subjects[i]);
}

function greet(name){
    console.log("\nMy name is "+ name);
}
greet(name + ", a "+ yearLevel +" "+course);