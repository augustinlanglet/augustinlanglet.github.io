document.addEventListener("DOMContentLoaded", function() {
    const madeIn = document.getElementById('made-in')
    
    setTimeout(() => {
        fetch("country_list.csv")
        .then(response => response.text())
        .then(text => {
        const countries = text.split("\n");
        let i = 0;
        let res = 'Made In ';

        setInterval(() => {
            res += countries[i] + "      ";
            madeIn.innerText = res;
            // i = (i + 1) % countries.length;
            i += 1
            if (i == countries.length) {
                i = 0
                res = 'Made In '
            };
        }, 4000);
        })
        .catch(error => console.error(error));
    }, 50000);
});