// Ex 1
let courseList = [{code: "ACIT1420", name: "Introduction to Systems Administration"}, {code: "ACIT1620", name: "Fundamental Web Technologies"}, {code: "ACIT1515", name: "Scripting for IT"}];


// Ex 2
let input = prompt("Enter a 4 digit number: ");

while (isNaN(Number(input)) || input.length!=4) {
    console.log("Invalid input")
    input = prompt("Try again. Enter a 4 digit number: ");
}


// Ex 3
obj = {
    code: "",
    name: null,
};

matches = 0
for (let item of courseList) {
   
    if (item.code.includes(input)) {
        console.log(`Yes I am taking the course ${item["code"]} -- ${item["name"]}`);
        matches++;
    }

}

// add user input to course list if there are no matches
if (matches<1) {
    obj.code = input
    courseList.push(obj);
    console.log(`Successfully added course code ${input} to course list`)
}


