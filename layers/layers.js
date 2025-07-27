var wms_layers = [];

var format_AngelesCity_0 = new ol.format.GeoJSON();
var features_AngelesCity_0 = format_AngelesCity_0.readFeatures(json_AngelesCity_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AngelesCity_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AngelesCity_0.addFeatures(features_AngelesCity_0);
var lyr_AngelesCity_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AngelesCity_0, 
                style: style_AngelesCity_0,
                popuplayertitle: 'Angeles City',
                interactive: true,
    title: 'Dengue Incidence Rate<br />\
    <img src="styles/legend/AngelesCity_0_0.png" /> < 1 per 10,000 population<br />\
    <img src="styles/legend/AngelesCity_0_1.png" /> 1 to 5 per 10,000 population<br />\
    <img src="styles/legend/AngelesCity_0_2.png" /> 5 to 9 per 10,000 population<br />\
    <img src="styles/legend/AngelesCity_0_3.png" /> 10 to 14 per 10,000 population<br />\
    <img src="styles/legend/AngelesCity_0_4.png" /> 15 to 19 per 10,000 population<br />\
    <img src="styles/legend/AngelesCity_0_5.png" /> >= 20 per 10,000 population<br />' });

lyr_AngelesCity_0.setVisible(true);
var layersList = [lyr_AngelesCity_0];
lyr_AngelesCity_0.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'DengueIR': 'DengueIR', });
lyr_AngelesCity_0.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'DengueIR': 'Range', });
lyr_AngelesCity_0.set('fieldLabels', {'GID_3': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'NAME_3': 'inline label - always visible', 'VARNAME_3': 'hidden field', 'NL_NAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'CC_3': 'hidden field', 'HASC_3': 'hidden field', 'DengueIR': 'inline label - visible with data', });
lyr_AngelesCity_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
