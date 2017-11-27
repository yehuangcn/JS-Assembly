/**
 * Created by houcunlu on 2017/11/25.
 */

URL = 'http://127.0.0.1:8080/xx/';

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

    });
}


/**
 *  初始化table 头部 【 div中需添加 api-data-table-id 属性 】
 *  tableId
 *  head ： 为json格式 ["id","名字","密码"] 字符串
 * @param tableId
 */
var getTableStyle = function( tableId , head ){
    var thead = $('<thead></thead>');
    var tr = $('<tr></tr>');

    var obj = JSON.parse(head);

    for(var i = 0; i< obj.length ; i++){
        tr.append('<th>'+obj[i]+'</th>');
    }
    thead.append(tr);
    $("table[data-table-id="+tableId+"]").append(thead);

}

init();