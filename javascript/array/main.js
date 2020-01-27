const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0;i<companies.length;i++){
//     console.log(companies[i])
// }

//forEach
// companies.forEach(function(company){
//     console.log(company)
// })


//filter age
// const carDrink = []
// for(let i = 0;i<ages.length;i++){
//     if(ages[i]>=18){
//         carDrink.push(ages[i]);
//     }
// }
// console.log(carDrink);

// const carDrink = ages.filter(function(age){
//     return age>=18;
// });
// console.log(carDrink);

// console.log(ages.filter(age=>age>=18));


// filter the retail companies
// const retailCompanies = companies.filter(company=>company.category==='Retail');
// console.log(retailCompanies);

// get 80s companies

// const eightiesCompanies = companies.filter(company=>(company.start>=1980 && company.start < 1990))
// console.log(eightiesCompanies)

// get companies that last 10 yeays or more

// const companiesWhichGreater10years = companies.filter(company=>company.end - company.start>=10)
// console.log(companiesWhichGreater10years)

// create array of company names
// const companiesName = companies.map(company => company.name);
// console.log(companiesName)

// const test = companies.map(company=>`${company.name} [${company.start} - ${company.end}]`);
// console.log(test);

// const agesSquare = ages.map(age=>Math.sqrt(age));
// console.log(agesSquare);

// const ageTimes2 = ages.map(age=>age*2);
// console.log(ageTimes2);

// const agesMap = ages.map(age=>Math.sqrt(age)).map(age=>age*2);
// console.log(agesMap);

// sort

// const sortedCompanies = companies.sort(function(c1,c2){
//     if(c1.start>c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });

// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((c1,c2)=>{return c1.start>c2.start?1:-1});
// console.log(sortedCompanies);

const total = ages.reduce(function(total,age){
    return total + age;
},0);
console.log(total);