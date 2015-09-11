var dias = {"1": "Lunes",
  "2": "Martes",
  "3": "Miercoles"
};

var meses = {"enero": "Enero",
  "febrero": "Febrero",
  "marzo": "Marzo"
};

function change_right_combo_values (type_values) {
	var $el = $("#right_combo");
	$el.empty();
	$.each(type_values, function(value,key) {
	  $el.append($("<option></option>")
	     .attr("value", value).text(key));
	});
}

$('#input_type').on('change', function() {
  if($(this).val() == 1 ){
  	change_right_combo_values(dias);
  } else if($(this).val() == 2 ){
	change_right_combo_values(meses);
  }
});