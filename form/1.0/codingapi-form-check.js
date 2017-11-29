/**
 * 表单校验
 * Created by houcunlu on 2017/11/29.
 */

function apiFormCheck( formId ){
  var form =  $("#"+formId);
  var url = form.attr("data-url");
  $.ajaxSettings.async = false;
  $.getJSON(url, function (data){
    var arrayData =  data.formData;
    for(var i =0; i<arrayData.length;i++){
      var obj =  arrayData[i];
      var value =   form.find("input[name="+obj.name+"]").val();
      if(obj.regular!=null && obj.regular != ""){
        var patt =new RegExp(obj.regular);
        if(!patt.test(value)){
          hint(obj.errorPrompt);
          return;
        }
      }
    }
  });
}


/**
 *  获取 form 内的input值
 */
function getFormToArray(formId){
  var params = new Object();
  var form =  $("#"+formId);
  var inputs =  form.find("input[name]");
  $.each(inputs,function() {
    var input = $(this);
    params[input.attr("name")] = input.val();
  });
  return params;
}