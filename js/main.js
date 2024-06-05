
function changeBackgroundColor() {
    var select = document.getElementById('colorSelector');
    var selectedColor = select.value;
    document.body.style.backgroundColor = selectedColor;
}

document.getElementById('colorSelector').addEventListener('change', changeBackgroundColor);
