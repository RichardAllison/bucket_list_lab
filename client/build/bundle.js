!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const o=n(2),s=n(1),c=(n(3),new o),r=new s("https://restcountries.eu/rest/v2/all"),i=new s("http://localhost:3000/api/bucket_list"),u=function(t){t.forEach(function(t){c.addListItem(t)})},d=function(t){t.preventDefault();const e={country:document.getElementById("countries-select").value};i.post(p,e)},p=function(t){c.addListItem(t)},a=function(t){const e=document.getElementById("countries-select");t.forEach(function(t,n){const o=document.createElement("option");o.innerText=t.name,e.appendChild(o)})};document.addEventListener("DOMContentLoaded",function(){r.get(a),i.get(u),document.getElementById("bucket-list-button").addEventListener("click",d)})},function(t,e){const n=function(t){this.url=t};n.prototype.get=function(t){const e=new XMLHttpRequest;e.open("GET",this.url),e.addEventListener("load",function(){if(200!==this.status)return;const e=JSON.parse(this.responseText);t(e)}),e.send()},n.prototype.post=function(t,e){const n=new XMLHttpRequest;n.open("POST",this.url),n.setRequestHeader("Content-Type","application/json"),n.addEventListener("load",function(){if(201!==this.status)return;const e=JSON.parse(this.responseText);t(e)}),n.send(JSON.stringify(e))},t.exports=n},function(t,e){const n=function(){this.bucketList=[]};n.prototype.addListItem=function(t){this.bucketList.push(t),this.render(t)},n.prototype.render=function(t){const e=document.getElementById("list"),n=document.createElement("li");n.innerText=t.country,e.appendChild(n)},t.exports=n},function(t,e){t.exports=function(t){this.country=t.country}}]);
//# sourceMappingURL=bundle.js.map