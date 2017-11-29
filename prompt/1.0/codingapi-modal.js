/**
 * Created by houcunlu on 2017/11/27.
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

var html= '<div class="modal-dialog modal-con" role="document" id="[id]">'+
                '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                        '<h4 class="modal-title">[title]</h4>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<div class="form-group has-success">'+
                        '<p class="text-danger" >[content]</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>&nbsp;'+
                        '<button type="button" class="btn btn-primary" id="[button-id]">确定</button>'+
                    '</div>'+
                '</div>'+
        '</div>';


function  init(){
    var modals =$("div[api-type=modal]");
    $.each(modals,function(){
        var div = $(this);
        var attrs = reloadNamedNodeMap(div[0].attributes);
        var newHtml = html;
        for(var i = 0; i<attrs.length;i++){
            var attr = attrs[i];
            var attrName = attr.name;
            var attrValue = attr.value;
            if(attrName!=null&&attrName.startWith("api-")){
                var newAttrName = attrName.substring(4,attr.length);
                var str = "["+newAttrName+"]";
                newHtml =  newHtml.replace(str,attrValue);
            }
        }
        div.append(newHtml);
    });

}










init();