let password = "Surya is a Good Boy12$"
password = password.replaceAll(" ","")
let a =0,b=0,s=0
var regex = /[^a-zA-Z0-9]/;
for(let i=0;i<password.length;i++){
    let c = password.charAt(i)
    if(c>='a' && c<='z' && a==0){
        ++a
    }else if(c>='A' && c<='Z' && b==0){
        ++b
    }else if(regex.test(password) && s==0){
        ++s
    }
}
console.log(password);
console.log(a);
console.log(b);
console.log(s);

if(a+b+s ==3){
    console.log("Sucess");
}else{
    console.log("Repeat");
}