# jqueryi18nproperties-plugin-demo
jquery 国际化插件配置及使用demo

### 使用说明
1. 在页面中引入js文件
```html
<!-- jquery -->
<script src="jquery/jquery.min.js" charset="utf-8"></script>
<!-- i18n 插件 -->
<script src="jquery.i18n.properties/jquery.i18n.properties.min.js" charset="utf-8"></script>
<!-- i18n 配置文件 -->
<script src="i18n.config.js" charset="utf-8"></script>
```

2. 在`i18n`目录下创建`lang.properties`、`lang_zh.properties`、`lang_en.properties`文件，用下面的格式写中英文翻译的内容
```properties
#lang_zh.properties
hello=你好
world=世界
```
```properties
#lang_en.properties
hello=hello
world=world
```

3. 在需要翻译的标签中，加入`translate`属性，`translate`的值为`properties`文件中的 key
```html
<h1>
  <span translate="hello"></span>
  <span translate="world"></span>
</h1>
```

## Join it !
