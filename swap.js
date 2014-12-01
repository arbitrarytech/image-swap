var images = [
    "http://i.imgur.com/G2UnzhJ.jpg",
    "http://i.imgur.com/itbpdYa.jpg",
    "http://i.imgur.com/LCmC1Fv.jpg"
];

window.onload = replaceImages;

function replaceImages() {
    for (var i in document.images) {
        var targetImage = document.images[i];
        var randomImage = images[Math.floor(Math.random() * images.length)];
        var height = targetImage.height;
        var width = targetImage.width;

        targetImage.src = randomImage;
        targetImage.height = height;
        targetImage.width = width;
    }
}
