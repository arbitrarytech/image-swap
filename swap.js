var images = [
    "http://i.imgur.com/83eCtYD.jpg",
    "http://i.imgur.com/HqU5ZHV.jpg",
    "http://i.imgur.com/HqU5ZHV.jpg",
    "http://i.imgur.com/3FdARBl.jpg",
    "http://i.imgur.com/WQjqEd5.jpg",
    "http://i.imgur.com/7OldUXo.jpg",
    "http://i.imgur.com/Y2QApQl.jpg",
    "http://i.imgur.com/heg41DK.jpg",
    "http://i.imgur.com/sCOWQgm.jpg",
    "http://i.imgur.com/y2Rfomt.jpg",
    "http://i.imgur.com/9WXwYVr.jpg",
    "http://i.imgur.com/movBnso.jpg",
    "http://i.imgur.com/PKfFbun.jpg",
    "http://i.imgur.com/ZUmZ2cs.jpg",
    "http://i.imgur.com/Y2d9toI.jpg",
    "http://i.imgur.com/OJEQb5Z.jpg",
    "http://i.imgur.com/rqwyx2z.jpg",
    "http://i.imgur.com/NWx9yWz.jpg",
    "http://i.imgur.com/srJgdHa.jpg",
    "http://i.imgur.com/wVVsd4y.jpg",
    "http://i.imgur.com/fLidJPA.jpg",
    "http://i.imgur.com/JRnQhtt.jpg",
    "http://i.imgur.com/3VKrj1S.jpg",
    "http://i.imgur.com/Xm1HjuZ.jpg",
    "http://i.imgur.com/8M6L5Jw.jpg",
    "http://i.imgur.com/80jKiwn.jpg",
    "http://i.imgur.com/2EnkzA9.jpg",
    "http://i.imgur.com/DbhwCDE.jpg",
    "http://i.imgur.com/7bDGGmD.jpg",
    "http://i.imgur.com/7GjlZvA.jpg",
    "http://i.imgur.com/XMtfge7.jpg",
    "http://i.imgur.com/s7twCUg.jpg",
    "http://i.imgur.com/eCQlyp2.jpg",
    "http://i.imgur.com/PbAjGqq.jpg",
    "http://i.imgur.com/PKK7TvQ.jpg",
    "http://i.imgur.com/uGSBM6L.jpg",
    "http://i.imgur.com/NTkL4eQ.jpg",
    "http://i.imgur.com/bgGlDGz.jpg",
    "http://i.imgur.com/EyDedzW.jpg",
    "http://i.imgur.com/4cHj64y.jpg",
    "http://i.imgur.com/zQrGTEJ.jpg",
    "http://i.imgur.com/H1uPP8x.jpg",
    "http://i.imgur.com/NvLWjQx.jpg"
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
