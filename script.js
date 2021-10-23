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
    const domain = document.querySelector('.js-sitename').value;
    whoIsLinkList.forEach((link,i) => {
        setTimeout(() => {
            let whoIsLinkWithDomain = link + domain;
            window.open(whoIsLinkWithDomain, scrollbars="yes",width=800,height=800);
        }, i * 10000);
    });
    
});