(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df1e8"],{"890a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[a("v-select",{attrs:{hint:""+t.select.list_name,items:t.ownerlist,"item-text":"list_name","item-value":"_id",label:"Select","persistent-hint":"","return-object":"",outline:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),a("v-flex",{staticClass:"good"},[a("v-btn",{attrs:{color:"primary",dark:""},on:{click:t.showdialog}},[t._v("\n        新增答案選項\n        "),a("v-icon",{attrs:{dark:"",right:""}},[t._v("done")])],1)],1)],1),a("CreateOption",{attrs:{open:t.show,listid:t.pass_listid,listque:t.pass_que},on:{changestatus:t.changestatus}}),a("v-layout",[a("v-flex",[[a("v-expansion-panel",t._l(t.alloption,function(e,i){return a("v-expansion-panel-content",{key:i,attrs:{"expand-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",[t._v(t._s(e.option_name))]),a("v-spacer"),1==e.is_root?a("v-icon",[t._v("done")]):t._e()]},proxy:!0}],null,!0)},[a("v-card",[a("v-card-text",{staticClass:"grey lighten-3"},[t._v(t._s(e.description))])],1)],1)}),1)]],2)],1)],1)},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{value:t.dialog,fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closedialog}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v("建立選項")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",flat:""},on:{click:t.createOption}},[t._v("Save")])],1)],1),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("建立選項時的說明")]),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("當前問題")]),a("v-list-tile-sub-title",[t._v("建立選項時對應的問題")])],1),a("v-list-title-content",[a("v-select",{attrs:{items:t.listque,"append-outer-icon":"help","item-text":"Qname","item-value":"_id","hide-details":"",label:"Select","single-line":""},model:{value:t.original_que,callback:function(e){t.original_que=e},expression:"original_que"}})],1)],1),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("下一個問題")]),a("v-list-tile-sub-title",[t._v("對應動態跳題")])],1),a("v-list-title-content",[a("v-select",{attrs:{items:t.listque,"append-outer-icon":"help","item-text":"Qname","item-value":"_id","hide-details":"",label:"Select","single-line":""},model:{value:t.next_que,callback:function(e){t.next_que=e},expression:"next_que"}})],1)],1)],1),a("v-divider"),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("General")]),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-action",[a("v-checkbox",{model:{value:t.is_end,callback:function(e){t.is_end=e},expression:"is_end"}})],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("該選項是否為 結束點")]),a("v-list-tile-sub-title",[t._v("使用者選擇完該選項是否結束問卷")])],1)],1)],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs2:"",md2:""}},[a("v-list-tile-title",[t._v("選項名稱")])],1),a("v-flex",{attrs:{xs10:"",md10:""}},[a("v-text-field",{attrs:{label:"選項名稱",Regular:""},model:{value:t.optionTitle,callback:function(e){t.optionTitle=e},expression:"optionTitle"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:""}},[t._v("請輸入兩組關鍵字(可輸入完使用tab建立關鍵字)")]),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-combobox",{attrs:{items:t.keyselect,label:"使用關鍵字",multiple:"",chips:""},model:{value:t.keyselect,callback:function(e){t.keyselect=e},expression:"keyselect"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[a("v-select",{attrs:{items:t.mediaType,label:"媒體型態"},model:{value:t.selectdata,callback:function(e){t.selectdata=e},expression:"selectdata"}})],1),a("Media")],1)],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-container",{attrs:{"grid-list-sm":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(9,function(e){return a("v-flex",{key:e,attrs:{xs4:"","d-flex":""}},[a("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)}),1)],1)],1)],1)},c=[],r={},u=r,d=a("2877"),v=a("6544"),p=a.n(v),h=a("b0af"),f=a("a523"),m=a("0e8f"),_=a("adda"),x=a("a722"),g=a("490a"),b=Object(d["a"])(u,o,c,!1,null,null,null),V=b.exports;p()(b,{VCard:h["a"],VContainer:f["a"],VFlex:m["a"],VImg:_["a"],VLayout:x["a"],VProgressCircular:g["a"]});var y={name:"CreateQuestion",components:{Media:V},props:["open","listid","listque"],data:function(){return{optionTitle:"",original_que:{},next_que:{},dialog:!1,is_end:!1,keyselect:[],keyitems:[],mediaType:["video","picture","article"],selectdata:""}},mounted:function(){},methods:{closedialog:function(){this.dialog=!1,this.$emit("changestatus",!1)},createOption:function(){var t=this;axios.post("option/create",{option_name:this.optionTitle,original_que:this.original_que,next_que:this.next_que,list_id:this.listid,is_end:this.is_end,keywords:this.keyselect,media_type:this.selectdata}).then(function(e){t.closedialog(),console.log(e)}).catch(function(e){console.log(e),t.closedialog()})}},watch:{open:function(t){this.dialog=t,console.log(this.dialog)},next_que:function(t){console.log(t)},listdata:function(t){console.log(t)},selectdata:function(t){console.log(t)}}},k=y,w=a("8336"),q=a("ac7c"),T=a("2b5d"),C=a("169a"),S=a("ce7e"),L=a("132d"),j=a("8860"),O=a("ba95"),I=a("40fe"),E=a("5d23"),F=a("b56d"),$=a("9910"),z=a("e0c7"),A=a("2677"),B=a("71d9"),P=a("2a7f"),Q=Object(d["a"])(k,s,n,!1,null,null,null),D=Q.exports;p()(Q,{VBtn:w["a"],VCard:h["a"],VCheckbox:q["a"],VCombobox:T["a"],VDialog:C["a"],VDivider:S["a"],VFlex:m["a"],VIcon:L["a"],VLayout:x["a"],VList:j["a"],VListTile:O["a"],VListTileAction:I["a"],VListTileContent:E["a"],VListTileSubTitle:E["b"],VListTileTitle:E["c"],VSelect:F["a"],VSpacer:$["a"],VSubheader:z["a"],VTextField:A["a"],VToolbar:B["a"],VToolbarItems:P["a"],VToolbarTitle:P["b"]});var J={components:{CreateOption:D},data:function(){return{show:!1,select:{},ownerlist:[],alloption:[],pass_que:[],pass_listid:[]}},mounted:function(){var t=this;axios.get("list/ownerlist",{headers:{Authorization:"Bearer "+localStorage.getItem("Authorization")}}).then(function(e){t.ownerlist=e.data}).catch(function(t){})},methods:{showdialog:function(){this.show=!0,console.log(this.show)},changestatus:function(){this.show=!1}},watch:{select:function(t){var e=this;axios.get("list/allItem/".concat(t._id)).then(function(t){console.log(t),e.alloption=t.data.option,e.pass_que=t.data.question,e.pass_listid=t.data._id}).catch(function(t){})}}},M=J,G=a("99d9"),R=a("cd55"),H=a("49e2"),K=Object(d["a"])(M,i,l,!1,null,null,null);e["default"]=K.exports;p()(K,{VBtn:w["a"],VCard:h["a"],VCardText:G["b"],VContainer:f["a"],VExpansionPanel:R["a"],VExpansionPanelContent:H["a"],VFlex:m["a"],VIcon:L["a"],VLayout:x["a"],VSelect:F["a"],VSpacer:$["a"]})}}]);
//# sourceMappingURL=chunk-2d0df1e8.3ecbcafc.js.map