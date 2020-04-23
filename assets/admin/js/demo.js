//[Preview Menu Javascript]

//Project:	MinimalPro Admin - Responsive Admin Template
//Primary use:   This file is for demo purposes only.

$(function(){"use strict";$('[data-toggle="control-sidebar"]').controlSidebar(),$('[data-toggle="push-menu"]').pushMenu();var a=$('[data-toggle="push-menu"]').data("lte.pushmenu"),t=$('[data-toggle="control-sidebar"]').data("lte.controlsidebar"),e=$("body").data("lte.layout"),l=["skin-blue","skin-black","skin-red","skin-yellow","skin-purple","skin-green","skin-blue-light","skin-black-light","skin-red-light","skin-yellow-light","skin-purple-light","skin-green-light"];function i(l){$("body").toggleClass(l),e.fixSidebar(),$("body").hasClass("fixed")&&"fixed"==l&&(a.expandOnHover(),e.activate()),t.fix()}function s(a){var t,e;return $.each(l,function(a){$("body").removeClass(l[a])}),$("body").addClass(a),t="skin",e=a,"undefined"!=typeof Storage?localStorage.setItem(t,e):window.alert("Please use a modern browser to properly view this template!"),!1}var o=$("<div />",{id:"control-sidebar-theme-demo-options-tab",class:"tab-pane active"}),r=$("<li />",{class:"active nav-item"}).html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'><i class=\"fa fa-wrench\"></i></a>");$('[href="#control-sidebar-home-tab"]').parent().before(r);var d=$("<div />");d.append('<h4 class="control-sidebar-heading">Layout Options</h4><div class="form-group"><input id="layout_fixed" type="checkbox"data-layout="fixed" class="pull-right chk-col-grey"/> <label for="layout_fixed" class="control-sidebar-subheading">Fixed layout</label></div><div class="form-group"><input id="layout_boxed" type="checkbox"data-layout="layout-boxed" class="pull-right chk-col-grey"/> <label for="layout_boxed" class="control-sidebar-subheading">Boxed Layout</label></div><div class="form-group"><input id="toggle_sidebar" type="checkbox"data-layout="sidebar-collapse" class="pull-right chk-col-grey"/> <label for="toggle_sidebar" class="control-sidebar-subheading">Toggle Sidebar</label></div><div class="form-group"><input id="toggle_right_sidebar" type="checkbox"data-controlsidebar="control-sidebar-open" class="pull-right chk-col-grey"/> <label for="toggle_right_sidebar" class="control-sidebar-subheading">Toggle Right Sidebar Slide</label></div><div class="form-group"><input id="toggle_right_sidebar_skin" type="checkbox"data-sidebarskin="toggle" class="pull-right chk-col-grey"/> <label for="toggle_right_sidebar_skin" class="control-sidebar-subheading">Toggle Right Sidebar Skin</label></div>');var p=$("<ul />",{class:"list-unstyled clearfix"}),n=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #242a33; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-blue" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin">Blue</p>');p.append(n);var b=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div class="clearfix"><span style="display:block; width: 40%; float: left; height: 40px; background: #242a33; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span style="display:block; width: 60%; float: left; height: 40px; background: #f4f6f9; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin">Black</p>');p.append(b);var c=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #242a33; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-purple" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin">Purple</p>');p.append(c);var h=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #242a33; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-success" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin">Green</p>');p.append(h);var f=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #242a33; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-red" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin">Red</p>');p.append(f);var g=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #242a33; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-yellow" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin">Yellow</p>');p.append(g);var x=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #ffffff; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-blue" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Blue Light</p>');p.append(x);var u=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div class="clearfix"><span style="display:block; width: 40%; float: left; height: 40px; background: #ffffff; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span style="display:block; width: 60%; float: left; height: 40px; background: #2A3E52;  border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Black Light</p>');p.append(u);var y=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #ffffff; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-purple" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Purple Light</p>');p.append(y);var k=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #ffffff; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-success" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Green Light</p>');p.append(k);var v=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #ffffff; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-red" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Red Light</p>');p.append(v);var w,m=$("<li />",{style:"float:left; width: 33.33333%; padding: 5px;"}).append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4);border-radius: 100px;" class="clearfix full-opacity-hover"><div><span style="display:block; width: 40%; float: left; height: 40px; background: #ffffff; border-top-left-radius: 30px;border-bottom-left-radius: 30px;"></span><span class="bg-yellow" style="display:block; width: 60%; float: left; height: 40px; border-top-right-radius: 30px;border-bottom-right-radius: 30px;"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Yellow Light</p>');p.append(m),d.append('<h4 class="control-sidebar-heading">Skins</h4>'),d.append(p),o.append(d),$("#control-sidebar-home-tab").after(o),(w=function(a){if("undefined"!=typeof Storage)return localStorage.getItem(a);window.alert("Please use a modern browser to properly view this template!")}("skin"))&&$.inArray(w,l)&&s(w),$("[data-skin]").on("click",function(a){$(this).hasClass("knob")||(a.preventDefault(),s($(this).data("skin")))}),$("[data-layout]").on("click",function(){i($(this).data("layout"))}),$("[data-controlsidebar]").on("click",function(){i($(this).data("controlsidebar"));var a=!t.options.slide;t.options.slide=a,a||$(".control-sidebar").removeClass("control-sidebar-open")}),$('[data-sidebarskin="toggle"]').on("click",function(){var a=$(".control-sidebar");a.hasClass("control-sidebar-dark")?(a.removeClass("control-sidebar-dark"),a.addClass("control-sidebar-light")):(a.removeClass("control-sidebar-light"),a.addClass("control-sidebar-dark"))}),$('[data-enable="expandOnHover"]').on("click",function(){$(this).attr("disabled",!0),a.expandOnHover(),$("body").hasClass("sidebar-collapse")||$('[data-layout="sidebar-collapse"]').click()}),$("body").hasClass("fixed")&&$('[data-layout="fixed"]').attr("checked","checked"),$("body").hasClass("layout-boxed")&&$('[data-layout="layout-boxed"]').attr("checked","checked"),$("body").hasClass("sidebar-collapse")&&$('[data-layout="sidebar-collapse"]').attr("checked","checked"),$('[data-toggle="tooltip"]').tooltip()});
