(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{256:function(e,r,a){},276:function(e,r,a){"use strict";a(256)},281:function(e,r,a){"use strict";a.r(r);var o={dark:"#4D4D4D","dark-hover":"#333333","dark-500":"#555555","dark-900":"#9C9C9C",grey:"#D1D1D1",light:"#EBEBEB",lighter:"#F5F5F5",lightest:"#EFEFEF",blue:"#002896","blue-hover":"#001D6D","blue-100":"#00A0F0","blue-100-hover":"#0070C0",green:"#009500","green-soft":"#D9F8D9",orange:"#e6a23c",primary:"#00B900",secondary:"#002896",danger:"#DF0101","danger-hover":"#8C0000","danger-100":"#BC321F","danger-invert":"#FFEEEE",warning:"#A35E04","warning-invert":"#FFF9E4",success:"#047205","success-invert":"#EAFFEA","white-opacity":"#ffffff73"},t={name:"Colors",data:()=>({searchKeyword:"",RtxColors:o}),methods:{async doCopy(e){await this.$copyText(e)}},computed:{rtxColorsArray(){return Object.entries(this.RtxColors).map(([e,r])=>({name:e,value:r}))||[]},rtxColorsFilterArray(){return this.rtxColorsArray.filter(e=>e.name.includes(this.searchKeyword)||e.value.includes(this.searchKeyword))}}},n=(a(276),a(14)),s=Object(n.a)(t,(function(){var e=this,r=e._self._c;return r("div",[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeyword,expression:"searchKeyword"}],staticClass:"search-input",attrs:{placeholder:"Input color name/value to search"},domProps:{value:e.searchKeyword},on:{input:function(r){r.target.composing||(e.searchKeyword=r.target.value)}}})]),e._v(" "),r("ul",e._l(e.rtxColorsFilterArray,(function(a){return r("li",{key:a.name,staticClass:"color-container"},[r("div",{staticClass:"color-name",on:{click:function(r){return e.doCopy(a.name)}}},[e._v("\n        "+e._s(a.name)+"\n      ")]),e._v(" "),r("div",{staticClass:"color-value",on:{click:function(r){return e.doCopy(a.value)}}},[e._v("\n        "+e._s(a.value)+"\n      ")]),e._v(" "),r("div",{staticClass:"color-display-box",style:{backgroundColor:a.value}})])})),0)])}),[],!1,null,null,null);r.default=s.exports}}]);