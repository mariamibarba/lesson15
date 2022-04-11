// 1)გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   
// currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 
// 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.

const currentDate = new Date('April 11, 2022 ');
const currentDay = currentDate.getDay()

switch (currentDay) {
    case 0:
    	console.log("Sunday");
    	break;
    case 1:
    	console.log("Monday");
    	// break;
    case 2:
    	console.log("Tuesday");
        // break;
    case 3:
    	console.log("Wednesday");
    	// break;
    case 4:
    	console.log("Thursday");
    	// break;
    case 5:
    	console.log("friday");
    	// break;
    case 6:
    	console.log("Saturday");
    	// break;
}

// 2)

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }


// 3))

// let i = 0;
// while (i<50) {
//     console.log(i)
//     i++;   
// }


// 4)

// let i=0;
// do {
//     i++;
// 	console.log(i);
// } while (i < 150);

// 5)
// let myArr =[]
// i=0;
// do{
//     i++;
//     myArr.push(i*i)
// }
// while (i<1000);
// console.log(myArr);