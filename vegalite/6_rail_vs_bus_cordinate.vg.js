{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Prasarana Transit Performance — Parallel Coordinates",
    "subtitle": "Aggregated 2021–2025 · LRT = Kelana Jaya + Ampang · MRT = Kajang + Putrajaya · Bus = KL + Penang + Kuantan",
    "fontSize": 15,
    "subtitleFontSize": 11,
    "subtitleColor": "#6b7280",
    "anchor": "start",
    "offset": 14,
    "font": "sans-serif"
  },
  "width": 560,
  "height": 400,
  "data": {
    "values": [
      {
        "transit": "LRT",
        "Avg Monthly Ridership (M)": 9.667,
        "Peak Month Volume (M)": 14.587,
        "Growth Velocity (%)": 241.4
      },
      {
        "transit": "MRT",
        "Avg Monthly Ridership (M)": 7.436,
        "Peak Month Volume (M)": 13.433,
        "Growth Velocity (%)": 658.2
      },
      {
        "transit": "Monorail",
        "Avg Monthly Ridership (M)": 1.236,
        "Peak Month Volume (M)": 1.916,
        "Growth Velocity (%)": 399.3
      },
      {
        "transit": "Bus",
        "Avg Monthly Ridership (M)": 6.183,
        "Peak Month Volume (M)": 8.420,
        "Growth Velocity (%)": 119.8
      }
    ]
  },
  "transform": [
    {
      "fold": [
        "Avg Monthly Ridership (M)",
        "Peak Month Volume (M)",
        "Growth Velocity (%)"
      ],
      "as": ["metric", "raw_value"]
    },
    {
      "joinaggregate": [
        {"op": "min", "field": "raw_value", "as": "axis_min"},
        {"op": "max", "field": "raw_value", "as": "axis_max"}
      ],
      "groupby": ["metric"]
    },
    {
      "calculate": "(datum.raw_value - datum.axis_min) / (datum.axis_max - datum.axis_min)",
      "as": "norm_value"
    }
  ],
  "layer": [
    {
      "mark": {
        "type": "line",
        "strokeWidth": 2.8,
        "opacity": 0.85,
        "interpolate": "linear"
      },
      "encoding": {
        "x": {
          "field": "metric",
          "type": "nominal",
          "title": null,
          "sort": [
            "Avg Monthly Ridership (M)",
            "Peak Month Volume (M)",
            "Growth Velocity (%)"
          ],
          "axis": {
            "labelFontSize": 12,
            "labelFontWeight": "bold",
            "labelColor": "#444",
            "labelPadding": 10,
            "ticks": false,
            "domain": false,
            "grid": true,
            "gridColor": "#ccc",
            "gridWidth": 1.5,
            "gridDash": []
          }
        },
        "y": {
          "field": "norm_value",
          "type": "quantitative",
          "title": "Normalised score (per axis)",
          "scale": {"domain": [0, 1]},
          "axis": {
            "labels": false,
            "ticks": false,
            "domain": false,
            "grid": false,
            "title": null
          }
        },
        "color": {
          "field": "transit",
          "type": "nominal",
          "title": "Transit type",
          "scale": {
            "domain": ["LRT", "MRT", "Monorail", "Bus"],
            "range": ["#1565C0", "#00897B", "#F57F17", "#6A1B9A"]
          },
          "legend": {
            "orient": "bottom",
            "direction": "horizontal",
            "titleFontSize": 12,
            "labelFontSize": 12,
            "symbolStrokeWidth": 4,
            "symbolSize": 200,
            "symbolType": "stroke",
            "offset": 18,
            "padding": 10
          }
        },
        "detail": {"field": "transit", "type": "nominal"},
        "tooltip": [
          {"field": "transit", "type": "nominal", "title": "Transit"},
          {"field": "metric",  "type": "nominal",  "title": "Metric"},
          {
            "field": "raw_value",
            "type": "quantitative",
            "title": "Value",
            "format": ".2f"
          },
          {
            "field": "norm_value",
            "type": "quantitative",
            "title": "Normalised (0–1)",
            "format": ".3f"
          },
          {"field": "axis_min", "type": "quantitative", "title": "Axis min", "format": ".2f"},
          {"field": "axis_max", "type": "quantitative", "title": "Axis max", "format": ".2f"}
        ]
      }
    },
    {
      "mark": {
        "type": "point",
        "shape": "circle",
        "size": 90,
        "filled": true,
        "strokeWidth": 1.8,
        "opacity": 1
      },
      "encoding": {
        "x": {
          "field": "metric",
          "type": "nominal",
          "sort": [
            "Avg Monthly Ridership (M)",
            "Peak Month Volume (M)",
            "Growth Velocity (%)"
          ]
        },
        "y": {
          "field": "norm_value",
          "type": "quantitative"
        },
        "color": {
          "field": "transit",
          "type": "nominal",
          "scale": {
            "domain": ["LRT", "MRT", "Monorail", "Bus"],
            "range": ["#1565C0", "#00897B", "#F57F17", "#6A1B9A"]
          }
        },
        "stroke": {
          "field": "transit",
          "type": "nominal",
          "scale": {
            "domain": ["LRT", "MRT", "Monorail", "Bus"],
            "range": ["#1565C0", "#00897B", "#F57F17", "#6A1B9A"]
          }
        },
        "tooltip": [
          {"field": "transit", "type": "nominal", "title": "Transit"},
          {"field": "metric",  "type": "nominal",  "title": "Metric"},
          {
            "field": "raw_value",
            "type": "quantitative",
            "title": "Value",
            "format": ".2f"
          },
          {
            "field": "norm_value",
            "type": "quantitative",
            "title": "Normalised (0–1)",
            "format": ".3f"
          },
          {"field": "axis_min", "type": "quantitative", "title": "Axis min", "format": ".2f"},
          {"field": "axis_max", "type": "quantitative", "title": "Axis max", "format": ".2f"}
        ]
      }
    },
    {
      "mark": {
        "type": "text",
        "dy": -14,
        "fontSize": 10.5,
        "fontWeight": "bold"
      },
      "transform": [
        {"filter": "datum.metric === 'Growth Velocity (%)'"}
      ],
      "encoding": {
        "x": {
          "field": "metric",
          "type": "nominal",
          "sort": [
            "Avg Monthly Ridership (M)",
            "Peak Month Volume (M)",
            "Growth Velocity (%)"
          ]
        },
        "y": {"field": "norm_value", "type": "quantitative"},
        "text": {"field": "transit", "type": "nominal"},
        "color": {
          "field": "transit",
          "type": "nominal",
          "scale": {
            "domain": ["LRT", "MRT", "Monorail", "Bus"],
            "range": ["#1565C0", "#00897B", "#F57F17", "#6A1B9A"]
          }
        }
      }
    }
  ],
  "config": {
    "view": {
      "stroke": "transparent"
    },
    "background": "#fafafa",
    "font": "sans-serif",
    "axis": {
      "labelFont": "sans-serif"
    }
  }
}