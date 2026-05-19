{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "National Baseline: Mean Household Income by State",
    "subtitle": "Geographic distribution of average monthly household income across Malaysia (2022)",
    "fontSize": 16,
    "subtitleFontSize": 12,
    "anchor": "start"
  },
  "width": 700,
  "height": 350,
  "projection": {
    "type": "equirectangular"
  },
  "layer": [
    {
      "data": {
        "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/2_symbol_map/js/ne_110m_admin_0_countries.topojson",
        "format": {
          "type": "topojson",
          "feature": "ne_110m_admin_0_countries"
        }
      },
      "transform": [
        {
          "filter": "datum.properties.NAME == 'Malaysia'"
        }
      ],
      "mark": {
        "type": "geoshape",
        "fill": "#eaeaea",
        "stroke": "#ffffff",
        "strokeWidth": 1.5
      }
    },
    {
      "data": {
        "url": "https://raw.githubusercontent.com/xloh0003-a11y/2179/main/hh_income_state.csv"
      },
      "transform": [
        {
          "filter": "datum.date == '2022-01-01'"
        },
        {
          "calculate": "datum.state == 'Johor' ? 1.48 : datum.state == 'Kedah' ? 6.12 : datum.state == 'Kelantan' ? 6.12 : datum.state == 'Melaka' ? 2.18 : datum.state == 'Negeri Sembilan' ? 2.72 : datum.state == 'Pahang' ? 3.81 : datum.state == 'Perak' ? 4.59 : datum.state == 'Perlis' ? 6.44 : datum.state == 'Pulau Pinang' ? 5.41 : datum.state == 'Sabah' ? 5.97 : datum.state == 'Sarawak' ? 2.55 : datum.state == 'Selangor' ? 3.07 : datum.state == 'Terengganu' ? 5.31 : datum.state == 'W.P. Kuala Lumpur' ? 3.14 : datum.state == 'W.P. Labuan' ? 5.28 : 2.93",
          "as": "latitude"
        },
        {
          "calculate": "datum.state == 'Johor' ? 103.85 : datum.state == 'Kedah' ? 100.37 : datum.state == 'Kelantan' ? 102.24 : datum.state == 'Melaka' ? 102.25 : datum.state == 'Negeri Sembilan' ? 102.25 : datum.state == 'Pahang' ? 102.32 : datum.state == 'Perak' ? 101.09 : datum.state == 'Perlis' ? 100.20 : datum.state == 'Pulau Pinang' ? 100.33 : datum.state == 'Sabah' ? 116.07 : datum.state == 'Sarawak' ? 112.50 : datum.state == 'Selangor' ? 101.51 : datum.state == 'Terengganu' ? 103.10 : datum.state == 'W.P. Kuala Lumpur' ? 101.69 : datum.state == 'W.P. Labuan' ? 115.24 : 101.69",
          "as": "longitude"
        }
      ],
      "mark": {
        "type": "circle",
        "opacity": 0.85,
        "stroke": "#2c3e50",
        "strokeWidth": 1.5
      },
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "size": {
          "field": "income_mean",
          "type": "quantitative",
          "title": "Mean Income (RM)",
          "scale": {
            "domain": [4000, 14000],
            "range": [80, 800]
          }
        },
        "color": {
          "field": "income_mean",
          "type": "quantitative",
          "title": "Monthly Income (RM)",
          "scale": {
            "scheme": "reds"
          }
        },
        "tooltip": [
          {"field": "state", "type": "nominal", "title": "State/Territory"},
          {"field": "income_mean", "type": "quantitative", "title": "Mean Monthly Income (RM)", "format": ","},
          {"field": "income_median", "type": "quantitative", "title": "Median Monthly Income (RM)", "format": ","}
        ]
      }
    }
  ]
}