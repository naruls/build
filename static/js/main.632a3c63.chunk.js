(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(19),o=n.n(c),i=(n(29),n(17)),r=n(13),u=n(2),l=s.a.createContext(),p=n(0);var d=function(e){var t=s.a.useContext(l),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),c="".concat(n?"element__delete-button":"element__delete-button element__delete-button_hidden"),o="".concat(a?"element__like-button element__like-button_active":"element__like-button");return Object(p.jsxs)("div",{className:"element",children:[Object(p.jsx)("div",{className:"element__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(p.jsx)("button",{type:"button",className:c,onClick:function(){e.onCardDelete(e.card)}}),Object(p.jsxs)("div",{className:"element__bottom",children:[Object(p.jsx)("h2",{className:"element__name",children:e.card.name}),Object(p.jsxs)("div",{className:"element__like-place",children:[Object(p.jsx)("button",{type:"button",className:o,onClick:function(){e.onCardLike(e.card)}}),Object(p.jsx)("p",{className:"element__like-count",children:e.card.likes.length})]})]})]})};var j=function(e){return Object(p.jsxs)("header",{className:"header background",children:[Object(p.jsx)("div",{className:"header__logo"}),Object(p.jsx)("div",{className:"header__email",children:e.currentEmail}),Object(p.jsx)("div",{className:"header__exit",onClick:e.signOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var h=function(){return Object(p.jsx)("footer",{className:"footer background",children:Object(p.jsx)("p",{className:"footer__copyringht",children:"\xa9 2020 Mesto Russia"})})};var m=function(e){var t=s.a.useContext(l);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j,{currentEmail:e.currentEmail,signOut:e.signOut}),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsxs)("section",{className:"profile background",children:[Object(p.jsx)("img",{src:t.avatar,className:"profile__avatar",alt:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"}),Object(p.jsx)("div",{className:"profile__frontground",onClick:e.onEditAvatar}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__top-info",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{className:"profile__change-button",type:"button",onClick:e.onEditProfile})]}),Object(p.jsx)("p",{className:"profile__description",children:t.about})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"elements background"}),Object(p.jsx)("div",{id:"card-template",children:e.cards.map((function(t){return Object(p.jsx)(d,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]}),Object(p.jsx)(h,{})]})},b=n(8),_=n(3);var f=Object(_.h)((function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(u.a)(o,2),r=i[0],l=i[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("header",{className:"header background",children:[Object(p.jsx)("div",{className:"header__logo"}),Object(p.jsx)(b.b,{to:"sign-up",className:"header__regisiterButton",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(p.jsx)("main",{className:"sign",children:Object(p.jsxs)("div",{className:"sign__window",children:[Object(p.jsx)("h2",{className:"sign__name",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"sign__form",onSubmit:function(t){t.preventDefault(),e.loginAuth(a,r)},children:[Object(p.jsx)("input",{type:"email",className:"sign__email",placeholder:"Email",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(p.jsx)("input",{type:"password",className:"sign__password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:r,onChange:function(e){l(e.target.value)},required:!0}),Object(p.jsx)("button",{className:"sign__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})]})}));var O=Object(_.h)((function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(u.a)(o,2),r=i[0],l=i[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("header",{className:"header background",children:[Object(p.jsx)("div",{className:"header__logo"}),Object(p.jsx)(b.b,{to:"sign-in",className:"header__loginButton",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(p.jsx)("main",{className:"sign",children:Object(p.jsxs)("div",{className:"sign__window",children:[Object(p.jsx)("h2",{className:"sign__name",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{className:"sign__form",onSubmit:function(t){t.preventDefault(),e.regiserAuth(a,r)},children:[Object(p.jsx)("input",{type:"email",className:"sign__email",placeholder:"Email",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(p.jsx)("input",{type:"password",className:"sign__password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:r,onChange:function(e){l(e.target.value)},required:!0}),Object(p.jsx)("button",{className:"sign__button",children:"\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("p",{className:"sign__inform",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(p.jsx)(b.b,{to:"sign-in",className:"sign__inform-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})]})})),g=n(22),x=n(23),v=new(function(){function e(t){Object(g.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(x.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.likeCard(e):this.dislikeCard(e)}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"09fddbd8-b63c-4352-8240-79b061fd7f20","Content-Type":"application/json"}}),N=n.p+"static/media/Close_Icon.44bb1e48.svg";var C=function(e){return Object(p.jsxs)("section",{className:e.isOpen?"popup popup_hidden popup_".concat(e.name," popup_active"):"popup popup_hidden popup_".concat(e.name),children:[Object(p.jsx)("div",{className:"popup__background"}),Object(p.jsx)("button",{type:"button",className:"popup__close-button popup__close-button-change",children:Object(p.jsx)("img",{src:N,className:"popup__close-image",alt:"\u043a\u043d\u043e\u043f\u043a\u0430",onClick:e.onClose})}),Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("h2",{className:"popup__info",children:e.title}),Object(p.jsxs)("form",{name:"".concat(e.formName),className:"popup__form form popup__info-form",noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(p.jsx)("button",{className:"popup__save-button popup__submit",type:"submit",name:"save-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})]})};var k=function(e){var t=s.a.useContext(l),n=s.a.useState(""),a=Object(u.a)(n,2),c=a[0],o=a[1],i=s.a.useState(""),r=Object(u.a)(i,2),d=r[0],j=r[1];return s.a.useEffect((function(){o(t.name),j(t.about)}),[e.isOpen,t]),Object(p.jsx)(C,{name:"change",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",formName:"popupForm",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:d})},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{id:"profile-name",type:"text",className:"popup__input popup__input_user_name",name:"name",required:!0,minLength:"2",maxLength:"40",value:c||"",onChange:function(e){o(e.target.value)}}),Object(p.jsx)("span",{id:"profile-name-error",className:"popup__input-error"}),Object(p.jsx)("input",{id:"profile-description",type:"text",className:"popup__input popup__input_user_description",name:"description",required:!0,minLength:"2",maxLength:"200",value:d||"",onChange:function(e){j(e.target.value)}}),Object(p.jsx)("span",{id:"profile-description-error",className:"popup__input-error"})]})})};var y=function(e){var t=s.a.useRef();return Object(p.jsx)(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",formName:"popupAvatarForm",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{id:"avatar-description",type:"url",className:"popup__input popup__input_avatar_link",name:"avatarDescription",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t,required:!0}),Object(p.jsx)("span",{id:"avatar-description-error",className:"popup__input-error"})]})})};var S=function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(u.a)(o,2),r=i[0],l=i[1];return Object(p.jsx)(C,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",formName:"popupCardForm",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddNewCard({link:r,name:a})},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{id:"mesto-name",type:"text",className:"popup__input popup__input_mesto_name",name:"mestoName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",value:a,onChange:function(e){c(e.target.value)}}),Object(p.jsx)("span",{id:"mesto-name-error",className:"popup__input-error"}),Object(p.jsx)("input",{id:"mesto-description",type:"url",className:"popup__input popup__input_mesto_link",name:"mestoDescription",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:r,onChange:function(e){l(e.target.value)},required:!0}),Object(p.jsx)("span",{id:"mesto-description-error",className:"popup__input-error"})]})})},E=n(24),U=["component"],D=function(e){var t=e.component,n=Object(E.a)(e,U);return Object(p.jsx)(_.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(r.a)({},n)):Object(p.jsx)(_.a,{to:"./sign-in"})}})},T=n.p+"static/media/succesReg.a9eb6caf.svg",A=n.p+"static/media/unsuccesReg.d4ce2a26.svg";var I=function(e){return Object(p.jsxs)("section",{className:e.isInfoTooltipOpen?"popup":" popup popup_hidden",children:[Object(p.jsx)("div",{className:"popup__background"}),Object(p.jsx)("button",{type:"button",className:"popup__close-button",children:Object(p.jsx)("img",{src:N,className:"popup__close-image",alt:"\u043a\u043d\u043e\u043f\u043a\u0430",onClick:e.onClose})}),Object(p.jsxs)("div",{className:"popup__InfoTooltip-block",children:[Object(p.jsx)("img",{className:"popup__InfoTooltip-icon",src:e.succesRegister?"".concat(T):"".concat(A),alt:e.succesRegister?"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsx)("p",{className:"popup__InfoTooltip-text",children:e.succesRegister?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})},w="https://auth.nomoreparties.co";var R=function(e){return Object(p.jsxs)("section",{className:e.isOpen?"popup popup_main popup_hidden popup_active":"popup popup_main popup_hidden",children:[Object(p.jsx)("div",{className:"popup__background popup__background_main"}),Object(p.jsxs)("div",{className:"popup__full",children:[Object(p.jsx)("button",{className:"popup__close-button popup__close-button_main",children:Object(p.jsx)("img",{src:N,className:"popup__close-image",alt:"\u043a\u043d\u043e\u043f\u043a\u0430",onClick:e.onClose})}),Object(p.jsx)("img",{src:e.card.link,className:"popup__card",alt:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0444\u043e\u0442\u043e"}),Object(p.jsx)("h2",{className:"popup__name",children:e.card.name})]})]})};var L=Object(_.h)((function(e){var t=s.a.useState(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=s.a.useState(!1),d=Object(u.a)(o,2),j=d[0],h=d[1],b=s.a.useState(!1),g=Object(u.a)(b,2),x=g[0],N=g[1],C=s.a.useState(!1),E=Object(u.a)(C,2),U=E[0],T=E[1],A=s.a.useState(!1),L=Object(u.a)(A,2),P=L[0],F=L[1],q=s.a.useState({}),J=Object(u.a)(q,2),B=J[0],G=J[1],z=s.a.useState({}),H=Object(u.a)(z,2),M=H[0],V=H[1],K=s.a.useState(!1),Q=Object(u.a)(K,2),W=Q[0],X=Q[1],Y=s.a.useState(!1),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=s.a.useState(!1),ne=Object(u.a)(te,2),ae=ne[0],se=ne[1],ce=Object(_.g)();function oe(){X(!0)}function ie(){T(!1),h(!1),N(!1),F(!1),se(!1),V({})}s.a.useEffect((function(){v.getUserInfo().then((function(e){G(Object(r.a)({},e))})).catch((function(e){console.log(e)}))}),[]);var re=s.a.useState([]),ue=Object(u.a)(re,2),le=ue[0],pe=ue[1];return s.a.useEffect((function(){v.getInitialCards().then((function(e){pe(Object(i.a)(e))})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(w,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){e&&(c(e.data.email),oe(),ce.push("/"))})).catch((function(e){console.log(e)}))}),[]),Object(p.jsxs)(l.Provider,{value:B,children:[Object(p.jsxs)(_.d,{children:[Object(p.jsx)(D,{exact:!0,path:"/",loggedIn:W,component:m,onEditAvatar:function(){T(!0)},onAddPlace:function(){N(!0)},onEditProfile:function(){h(!0)},onCardClick:function(e){V(e),F(!0)},onClose:ie,cards:le,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===B._id}));v.changeLikeCardStatus(e._id,!t).then((function(t){pe((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){v.deleteCard(e._id).then((function(){pe((function(t){return t.filter((function(t){return t!==e}))}))})).catch((function(e){console.log(e)}))},currentEmail:a,signOut:function(){localStorage.removeItem("jwt"),ce.push("/sign-in")}}),Object(p.jsx)(_.b,{path:"/sign-up",children:Object(p.jsx)(O,{setInfoTooltipOpen:se,setSuccesRegister:ee,regiserAuth:function(e,t){(function(e,t){return fetch("".concat(w,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){console.log(e);try{if(201===e.status)return e.json()}catch(t){return t}})).then((function(e){return e}))})(e,t).then((function(e){e?(ce.push("/sign-in"),se(!0),ee(!0)):(se(!0),ee(!1))})).catch((function(e){console.log(e)}))}})}),Object(p.jsx)(_.b,{path:"/sign-in",children:Object(p.jsx)(f,{handleLogin:oe,loginAuth:function(e,t){(function(e,t){return fetch("".concat(w,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(t){t.token&&(c(e),oe(),ce.push("/mesto"))})).catch((function(e){return console.log(e)}))}})}),Object(p.jsx)(_.b,{path:"/",children:W?Object(p.jsx)(_.a,{to:"/"}):Object(p.jsx)(_.a,{to:"/sign-in"})})]}),Object(p.jsx)(k,{isOpen:j,onClose:ie,onUpdateUser:function(e){v.setUserInfo(e).then((function(e){G(e),ie()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(y,{isOpen:U,onClose:ie,onUpdateAvatar:function(e){v.setUserAvatar(e).then((function(e){G(e),ie()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(S,{isOpen:x,onClose:ie,onAddNewCard:function(e){v.postCard(e).then((function(e){pe([e].concat(Object(i.a)(le))),ie()})).catch((function(e){console.log(e)}))}}),Object(p.jsx)(I,{isInfoTooltipOpen:ae,onClose:ie,succesRegister:$}),Object(p.jsx)(R,{isOpen:P,onClose:ie,card:M})]})})),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(L,{})})}),document.getElementById("root")),P()}},[[36,1,2]]]);
//# sourceMappingURL=main.632a3c63.chunk.js.map