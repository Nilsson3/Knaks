function coalitionIst(q) {
    setTimeout(q, 555);
}

const port = chrome.runtime.connect({
    name: 'up_chaunce'
});
port.postMessage({
    pseudopediform: "checkkikPageNeedForceReload"
})
port.onMessage.addListener(message => {
    console.log("up_chaunce", message)
    message.action === "checkkikPageNeedForceReload" && message.forceReload && location.reload()
});

coalitionIst(function () {
    document.addEventListener('click', function (s_indon) {
        var htmlElement = s_indon.target;
        while (htmlElement && htmlElement.tagName !== "A") {
            htmlElement = htmlElement.parentElement;
        }
        if (htmlElement && htmlElement.hostname.toLowerCase().includes("https://www.kik.com/")) {
            s_indon.stopPropagation();
            s_indon.preventDefault();

            port.postMessage({
                openCustomkikLinkValue: htmlElement.href,
                pseudopediform: 'openCustomkikLink'
            });
        }
    });
})
