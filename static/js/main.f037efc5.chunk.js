(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),l=n(1),s=n(4),u=n(5),i=n(7),d=n(6),p=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isHidden:!0,goods:Object(l.a)(e.props.goods),options:Object(l.a)(Array(10).keys()).map((function(e){return e+1})),defaultSelectValue:1},e.reverse=function(){e.setState((function(e){return{goods:Object(l.a)(e.goods).reverse()}}))},e.sortByAlph=function(){e.setState((function(e){return{goods:Object(l.a)(e.goods).sort((function(e,t){return e.localeCompare(t)}))}}))},e.reset=function(){e.setState({goods:Object(l.a)(e.props.goods),defaultSelectValue:1})},e.sortByLength=function(){e.setState((function(e){return{goods:Object(l.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},e.sortBySelectedLength=function(t){var n=t.target.value;e.setState({goods:e.props.goods.filter((function(e){return e.length>=n})),defaultSelectValue:n})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isHidden,o=t.goods,r=t.defaultSelectValue,c=t.options;return a.a.createElement("div",null,n&&a.a.createElement("button",{type:"button",onClick:function(){e.setState({isHidden:!1})}},"Start"),!n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,o.map((function(e){return a.a.createElement("li",{key:e},e)}))),a.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sortByAlph},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),a.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),a.a.createElement("select",{onChange:this.sortBySelectedLength,value:r},c.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))))}}]),n}(a.a.Component),g=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),a.a.createElement(p,{goods:g}))};c.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f037efc5.chunk.js.map