var siteLinkUl = document.querySelector("body > div.container > div.process-screen > ul");
var calistirButton = document.querySelector("body > div.container > div.button > h2");

calistirButton.addEventListener("click", function(e){

    let i = 0; // döngü sayısını tanımlıyoruz
        function loop() { // bir fonksiyon oluşturuyoruz
            if (i < siteLinkUl.children.length) { // eğer i, children.length'ten küçük ise... 
                window.open(siteLinkUl.children[i].firstElementChild, scrollbars="yes",width=800,height=800);
                siteLinkUl.children[i].setAttribute("class","clicked");
                // kodlar buraya...
                i++ // döngü sayısını arttırıyoruz
                setTimeout(() => { // 3 saniye timeout koyuyoruz
                loop(); // bu fonksiyonu bir daha çalıştırıyoruz.
                }, 5000);
        }
        if(i >= siteLinkUl.children.length){
            alert("İşlem Tamamlandı. Toplamda" + siteLinkUl.children.length + "tane whois backlink yapıldı");
        }
 
}

loop(); // en başta fonksiyonu çalıştırıyoruz

});



/*ÖNEMLİ NOTLAR*/

    /*
    for(let i=0; i < siteLinkUl.children.length; i++ ){
        window.open(siteLinkUl.children[i].firstElementChild);
        siteLinkUl.children[i].setAttribute("class","clicked");
    }*/
/*
For döngüsü durdurulamıyor bu yüzden kendi döngümüzü yazmak zorunda kaldık..
*/