var pdf = document.createElement('object');
pdf.data = 'https://s3.us-west-2.amazonaws.com/alchemymomentum.com/RW_newsletter_modal/RW_NewsNov2022_animation.pdf';
pdf.type = 'application/pdf';
pdf.width = '50%';
pdf.height = '50%';
document.body.appendChild(pdf);

var pageNumber = 0;
var pageCount = 10;
var pageWidth = document.body.clientWidth;
var pageHeight = document.body.clientHeight;
var pageFlipDuration = 1000;
var pageFlipInterval = 3000;
var html = document.getElementById("flipPage");
html.innerHTML = pdf;

function flipPages() {
    pageNumber = (pageNumber + 1) % pageCount;
    page.style.backgroundPosition = '-' + (pageNumber * pageWidth) + 'px center';
}
setInterval(flipPages, pageFlipInterval);