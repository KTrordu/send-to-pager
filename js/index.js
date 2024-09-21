const buttonsEl = document.getElementById("btn-cont");

const phoneDisplayEl = document.getElementById("phn-disp-head");
const pagerDisplayEl = document.getElementById("disp-head");

const sendButton = document.getElementById("btn-send");
const resetButton = document.getElementById("btn-reset");

const delayTimeForSendingSignal = 1000;
const maxNumberOfCharactersOnScreen = 16;

const audioOfPager = new Audio("/audio/pager.wav");
audioOfPager.volume = 0.1;

function buttonGroupPressed(e) { 

    if (e.target.innerHTML === "SEND" || e.target.innerHTML === "RESET") {
        return;
    }

    if (phoneDisplayEl.textContent.length === maxNumberOfCharactersOnScreen) {
        return;
    }

    const isButton = e.target.nodeName === 'BUTTON';
    
    if(!isButton) {
      return;
    }

    phoneDisplayEl.innerHTML += `${e.target.innerHTML}`;
};

function delayTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

buttonsEl.addEventListener("click", buttonGroupPressed);

sendButton.addEventListener("click", async function() {
    await delayTime(delayTimeForSendingSignal);
    pagerDisplayEl.innerHTML = phoneDisplayEl.innerHTML;
    audioOfPager.play();
});

resetButton.addEventListener("click", function() {
    phoneDisplayEl.innerHTML = "";
});