fetch('./components/header.html')
.then((response) => { return response.text() })
.then((html) => {
    document.querySelector('#header').innerHTML = '';
    document.querySelector('#header').innerHTML = html;
});

fetch('./components/footer.html')
.then((response) => { return response.text() })
.then((html) => {
    document.querySelector('#footer').innerHTML = '';
    document.querySelector('#footer').innerHTML = html;
});