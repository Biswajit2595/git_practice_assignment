
// prime number

let num=13;
let factor=0;

for(let a=1;a<=num;a++){
  if(num%a==0)
    factor++;
  }
if(factor==2){console.log(num,"is a Prime number");
}else {console.log(num,"is not a Prime Number");}
