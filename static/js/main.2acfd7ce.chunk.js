(this["webpackJsonppractical-react"]=this["webpackJsonppractical-react"]||[]).push([[0],{10:function(t,e,n){t.exports=n(15)},15:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(9),s=n.n(i),c=(n(6),n(1)),u=n(2),o=n(4),l=n(3),h=n(7),b=n(5),p=function(t){function e(t){return Object(c.a)(this,e),Object(o.a)(this,Object(l.a)(e).call(this,t))}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"Intrebare"},this.props.text)}}]),e}(r.a.Component),m=function(t){function e(t){return Object(c.a)(this,e),Object(o.a)(this,Object(l.a)(e).call(this,t))}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"Raspunsuri"},r.a.createElement("div",{onClick:function(){return t.props.date.getRaspunsCurent(0)}},this.props.date.intrebariText[0]),r.a.createElement("div",{onClick:function(){return t.props.date.getRaspunsCurent(1)}},this.props.date.intrebariText[1]),r.a.createElement("div",{onClick:function(){return t.props.date.getRaspunsCurent(2)}},"Nu conteaza"))}}]),e}(r.a.Component),d=function(t){function e(t){return Object(c.a)(this,e),Object(o.a)(this,Object(l.a)(e).call(this,t))}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),e}(r.a.Component),j=function t(e,n,a){var r=this;Object(c.a)(this,t),this.getText=function(){return r.text},this.getRaspunsuriText=function(t){return r.raspunsuriText[t]},this.getRaspunsuri=function(t){return r.raspunsuri[t]},this.text=e,this.raspunsuriText=n,this.raspunsuri=a},O=[];O.push(new j("Prima22 Intrebare",["Da","Nu"],[!0,!1]));var f=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t))).getRaspunsCurent=n.getRaspunsCurent.bind(Object(h.a)(n)),n.schimbaIntrebarea=n.schimbaIntrebarea.bind(Object(h.a)(n)),n.state={i:0,raspunsCurent:4},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"Content"},r.a.createElement(p,{text:O[this.state.i].text}),r.a.createElement(m,{date:{intrebariText:O[this.state.i].raspunsuriText,raspunsuri:O[this.state.i].raspunsuri,getRaspunsCurent:this.getRaspunsCurent}}),r.a.createElement(d,null))}},{key:"getRaspunsCurent",value:function(t){this.setState({raspunsCurent:t}),this.schimbaIntrebarea()}},{key:"schimbaIntrebarea",value:function(){console.log("Am schimbat intrebarea!")}}]),e}(r.a.Component),v=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t))).state={},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"Incepe"},r.a.createElement("div",{onClick:this.props.action},"Incepe"))}}]),e}(r.a.Component),C=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t))).handleSw=n.handleSw.bind(Object(h.a)(n)),n.state={sw:1},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return this.state.sw?r.a.createElement("div",{className:"Container"},r.a.createElement(v,{action:this.handleSw})):r.a.createElement("div",{className:"Container"},r.a.createElement(f,null))}},{key:"handleSw",value:function(){console.log("ceva"),this.state.sw?this.setState({sw:0}):this.setState({sw:1})}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},6:function(t,e,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.2acfd7ce.chunk.js.map