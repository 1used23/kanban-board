(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{110:function(e,a,n){},111:function(e,a,n){},112:function(e,a,n){},114:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(11),d=n.n(c),l=(n(68),n(69),n(30)),o=n(127),i=(n(70),n(19)),u=function(e){var a=e.card,n=e.panelIndex,t=e.cardIndex;return r.a.createElement(i.b,{draggableId:"card-".concat(n,"-").concat(t),index:t},(function(e,n){return r.a.createElement("div",Object.assign({className:"card1",ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement(o.a,{elevation:3,className:"card"},a))}))},s=n(128),p=(n(110),function(e){var a=e.title,n=e.cards,t=e.isNewPanel,c=e.onAddPanel,d=e.onAddCard,l=e.panelIndex;e.onReorderCards;return r.a.createElement("div",{className:"panel"},a&&r.a.createElement(s.a,{variant:"h6",className:"panel__title"},a),n&&r.a.createElement(i.c,{type:"CARDS",droppableId:"column-".concat(l)},(function(e){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.map((function(e,a){return r.a.createElement(u,{key:a,card:e,panelIndex:l,cardIndex:a})})),e.placeholder)})),r.a.createElement(I,{isNewPanel:t,onAddPanel:c,onAddCard:d,panelIndex:l}))}),m=(n(111),n(129)),f=function(e){var a=e.isNewPanel,n=(e.inputState,e.onAdd);return r.a.createElement(m.a,{className:"button",variant:"contained",color:"primary",disableElevation:!0,onClick:function(){return n()}},a?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443")},E=n(24),b=n(59),v=n.n(b),A=n(58),O=n.n(A),N=(n(112),n(131)),R=n(130),I=function(e){var a=e.isNewPanel,n=e.onAddPanel,c=e.onAddCard,d=e.panelIndex,l=Object(t.useState)(!1),i=Object(E.a)(l,2),u=i[0],s=i[1],p=Object(t.useState)(""),m=Object(E.a)(p,2),b=m[0],A=m[1],I=Object(t.useRef)(null);return Object(t.useEffect)((function(){I.current&&I.current.focus()}),[u]),r.a.createElement(t.Fragment,null,u?r.a.createElement("div",{className:"add-form"},r.a.createElement("div",{className:"add-form-input"},r.a.createElement(o.a,{className:"input-wrap"},r.a.createElement(N.a,{fullWidth:!0,multiline:!0,placeholder:a?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0438":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",inputRef:I,onChange:function(e){return A(e.target.value)},value:b})),r.a.createElement("div",{className:"button-wrap"},r.a.createElement(f,{isNewPanel:a,inputState:b,onAdd:function(){b&&(a?n(b):c(d,b),A(""),s(!u))}}),r.a.createElement(R.a,{onClick:function(){s(!u)}},r.a.createElement(O.a,null))))):r.a.createElement("div",{className:"panel__bottom-add-btn",onClick:function(){s(!u)}},r.a.createElement(v.a,null),r.a.createElement("span",null,a?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443")))},C=n(14),D=Object(C.b)((function(e){return{items:e.panels}}),Object(l.a)({},{addPanel:function(e){return{type:"PANEL:ADD",payload:e}}},{},{addCard:function(e,a){return{type:"CARDS:ADD",payload:{panelIndex:e,text:a}}},reorderCards:function(e){return{type:"CARDS:REORDER",payload:{source:e.source,destination:e.destination}}}}))((function(e){var a=e.items,n=e.addPanel,c=e.addCard,d=e.reorderCards;return r.a.createElement(t.Fragment,null,r.a.createElement(i.a,{onDragEnd:function(e){var a=e.source,n=e.destination;!n||a.droppableId===n.droppableId&&a.index===n.index||d({source:a,destination:n})}},a.map((function(e,a){return r.a.createElement(p,Object.assign({key:a,panelIndex:a,onAddPanel:n,onAddCard:c,onReorderCards:d},e))}))),r.a.createElement(p,{isNewPanel:!0,onAddPanel:n,onAddCard:c}))}));var x,P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))},j=n(9),y=n(16),g=function(e){var a=e.state,n=e.source,t=e.destination,r=n.index,c=n.droppableId,d=t.index,l=t.droppableId,o=parseInt(c.replace("column-","")),i=parseInt(l.replace("column-",""));return a.map((function(e,n){if(i===n){var t=a[o].cards.splice(r,1),c=Object(E.a)(t,1)[0],l=Array.from(a[i].cards);l.splice(d,0,c),e.cards=l}return e}))},_=[{title:"\u041f\u043b\u0430\u043d \u043d\u0430 \u043c\u0435\u0441\u044f\u0446",cards:["\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441\u044b \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430, \u0447\u0442\u043e\u0431\u044b \u0443\u0435\u0445\u0430\u0442\u044c \u0436\u0438\u0442\u044c \u0432 \u041b\u043e\u043d\u0434\u043e\u043d","\u041f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f","\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441\u044b \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430, \u0447\u0442\u043e\u0431\u044b \u0443\u0435\u0445\u0430\u0442\u044c \u0436\u0438\u0442\u044c \u0432 \u041b\u043e\u043d\u0434\u043e\u043d"]},{title:"\u041f\u043b\u0430\u043d \u043d\u0430 \u0434\u0435\u043d\u044c",cards:["\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441 \u043f\u043e React","\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u0440 \u043d\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0443","\u041d\u0430\u043a\u0438\u0434\u0430\u0442\u044c \u0442\u0435\u043c \u0434\u043b\u044f \u0441\u0442\u0430\u0442\u0435\u0439 \u0432 \u0431\u043b\u043e\u0433","\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443 \u0418\u0442\u043e\u0433\u0438"]}],w=Object(j.c)({panels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CARDS:ADD":return e.map((function(e,n){return a.payload.panelIndex===n&&e.cards?Object(l.a)({},e,{cards:[].concat(Object(y.a)(e.cards),[a.payload.text])}):e}));case"CARDS:REORDER":var n=a.payload,t=n.source,r=n.destination;return g({state:e,source:t,destination:r});case"PANEL:ADD":return[].concat(Object(y.a)(e),[{title:a.payload,cards:[]}]);default:return e}}}),S=Object(j.e)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());x=P,d.a.render(r.a.createElement(C.a,{store:S},r.a.createElement(x,null)),document.getElementById("root"))},63:function(e,a,n){e.exports=n(114)},68:function(e,a,n){},69:function(e,a,n){},70:function(e,a,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.6dd041d5.chunk.js.map