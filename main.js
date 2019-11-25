// a memory location that never changes
const BASE_URL = "https://zagster-service.herokuapp.com"
const PI = 3.14159

//jQuery command. wait until the wb page loads call function
//whose name is in parentheses
//function call means run the code
$(updateView)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

//call function add (use it - make it run)
add(2,3);
//greeter is the function identifier. name is the functions
//argument (info it needs to do its job)
function add (num1, num2){
    answer = num1 + num2;
    console.log("the answer is: " + answer)
    return answer;
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});