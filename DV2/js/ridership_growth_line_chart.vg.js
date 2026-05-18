{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Total Prasarana Transit Ridership Growth (2021-2025)",
    "width": 450,
    "height": 280,
    "data": {"url": "https://raw.githubusercontent.com/xloh0003-a11y/2179/main/DV2/data/Prasarana's%20Ridership%20-%20tidy.csv"},
    "mark": {"type": "line", "point": true, "color": "#0072b2", "strokeWidth": 3},
    "encoding": {
        "x": {"field": "Year", "type": "ordinal", "title": "Year"},
        "y": {"field": "Ridership", "type": "quantitative", "aggregate": "sum", "title": "Total Annual Passenger Trips", "axis": {"format": ".2s"}},
        "tooltip": [{"field": "Year", "type": "ordinal"}, {"field": "Ridership", "type": "quantitative", "aggregate": "sum", "format": ","}]
    }
}