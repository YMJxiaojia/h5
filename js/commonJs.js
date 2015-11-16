var iScale = 1;
iScale = iScale / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '">')
var iWidth = document.documentElement.clientWidth;
iWidth = iWidth > 1620 ? 1620 : iWidth;
document.getElementsByTagName('html')[0].style.fontSize = iWidth / 64*10 + 'px';
