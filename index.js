jQuery(function($) {
	jQuery("#selectFileSample2").click(function() {
		var selectFileSample1 = document.getElementById("file").value;
		document.getElementById("selectFileSample3").value = selectFileSample1;
	});
});
getCSV();

    