
class Employee{
    #name
    #baseSalary
    
    setName(val){
        this.#name = val;
    }
    setBaseSalary(val){
        this.#baseSalary =val
    }
    getName(){
        return this.#name;
    }
    getSalary(){
        if(this.#baseSalary==0){
            return this.#baseSalary;
        }else{
            let balance = 100;
            return this.#baseSalary+ balance;
        }
    }
}
var emp = new Employee();
emp.setName("Gracelie");
emp.setBaseSalary(10);

console.log(emp.getName());
console.log(emp.getSalary());
