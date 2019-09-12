// // CODE here for your Lambda Classes

// We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
    }
    speak() {
        console.log(`Hello my name is ${thiis.name}, I am from ${this.location}`);
    }
}
// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(instrcAttr) {
    super(instrcAttr);
    this.specialty = instrcAttr.specialty;
    this.favLanguage = instrcAttr.favLanguage;
    this.catchPhrase = instrcAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${this.subject}`);
    }
    grade(student, subject) {
        console.log(`${this.student.name} receives a perfect score on ${this.subject}`);
    }
}
// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects() {
        var list = this.favSubjects;
        list.forEach(subjects => {console.log(`${subjects}`);});
    }
    PRAssignment() {
        console.log(`${student.name} has submitted a PR for ${this.subject}`);
    }
    sprintChallenge() {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}
// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
class ProjectManager extends Instructor {
    constructor(PMAttr) {
    super(PMAttr);
    this.gradClassName = PMAttr.gradClassName;
    this.favInstructor = PMAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${this.student.name}'s code on ${this.subject}`);
    }
}

var ThomasB = new Person ({
    name: "Thomas Bangalter",
    age: 44,
    location: "France",
    
});
ThomasB.speak();

var GuyM = new Student ({
    name: "Guy Manuel",
    age: 45,
    locaiton: "France",
    previousBackground: "Drummer",
    className: "Web00",
    favSubjects: ["Music", "Dance", "Web Development"]
});
GuyM.listsSubjects();
GuyM.PRAssignment("JS");
GuyM.sprintChallenge("JS")

var Dan = new Instructor ({
    name: "Dan Frehner",
    age: 30,
    location: "SLC",
    specialty: "Making Sense",
    favLanguage: "JavaScript",
    catchPhrase: "Let's do this!"
});
Dan.demo("JavaScript");
Dan.speak();

var ShaneG = new ProjectManager ({
    name: "Shane Gooch",
    age: 24,
    locaiton: "Bay Area",
    specialty: "Positivity",
    favLanguage: "???",
    catchPhrase: "???",
    gradClassName: "???",
    favInstructor: "???"
});
ShaneG.standUp("shane:");
ShaneG.debugsCode(TreyM, "Web Development");