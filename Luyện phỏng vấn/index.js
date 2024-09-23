
/* Object literal syntax */
const literal = {
  name: 'lộc',
  age: 21,
  adress: [
    {
      noi_o: 'bình lâm - hiệp đức - quảng nam'
    },
    {
      phone: '0375580391'
    },
    {
      gmail: 'loctrunghoa@gmail.com'
    },
  ]
}
console.log("___literal___", literal)

// Object constructor
const objectContructor = new Object();
objectContructor.name = 'Lộc';
objectContructor.age = 21;
objectContructor.adress = [
  {
    noi_o: 'bình lâm - hiệp đức - quảng nam'
  },
  {
    phone: '0375580391'
  },
  {
    gmail: 'loctrunghoa@gmail.com'
  },
];
console.log("___objectContructor___", objectContructor);

// Function constructor
function FunctionContructor(name, age, adress) {
  this.name = name;
  this.age = age;
  this.adress = adress;
}
const InfoUser = [
  [
    {
      noi_o: 'bình lâm - hiệp đức - quảng nam'
    },
    {
      phone: '0375580391'
    },
    {
      gmail: 'loctrunghoa@gmail.com'
    },
  ]
]
const ValueFunctionContructor
  = new FunctionContructor('Lộc', 21, InfoUser)

console.log("___FunctionContructor___", ValueFunctionContructor)

// ES6 Class
class ObjectClass {
  constructor(name, age, adress) {
    this.name = name;
    this.age = age;
    this.adress = adress;
  }
}
const InfoUserClass = [
  [
    {
      noi_o: 'bình lâm - hiệp đức - quảng nam'
    },
    {
      phone: '0375580391'
    },
    {
      gmail: 'loctrunghoa@gmail.com'
    },
  ]
]
const ValueObjectClass = new ObjectClass('lộc', 21, InfoUserClass);
console.log("___ObjectClass___", ValueObjectClass);

// Object's create method: phương thức tạo đối tượng
let objOne = {
  name: 'Lộc',
  heart: "black",
  gender: 'Nam'
}
let objTwo = {
  type: {
    value: 'hello',
    writable: true,
    enumerable: true
  },
  model: {
    value: 'helloo',
    writable: true,
    enumerable: true
  }
}
const car = Object.create(objOne, objTwo)
console.log("___Object's create method___", car);

// END OBJECT

/* Cách sử dụng prototype Chain */
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.phone = '0375580391';
// let PersonValue = new Person('Tô Văn Lộc', 21)
// console.log(PersonValue.phone)

// Đề bài 1 về Prototype:
function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;

  Book.prototype.getSummary = function () {
    return `Tên sách: ${this.title}, Tác giả: ${this.author}, Thể loại: ${this.genre}`;
  }
  Book.prototype.changeGenre = function (editGenre) {
    this.genre = editGenre;
  }
}
const book1 = new Book("Hạnh phúc", "Tô Văn Lộc", "Ngôn tình");
const book2 = new Book("Cú đấm yêu thương", "Tô Văn Lâm", "Hành động");
const books = [book1, book2];

book1.changeGenre("hello");
const result = document.querySelector('.result');
books.map((item, index) => {
  result.innerHTML += `
    <div> ${index + 1} ${item.getSummary()}</div>
  `
})

// Đề bài 2 Prototype Chain:
function Animal(name, age, species) {
  this.name = name;
  this.age = age;
  this.species = species;
}

Animal.prototype.getInfo = function () {
  return `Tên: ${this.name} - Tuổi: ${this.age} - Loài: ${this.species}`;
}

// Khởi tạo Mammal
function Mammal(name, age, species, hasFur) {
  Animal.call(this, name, age, species);
  this.hasFur = hasFur;
}

// Mammal kế thừa từ Animal
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

// getFurInfo check hasFur
Mammal.prototype.getFurInfo = function () {
  return this.hasFur ? "có lông" : "không có lông";
}

// Khởi tạo Bird
function Bird(name, age, species, canFly) {
  Mammal.call(this, name, age, species);
  this.canFly = canFly;
}

// Bird kế thừa từ Mammal
Bird.prototype = Object.create(Mammal.prototype);
Bird.prototype.constructor = Bird;

// // getFlightInfo check canFly
Bird.prototype.getFlightInfo = function () {
  return this.canFly ? "biết bay" : "không biết bay";
}

const Sutu = new Mammal("Sư tử", 5, "Panthera leo", true);
const DaiBang = new Bird("Đại bàng", 3, "Aquila chrysaetos", true);

// console.log(Sutu.getInfo());
// console.log(Sutu.getFurInfo());
let All = [Sutu, DaiBang];
let result2 = document.querySelector('.result2');
let resultItem = document.createElement('div');
All.forEach((item, index) => {
  resultItem.innerHTML += `
  <div class="getInfo">${index + 1} ${item.getInfo()}</div>
  <div class="getFurInfo">${item.getFurInfo()}</div>
  `
  if (typeof item.getFlightInfo === "function") {
    resultItem.innerHTML += `
  <div class="getFlightInfo">${item.getFlightInfo()}</div>
  `
  }
  result2.appendChild(resultItem)
})

/* Câu 3: Call, Apply, Bind */
// Call: thật ra với bài 2 ở trên đã có sử dụng đến call để mượn tham số của hàm Animal rồi
// Ví dụ nhanh về thằng call viết dưới dạng literal
const person1 = {
  firstName: "Tô Văn",
  lastName: "Lộc",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName: "Ngô",
  lastName: "Huy"
}
// Dưới này sử dụng call để mượn fullname của person1
console.log("___Call mượn phương thức của person1___", person1.fullName.call(person2));

// Apply
// trường hợp sử dụng Apply sử dụng hàm có sẵn của Math
const person3 = [4, 5, 1, 3, 9, 7, 4, 7];
// tìm số lớn nhất
const max = Math.max.apply(null, person3);
console.log("___Apply tìm số lớn nhất", max);
// Trường hợp dùng apply để kết hợp nối 2 mảng lại với nhau
const person4 = [4, 5, 6];
const person5 = [1, 2, 3];
Array.prototype.push.apply(person5, person4);
console.log("___Apply nối mảng___", person5)
// Trường hợp apply kế thừa
function DongVat(name, age) {
  this.name = name;
  this.age = age;
}
function Dogs(name, age, type) {
  DongVat.apply(this, [name, age]);
  this.type = type;
}
const MyDogs = new Dogs("Chó vịt", 5, "Hung dữ")
const MyDogs2 = new Dogs("Chó điên", 10, "Hiền khô")
console.log("___Apply kế thừa 1___", MyDogs);
console.log("___Apply kế thừa 2___", MyDogs2);

// Bind chưa sử dụng nhiều nên chưa tìm hiểu tạm bỏ qua

/* Câu 11: First-Class function */
function FirstClass(name, age) {
  console.log("___First-Class function___", `Tên: ${name} - ${age} tuổi`)
}
const FullName = FirstClass;
function CallFirstClass(name, age, fn) {
  fn(name, age)
}
FullName('Tô Văn Lộc', 21);
FullName('Tô Văn Tuấn', 41);

/* Câu 12: First-order function */
function FirstOrder(name, age) {
  console.log("First-Order function", `Tên: ${name} - ${age} tuổi`);
}
FirstOrder("Tô Văn Lộc", 32);

// Câu 13: higher-order function
const students = [
  { name: "Lộc", age: 21, grades: [8, 7.5, 9] },
  { name: "Huy", age: 20, grades: [6.5, 8, 7.5] },
  { name: "Tài", age: 22, grades: [9, 8.5, 9.5] }
]
function processStudents(students, callback) {
  return callback(students);
}
// Tính tuổi trung bình tất cả học sinh
function TbAge(students) {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length
}
const resultTotalAge = processStudents(students, TbAge);
console.log(`Tuổi trung bình của học sinh: ${resultTotalAge}`)

// Tìm sinh viên có điểm cao nhất
function findTopStudent(students) {
  return students.reduce((topStudent, currentStudent) => {
    const topAvg = topStudent.grades.reduce((sum, grade) => sum + grade, 0) / topStudent.grades.length;
    const currentAvg = currentStudent.grades.reduce((sum, grade) => sum + grade, 0) / currentStudent.grades.length;
    return currentAvg > topAvg ? currentStudent : topStudent;
  });
}

const topStudent = processStudents(students, findTopStudent);
console.log(`Sinh viên có điểm trung bình cao nhất: ${topStudent.name}`);

// tìm điểm trung bình lớn
function filterTopStudents(students) {
  return students.filter(student => {
    const avg = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    return avg >= 8.0;
  });
}

const topStudents = processStudents(students, filterTopStudents);
console.log("Danh sách sinh viên có điểm trung bình >= 8.0:", topStudents.map(student => student.name));


/* Hàm đơn nhất */
function Sum(x) {
  return x * x
}
console.log("___Hàm đơn nhất___", Sum(4));

/* hàm currying */
function Currying(a) {
  return function Currying2(b) {
    return function Currying3(c) {
      return a * b * c;
    }
  }
}
const resultCurrying = Currying(2)(3)(4);
console.log("___Currying___", resultCurrying)

/* Câu 17: let */
// ví dụ:
if (true) {
  let x = 10;
  console.log()
  console.log("test scope let", x)
}
// console.log(x) // chắn chắn không được vì nó chỉ có tác dụng cục bộ
// ví dụ sử dụng var
if (true) {
  var x = 10;
  console.log()
  console.log("test  var", x)
}
// console.log(x) // lúc này thì chắn chắn được vì nó có phạm vi toàn cục


/* Câu 26 closures mai làm ví dụ */