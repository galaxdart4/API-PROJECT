function getJobs{
    let

    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search${}`)
    .then(response => response.ok ? response.json() : Promise.reject("Failed to fetch joke"))
    .then(data => {


      
    }).catch(() =>{
    } );
}