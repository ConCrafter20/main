function secret() {
    alert("Secret found!")
}

function openInNewTab(uri) {
    window.open(uri, "_blank")
}

document.getElementById("secret").addEventListener("click", secret)