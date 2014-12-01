var images = [
    "http://imgur.com/83eCtYD",
    "http://imgur.com/HqU5ZHV",
    "http://imgur.com/8aFwaon",
    "http://imgur.com/3FdARBl",
    "http://imgur.com/WQjqEd5",
    "http://imgur.com/7OldUXo",
    "http://imgur.com/Y2QApQl",
    "http://imgur.com/heg41DK",
    "http://imgur.com/sCOWQgm",
    "http://imgur.com/y2Rfomt",
    "http://imgur.com/9WXwYVr",
    "http://imgur.com/movBnso",
    "http://imgur.com/PKfFbun",
    "http://imgur.com/ZUmZ2cs",
    "http://imgur.com/Y2d9toI",
    "http://imgur.com/OJEQb5Z",
    "http://imgur.com/rqwyx2z",
    "http://imgur.com/NWx9yWz",
    "http://imgur.com/srJgdHa",
    "http://imgur.com/wVVsd4y",
    "http://imgur.com/fLidJPA",
    "http://imgur.com/JRnQhtt",
    "http://imgur.com/3VKrj1S",
    "http://imgur.com/Xm1HjuZ",
    "http://imgur.com/8M6L5Jw",
    "http://imgur.com/80jKiwn",
    "http://imgur.com/2EnkzA9",
    "http://imgur.com/DbhwCDE",
    "http://imgur.com/7bDGGmD",
    "http://imgur.com/7GjlZvA",
    "http://imgur.com/XMtfge7",
    "http://imgur.com/s7twCUg",
    "http://imgur.com/eCQlyp2",
    "http://imgur.com/PbAjGqq",
    "http://imgur.com/PKK7TvQ",
    "http://imgur.com/uGSBM6L",
    "http://imgur.com/NTkL4eQ",
    "http://imgur.com/bgGlDGz",
    "http://imgur.com/EyDedzW",
    "http://imgur.com/4cHj64y",
    "http://imgur.com/zQrGTEJ",
    "http://imgur.com/H1uPP8x",
    "http://imgur.com/NvLWjQx"
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
