/*
    02 구조분해 할당

    ** 객체를 분해하여 필요한 값에 접근할 수 있음
    ** 배열을 분해하여 할당할 수 있음
 */

const employee = {
    name: "Kim",
    age: 24,
    department: {
        designation: 'I am a web developer'
    }
}

const {name, age, department: { designation }} = employee;

console.log(name);
console.log(age);
console.log(designation);


let [firstName, middleName, lastName] = ['Peter', 'John', 'Parkar'];
console.log(lastName)// Parkar