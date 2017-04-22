/**
 * i18n打语言包配置文件
 */
(function(window){
	var langPkg = {
		now_lang : 0, // 0:zh,1:en
		loadProperties : function(new_lang){
			window.localStorage.setItem("now_lang",new_lang);
			var self = this;
			var tmp_lang = '';
			if(new_lang == 0){
				tmp_lang = 'zh';
				$('body').removeClass('en').addClass('zh');
			}else{
				tmp_lang = 'en';
				$('body').removeClass('zh').addClass('en');
			}
			$.i18n.properties({//加载资浏览器语言对应的资源文件
				name: 'lang', //资源文件名称
				path:'./i18n/', //资源文件路径
				language: tmp_lang,
				cache: false,
				mode:'map', //用Map的方式使用资源文件中的值
				callback: function() {//加载成功后设置显示内容
					for(var i in $.i18n.map){
						$('[translate="'+i+'"]').text($.i18n.map[i]);
					}
				}
			});
			self.now_lang = new_lang;
		}
	}
	window.langPkg = langPkg;
})(window);
