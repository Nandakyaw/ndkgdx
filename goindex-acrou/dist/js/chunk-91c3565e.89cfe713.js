(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91c3565e"],{"2a7a":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"g2-grid-view"},[e("div",{staticClass:"columns is-multiline"},t._l(t.folders,(function(i,n){return e("div",{key:"folder_"+n,staticClass:"column is-one-quarter",on:{click:function(e){return t.action(i)}}},[e("div",{staticClass:"card g2-grid-view-card g2-grid-view-folder"},[e("div",{staticClass:"media"},[e("div",{staticClass:"content",attrs:{title:i.name}},[e("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.getIcon(i.mimeType)}})]),t._v(" "+t._s(i.name)+" ")])])])])})),0),e("div",{staticClass:"columns is-multiline"},t._l(t.files,(function(i,n){return e("div",{key:"file_"+n,staticClass:"column is-one-quarter",on:{click:function(e){return t.action(i,"view")}}},[e("div",{staticClass:"card g2-grid-view-card"},[e("div",{class:"card-image"+(-1!=i.mimeType.indexOf("video")?" g2-grid-view-play":"")},[e("i"),e("figure",{staticClass:"image is-square"},[i.thumbnailLink?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.thum(i.thumbnailLink),expression:"thum(file.thumbnailLink)"}],attrs:{alt:i.name}}):e("svg",{staticClass:"file-icon iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.getIcon(i.mimeType)}})])])]),e("div",{staticClass:"media g2-grid-view-file"},[e("div",{staticClass:"content",attrs:{title:i.name}},[e("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.getIcon(i.mimeType)}})]),t._v(" "+t._s(i.name)+" ")])])])])})),0)])},a=[],s=(e("4de4"),{name:"GridView",props:{data:{type:Array,default:function(){return[]}},getIcon:{type:Function},action:{type:Function},thum:{type:Function}},data:function(){return{}},computed:{folders:function(){return this.data.filter((function(t){return t.isFolder}))},files:function(){return this.data.filter((function(t){return!t.isFolder}))}},methods:{}}),r=s,c=(e("677f"),e("2877")),l=Object(c["a"])(r,n,a,!1,null,"1871190e",null);i["default"]=l.exports},"45a1":function(t,i,e){},"677f":function(t,i,e){"use strict";var n=e("45a1"),a=e.n(n);a.a}}]);