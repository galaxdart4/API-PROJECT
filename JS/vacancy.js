function getJobs(){
    let vacancy = document.getElementById("vacancies");
    vacancy.innerHTML = "Loading Jobs";
    var def = "job";

    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=${def}`)
    .then(response => response.ok ? response.json() : Promise.reject("Failed to fetch jobs"))
    .then(data => {
        vacancy.innerHTML = "<h3>Available Jobs: </h3>";
        for(let index = 0; index<10; index++){
            console.log(data[index]);
            vacancy.innerHTML += "Job: "+data[index].title+"</br>"+"Period: "+data[index].activedate.start+" to "+data[index].activedate.end+"</br>"+"Location: "+data[index].location.location+"<br>"+"Link: "+'<a href="'+data[index].link+'">'+data[index].link+'</a>'+"<br><br>";
        }

      
    }).catch(() =>{
        vacancy.innerHTML = "Jobs not found";
    } );
}


function jobSearch(){
    let x = document.getElementById("search");
    x.style.display = "block";

    let searchValue = document.querySelector("#jobSearch").value;
    let result = document.getElementById("results");
    result.innerHTML = "Loading Jobs";

    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=${searchValue}`)
    .then(response => response.ok ? response.json() : Promise.reject("Failed to fetch jobs"))
    .then(data => {
        for(let index = 0; index<10; index++){
            console.log(data[index]);
            result.innerHTML += "Job: "+data[index].title+"</br>"+"Period: "+data[index].activedate.start+" to "+data[index].activedate.end+"</br>"+"Location: "+data[index].location.location+"<br>"+"Link: "+'<a href="'+data[index].link+'">'+data[index].link+'</a>'+"<br><br>";
        }

      
    }).catch(() =>{
        vacancy.innerHTML = "Jobs not found";
    } );
}