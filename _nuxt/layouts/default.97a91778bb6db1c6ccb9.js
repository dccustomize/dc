webpackJsonp([1],{BtJC:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},DLCH:function(t,s,e){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("my-header"),s("nuxt"),s("my-footer")],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};s.a=a},Ma2J:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("TcKr"),a=e("DLCH"),o=e("VU/8")(i.a,a.a,!1,null,null,null);o.options.__file="layouts/default.vue",s.default=o.exports},TcKr:function(t,s,e){"use strict";var i=e("yqLL"),a=e("YXP+");s.a={components:{MyFooter:i.a,MyHeader:a.a}}},UQtJ:function(t,s,e){var i=e("BtJC");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("4f253db4",i,!1,{sourceMap:!1})},"YXP+":function(t,s,e){"use strict";var i=e("c4/0"),a=e("sEIx"),o=!1;var l=function(t){o||e("UQtJ")},n=e("VU/8")(i.a,a.a,!1,l,null,null);n.options.__file="components/Header.vue",s.a=n.exports},"c4/0":function(t,s,e){"use strict";s.a={data:function(){return{scrollClass:"",isMobile:!1,toggleMobileMenu:!1}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll),window.outerWidth<992&&(this.isMobile=!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset>100?this.scrollClass="header-scrolled":this.scrollClass=""},mobileMenu:function(){this.toggleMobileMenu=!this.toggleMobileMenu,this.toggleMobileMenu?document.body.classList.add("mobile-nav-active"):document.body.classList.remove("mobile-nav-active")}}}},oc9k:function(t,s,e){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"footer-area section-gap"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-sm-6"},[s("div",{staticClass:"single-footer-widget"},[s("h6",[this._v("About Us")]),s("p",[this._v("\n\t\t\t\t\t\t\tIf you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that.\n\t\t\t\t\t\t")])])]),s("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 social-widget"},[s("div",{staticClass:"single-footer-widget"},[s("h6",[this._v("Follow Us")]),s("p",[this._v("Let us be social")]),s("div",{staticClass:"footer-social d-flex align-items-center"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-twitter"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dribbble"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-behance"})])])])]),s("div",{staticClass:"col-lg-12"},[s("p",{staticClass:"footer-text"},[this._v("\n\tCopyright ©All rights reserved | This template is made with "),s("i",{staticClass:"fa fa-heart-o",attrs:{"aria-hidden":"true"}}),this._v(" by "),s("a",{attrs:{href:"https://colorlib.com",target:"_blank"}},[this._v("Colorlib")])])])])])])}]};s.a=a},sEIx:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("button",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],attrs:{type:"button",id:"mobile-nav-toggle"},on:{click:t.mobileMenu}},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.toggleMobileMenu,expression:"!toggleMobileMenu"}],staticClass:"lnr lnr-menu"}),i("i",{directives:[{name:"show",rawName:"v-show",value:t.toggleMobileMenu,expression:"toggleMobileMenu"}],staticClass:"lnr lnr-cross"})]),i("nav",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],attrs:{id:"mobile-nav"}},[i("ul",[i("li",{on:{click:t.mobileMenu}},[i("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),i("li",{on:{click:t.mobileMenu}},[i("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),i("li",{on:{click:t.mobileMenu}},[i("nuxt-link",{attrs:{to:"/products"}},[t._v("Products")])],1),i("li",{on:{click:t.mobileMenu}},[i("nuxt-link",{attrs:{to:"/customize"}},[t._v("Customize")])],1),i("li",{on:{click:t.mobileMenu}},[i("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),i("div",{class:t.scrollClass,attrs:{id:"header"}},[t._m(0),i("div",{staticClass:"container main-menu"},[i("div",{staticClass:"row align-items-center justify-content-between d-flex"},[i("nuxt-link",{attrs:{to:"/"}},[i("img",{attrs:{src:e("iPC3")}})]),i("nav",{attrs:{id:"nav-menu-container"}},[i("ul",{staticClass:"nav-menu"},[i("li",{staticClass:"menu-active"},[i("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),i("li",[i("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),i("li",[i("nuxt-link",{attrs:{to:"/products"}},[t._v("Products")])],1),i("li",[i("nuxt-link",{attrs:{to:"/customize"}},[t._v("Customize")])],1),i("li",[i("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])],1)])])])};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header-top"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-lg-6 col-sm-6 col-4 header-top-left no-padding"},[s("div",{staticClass:"menu-social-icons"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-twitter"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dribbble"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-behance"})])])]),s("div",{staticClass:"col-lg-6 col-sm-6 col-8 header-top-right no-padding"},[s("a",{staticClass:"btns",attrs:{href:"tel:+919643177364"}},[this._v("+91 9643177364")]),s("a",{staticClass:"btns",attrs:{href:"mailto:dccustomizetshirts@gmail.com"}},[this._v("dccustomizetshirts@gmail.com")]),s("a",{staticClass:"icons",attrs:{href:"tel:+91 9643177364"}},[s("span",{staticClass:"lnr lnr-phone-handset"})]),s("a",{staticClass:"icons",attrs:{href:"mailto:support@colorlib.com"}},[s("span",{staticClass:"lnr lnr-envelope"})])])])])])}]};s.a=a},yqLL:function(t,s,e){"use strict";var i=e("oc9k"),a=e("VU/8")(null,i.a,!1,null,null,null);a.options.__file="components/Footer.vue",s.a=a.exports}});