// DOM
// Document Object Model
// JS'in kendi içinde olan bir API'ı

function sayHello() {
  console.log('Merhaba Dünya');
  // alert('Merhaba DOM BOM');

  welcomeBtn.innerText = 'Selamla';
}

// onclick gibi bir kaç attr daha var.
// Bunlardan bir tanesi 
// ondblclick -> çift tıklanınca çalışır
// oncontextmenu -> sağ tıklanınca çalışır

// Önemli bir not
// tarayıcı olayları js olaylarından sonra çalışır
// sağ tık menüsü gibi

// fonksiyon yazabildiğim gibi kodda çalıştırabiliyorum fakat buradan yapmamalıyız
// tarayıcıdan değiştirilebildiği için çok çok tehlikeli

const fruits = [
  {
    name: 'Domates',
    isRed: true
  },
  {
    name: 'Zeytin',
    isRed: false
  },
  {
    name: 'Kiraz',
    isRed: true
  }
];

function filterRedFruits(fruit) {
  // console.log(fruit);
  // return true;

  if (fruit.isRed) {
    return true;
  }

  return false;
}

fruits.filter(filterRedFruits);

// yukarıdaki fonksiyonu çağırdı her bir elemanda tek tek işlem yapmama
// olanak sağladı. Parametre olarak tekiş kullandım çünkü her bir
// meyveyi temsil ediyor.

// fruits.map(filterRedFruits);
// fruits.forEach(filterRedFruits);

// Bu işlem için her biri filter ile aynı işlemi yapıyor.

const redFruits = fruits.filter(filterRedFruits);
// console.table(redFruits);

// JS DOM ile çalışacaksa 2 şekilde konumlandırılıyor
// konumlandırma veya isimlendirme doğru olmazsa js üzerinden
// sayfadaki elementlere erişemeyiz

// önce html sonra js geliyor

// (olay dinleyici ekle)
// welcomeBtn.addEventListener('click', sayHello());
// event ataması yaparken fonksiyonu çağırırsak tıklamadan fonksiyon çalışır
welcomeBtn.addEventListener('click', increaseCount);
// eğer fonksiyonun ismini verirsem tıkladığında çalışır

// olay isimleri string olarak yazılır
// olaylar -> click, dblclick, contextmenu, submit vb ....

// erişmem önemli.. erişirken 2 kod var
// Bunlardan bir tanesi

// innerText

let count = 0;

function increaseCount() {
  count++;
  welcomeBtn.innerText = `Sayaç: ${count}`;
}

// welcomeTxt.innerText = 'Lorem <strong>ipsum</strong> dolor';
// welcomeTxt.innerText += ' sit amet';
// welcomeTxt.innerText += ' diye gidiyor';

// innerHTML

welcomeTxt.innerHTML = 'Lorem <strong>ipsum</strong> dolor';
welcomeTxt.innerHTML += ' sit amet';
welcomeTxt.innerHTML += ' diye gidiyor';

// eğer ki html etiketleri kullanacak isem mutlaka innerHTML kullanmalıyım
// innerText ile sadece text ekleyebilirim.

// ben bu text'in içini nasıl silebilirim ?
// welcomeTxt.innerHTML = '';

function handleClearBtn() {
  welcomeTxt.innerHTML = '';

  // welcomeBtn.innerHTML = 'Tıkla';
  count = 0;
  welcomeBtn.innerHTML = `Sayaç: ${count}`;
}

clearTxtBtn.addEventListener('click', handleClearBtn);

const meyveler = ['Kavun', 'Karpuz', 'Mango', 'Ananas'];
// yukarıdaki meyveleri li olarak html'de oluşturacağımız ul elementinin
// içine ekletelim
// for, for of ya da forEach hepsi kullanılabilir

for (const meyve of meyveler) {
  meyvelerListesi.innerHTML += `<li>${meyve}</li>`;
}
