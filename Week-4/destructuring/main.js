//Ex - 1;

// const array = [1, 2, 3, 4];

// const lari = () => {
//     return array.reverse();
// };

// console.log(lari());

// Ex-2

const array1 = [1, 2, 3, 4];

const array2 = [5, 6, 7, 8];

function reverseArray(para1, para2) {
    const reverse = [...para1, ...para2];
    return reverse.reverse();
}

console.log(reverseArray(array1, array2));

function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}
logInfo({ name: "Berlin", country: "Germany", population: 300000 });
