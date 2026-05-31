{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Dumbbell plot comparing household income mean vs median across Malaysian states in 2022", 
  "width": 560,
  "height": 480,
  "padding": {"left": 20, "right": 30, "top": 20, "bottom": 20},
  "background": "#fafaf8",
  "data": {
    "values": [
      {"state": "W.P. Kuala Lumpur", "income_mean": 13325, "income_median": 10234},
      {"state": "W.P. Putrajaya",    "income_mean": 13473, "income_median": 10056},
      {"state": "Selangor",          "income_mean": 12233, "income_median": 9983},
      {"state": "W.P. Labuan",       "income_mean": 8250,  "income_median": 6904},
      {"state": "Johor",             "income_mean": 8517,  "income_median": 6879},
      {"state": "Pulau Pinang",      "income_mean": 8267,  "income_median": 6502},
      {"state": "Melaka",            "income_mean": 8057,  "income_median": 6210},
      {"state": "Terengganu",        "income_mean": 7248,  "income_median": 5878},
      {"state": "Negeri Sembilan",   "income_mean": 6788,  "income_median": 5226},
      {"state": "Sarawak",           "income_mean": 6457,  "income_median": 4978},
      {"state": "Sabah",             "income_mean": 6171,  "income_median": 4577},
      {"state": "Perak",             "income_mean": 5779,  "income_median": 4494},
      {"state": "Pahang",            "income_mean": 5777,  "income_median": 4753},
      {"state": "Perlis",            "income_mean": 5664,  "income_median": 4713},
      {"state": "Kedah",             "income_mean": 5550,  "income_median": 4402},
      {"state": "Kelantan",          "income_mean": 4885,  "income_median": 3614}
    ]
  },
  "layer": [
    {
      "transform": [
        {"calculate": "datum.income_mean - datum.income_median", "as": "gap"},
        {"calculate": "format(datum.income_mean, ',') + ' MYR'",    "as": "mean_label"},
        {"calculate": "format(datum.income_median, ',') + ' MYR'",  "as": "median_label"},
        {"calculate": "format(datum.income_mean - datum.income_median, ',') + ' MYR'", "as": "gap_label"}
      ],
      "mark": {
        "type": "rule",
        "strokeWidth": 2.5,
        "color": "#cbd5e1",
        "opacity": 0.8
      },
      "encoding": {
        "y": {
          "field": "state",
          "type": "nominal",
          "sort": {"field": "income_mean", "order": "descending"},
          "axis": null
        },
        "x":  {"field": "income_median", "type": "quantitative"},
        "x2": {"field": "income_mean"},
        "tooltip": [
          {"field": "state",       "title": "State"},
          {"field": "mean_label",  "title": "Mean Income"},
          {"field": "median_label","title": "Median Income"},
          {"field": "gap_label",   "title": "Mean–Median Gap"}
        ]
      }
    },
    {
      "transform": [
        {"calculate": "datum.income_mean - datum.income_median", "as": "gap"},
        {"calculate": "'RM ' + format(datum.income_mean, ',')",    "as": "mean_label"},
        {"calculate": "'RM ' + format(datum.income_median, ',')",  "as": "median_label"},
        {"calculate": "'RM ' + format(datum.income_mean - datum.income_median, ',')", "as": "gap_label"},
        {
          "fold": ["income_median", "income_mean"],
          "as": ["measure", "value"]
        },
        {
          "calculate": "datum.measure === 'income_median' ? 'Median Income' : 'Mean Income'",
          "as": "measure_label"
        }
      ],
      "mark": {
        "type": "circle",
        "size": 115,
        "opacity": 0.93,
        "stroke": "#fafaf8",
        "strokeWidth": 1.8
      },
      "encoding": {
        "y": {
          "field": "state",
          "type": "nominal",
          "sort": {"field": "income_mean", "order": "descending"},
          "title": null,
          "axis": {
            "labelFontSize": 11.5,
            "labelFont": "system-ui, sans-serif",
            "labelColor": "#374151",
            "labelLimit": 170,
            "ticks": false,
            "domain": false,
            "grid": false,
            "offset": 8
          }
        },
        "x": {
          "field": "value",
          "type": "quantitative",
          "title": "Monthly Gross Household Income (RM)",
          "axis": {
            "titleFontSize": 12,
            "titleFont": "system-ui, sans-serif",
            "titleColor": "#6b7280",
            "titlePadding": 12,
            "labelFontSize": 10.5,
            "labelFont": "system-ui, sans-serif",
            "labelColor": "#9ca3af",
            "format": ",.0f",
            "grid": true,
            "gridColor": "#e5e7eb",
            "gridDash": [3, 3],
            "gridOpacity": 0.9,
            "ticks": false,
            "domain": false
          }
        },
        "color": {
          "field": "measure_label",
          "type": "nominal",
          "scale": {
            "domain": ["Median Income", "Mean Income"],
            "range":  ["#08519c", "#ff7f50"]
          },
          "legend": {
            "title": "Income Measure",
            "orient": "bottom",
            "direction": "horizontal",
            "titleFontSize": 11,
            "titleFontWeight": "bold",
            "titleColor": "#000000",
            "labelFontSize": 11,
            "labelFont": "system-ui, sans-serif",
            "labelColor": "#000000",
            "symbolType": "circle",
            "symbolSize": 130,
            "symbolStrokeWidth": 0,
            "columnPadding": 20,
            "padding": 8,
            "offset": 10
          }
        },
        "order": {
          "field": "measure_label",
          "sort": "descending"
        },
        "tooltip": [
          {"field": "state",        "title": "State"},
          {"field": "mean_label",   "title": "Mean Income"},
          {"field": "median_label", "title": "Median Income"},
          {"field": "gap_label",    "title": "Mean–Median Gap"}
        ]
      }
    },
    {
      "transform": [
        {"calculate": "datum.income_mean - datum.income_median", "as": "gap"},
        {"calculate": "'RM ' + format(datum.income_mean, ',')",    "as": "mean_label"},
        {"calculate": "'RM ' + format(datum.income_median, ',')",  "as": "median_label"},
        {"calculate": "'RM ' + format(datum.income_mean - datum.income_median, ',')", "as": "gap_label"}
      ],
      "mark": {
        "type": "text",
        "align": "left",
        "dx": 9,
        "dy": 0,
        "fontSize": 9.5,
        "font": "system-ui, sans-serif",
        "fontWeight": "normal",
        "color": "#9d3a10",
        "opacity": 0.7
      },
      "encoding": {
        "y": {
          "field": "state",
          "type": "nominal",
          "sort": {"field": "income_mean", "order": "descending"},
          "axis": null
        },
        "x": {"field": "income_mean", "type": "quantitative"},
        "text": {"field": "gap_label"},
        "tooltip": [
          {"field": "state",        "title": "State"},
          {"field": "mean_label",   "title": "Mean Income"},
          {"field": "median_label", "title": "Median Income"},
          {"field": "gap_label",    "title": "Mean–Median Gap"}
        ]
      }
    }
  ],
  "config": {
    "view": {"stroke": "transparent"},
    "axis": {
      "labelFont": "system-ui, sans-serif",
      "titleFont": "system-ui, sans-serif"
    },
    "title": {
      "font": "Georgia, serif",
      "subtitleFont": "system-ui, sans-serif"
    }
  }
}