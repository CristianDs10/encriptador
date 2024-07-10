document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');
    const validationMessage = document.getElementById('validation-message');

    const validateText = (text) => {
        const regex = /^[a-z\s]+$/;
        return regex.test(text);
    };

    const encryptText = (text) => {
        let encrypted = '';
        for (let char of text) {
            encrypted += String.fromCharCode(char.charCodeAt(0) + 3);
        }
        return encrypted;
    };

    const decryptText = (text) => {
        let decrypted = '';
        for (let char of text) {
            decrypted += String.fromCharCode(char.charCodeAt(0) - 3);
        }
        return decrypted;
    };

    encryptBtn.addEventListener('click', () => {
        const text = inputText.value;
        if (validateText(text)) {
            validationMessage.textContent = '';
            outputText.value = encryptText(text);
        } else {
            validationMessage.textContent = 'No se aceptan mayúsculas ni caracteres especiales.';
        }
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value;
        if (validateText(text)) {
            validationMessage.textContent = '';
            outputText.value = decryptText(text);
        } else {
            validationMessage.textContent = 'No se aceptan mayúsculas ni caracteres especiales.';
        }
    });

    copyBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
    });
});
