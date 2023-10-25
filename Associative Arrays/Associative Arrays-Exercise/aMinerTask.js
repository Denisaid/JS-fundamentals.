function aMinerTask(input){

let resourses={};

for(let index=0; index<input.length; index+=2){
    let resource=input[index];
    let quantity=Number(input[index+1]);

    if(resourses[resource]){
        resourses[resource]+=quantity;
    }else {
        resourses[resource]=quantity
    }
}

for (const resource in resourses) {
    console.log(`${resource} -> ${resourses[resource]}`);
}

}


aMinerTask(['Gold','155','Silver','10','Copper','17'])