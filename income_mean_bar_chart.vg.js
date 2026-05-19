{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Mean Household Income: Selangor vs Kuala Lumpur",
  "width": 400,
  "height": 150,
  "data": {"url": "../data/chart2_income_evolution.csv"},
  "transform": [
    {"filter": "datum.date == '1/1/2022'"}
  ],
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "state",
      "type": "nominal",
      "title": "Territory"
    },
    "x": {
      "field": "income_mean",
      "type": "quantitative",
      "title": "Mean Monthly Income (RM)"
    },
    "color": {
      "field": "state",
      "type": "nominal",
      "legend": null
    }
  }
}