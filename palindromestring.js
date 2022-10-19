let str="Malayalam";
rev_str="";
for(let a=0;a<=str.length-1;a--){
  rev_str+=str[a];
}
if(str===rev_str){
  console.log(str,"is Palindrome");
}else {console.log(str,"is not a Palindrome");
}