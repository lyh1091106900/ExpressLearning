/**
* ...扩展运算符
*/
var useObject1 = {name:'Tome',age:'12'};
var useObject2 = {class:'12'};
var useObject3 = {friends:'Mike'};

var person ={...useObject1,
             ...useObject2,
			 ...useObject3,
			 }
console.log(person);
//输出{ name: 'Tome', age: '12', class: '12', friends: 'Mike' }

