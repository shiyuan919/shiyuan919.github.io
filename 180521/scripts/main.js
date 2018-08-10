
document.querySelector('img').onclick = function() {
    var mySrc = document.querySelector('img').getAttribute('src');
    if(mySrc === 'images/in1.jpg') {
      document.querySelector('img').setAttribute ('src','images/in1_1.jpg');
    } else {
      document.querySelector('img').setAttribute ('src','images/in1.jpg');
    }
}