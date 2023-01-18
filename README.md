# Project Zoo Functions

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>

### Block 8 Project: Higher Order Functions - JavaScript ES6

👋 Hello! In this project i used spread operator, rest parameters, object destructuring, object property shorhand, default params and HOF's, like:
forEach, find, some, every, sort, map, filter and reduce, to develop a search system for a zoo.

📍 Here I use **JavaScript** for pratice the skills:

- Creating readable, concise and expressive code using the new features of ES6;
- Use the HOF's to create and manipulate arrays;
- Choose the most appropriate HOF to obtein an expected result;
- Learn to use the Higher Order Functions together;
- Interpret unit tests and produce solutions that meet them.



📖 **The project requirements were**:



**1. Implement the getSpeciesByIds function** ✔️
- This function is responsible for searching animal species by id. Returns an array containing the species referring to the ids passed as a parameter,
and may receive one or more ids.

**2. Implement the getAnimalsOlderThan function** ✔️
- This function, from the name of a species and a minimum age, checks if all animals of that species have the specified minimum age.

**3. Implement the getEmployeeByName function** ✔️
- This function is responsible for searching collaborators by first or last name.

**4. Implement the getRelatedEmployees function** ✔️
  - Considering the good practice of breaking code into smaller pieces, here is the getRelatedEmployees function that you should split into two functions:

  - isManager - which will be responsible for checking if a collaborator is a manager or not. The return of this function must be a boolean: true or false.

  - getRelatedEmployees - which uses the first function to display the following output:
  - if it is a manager collaborator, it must return an array containing the names of the collaborators for whom he is responsible;
  - if it is not a manager collaborator, an error should be generated with the Error constructor function of the JavaScript standard library with the message "The inserted id does not belong to a manager collaborator!".

**5. Implement the countAnimals function** ✔️
- This function is responsible for counting the number of animals of each species.

**6. Implement the calculateEntry function** ✔️
- You must isolate the part of the logic in the countEntrants function that is in the same file as the calculateEntry function. It should receive the array of visitors and return an object with the count according to the following sorting criteria:

- Those under 18 are classified as children;
- Persons aged 18 and over and under 50 are classified as adults (adult);
- People aged 50 years or older are classified as elderly people (elderly people).
- The function return must be an object in the following format: { child: 3, adult: 2, senior: 1 }

- After you finish implementing the countEntrants function you should use it to implement the calculateEntry function. This must receive a matrix of visitors and based on the number of visitors and age group of each one, must return the total amount to be charged.

**7. Implement the getAnimalMap function** ✔️
- The function is responsible for the geographic mapping of species and their animals, and can also filter them by alphabetical order and gender.

**8. Implement the getSchedule function** ✔️
- The function is responsible for making available the animals' time information in a query for the user, who may want to have access to the schedule for the week, for a day or for a specific animal.

**9. Implement the function getOldestFromFirstSpecies** ✔️
- The function searches for information about the oldest animal of the first species managed by the used parameter.

**10. Implement the function getEmployeesCoverage** ✔️
- This role will be responsible for associating coverage information of employees.
- The coverage must be represented by an object with the following properties:

```
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
  "fullName": "Sharonda Spry", // nome completo: firstName + lastName
  "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
  "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}

```

- The function must receive an options object that determines its behavior, being:
- name: The first or last name of the person to be searched for.
- id: The id of the person to be searched for.

🙏🏽 Thanks for viewing this repository!
