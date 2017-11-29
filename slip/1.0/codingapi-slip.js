/**
 * 侧滑
 * Created by houcunlu on 2017/11/28.
 */

var html = '<div class="side-right transtion"  id="[id]"  >'+
    '<div class="box box-info">'+
    '<div class="box-header">[title]</div>'+
    '<div class="box-body">'+

    '</div>'+
    '<div class="box-footer">'+
    '<button type="button" class="btn btn-danger pull-left" data-toggle="slider" data-target="#[id]" >关闭</button>'+
    '<button type="button" class="btn btn-primary" id="[button-id]" >保存</button>'+
    '</div>'+
    '</div>'+
    '</div>';


function init (){
    var slip =$("div[api-type=slip]");
    $.each(slip,function() {
        var div = $(this);
        var attrs = reloadNamedNodeMap(div[0].attributes);

        var newHtml = html;
        for(var i = 0; i<attrs.length;i++){
            var attr = attrs[i];
            var attrName = attr.name;
            var attrValue = attr.value;
            if(attrName!=null&&attrName.startWith("api-")){
                var newAttrName = attrName.substring(4,attrName.length);
                var str = "["+newAttrName+"]";
                newHtml =  newHtml.replace(str,attrValue);
            }
        }

        var bodyHtml =  div.html();
        div.empty();
        div.append(newHtml);
        var body =   div.find("div[class=box-body]");
        body.append(bodyHtml);

    });

    $(document).on('click', '*[data-toggle="slider"]', function() {
        var target = $(this).data('target');
        $(target).toggleClass('slide-open');
    })
}





init();