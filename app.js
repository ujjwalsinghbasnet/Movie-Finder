    let form = document.getElementById("fForm");
    let title;
    form.addEventListener("submit",function(e){
        e.preventDefault();
        
        title = document.forms["myForm"]["fname"].value;
        if (title == "") {
            return false;
        }
        let url = `http://www.omdbapi.com/?apikey=87977ec5&t=${title}`
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.onload = function(){
            if(this.status == 200){
                console.log(this.responseText);
                document.getElementById("demo").innerHTML = this.responseText;
                let res = JSON.parse(this.responseText);
                document.getElementById("demo").innerHTML = `<img src = ${res.Poster}>
                <h3>${res.Title}</h3>
                <p><span>Released Year</span>: ${res.Released}</p>
                <p><span>Genre</span>: ${res.Genre}</p>
                <p><span>Director</span>: ${res.Director}</p>
                <p><span>Ratings</span>: ${res.Ratings[0].Value}</p>
                <p><span>Awards</span>: ${res.Awards}</p>
                <p> <span>Plot</span>: ${res.Plot}</p>
                `;
            }
            else if(this.status == 404){
                console.log("Error");
            }
            else{
                console.log("Nothing Happened");
            }
        }
        xhr.send();

        document.forms["myForm"]["fname"].value="";
    })