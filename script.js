// ======= navbar 
document.querySelector('#toggle_list').addEventListener('click', () => {
    const element = document.querySelector('#navbar_right');
    element.classList.add('hidden');

    const hideElement = document.querySelector('#hidden_toggle');
    hideElement.classList.remove('hidden');
    hideElement.classList.add('block');
})

document.querySelector('#cross_icon').addEventListener('click', () => {
    const hideElement = document.querySelector('#hidden_toggle');
    hideElement.classList.add('hidden');

    const element = document.querySelector('#navbar_right');
    element.classList.remove('hidden');
    element.classList.add('block');
})


// ====== Graph
anychart.onDocumentReady(function () {
  
    // add data
    var data = [
      ["Feb", 1, 0, 0],
      ["Mar", 4, 0, 0],
      ["Apr", 6, 0, 0],
      ["May", 9, 1, 0],
      ["Jun", 12, 2, 0],
      ["Jul", 13, 5, 1]
    ];

    // create a data set
    var dataSet = anychart.data.set(data);

    // map the data for all series
    var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
    var secondSeriesData = dataSet.mapAs({x: 0, value: 2});
    var thirdSeriesData = dataSet.mapAs({x: 0, value: 3});

    // create a line chart
    var chart = anychart.line();

    // create the series and name them
    var firstSeries = chart.line(firstSeriesData);
    firstSeries.name("Wooppl");
    var secondSeries = chart.line(secondSeriesData);
    secondSeries.name("Google");
    var thirdSeries = chart.line(thirdSeriesData);
    thirdSeries.name("Microsoft");

    // add a legend
    chart.legend().enabled(true);

    // specify where to display the chart
    chart.container("container");

    // draw the resulting chart
    chart.draw();

  });