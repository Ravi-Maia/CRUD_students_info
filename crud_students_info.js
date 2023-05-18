console.log("running");
let DataStudents = {};
console.log(DataStudents);
let classNum = 0;
let classNumContainer = new Map();
console.log(classNumContainer);

const add = () => {DataStudents[classNum] = {"name": '', age: 0, email:''}};
add();

const addContent = () => {insertData()};

const insertData = () => {    
    let studentName = document.getElementById('stud-name');
    let studentAge = document.getElementById('age');
    let studentEmail = document.getElementById('email');
    if(studentName.value === '') {
        console.log('cannot leave name empty');        
    } else {
        classNumContainer.set(DataStudents[classNum].name = studentName.value, classNum);
        console.log(classNumContainer.get(studentName.value));        
    };
    if(studentAge.value === '' ) { 
        console.log('cannot leave age empty');
         
    } else {
        DataStudents[classNum].age = studentAge.value;
        classNumContainer.set(DataStudents[classNum].age = studentAge.value, classNum);
    };
    if(studentEmail.value === '') { 
        console.log('cannot leave email empty');   
    } else {
        DataStudents[classNum].email = studentEmail.value;
        classNumContainer.set(DataStudents[classNum].email = studentEmail.value, classNum);
    };
    
    if(studentName.value && studentAge.value && studentEmail.value) {
        classNumContainer.set(DataStudents[classNum].id = Math.random(2).toFixed(2) * 1000);
        add2();      
    };
};

const add2 = () => {classNum++; DataStudents[classNum] = {name: '', age: 0, email: ''}; document.getElementById('stud-name').value = ''; document.getElementById('age').value = ''; document.getElementById('email').value = '';};

function find() {
    let find2 = document.getElementById('find');
    let foundName = Object.values(DataStudents).find(value => value.name === find2.value);
    console.log(foundName);
    let foundIdade = Object.values(DataStudents).find(value => value.age === find2.value);
    console.log(foundIdade);
    let foundEmail = Object.values(DataStudents).find(value => value.email === find2.value);
    console.log(foundEmail);
    let foundId = Object.values(DataStudents).find(value => value.id === find2.value);
    console.log(foundId);
    document.getElementById('find').value = '';
};

let updateInfo
const modifyContent = () => {
    updateInfo = document.getElementById('update');    
    let enterNewData = prompt('New data');    
    for(keys in DataStudents) {
        let values = DataStudents[keys]
        for(keys in values) {
            if(values[keys] === updateInfo.value) {
                values[keys] = enterNewData;
            };
        };
    };
    document.getElementById('update').value = '';
};

let deleteInfo;
function deleteContent() {
    deleteInfo = document.getElementById('delete');
    console.log(classNumContainer.get(deleteInfo.value));
    console.log(DataStudents)
    delete DataStudents[classNumContainer.get(deleteInfo.value)];
    document.getElementById('delete').value = '';
};