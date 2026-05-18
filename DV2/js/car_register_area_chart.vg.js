{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Monthly Timeline of New Private Car Registrations",
  "width": 400,
  "height": 300,
  "data": {"url": "https://raw.githubusercontent.com/xloh0003-a11y/2179/main/DV2/data/registrations_type_fuel_tidy.csv"},
  "mark": {
    "type": "area",
    "color": "#ff7f0e",
    "opacity": 0.7
  },
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal",
      "timeUnit": "year",
      "title": "Timeline"
    },
    "y": {
      "field": "registrations",
      "type": "quantitative",
      "aggregate": "sum",
      "title": "Total Cars Registered"
    }
  }
}
