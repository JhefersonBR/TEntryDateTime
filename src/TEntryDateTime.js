function tentrydatetime_start(id, mask, language, size, options) {
    $(id).wrap('<div class="tdate-group tdatetimepicker input-append date">');
    $(id).after(
      '<span class="add-on btn btn-default tdate-group-addon"><i class="far fa-clock icon-th"></i></span>'
    );
  
    atributes = {
      lang: language,
      weekStart: 0,
      format: mask,
      switchOnClick: true,
      clearButton: true,
    };
  
    switch (language) {
      case "es":
        atributes.cancelText = "Cancelar";
        atributes.okText = "Listo";
        atributes.clearText = "Limpiar";
        break;
      case "pt":
        atributes.cancelText = "Cancelar";
        atributes.okText = "Ok";
        atributes.clearText = "Limpar";
        break;
    }
  
    options = Object.assign(atributes, JSON.parse(options));
    if (options.pickDate == false) {
      options.date = false;
    }
  
      if(options.time){
          $(id)
          .datetimepicker(options);
      }else{
          $(id)
          .datepicker(options);
      }
    
      
      $(id).attr('autocomplete', 'off');
  
      if (size !== "undefined") {
      $(id).closest(".tdate-group").width(size);
    }
  }
  