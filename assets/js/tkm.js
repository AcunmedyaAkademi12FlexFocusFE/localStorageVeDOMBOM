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

function oyna(hamle) {
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

function tasOyna() {
  // console.log('Taş', bilgisayarOyna());
  oyna('Taş');
}

tasBtn.addEventListener('click', tasOyna);

function kagitOyna() {
  // console.log('Kağıt', bilgisayarOyna());
  oyna('Kağıt');
}

kagitBtn.addEventListener('click', kagitOyna);

function makasOyna() {
  // console.log('Makas', bilgisayarOyna());
  oyna('Makas');
}

makasBtn.addEventListener('click', makasOyna);