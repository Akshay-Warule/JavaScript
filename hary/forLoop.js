

for(let i=0;i<5;i++)
{
console.log(i);
}
// 0
// VM1965:3 1
// VM1965:3 2
// VM1965:3 3
// VM1965:3 4


let sum=0;
let num=prompt("enter your number");
n=Number.parseInt(num);
for(let i=0;i<n;i++)
{
    sum+=(i+1);
}
console.log("sum of first "+n+"natural number"+sum);


let obj={
    akshay:11,
    atul:33,
    kailash:55,
}
for(a in obj){
    console.log("Markes of"+a+"are"+obj[a]);
}

// Markes ofakshayare11
// VM2857:7 Markes ofatulare33
// VM2857:7 Markes ofkailashare55