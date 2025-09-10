let name = "Gracelie Mae P. Cepada";
let course = "Bachelor of Science of Information Technology";
let year = "2nd Year";
let tlsleep = "8";
let tlstudy = "2";

console.log("\nName: "+name+"\nCourse: "+course+"\nYear Level: "+year);
console.log("\nTotal Hours of Sleep: "+tlsleep+"\nTotal Hours of Sleep: "+tlstudy);

if(tlsleep>=5){
    console.log("\nGreat! You studied enough today!");
}else{
    console.log("\nYou need to study more.");
}
let subjects = ["Web Systems", "Event Driven Programming", "OOP","Database Management"];
    console.log("\nList of my subject this sem:");

    for (let i = 0; i < subjects.length; i++){
    
    console.log(subjects[i]);
    }
    
 function greet (name) {
    console.log("\nMy name is " + name);
    
 }
greet (name + ", a " + year + " "+ course);