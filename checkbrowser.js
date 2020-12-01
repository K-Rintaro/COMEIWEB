var userAgent = window.navigator.userAgent.toLowerCase();
if(userAgent.indexOf('msie') != -1 ||
    userAgent.indexOf('trident') != -1) {
} else if(userAgent.indexOf('edge') != -1) {
} else if(userAgent.indexOf('chrome') != -1) {
} else if(userAgent.indexOf('safari') != -1) {
    const element = document.getElementById("onlyindex")
　　 element.remove()
    document.getElementById("happy").innerHTML = ('<link rel="stylesheet" type="text/css" href="safariindex.css" >')
}