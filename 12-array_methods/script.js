let ogrenciler = ["esra", "umit", "nizami"];

sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString(); // butun nesneleri birlestirir
sonuc = ogrenciler.join(" "); // butun nesneler arasinda bosluk birakarak birlestirir.
sonuc = ogrenciler.join("-"); // aralara tire koyarak birlestirir.

// eleman silme
sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.
sonuc = ogrenciler.shift();     // ilk eleman silinir.

// eleman ekleme
sonuc = ogrenciler.push("dali");    // dizinin sonuna eleman eklenir.
sonuc = ogrenciler.unshift("samet"); // dizinin başına yeni değerler eklemek için kullanıl

//:..............

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

 sonuc = markalar1.concat(markalar2, markalar3);// dizileri birleştirmek için kullanılır. Birden fazla diziyi tek bir dizi haline getirir yani birleştirir.

//splice() metodu diziye eleman ya da elemanlar eklenebilmesini sağladığı gibi, silinebilmesini de sağlar. 
//splice() ile diziden silinen değeri geri döndürür. Metot dizinin yapısını değiştirir.
sonuc = markalar1.splice(0, 1, "bmw","audi");
sonuc = markalar1.splice(0, 1);

console.log(sonuc);
console.log(markalar1);