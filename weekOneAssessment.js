 const countries = [
    'Albania',
    'Bolivia',
     'Canada',
    'Denmark',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

 var emptyArray = new Array();

 var arrayWithValues =["C#", "Javascript", "Ruby", "Sql", "Html", "Css", "SignalR"]

 let length = arrayWithValues.length;

 let theFirstItem = arrayWithValues[0];

 let theMiddleItem = arrayWithValues[3];

 let theLastItem= arrayWithValues[arrayWithValues.length - 1];

 let mixedDataType =["Ajeigbe", "Kennie", 08, 02, false, "Single", "Male"];

 let theLengthOfMixedDataType = mixedDataType.length;

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

 console.log(itCompanies);

 let numberOfItCompanies = itCompanies.length

 let firstCompany = itCompanies[0];

 let middleCompany = itCompanies[3] 

 let lastCompany = itCompanies[itCompanies.length - 1]

 const eachItCompany = itCompanies.forEach(itCompany => {
     console.log(itCompany);
 });

 const eachItCompanyToUppercase = itCompanies.map(itCompany => {
     return itCompany.toUpperCase();
 });

 console.log(eachItCompanyToUppercase)

 const arrayAsASentence = console.log(itCompanies + ',' + 'are big IT companies')

const checkIfCompanyExist = function exist(check){

    const findValue = itCompanies.find(obj => obj === check)
    if(!findValue){
        return "Not Found";
    }

    return findValue;
}
 console.log(checkIfCompanyExist("Microsoft"))

 const filterAnArray = itCompanies.filter(obj => obj === "oo" )

 console.log(filterAnArray)

 const sortAnArray = itCompanies.sort();

 const reverseAnArray = itCompanies.reverse();

const sliceTheFirstThreeItems = itCompanies.slice(0,3)

const sliceTheLastThreeItems = itCompanies.slice(3, 0); 

const sliceTheMiddleThreeItems = itCompanies.slice(4, 1)

console.log(sliceTheMiddleThreeItems)

const removeFirstItem = itCompanies.shift()

const removeMiddleItem = itCompanies.splice(3, 1)

const removeLastItem = itCompanies.pop()

const removeAllItems = itCompanies.length = 0

console.log(itCompanies)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

const addToTheFirst = shoppingCart.unshift("Meat")

const addToTheEnd = shoppingCart.push("Sugar")

const removeTheLastItem = shoppingCart.pop();


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort();

const theMinValue = Math.min(...ages)

const theMaxValue = Math.max(...ages)

const averageNumber = ages[Math.floor(ages.length/2)];

const rangeNumber = theMaxValue - theMinValue;
