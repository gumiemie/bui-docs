Ext.data.JsonP.BUI_Uploader_Button({"tagname":"class","name":"BUI.Uploader.Button","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Uploader.Button","members":{"cfg":[],"property":[{"name":"buttonCls","tagname":"property","owner":"BUI.Uploader.Button","meta":{},"id":"property-buttonCls"},{"name":"disabled","tagname":"property","owner":"BUI.Uploader.Button","meta":{},"id":"property-disabled"},{"name":"filter","tagname":"property","owner":"BUI.Uploader.Button","meta":{},"id":"property-filter"},{"name":"multiple","tagname":"property","owner":"BUI.Uploader.Button","meta":{},"id":"property-multiple"},{"name":"text","tagname":"property","owner":"BUI.Uploader.Button","meta":{},"id":"property-text"},{"name":"textCls","tagname":"property","owner":"BUI.Uploader.Button","meta":{},"id":"property-textCls"}],"method":[{"name":"getExtFileData","tagname":"method","owner":"BUI.Uploader.Button","meta":{},"id":"method-getExtFileData"},{"name":"setDisabled","tagname":"method","owner":"BUI.Uploader.Button","meta":{"protected":true,"template":true},"id":"method-setDisabled"},{"name":"setFilter","tagname":"method","owner":"BUI.Uploader.Button","meta":{"protected":true,"template":true},"id":"method-setFilter"},{"name":"setMultiple","tagname":"method","owner":"BUI.Uploader.Button","meta":{"template":true,"protected":true},"id":"method-setMultiple"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":76,"files":[{"filename":"base.js","href":"base25.html#BUI-Uploader-Button"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["BUI.Uploader.Button.HtmlButton","BUI.Uploader.Button.SwfButton"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/BUI.Uploader.Button.HtmlButton' rel='BUI.Uploader.Button.HtmlButton' class='docClass'>BUI.Uploader.Button.HtmlButton</a></div><div class='dependency'><a href='#!/api/BUI.Uploader.Button.SwfButton' rel='BUI.Uploader.Button.SwfButton' class='docClass'>BUI.Uploader.Button.SwfButton</a></div><h4>Files</h4><div class='dependency'><a href='source/base25.html#BUI-Uploader-Button' target='_blank'>base.js</a></div></pre><div class='doc-contents'><p>上传组件按钮的基类</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-buttonCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-property-buttonCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-property-buttonCls' class='name not-expandable'>buttonCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>按钮的样式</p>\n</div><div class='long'><p>按钮的样式</p>\n</div></div></div><div id='property-disabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-property-disabled' class='name expandable'>disabled</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>是否可用,false为可用 @default false ...</div><div class='long'><p>是否可用,false为可用 @default false</p>\n<p>Defaults to: <code>{value: false}</code></p></div></div></div><div id='property-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-property-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-property-filter' class='name expandable'>filter</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>文件过滤 @default [] ...</div><div class='long'><p>文件过滤 @default []</p>\n<p>Defaults to: <code>{shared: false, value: []}</code></p></div></div></div><div id='property-multiple' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-property-multiple' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-property-multiple' class='name expandable'>multiple</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>是否开启多选支持 @default true ...</div><div class='long'><p>是否开启多选支持 @default true</p>\n<p>Defaults to: <code>{value: true}</code></p></div></div></div><div id='property-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-property-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-property-text' class='name expandable'>text</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>显示的文本 ...</div><div class='long'><p>显示的文本</p>\n<p>Defaults to: <code>{view: true, value: '上传文件'}</code></p></div></div></div><div id='property-textCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-property-textCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-property-textCls' class='name not-expandable'>textCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>文本的样式</p>\n</div><div class='long'><p>文本的样式</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getExtFileData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-method-getExtFileData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-method-getExtFileData' class='name expandable'>getExtFileData</a>( <span class='pre'>file</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>获取文件的扩展信息 ...</div><div class='long'><p>获取文件的扩展信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>file</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>文件对象</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>返回文件扩展信息</p>\n</div></li></ul></div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>v</span> )<strong class='protected signature' >protected</strong><strong class='template signature' >template</strong></div><div class='description'><div class='short'>设置禁用，其实直接替换成_uiSetDisabled更好 ...</div><div class='long'><p>设置禁用，其实直接替换成_uiSetDisabled更好</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-method-setFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-method-setFilter' class='name expandable'>setFilter</a>( <span class='pre'>v</span> )<strong class='protected signature' >protected</strong><strong class='template signature' >template</strong></div><div class='description'><div class='short'>设置过滤 ...</div><div class='long'><p>设置过滤</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMultiple' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Uploader.Button'>BUI.Uploader.Button</span><br/><a href='source/base25.html#BUI-Uploader-Button-method-setMultiple' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Uploader.Button-method-setMultiple' class='name expandable'>setMultiple</a>( <span class='pre'>v</span> )<strong class='protected signature' >protected</strong><strong class='template signature' >template</strong></div><div class='description'><div class='short'>设置是否多选，但是从函数含义上来看使用\n更合适\n模板函数，用于子类扩展，参考 模板模式 ...</div><div class='long'><p>设置是否多选，但是从函数含义上来看使用\n更合适\n模板函数，用于子类扩展，参考 模板模式</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});