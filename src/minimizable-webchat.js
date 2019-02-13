(async function () {
    const res = await fetch("https://directline.botframework.com/v3/directline/tokens/generate",
        {
            method: "POST",
            headers: {
                "Authorization": "Bearer 0BAnfJTkb1w.cwA.xc8.CJd5nSziLcX43unMy9cljy323kw-VR-1mObVKO6DZUE"
            }
        });

    const { token } = await res.json();
    window.WebChat.renderWebChat({
        directLine: window.WebChat.createDirectLine({ token }),
        styleOptions: {
            hideUploadButton: true,
            bubbleFromUserBackground: 'rgba(0, 132, 255, 0.8)',
            bubbleFromUserTextColor: 'White',
            bubbleFromUserBorder: 'solid 1px #2196F3',
            bubbleBorderRadius: 15,
            bubbleFromUserBorderRadius: 15,
            sendBoxButtonColor: '#2196F3',
            botAvatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt649IgWYDMnLXQnRF363YYd4OUPLWPR73Wej0arY6UWKvC8q_',
            userAvatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWiyESGecziS7QIKUyoJbYt_YBAz54SQ3ya-ZsUFeevCsVh7eVw'
        }
    }, document.getElementById("webchat"));

    document.querySelector("#webchat > *").focus();
})().catch(err => console.error(err));

function displayChat() {
    document.getElementById("maximizedChat").style.display = "block";
    document.getElementById("maximizeChat").style.display = "none";
}

function hideChat() {
    document.getElementById("maximizedChat").style.display = "none";
    document.getElementById("maximizeChat").style.display = "block";
}

dragElement(document.getElementById("maximizedChat"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById("chatHeader")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById("chatHeader").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}