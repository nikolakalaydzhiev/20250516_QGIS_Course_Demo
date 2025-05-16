ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7801").setExtent([533558.931957, 4847106.039811, 546377.275549, 4856366.808563]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Граница на землище',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Граница на землище'
            });
var format_2000_3 = new ol.format.GeoJSON();
var features_2000_3 = format_2000_3.readFeatures(json_2000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource_2000_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2000_3.addFeatures(features_2000_3);
var lyr_2000_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2000_3, 
                style: style_2000_3,
                popuplayertitle: 'Натура 2000 (Местообитания)',
                interactive: true,
                title: '<img src="styles/legend/2000_3.png" /> Натура 2000 (Местообитания)'
            });
var format_2000_4 = new ol.format.GeoJSON();
var features_2000_4 = format_2000_4.readFeatures(json_2000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7801'});
var jsonSource_2000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2000_4.addFeatures(features_2000_4);
var lyr_2000_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2000_4, 
                style: style_2000_4,
                popuplayertitle: 'Натура 2000 (Птици)',
                interactive: true,
                title: '<img src="styles/legend/2000_4.png" /> Натура 2000 (Птици)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr__2.setVisible(true);lyr_2000_3.setVisible(true);lyr_2000_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr__2,lyr_2000_3,lyr_2000_4];
lyr__2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'EKATTE': 'EKATTE', 'Suffix_bg': 'Тип', 'Name_BG': 'Име (бг.)', 'Name_EN': 'Име (лат.)', 'Mun_code': 'Код на Община', 'Mun_name': 'Община', 'Dist_code': 'Код на област', 'NutsIII_Name': 'Област', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_2000_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SITECODE': 'Код на зона', 'NAME_BG': 'Име', 'NAME_LAT': 'Име на латиница', 'Type': 'Тип', 'Zapoved_No': '№ на заповед', 'DV': 'Брой в Държавен вестник', 'Shape_Area': 'Площ (м2)', });
lyr_2000_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SITECODE': 'Код на зона', 'NAME_BG': 'Име', 'NAME_LAT': 'Име на латиница', 'Type': 'Тип', 'Zapoved_No': '№ на заповед', 'DV': 'Брой в Държавен вестник', 'Shape_Area': 'Площ (м2)', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'EKATTE': 'TextEdit', 'Suffix_bg': 'TextEdit', 'Name_BG': 'TextEdit', 'Name_EN': 'TextEdit', 'Mun_code': 'TextEdit', 'Mun_name': 'TextEdit', 'Dist_code': 'TextEdit', 'NutsIII_Name': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_2000_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'SITECODE': 'TextEdit', 'NAME_BG': 'TextEdit', 'NAME_LAT': 'TextEdit', 'Type': 'TextEdit', 'Zapoved_No': 'TextEdit', 'DV': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_2000_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'SITECODE': 'TextEdit', 'NAME_BG': 'TextEdit', 'NAME_LAT': 'TextEdit', 'Type': 'TextEdit', 'Zapoved_No': 'TextEdit', 'DV': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__2.set('fieldLabels', {'fid': 'header label - visible with data', 'OBJECTID': 'header label - visible with data', 'EKATTE': 'header label - visible with data', 'Suffix_bg': 'header label - visible with data', 'Name_BG': 'header label - visible with data', 'Name_EN': 'header label - visible with data', 'Mun_code': 'header label - visible with data', 'Mun_name': 'header label - visible with data', 'Dist_code': 'header label - visible with data', 'NutsIII_Name': 'header label - visible with data', 'Shape_Length': 'header label - visible with data', 'Shape_Area': 'header label - visible with data', });
lyr_2000_3.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'SITECODE': 'header label - visible with data', 'NAME_BG': 'header label - visible with data', 'NAME_LAT': 'header label - visible with data', 'Type': 'header label - visible with data', 'Zapoved_No': 'header label - visible with data', 'DV': 'header label - visible with data', 'Shape_Area': 'header label - visible with data', });
lyr_2000_4.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'SITECODE': 'header label - visible with data', 'NAME_BG': 'header label - visible with data', 'NAME_LAT': 'header label - visible with data', 'Type': 'header label - visible with data', 'Zapoved_No': 'header label - visible with data', 'DV': 'header label - visible with data', 'Shape_Area': 'header label - visible with data', });
lyr_2000_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});