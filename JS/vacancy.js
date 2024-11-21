function getJobs(){
    let vacancy = document.getElementById(vacancies);
    vacancy.innerHTML = "Loading Jobs";
    var default = "job";

    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?query=${default}`)
    .then(response => response.ok ? response.json() : Promise.reject("Failed to fetch jobs"))
    .then(data => {
        vacancy.innerHTML = "<h3>Available Jobs: </h3>";
        for(let index = 0; index<1; index++){
            vacancy.innerHTML += '
             <div><h2>${data[index].title}</h2></div> 
            '
           

        }

      
    }).catch(() =>{
        ErrorD.innerHTML = "Job not found";
    } );
}