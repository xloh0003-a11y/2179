{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 520,
  "height": 500,
  "background": "#fafafa",
  "data": {
    "values": [
      {"origin": "BRT01: Sunway-Setia Jaya", "destination": "BRT01: Sunway-Setia Jaya", "ridership": 1092},
      {"origin": "BRT01: Sunway-Setia Jaya", "destination": "BRT02: Mentari",            "ridership": 10540},
      {"origin": "BRT01: Sunway-Setia Jaya", "destination": "BRT03: Sunway Lagoon",      "ridership": 45263},
      {"origin": "BRT01: Sunway-Setia Jaya", "destination": "BRT04: SunMed",             "ridership": 40658},
      {"origin": "BRT01: Sunway-Setia Jaya", "destination": "BRT05: SunU-Monash",        "ridership": 19309},
      {"origin": "BRT01: Sunway-Setia Jaya", "destination": "BRT06: South Quay-USJ 1",   "ridership": 11670},
      {"origin": "BRT01: Sunway-Setia Jaya", "destination": "BRT07: USJ 7",              "ridership": 56720},
      {"origin": "BRT02: Mentari",            "destination": "BRT01: Sunway-Setia Jaya", "ridership": 9598},
      {"origin": "BRT02: Mentari",            "destination": "BRT02: Mentari",            "ridership": 2815},
      {"origin": "BRT02: Mentari",            "destination": "BRT03: Sunway Lagoon",      "ridership": 28732},
      {"origin": "BRT02: Mentari",            "destination": "BRT04: SunMed",             "ridership": 42314},
      {"origin": "BRT02: Mentari",            "destination": "BRT05: SunU-Monash",        "ridership": 18174},
      {"origin": "BRT02: Mentari",            "destination": "BRT06: South Quay-USJ 1",   "ridership": 12662},
      {"origin": "BRT02: Mentari",            "destination": "BRT07: USJ 7",              "ridership": 46254},
      {"origin": "BRT03: Sunway Lagoon",      "destination": "BRT01: Sunway-Setia Jaya", "ridership": 43244},
      {"origin": "BRT03: Sunway Lagoon",      "destination": "BRT02: Mentari",            "ridership": 30218},
      {"origin": "BRT03: Sunway Lagoon",      "destination": "BRT03: Sunway Lagoon",      "ridership": 5382},
      {"origin": "BRT03: Sunway Lagoon",      "destination": "BRT04: SunMed",             "ridership": 77337},
      {"origin": "BRT03: Sunway Lagoon",      "destination": "BRT05: SunU-Monash",        "ridership": 30219},
      {"origin": "BRT03: Sunway Lagoon",      "destination": "BRT06: South Quay-USJ 1",   "ridership": 38830},
      {"origin": "BRT03: Sunway Lagoon",      "destination": "BRT07: USJ 7",              "ridership": 175495},
      {"origin": "BRT04: SunMed",             "destination": "BRT01: Sunway-Setia Jaya", "ridership": 39951},
      {"origin": "BRT04: SunMed",             "destination": "BRT02: Mentari",            "ridership": 47252},
      {"origin": "BRT04: SunMed",             "destination": "BRT03: Sunway Lagoon",      "ridership": 86403},
      {"origin": "BRT04: SunMed",             "destination": "BRT04: SunMed",             "ridership": 6406},
      {"origin": "BRT04: SunMed",             "destination": "BRT05: SunU-Monash",        "ridership": 61777},
      {"origin": "BRT04: SunMed",             "destination": "BRT06: South Quay-USJ 1",   "ridership": 66575},
      {"origin": "BRT04: SunMed",             "destination": "BRT07: USJ 7",              "ridership": 186670},
      {"origin": "BRT05: SunU-Monash",        "destination": "BRT01: Sunway-Setia Jaya", "ridership": 15390},
      {"origin": "BRT05: SunU-Monash",        "destination": "BRT02: Mentari",            "ridership": 16661},
      {"origin": "BRT05: SunU-Monash",        "destination": "BRT03: Sunway Lagoon",      "ridership": 39073},
      {"origin": "BRT05: SunU-Monash",        "destination": "BRT04: SunMed",             "ridership": 54690},
      {"origin": "BRT05: SunU-Monash",        "destination": "BRT05: SunU-Monash",        "ridership": 18252},
      {"origin": "BRT05: SunU-Monash",        "destination": "BRT06: South Quay-USJ 1",   "ridership": 80301},
      {"origin": "BRT05: SunU-Monash",        "destination": "BRT07: USJ 7",              "ridership": 205040},
      {"origin": "BRT06: South Quay-USJ 1",   "destination": "BRT01: Sunway-Setia Jaya", "ridership": 10805},
      {"origin": "BRT06: South Quay-USJ 1",   "destination": "BRT02: Mentari",            "ridership": 13768},
      {"origin": "BRT06: South Quay-USJ 1",   "destination": "BRT03: Sunway Lagoon",      "ridership": 38899},
      {"origin": "BRT06: South Quay-USJ 1",   "destination": "BRT04: SunMed",             "ridership": 66445},
      {"origin": "BRT06: South Quay-USJ 1",   "destination": "BRT05: SunU-Monash",        "ridership": 90946},
      {"origin": "BRT06: South Quay-USJ 1",   "destination": "BRT06: South Quay-USJ 1",   "ridership": 4970},
      {"origin": "BRT06: South Quay-USJ 1",   "destination": "BRT07: USJ 7",              "ridership": 130352},
      {"origin": "BRT07: USJ 7",              "destination": "BRT01: Sunway-Setia Jaya", "ridership": 50945},
      {"origin": "BRT07: USJ 7",              "destination": "BRT02: Mentari",            "ridership": 50111},
      {"origin": "BRT07: USJ 7",              "destination": "BRT03: Sunway Lagoon",      "ridership": 179394},
      {"origin": "BRT07: USJ 7",              "destination": "BRT04: SunMed",             "ridership": 174043},
      {"origin": "BRT07: USJ 7",              "destination": "BRT05: SunU-Monash",        "ridership": 188581},
      {"origin": "BRT07: USJ 7",              "destination": "BRT06: South Quay-USJ 1",   "ridership": 129539},
      {"origin": "BRT07: USJ 7",              "destination": "BRT07: USJ 7",              "ridership": 0}
    ]
  },
  "layer": [
    {
      "params": [
        {
          "name": "originSelect",
          "select": {
            "type": "point",
            "fields": ["origin"],
            "on": "click",
            "toggle": false,
            "clear": "dblclick"
          }
        }
      ],
      "mark": {
        "type": "rect",
        "stroke": "#fff",
        "strokeWidth": 1.5,
        "cornerRadius": 2
      },
      "encoding": {
        "x": {
          "field": "origin",
          "type": "nominal",
          "sort": [
            "BRT01: Sunway-Setia Jaya",
            "BRT02: Mentari",
            "BRT03: Sunway Lagoon",
            "BRT04: SunMed",
            "BRT05: SunU-Monash",
            "BRT06: South Quay-USJ 1",
            "BRT07: USJ 7"
          ],
          "title": "Origin Station",
          "axis": {
            "labelAngle": -40,
            "labelFontSize": 11,
            "titleFontSize": 13,
            "titleFontWeight": "bold",
            "labelLimit": 140,
            "grid": false,
            "ticks": false,
            "labelPadding": 6
          }
        },
        "y": {
          "field": "destination",
          "type": "nominal",
          "sort": [
            "BRT01: Sunway-Setia Jaya",
            "BRT02: Mentari",
            "BRT03: Sunway Lagoon",
            "BRT04: SunMed",
            "BRT05: SunU-Monash",
            "BRT06: South Quay-USJ 1",
            "BRT07: USJ 7"
          ],
          "title": "Destination Station",
          "axis": {
            "labelFontSize": 11,
            "titleFontSize": 13,
            "titleFontWeight": "bold",
            "labelLimit": 160,
            "grid": false,
            "ticks": false,
            "labelPadding": 6
          }
        },
        "color": {
          "field": "ridership",
          "type": "quantitative",
          "scale": {
            "type": "sqrt",
            "scheme": "reds",
            "domainMin": 0
          },
          "legend": {
            "title": "Total Ridership",
            "titleFontSize": 11,
            "labelFontSize": 10,
            "gradientLength": 180,
            "orient": "right"
          }
        },
        "opacity": {
          "condition": {
            "param": "originSelect",
            "empty": true,
            "value": 1
          },
          "value": 0.15
        },
        "tooltip": [
          {"field": "origin",      "type": "nominal",      "title": "Origin"},
          {"field": "destination", "type": "nominal",      "title": "Destination"},
          {"field": "ridership",   "type": "quantitative", "title": "Total Ridership", "format": ","}
        ]
      }
    },
    {
      "mark": {
        "type": "text",
        "fontSize": 9,
        "baseline": "middle",
        "align": "center"
      },
      "encoding": {
        "x": {
          "field": "origin",
          "type": "nominal",
          "sort": [
            "BRT01: Sunway-Setia Jaya",
            "BRT02: Mentari",
            "BRT03: Sunway Lagoon",
            "BRT04: SunMed",
            "BRT05: SunU-Monash",
            "BRT06: South Quay-USJ 1",
            "BRT07: USJ 7"
          ]
        },
        "y": {
          "field": "destination",
          "type": "nominal",
          "sort": [
            "BRT01: Sunway-Setia Jaya",
            "BRT02: Mentari",
            "BRT03: Sunway Lagoon",
            "BRT04: SunMed",
            "BRT05: SunU-Monash",
            "BRT06: South Quay-USJ 1",
            "BRT07: USJ 7"
          ]
        },
        "text": {
          "field": "ridership",
          "type": "quantitative",
          "format": "~s"
        },
        "color": {
          "condition": {
            "test": "datum.ridership > 120000",
            "value": "#ffffff"
          },
          "value": "#333333"
        },
        "opacity": {
          "condition": {
            "param": "originSelect",
            "empty": true,
            "value": 0.85
          },
          "value": 0.08
        }
      }
    }
  ],
  "config": {
    "view": { "stroke": "transparent" },
    "axis": { "domainColor": "#ccc" },
    "font": "system-ui, -apple-system, sans-serif"
  }
}
