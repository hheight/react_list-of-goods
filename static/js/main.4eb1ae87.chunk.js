(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),l=n.n(a),c=n(1),s=n(4),u=n(5),i=n(7),d=n(6),g=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={isHidden:!0,goods:Object(c.a)(e.props.goods),defaultSelectValue:1},e.reverse=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).reverse()}}))},e.sortByAlph=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.localeCompare(t)}))}}))},e.reset=function(){e.setState({goods:Object(c.a)(e.props.goods),defaultSelectValue:1})},e.sortByLength=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},e.sortBySelectedLength=function(t){var n=t.target.value;e.setState({goods:e.props.goods.filter((function(e){return e.length>=n})),defaultSelectValue:n})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isHidden,o=t.goods,a=t.defaultSelectValue,l=Array.from(Array(10),(function(e,t){return t+1}));return console.log(a),r.a.createElement("div",null,n&&r.a.createElement("button",{type:"button",onClick:function(){e.setState({isHidden:!1})}},"Start"),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:this.sortByAlph},"Sort alphabetically"),r.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),r.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),r.a.createElement("select",{onChange:this.sortBySelectedLength,value:a},l.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))}}]),n}(r.a.Component),p=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods"),r.a.createElement(g,{goods:p}))};l.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4eb1ae87.chunk.js.map