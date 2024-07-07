function encrypt(text, shift) {
    let encrypted_text = "";
    for (let char of text) {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        encrypted_text += char;
    }
    return encrypted_text;
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

function encryptDecrypt() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);
    
    let encrypted_message = encrypt(message, shift);
    let decrypted_message = decrypt(encrypted_message, shift);
    
    document.getElementById("encrypted").value = encrypted_message;
    document.getElementById("decrypted").value = decrypted_message;
}
