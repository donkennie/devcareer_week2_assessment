//Create an empty object called dog
let dog = new Object();

//Print the the dog object on the console
console.log(dog);

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
let dogName = dog.name = "Gallafi";
let dogLegs = dog.legs = "Four";
let dogColor = dog.color = "Brown";
let dogAge = dog.age = 1;
let dogBark = dog.bark = () => "woof woof";

//Get name, legs, color, age and bark value from the dog object
const printValue = value => console.log(value);
printValue(dogName);
printValue(dogLegs);
printValue(dogColor);
printValue(dogAge);
printValue(dogBark());

//Set new properties the dog object: breed, getDogInfo
let dogBreed = dog.breed = "BullDog";
let dogInfo = dog.getDogInfo = "A dog like human being";


const usersDetails = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

  
//Find the person who has many skills in the users object.
const personWithHighestSkill = Object.fromEntries([
    Object.entries(usersDetails).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  ]);
  console.log(personWithHighestSkill);

//Count logged in users, count users having greater than equal to 50 points from the following object.
const count = Object.values(usersDetails).filter(getUser => getUser.isLoggedIn).length
console.log(count)
const pointCount = Object.values(usersDetails).filter(user => user.points >= 50).length
console.log(pointCount)

//Find people who are MERN stack developer from the users object
const mern = Object.entries(usersDetails).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
console.log(mern)

//Get all keys or properties of users object
const getAllProperties = usersDetails;
console.log(getAllProperties);

//Get all the values of users object

//Use the countries object to print a country name, capital, populations and languages.


//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, 
//totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description 
//and expenses is a set of incomes and its description

const personAccount = 
  {
    firstName: "Joe",
    lastName: "Dool",
    incomes: 2000,
    expenses: 1050,
  }

const totalIncome = () => personAccount.incomes;

const totalExpense = () => personAccount.expenses;

const accountInfo = () => personAccount.firstName + " " + personAccount.lastName ;
console.log(accountInfo())

const addIncome = (income) => personAccount.incomes = income;
console.log(addIncome(2000))
const addExpense = (expense) => personAccount.expenses = expense;

const accountBalance = () => personAccount.incomes - personAccount.expenses;
console.log(accountBalance())

const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

const signUp =( "/register", (req, res) =>
{
   const {email, username, password } = req.body;

   if(req.body.email === users[0].email || req.body. username === users[0].username){
      res.send("Email or Username is taken");
   }

   const save = users.push({
    _id : "",
    username : "",
    email : "",
    password: "",
    createdAt: new Date(),
    isLoggedIn: false
   });

   res.json(users[users.length - 1]);
})

const signIn =("/login", (req, res) => {
   if(req.body.email === users[0].email && req.body.password === users[0].password ){
     res.json(users[0]);

   }
   res.status(400).json("");
})


//Create a function called rateProduct which rates the product

const rateProduct = (productId) => {

   const findProductId = products.find(f => f._id === productId)

  //  products.forEach(element => {
  //    products[0].ratings[0].rate = element   //I'm trying to do some stuff here, for the continuous rating
  //  });

   const rate = findProductId.ratings[0].rate + 1;

  return rate;
}
console.log(rateProduct('hedfcg'));

//Create a function called averageRating which calculate the average rating of a product
const averageRateProduct = (averageRate) => {

  const prod = products.find(f => f._id === averageRate)
  const cal = prod.ratings[0].rate / 2;

  return cal;

}

//This function will help to like the product if it is not liked and remove like if it was liked.
const likeFunction = (userId) => {

  const following = products.find(o => o.likes == userId);

  if(!following){

    console.log("Liked")

  }

  else{

    console.log("Unliked")
  }
}

likeFunction('fg12cy');