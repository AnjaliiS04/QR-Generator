function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrCodeDiv = document.getElementById("qrCode");

    qrCodeDiv.innerHTML = ""; // Clear previous QR Code

    if (qrText.trim() !== "") {
        new QRCode(qrCodeDiv, {
            text: qrText,
            width: 200,
            height: 200
        });
    } else {
        alert("Please enter a valid text or URL");
    }
}