/**
 * Created by houcunlu on 2017/11/25.
 */

var defaultAttrs = [
    {name:'api-data-method',value:"post"},
    {name:'api-data-toggle',value:"table"},
    {name:'api-data-height',value:"600"},
    {name:'api-data-side-pagination',value:"server"},
    {name:'api-data-pagination',value:"true"},
    {name:'api-data-page-list',value:"[5, 10, 20, 50, 100, 200]"},
    {name:'api-data-search',value:"true"},
    {name:'api-data-show-refresh',value:"true"},
    {name:'api-data-show-toggle',value:"true"},
    {name:'api-data-show-columns',value:"true"}
];


var constant = function (attrName,attrs) {
    for(var i in attrs) {
        var attr = attrs[i];
        var name = attr.name;
        if(attrName == name){
            return true;
        }
    }
    return false;
}

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

/**
 *  初始化table
 */
var init = function(){

    var tabs =$("div[api-type=table]");
    $.each(tabs,function(){
        var div = $(this);
        var attrs = reloadNamedNodeMap(div[0].attributes);
        var table = $('<table></table>');
        for(var i in defaultAttrs){
            var attr = defaultAttrs[i];
            var attrName = attr.name;

            if(!constant(attrName,attrs)){
                attrs.push(attr);
            }
        }

        for(var i in attrs){
            var attr = attrs[i];
            var attrName = attr.name;
            var attrValue = attr.value;

            if(attrName!=null&&attrName.startWith("api-data")){
                var newAttrName = attrName.substring(4,attr.length);
                table.attr(newAttrName,attrValue);
            }
        }
        $(div).append(table);
        getTableStyle($(div))
    });
}


/**
 *  初始化table 头部
 * @param tableId
 */
var getTableStyle = function( div ){
    var url =    $(div).attr("api-url");
    var id =  $(div).attr("api-data-id");
    var table = $("table[data-id="+id+"]");
    var tableUrl ="";

    $.ajaxSettings.async = false;
    $.getJSON(url, function (data){
        var thead = $('<thead></thead>');
        var tr = $('<tr></tr>');
        for(var i = 0; i< data.filed.length ; i++){
            var obj = data.filed[i];
            var field ="";
            if(obj.value !=""){
                field="data-field=\""+obj.value+"\"";
            }

            var formatter ="";
            if(obj.formatter !=""){
                formatter="data-formatter=\""+obj.formatter+"\"";
            }

            var events ="";
            if(obj.events !=""){
                events="data-events=\""+obj.events+"\"";
            }

            tr.append('<th  '+field+'  '+events+'   '+formatter+' >'+obj.name+'</th>');
        }
        thead.append(tr);
        tableUrl = data.dataUrl;
        $(table).append(thead);
    });

    setTimeout(function(){
        var token =   comment.getToken();
        var url = URL + tableUrl+"?token="+token;
        table.bootstrapTable("refresh", {url: url});
    },1);
}


init();