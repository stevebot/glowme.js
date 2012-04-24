/**
 * <pre>
 * glowme.js JQuery plug=in for adding a CSS glow effect
 * 
 * Syntax:
 * $.GlowMe.glow($("#elem"),0,230,230,.8,opts);
 *     where 0,230,230,.8 is the rgba()
 * TODO:    
 * - Add more configuration options -- timed, flicker
 * - Add more browser support (IE)
 * - Add a dynamic glow option (grow and shrink length)
 * - Add a flicker call (toggle's glow on and off with setInterval). -- done
 * </pre>
 * 
 **/
(function($){
	var GlowMe = function(){};
	GlowMe.prototype = {
			// TODO: add more configuration options and pass them in as a map
			glow:function(elem,r, g, b, a,opts){
          //var state = true;
          this.update(elem,r,g,b,a);
          var time = this.getTime(opts,elem);
          this.getFlicker(opts,elem,r,g,b,a);
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
			},
			update:function(elem,r, g, b, a){
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
      getTime: function(opts,elem){
        if(opts.time !== null){
          var time = opts.time;
          setTimeout(this.unglow,time,elem);
          return true;
        }
        else{
          return false;
        }
      },
      getFlicker: function(opts,elem,r,g,b,a){
        if(opts.flicker !== null){
          if( (opts.time === undefined || opts.flicker <= opts.time) && opts.flicker >= 0){
            setInterval(this.flickerToggle,opts.flicker,elem,r,g,b,a);
          }
        }
      },
      flickerToggle: function(elem,r,g,b,a){
        var shadow = elem.css("box-shadow");
        //TODO add more checks
          if(shadow === "none"){
            $.GlowMe.update(elem,r,g,b,a);
          }
          else{
            $.GlowMe.unglow(elem);
          }
        }
	};
	
	$.GlowMe = new GlowMe();
})($);
