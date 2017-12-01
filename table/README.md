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


属性说明：


属性 | 必填项 | 说明
--------- | ------------- | -------------
api-type  | 是 | 初始化table必要属性，值为 “table”
api-url   | 是 | 地址返回一个json格式的数据 【详情见table.json说明】
api-data-id | 是 | 该属性设置了 table 的 id
api-data-id | 是 | 该属性设置了 table 的 id
