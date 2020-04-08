var myimage = document.querySelector('img');

myimage.onclick = function() {
    var mysrc = myimage.getAttribute('src');
    if(mysrc === 'imagens/natureza-magnifica-wallpaper.jpg') {
        myimage.setAttribute ('src', 'imagens/naruto.jpg');
    } else {
        myimage.setAttribute ('src','imagens/natureza-magnifica-wallpaper.jpg');
    }
}
var myButton = document.querySelector ('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt ('Por favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Wallpaper sobre a natureza, ' + myName;
}
if (!localStorage.getItem('name')){
    setUserName
} else {
    var storedName = localStorage.getItem ('name');
    myHeading.textContent = 'Wallpaper sobre a natureza, ' + storedName;
}
myButton.onclick = function(){
    setUserName();
}