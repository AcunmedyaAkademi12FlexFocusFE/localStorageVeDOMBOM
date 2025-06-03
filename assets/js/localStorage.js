// JSON 
// Javascript Object Notation

// Tüm programlama dilleri tarafından kabul görmüş veri türü
// Rüm programlama dilleri bu veri türünü okuyup üzerinde işlemler yapabilir

// parse -> string bir ifadeyi programatik olarak kullanmak üzere
// veri tipi olarak dönüştürmek anlamına geliyordu

// JSON.stringify -> ile elimizdeki dizi ve objeleri string formatında
// json'a çevirebiliriz

// let students = [
//   // {
//   //   ad: 'Nihat'
//   // },
//   // {
//   //   ad: 'Orhan'
//   // },
//   // {
//   //   ad: 'Kıvanç'
//   // },
// ];

let students = [];

// const studentsStr = JSON.stringify(students); // students'ı string formatında json'a çevirir

// key - value pair
// anahtar - değer çifti

// localStorage'a students adı ile studentsStr'yi kayıt et dedik
// localStorage.students = studentsStr;

// JSON.parse -> ile de string formatındaki json verilerini 
// dizi ve objeye çevirebiliriz

// Eğer localStorage kullanmak istiyorsak ve localStorage'a bir dizi be obj
// kaydedeceksek bu sadece string olarak yapabildiğimiz için elimizdeki
// dizi/obj string yapısına dönmelidir. Bunun için JSON.stringify(dizi/obj)
// yöntemini kullanıyoruz. Bu sayede artık elimizdeki dizi/obj string'e dönüyor
// ve localStorage'a eklenebilir hale geliyor.

// Eğer localStorage'dan string olarak okudğumuz bir dizi/obj tekrar kod içinde
// kullanmak istiyorsak o zaman JSON.parse(dizi string/obj string) yapmalıyız.

// for (const student of students) {
//   console.log('Ad: ', student.ad);
// }

// const storageStudents = JSON.parse(localStorage.students);
// console.log(storageStudents);

// localStorage'da students diye bir değer var ise 
// cevabı boolean bir değer olur

// if (localStorage.students) { 
if ('students' in localStorage) {
  // burada parse ettim. Neden ? çünkü localStorage'a ben JSON.stringify olarak
  // verimi string değer olarak kayıt etmiştim.
  // tekrar okumak için bunu parse etmem gerekir.
  students = JSON.parse(localStorage.students);
}


const hasNewStudents = confirm('eklenecek öğrenci var mı ?');

if (hasNewStudents) {
  const newStudentsCount = Number(prompt('Kaç öğrenci ekleyeceksiniz'));
  
  for (let i = 1; i <= newStudentsCount; i++) {
    students.push(prompt(`${i}. öğrenci adı`));
  }

  // döngü bittikten sonra bir seferde yeni eklenen rüm öğrencilere
  // erişim sağlayabilirim. Eğer döngü içinde bu işlemi yaparsam
  // yine aynı sorunu alırım. Fakat her seferinde localStorage üzerinde
  // işlem yapmama gerek yok ki. Zaten tüm öğrencilere döngü dışında
  // 1 seferde erişebiliyorum.

  localStorage.students = JSON.stringify(students);
}

// console.table(students);

if (students.length > 0) {
  console.log('Öğrenciler'.toLocaleUpperCase('tr'));

  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. öğrenci : ${students[i]}`);
  }
} else {
  console.log('Listelenecek öğrenci bulunamadı');
}