/*! Built with http://stenciljs.com */
import{h}from"./mycomponent.core.js";var MyComponent=function(){function e(){}return e.prototype.render=function(){return h("div",null,h("div",null,h("img",{class:"avatar",src:this.image})),h("div",{class:"legend"},h("h1",null,this.message)))},Object.defineProperty(e,"is",{get:function(){return"ak-avatar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{image:{type:String,attr:"image"},message:{type:String,attr:"message"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".avatar[data-ak-avatar]{border-radius:20%;display:block;margin:5px auto}.legend[data-ak-avatar]{text-align:center;font-style:italic;margin:5px}"},enumerable:!0,configurable:!0}),e}();export{MyComponent as AkAvatar};