// 1. Create the Teacher interface
interface Teacher {
  read only firstName: string; // can only be set when creating the object
  read only lastName: string; // can only be set when creating the object
  fullTimeEmployee: boolean; // must always be defined
  yearsOfExperience?: number; // optional
  location: string; // must always be defined
  [key: string]: any; // allows any extra property
}

// 2. Create Teacher objects

const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York"
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Brown",
  fullTimeEmployee: true,
  location: "Paris",
  contract: true
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false // extra property
};

// 3. Log the teachers
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);