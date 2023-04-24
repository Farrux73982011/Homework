let jobs = [
  {
    id: 1,
    company_name: "raximjon_pepsi",
    tax: 13,
    budget: 2_000_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 15000,
      },
      {
        title: "salary",
        total: 500_000,
      },
      {
        title: "rent",
        total: 200_000,
      },
    ],
  },
  {
    id: 2,
    company_name: "amir_fanta_stick",
    tax: 12,
    budget: 1_800_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 20_000,
      },
      {
        title: "salary",
        total: 700_000,
      },
      {
        title: "rent",
        total: 100_000,
      },
    ],
  },
  {
    id: 3,
    company_name: "frump_buildings",
    tax: 14,
    budget: 3_000_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 50_000,
      },
      {
        title: "salary",
        total: 1_200_000,
      },
      {
        title: "rent",
        total: 500_000,
      },
    ],
  },
  {
    id: 4,
    company_name: "farrux_tube",
    tax: 12,
    budget: 100_000_000_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 700_000,
      },
      {
        title: "salary",
        total: 4_000_000,
      },
      {
        title: "rent",
        total: 300_000,
      },
    ],
  },  
  {
    id: 5,
    company_name: "desla",
    tax: 14,
    budget: 14_000_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 700_000,
      },
      {
        title: "salary",
        total: 3_000_000,
      },
      {
        title: "rent",
        total: 5_000_000,
      },
    ],
  },
  {
    id: 6,
    company_name: "desla",
    tax: 14,
    budget: 14_000_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 700_000,
      },
      {
        title: "salary",
        total: 3_000_000,
      },
      {
        title: "rent",
        total: 5_000_000,
      },
    ],
  },
  {
    id: 7,
    company_name: "nosway_u_rustama",
    tax: 10,
    budget: 100_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 10_000,
      },
      {
        title: "salary",
        total: 0,
      },
      {
        title: "rent",
        total: 0,
      },
    ],
  },
  {
    id: 8,
    company_name: "vinovodochnaya_u_timura",
    tax: 21,
    budget: 1_000_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 40_000,
      },
      {
        title: "salary",
        total: 20_000,
      },
      {
        title: "rent",
        total: 30_000,
      },
    ],
  },
  {
    id: 9,
    company_name: "sokhib_books",
    tax: 10,
    budget: 400_000,
    expensesPerYear: [
      {
        title: "furniture",
        total: 40_000,
      },
      {
        title: "salary",
        total: 12_000,
      },
      {
        title: "rent",
        total: 15_000,
      },
    ],
  },
];
let sucsesfull = [];
let unsucsesfull = [];
let orvk =0;
let min
let max
console.log(jobs);
let arr = []
let objiyrashod
for (let item of jobs) {
  let total = Math.round(
    item.expensesPerYear.reduce((a, b) => a + b.total, 0) / 12
  );
 
  let budget = Math.round(item.budget / 12);
  let tax_summ = (item.tax * budget) / 100;
  
  item.percent = (total * 100) / budget;

  objiyrashod = total + tax_summ;
  arr.push(objiyrashod)
  let asd = budget - objiyrashod;
  if (asd > 0) {
    sucsesfull.push(item.company_name);
  } else unsucsesfull.push(item.company_name);
  max = Math.max.apply(null,arr)
  min = Math.min.apply(null,arr)
  let summ = orvk / 9
  console.log(summ);
}

console.log(max);
console.log(min);
console.log(sucsesfull, unsucsesfull);

for(let i of jobs){
    for(let item of i.expensesPerYear){
        arr.push(item)
        orvk=orvk+item.total
    }
}
console.log(orvk);
