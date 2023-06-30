
var guardaImgB = document.querySelector('.guarda-imgB');
var overlay = document.querySelector('.overlay');
var capiroto = document.querySelector('#capiroto');

guardaImgB.addEventListener('mousemove', function(e){

    overlay.style.opacity = 1;
    var rect = capiroto.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    overlay.style.clipPath = `circle(50px at ${x}px ${y}px)`;
    overlay.style.background =  `rgb(${x}, ${y}, 0)`;

});

guardaImgB.addEventListener('mouseleave', function(){
    overlay.style.clipPath = 'circle(0px)';
});



