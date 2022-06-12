let copyText = document.getElementById("link");
let copyButton = document.getElementById("copyBtn")

copyButton.addEventListener('click', function(e) {

    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
})