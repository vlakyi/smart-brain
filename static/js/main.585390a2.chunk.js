(this.webpackJsonpfacerecognationbrain=this.webpackJsonpfacerecognationbrain||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/face_recognition.2bb0dac3.svg"},25:function(e,t,a){e.exports=a(43)},30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),s=a.n(i),o=(a(30),a(8)),l=a(9),c=a(11),m=a(10),u=a(1),d=a(6),p=r.a.memo((function(e){var t=e.signOut;return"/smartbrain/home"===Object(u.g)().pathname?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(d.b,{to:function(){},onClick:t,className:"f3 link dim black pa3 pointer"}," Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(d.b,{to:"/smartbrain/signin",className:"f3 link dim black pa3 pointer"}," Sign In"),r.a.createElement(d.b,{to:"/smartbrain/register",className:"f3 link dim black pa3 pointer"}," Register"))})),h=a(21),b=a.n(h),g=a(17),f=a.n(g),v=a(22),w=(a(37),function(e){var t=e.headerText,a=e.mainText,n=e.buttonText,i=e.isModalOpen,s=e.closeModal;return i?r.a.createElement("div",{className:"modal_overlay"},r.a.createElement("div",{className:"modal_container"},r.a.createElement("h1",null,t),r.a.createElement("p",null,a),r.a.createElement("button",{onClick:s},n))):""}),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=Object(v.a)(f.a.mark((function e(){var t,a,r,i,s,o,l,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.signInEmail,r=t.signInPassword,i=n.props,s=i.loadUser,o=i.history,(""!==a||""!==r)&&a.includes("@")&&a.includes(".")||n.setState({isModalOpen:!0}),e.prev=3,e.next=6,fetch("https://secure-bastion-14247.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:r})});case 6:return l=e.sent,e.next=9,l.json();case 9:(c=e.sent).id?(s(c),o.push("/smartbrain/home")):n.setState({isModalOpen:!0}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),n.setState({isModalOpen:!0});case 17:case"end":return e.stop()}}),e,null,[[3,13]])}))),n.closeModal=function(){n.setState({isModalOpen:!1})},n.state={signInEmail:"",signInPassword:"",isModalOpen:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{headerText:"Wrong Credentials",mainText:"Please, check your credentials and try again!",buttonText:"Try Again",isModalOpen:this.state.isModalOpen,closeModal:this.closeModal}),r.a.createElement("article",{className:"br3 ba b--blalck-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 tl",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 tl",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"}),r.a.createElement(d.b,{to:"/smartbrain/register",className:"f6 link dim black db pointer"},"Register"))))))}}]),a}(r.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){var e=n.state,t=e.email,a=e.password,r=e.name;""!==t&&""!==a&&""!==r&&t.includes("@")&&t.includes(".")?fetch("https://secure-bastion-14247.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a,name:r})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.props.history.push("/smartbrain/home")):n.setState({isModalOpen:!0})})).catch((function(e){console.log(e),n.setState({isModalOpen:!0})})):n.setState({isModalOpen:!0})},n.closeModal=function(){n.setState({isModalOpen:!1})},n.state={email:"",password:"",name:"",isModalOpen:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{headerText:"Wrong Credentials",mainText:"Please, check your credentials and try again!",buttonText:"Try Again",isModalOpen:this.state.isModalOpen,closeModal:this.closeModal}),r.a.createElement("article",{className:"br3 ba b--blalck-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 tl",htmlFor:"name"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 tl",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6 tl",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one number and one uppercase and lowercase letter,\r and at least 8 or more characters",onChange:this.onPasswordChange,required:!0}))),r.a.createElement("div",{className:"flex"},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))))))}}]),a}(r.a.Component),N=(a(38),a(23)),O=a.n(N),S=(a(39),a(24)),k=a.n(S),C=function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(O.a,{className:"Tilt br2 shadow-2 logo-container",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3"},r.a.createElement("img",{alt:"logo",src:k.a}))))},x=function(e){var t=e.name,a=e.entries;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),r.a.createElement("div",{className:"white f1"},a))},M=(a(40),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try."),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"input_container center form pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),j=(a(41),function(e){var t=e.imageUrl,a=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),T=function(e){var t=e.name,a=e.entries,n=e.box,i=e.imageUrl,s=e.isModalOpen,o=e.closeModal,l=e.onInputChange,c=e.onButtonSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{headerText:"Wrong Image Url",mainText:"Please, use correct image url and try again",buttonText:"Try Again",isModalOpen:s,closeModal:o}),r.a.createElement(C,null),r.a.createElement(x,{name:t,entries:a}),r.a.createElement(M,{onInputChange:l,onButtonSubmit:c}),r.a.createElement(j,{box:n,imageUrl:i}))},I={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},U={input:"",imageUrl:"",box:{},isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""},isModalOpen:!1},_=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loadUser=function(e){n.setState({user:{id:e.id,name:e.name,email:e.email,entries:e.entries,joined:e.joined}})},n.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),r=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*r,rightCol:n-t.right_col*n,bottomRow:r-t.bottom_row*r}},n.displayFaceBox=function(e){n.setState({box:e})},n.onInputChange=function(e){n.setState({input:e.target.value})},n.onButtonSubmit=function(){var e=n.state,t=e.input,a=e.user;if(t){if(!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(t))return void n.setState({isModalOpen:!0});n.setState({imageUrl:t}),fetch("https://secure-bastion-14247.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:t})}).then((function(e){return e.json()})).then((function(e){e&&fetch("https://secure-bastion-14247.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a.id})}).then((function(e){return e.json()})).then((function(e){n.setState(Object.assign(a,{entries:e}))})).catch((function(e){n.setState({isModalOpen:!0}),console.log(e)})),n.displayFaceBox(n.calculateFaceLocation(e))})).catch((function(e){n.setState({isModalOpen:!0}),console.log(e)}))}else n.setState({isModalOpen:!0})},n.closeModal=function(){n.setState({isModalOpen:!1})},n.signOut=function(){"/smartbrain/home"===n.props.location.pathname&&n.setState(U)},n.state=U,n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.imageUrl,n=t.box,i=t.user,s=i.id,o=i.name,l=i.entries,c=t.isModalOpen;return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{className:"particles",params:I}),r.a.createElement(p,{signOut:this.signOut}),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/smartbrain/home",render:function(){return""!==s?r.a.createElement(T,{name:o,entries:l,imageUrl:a,box:n,isModalOpen:c,closeModal:e.closeModal,onInputChange:e.onInputChange,onButtonSubmit:e.onButtonSubmit}):r.a.createElement(u.a,{to:"/smartbrain/signin"})}}),r.a.createElement(u.b,{path:"/smartbrain/signin",render:function(t){var a=t.history;return r.a.createElement(E,{loadUser:e.loadUser,history:a})}}),r.a.createElement(u.b,{exact:!0,path:"/smartbrain/"},r.a.createElement(u.a,{to:"/smartbrain/signin"})),r.a.createElement(u.b,{path:"/smartbrain/register"},r.a.createElement(y,{loadUser:this.loadUser,history:this.props.history})),r.a.createElement(u.b,{render:function(){return r.a.createElement(u.a,{to:{pathname:"/smartbrain/signin"}})}})))}}]),a}(r.a.Component),F=Object(u.h)(_),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(42);s.a.render(r.a.createElement(d.a,null,r.a.createElement(F,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/smartbrain",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/smartbrain","/service-worker.js");P?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.585390a2.chunk.js.map