var $map = AmCharts.makeChart("mapdiv", {
	type: "map",
	pathToImages: "http://cdn.amcharts.com/lib/3/images/",
	dataProvider: {
		map: "usaLow",
		areas: []
	},
  colorSteps: 10,
  dragMap: false,
	areasSettings: {
		autoZoom: false,
    outlineThickness: 2,
    balloonText: "[[title]] ([[value]])"
	},
  zoomControl: {
    panControlEnabled: false,
    zoomControlEnabled: false,
    maxZoomLevel: 1
  }
});

$map.addListener("clickMapObject", function (event) {
  var id = event.mapObject.id;
  if (0 === id.indexOf('US-'))
  changeFilter(id.substr(3));
});