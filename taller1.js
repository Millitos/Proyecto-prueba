let deparment = "Santander";
let city = "Bucaramanga";
let neighborhood = "San Francisco";
let adress = "cra 27 #44-50";

//document.write(deparment);
console.log(deparment);
console.log(city);
console.log(neighborhood);
console.log(adress);

let esTercerMundista = true;
let lenguage;
lenguage = "Spanish";

//METHODS
//Includes
let string = '  millos enrique jinete torres  '
console.log(string.length)
console.log(string.includes('millos',))

let array = [1,2,3,4,5,6,7,8,2];
console.log(array.includes(2,1));

//trimStart - trimEnd
console.log((string.trimEnd()).length);
console.log((string.trimStart()).length);

//replace()
let repl = string.replace("enrique","julian");
console.log(repl);

//slice
console.log(array.slice(0,2));

//split
let newArray = string.split(" ");
console.log(newArray);

//tempĺata literals
let text = `millos
            enrique
            jinete 
            torres`;
let fName = "Millos";
let sName = "Enrique";
console.log(text = `mi nombre es ${fName} ${sName}`);

console.log(`mi nombre es ${fName}`);

console.log(`el valor es: ${array[1]*string.length}`);

//back-ticks
let header = "Template literals";
let tags = ["template literals","JavaScript","html"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
    html += `<li>${x}</li>`;
}
html +=`</ul>`;
document.getElementById("demo").innerHTML = html;