{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Fuel Type Composition of Malaysian Car Registrations (2000–2026)",
    "subtitle": "100% stacked area — Monthly registrations normalised by share of total",
    "fontSize": 15,
    "subtitleFontSize": 11,
    "subtitleColor": "#6b7280",
    "anchor": "start",
    "offset": 12,
    "font": "sans-serif"
  },
  "width": 780,
  "height": 420,
  "data": {
    "url": "https://raw.githubusercontent.com//xloh0003-a11y/2179/main/data/registrations_type_fuel.csv",
    "format": {"type": "csv"}
  },
  "transform": [
    {"filter": "datum.type == 'car'"},
    {"filter": "datum.fuel != 'all_fuels'"},
    {"calculate": "toDate(datum.date)", "as": "parsed_date"},
    {"calculate": "toNumber(datum.registrations)", "as": "reg_num"}
  ],
  "layer": [
    {
      "mark": {"type": "area", "interpolate": "monotone", "line": false},
      "encoding": {
        "x": {
          "field": "parsed_date",
          "type": "temporal",
          "title": "Date",
          "axis": {
            "format": "%Y",
            "tickCount": {"interval": "year", "step": 2},
            "labelAngle": 0,
            "labelFontSize": 11,
            "titleFontSize": 13,
            "grid": false,
            "domainColor": "#ccc",
            "tickColor": "#ccc"
          }
        },
        "y": {
          "field": "reg_num",
          "type": "quantitative",
          "stack": "normalize",
          "title": "Share of Registrations",
          "axis": {
            "format": ".0%",
            "labelFontSize": 11,
            "titleFontSize": 13,
            "grid": true,
            "gridDash": [3, 4],
            "gridColor": "#e0e0e0",
            "domainColor": "#ccc",
            "tickColor": "#ccc",
            "values": [0, 0.25, 0.5, 0.75, 1.0]
          }
        },
        "color": {
          "field": "fuel",
          "type": "nominal",
          "title": "Fuel Type",
          "sort": ["petrol", "diesel", "greendiesel", "other", "hybrid", "electric"],
          "scale": {
            "domain":  ["petrol",  "diesel",  "greendiesel", "other",  "hybrid",  "electric"],
            "range":   ["#3a3a3a", "#6b6b6b", "#9e9e9e",     "#c4c4c4", "#00c04b", "#00ff85"]
          },
          "legend": {
            "titleFontSize": 12,
            "labelFontSize": 11,
            "orient": "right",
            "symbolType": "square",
            "symbolSize": 150,
            "offset": 10
          }
        },
        "order": {
          "field": "fuel",
          "type": "nominal",
          "sort": ["petrol", "diesel", "greendiesel", "other", "hybrid", "electric"]
        }
      }
    },
    {
      "mark": {"type": "rule", "color": "#888", "strokeWidth": 1, "strokeDash": [4, 4], "opacity": 0},
      "params": [
        {
          "name": "hover",
          "select": {
            "type": "point",
            "on": "mouseover",
            "nearest": true,
            "encodings": ["x"]
          }
        }
      ],
      "encoding": {
        "x": {
          "field": "parsed_date",
          "type": "temporal"
        },
        "opacity": {
          "condition": {"param": "hover", "empty": false, "value": 1},
          "value": 0
        },
        "tooltip": [
          {
            "field": "parsed_date",
            "type": "temporal",
            "title": "Month",
            "format": "%b %Y"
          },
          {
            "field": "fuel",
            "type": "nominal",
            "title": "Fuel Type"
          },
          {
            "field": "reg_num",
            "type": "quantitative",
            "title": "Registrations",
            "format": ","
          }
        ]
      }
    }
  ],
  "resolve": {"scale": {"color": "shared"}},
  "config": {
    "view": {"stroke": "transparent"},
    "background": "#fafafa",
    "font": "sans-serif",
    "area": {"opacity": 0.92},
    "legend": {"padding": 8}
  }
}