/**
 * When the login UI has loaded, attach event listeners
 */
function onLoginLoaded(videoOverlay) {
    // Timeout as there is small lag in shadowDOM after load fired
    setTimeout(
        () => {
            queryShadowRoot(".selectextLoginLogo", true, videoOverlay).attr("src", browser.runtime.getURL("images/selectext-logo-filled.svg"))
            queryShadowRoot(".selectextLoginWithGoogleButton", true, videoOverlay).click(loginInNewTab)
            queryShadowRoot(".signInAnotherWay", true, videoOverlay).click(signInAnotherWay)
            
        }, 50
    )

}

function loginInNewTab() {
    browser.runtime.sendMessage({ loginInNewTab: true })
}

function signInAnotherWay() {
    browser.runtime.sendMessage({ signInAnotherWay: true })
}