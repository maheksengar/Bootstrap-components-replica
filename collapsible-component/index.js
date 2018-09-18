$ (document).ready (function() {
	$("#collapsible-1").show();
	$("#collapsible-2").hide();
	$("#collapsible-3").hide();

	let collapse1 = 1; //1 for visible
	let collapse2 = 0;//0 for hidden
	let collapse3 = 0;//0 for hidden

	$("#clickable1").click( function() {
		if (collapse1) {
			$("#collapsible-1").slideToggle();
			collapse1 = 0;
		}
		else {
			$("#collapsible-1").slideToggle();
			collapse1 = 1;
			$("#collapsible-2").slideUp();
			collapse2 = 0;
			$("#collapsible-3").slideUp();
			collapse3 = 0;
		}
	});

	$("#clickable2").click( function() {
		if (collapse2) {
			$("#collapsible-2").slideToggle();
			collapse2 = 0;
		}
		else {
			$("#collapsible-2").slideToggle();
			collapse2 = 1;
			$("#collapsible-1").slideUp();
			collapse1 = 0;
			$("#collapsible-3").slideUp();
			collapse3 = 0;
		}
	});

	$("#clickable3").click( function() {
		if (collapse3) {
			$("#collapsible-3").slideToggle();
			collapse3 = 0;
		}
		else {
			$("#collapsible-3").slideToggle();
			collapse3 = 1;
			$("#collapsible-2").slideUp();
			collapse2 = 0;
			$("#collapsible-1").slideUp();
			collapse1 = 0;
		}
	});
});

