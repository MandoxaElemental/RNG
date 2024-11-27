let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
let name3 = document.getElementById('name3');
let name4 = document.getElementById('name4');
let name5 = document.getElementById('name5');
let role1 = document.getElementById('role1');
let role2 = document.getElementById('role2');
let role3 = document.getElementById('role3');
let role4 = document.getElementById('role4');
let role5 = document.getElementById('role5');
let codestack1 = document.getElementById('codestack1');
let codestack2 = document.getElementById('codestack2');
let codestack3 = document.getElementById('codestack3');
let codestack4 = document.getElementById('codestack4');
let codestack5 = document.getElementById('codestack5');
let email1 = document.getElementById('email1');
let email2 = document.getElementById('email2');
let email3 = document.getElementById('email3');
let email4 = document.getElementById('email4');
let email5 = document.getElementById('email5');
let prevName1 = document.getElementById('prevName1');
let prevName2 = document.getElementById('prevName2');
let prevName3 = document.getElementById('prevName3');
let prevName4 = document.getElementById('prevName4');
let prevName5 = document.getElementById('prevName5');
let prevNameList = document.getElementById('prevNameList');
let randomName1 = "";
let randomName2 = "";
let randomName3 = "";
let randomName4 = "";
let randomName5 = "";
let numArr = [];
let prevArr = [];
let changeBtn = document.getElementById('changeBtn');

function getNameData(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        return data.names
    }
    )
}

getNameData();

function getRandomName(names){
    for(let i = 0; i < 5; i++){
        let randomIndex = Math.floor(Math.random() * names.length);
        if(numArr[i] != numArr[i-1]){
            numArr[i] = randomIndex;
        }
        else{
            numArr[i] = randomIndex + 1;
        }
        return names[numArr[i]];
    }
}

changeBtn.addEventListener('click', (event)=>{
    getNameData().then(names => {
        prevName1.innerText = name1.innerText;
        prevName2.innerText = name2.innerText;
        prevName3.innerText = name3.innerText;
        prevName4.innerText = name4.innerText;
        prevName5.innerText = name5.innerText;
        let randomName1 = getRandomName(names);
        let randomName2 = getRandomName(names);
        let randomName3 = getRandomName(names);
        let randomName4 = getRandomName(names);
        let randomName5 = getRandomName(names);
        name1.innerText = randomName1.firstName + " " + randomName1.lastName;
        name2.innerText = randomName2.firstName + " " + randomName2.lastName;
        name3.innerText = randomName3.firstName + " " + randomName3.lastName;
        name4.innerText = randomName4.firstName + " " + randomName4.lastName;
        name5.innerText = randomName5.firstName + " " + randomName5.lastName;
        codestack1.innerText = "Codestack Email: " + randomName1.codestack;
        codestack2.innerText = "Codestack Email: " + randomName2.codestack;
        codestack3.innerText = "Codestack Email: " + randomName3.codestack;
        codestack4.innerText = "Codestack Email: " + randomName4.codestack;
        codestack5.innerText = "Codestack Email: " + randomName5.codestack;
        email1.innerText = "Email: " + randomName1.email;
        email2.innerText = "Email: " + randomName2.email;
        email3.innerText = "Email: " + randomName3.email;
        email4.innerText = "Email: " + randomName4.email;
        email5.innerText = "Email: " + randomName5.email;
        role1.innerText = "Position: " + randomName1.position;
        role2.innerText = "Position: " + randomName2.position;
        role3.innerText = "Position: " + randomName3.position;
        role4.innerText = "Position: " + randomName4.position;
        role5.innerText = "Position: " + randomName5.position;
    })
})