{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Busiest Stations on the Sunway BRT Line (2026)",
  "width": 400,
  "height": 300,
  "data": {"url": "https://raw.githubusercontent.com/xloh0003-a11y/2179/main/DV2/data/chart10_station_ranking.csv"},
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "station",
      "type": "nominal",
      "sort": "-y",
      "title": "BRT Station"
    },
    "y": {
      "field": "ridership",
      "type": "quantitative",
      "title": "Accumulated Passenger Volume"
    },
    "color": {"value": "#2ca02c"}
  }
}
