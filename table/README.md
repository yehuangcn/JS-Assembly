# table 组件

> 自定义table组件 使用前确保已引用 bootstrap/bootstrap-table 及 jQuery。 
> codingapi-table.js 构建table所需js。 
> table.json 为初始化所需数据，后续详解。 
<!-- more -->


## 使用说明


基本语法：

```html

<div api-type="table"  api-url="../json/table.json" api-data-id="table1" > </div>

```


1.属性说明：


属性 | 必填项 | 说明
--------- | ------------- | -------------
api-type  | 是 | 初始化table必要属性，值为 “table”
api-url   | 是 | 地址返回一个json格式的数据 【详情见table.json说明】
api-data-id | 是 | 该属性设置了 table 的 id
api-* | 否 | * 是 bootstrap-table 的属性，例如：设置请求类型  api-data-method="post"

***

2.table.json 说明：

```json

{
  "dataUrl": "/agent/findAllAgentPage" ,
  "filed": [
    {
      "name": "标识",
      "value": "id",
      "formatter":"",
      "events": ""
    },
    {
      "name": "操作",
      "value": "",
      "formatter":"operateFormatter",
      "events": "operateEvents"
    }
  ]
}

```

key | value 
--------- | ------------- 
dataUrl  |  table填充数据地址，值：1.http:test:80/web/finduser , 2./web/finduser 。当为第二种情况时需配置一个全局前缀路径 “URL”
filed    | table 的展示列
          | table 的展示列  | table 的展示列


