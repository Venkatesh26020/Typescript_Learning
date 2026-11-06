let str='Venkatesh';
let rev='';
for(let i=str.length-1;i>=0;i--){
    rev=rev+str.charAt(i);
}
console.log("Reversed word is:" +rev)

console.log("------------");

let str1="My Name is Venkatesh";
let left=0;
let right=str1.length-1;
let char=str1.split('');
let result=''
while(left<right){
    if(char[left]===' ')
    left++;
    else if(char[right]===' ')
    right--;
    else{
        let temp=char[left];
        char[left]=char[right];
        char[right]=temp;
        left++;
        right--;
    }
}
result=char.join('');
console.log("Reversed String is:" +result);

console.log("---------------");

let arr=[12,23,43,21,11,10,8,22];
let max=arr[0];
let arr_1=[];
for(let i=1;i<=arr.length-1;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("The largest Number is:" +max);


console.log("--------------")





let second_arr=[15, 25, 10, 40, 30, 35, 37]
let largest=second_arr[0];
let second=-Infinity;
for(let i=1;i<=second_arr.length-1;i++){
    let current=second_arr[i];
    if(current>largest){
        second=largest;
        largest=current;
    }
    else if(current>second){
        second=current;
    }
}
console.log("Second Largest Number of the array:" +second)


console.log("----------");


let elements=[1,2,3,2,4,3,1,5];
elements.forEach((value,index)=>{
    if(elements.indexOf(value)!=index){
        console.log(value)
    }
})


let data=[1,2,3,5,4,6,3,2,3,1];
let element=3;
let position=[];
let flag=false
for(let i=0;i<=data.length-1;i++){
    if(element===data[i]){
        position.push(i+1)
        flag=true
    }
}
if(flag===true){
    console.log("The position of the element in the array are:"+position)
}
else{
    console.log("Element not found in array");
}

let word="Manikandan";
let count=0;
let new_word=word.toLowerCase();
let chars=new_word.split('');
for(let i=0;i<=new_word.length-1;i++){
    if(chars[i]==='a' || chars[i]==='e' || chars[i]==='i' || chars[i]==='o' || chars[i]==='u'){
        count++;
    }
}
console.log(`The no of vowels in ${word} is: ${count}`)


