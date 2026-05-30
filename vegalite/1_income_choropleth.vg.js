{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Malaysian Household Median Income and Living Quarters Density by State (2022)",
    "fontSize": 15,
    "fontWeight": "bold",
    "color": "#000000",
    "anchor": "middle",
    "offset": 14,
    "subtitleFontSize": 0,
    "subtitleColor": "transparent"
  },
  "width": 780,
  "height": 520,
  "params": [
    {
      "name": "zoom_scale",
      "value": 1600,
      "bind": {
        "input": "range",
        "min": 600,
        "max": 4500,
        "step": 50,
        "name": "Zoom: "
      }
    },
    {
      "name": "center_longitude",
      "value": 109.5,
      "bind": {
        "input": "select",
        "options": [109.5, 101.7, 113.5, 116.8, 100.3, 103.7, 114.9],
        "labels": [
          "Malaysia",
          "Peninsular",
          "Sarawak",
          "Sabah",
          "Northern Peninsular",
          "Southern Peninsular",
          "Labuan"
        ],
        "name": "Map Center Longitude: "
      }
    },
    {
      "name": "center_latitude",
      "value": 4.5,
      "bind": {
        "input": "select",
        "options": [4.5, 3.14, 2.5, 5.6, 6.1, 1.6, 4.9],
        "labels": [
          "Malaysia",
          "Peninsular",
          "Sarawak",
          "Sabah",
          "Northern Peninsular",
          "Southern Peninsular",
          "Labuan"
        ],
        "name": "Map Center Latitude: "
      }
    }
  ],
  "projection": {
    "type": "equirectangular",
    "center": {"expr": "[center_longitude, center_latitude]"},
    "scale": {"expr": "zoom_scale"}
  },
  "config": {
    "view": {
      "stroke": "#c0cfe0",
      "strokeWidth": 1,
      "fill": "#dce8f5"
    },
    "background": "#ffffff",
    "legend": {
      "orient": "right",
      "padding": 14,
      "cornerRadius": 8,
      "fillColor": "#ffffff",
      "strokeColor": "#c8d8e8",
      "titleFontSize": 10,
      "titleFontWeight": "bold",
      "titleColor": "#0f2038",
      "titleLimit": 999,
      "titleLineHeight": 14,
      "labelFontSize": 9.5,
      "labelColor": "#2a4060",
      "labelLimit": 220,
      "offset": 16,
      "symbolStrokeWidth": 0.5
    },
    "font": "san-serif"
  },
  "layer": [
    {
      "description": "Base layer — neighboring Southeast Asian countries in neutral light gray",
      "data": {
        "url": "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
        "format": {
          "type": "topojson",
          "feature": "countries"
        }
      },
      "mark": {
        "type": "geoshape",
        "fill": "#e0e0e0",
        "stroke": "#ffffff",
        "strokeWidth": 0.7
      }
    },
    {
      "description": "Choropleth layer — 16 Malaysian states colored by median household income (2022)",
      "data": {
        "url": "https://raw.githubusercontent.com/dosm-malaysia/data-open/main/datasets/geodata/administrative_1_state.geojson",
        "format": {"type": "json", "property": "features"}
      },
      "transform": [
        {
          "calculate": "datum.properties.state == 'Pulau Pinang' ? 'Pulau Pinang' : datum.properties.state == 'Negeri Sembilan' ? 'Negeri Sembilan' : datum.properties.state == 'WP Kuala Lumpur' ? 'W.P. Kuala Lumpur' : datum.properties.state == 'WP Labuan' ? 'W.P. Labuan' : datum.properties.state == 'WP Putrajaya' ? 'W.P. Putrajaya' : datum.properties.state",
          "as": "state_key"
        },
        {
          "lookup": "state_key",
          "from": {
            "data": {
              "url": "https://raw.githubusercontent.com//xloh0003-a11y/2179/main/data/hh_income_state.csv",
              "format": {"type": "csv"}
            },
            "key": "state",
            "fields": ["income_median", "date"]
          }
        },
        {
          "filter": "datum.date == '2022-01-01'"
        }
      ],
      "mark": {
        "type": "geoshape",
        "stroke": "#ffffff",
        "strokeWidth": 1.1
      },
      "encoding": {
        "shape": {
          "field": "geometry",
          "type": "geojson"
        },
        "color": {
          "field": "income_median",
          "type": "quantitative",
          "scale": {
            "type": "threshold",
            "domain": [4000, 5000, 6000, 7000, 8500, 10000],
            "range": ["#deebf7", "#9ecae1", "#6baed6", "#3182bd", "#1361a9", "#08519c", "#08306b"]
          },
          "legend": {
            "title": ["Median Household", "Income (RM)"],
            "labelExpr": "'RM ' + format(datum.value, ',')",
            "values": [4000, 5000, 6000, 7000, 8500, 10000]
          }
        },
        "tooltip": [
          {"field": "state_key",       "type": "nominal",      "title": "State"},
          {"field": "income_median",   "type": "quantitative", "title": "Median Household Income (Malaysian Ringgit)", "format": ",.0f"}
        ]
      }
    },
    {
      "description": "Proportional symbols — coral orange circles sized by ratio of living quarters to households",
      "data": {
        "url": "https://raw.githubusercontent.com//xloh0003-a11y/2179/main/data/hh_lq_state.csv",
        "format": {"type": "csv"}
      },
      "transform": [
        {
          "filter": "datum.date == '2022-01-01'"
        },
        {
          "calculate": "datum.living_quarters / datum.households",
          "as": "lq_ratio"
        },
        {
          "lookup": "state",
          "from": {
            "data": {
              "values": [
                {"state": "Johor",             "longitude": 103.75, "latitude": 1.85},
                {"state": "Kedah",             "longitude": 100.55, "latitude": 6.12},
                {"state": "Kelantan",          "longitude": 102.24, "latitude": 5.38},
                {"state": "Melaka",            "longitude": 102.25, "latitude": 2.20},
                {"state": "Negeri Sembilan",   "longitude": 102.10, "latitude": 2.80},
                {"state": "Pahang",            "longitude": 102.80, "latitude": 3.80},
                {"state": "Perak",             "longitude": 101.10, "latitude": 4.55},
                {"state": "Perlis",            "longitude": 100.20, "latitude": 6.44},
                {"state": "Pulau Pinang",      "longitude": 100.33, "latitude": 5.41},
                {"state": "Sabah",             "longitude": 116.80, "latitude": 5.30},
                {"state": "Sarawak",           "longitude": 113.00, "latitude": 2.55},
                {"state": "Selangor",          "longitude": 101.55, "latitude": 3.35},
                {"state": "Terengganu",        "longitude": 103.12, "latitude": 4.95},
                {"state": "W.P. Kuala Lumpur", "longitude": 101.69, "latitude": 3.14},
                {"state": "W.P. Labuan",       "longitude": 115.23, "latitude": 5.28},
                {"state": "W.P. Putrajaya",    "longitude": 101.69, "latitude": 2.93}
              ]
            },
            "key": "state",
            "fields": ["longitude", "latitude"]
          }
        }
      ],
      "mark": {
        "type": "circle",
        "opacity": 0.7,
        "stroke": "#ffffff",
        "strokeWidth": 1.4,
        "color": "#ff7f50"
      },
      "encoding": {
        "longitude": {"field": "longitude", "type": "quantitative"},
        "latitude":  {"field": "latitude",  "type": "quantitative"},
        "size": {
          "field": "lq_ratio",
          "type": "quantitative",
          "scale": {
            "type": "linear",
            "domain": [0.86, 0.95, 1.05, 1.15, 1.29],
            "range":  [50,   100,  180,  300,  480]
          },
          "legend": {
            "title": ["Ratio of Living Quarters", "to Households"],
            "format": ".2f",
            "values": [0.86, 0.95, 1.05, 1.15, 1.29],
            "symbolFillColor": "#ff7f50",
            "symbolOpacity": 0.7
          }
        },
        "tooltip": [
          {"field": "state",           "type": "nominal",      "title": "State"},
          {"field": "households",      "type": "quantitative", "title": "Number of Households",              "format": ",.0f"},
          {"field": "living_quarters", "type": "quantitative", "title": "Number of Living Quarters",         "format": ",.0f"},
          {"field": "lq_ratio",        "type": "quantitative", "title": "Ratio of Living Quarters to Households", "format": ".3f"}
        ]
      }
    }
  ]
}