
let DataStudents = {};
console.log(DataStudents);

let classNum = 0;
let DaraStudArr = [];
console.log(DaraStudArr);
let classNumContainer = new Map();
console.log(classNumContainer);

const add = () => {DataStudents[classNum] = {name: '', age: 0, email:''}};
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
        DaraStudArr.push((DataStudents[classNum]));
        add2();      
    };
};

const add2 = () => {classNum++; DataStudents[classNum] = {name: '', age: 0, email: ''}; document.getElementById('stud-name').value = ''; document.getElementById('age').value = ''; document.getElementById('email').value = '';};

let find2;
function find() {
    find2 = document.getElementById('find');
    let foundName = DaraStudArr.find(({name}) => name === find2.value);
    let foundIdade = DaraStudArr.find(({age}) => age === find2.value);
    let foundEmail = DaraStudArr.find(({email}) => email === find2.value);
    let foundId = DaraStudArr.find(({id}) => Number(id) === Number(find2.value)); 

    if(typeof foundIdade !== 'undefined' && typeof foundName !== 'undefined' && typeof foundId !== 'undefined') {
        if(foundName.name !== find2.value) {
            console.log('This name does not exist');
        } else {
            console.log(foundName.name);
        };
        if(foundIdade.age === find2.value) {
            console.log(foundIdade.age);
        };
        if(foundEmail.email === find2.value) {
            console.log(foundEmail.email);
        };
        if(Number(foundId.id) === Number(find2.value)) {
            console.log(foundId.id);
        };
        
    };
    console.log(foundName);
    console.log(foundIdade);
    console.log(foundEmail);
    console.log(foundId);
    document.getElementById('find').value = '';
};

let updateInfo
const modifyContent = () => {
    updateInfo = document.getElementById('update');
    let enterNewData = prompt('New data');
    for(let i = 0; i < DaraStudArr.length; i++) {
        document.getElementById('age').value = '';
        for(keys in DaraStudArr[i]) {
            if(DaraStudArr[i][keys] === updateInfo.value) {
                DaraStudArr[i][keys] = enterNewData;
                console.log(DataStudents);
           };
        };
    };
    document.getElementById('update').value = '';
};

let deleteInfo;
function deleteContent() {
    deleteInfo = document.getElementById('delete');
    console.log(classNumContainer.get(deleteInfo.value));
    delete DaraStudArr[classNumContainer.get(deleteInfo.value)];
    console.log(DataStudents)
    delete DataStudents[classNumContainer.get(deleteInfo.value)];

    document.getElementById('delete').value = '';
};