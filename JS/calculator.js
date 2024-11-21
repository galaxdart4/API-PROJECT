let job 
let hours 
let pay 
let period 
let tax 
let nirate 
let perHour
let perWeek
let perMonth
let perYear

function Calculate(){
    job = document.getElementById("job").value;
    hours = document.getElementById("hours").value;
    pay = document.getElementById("gross").value;
    period = document.getElementById("timePeriod").value;
    tax = document.getElementById("tax").value/100;
    nirate = document.getElementById("ni").value/100;

    let taxDeduction = pay*tax;
    let niDeduction = pay*tax;
    let takeHome = pay - taxDeduction - niDeduction;

    if(period === "month"){
        perMonth = takeHome;
        perYear = perMonth*12
        perWeek = perMonth/4
        perHour = perMonth/hours
    }else if(period === "hour"){
        perHour = takeHome;
        perMonth = perHour*hours*4;
        perYear = perMonth*12
        perWeek = perHour*hours  
    }else if(period === "week"){
        perWeek = takeHome
        perMonth = perWeek*4;
        perYear = perWeek*52
        perHour = perWeek/hours
    }else if(period === "year"){
        perYear = takeHome;
        perMonth = perYear/12;
        perWeek = perYear/52;
        perHour = perWeek/hours;
    }else{
        alert("Please specify a time period");
    }
    
    // document.write("Job: " + job);
    // document.write("<br>"+"Working "+hours+" hours a week for a gross pay of £"+pay+" per "+period+" with "+(tax*100)+"% Tax and "+(nirate*100)+"% NI results in a take-home pay of:");
    // document.write("<br>"+"<br>"+"£"+perHour.toFixed(2)+" per Hour");
    // document.write("<br>"+"£"+perWeek.toFixed(2)+" per Week");
    // document.write("<br>"+"£"+perMonth.toFixed(2)+" per Month");
    // document.write("<br>"+"£"+perYear.toFixed(2)+" per Year");

    console.log(hours);
    Display();
}

function Display(){
    let x = document.getElementById("results");
    x.style.display = "flex";

    // x.style.flex-direction = column;
    // if (job === null) {
    //     x.style.display = "none";
    // } else if(x.style.display === "none" && job != null){
    //     x.style.display = "block";
    // }

    document.getElementById("jobs").innerHTML = "Job: "+job;
    document.getElementById("result").innerHTML = "<br>"+"Working "+hours+" hours a week for a gross pay of £"+pay+" per "+period+" with "+(tax*100)+"% Tax and "+(nirate*100)+"% NI results in a take-home pay of:";
    document.getElementById("perhour").innerHTML = "<br>"+"<br>"+"£"+perHour.toFixed(2)+" per Hour";
    document.getElementById("perweek").innerHTML = "<br>"+"£"+perWeek.toFixed(2)+" per Week";
    document.getElementById("permonth").innerHTML = "<br>"+"£"+perMonth.toFixed(2)+" per Month";
    document.getElementById("peryear").innerHTML = "<br>"+"£"+perYear.toFixed(2)+" per Year";
}