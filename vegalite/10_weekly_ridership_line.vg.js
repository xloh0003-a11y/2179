{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Weekly transit ridership trends for RapidRail and BRT — 2026",
  "width": 600,
  "height": 360,
  "data": {
    "values": [
      {"day": "Monday",    "system": "BRT",       "ridership": 1275114},
      {"day": "Tuesday",   "system": "BRT",       "ridership": 1370316},
      {"day": "Wednesday", "system": "BRT",       "ridership": 1411392},
      {"day": "Thursday",  "system": "BRT",       "ridership": 1417572},
      {"day": "Friday",    "system": "BRT",       "ridership": 1341780},
      {"day": "Saturday",  "system": "BRT",       "ridership": 863007},
      {"day": "Sunday",    "system": "BRT",       "ridership": 720114},
      {"day": "Monday",    "system": "RapidRail", "ridership": 39164331},
      {"day": "Tuesday",   "system": "RapidRail", "ridership": 40853592},
      {"day": "Wednesday", "system": "RapidRail", "ridership": 41044605},
      {"day": "Thursday",  "system": "RapidRail", "ridership": 42788211},
      {"day": "Friday",    "system": "RapidRail", "ridership": 41085444},
      {"day": "Saturday",  "system": "RapidRail", "ridership": 29682540},
      {"day": "Sunday",    "system": "RapidRail", "ridership": 25690314}
    ]
  },
  "encoding": {
    "x": {
      "field": "day",
      "type": "ordinal",
      "sort": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "axis": {
        "title": "Day of Week",
        "labelAngle": 0,
        "grid": true
      }
    },
    "y": {
      "field": "ridership",
      "type": "quantitative",
      "aggregate": "sum",
      "axis": {
        "title": "Total Ridership",
        "format": "~s",
        "grid": true
      }
    },
    "color": {
      "field": "system",
      "type": "nominal",
      "scale": {
        "domain": ["RapidRail", "BRT"],
        "range": ["#1a56db", "#f97316"]
      },
      "legend": {
        "title": "Transit System"
      }
    }
  },
  "layer": [
    {
      "mark": {
        "type": "line",
        "interpolate": "monotone",
        "strokeWidth": 2.5,
        "strokeJoin": "round",
        "strokeCap": "round"
      }
    },
    {
      "mark": {
        "type": "point",
        "shape": "circle",
        "size": 80,
        "filled": true,
        "opacity": 1
      },
      "encoding": {
        "tooltip": [
          {"field": "day",       "type": "ordinal",      "title": "Day"},
          {"field": "system",    "type": "nominal",      "title": "System"},
          {"field": "ridership", "type": "quantitative", "title": "Ridership", "format": ",.0f"}
        ]
      }
    }
  ],
  "config": {
    "view": {"stroke": null}
  }
}