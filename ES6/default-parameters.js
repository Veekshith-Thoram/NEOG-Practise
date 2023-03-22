// const defaultParameters = (a,b) => a+b;

// console.log(defaultParameters(5));//it returns NaN

function defaultParameters(a, b){
    // b=b||0;//in old days default parameer declaration
    b=b??0;//nullish coalescing
    return a+b;
}
console.log(defaultParameters(2))