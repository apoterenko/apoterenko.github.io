webpackJsonp([1],{0:function(e,n,t){e.exports=t("cDNt")},cDNt:function(e,n,t){"use strict";function o(e){return r["\u0275vid"](0,[(e()(),r["\u0275ted"](null,["The outer application has been started..."])),(e()(),r["\u0275eld"](0,null,null,0,"br",[],null,null,null,null,null)),(e()(),r["\u0275ted"](null,["\n"])),(e()(),r["\u0275eld"](0,null,null,0,"iframe",[["src","client/iframeApp/index.html"]],null,null,null,null,null))],null,null)}function l(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,null,null,1,"app-root",[],null,null,null,o,m)),r["\u0275did"](114688,null,0,d,[p.PostMessageBridgeFactory],null,null)],function(e,n){e(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var r=t("/oeL"),a={production:!0},u=function(){function e(){}return e}(),i=t("uGqb"),d=function(){function e(e){this.bridgeFactory=e,this.title="app"}return e.prototype.ngOnInit=function(){var e=window.frames[0],n=window,t=this.bridgeFactory.makeInstance().connect(n,e).makeBridge("Logout").makeBridge("ChangeLanguage").addListener("Logout",function(e){return console.debug("[Parent][Logout listener] The child has sent an empty message <Logout> to the parent")});setTimeout(function(){t.sendMessage("ChangeLanguage","ru"),setTimeout(function(){window.frames[0].postMessage([{channel:"ChangeLanguage",message:"de"}],"*")},1e3)},2e3)},e.ctorParameters=function(){return[{type:i.PostMessageBridgeFactory,decorators:[{type:r.Inject,args:[i.PostMessageBridgeFactory]}]}]},e}(),s=[""],p=t("hh9H"),c=[s],m=r["\u0275crt"]({encapsulation:0,styles:c,data:{}}),g=r["\u0275ccf"]("app-root",d,l,{},{},[]),f=t("qbdv"),b=t("fc+i"),I=t("slTD"),y=t("Rka1"),P=r["\u0275cmf"](u,[d],function(e){return r["\u0275mod"]([r["\u0275mpd"](512,r.ComponentFactoryResolver,r["\u0275CodegenComponentFactoryResolver"],[[8,[g]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["\u0275mpd"](5120,r.LOCALE_ID,r["\u0275m"],[[3,r.LOCALE_ID]]),r["\u0275mpd"](4608,f.d,f.c,[r.LOCALE_ID]),r["\u0275mpd"](4608,r.Compiler,r.Compiler,[]),r["\u0275mpd"](5120,r.APP_ID,r["\u0275f"],[]),r["\u0275mpd"](5120,r.IterableDiffers,r["\u0275k"],[]),r["\u0275mpd"](5120,r.KeyValueDiffers,r["\u0275l"],[]),r["\u0275mpd"](4608,b.b,b.s,[f.b]),r["\u0275mpd"](6144,r.Sanitizer,null,[b.b]),r["\u0275mpd"](4608,b.e,b.f,[]),r["\u0275mpd"](5120,b.c,function(e,n,t,o){return[new b.k(e),new b.o(n),new b.n(t,o)]},[f.b,f.b,f.b,b.e]),r["\u0275mpd"](4608,b.d,b.d,[b.c,r.NgZone]),r["\u0275mpd"](135680,b.m,b.m,[f.b]),r["\u0275mpd"](4608,b.l,b.l,[b.d,b.m]),r["\u0275mpd"](6144,r.RendererFactory2,null,[b.l]),r["\u0275mpd"](6144,b.p,null,[b.m]),r["\u0275mpd"](4608,r.Testability,r.Testability,[r.NgZone]),r["\u0275mpd"](4608,b.g,b.g,[f.b]),r["\u0275mpd"](4608,b.i,b.i,[f.b]),r["\u0275mpd"](4608,I.PostMessageBridgeImpl,I.PostMessageBridgeImpl,[r.NgZone]),r["\u0275mpd"](4608,p.PostMessageBridgeFactory,p.PostMessageBridgeFactory,[r.NgZone]),r["\u0275mpd"](512,f.a,f.a,[]),r["\u0275mpd"](1024,r.ErrorHandler,b.q,[]),r["\u0275mpd"](1024,r.APP_INITIALIZER,function(e,n){return[b.r(e,n)]},[[2,b.h],[2,r.NgProbeToken]]),r["\u0275mpd"](512,r.ApplicationInitStatus,r.ApplicationInitStatus,[[2,r.APP_INITIALIZER]]),r["\u0275mpd"](131584,r["\u0275e"],r["\u0275e"],[r.NgZone,r["\u0275Console"],r.Injector,r.ErrorHandler,r.ComponentFactoryResolver,r.ApplicationInitStatus]),r["\u0275mpd"](2048,r.ApplicationRef,null,[r["\u0275e"]]),r["\u0275mpd"](512,r.ApplicationModule,r.ApplicationModule,[r.ApplicationRef]),r["\u0275mpd"](512,b.a,b.a,[[3,b.a]]),r["\u0275mpd"](512,y.PostMessageModule,y.PostMessageModule,[]),r["\u0275mpd"](512,u,u,[])])});a.production&&Object(r.enableProdMode)(),Object(b.j)().bootstrapModuleFactory(P).catch(function(e){return console.log(e)})},gFIY:function(e,n){function t(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="gFIY"}},[0]);