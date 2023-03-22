if(true){
    // let a=22;
    var a=22;
}
console.log(a)

let a =100;
function App(){
    console.log("1", a);
    let a=22;
    console.log("2", a);
    {
        let a=100;
    }
    console.log("3", a);
}

// App()

// const vs var
// const veek=36;
// veek=45 //Assignment to a constant variable cannot be done.
// var veek2=36;
// veek2 =57;
// console.log(veek2, veek);

// const on onjects
// const obj= {a:36, b:45, c:56}
// obj.a=55;
// console.log(obj) //const for objects and arrays work differently
// obj=55 //this throws an error
// obj.f=66; //but this works fine
// we can change the value inside the object but not the object
// console.log(obj)

// const with arrays
// const array1=[1,2,3,4,5]
// array1.push(66);//assignment could be done because array is modified within
// console.log(array1)
// array1=array1.push(55)//assignment cannot be dont because array1 is constant