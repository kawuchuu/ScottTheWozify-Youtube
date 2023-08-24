const enabledCheckbox = document.querySelector('#toggleExtension')
const skipChannelCheckbox = document.querySelector('#skipChannel')

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#close').addEventListener('click', saveAndClose)
    chrome.storage.local.get({
        enabled: true,
        skipScottTheWoz: true
    }, (items) => {
        enabledCheckbox.checked = items.enabled
        skipChannelCheckbox.checked = items.skipScottTheWoz
    })
})

const saveAndClose = () => {
    chrome.storage.local.set({
        enabled: enabledCheckbox.checked,
        skipScottTheWoz: skipChannelCheckbox.checked
    }, () => {
        window.close();
    })
}