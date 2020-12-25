const users = {



}

for (let i = 1; i <= 5; i++) {
  let n = prompt('ismingizni kiriting','Name')
  let a = +prompt('Yoshingizni kiriting', 40)

  users[`user${i}`]={
    name: n,
    age: a,
  };


}
var i =0;
for (const key in users) {
  i++;
  console.log('Foydalanuvchi ' + i);
  console.log('Ismingiz: ' + users[key].name);
  console.log('yoshingiz: ' + users[key].age);
}

console.log(users);








