(this["webpackJsonpphone-directory"]=this["webpackJsonpphone-directory"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(21),a=n.n(c),i=(n(27),n(28),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))}),b=n(14),o=n(8),d=n(9),l=n(15),j=n(12),u=n(11),h=(n(29),n(1)),m=function(e){return Object(h.jsx)("div",{style:{textAlign:"center",color:"#fff",background:"#000",padding:20,fontSize:20,letterSpacing:2,textTransform:"uppercase"},children:e.heading})},p=n(10),O=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onDeleteHandler=function(t){e.props.deleteSubscriberHandler(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"component-container",children:[Object(h.jsx)(m,{heading:"Phone Directory"}),Object(h.jsxs)("div",{className:"component-body-container",children:[Object(h.jsx)(p.b,{to:"/add",children:Object(h.jsx)("button",{className:"custom-btn add-btn",children:"ADD"})}),Object(h.jsxs)("div",{className:"grid-container heading-container",children:[Object(h.jsx)("span",{className:"grid-item name-heading",children:"Name"}),Object(h.jsx)("span",{className:"grid-item phone-heading",children:"Phone"})]}),this.props.subscriberList.map((function(t){return Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsx)("span",{className:"grid-item grid-name",children:t.name}),Object(h.jsx)("span",{className:"grid-item grid-phone",children:t.phone}),Object(h.jsx)("button",{className:"custom-btn delete-btn",onClick:e.onDeleteHandler.bind(e,t.id),children:"DELETE"})]},t.id)}))]})]})}}]),n}(r.Component),x=(n(36),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).inputChangedHandler=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onFormSubmit=function(t){t.preventDefault(),e.props.addSubscriberHandler(e.state),e.setState({id:0,name:"",phone:""}),e.props.history.push("/")},e.state={id:0,name:"",phone:""},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{heading:"Add Subscriber"}),Object(h.jsxs)("div",{className:"component-body-container",children:[Object(h.jsx)(p.b,{to:"/",children:Object(h.jsx)("button",{className:"custom-btn",children:"Back"})}),Object(h.jsxs)("form",{className:"subscriber-form",onSubmit:this.onFormSubmit.bind(this),children:[Object(h.jsx)("label",{htmlFor:"name",className:"label-control",children:"Name:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",className:"input-control",name:"name",onChange:this.inputChangedHandler}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"phone",className:"label-control",children:"Phone:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"number",className:"input-control",name:"phone",onChange:this.inputChangedHandler}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"subscriber-info-container",children:[Object(h.jsx)("span",{className:"subscriber-to-add-heading",children:"Subscriber to be Added: "}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"subscriber-info",children:["Name: ",this.state.name]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"subscriber-info",children:["Phone: ",this.state.phone]})]}),Object(h.jsx)("button",{className:"custom-btn add-btn",children:"Add"})]})]})]})}}]),n}(r.Component)),f=n(2),g=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).deleteSubscriberHandler=function(t){var n=e.state.subscriberList,r=0;n.forEach((function(e,n){e.id===t&&(r=n)}),Object(l.a)(e));var s=n;s.splice(r,1),e.setState({subscriberList:s})},e.addSubscriberHandler=function(t){var n=e.state.subscriberList;n.length>0?t.id=n[n.length-1].id+1:t.id=1,n.push(t),e.setState({subscriberList:n})},e.state={subscriberList:[{id:1,name:"prateek",phone:"777777777"},{id:2,name:"Ansh",phone:"999999999"}]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"main-container",children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(f.a,{exact:!0,path:"/",render:function(t){return Object(h.jsx)(O,Object(b.a)(Object(b.a)({},t),{},{subscriberList:e.state.subscriberList,deleteSubscriberHandler:e.deleteSubscriberHandler}))}}),Object(h.jsx)(f.a,{exact:!0,path:"/add",render:function(t,n){var r=t.history;return Object(h.jsx)(x,Object(b.a)(Object(b.a)({history:r},n),{},{addSubscriberHandler:e.addSubscriberHandler}))}})]})})}}]),n}(r.Component);a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),i()}},[[37,1,2]]]);
//# sourceMappingURL=main.ec10fbb5.chunk.js.map