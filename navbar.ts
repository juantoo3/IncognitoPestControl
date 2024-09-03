document.addEventListener("DOMContentLoaded", () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header')!.innerHTML += data;
        });
});
