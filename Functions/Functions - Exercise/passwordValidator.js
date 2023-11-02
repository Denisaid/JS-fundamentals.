function passwordValid(password){

let isValidPass=true;
let isInvalidLength=password.length<6||password.length>10;

if (isInvalidLength){
    isValidPass=false;
    console.log("Password must be between 6 and 10 characters");
}

let isOnlyLettersAndDigits=true;
let digitsCounter=0;

for (let index=0; index<password.length; index++){
    let currentcode=password.charCodeAt(index);
    let isNotNumber=currentcode<48||currentcode>57;
    let isNumber=currentcode>=48&&currentcode<=57;
    let isNotSmallLetter=currentcode<97||currentcode>122;
    let isNotBigLetter=currentcode<65||currentcode>90;

    if (isNumber){
        digitsCounter++;
    }
    if (isNotNumber&&isNotSmallLetter&&isNotBigLetter){
        isValidPass=false;
        isOnlyLettersAndDigits=false;
    }
}

if(!isOnlyLettersAndDigits){
    console.log('Password must consist only of letters and digits');
}
if(!(digitsCounter>=2)){
    isValidPass=false;
console.log('Password must have at least 2 digits');
}

if (isValidPass){
    console.log('Password is valid');
}

}

passwordValid('Picture')