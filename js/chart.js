Chart.defaults.global.defaultFontColor = "#444444";
Chart.defaults.global.defaultFontFamily = "Open Sans"; 




const LINECHART = document.getElementById("lineChart");
console.log(LINECHART);
let lineChart = new Chart(LINECHART, {
	type: 'line',
	options: {
		legend: {
			display:true,
			labels:{
				boxHeight:2,
				fontSize:10,
				padding:12,
			}
		},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    steps: 10,
                    max:100,
                    fontSize:10,
                },
                scaleLabel: {
                	display:true,
                	labelString:'Reputation Scores',
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize:10,
                },
                scaleLabel: {
                	display:true,
                	labelString:'Time',
                }
            }]
        }
    },
	data: {
	labels: ["March 2015", "June 2015", "Sept 2015", "Dec 2015", "March 2016", "June 2016", "Sept 2016"],
    datasets: [
        {
            label: "Global reputation",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#CDA34F",
            borderColor: "#CDA34F",
            borderCapStyle: 'butt',
            borderDash: [],
            borderWidth: 5,
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#CDA34F",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#CDA34F",
            pointHoverBorderColor: "#CDA34F",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [20, 23, 30, 50, 46, 67, 68],
            spanGaps: false,
        },
        {
            label: "Facebook reputation",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#3b5998",
            borderColor: "#3b5998",
            borderCapStyle: 'butt',
            borderDash: [],
            borderWidth:2,
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#3b5998",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#3b5998",
            pointHoverBorderColor: "#3b5998",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [38, 40, 50, 50, 56, 58, 65],
            spanGaps: false,
        },        
        {
            label: "eBay reputation",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#88b719",
            borderColor: "#88b719",
            borderCapStyle: 'butt',
            borderDash: [],
            borderWidth:2,
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#88b719",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#88b719",
            pointHoverBorderColor: "#88b719",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [, , 10, 20, 20, 30, 35],
            spanGaps: false,
        },
        {
            label: "Quora reputation",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#c41200",
            borderColor: "#c41200",
            borderCapStyle: 'butt',
            borderDash: [],
            borderWidth:2,
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#c41200",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#c41200",
            pointHoverBorderColor: "#c41200",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [, , , , 55, 78, 77],
            spanGaps: false,
        },
        {
            label: "Couchsurfing reputation",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#eb6d20",
            borderColor: "#eb6d20",
            borderCapStyle: 'butt',
            borderDash: [],
            borderWidth:2,
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#eb6d20",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#eb6d20",
            pointHoverBorderColor: "#eb6d20",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [, , , , , , ],
            spanGaps: false,
        },
    ]
}
});


const BARCHART = document.getElementById("barChart");
console.log(BARCHART);
let barChart = new Chart(BARCHART, {
	type: 'horizontalBar',
	options: {
		legend: [{
			boxHeight:20,
			boxWidth:20,
			fontSize:5,
			padding:5,
		}],
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize:10,
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize:10,
                }
            }]
        }
    },
	data: {
	labels: ["80-100", "60-80", "40-60", "20-40", "0-20"],
    datasets: [
        {
            label: "Score repartition among users",
            fill: false,
            lineTension: 0.1,
            backgroundColor: ['#444444',
                '#CDA34F',
                '#444444','#444444', '#444444'],
            borderColor: "white",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2, 10, 23, 25, 40],
            spanGaps: false,
        }
    ]
}
});

const PIECHART = document.getElementById("pieChart");
console.log(PIECHART);
let pieChart = new Chart(PIECHART, {
	type: 'pie',
	data: {
	labels: ["Quora", "eBay", "Facebook", "Couchsurfing"],
    datasets: [
        {
            label: "Score repartition among users",
            fill: false,
            lineTension: 0.1,
            backgroundColor: ["#c41200","#88b719","#3b5998", "#eb6d20"],
            borderWidth:1,
            borderColor: "white",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'none',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10, 30, 60, 0],
            spanGaps: false,
        }
    ]
}
});

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});