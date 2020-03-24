(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1157:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));t(145);var n=t(33),i=t.n(n),s=t(7),l=t.n(s),o=t(1131),r=t(1129);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class p extends l.a.PureComponent{render(){return l.a.createElement("div",{id:"back_button",className:"signup-header"},l.a.createElement(r.a,{onClick:this.props.onClick,to:this.props.url},l.a.createElement(o.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>l.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),l.a.createElement(o.a,{id:"web.header.back",defaultMessage:"Back"})))}}c(p,"propTypes",{url:i.a.string,onClick:i.a.func}),c(p,"defaultProps",{url:"/"})},1163:function(e,a,t){e.exports=t.p+"files/87b80d01a017833f1357800bfca49cea.png"},1993:function(e,a,t){"use strict";t.r(a);t(177),t(34),t(612);var n=t(322),i=t(6),s=t(15),l=t(10),o=t(179),r=t(120),c=t(82),p=t(1215),u=(t(55),t(145),t(33)),m=t.n(u),d=t(7),g=t.n(d),h=t(1131),b=t(1129),f=t(18),E=t(98),v=t(1145),S=t(1163),L=t.n(S),_=t(1206),w=t(1157),I=t(1154),N=t(1162),U=t(1144),A=t(0),O=t(27);function T(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class k extends g.a.Component{constructor(e){super(e),T(this,"addUserToTeamFromInvite",async(e,a)=>{const{data:t,error:n}=await this.props.actions.addUserToTeamFromInvite(e,a);t?E.a.push("/"+t.name+"/channels/".concat(A.j.DEFAULT_CHANNEL)):n&&this.handleInvalidInvite(n)}),T(this,"getInviteInfo",async e=>{const{data:a,error:t}=await this.props.actions.getTeamInviteInfo(e);a?this.setState({serverError:"",loading:!1}):t&&this.handleInvalidInvite(t)}),T(this,"handleInvalidInvite",e=>{let a;a="store.sql_user.save.max_accounts.app_error"===e.server_error_id||"api.team.add_user_to_team_from_invite.guest.app_error"===e.server_error_id?e.message:g.a.createElement(h.a,{id:"signup_user_completed.invalid_invite",defaultMessage:"The invite link was invalid.  Please speak with your Administrator to receive an invitation."}),this.setState({noOpenServerError:!0,loading:!1,serverError:a})}),T(this,"renderSignupControls",()=>{let e=[];if(this.props.enableSignUpWithEmail&&e.push(g.a.createElement(b.a,{className:"btn btn-custom-login btn--full email",key:"email",to:"/signup_email"+window.location.search},g.a.createElement("span",null,g.a.createElement(N.a,{className:"icon fa fa-envelope",component:"span",title:{id:Object(O.b)("signup.email.icon"),defaultMessage:"Email Icon"}}),g.a.createElement(h.a,{id:"signup.email",defaultMessage:"Email and Password"})))),this.props.enableSignUpWithGitLab&&e.push(g.a.createElement("a",{className:"btn btn-custom-login btn--full gitlab",key:"gitlab",href:f.Client4.getOAuthRoute()+"/gitlab/signup"+window.location.search},g.a.createElement("span",null,g.a.createElement("span",{className:"icon"}),g.a.createElement("span",null,g.a.createElement(h.a,{id:"signup.gitlab",defaultMessage:"GitLab Single Sign-On"}))))),this.props.isLicensed&&this.props.enableSignUpWithGoogle&&e.push(g.a.createElement("a",{className:"btn btn-custom-login btn--full google",key:"google",href:f.Client4.getOAuthRoute()+"/google/signup"+window.location.search},g.a.createElement("span",null,g.a.createElement("span",{className:"icon"}),g.a.createElement("span",null,g.a.createElement(h.a,{id:"signup.google",defaultMessage:"Google Account"}))))),this.props.isLicensed&&this.props.enableSignUpWithOffice365&&e.push(g.a.createElement("a",{className:"btn btn-custom-login btn--full office365",key:"office365",href:f.Client4.getOAuthRoute()+"/office365/signup"+window.location.search},g.a.createElement("span",null,g.a.createElement("span",{className:"icon"}),g.a.createElement("span",null,g.a.createElement(h.a,{id:"signup.office365",defaultMessage:"Office 365"}))))),this.props.isLicensed&&this.props.enableLDAP){const a=new URLSearchParams(this.props.location.search);a.append("extra","create_ldap");const t="?"+a.toString();let n=g.a.createElement(h.a,{id:"signup.ldap",defaultMessage:"AD/LDAP Credentials"});this.props.ldapLoginFieldName&&(n=this.props.ldapLoginFieldName),e.push(g.a.createElement(b.a,{className:"btn btn-custom-login btn--full ldap",key:"ldap",to:"/login"+t},g.a.createElement("span",null,g.a.createElement(N.a,{className:"icon fa fa-folder-open fa--margin-top",component:"span",title:{id:Object(O.b)("signup.ldap.icon"),defaultMessage:"AD/LDAP Icon"}}),g.a.createElement("span",null,n))))}if(this.props.isLicensed&&this.props.enableSAML){let a="";a=window.location.search?"&action=signup":"?action=signup",e.push(g.a.createElement(b.a,{className:"btn btn-custom-login btn--full saml",key:"saml",to:"/login/sso/saml"+window.location.search+a},g.a.createElement("span",null,g.a.createElement(N.a,{className:"icon fa fa-lock fa--margin-top",component:"span",title:{id:Object(O.b)("signup.saml.icon"),defaultMessage:"SAML Icon"}}),g.a.createElement("span",null,this.props.samlLoginButtonText))))}if(0===e.length){const a=g.a.createElement(h.a,{id:"signup_user_completed.none",defaultMessage:"No user creation method has been enabled. Please contact an administrator for access."});e=g.a.createElement(I.a,{error:a,margin:!0})}else if(1===e.length){if(this.props.enableSignUpWithEmail)return E.a.push("/signup_email"+window.location.search);if(this.props.isLicensed&&this.props.enableLDAP)return E.a.push("/login"+window.location.search)}return e});let a=!1,t="",n=!1,i=!1;if(this.props.location.search){const s=new URLSearchParams(this.props.location.search);let l=s.get("t");null==l&&(l="");let o=s.get("id");null==o&&(o=""),o?a=!0:this.props.loggedIn?o||this.props.enableOpenServer||this.props.noAccounts||(n=!0,t=g.a.createElement(h.a,{id:"signup_user_completed.no_open_server",defaultMessage:"This server does not allow open signups.  Please speak with your Administrator to receive an invitation."})):i=e.usedBefore}this.state={loading:a,serverError:t,noOpenServerError:n,usedBefore:i}}componentDidMount(){if(this.props.actions.removeGlobalItem("team"),this.props.location.search){const e=new URLSearchParams(this.props.location.search),a=e.get("t")||"",t=e.get("id")||"",n=this.props.loggedIn;(t||a)&&n?this.addUserToTeamFromInvite(a,t):t?this.getInviteInfo(t):n&&v.f()}}render(){if(this.state.loading)return g.a.createElement(U.a,null);if(this.state.usedBefore)return g.a.createElement("div",null,g.a.createElement(h.a,{id:"signup_user_completed.expired",defaultMessage:"You've already completed the signup process for this invitation or this invitation has expired."}));let e,a=null;return this.state.serverError&&(a=g.a.createElement("div",{className:"form-group has-error"},g.a.createElement("label",{className:"control-label"},this.state.serverError))),e=this.state.noOpenServerError||this.state.usedBefore?null:this.renderSignupControls(),g.a.createElement("div",null,g.a.createElement(_.a,null),g.a.createElement(w.a,null),g.a.createElement("div",{className:"col-sm-12"},g.a.createElement("div",{className:"signup-team__container"},g.a.createElement("img",{alt:"signup team logo",className:"signup-team-logo",src:L.a}),g.a.createElement("div",{className:"signup__content"},g.a.createElement("h1",null,this.props.siteName),g.a.createElement("h4",{className:"color--light"},g.a.createElement(h.a,{id:"web.root.signup_info"})),g.a.createElement("div",{className:"margin--extra"},g.a.createElement("h5",null,g.a.createElement("strong",null,g.a.createElement(h.a,{id:"signup.title",defaultMessage:"Create an account with:"})))),e,a),g.a.createElement("span",{className:"color--light"},g.a.createElement(h.a,{id:"signup_user_completed.haveAccount",defaultMessage:"Already have an account?"})," ",g.a.createElement(b.a,{to:"/login"+this.props.location.search},g.a.createElement(h.a,{id:"signup_user_completed.signIn",defaultMessage:"Click here to sign in."}))))))}}T(k,"propTypes",{location:m.a.object,loggedIn:m.a.bool.isRequired,isLicensed:m.a.bool.isRequired,enableOpenServer:m.a.bool.isRequired,noAccounts:m.a.bool.isRequired,enableSignUpWithEmail:m.a.bool.isRequired,enableSignUpWithGitLab:m.a.bool.isRequired,enableSignUpWithGoogle:m.a.bool.isRequired,enableSignUpWithOffice365:m.a.bool.isRequired,enableLDAP:m.a.bool.isRequired,enableSAML:m.a.bool.isRequired,samlLoginButtonText:m.a.string,siteName:m.a.string,usedBefore:m.a.string,ldapLoginFieldName:m.a.string.isRequired,actions:m.a.shape({removeGlobalItem:m.a.func.isRequired,getTeamInviteInfo:m.a.func.isRequired,addUserToTeamFromInvite:m.a.func.isRequired}).isRequired});a.default=Object(n.connect)((function(e,a){const t=Object(s.getLicense)(e),n=Object(s.getConfig)(e),i=t&&"true"===t.IsLicensed,o="true"===n.EnableOpenServer,c="true"===n.NoAccounts,p="true"===n.EnableSignUpWithEmail,u="true"===n.EnableSignUpWithGitLab,m="true"===n.EnableSignUpWithGoogle,d="true"===n.EnableSignUpWithOffice365,g="true"===n.EnableLdap,h="true"===n.EnableSaml,b=n.SamlLoginButtonText,f=n.LdapLoginFieldName,E=n.SiteName;let v;if(a.location.search){let t=new URLSearchParams(a.location.search).get("t");null==t&&(t=""),v=Object(r.a)(e,t,null)}return{loggedIn:Boolean(Object(l.getCurrentUserId)(e)),isLicensed:i,enableOpenServer:o,noAccounts:c,enableSignUpWithEmail:p,enableSignUpWithGitLab:u,enableSignUpWithGoogle:m,enableSignUpWithOffice365:d,enableLDAP:g,enableSAML:h,samlLoginButtonText:b,ldapLoginFieldName:f,siteName:E,usedBefore:v}}),(function(e){return{actions:Object(i.bindActionCreators)({removeGlobalItem:c.c,getTeamInviteInfo:o.getTeamInviteInfo,addUserToTeamFromInvite:p.b},e)}}))(k)}}]);
//# sourceMappingURL=19.6902e41449b611d01629.js.map