Ext.data.JsonP.BUI_Data_Proxy({"tagname":"class","name":"BUI.Data.Proxy","extends":"BUI.Base","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"abstract":true},"private":null,"id":"class-BUI.Data.Proxy","members":{"cfg":[{"name":"handler","tagname":"cfg","owner":"BUI.Observable","meta":{},"id":"cfg-handler"},{"name":"listeners","tagname":"cfg","owner":"BUI.Observable","meta":{},"id":"cfg-listeners"}],"property":[{"name":"_eventMap","tagname":"property","owner":"BUI.Observable","meta":{"private":true},"id":"property-_eventMap"},{"name":"_events","tagname":"property","owner":"BUI.Observable","meta":{"private":true},"id":"property-_events"}],"method":[{"name":"_read","tagname":"method","owner":"BUI.Data.Proxy","meta":{"protected":true,"private":true},"id":"method-_read"},{"name":"addAttr","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-addAttr"},{"name":"addAttrs","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-addAttrs"},{"name":"addEvents","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-addEvents"},{"name":"addTarget","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-addTarget"},{"name":"clearAttrVals","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-clearAttrVals"},{"name":"clearListeners","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-clearListeners"},{"name":"fire","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-fire"},{"name":"get","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-get"},{"name":"getAttrVals","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-getAttrVals"},{"name":"getAttrs","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-getAttrs"},{"name":"hasAttr","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-hasAttr"},{"name":"off","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-off"},{"name":"on","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-on"},{"name":"publish","tagname":"method","owner":"BUI.Observable","meta":{},"id":"method-publish"},{"name":"read","tagname":"method","owner":"BUI.Data.Proxy","meta":{},"id":"method-read"},{"name":"removeAttr","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-removeAttr"},{"name":"set","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-set"},{"name":"setInternal","tagname":"method","owner":"BUI.Base","meta":{},"id":"method-setInternal"},{"name":"update","tagname":"method","owner":"BUI.Data.Proxy","meta":{"protected":true},"id":"method-update"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":6,"files":[{"filename":"proxy.js","href":"proxy.html#BUI-Data-Proxy"}],"html_meta":{"abstract":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["BUI.Observable","BUI.Base"],"subclasses":["BUI.Data.Proxy.Ajax","BUI.Data.Proxy.Memery"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='docClass'>BUI.Observable</a><div class='subclass '><a href='#!/api/BUI.Base' rel='BUI.Base' class='docClass'>BUI.Base</a><div class='subclass '><strong>BUI.Data.Proxy</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/BUI.Data.Proxy.Ajax' rel='BUI.Data.Proxy.Ajax' class='docClass'>BUI.Data.Proxy.Ajax</a></div><div class='dependency'><a href='#!/api/BUI.Data.Proxy.Memery' rel='BUI.Data.Proxy.Memery' class='docClass'>BUI.Data.Proxy.Memery</a></div><h4>Files</h4><div class='dependency'><a href='source/proxy.html#BUI-Data-Proxy' target='_blank'>proxy.js</a></div></pre><div class='doc-contents'><p>数据代理对象，加载数据,\n一般不直接使用，在store里面决定使用什么类型的数据代理对象</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-handler' class='name not-expandable'>handler</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>点击事件的处理函数，快速配置点击事件而不需要写listeners属性</p>\n</div><div class='long'><p>点击事件的处理函数，快速配置点击事件而不需要写listeners属性</p>\n</div></div></div><div id='cfg-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-cfg-listeners' class='name not-expandable'>listeners</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>初始化事件</p>\n</div><div class='long'><p>初始化事件</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_eventMap' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-property-_eventMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_eventMap' class='name expandable'>_eventMap</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>绑定的事件 ...</div><div class='long'><p>绑定的事件</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-_events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-property-_events' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-property-_events' class='name expandable'>_events</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>支持的事件名列表 ...</div><div class='long'><p>支持的事件名列表</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_read' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Proxy'>BUI.Data.Proxy</span><br/><a href='source/proxy.html#BUI-Data-Proxy-method-_read' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Proxy-method-_read' class='name expandable'>_read</a>( <span class='pre'>params, callback</span> )<strong class='private signature' >private</strong><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-addAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-addAttr' class='name expandable'>addAttr</a>( <span class='pre'>name, attrConfig, overrides</span> )</div><div class='description'><div class='short'>添加属性定义 ...</div><div class='long'><p>添加属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>attrConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性定义</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否覆盖字段</p>\n</div></li></ul></div></div></div><div id='method-addAttrs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-addAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-addAttrs' class='name expandable'>addAttrs</a>( <span class='pre'>attrConfigs, initialValues, overrides</span> )</div><div class='description'><div class='short'>添加属性定义 ...</div><div class='long'><p>添加属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrConfigs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>An object with attribute name/configuration pairs.</p>\n</div></li><li><span class='pre'>initialValues</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>user defined initial values</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否覆盖字段</p>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>events</span> )</div><div class='description'><div class='short'>添加支持的事件 ...</div><div class='long'><p>添加支持的事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]<div class='sub-desc'><p>事件</p>\n</div></li></ul></div></div></div><div id='method-addTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-addTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-addTarget' class='name expandable'>addTarget</a>( <span class='pre'>target</span> )</div><div class='description'><div class='short'>添加冒泡的对象 ...</div><div class='long'><p>添加冒泡的对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>冒泡的事件源</p>\n</div></li></ul></div></div></div><div id='method-clearAttrVals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-clearAttrVals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-clearAttrVals' class='name expandable'>clearAttrVals</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>@清理所有属性值 ...</div><div class='long'><p>@清理所有属性值</p>\n</div></div></div><div id='method-clearListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-clearListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-clearListeners' class='name expandable'>clearListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>移除所有绑定的事件 ...</div><div class='long'><p>移除所有绑定的事件</p>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-fire' class='name expandable'>fire</a>( <span class='pre'>eventType, eventData</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</div><div class='description'><div class='short'>触发事件 ...</div><div class='long'><p>触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>eventData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>事件触发时传递的数据</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果其中一个事件处理器返回 false , 则返回 false, 否则返回最后一个事件处理器的返回值</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>获取属性值 ...</div><div class='long'><p>获取属性值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性值</p>\n</div></li></ul></div></div></div><div id='method-getAttrVals' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-getAttrVals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-getAttrVals' class='name expandable'>getAttrVals</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>获取属性名/属性值键值对 ...</div><div class='long'><p>获取属性名/属性值键值对</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性对象</p>\n</div></li></ul></div></div></div><div id='method-getAttrs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-getAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-getAttrs' class='name expandable'>getAttrs</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>获取默认的属性值 ...</div><div class='long'><p>获取默认的属性值</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>属性值的键值对</p>\n</div></li></ul></div></div></div><div id='method-hasAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-hasAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-hasAttr' class='name expandable'>hasAttr</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>是否包含此属性 ...</div><div class='long'><p>是否包含此属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>是否包含</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-off' class='name expandable'>off</a>( <span class='pre'>eventType, fn</span> )</div><div class='description'><div class='short'>移除绑定的事件 ...</div><div class='long'><p>移除绑定的事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventType, fn</span> )</div><div class='description'><div class='short'>添加绑定事件 ...</div><div class='long'><p>添加绑定事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>事件类型</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Observable' rel='BUI.Observable' class='defined-in docClass'>BUI.Observable</a><br/><a href='source/observable.html#BUI-Observable-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Observable-method-publish' class='name expandable'>publish</a>( <span class='pre'>eventType, cfg</span> )</div><div class='description'><div class='short'>配置事件是否允许冒泡 ...</div><div class='long'><p>配置事件是否允许冒泡</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>支持冒泡的事件</p>\n</div></li><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>bubbles</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>是否支持冒泡</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-read' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Proxy'>BUI.Data.Proxy</span><br/><a href='source/proxy.html#BUI-Data-Proxy-method-read' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Proxy-method-read' class='name expandable'>read</a>( <span class='pre'>params, callback, scope</span> )</div><div class='description'><div class='short'>读数据 ...</div><div class='long'><p>读数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>键值对形式的参数</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>回调函数，函数原型 function(data){}</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>回调函数的上下文</p>\n</div></li></ul></div></div></div><div id='method-removeAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-removeAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-removeAttr' class='name expandable'>removeAttr</a>( <span class='pre'>name</span> )</div><div class='description'><div class='short'>移除属性定义 ...</div><div class='long'><p>移除属性定义</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-set' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-set' class='name expandable'>set</a>( <span class='pre'>name, value, opts</span> )</div><div class='description'><div class='short'>设置属性值，会触发before+name+change,和 after+name+change事件 ...</div><div class='long'><p>设置属性值，会触发before+name+change,和 after+name+change事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>值</p>\n</div></li><li><span class='pre'>opts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>配置项</p>\n<ul><li><span class='pre'>silent</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>配置属性时，是否不触发事件</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-setInternal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Base' rel='BUI.Base' class='defined-in docClass'>BUI.Base</a><br/><a href='source/base.html#BUI-Base-method-setInternal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Base-method-setInternal' class='name expandable'>setInternal</a>( <span class='pre'>name, value, opts</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</div><div class='description'><div class='short'>设置属性，不触发事件 ...</div><div class='long'><p>设置属性，不触发事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>属性名</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>属性值</p>\n</div></li><li><span class='pre'>opts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>选项</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a>|undefined</span><div class='sub-desc'><p>如果值无效则返回false,否则返回undefined</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Data.Proxy'>BUI.Data.Proxy</span><br/><a href='source/proxy.html#BUI-Data-Proxy-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Data.Proxy-method-update' class='name expandable'>update</a>( <span class='pre'>params, callback, scope</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>更新数据 ...</div><div class='long'><p>更新数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});