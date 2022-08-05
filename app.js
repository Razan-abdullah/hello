

// function number 1

var n;

var gender;

var age;

 function userInformation(){
n=prompt("Please,Enter your name :");
gender=prompt("Please,Enter your gender ?(Male/Female)");

}

userInformation();


while(1){

    age =prompt("Please,Enter your age");
if (age<=0){
    alert("This age is wrong");
    continue;
    
}
else break;
}



function confirmation (){
c= confirm("Skip the welcoming message");
if (c==false)
{
    if (gender=="Male"){
        alert(`Welcom Mr ${n}`)
    
    }
    else if (gender =="Female"){
        alert(`Welcom Ms ${n}`)
    
    }
    else {
    
        alert(`Welcom ${n}`)
    
    }

    
}


}
confirmation();



//Phase 2 Requirements:
var arr=[];
function userQuestions(){

q1=prompt("Do you love  put a plan for your tasks?(Yes/NO)","invalid");
q2=prompt("Do you FOLLOW this paln ?(Yes/NO)","invalid");
q3=prompt("Do you find hard to make this plan?(Yes/NO)","invalid");
arr.push(q1);
arr.push(q2);
arr.push(q3);
for(let i=0;i<3;i++){

console.log(arr[i]);
}
console.log(arr)
}
userQuestions();