const os = require("os");

// os.arch() --> mtlb kun architecture hami use grdai xau..for example hami ley kunai software 
// download grdai xau vaney teti bela 32 bit architecture ho ki 64 bit vaneyra hunxa teta ho yei bela 
// yo method kaam lagxa
console.log(os.arch());

// os.freemem() --> recently ram maa space kati baki xa herna maa use hunxa
console.log(os.freemem()); // we get the value in bytes
console.log(os.freemem()/1024); // we get the value in kb
console.log(os.freemem()/1024/1024); // we get the value in mb
console.log(os.freemem()/1024/1024/1024); // we get the value in gb

// for total memory
console.log(os.totalmem()/1024/1024/1024);

// for knowing the hostname
console.log(os.hostname());

// which platform you are worrking right now
console.log(os.platform());

// temporary folders kata xa vaneyra 
console.log(os.tmpdir());

// kun os hami use grdai xau
console.log(os.type());