const ctx = document.getElementById('paceChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        datasets: [{
            label: 'pace',
            data: [4.37, 4.4, 4.55, 4.53, 4.48, 4.48, 4.43, 4.73, 4.65, 4.63, 4.53, 4.62, 4.62, 4.43, 4.33, 5.05, 4.18, 4.0, 3.95, 4.08, 3.9],
            borderWidth: 2,
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderColor: "white",
            hoverBackgroundColor: 'rgba(255,0,0,1)'
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: "y",
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                ticks: {
                    color: 'white'
                }
            },
            x: {
                min: 3,
                ticks: {
                    color: 'white'
                }
            }
        }
    }
});

// ["4:22", 
// "4:24", 
// "4:33", 
// "4:32",
// "4:29",
// "4:29",
// "4:26",
// "4:44",
// "4:39",
// "4:38",
// "4:32",
// "4:37",
// "4:37",
// "4:26",
// "4:20",
// "5:03",
// "4:11",
// "4:00",
// "3:57",
// "4:05",
// "3:54",
// "0:21",
// ]
