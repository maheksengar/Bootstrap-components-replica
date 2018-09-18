$(document).ready(function() {
	if (window.matchMedia('(max-width: 992px)').matches){
		$("#nav-wrapper").hide();
		$("#nav-search").hide();
		$("#toggle-button").click(function() {
			$("#nav-container").removeClass("lg-container").addClass("sm-container");
			$("#nav-wrapper").removeClass("wrapper").addClass("sm-wrapper");
			$("#nav-search").removeClass("search").addClass("sm-search");

			$("#nav-wrapper").toggle();
			$("#nav-search").toggle();
		});
	}

	$("#search-button").click(() => {
		location.reload();
	})
	
});
