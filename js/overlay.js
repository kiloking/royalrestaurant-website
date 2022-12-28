var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

google.maps.__gjsload__('overlay', function(_){var tt=function(a){this.h=a},$ka=function(){},ut=function(a){a.lo=a.lo||new $ka;return a.lo},ala=function(a){this.La=new _.pi(function(){var b=a.lo;if(a.getPanes()){if(a.getProjection()){if(!b.kn&&a.onAdd)a.onAdd();b.kn=!0;a.draw()}}else{if(b.kn)if(a.onRemove)a.onRemove();else a.remove();b.kn=!1}},0)},bla=function(a,b){function c(){return _.qi(e.La)}var d=ut(a),e=d.Zl;e||(e=d.Zl=new ala(a));_.sb(d.Ya||[],_.F.removeListener);var f=d.Xa=d.Xa||new _.Vr,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Pr=d.Pr||new tt(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Ya=[_.F.addListener(a,"panes_changed",c),_.F.addListener(g,"zoom_changed",c),_.F.addListener(g,"offset_changed",c),_.F.addListener(b,"projection_changed",c),_.F.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.Jf&&(_.Gg(b,"Ox"),_.ug(b,148440))},fla=function(a){if(a){var b=a.getMap();if(cla(a)!==b&&b&&b instanceof _.Jf){var c=b.__gm;c.overlayLayer?a.__gmop=new dla(b,a,c.overlayLayer):c.j.then(function(d){d=d.Za;var e=new vt(b,d);d.mb(e);c.overlayLayer=e;ela(a);fla(a)})}}},ela=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.h.unbindAll(),b.h.set("panes",null),b.h.set("projection",null),b.l.Vf(b),b.j&&(b.j=!1,b.h.onRemove?b.h.onRemove():b.h.remove()))}},cla=function(a){return(a=a.__gmop)?a.map:null},
dla=function(a,b,c){this.map=a;this.h=b;this.l=c;this.j=!1;_.Gg(this.map,"Ox");_.ug(this.map,148440);c.uf(this)},gla=function(a,b){a.h.get("projection")!=b&&(a.h.bindTo("panes",a.map.__gm),a.h.set("projection",b))},vt=function(a,b){this.m=a;this.l=b;this.h=null;this.j=[]};_.C(tt,_.G);
tt.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Ce(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.h:null))};var wt={};_.C(ala,_.G);wt.uf=function(a){if(a){var b=a.getMap();(ut(a).wr||null)!==b&&(b&&bla(a,b),ut(a).wr=b)}};wt.Vf=function(a){var b=ut(a),c=b.Xa;c&&c.unbindAll();(c=b.Pr)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Ya&&_.sb(b.Ya,_.F.removeListener);b.Ya=null;b.Zl&&(b.Zl.La.Gd(),b.Zl=null);delete ut(a).wr};var xt={};dla.prototype.draw=function(){this.j||(this.j=!0,this.h.onAdd&&this.h.onAdd());this.h.draw&&this.h.draw()};vt.prototype.dispose=function(){};vt.prototype.yc=function(a,b,c,d,e,f,g,h){var k=this.h=this.h||new _.ho(this.m,this.l,function(){});k.yc(a,b,c,d,e,f,g,h);a=_.A(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,gla(b,k),b.draw()};vt.prototype.uf=function(a){this.j.push(a);this.h&&gla(a,this.h);this.l.refresh()};vt.prototype.Vf=function(a){_.Kb(this.j,a)};xt.uf=fla;xt.Vf=ela;_.wf("overlay",{vp:function(a){if(a){(0,wt.Vf)(a);(0,xt.Vf)(a);var b=a.getMap();b&&(b instanceof _.Jf?(0,xt.uf)(a):(0,wt.uf)(a))}},preventMapHitsFrom:function(a){_.Lo(a,{onClick:function(b){return _.qo(b.event)},sd:function(b){return _.no(b)},zh:function(b){return _.oo(b)},Vd:function(b){return _.oo(b)},Bd:function(b){return _.po(b)}}).vi(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.Af);a.addEventListener("contextmenu",_.Af);a.addEventListener("dblclick",_.Af);a.addEventListener("mousedown",
_.Af);a.addEventListener("mousemove",_.Af);a.addEventListener("MSPointerDown",_.Af);a.addEventListener("pointerdown",_.Af);a.addEventListener("touchstart",_.Af);a.addEventListener("wheel",_.Af)}});});


}
/*
     FILE ARCHIVED ON 10:47:02 Apr 16, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:33:33 Dec 28, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 139.024
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.072
  RedisCDXSource: 0.542
  esindex: 0.009
  LoadShardBlock: 118.66 (3)
  PetaboxLoader3.datanode: 148.484 (5)
  CDXLines.iter: 12.782 (3)
  load_resource: 656.062 (2)
  PetaboxLoader3.resolve: 575.788 (2)
*/