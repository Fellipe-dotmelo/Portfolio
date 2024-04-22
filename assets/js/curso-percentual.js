document.addEventListener("DOMContentLoaded", function () {
  // Function to create a dynamic donut chart
  function criarGraficoRosca(container, porcentagemConcluido, titulo) {
    var dadosGrafico = {};

    if (porcentagemConcluido > 0) {
      if (porcentagemConcluido < 100) {
        // Include "Restante" label if not 100% complete
        dadosGrafico = {
          datasets: [{
            data: [porcentagemConcluido, 100 - porcentagemConcluido],
            backgroundColor: [
              '#ff7a57',
              '#fff'
            ]
          }],
          labels: ['Concluído', 'Restante']
        };
      } else {
        // Exclude "Restante" label if 100% complete
        dadosGrafico = {
          datasets: [{
            data: [porcentagemConcluido],
            backgroundColor: [
              '#ff7a57'
            ]
          }],
          labels: ['Concluído']
        };
      }

      // Create canvas element for donut chart
      // Create canvas element for donut chart
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');


      // Create donut chart
      new Chart(ctx, {
        type: 'doughnut',
        data: dadosGrafico,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: true,
            text: titulo, // Chart title
            fontSize: 7 // Title font size
          },
          elements: {
            arc: {
              borderWidth: 0.3, // Remove a borda
            },
            cutoutPercentage: 45
          }
        }
      });

      // Add canvas to container
      container.appendChild(canvas);
    }
  }

  // Select all elements with class "meuGrafico"
  var graficos = document.querySelectorAll('.meuGrafico');

  // For each element, create a donut chart with the given percentage
  graficos.forEach(function (grafico) {
    var porcentagemConcluido = parseInt(grafico.dataset.porcentagemConcluido);
    var titulo = grafico.dataset.titulo;
    var container = grafico.parentElement;

    // Create donut chart
    criarGraficoRosca(container, porcentagemConcluido, titulo);
  });
});