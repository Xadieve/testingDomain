

const fku = new Audio('https://audio.jukehost.co.uk/cbQq3kSIHXIti2S93hsQDQdpDQojpVjX')
fku.autoplay = true;
fku.loop = true;
fku.play();

const buttonFree = document.querySelector(`#buttonFree`);
buttonFree.addEventListener('click', playHell);

function playHell () {
        const hell = new Audio(`https://audio.jukehost.co.uk/nKghHzQBJKof6sPCAfHgvlxzM35919NM`).play();
        fku.loop = false;
        document.body.style.backgroundImage = "url('https://i.kym-cdn.com/entries/icons/facebook/000/042/108/Meridias_beacon.jpg')";
        document.getElementById("buttonFree").style.visibility = "hidden";
    }