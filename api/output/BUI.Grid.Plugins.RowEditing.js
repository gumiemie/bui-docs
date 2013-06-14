Ext.data.JsonP.BUI_Grid_Plugins_RowEditing({"tagname":"class","name":"BUI.Grid.Plugins.RowEditing","extends":"BUI.Grid.Plugins.Editing","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Grid.Plugins.RowEditing","members":{"cfg":[],"property":[{"name":"align","tagname":"property","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"property-align"},{"name":"curEditor","tagname":"property","owner":"BUI.Grid.Plugins.Editing","meta":{},"id":"property-curEditor"},{"name":"editors","tagname":"property","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"property-editors"},{"name":"hasValid","tagname":"property","owner":"BUI.Grid.Plugins.Editing","meta":{},"id":"property-hasValid"},{"name":"isInitEditors","tagname":"property","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"property-isInitEditors"},{"name":"record","tagname":"property","owner":"BUI.Grid.Plugins.Editing","meta":{},"id":"property-record"},{"name":"showError","tagname":"property","owner":"BUI.Grid.Plugins.Editing","meta":{},"id":"property-showError"}],"method":[{"name":"beforeShowEditor","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true,"template":true},"id":"method-beforeShowEditor"},{"name":"bindEidtor","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"method-bindEidtor"},{"name":"cancel","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{},"id":"method-cancel"},{"name":"clearErrors","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{},"id":"method-clearErrors"},{"name":"destructor","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"method-destructor"},{"name":"edit","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{},"id":"method-edit"},{"name":"focusEditor","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-focusEditor"},{"name":"getAlignNode","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-getAlignNode"},{"name":"getEditValue","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-getEditValue"},{"name":"getEditor","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-getEditor"},{"name":"getEditorCfgs","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-getEditorCfgs"},{"name":"getEditorConstructor","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{},"id":"method-getEditorConstructor"},{"name":"getFieldConfig","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-getFieldConfig"},{"name":"getFields","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-getFields"},{"name":"initEditing","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"method-initEditing"},{"name":"initEditors","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"method-initEditors"},{"name":"initEidtor","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{"private":true},"id":"method-initEidtor"},{"name":"initializer","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"method-initializer"},{"name":"onColumnVisibleChange","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{},"id":"method-onColumnVisibleChange"},{"name":"showEditor","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"method-showEditor"},{"name":"updateRecord","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-updateRecord"},{"name":"valid","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{},"id":"method-valid"},{"name":"validRecord","tagname":"method","owner":"BUI.Grid.Plugins.Editing","meta":{"protected":true},"id":"method-validRecord"},{"name":"wrapValidator","tagname":"method","owner":"BUI.Grid.Plugins.RowEditing","meta":{"protected":true},"id":"method-wrapValidator"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"rowediting.js","href":"rowediting.html#BUI-Grid-Plugins-RowEditing"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["BUI.Grid.Plugins.Editing"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='docClass'>BUI.Grid.Plugins.Editing</a><div class='subclass '><strong>BUI.Grid.Plugins.RowEditing</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing' target='_blank'>rowediting.js</a></div></pre><div class='doc-contents'><p>单元格编辑插件</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-property-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-property-align' class='name not-expandable'>align</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'><p>编辑器的对齐设置</p>\n</div><div class='long'><p>编辑器的对齐设置</p>\n<p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-property-align' rel='BUI.Grid.Plugins.Editing-property-align' class='docClass'>BUI.Grid.Plugins.Editing.align</a></p></div></div></div><div id='property-curEditor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-property-curEditor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-property-curEditor' class='name expandable'>curEditor</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>当前编辑的编辑器 ...</div><div class='long'><p>当前编辑的编辑器</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-editors' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-property-editors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-property-editors' class='name expandable'>editors</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>编辑器 ...</div><div class='long'><p>编辑器</p>\n<p>Defaults to: <code>{value: []}</code></p></div></div></div><div id='property-hasValid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-property-hasValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-property-hasValid' class='name expandable'>hasValid</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>是否发生过验证 ...</div><div class='long'><p>是否发生过验证</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-isInitEditors' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-property-isInitEditors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-property-isInitEditors' class='name expandable'>isInitEditors</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>是否初始化过编辑器 ...</div><div class='long'><p>是否初始化过编辑器</p>\n<p>Defaults to: <code>{value: false}</code></p></div></div></div><div id='property-record' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-property-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-property-record' class='name expandable'>record</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>正在编辑的记录 ...</div><div class='long'><p>正在编辑的记录</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-showError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-property-showError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-property-showError' class='name expandable'>showError</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>是否直接在表格上显示错误信息 ...</div><div class='long'><p>是否直接在表格上显示错误信息</p>\n<p>Defaults to: <code>{value: true}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-beforeShowEditor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-beforeShowEditor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-beforeShowEditor' class='name expandable'>beforeShowEditor</a>( <span class='pre'>editor, options</span> )<strong class='protected signature' >protected</strong><strong class='template signature' >template</strong></div><div class='description'><div class='short'>显示编辑器前 ...</div><div class='long'><p>显示编辑器前</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/BUI.Editor.Editor\" rel=\"BUI.Editor.Editor\" class=\"docClass\">BUI.Editor.Editor</a><div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-beforeShowEditor' rel='BUI.Grid.Plugins.Editing-method-beforeShowEditor' class='docClass'>BUI.Grid.Plugins.Editing.beforeShowEditor</a></p></div></div></div><div id='method-bindEidtor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-bindEidtor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-bindEidtor' class='name expandable'>bindEidtor</a>( <span class='pre'>editor</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>绑定编辑器事件 ...</div><div class='long'><p>绑定编辑器事件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/BUI.Editor.Editor\" rel=\"BUI.Editor.Editor\" class=\"docClass\">BUI.Editor.Editor</a><div class='sub-desc'><p>编辑器</p>\n</div></li></ul></div></div></div><div id='method-cancel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>取消编辑 ...</div><div class='long'><p>取消编辑</p>\n</div></div></div><div id='method-clearErrors' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-clearErrors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-clearErrors' class='name expandable'>clearErrors</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>清理错误 ...</div><div class='long'><p>清理错误</p>\n</div></div></div><div id='method-destructor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-destructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-destructor' class='name expandable'>destructor</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>析构函数 ...</div><div class='long'><p>析构函数</p>\n</div></div></div><div id='method-edit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-edit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-edit' class='name expandable'>edit</a>( <span class='pre'>record, field</span> )</div><div class='description'><div class='short'>编辑记录 ...</div><div class='long'><p>编辑记录</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>需要编辑的记录</p>\n</div></li><li><span class='pre'>field</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>编辑的字段</p>\n</div></li></ul></div></div></div><div id='method-focusEditor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-focusEditor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-focusEditor' class='name expandable'>focusEditor</a>( <span class='pre'>editor, field</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>编辑器字段定位 ...</div><div class='long'><p>编辑器字段定位</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>field</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-focusEditor' rel='BUI.Grid.Plugins.Editing-method-focusEditor' class='docClass'>BUI.Grid.Plugins.Editing.focusEditor</a></p></div></div></div><div id='method-getAlignNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-getAlignNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-getAlignNode' class='name expandable'>getAlignNode</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取对齐的节点 ...</div><div class='long'><p>获取对齐的节点</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>点击单元格的事件对象</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/jQuery\" rel=\"jQuery\" class=\"docClass\">jQuery</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-getAlignNode' rel='BUI.Grid.Plugins.Editing-method-getAlignNode' class='docClass'>BUI.Grid.Plugins.Editing.getAlignNode</a></p></div></div></div><div id='method-getEditValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-getEditValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-getEditValue' class='name expandable'>getEditValue</a>( <span class='pre'>options</span> ) : *<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取要编辑的值 ...</div><div class='long'><p>获取要编辑的值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>点击单元格的事件对象</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>编辑的值</p>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-getEditValue' rel='BUI.Grid.Plugins.Editing-method-getEditValue' class='docClass'>BUI.Grid.Plugins.Editing.getEditValue</a></p></div></div></div><div id='method-getEditor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-getEditor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-getEditor' class='name expandable'>getEditor</a>( <span class='pre'>field</span> ) : <a href=\"#!/api/BUI.Editor.Editor\" rel=\"BUI.Editor.Editor\" class=\"docClass\">BUI.Editor.Editor</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取编辑此单元格的编辑器 ...</div><div class='long'><p>获取编辑此单元格的编辑器</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>点击单元格的字段</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BUI.Editor.Editor\" rel=\"BUI.Editor.Editor\" class=\"docClass\">BUI.Editor.Editor</a></span><div class='sub-desc'><p>编辑器</p>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-getEditor' rel='BUI.Grid.Plugins.Editing-method-getEditor' class='docClass'>BUI.Grid.Plugins.Editing.getEditor</a></p></div></div></div><div id='method-getEditorCfgs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-getEditorCfgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-getEditorCfgs' class='name expandable'>getEditorCfgs</a>( <span class='pre'>fields</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取编辑器的配置项 ...</div><div class='long'><p>获取编辑器的配置项</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fields</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>字段配置</p>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-getEditorCfgs' rel='BUI.Grid.Plugins.Editing-method-getEditorCfgs' class='docClass'>BUI.Grid.Plugins.Editing.getEditorCfgs</a></p></div></div></div><div id='method-getEditorConstructor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-getEditorConstructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-getEditorConstructor' class='name expandable'>getEditorConstructor</a>( <span class='pre'>Editor</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>获取编辑器的构造函数 ...</div><div class='long'><p>获取编辑器的构造函数</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Editor</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>命名空间</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>构造函数</p>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-getEditorConstructor' rel='BUI.Grid.Plugins.Editing-method-getEditorConstructor' class='docClass'>BUI.Grid.Plugins.Editing.getEditorConstructor</a></p></div></div></div><div id='method-getFieldConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-getFieldConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-getFieldConfig' class='name expandable'>getFieldConfig</a>( <span class='pre'>column</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取列定义中的字段定义信息 ...</div><div class='long'><p>获取列定义中的字段定义信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/BUI.Grid.Column\" rel=\"BUI.Grid.Column\" class=\"docClass\">BUI.Grid.Column</a><div class='sub-desc'><p>列定义</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>字段定义</p>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-getFieldConfig' rel='BUI.Grid.Plugins.Editing-method-getFieldConfig' class='docClass'>BUI.Grid.Plugins.Editing.getFieldConfig</a></p></div></div></div><div id='method-getFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-getFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-getFields' class='name expandable'>getFields</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>获取编辑的字段 ...</div><div class='long'><p>获取编辑的字段</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>字段集合</p>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-getFields' rel='BUI.Grid.Plugins.Editing-method-getFields' class='docClass'>BUI.Grid.Plugins.Editing.getFields</a></p></div></div></div><div id='method-initEditing' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-initEditing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-initEditing' class='name expandable'>initEditing</a>( <span class='pre'>grid</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>初始化插件 ...</div><div class='long'><p>初始化插件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initEditors' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-initEditors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-initEditors' class='name expandable'>initEditors</a>( <span class='pre'>Editor</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>初始化所有 ...</div><div class='long'><p>初始化所有</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Editor</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initEidtor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-initEidtor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-initEidtor' class='name expandable'>initEidtor</a>( <span class='pre'>cfg, Editor</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>初始化编辑器 ...</div><div class='long'><p>初始化编辑器</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>Editor</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initializer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-initializer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-initializer' class='name expandable'>initializer</a>( <span class='pre'>grid</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>初始化 ...</div><div class='long'><p>初始化</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onColumnVisibleChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-onColumnVisibleChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-onColumnVisibleChange' class='name expandable'>onColumnVisibleChange</a>( <span class='pre'>column</span> )</div><div class='description'><div class='short'>列发生改变 ...</div><div class='long'><p>列发生改变</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-onColumnVisibleChange' rel='BUI.Grid.Plugins.Editing-method-onColumnVisibleChange' class='docClass'>BUI.Grid.Plugins.Editing.onColumnVisibleChange</a></p></div></div></div><div id='method-showEditor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-showEditor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-showEditor' class='name expandable'>showEditor</a>( <span class='pre'>editor</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>显示编辑器 ...</div><div class='long'><p>显示编辑器</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/BUI.Editor.Editor\" rel=\"BUI.Editor.Editor\" class=\"docClass\">BUI.Editor.Editor</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-updateRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-updateRecord' class='name expandable'>updateRecord</a>( <span class='pre'>record, value</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>更新数据 ...</div><div class='long'><p>更新数据</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>编辑的数据</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>编辑值</p>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-updateRecord' rel='BUI.Grid.Plugins.Editing-method-updateRecord' class='docClass'>BUI.Grid.Plugins.Editing.updateRecord</a></p></div></div></div><div id='method-valid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-valid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-valid' class='name expandable'>valid</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>验证表格是否通过验证 ...</div><div class='long'><p>验证表格是否通过验证</p>\n</div></div></div><div id='method-validRecord' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BUI.Grid.Plugins.Editing' rel='BUI.Grid.Plugins.Editing' class='defined-in docClass'>BUI.Grid.Plugins.Editing</a><br/><a href='source/editing.html#BUI-Grid-Plugins-Editing-method-validRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.Editing-method-validRecord' class='name expandable'>validRecord</a>( <span class='pre'>record, fields</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>校验记录 ...</div><div class='long'><p>校验记录</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>校验的记录</p>\n</div></li><li><span class='pre'>fields</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>字段的集合</p>\n</div></li></ul></div></div></div><div id='method-wrapValidator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Grid.Plugins.RowEditing'>BUI.Grid.Plugins.RowEditing</span><br/><a href='source/rowediting.html#BUI-Grid-Plugins-RowEditing-method-wrapValidator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Grid.Plugins.RowEditing-method-wrapValidator' class='name expandable'>wrapValidator</a>( <span class='pre'>validator</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>封装验证方法 ...</div><div class='long'><p>封装验证方法</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>validator</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/BUI.Grid.Plugins.Editing-method-wrapValidator' rel='BUI.Grid.Plugins.Editing-method-wrapValidator' class='docClass'>BUI.Grid.Plugins.Editing.wrapValidator</a></p></div></div></div></div></div></div></div>"});