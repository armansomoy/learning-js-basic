document.getElementById('get_data').addEventListener('click',
    loadJokes);

function loadJokes(e) {

    let number = document.getElementById('get_jokes').value;


    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function(){
        document.getElementById('output').innerHTML =
        "<h1>Loading.........</h1>"
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data.value;
            let output = "<ol>";
            jokes.forEach(function (item) {
                let final = item.joke;
                output += `<li>${final}</li>`;

            })
            output += "</ol>"

            document.getElementById('output').innerHTML = output;
        }
    }



    xhr.send();

}