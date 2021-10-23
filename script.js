var siteLinkUl = document.querySelector("body > div.container > div.process-screen > ul");
var calistirButton = document.querySelector("body > div.container > div.button > h2");

let whoIsLinkList = [
    'https://www.alexa.com/siteinfo/',
    'https://besthostingprice.com/whois/',
    'https://www.sitelinks.info/',
    'https://www.sitelike.org/similar/',
    'https://www.keyword-rank.com/site/',
    'https://sitereport.netcraft.com/?url=',
    'https://www.sedoparking.com/rankflex.comde/check/',
    'http://buscarcostarica.com/internet.htm?www=',
    'https://isp.netscape.com/?turl=https%253A//',
    'https://reviewweb.org/show/',
    'https://myip.ms/info/whois/104.16.109.26/k/408334730/website/',
    'http://www.sitedossier.com/site/',
    'https://www.pageglimpse.org/',
    'https://www.estibot.com/appraise.php?a=appraise&data=',
    'https://website.informer.com/',
    'https://www.statscrop.com/www/',
    'https://www.woorank.com/en/teaser-review/',
    'http://whois.stsoftware.biz/',
    'http://cine.astalaweb.net/_inicio/Marco.asp?dir=https://',
    'https://website-price-calculator.info/',
    'http://estimatedomain.com/',
    'https://www.getwebprice.aaravwebsolutions.com/',
    'https://www.siteworthfinder.com/',
    'https://www.worthmysite.tk/',
    'https://upsiteworth.com/',
    'https://mywebsiteprice.xyz/',
    'https://whois.pfbuzz.com/',
    'https://www.whatsmysitevalue.com/',
    'https://www.worthweb.he4host.com/',
    'https://mywebsiteworthchecker.com/',
    'https://sitecost.org/',
    'https://valuator.cybersideline.com/',
    'https://siteprice.com/',
    'https://www.websitevalue.tk/result.php?domain=',
    'https://websiteisworth.com/',
    'https://www.worthzilla.com/',
    'https://mysiteworthcheck.com/',
    'https://www.datoodle.com/',
    'http://websitepriceworth.com/',
    'https://siteworth.wapmastazone.com/',
    'http://websearch.bestsiteanalysis.eu/',
    'http://www.webprofitsusa.com/',
    'http://seo-online.xyz/',
    'https://domainvalor.com/',
    'http://www.valuevalid.com/',
    'http://www.websitevaluecalculators.com/',
    'https://whoispage.com/',
    'https://sitepricely.com/',
    'https://www.worthofmywebsite.com/',
    'https://www.estimateyoursite.com/',
    'https://webadscalculator.com/',
    'https://worthofweb.info/',
    'https://sitevalue.org/'
];

document.querySelector('.js-start').addEventListener('click', function(e){
    const domain = e.currentTarget;
    whoIsLinkList.forEach(link => {
        let whoIsLinkWithDomain = link + domain;
        window.open(whoIsLinkWithDomain, scrollbars="yes",width=800,height=800);
    });
});


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