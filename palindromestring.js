let str="Malayalam";
rev_str="";
for(let a=str.length;a>=0;a--){
  rev_str+=str[a];
}
if(str==rev_str){
  console.log(str,"is Palindrome");
}else {
console.log(str,"is not a Palindrome");
}
