// mouseover
$('#icon_hospital').mouseover(function() { $(this).css('opacity','0.6'); });
$('#icon_hospital').mouseout(function() { $(this).css('opacity','1'); });

$('#icon_patient').mouseover(function() { $(this).css('opacity','0.6'); });
$('#icon_patient').mouseout(function() { $(this).css('opacity','1'); });

// click
$('#icon_hospital').click(function() {
	$('#icon_hospital').css('background-color','#ed526f');
	$('#icon_patient').css('background-color', 'rgba(255,255,255,0.2)');

	map.removeLayer(patientLayer);
	hospitalLayer.addTo(map);
});

$('#icon_patient').click(function() {
	$('#icon_patient').css('background-color','#ed526f');
	$('#icon_hospital').css('background-color', 'rgba(255,255,255,0.2)');

	map.removeLayer(hospitalLayer);
	patientLayer.addTo(map);
});
