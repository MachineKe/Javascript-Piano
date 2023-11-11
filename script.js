// Grab the keys
let zkey = document.getElementById("zKey");
let akey = document.getElementById("aKey");
let xkey = document.getElementById("xKey");
let skey = document.getElementById("sKey");
let ckey = document.getElementById("cKey");
let dkey = document.getElementById("dKey");
let vkey = document.getElementById("vKey");
let jkey = document.getElementById("jKey");
let bkey = document.getElementById("bKey");
let kkey = document.getElementById("kKey");
let nkey = document.getElementById("nKey");
let lkey = document.getElementById("lKey");
let mkey = document.getElementById("mKey");
// Grab the sounds
let zSound = document.getElementById("zSound");
let aSound = document.getElementById("aSound");
let xSound = document.getElementById("xSound");
let sSound = document.getElementById("sSound");
let cSound = document.getElementById("cSound");
let dSound = document.getElementById("dSound");
let vSound = document.getElementById("vSound");
let bSound = document.getElementById("bSound");
let kSound = document.getElementById("kSound");
let nSound = document.getElementById("nSound");
let lSound = document.getElementById("lSound");
let mSound = document.getElementById("mSound");
// play sound when the piano key is clicked
zkey.onclick = () => zSound.play();
akey.onclick = () => aSound.play();
xkey.onclick = () => xSound.play();
skey.onclick = () => sSound.play();
ckey.onclick = () => cSound.play();
dkey.onclick = () => dSound.play();
vkey.onclick = () => vSound.play();
bkey.onclick = () => bSound.play();
kkey.onclick = () => kSound.play();
nkey.onclick = () => nSound.play();
lkey.onclick = () => lSound.play();
mkey.onclick = () => mSound.play();
// play sound when the keyboard is clicked
const keyboardPlay = () => {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "z":
        zSound.play();
        break;
      case "a":
        aSound.play();
        break;

      case "x":
        xSound.play();
        break;

      case "s":
        sSound.play();
        break;

      case "c":
        cSound.play();
        break;

      case "d":
        dSound.play();
        break;

      case "v":
        vSound.play();
        break;

      case "b":
        bSound.play();
        break;

      case "k":
        kSound.play();
        break;

      case "n":
        nSound.play();
        break;

      case "l":
        lSound.play();
        break;

      case "m":
        mSound.play();
        break;
    }
  });
};

keyboardPlay();
