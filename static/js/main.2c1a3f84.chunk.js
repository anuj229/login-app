(this["webpackJsonpauthentication-app"]=this["webpackJsonpauthentication-app"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),c=a(13),r=a.n(c),i=(a(20),a(10)),o=(a(21),a(24),a(3)),u=function(e){var t=e.email,a=e.setEmail,n=e.password,s=e.setPassword,c=e.emailError,r=(e.setEmailError,e.setPasswordError,e.handleLogin),i=e.handleSignup,u=(e.handleLogout,e.hasAccount),l=e.setHasAccount,d=e.passwordError;return Object(o.jsx)("section",{className:"login",children:Object(o.jsxs)("section",{className:"loginContainer",children:[Object(o.jsx)("label",{children:"User Email"}),Object(o.jsx)("input",{type:"text",required:!0,value:t,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("p",{className:"errorMsg",children:c}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("p",{className:"errorMsg",children:d}),Object(o.jsx)("div",{className:"btnContainer",children:u?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:r,children:"Sign in"}),Object(o.jsxs)("p",{children:["Dont have a account?",Object(o.jsx)("span",{onClick:function(){return l(!u)},children:"Sign up"})]})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:i,children:"Sign up"}),Object(o.jsxs)("p",{children:["Already have an account?",Object(o.jsx)("span",{onClick:function(){return l(!u)},children:"Sign in"})]})]})})]})})},l=a(16).a.initializeApp({apiKey:"AIzaSyD5sNkXaaFQwAqW7Nh6TaInPCAOaIYJl2Y",authDomain:"login-bf59f.firebaseapp.com",projectId:"login-bf59f",storageBucket:"login-bf59f.appspot.com",messagingSenderId:"7535776192",appId:"1:7535776192:web:4a5e7bd9503205cbfbb825"}),d=function(e){var t=e.handleLogout;return Object(o.jsx)("div",{className:"hero",children:Object(o.jsxs)("nav",{children:[Object(o.jsx)("h2",{children:"welcome"}),Object(o.jsx)("button",{onClick:t,children:"Logout"})]})})};var j=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(i.a)(c,2),j=r[0],h=r[1],b=Object(n.useState)(""),p=Object(i.a)(b,2),O=p[0],g=p[1],m=Object(n.useState)(""),f=Object(i.a)(m,2),x=f[0],w=f[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),S=E[0],A=E[1],k=Object(n.useState)(!1),C=Object(i.a)(k,2),N=C[0],I=C[1];console.log(a);var P=function(){w(""),A("")},y=function(){l.auth().signOut()},L=function(){l.auth().onAuthStateChanged((function(e){e?(h(""),g(""),s(e)):s("")}))};return Object(n.useEffect)((function(){L()}),[]),Object(o.jsx)("div",{className:"App",children:a?Object(o.jsx)(d,{handleLogout:y}):Object(o.jsx)(u,{email:j,setEmail:h,password:O,setPassword:g,emailError:x,setEmailError:w,setPasswordError:A,handleLogin:function(){P(),l.auth().signInWithEmailAndPassword(j,O).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":w(e.message);break;case"auth/wrong-password":A(e.message)}}))},handleSignup:function(){P(),l.auth().createUserWithEmailAndPassword(j,O).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":w(e.message);break;case"auth/weak-password":A(e.message)}}))},handleLogout:y,hasAccount:N,setHasAccount:I,passwordError:S})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2c1a3f84.chunk.js.map