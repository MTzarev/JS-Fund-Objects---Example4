function city(input) {
//let keys=Object.keys(input);
//let values = Object.values(input);
let entries = Object.entries(input);

for (let [keys, values] of entries) {
    
    console.log(`${keys} -> ${values}`);
}


console.log();
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
// city({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
// });