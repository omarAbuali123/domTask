


const newdiv = document.createElement("div");
const listElement = document.createElement("ul");

const liorange = document.createElement("li");
liorange.textContent = "ornage";
let oimg = document.createElement("img");
oimg.src = "https://www.fay3.com/previews/2019-10/l0kdJF6D5K.jpg";

const liapple = document.createElement("li");
liapple.textContent = "apple ";
let aimg = document.createElement("img");
aimg.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4Sw9jPYP8xI1c7JbPBhu8yuNvmV10IJiYNQe2xkiYYJeNFGZTfXOAIP6jui3Gy4Fws4PbOiqquxwCgaQy43i1fMBy0qqRbbRNus7Q_rPVCugowSRtbedAmrr8Yl_56BiCy3laX27nJ0Y/s1600/22fc1da2c-1.jpg";

const libnana = document.createElement("li");
libnana.textContent = "bnana ";
let bimg = document.createElement("img");
bimg.src = "https://www.cairo24.com/Upload/libfiles/79/7/812.jpg";

const limango = document.createElement("li");
limango.textContent = "mango";
let mimg = document.createElement("img");
mimg.src = "https://www.qualityfood.ae/cdn/shop/products/yellow-mango-350g-638177_1200x1200.jpg?v=1672845030";


const ligrape = document.createElement("li");
ligrape.textContent = "grape";
let gimg = document.createElement("img");
gimg.src = "https://www.cairo24.com/Upload/libfiles/79/7/816.jpg";


oimg.style.width = "100px";
aimg.style.width = "100px";
bimg.style.width = "100px";
mimg.style.width = "100px";
gimg.style.width = "100px";

document.body.appendChild(newdiv);
newdiv.appendChild(listElement);
listElement.appendChild(liorange);
listElement.appendChild(liapple);
listElement.appendChild(libnana);
listElement.appendChild(limango);
listElement.appendChild(ligrape);

liorange.appendChild(oimg);
liapple.appendChild(aimg);
libnana.appendChild(bimg);
limango.appendChild(mimg);
ligrape.appendChild(gimg);











/*q2 */
let myArray = [10, 20, 30, 40, 50,];
let num1=Number(prompt("enter num"));
function e(arry, x){
    for( i=0; i<arry.length; i++){
        if(arry[i]=== x){
            return console.log(i);
        }
    }
    return console.log("-1");
}
e(myArray,num1);