// 1) 1 ədəd Confirm metodu olacaq.Əgər user OK click etsə body background-color qara olacaq

// let element = confirm("Click et");

// if (element) {
//   document.body.style.backgroundColor = "red";
// }

// 2) 1 ədəd Prompt metodu olacaq. User yaşını daxil etməlidir.Əgər userin yaşı 18-dən balacadırsa xəbərdarlıq mesajı çıxarsın.

// let user = prompt("Yaşınızı ydaxil edin");

// if (user < 18) {
//   alert("Yaşınız 18-dən kiçikdir");
// }

// 3) 1 ədəd Class və Obyekt(ad,soyad,password propertiləri və fullname metodu olacaq) hazırlanır.Sonra elə bir metod yazılmalıdır ki həmin metodu çağırdıqda Obyektin daxilindən fullname dəyərini götürüb bütün hərflərini böyük formada HTML'a yazdırsın.

// class Person {
//   constructor(firstName, lastName, password) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.password = password;
//   }
//   get FullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// let person = new Person("Fatimə", "Eyvazova", 12345678);
// let user = document.getElementById("user");
// user.textContent = person.FullName.toLocaleUpperCase();
