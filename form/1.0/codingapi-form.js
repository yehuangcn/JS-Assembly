/**
 *  form
 * Created by houcunlu on 2017/11/29.
 */
var reloadNamedNodeMap = function(attrs){
    var array = new Array();
    for(var i in attrs) {
        var attr = attrs[i];
        var attrName = attr.name;
        var attrValue = attr.value;
        array.push({name:attrName,value:attrValue});
    }
    return array;
}


function init(){
    var forms =$("div[api-type=form]");
    $.each(forms,function() {
        var url ="";
        var div = $(this);
        var attrs = reloadNamedNodeMap(div[0].attributes);
        var form = $('<form ></form>');
        for(var i = 0;i < attrs.length; i++ ){
            var obj = attrs[i];
            attrName = obj.name;
            attrValue = obj.value;
            if(attrName!=null&&attrName.startWith("api-")){
                var newAttrName = attrName.substring(4,attrName.length);
                form.attr(newAttrName , attrValue);
                if(attrName == "api-data-url"){
                    url = attrValue;
                }
            }
        }

        $.ajaxSettings.async = false;
        $.getJSON(url, function (data){
            form.attr("id" , data.formId);
            form.attr("action" , data.formUrl);
            var arrayData =  data.formData;

            for(var i = 0; i< arrayData.length;i++){
                var obj =  arrayData[i];
                var html = '<div class="form-group has-success">'+
                    '    <label>'+obj.title+':</label>'+
                    '    <br>'+
                    '    <input  class="form-control"  placeholder="'+obj.errorPrompt+'" name="'+obj.name+'" regular="'+obj.regular+'"  /> '+
                    '</div> ';
                form.append(html);
            }
        });
        div.append(form);
    });
}

init();