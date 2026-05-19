{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Household Demands in Selangor vs. Kuala Lumpur",
  "width": 400,
  "height": 300,
  "data": {"url": "https://raw.githubusercontent.com/xloh0003-a11y/2179/main/chart1_household_growth.csv"},
  "mark": "line",
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal",
      "title": "Year"
    },
    "y": {
      "field": "households",
      "type": "quantitative",
      "title": "Number of Households"
    },
    "color": {
      "field": "state",
      "type": "nominal",
      "title": "State"
    }
  }
}
