{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Average Daily BRT Commuter Volume by Day of Week",
  "width": 400,
  "height": 250,
  "data": {"url": "https://raw.githubusercontent.com/xloh0003-a11y/2179/main/DV2/data/chart6_brt_weekly_rhythm.csv"},
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "day_of_week",
      "type": "ordinal",
      "sort": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "title": "Day of the Week"
    },
    "y": {
      "field": "ridership",
      "type": "quantitative",
      "title": "Average Passenger Trips"
    }
  }
}
