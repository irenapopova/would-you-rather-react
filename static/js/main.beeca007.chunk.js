(this["webpackJsonpreact-project-would-you-rather"]=this["webpackJsonpreact-project-would-you-rather"]||[]).push([[0],{198:function(e,t,a){e.exports=a(341)},340:function(e,t,a){},341:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(53),i=a.n(o),l=a(17),c=a(18),u=a(20),s=a(19),m=a(21),d=a(27),h=a(55),p=a(186),b=a(184),v=a(23);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"/images/avatars/avatar1.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"/images/avatars/avatar2.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"/images/avatars/avatar3.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]},anna:{id:"anna",name:"Anna",avatarURL:"/images/avatars/avatar4.png",answers:{},questions:[]},alex:{id:"alex",name:"Alex",avatarURL:"/images/avatars/avatar5.png",answers:{},questions:[]},tom:{id:"tom",name:"Tom",avatarURL:"/images/avatars/avatar6.png",answers:{},questions:[]},melany:{id:"melany",name:"Melany",avatarURL:"/images/avatars/avatar7.png",answers:{},questions:[]},irena:{id:"irena",name:"Irena",avatarURL:"/images/avatars/avatar8.png",answers:{},questions:[]}},O={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnes",timestamp:1489579767190,optionOne:{votes:["tylermcginnes"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function y(){return new Promise((function(e,t){setTimeout((function(){return e(E({},g))}),1e3)}))}function j(e){return new Promise((function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout((function(){O=E({},O,Object(v.a)({},r.id,r)),g=E({},g,Object(v.a)({},n,E({},g[n],{questions:g[n].questions.concat([r.id])}))),t(r)}),1e3)}))}function w(e,t,a){return function(e){var t=e.authUser,a=e.qid,n=e.answer;return new Promise((function(e,r){setTimeout((function(){g=E({},g,Object(v.a)({},t,E({},g[t],{answers:E({},g[t].answers,Object(v.a)({},a,n))}))),O=E({},O,Object(v.a)({},a,E({},O[a],Object(v.a)({},n,E({},O[a][n],{votes:O[a][n].votes.concat([t])}))))),e()}),500)}))}({authUser:e,qid:t,answer:a})}var q="RECEIVE_USERS",x="ADD_ANSWER_TO_USER",C="ADD_QUESTION_TO_USER";var S="RECEIVE_QUESTIONS",T="ADD_ANSWER_TO_QUESTION",U="ADD_QUESTION";var L=a(22),P=a(121),k=a(358),A=a(356),R=a(350),D=a(187),_=a(355),I="SET_AUTH_USER";function z(e){return{type:I,id:e}}var N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},a.handleLoading=function(){a.setState({loading:!0})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(P.a.Group,null,r.a.createElement(Q,null),r.a.createElement(W,{image:r.a.createElement(F,null),form:r.a.createElement(M,{onLoading:this.handleLoading}),loading:this.state.loading})))}}]),t}(n.Component),Q=function(){return r.a.createElement(k.a,{as:"h4",block:!0,attached:"top",textAlign:"center"},r.a.createElement(k.a.Content,null,"Welcome to Would You Rather Game!"),r.a.createElement(k.a.Subheader,null,"Please sign in to continue"))},W=function(e){var t=e.image,a=e.form,n=e.loading;return r.a.createElement("div",null,r.a.createElement(p.a,{padded:!0,textAlign:"center"},r.a.createElement(p.a.Row,{className:"login"},r.a.createElement(p.a.Column,{width:16},!0===n&&r.a.createElement(A.a,{active:!0,inverted:!0},r.a.createElement(R.a,{inverted:!0,content:"Loading"})),t,r.a.createElement("br",null),a))))},F=function(){return r.a.createElement(D.a,{src:"/images/avatars/avatars1.png",size:"medium",centered:!0})},G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e,t){var n=t.value;a.setState({value:n})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.onLoading,r=t.setAuthUser,o=a.state.value;new Promise((function(e,t){n(),setTimeout((function(){return e()}),500)})).then((function(){return r(o)}))},a.generateDropdownData=function(){return a.props.users.map((function(e){return{key:e.id,text:e.name,value:e.id,image:{avatar:!0,src:e.avatarURL}}}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.value,t=""===e;return r.a.createElement(_.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a,{as:"h2",color:"blue"},"Sign In"),r.a.createElement(_.a.Dropdown,{placeholder:"Select a Friend",fluid:!0,selection:!0,scrolling:!0,options:this.generateDropdownData(),value:e,onChange:this.onChange,required:!0}),r.a.createElement(_.a.Button,{content:"Login",positive:!0,disabled:t,fluid:!0}))}}]),t}(n.Component),M=Object(L.b)((function(e){var t=e.users;return{users:Object.values(t)}}),{setAuthUser:z})(G);var B=N,J=a(352),V=a(360),Y=a(185),$=a(357),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(e){e.preventDefault(),a.props.setAuthUser(null)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authUser,a=e.users;return r.a.createElement(J.a,null,r.a.createElement(V.a,{as:Y.a,minWidth:651,pointing:!0,secondary:!0},r.a.createElement(Y.a.Item,{name:"home",as:d.b,to:"/",exact:!0}),r.a.createElement(Y.a.Item,{name:"new poll",as:d.b,to:"/add"}),r.a.createElement(Y.a.Item,{name:"leader board",as:d.b,to:"/leaderboard"}),r.a.createElement(Y.a.Menu,{position:"right"},r.a.createElement(Y.a.Item,null,r.a.createElement("span",null,r.a.createElement(D.a,{src:a[t].avatarURL,avatar:!0,spaced:"right",verticalAlign:"bottom"}),a[t].name)),r.a.createElement(Y.a.Item,null,r.a.createElement($.a,{content:"Logout",labelPosition:"right",basic:!0,compact:!0,icon:"log out",size:"mini",color:"red",onClick:this.handleLogout})))),r.a.createElement(V.a,{as:n.Fragment,minWidth:375,maxWidth:650},r.a.createElement(p.a,{columns:2,padded:"vertically"},r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,null,r.a.createElement(D.a,{src:a[t].avatarURL,avatar:!0,spaced:"right",verticalAlign:"bottom"}),a[t].name),r.a.createElement(p.a.Column,{verticalAlign:"bottom",textAlign:"right"},r.a.createElement($.a,{content:"Logout",labelPosition:"right",basic:!0,compact:!0,icon:"log out",size:"mini",onClick:this.handleLogout}))),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,{width:16},r.a.createElement(Y.a,{pointing:!0,secondary:!0,widths:3},r.a.createElement(Y.a.Item,{name:"home",as:d.b,to:"/",exact:!0}),r.a.createElement(Y.a.Item,{name:"new poll",as:d.b,to:"/add"}),r.a.createElement(Y.a.Item,{name:"leader board",as:d.b,to:"/leaderboard"})))))),r.a.createElement(V.a,{as:n.Fragment,maxWidth:374},r.a.createElement(p.a,{padded:"vertically",columns:1},r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,null,r.a.createElement(D.a,{src:a[t].avatarURL,avatar:!0,spaced:"right",verticalAlign:"bottom"}),a[t].name,r.a.createElement($.a,{content:"Logout",labelPosition:"right",basic:!0,compact:!0,icon:"log out",size:"mini",floated:"right",onClick:this.handleLogout}))),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,null,r.a.createElement(Y.a,{pointing:!0,secondary:!0,widths:3},r.a.createElement(Y.a.Item,{name:"home",as:d.b,to:"/",exact:!0}),r.a.createElement(Y.a.Item,{name:"new poll",as:d.b,to:"/add"}),r.a.createElement(Y.a.Item,{name:"leader board",as:d.b,to:"/leaderboard"})))))))}}]),t}(n.Component);var K=Object(L.b)((function(e){var t=e.users;return{authUser:e.authUser,users:t}}),{setAuthUser:z})(H),X=a(359),Z=a(351),ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e,t){var n=t.value;return a.setState({value:n})},a.handleSubmit=function(e){if(e.preventDefault(),""!==a.state.value){var t=a.props,n=t.authUser,r=t.question;(0,t.handleSaveQuestionAnswer)(n,r.id,a.state.value)}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.question,t=""===this.state.value;return r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{as:"h4"},"Would you rather"),r.a.createElement(_.a,{onSubmit:this.handleSubmit},r.a.createElement(_.a.Field,null,r.a.createElement(Z.a,{label:e.optionOne.text,name:"radioGroup",value:"optionOne",checked:"optionOne"===this.state.value,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(Z.a,{label:e.optionTwo.text,name:"radioGroup",value:"optionTwo",checked:"optionTwo"===this.state.value,onChange:this.handleChange})),r.a.createElement(_.a.Field,null,r.a.createElement($.a,{color:"blue",size:"tiny",fluid:!0,positive:!0,disabled:t,content:"Submit"}))))}}]),t}(n.Component);var te=Object(L.b)((function(e,t){var a=e.authUser;return e.users,t.match,{authUser:a}}),{handleSaveQuestionAnswer:function(e,t,a){return function(n){return n(function(e,t,a){return{type:x,authUser:e,qid:t,answer:a}}(e,t,a)),n(function(e,t,a){return{type:T,authUser:e,qid:t,answer:a}}(e,t,a)),w(e,t,a).catch((function(e){console.warn("Error in handleSaveQuestionAnswer:",e)}))}}})(ee),ae=a(96),ne=a(66),re=a(353),oe={orange:{name:"orange",hex:"#ba2121"},blue:{name:"blue",hex:"#2185d0"},red:{name:null,hex:"#36f5eb"}},ie={color:"orange",bgColor:"honeydew"},le={color:"blue",bgColor:"#36f5eb"},ce=function(){return r.a.createElement(ae.a,{color:"orange",ribbon:"right",className:"vote"},r.a.createElement(ne.a,{name:"check circle outline",size:"big",className:"compact"}),r.a.createElement("div",{style:{float:"right"}},"Your",r.a.createElement("br",null),"Vote"))},ue=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.history.push("/")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.question,a=e.user,o=t.optionOne.votes.length,i=t.optionTwo.votes.length,l=o+i,c=a.answers[t.id],u=le,s=le;return o>i?u=ie:i>o&&(s=ie),r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{as:"h3"},"Results:",r.a.createElement(k.a.Subheader,{style:{fontWeight:"bold"}},"Would you rather")),r.a.createElement(P.a,{color:u.color,style:{backgroundColor:"".concat(u.bgColor)}},"optionOne"===c&&r.a.createElement(ce,null),r.a.createElement("p",{style:{fontWeight:"bold"}},t.optionOne.text),r.a.createElement(re.a,{percent:(o/l*100).toFixed(2),progress:!0,color:u.color},o," out of ",l," votes")),r.a.createElement(P.a,{color:s.color,style:{backgroundColor:"".concat(s.bgColor)}},"optionTwo"===c&&r.a.createElement(ce,null),r.a.createElement("p",{style:{fontWeight:"bold"}},t.optionTwo.text),r.a.createElement(re.a,{percent:(i/l*100).toFixed(2),progress:!0,color:s.color},i," out of ",l," votes")),r.a.createElement($.a,{size:"tiny",floated:"left",onClick:this.handleClick},"GO Back"))}}]),t}(n.Component);var se=Object(h.f)(Object(L.b)((function(e){return{user:e.users[e.authUser]}}))(ue)),me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={viewPoll:!1},a.handleClick=function(e){a.setState((function(e){return{viewPoll:!e.viewPoll}}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.question,a=e.unanswered,o=!0===a?oe.orange:oe.blue,i=!0===a?"Answer Poll":"Results";return!0===this.state.viewPoll?r.a.createElement(h.a,{push:!0,to:"/questions/".concat(t.id)}):r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{as:"h5",textAlign:"left"},"Would you rather"),r.a.createElement("p",{style:{textAlign:"center"}},t.optionOne.text,r.a.createElement("br",null),"or..."),r.a.createElement($.a,{color:o.name,size:"tiny",fluid:!0,onClick:this.handleClick,content:i}))}}]),t}(n.Component),de={POLL_TEASER:"POLL_TEASER",POLL_QUESTION:"POLL_QUESTION",POLL_RESULT:"POLL_RESULT"},he=function(e){var t=e.pollType,a=e.question,n=e.unanswered;switch(t){case de.POLL_TEASER:return r.a.createElement(me,{question:a,unanswered:n});case de.POLL_QUESTION:return r.a.createElement(te,{question:a});case de.POLL_RESULT:return r.a.createElement(se,{question:a});default:return}},pe=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.author,a=e.question,n=e.pollType,o=e.badPath,i=e.unanswered,l=void 0===i?null:i;if(console.log(this.props),!0===o)return r.a.createElement(h.a,{to:"/questions/bad_id"});var c=!0===l?oe.orange:oe.blue,u=null===l?"1px solid ".concat(oe.grey):"2px solid ".concat(c.hex);return t?r.a.createElement(P.a.Group,null,r.a.createElement(k.a,{as:"h5",textAlign:"left",block:!0,attached:"top",style:{borderTop:u}},t?t.name:null," asks:")," ",r.a.createElement(p.a,{divided:!0,padded:!0},r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,{width:5},r.a.createElement(D.a,{src:t?t.avatarURL:null})),r.a.createElement(p.a.Column,{width:11},r.a.createElement(he,{pollType:n,question:a,unanswered:l}))))):null}}]),t}(n.Component);var be=Object(L.b)((function(e,t){var a,n,r,o=e.users,i=e.questions,l=e.authUser,c=t.match,u=t.question_id,s=!1;if(void 0!==u)n=o[(a=i[u]).author],r=de.POLL_TEASER;else{a=i[c.params.question_id];var m=o[l];void 0===a?s=!0:(n=o[a.author],r=de.POLL_QUESTION,Object.keys(m.answers).includes(a.id)&&(r=de.POLL_RESULT))}return{badPath:s,question:a,author:n,pollType:r}}))(pe),ve=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.userQuestionData;return r.a.createElement(X.a,{panes:Ee({userQuestionData:e}),className:"tab"})}}]),t}(n.Component),fe=y(),Ee=function(e){var t=e.userQuestionData;return console.log(e),[{menuItem:"Unanswered",render:function(){return r.a.createElement(X.a.Pane,null,t.answered.map((function(e){return r.a.createElement(be,{author:fe,key:e.id,question_id:e.id,unanswered:!0})})))}},{menuItem:"Answered",render:function(){return r.a.createElement(X.a.Pane,null,t.unanswered.map((function(e){return r.a.createElement(be,{author:fe,key:e.id,question_id:e.id,unanswered:!1})})))}}]};var ge=Object(L.b)((function(e){var t=e.authUser,a=e.users,n=e.questions,r=Object.keys(a[t].answers);return{userQuestionData:{answered:Object.values(n).filter((function(e){return!r.includes(e.id)})).sort((function(e,t){return t.timestamp-e.timestamp})),unanswered:Object.values(n).filter((function(e){return r.includes(e.id)})).sort((function(e,t){return t.timestamp-e.timestamp}))}}}))(ve),Oe=a(354),ye=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={validSubmit:!1,isLoading:!1,option1:"",option2:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.authUser,r=t.handleSaveQuestion,o=a.state,i=o.option1,l=o.option2;new Promise((function(e,t){a.setState({isLoading:!0}),r(i,l,n),setTimeout((function(){return e("success")}),1e3)})).then((function(){a.setState({option1:"",option2:""}),a.setState({validSubmit:!0})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=""===this.state.option1||""===this.state.option2;return!0===this.state.validSubmit?r.a.createElement(h.a,{to:"/"}):r.a.createElement(P.a.Group,null,r.a.createElement(k.a,{as:"h3",textAlign:"left",block:!0,attached:"top"},"Create a New Poll"),r.a.createElement(p.a,{padded:!0},r.a.createElement(p.a.Column,null,this.state.isLoading&&r.a.createElement(A.a,{active:!0,inverted:!0},r.a.createElement(R.a,{content:"Updating"})),r.a.createElement("p",null,"Complete the question:"),r.a.createElement("p",null,r.a.createElement("strong",null,"Would you rather...")),r.a.createElement(_.a,{onSubmit:this.handleSubmit},r.a.createElement(_.a.Input,{id:"option1",placeholder:"Enter option one...",value:this.state.option1,onChange:this.handleChange,required:!0}),r.a.createElement(Oe.a,{horizontal:!0},"Or"),r.a.createElement(_.a.Input,{id:"option2",placeholder:"Enter option two...",value:this.state.option2,onChange:this.handleChange,required:!0}),r.a.createElement(_.a.Button,{positive:!0,size:"tiny",fluid:!0,disabled:e},"Submit")))))}}]),t}(n.Component);var je=Object(L.b)((function(e){return{authUser:e.authUser}}),{handleSaveQuestion:function(e,t,a){return function(n){return(r={optionOneText:e,optionTwoText:t,author:a},j(r)).then((function(e){n(function(e){return{type:U,question:e}}(e)),n(function(e){var t=e.id,a=e.author;return{type:C,id:t,author:a}}(e))}));var r}}})(ye),we=a(7),qe=a.n(we),xe=["yellow","red","orange"],Ce=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.leaderboardData;return r.a.createElement(n.Fragment,null,e.map((function(e,t){return r.a.createElement(P.a.Group,{key:e.id},r.a.createElement(ae.a,{corner:"left",icon:"trophy",color:xe[t]}),r.a.createElement(p.a,{divided:!0,padded:!0},r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,{width:4,verticalAlign:"middle"},r.a.createElement(D.a,{src:e.avatarURL})),r.a.createElement(p.a.Column,{width:8},r.a.createElement(k.a,{as:"h3",textAlign:"left"},e.name),r.a.createElement(p.a,null,r.a.createElement(p.a.Column,{width:12},"Answered questions"),r.a.createElement(p.a.Column,{width:4},e.answerCount)),r.a.createElement(Oe.a,null),r.a.createElement(p.a,null,r.a.createElement(p.a.Column,{width:12},"Created questions"),r.a.createElement(p.a.Column,{width:4},e.questionCount))),r.a.createElement(p.a.Column,{width:4,textAlign:"center"},r.a.createElement(P.a.Group,null,r.a.createElement(k.a,{as:"h5",block:!0,attached:"top",content:"Score"}),r.a.createElement(P.a,null,r.a.createElement(ae.a,{circular:!0,color:"blue",size:"big"},e.questionCount+e.answerCount)))))))})))}}]),t}(n.Component);Ce.propType={leaderboardData:qe.a.array.isRequired};var Se=Object(L.b)((function(e){var t=e.users;return{leaderboardData:Object.values(t).map((function(e){return{id:e.id,name:e.name,avatarURL:e.avatarURL,answerCount:Object.values(e.answers).length,questionCount:e.questions.length,total:Object.values(e.answers).length+e.questions.length}})).sort((function(e,t){return e.total-t.total})).reverse().slice(0,3)}}))(Ce),Te=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{textAlign:"center"},r.a.createElement(k.a,{as:"h3"},"No Match 404 Error"),r.a.createElement("p",null,"Nothing to see here. Please use the menu to try again."))}}]),t}(n.Component),Ue=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.handleInitialData()}},{key:"render",value:function(){var e=this.props.authUser;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},null===e?r.a.createElement(h.b,{render:function(){return r.a.createElement(Le,null,r.a.createElement(B,null))}}):r.a.createElement(n.Fragment,null,r.a.createElement(K,null),r.a.createElement(Le,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:ge}),r.a.createElement(h.b,{path:"/questions/bad_id",component:Te}),r.a.createElement(h.b,{path:"/questions/:question_id",component:be}),r.a.createElement(h.b,{path:"/add",component:je}),r.a.createElement(h.b,{path:"/leaderboard",component:Se}),r.a.createElement(h.b,{component:Te}))))))}}]),t}(n.Component),Le=function(e){var t=e.children;return r.a.createElement(p.a,{padded:"vertically",columns:1,centered:!0},r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Column,{style:{maxWidth:550}},t)))};var Pe=Object(L.b)((function(e){return{authUser:e.authUser}}),{handleInitialData:function(){return function(e){return Promise.all([y(),new Promise((function(e,t){setTimeout((function(){return e(E({},O))}),1e3)}))]).then((function(e){var t=Object(b.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var a=t.users,n=t.questions;e(function(e){return{type:S,questions:e}}(n)),e(function(e){return{type:q,users:e}}(a))}))}}})(Ue),ke=(a(340),a(46));function Ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ae(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function De(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _e(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?De(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):De(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ie=Object(ke.c)({authUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===I?t.id:e},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Re({},e,{},t.questions);case T:var a=t.authUser,n=t.qid,r=t.answer;return Re({},e,Object(v.a)({},n,Re({},e[n],Object(v.a)({},r,Re({},e[n][r],{votes:e[n][r].votes.concat(a)})))));case U:var o=t.question;return Re({},e,Object(v.a)({},o.id,o));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return _e({},e,{},t.users);case x:var a=t.authUser,n=t.qid,r=t.answer;return _e({},e,Object(v.a)({},a,_e({},e[a],{answers:_e({},e[a].answers,Object(v.a)({},n,r))})));case C:var o=t.id,i=t.author;return _e({},e,Object(v.a)({},i,_e({},e[i],{questions:e[i].questions.concat(o)})));default:return e}}}),ze=a(183),Ne=function(e){return function(t){return function(a){console.group(a.type),console.log("The action:",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},Qe=Object(ke.a)(ze.a,Ne),We=Object(ke.d)(Ie,Qe);i.a.render(r.a.createElement(L.a,{store:We},r.a.createElement(Pe,null)),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.beeca007.chunk.js.map