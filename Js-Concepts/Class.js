class Human {
    constructor(gender){
      this.gender = gender;
    }
    
    printGender() {
      console.log(this.gender);
    } 
  }
  
  class Person extends Human{
     nationality = "Indian";
    constructor(name,gender){
      super(gender);
      this.name = name;
    }
    
    printPerson(){
      console.log(this.name + " " + this.gender);
    }

    printNational = () =>{
     console.log(this.nationality);
    }
  }
  
  
  
  let demoPerson = new Person("Max","Male");
  demoPerson.printPerson();
  demoPerson.printNational();
  
  
  
  