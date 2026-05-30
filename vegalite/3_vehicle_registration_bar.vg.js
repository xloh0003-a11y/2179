{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Vehicle Registrations by Type (2021–2025)",
    "subtitle": "Annual totals for all fuels combined — click a bar to highlight its vehicle type",
    "fontSize": 16,
    "subtitleFontSize": 12,
    "subtitleColor": "#6b7280",
    "anchor": "start",
    "offset": 10
  },
  "width": 680,
  "height": 420,
  "data": {
    "url": "https://raw.githubusercontent.com//xloh0003-a11y/2179/main/data/registrations_type_fuel.csv",
    "format": {"type": "csv"}
  },
  "params": [
    {
      "name": "typeSelect",
      "select": {"type": "point", "fields": ["type"]}
    }
  ],
  "transform": [
    {
      "filter": "datum.fuel == 'all_fuels'"
    },
    {
      "filter": "datum.type != 'all_types'"
    },
    {
      "calculate": "year(toDate(datum.date))",
      "as": "year"
    },
    {
      "filter": "datum.year >= 2021 && datum.year <= 2025"
    },
    {
      "calculate": "toString(datum.year)",
      "as": "year_str"
    }
  ],
  "encoding": {
    "x": {
      "field": "year_str",
      "type": "nominal",
      "title": "Year",
      "axis": {
        "labelFontSize": 12,
        "titleFontSize": 13,
        "labelAngle": 0
      },
      "sort": ["2021", "2022", "2023", "2024", "2025"]
    },
    "xOffset": {
      "field": "type",
      "type": "nominal",
      "sort": ["car", "motorcycle", "van", "lorry", "bus", "other"],
      "scale": {"paddingInner": 0.15}
    },
    "y": {
      "aggregate": "sum",
      "field": "registrations",
      "type": "quantitative",
      "title": "Total Registrations",
      "axis": {
        "labelFontSize": 11,
        "titleFontSize": 13,
        "format": "~s",
        "grid": true,
        "gridDash": [3, 3],
        "gridOpacity": 0.5
      }
    },
    "color": {
      "field": "type",
      "type": "nominal",
      "title": "Vehicle Type",
      "sort": ["car", "motorcycle", "van", "lorry", "bus", "other"],
      "scale": {
          "domain": ["car", "motorcycle", "van", "lorry", "bus", "other"],
          "range": ["#1f77b4", "#ff7f0e", "#2ca02c", "#9467bd", "#17becf", "#bcbd22"]
        },
      "legend": {
        "titleFontSize": 12,
        "labelFontSize": 11,
        "orient": "right",
        "symbolSize": 120
      }
    },
    "opacity": {
      "condition": {
        "param": "typeSelect",
        "value": 1.0
      },
      "value": 0.2
    },
    "tooltip": [
      {"field": "year_str", "type": "nominal", "title": "Year"},
      {"field": "type", "type": "nominal", "title": "Vehicle Type"},
      {
        "aggregate": "sum",
        "field": "registrations",
        "type": "quantitative",
        "title": "Total Registrations",
        "format": ","
      }
    ]
  },
  "mark": {
    "type": "bar",
    "cursor": "pointer",
    "cornerRadiusTopLeft": 3,
    "cornerRadiusTopRight": 3
  },
  "config": {
    "view": {"stroke": "transparent"},
    "axis": {"domainColor": "#aaa", "tickColor": "#aaa"},
    "scale": {
      "bandPaddingInner": 0.25,
      "bandPaddingOuter": 0.15
    },
    "background": "#fafafa",
    "font": "sans-serif"
  }
}