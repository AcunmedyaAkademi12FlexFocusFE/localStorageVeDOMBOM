// tasBtn
// kagitBtn
// makasBtn

// oyuncuHamle
// bilgisayarHamle
// kazananBilgi

// oyuncuSkorTxt
// bilgisayarSkorTxt

// sifirlaBtn

const hamleler = ['Taş', 'Kağıt', 'Makas'];
let oyuncuSkor = 0;
let bilgisayarSkor = 0;

// const bilgisayarinHamlesi = hamleler.at(Math.floor(Math.random() * 3));
// console.log(bilgisayarinHamlesi);

function bilgisayarOyna() {
  return hamleler.at(Math.floor(Math.random() * 3));

  // hamleler.at(-1) bana son elemanı verir
}

function oyna() {
  const hamle = this.innerText;
  oyuncuHamle.innerHTML = hamle;

  const bilgisayarinHamlesi = bilgisayarOyna();
  bilgisayarHamle.innerHTML = bilgisayarinHamlesi;

  if (hamle === bilgisayarinHamlesi) {
    kazananBilgi.innerHTML = 'Berabere';
  } else if (hamle === 'Taş' && bilgisayarinHamlesi === 'Makas') {
    kazananBilgi.innerHTML = 'Oyuncu';
    oyuncuSkor++;
  } else if (hamle === 'Kağıt' && bilgisayarinHamlesi === 'Taş') {
    kazananBilgi.innerHTML = 'Oyuncu';
    oyuncuSkor++;
  } else if (hamle === 'Makas' && bilgisayarinHamlesi === 'Kağıt') {
    kazananBilgi.innerHTML = 'Oyuncu';
    oyuncuSkor++;
  } else {
    kazananBilgi.innerHTML = 'Bilgisayar';
    bilgisayarSkor++;
  }
  oyuncuSkorTxt.innerHTML = oyuncuSkor;
  bilgisayarSkorTxt.innerHTML = bilgisayarSkor;
}

function skorSifirla() {
  oyuncuHamle.innerHTML = '-';
  bilgisayarHamle.innerHTML = '-';
  kazananBilgi.innerHTML = '-';

  oyuncuSkor = 0;
  bilgisayarSkor = 0;

  oyuncuSkorTxt.innerHTML = oyuncuSkor;
  bilgisayarSkorTxt.innerHTML = bilgisayarSkor;
}

sifirlaBtn.addEventListener('click', skorSifirla)

// function tasOyna() {
//   // console.log('Taş', bilgisayarOyna());
//   // oyna('Taş');

//   // console.log(this); // -> elementin kendisini getirdi
//   // console.log(this.innerText);
//   oyna(this.innerText);
// }

// const tasOyna = () => {
//   console.log(this);
// arrow function kullanıyorsak this kullanmıyoruz
// this kullanacaksak arrow function kullanmıyoruz
// bize window'u yanı en üstü getiriyor
// }

tasBtn.addEventListener('click', oyna);

// function kagitOyna() {
//   // console.log('Kağıt', bilgisayarOyna());
//   // oyna('Kağıt');
//   oyna(this.innerText);
// }

kagitBtn.addEventListener('click', oyna);

// function makasOyna() {
//   // console.log('Makas', bilgisayarOyna());
//   // oyna('Makas');
//   oyna(this.innerText);
// }

makasBtn.addEventListener('click', oyna);

// Notlar

// bugün hayatımıza this diye bir kelime giriyor
// this -> programcılıkta joker bir kelimedir.
// nesnenin içinde iş yaparken nesnenin kendisini dönüyor
// js'de biraz farklı çalışıyor bu durum
// this tetikleyen elementi getiriyor
// arrow function'da bir önceki scope'u getirdiği için çalışmıyor
// console.log(this); -> window getiriyor

// function yazdığımızda this kelimesi eğer func scope'u içinde
// kullanırsak bize bu func tetikleyen elementi getirir 
// elemente id ile ulaşmışız gibi işlem yapabiliriz
// aslında elementi yakalamışız gibi oluyoruz. Böylelikle tüm
// element özellikleri çalışır hale geliyor

