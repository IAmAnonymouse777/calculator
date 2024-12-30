//textfield
let text = document.getElementById('text_field1')

//buttons
let AC = document.getElementById('AC1')
let brackets = document.getElementById('bracket')
let per = document.getElementById('per')
let divide= document.getElementById('divide')

let seven= document.getElementById('seven')
let eight= document.getElementById('eight')
let nine= document.getElementById('nine')
let mul= document.getElementById('mul')

let four= document.getElementById('four')
let five= document.getElementById('five')
let six= document.getElementById('six')
let minus= document.getElementById('minus')

let one= document.getElementById('one')
let two= document.getElementById('two')
let three= document.getElementById('three')
let plus= document.getElementById('plus')

let cross= document.getElementById('cross')
let zero= document.getElementById('zero')
let dot= document.getElementById('dot')
let equal= document.getElementById('equal')

one.addEventListener('click',()=>{
    text.value+='1';
})
two.addEventListener('click',()=>{
    text.value+='2';
})
three.addEventListener('click',()=>{
    text.value+='3';
})
four.addEventListener('click',()=>{
    text.value+='4';
})
five.addEventListener('click',()=>{
    text.value+='5';
})
six.addEventListener('click',()=>{
    text.value+='6';
})
seven.addEventListener('click',()=>{
    text.value+='7';
})
eight.addEventListener('click',()=>{
    text.value+='8';
})
nine.addEventListener('click',()=>{
    text.value+='9';
})
zero.addEventListener('click',()=>{
    text.value+='0';
})


// functional button
AC.addEventListener('click',()=>{
    text.value='';
})
//pending brackets logic
// brackets.addEventListener('click',()=>{
//    let val = text.value;
  
   
//     if (val=="(-"+val+")")
//     {
//         let newVal = getString(val)
//           text.value=newVal;
//     }
//     else
//     {
//         text.value="(-"+val+")";
//     }
// })

// function getString (val)
// {
//     let fullString = val ;
//     if (fullString.length!=0)
//     {
//         let startIndex = '(-'
//         let endIndex=')'
//         let result = fullString.indexOf(startIndex)+startIndex.length;
//         console.log(result)
//         let result2 = fullString.indexOf(endIndex);
//         let substr = fullString.substring(result, result2);
//         return substr;
//     }
    
// }
 
per.addEventListener('click',()=>{
    let  val = text.value
     if(!val.endsWith('%'))
     {
         text.value+='%'
     }
 })
// plus
plus.addEventListener('click',()=>{
   let  val = text.value
    if(!val.endsWith('+'))
    {
        text.value+='+'
    }
})
mul.addEventListener('click',()=>{
    let  val = text.value
     if(!val.endsWith('*'))
     {
         text.value+='*'
     }
 })
 divide.addEventListener('click',()=>{
    let  val = text.value
     if(!val.endsWith('÷'))
     {
         text.value+='÷'
     }
 })
 minus.addEventListener('click',()=>{
    let  val = text.value
     if(!val.endsWith('-'))
     {
         text.value+='-'
     }
 })
 dot.addEventListener('click',()=>{
    let  val = text.value
     if(!val.endsWith('.'))
     {
         text.value+='.'
     }
 })
 cross.addEventListener('click',()=>{
    let val = text.value;
    val = val.substring(0,val.length-1);
    text.value=val;
 })

// result

equal.addEventListener('click',()=>{
    let val = text.value.replaceAll('÷','/')
    try {
        let result = eval(val);
         text.value=result;
    } catch (error) {
        if (error instanceof SyntaxError) {
            text.value="please Enter valid expression !";
        } else {
            console.log("Unexpected error:", error.message);
        }

    }

})