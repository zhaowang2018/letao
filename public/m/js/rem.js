//rem.js 屏幕适配
function getHtmlFontRem () {  
    var windowWidth = window.innerWidth;
    var shejigaoWidth = 750;
    var shejigaoFontSize = 200;

    var remWidth = windowWidth/(shejigaoWidth/shejigaoFontSize);


    // 2/(4/2) = 1

    document.querySelector('html').style.fontSize = remWidth + 'px';
    // return htmlFontSize;
}
window.addEventListener('resize',getHtmlFontRem);

getHtmlFontRem();