class Person {
    constructor(name = "Annonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. This is ${ this.name }`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major ){
        super(name, age);
        this.major = major;
    }
    getMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        
        if (this.getMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

class Friend extends Person {
    constructor(name, age, friend){
        super(name, age);
        this.friend = friend;
    }
    hasFriend(){
        return this.friend;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasFriend()){
            greeting += ` My friend is ${this.friend}`;
        }
        return greeting;
    }

}
const me = new Friend("Danny Yen", 36, "Lebron James");
console.log(me.getGreeting());
const other = new Friend();
console.log(other.getGreeting());