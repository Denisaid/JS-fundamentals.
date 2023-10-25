function companyUser(input){

    let companies={};

    input.forEach(pair => {
        let [company,id]=pair.split(' -> ');

        if (!companies.hasOwnProperty(company)){
            companies[company]=[];
        }
        companies[company].push(id);
    });

    let sortedCompany=Object.entries(companies);

    sortedCompany.sort((a,b)=>a[0].localeCompare(b[0]));

    for (const element of sortedCompany) {
        let companyName=element[0];
        console.log(companyName);
        let set=new Set(element[1]);
        for (const number of set) {
            console.log(`-- ${number}`);
        }
    }


}

companyUser(['SoftUni -> AA12345','SoftUni -> BB12345','Microsoft -> CC12345', 'HP -> BB12345'])