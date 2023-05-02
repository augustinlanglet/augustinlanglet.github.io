const hr = document.getElementById('hrChart');

new Chart(hr, {
  type: 'doughnut',
  data: {
    labels: [
      'Zone 1: Endurance',
      'Zone 2: Aerobic',
      'Zone 3: Tempo',
      'Zone 4: Anaerobic'
    ],
    datasets: [{
      label: 'Minutes',
      data: [1, 22, 62, 8],
      backgroundColor: [
        'rgba(255,255,255,0.15)',
        'rgba(255,255,255,0.3)',
        'rgba(255,255,255,0.45)',
        'rgba(255,255,255,0.6)',
      ],
      borderWidth: 2,
      borderColor: "white",
      hoverBackgroundColor: 'rgba(255,0,0,1)',
      hoverOffset: 30
    }],
  },
});