let color = ["black", 1, "green", "yellow", { name: "anusha" }];

//toString() : Which converts to string with coma seprated
const colorString = color.toString();
// console.log(colorString);

//join()->Simimlar to toString() only difference is we can provide a seprator
const colorString2 = color.join("_");
// console.log(colorString2);

class NILI {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  toString() {
    return `Person's ${this.firstName} ${this.lastName}`;
  }
}
const pName=new NILI("Anusha","Dheshpande")
// console.log(pName.toString())

class Product{
    constructor(name,mail,id){
        this.name=name
        this.mail=mail
        this.id=id
    }
    toString(){
       return `Name: ${this.name},Mail ${this.mail},Id ${this.id}`
    }
}
const p=new Product('Anusha',"somethin@gmail.com",'124')
// console.log(p.toString())

const a ={
name:"anusha",
adress:"deshpande",
toString(){
return `name is ${this.name} anf adress is ${this.adress}`
}
}
// console.log(a.toString())
const car = {
    model: "Tesla",
    year: 2023,
    join() {
      return `Model: ${this.model}, Year: ${this.year}`;
    }
  };
  
  console.log( 3+2+"7");