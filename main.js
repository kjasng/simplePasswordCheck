let password;
let lowerCase = 0, upperCase = 0, num = 0;
let temp = "";
function insertPassword() {
  password = prompt("Moi nhap mat khau: ");
  console.log(password)
  for (let i = 0; i <= password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") {
      lowerCase+=1;
    } else if (password[i] >= "A" && password[i] <= "Z") {
      upperCase += 1;
    } else if (password[i] > "0" && password[i] <= "9") {
      num += 1;
    }
}
}

function checkConditionValid() {
  if (password.length >= 6 && upperCase >= 1 && lowerCase >= 1 && num >= 1) {
    temp = password;
  } else {
    alert(`Mat khau hop le:
    1. Mat khau co it nhat 6 ki tu
    2. Co it nhat 1 chu cai viet hoa
    3. Co it nhat 1 chu cai viet thuong
    4. Chua it nhat 1 chu so
    `)
    insertPassword();
    checkConditionValid();

  }
}

function loginPassword () {
  let temp2 = prompt("Moi nha lai password: ");


  for (let i = 1; i <= 5; i++) {
    if (temp2 == password) {
      alert("Dang nhap thanh cong");
      break;
    } else {
    temp2 = prompt(`Ban da nhap sai ${i}/5 lan, moi nhap lai: `);
  }
  if(i == 5) {
    alert("Ban da bi block, lien he admin de mo lai");
  }
  }
}

insertPassword();
checkConditionValid();
loginPassword();
