(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{289:function(t,n,i){"use strict";i.r(n);var a=i(13),s=Object(a.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[this._v("#")]),this._v(" 配置")]),this._v(" "),t("h2",{attrs:{id:"向后台配置添加信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向后台配置添加信息"}},[this._v("#")]),this._v(" 向后台配置添加信息")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("add_action('admin.config.config_key',function(&$config_key){\n    $config_key[] = 'mall_search_key';\n});\n\n\nadd_action('admin.config.tab',function(){\n    if(is_admin()){ \n        echo '<li><a href=\"#tabs-city\" name=\"get_city\" >配送区域</a></li>'; \n    }\n});\nadd_action('admin.config.body',function(&$vue){\n    if(is_admin()){ \n        include __DIR__.'/tab/wuliu.php';    \n        include __DIR__.'/tab/city.php';   //<div id=\"tabs-city\" >    \n    }    \n}); \n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);