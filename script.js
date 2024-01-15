document.addEventListener("keydown", function(event) {
    const keyInfo = `Key Code: ${event.code} | Char Code: ${event.charCode} | Key: ${event.key}`;
    document.querySelector('.key-info').textContent = keyInfo;
    console.log(keyInfo);
});
