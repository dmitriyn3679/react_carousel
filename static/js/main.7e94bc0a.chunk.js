(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(5),i=n.n(a),r=n(2),c=n(4),s=n(6),o=n(7),m=n(10),u=n(8),l=n(1),d=n.n(l),p=(n(15),n(9)),h=(n(16),n(0)),g=function(t){var e=t.imageUrls,n=t.itemWidth,a=t.frameSize,i=t.step,r=t.animationDuration,c=Object(l.useState)(0),s=Object(p.a)(c,2),o=s[0],m=s[1],u=-1*(n*e.length-a*n),d={width:"".concat(n,"px"),height:"".concat(n,"px")},g={maxWidth:"".concat(n*a,"px")},f={transform:"translateX(".concat(o,"px)"),transition:"transform ".concat(r,"ms")};return Object(h.jsx)("div",{className:"Carousel",children:Object(h.jsxs)("div",{className:"Carousel__container",style:g,children:[Object(h.jsx)("ul",{className:"Carousel__list",style:f,children:e.map((function(t,e){return Object(h.jsx)("li",{children:Object(h.jsx)("img",{src:t,alt:"".concat(e+1),style:d})},t)}))}),Object(h.jsx)("button",{type:"button",onClick:function(){m((function(t){return t+i*n}))},disabled:Math.abs(o)<=0,children:"Prev"}),Object(h.jsx)("button",{type:"button",onClick:function(){m((function(t){return t-i*n}))},disabled:o<=u,children:"Next"})]})})},f=(n(18),function(t){var e=t.onChangeOptions,n=t.imagesCount,a=t.defaultFrameSize,i=[{title:"Item width",name:"itemWidth",id:"width",defaultValue:t.defaultItemWidth,min:"50",max:"350",step:"10"},{title:"Frame size",name:"frameSize",id:"frameSize",defaultValue:a,min:"1",max:n,step:"1"},{title:"Step",name:"step",id:"step",defaultValue:t.defaultStep,min:"1",max:"5",step:"1"},{title:"Animation Duration",name:"animationDuration",id:"animationDuration",defaultValue:t.defaultAnimationDuration,min:"0",max:"5000",step:"500"}];return Object(h.jsx)("div",{className:"control-panel",children:i.map((function(t){return Object(h.jsxs)("label",{htmlFor:t.id,children:[t.title,Object(h.jsx)("input",{type:"range",id:t.id,name:t.name,defaultValue:t.defaultValue,min:t.min,max:t.max,step:t.step,onChange:function(t){return e(t.target.name,+t.target.value)}})]},t.id)}))})}),j=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:2,step:2,animationDuration:1e3},t.changeOptions=function(e,n){t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},e,n))}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.itemWidth,a=t.frameSize,i=t.step,r=t.animationDuration;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{children:["Carousel with ",e.length," images"]}),Object(h.jsx)(g,{imageUrls:e,itemWidth:n,frameSize:a,step:i,animationDuration:r}),Object(h.jsx)("hr",{}),Object(h.jsx)(f,{imagesCount:e.length,defaultFrameSize:a,defaultItemWidth:n,defaultStep:i,onChangeOptions:this.changeOptions,defaultAnimationDuration:r})]})}}]),n}(d.a.Component),b=j;i.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7e94bc0a.chunk.js.map