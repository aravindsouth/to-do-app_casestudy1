// reading data from web API

var xhttp = new XMLHttpRequest();

// event listener
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        let output = "";
        for (let i = 0; i < response.length; i++) {
            if (response[i].completed){
            output +=  "<input type='checkbox' class='cdisabled' checked disabled>" + "<label>" + response[i].title + "</label>" + "<br>";
            }
            else {
                output +=  "<input type='checkbox' class='cenabled'>" + "<label>" + response[i].title + "</label>" + "<br>";
            }
        }
        document.getElementById("para1").innerHTML = output; 

    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();

// handling checkbox validation

var form1 = document.getElementById('para1');
var cbox = form1.getElementsByClassName('cenabled');
var total_check1 = 0;


// function validate () {
//     let total_check1 = 0;
//     for (let i = 0; i < cbox.length; i++) {
//         if(cbox[i].checked) {
//             total_check1 += 1;
//         }
//     }
//     if (total_check1 == 5) {
//         alert('Congrats. 5 Tasks have been Successfully Completed')
//     }
// }

// creatin Promise

function validate () {
    // let total_check1 = 0;
    return new Promise((resolve, reject) => {
    total_check1 = 0;
    for (let i = 0; i < cbox.length; i++) {
        if(cbox[i].checked) {
            total_check1 += 1;
        }
    }
    if (total_check1 == 5) {
        resolve('Congrats. 5 Tasks have been Successfully Completed')
    }
    else {
        reject('error-1');
    }
})}

function event_promise() {
    validate().then((response) => {
        alert(response);
    })
}

form1.addEventListener('click', event_promise);