// Force script runtime execution to wait until DOM element layouts are drawn
window.onload = function() {
    const GH_ROOT = "https://raw.githubusercontent.com/xloh0003-a11y/2179/main";

    // Standard embed options for structural charts (Bars, Lines, Areas)
    const standardEmbedOptions = {
        "actions": false,
        "width": "container" // Forces standard charts to scale down to container width
    };

    // SPECIAL FIX FOR MAPS: Uses "fit" autosizing to prevent cropping geographic boundaries
    const mapEmbedOptions = {
        "actions": false,
        "width": "container",
        "height": "container",
        "autosize": {
            "type": "fit",
            "contains": "padding"
        }
    };

    // Macro Environment Visual Layer
    vegaEmbed('#chart7', GH_ROOT + '/national_income_map.vg.js', {"actions": false}).catch(console.error);
    vegaEmbed('#chart3', GH_ROOT + '/income_mean_bar_chart.vg.js', {"actions": false}).catch(console.error);
    vegaEmbed('#chart6', GH_ROOT + '/household_demands_line_chart.vg.js', {"actions": false}).catch(console.error);
    vegaEmbed('#chart2', GH_ROOT + '/car_register_area_chart.vg.js', {"actions": false}).catch(console.error);

    // Transit Network Infrastructure Performance Layer
    vegaEmbed('#chart1', GH_ROOT + '/ridership_growth_line_chart.vg.js', {"actions": false}).catch(console.error);
    vegaEmbed('#chart5', GH_ROOT + '/brt_volumn_by_day_bar_chart.vg.js', {"actions": false}).catch(console.error);
    vegaEmbed('#chart4', GH_ROOT + '/busiest_brt_bar_chart.vg.js', {"actions": false}).catch(console.error);
};