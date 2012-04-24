/**
 * glowme.js JQuery plug=in for adding a CSS glow effect
 **/
(function($){
	var GlowMe = function(){};
	GlowMe.prototype = {
			glow:function(elem,r, g, b, a){
				var c;
				if(elem){
					 c = "%r,%g,%b,%a".replace("%r", r)
					.replace("%g", g)
					.replace("%b", b)
					.replace("%a", a);
					$(elem).css({"opacity":"1", 
						"webkit-box-shadow":"0px 0px 30px rgba(%c)".replace("%c",c),
						"-moz-box-shadow":"0px 0px 30px rgba(%c)".replace("%c",c),
						"box-shadow":"0px 0px 30px rgba(%c)".replace("%c",c)});
				} else {
					if(window.console){
						window.console.log("glowme: element not found, skipping");
					}
				}
			},
			unglow: function(elem){
				if(elem){
					$(elem).css({"opacity":"none", 
						"webkit-box-shadow":"none",
						"-moz-box-shadow":"none",
						"box-shadow":"none"});
				} else {
					if(window.console){
						window.console.log("glowme: element not found, skipping");
					}
				}
			}
	};
	
	$.GlowMe = new GlowMe();
})($);