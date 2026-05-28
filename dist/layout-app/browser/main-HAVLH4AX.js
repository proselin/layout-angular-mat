import{c as Yt,d as st,f as Be,g as ct}from"./chunk-MLMGL4QO.js";import{A as ka,B as Sa,C as Ye,D as ee,E as Ma,F as Ra,G as Nn,H as Ln,I as Ea,K as Fn,L as Xe,M as ke,N as Da,O as It,P as Aa,Q as Bi,R as Ta,S as Oa,T as Pa,U as Oe,V as Na,W as La,a as la,b as Kt,c as da,d as kt,e as ma,f as ha,g as Ui,h as ua,i as pa,j as ga,k as fa,l as va,m as Ke,n as Xt,o as Tn,p as St,q as _a,r as Mt,s as ba,t as ya,u as wa,v as On,w as xa,x as Ca,y as Pn,z as Rt}from"./chunk-DTITCEQB.js";import{a as Ia,b as K}from"./chunk-2ZXTTA47.js";import{$ as Qe,$a as En,$b as ca,A as Qt,Aa as Kr,Ab as Y,B as Ur,Bb as x,C as ve,Cb as be,D as Ei,Db as Ce,Eb as S,F as xn,Fb as M,G as qe,Gb as zi,H as Di,Hb as Te,I as Br,Ib as k,Jb as Ze,K as ot,Kb as L,L as xe,La as bt,Lb as W,M as oe,Ma as Yr,N as ne,Na as f,Nb as ye,O as H,Ob as ji,P as Hr,Pb as ra,Q as R,Qb as F,R as T,Ra as Mn,Rb as An,S as $r,Sa as yt,Sb as aa,T as w,Ta as Xr,Tb as xt,U as le,Ua as Jr,Ub as oa,V as c,Va as De,Vb as sa,W as Cn,Wa as Ae,Wb as he,Xa as Rn,Y as ze,Ya as In,Yb as ie,Z as de,Zb as Ct,_ as We,_a as ea,a as m,aa as _t,ab as b,b as ce,ba as Ai,bb as P,ca as Ee,cb as E,d as Re,da as J,db as _e,e as Nr,ea as je,eb as Gt,f as Lr,fa as Vr,fb as ta,g as B,ga as j,gb as na,h as fe,ha as se,hb as Oi,i as ae,ia as kn,ib as Pi,j as X,ja as Sn,jb as Ni,k as p,ka as qr,kb as D,l as yn,la as y,lb as $,m as Ri,ma as Wr,mb as V,n as Fr,nb as Li,o as I,oa as Ue,ob as Fi,p as Ii,pa as me,pb as Z,q as Ie,qa as Qr,qb as u,r as Wt,ra as O,rb as g,s as zr,sa as Ti,sb as A,t as wn,tb as wt,u as jr,ub as Zt,vb as ia,w as ft,wb as Dn,x as G,xa as Gr,xb as Ge,yb as q,z as vt,za as Zr,zb as U}from"./chunk-RBZSDZH4.js";var v="primary",hn=Symbol("RouteTitle"),Wi=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function dt(n){return new Wi(n)}function Hi(n,r,e){for(let t=0;t<n.length;t++){let i=n[t],a=r[t];if(i[0]===":")e[i.substring(1)]=a;else if(i!==a.path)return!1}return!0}function $a(n,r,e){let t=e.path.split("/"),i=t.indexOf("**");if(i===-1){if(t.length>n.length||e.pathMatch==="full"&&(r.hasChildren()||t.length<n.length))return null;let l={},d=n.slice(0,t.length);return Hi(t,d,l)?{consumed:d,posParams:l}:null}if(i!==t.lastIndexOf("**"))return null;let a=t.slice(0,i),o=t.slice(i+1);if(a.length+o.length>n.length||e.pathMatch==="full"&&r.hasChildren()&&e.path!=="**")return null;let s={};return!Hi(a,n.slice(0,a.length),s)||!Hi(o,n.slice(n.length-o.length),s)?null:{consumed:n,posParams:s}}function $n(n){return new Promise((r,e)=>{n.pipe(qe()).subscribe({next:t=>r(t),error:t=>e(t)})})}function xs(n,r){if(n.length!==r.length)return!1;for(let e=0;e<n.length;++e)if(!Pe(n[e],r[e]))return!1;return!0}function Pe(n,r){let e=n?Qi(n):void 0,t=r?Qi(r):void 0;if(!e||!t||e.length!=t.length)return!1;let i;for(let a=0;a<e.length;a++)if(i=e[a],!Va(n[i],r[i]))return!1;return!0}function Qi(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Va(n,r){if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;let e=[...n].sort(),t=[...r].sort();return e.every((i,a)=>t[a]===i)}else return n===r}function Cs(n){return n.length>0?n[n.length-1]:null}function ht(n){return Ri(n)?n:na(n)?X(Promise.resolve(n)):p(n)}function qa(n){return Ri(n)?$n(n):Promise.resolve(n)}var ks={exact:Qa,subset:Ga},Wa={exact:Ss,subset:Ms,ignored:()=>!0},sr={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},rn={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function cr(n,r,e){let t=n instanceof re?n:r.parseUrl(n);return An(()=>Gi(r.lastSuccessfulNavigation()?.finalUrl??new re,t,m(m({},rn),e)))}function Gi(n,r,e){return ks[e.paths](n.root,r.root,e.matrixParams)&&Wa[e.queryParams](n.queryParams,r.queryParams)&&!(e.fragment==="exact"&&n.fragment!==r.fragment)}function Ss(n,r){return Pe(n,r)}function Qa(n,r,e){if(!lt(n.segments,r.segments)||!Un(n.segments,r.segments,e)||n.numberOfChildren!==r.numberOfChildren)return!1;for(let t in r.children)if(!n.children[t]||!Qa(n.children[t],r.children[t],e))return!1;return!0}function Ms(n,r){return Object.keys(r).length<=Object.keys(n).length&&Object.keys(r).every(e=>Va(n[e],r[e]))}function Ga(n,r,e){return Za(n,r,r.segments,e)}function Za(n,r,e,t){if(n.segments.length>e.length){let i=n.segments.slice(0,e.length);return!(!lt(i,e)||r.hasChildren()||!Un(i,e,t))}else if(n.segments.length===e.length){if(!lt(n.segments,e)||!Un(n.segments,e,t))return!1;for(let i in r.children)if(!n.children[i]||!Ga(n.children[i],r.children[i],t))return!1;return!0}else{let i=e.slice(0,n.segments.length),a=e.slice(n.segments.length);return!lt(n.segments,i)||!Un(n.segments,i,t)||!n.children[v]?!1:Za(n.children[v],r,a,t)}}function Un(n,r,e){return r.every((t,i)=>Wa[e](n[i].parameters,t.parameters))}var re=class{root;queryParams;fragment;_queryParamMap;constructor(r=new C([],{}),e={},t=null){this.root=r,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=dt(this.queryParams),this._queryParamMap}toString(){return Es.serialize(this)}},C=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Bn(this)}},Je=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=dt(this.parameters),this._parameterMap}toString(){return Ya(this)}};function Rs(n,r){return lt(n,r)&&n.every((e,t)=>Pe(e.parameters,r[t].parameters))}function lt(n,r){return n.length!==r.length?!1:n.every((e,t)=>e.path===r[t].path)}function Is(n,r){let e=[];return Object.entries(n.children).forEach(([t,i])=>{t===v&&(e=e.concat(r(i,t)))}),Object.entries(n.children).forEach(([t,i])=>{t!==v&&(e=e.concat(r(i,t)))}),e}var nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:()=>new $e,providedIn:"root"})}return n})(),$e=class{parse(r){let e=new Ki(r);return new re(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${Jt(r.root,!0)}`,t=Ts(r.queryParams),i=typeof r.fragment=="string"?`#${Ds(r.fragment)}`:"";return`${e}${t}${i}`}},Es=new $e;function Bn(n){return n.segments.map(r=>Ya(r)).join("/")}function Jt(n,r){if(!n.hasChildren())return Bn(n);if(r){let e=n.children[v]?Jt(n.children[v],!1):"",t=[];return Object.entries(n.children).forEach(([i,a])=>{i!==v&&t.push(`${i}:${Jt(a,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=Is(n,(t,i)=>i===v?[Jt(n.children[v],!1)]:[`${i}:${Jt(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[v]!=null?`${Bn(n)}/${e[0]}`:`${Bn(n)}/(${e.join("//")})`}}function Ka(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function zn(n){return Ka(n).replace(/%3B/gi,";")}function Ds(n){return encodeURI(n)}function Zi(n){return Ka(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Hn(n){return decodeURIComponent(n)}function Fa(n){return Hn(n.replace(/\+/g,"%20"))}function Ya(n){return`${Zi(n.path)}${As(n.parameters)}`}function As(n){return Object.entries(n).map(([r,e])=>`;${Zi(r)}=${Zi(e)}`).join("")}function Ts(n){let r=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(i=>`${zn(e)}=${zn(i)}`).join("&"):`${zn(e)}=${zn(t)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var Os=/^[^\/()?;#]+/;function $i(n){let r=n.match(Os);return r?r[0]:""}var Ps=/^[^\/()?;=#]+/;function Ns(n){let r=n.match(Ps);return r?r[0]:""}var Ls=/^[^=?&#]+/;function Fs(n){let r=n.match(Ls);return r?r[0]:""}var zs=/^[^&#]+/;function js(n){let r=n.match(zs);return r?r[0]:""}var Ki=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new C([],{}):new C([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new H(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,r));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,r)),(e.length>0||Object.keys(t).length>0)&&(i[v]=new C(e,t)),i}parseSegment(){let r=$i(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new H(4009,!1);return this.capture(r),new Je(Hn(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=Ns(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let i=$i(this.remaining);i&&(t=i,this.capture(t))}r[Hn(e)]=Hn(t)}parseQueryParam(r){let e=Fs(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=js(this.remaining);o&&(t=o,this.capture(t))}let i=Fa(e),a=Fa(t);if(r.hasOwnProperty(i)){let o=r[i];Array.isArray(o)||(o=[o],r[i]=o),o.push(a)}else r[i]=a}parseParens(r,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=$i(this.remaining),a=this.remaining[i.length];if(a!=="/"&&a!==")"&&a!==";")throw new H(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):r&&(o=v);let s=this.parseChildren(e+1);t[o??v]=Object.keys(s).length===1&&s[v]?s[v]:new C([],s),this.consumeOptional("//")}return t}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new H(4011,!1)}};function Xa(n){return n.segments.length>0?new C([],{[v]:n}):n}function Ja(n){let r={};for(let[t,i]of Object.entries(n.children)){let a=Ja(i);if(t===v&&a.segments.length===0&&a.hasChildren())for(let[o,s]of Object.entries(a.children))r[o]=s;else(a.segments.length>0||a.hasChildren())&&(r[t]=a)}let e=new C(n.segments,r);return Us(e)}function Us(n){if(n.numberOfChildren===1&&n.children[v]){let r=n.children[v];return new C(n.segments.concat(r.segments),r.children)}return n}function et(n){return n instanceof re}function eo(n,r,e=null,t=null,i=new $e){let a=to(n);return no(a,r,e,t,i)}function to(n){let r;function e(a){let o={};for(let l of a.children){let d=e(l);o[l.outlet]=d}let s=new C(a.url,o);return a===n&&(r=s),s}let t=e(n.root),i=Xa(t);return r??i}function no(n,r,e,t,i){let a=n;for(;a.parent;)a=a.parent;if(r.length===0)return Vi(a,a,a,e,t,i);let o=Bs(r);if(o.toRoot())return Vi(a,a,new C([],{}),e,t,i);let s=Hs(o,a,n),l=s.processChildren?tn(s.segmentGroup,s.index,o.commands):ro(s.segmentGroup,s.index,o.commands);return Vi(a,s.segmentGroup,l,e,t,i)}function Vn(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function an(n){return typeof n=="object"&&n!=null&&n.outlets}function za(n,r,e){n||="\u0275";let t=new re;return t.queryParams={[n]:r},e.parse(e.serialize(t)).queryParams[n]}function Vi(n,r,e,t,i,a){let o={};for(let[d,h]of Object.entries(t??{}))o[d]=Array.isArray(h)?h.map(_=>za(d,_,a)):za(d,h,a);let s;n===r?s=e:s=io(n,r,e);let l=Xa(Ja(s));return new re(l,o,i)}function io(n,r,e){let t={};return Object.entries(n.children).forEach(([i,a])=>{a===r?t[i]=e:t[i]=io(a,r,e)}),new C(n.segments,t)}var qn=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,t){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=t,r&&t.length>0&&Vn(t[0]))throw new H(4003,!1);let i=t.find(an);if(i&&i!==Cs(t))throw new H(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Bs(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new qn(!0,0,n);let r=0,e=!1,t=n.reduce((i,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...i,{outlets:s}]}if(a.segmentPath)return[...i,a.segmentPath]}return typeof a!="string"?[...i,a]:o===0?(a.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?r++:s!=""&&i.push(s))}),i):[...i,a]},[]);return new qn(e,r,t)}var Dt=class{segmentGroup;processChildren;index;constructor(r,e,t){this.segmentGroup=r,this.processChildren=e,this.index=t}};function Hs(n,r,e){if(n.isAbsolute)return new Dt(r,!0,0);if(!e)return new Dt(r,!1,NaN);if(e.parent===null)return new Dt(e,!0,0);let t=Vn(n.commands[0])?0:1,i=e.segments.length-1+t;return $s(e,i,n.numberOfDoubleDots)}function $s(n,r,e){let t=n,i=r,a=e;for(;a>i;){if(a-=i,t=t.parent,!t)throw new H(4005,!1);i=t.segments.length}return new Dt(t,!1,i-a)}function Vs(n){return an(n[0])?n[0].outlets:{[v]:n}}function ro(n,r,e){if(n??=new C([],{}),n.segments.length===0&&n.hasChildren())return tn(n,r,e);let t=qs(n,r,e),i=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let a=new C(n.segments.slice(0,t.pathIndex),{});return a.children[v]=new C(n.segments.slice(t.pathIndex),n.children),tn(a,0,i)}else return t.match&&i.length===0?new C(n.segments,{}):t.match&&!n.hasChildren()?Yi(n,r,e):t.match?tn(n,0,i):Yi(n,r,e)}function tn(n,r,e){if(e.length===0)return new C(n.segments,{});{let t=Vs(e),i={};if(Object.keys(t).some(a=>a!==v)&&n.children[v]&&n.numberOfChildren===1&&n.children[v].segments.length===0){let a=tn(n.children[v],r,e);return new C(n.segments,a.children)}return Object.entries(t).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(i[a]=ro(n.children[a],r,o))}),Object.entries(n.children).forEach(([a,o])=>{t[a]===void 0&&(i[a]=o)}),new C(n.segments,i)}}function qs(n,r,e){let t=0,i=r,a={match:!1,pathIndex:0,commandIndex:0};for(;i<n.segments.length;){if(t>=e.length)return a;let o=n.segments[i],s=e[t];if(an(s))break;let l=`${s}`,d=t<e.length-1?e[t+1]:null;if(i>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!Ua(l,d,o))return a;t+=2}else{if(!Ua(l,{},o))return a;t++}i++}return{match:!0,pathIndex:i,commandIndex:t}}function Yi(n,r,e){let t=n.segments.slice(0,r),i=0;for(;i<e.length;){let a=e[i];if(an(a)){let l=Ws(a.outlets);return new C(t,l)}if(i===0&&Vn(e[0])){let l=n.segments[r];t.push(new Je(l.path,ja(e[0]))),i++;continue}let o=an(a)?a.outlets[v]:`${a}`,s=i<e.length-1?e[i+1]:null;o&&s&&Vn(s)?(t.push(new Je(o,ja(s))),i+=2):(t.push(new Je(o,{})),i++)}return new C(t,{})}function Ws(n){let r={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(r[e]=Yi(new C([],{}),0,t))}),r}function ja(n){let r={};return Object.entries(n).forEach(([e,t])=>r[e]=`${t}`),r}function Ua(n,r,e){return n==e.path&&Pe(r,e.parameters)}var At="imperative",Q=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(Q||{}),pe=class{id;url;constructor(r,e){this.id=r,this.url=e}},tt=class extends pe{type=Q.NavigationStart;navigationTrigger;restoredState;constructor(r,e,t="imperative",i=null){super(r,e),this.navigationTrigger=t,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ge=class extends pe{urlAfterRedirects;type=Q.NavigationEnd;constructor(r,e,t){super(r,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},te=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(te||{}),Ot=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Ot||{}),we=class extends pe{reason;code;type=Q.NavigationCancel;constructor(r,e,t,i){super(r,e),this.reason=t,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ao(n){return n instanceof we&&(n.code===te.Redirect||n.code===te.SupersededByNewNavigation)}var Ne=class extends pe{reason;code;type=Q.NavigationSkipped;constructor(r,e,t,i){super(r,e),this.reason=t,this.code=i}},mt=class extends pe{error;target;type=Q.NavigationError;constructor(r,e,t,i){super(r,e),this.error=t,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},on=class extends pe{urlAfterRedirects;state;type=Q.RoutesRecognized;constructor(r,e,t,i){super(r,e),this.urlAfterRedirects=t,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wn=class extends pe{urlAfterRedirects;state;type=Q.GuardsCheckStart;constructor(r,e,t,i){super(r,e),this.urlAfterRedirects=t,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qn=class extends pe{urlAfterRedirects;state;shouldActivate;type=Q.GuardsCheckEnd;constructor(r,e,t,i,a){super(r,e),this.urlAfterRedirects=t,this.state=i,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Gn=class extends pe{urlAfterRedirects;state;type=Q.ResolveStart;constructor(r,e,t,i){super(r,e),this.urlAfterRedirects=t,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zn=class extends pe{urlAfterRedirects;state;type=Q.ResolveEnd;constructor(r,e,t,i){super(r,e),this.urlAfterRedirects=t,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kn=class{route;type=Q.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Yn=class{route;type=Q.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Xn=class{snapshot;type=Q.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jn=class{snapshot;type=Q.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ei=class{snapshot;type=Q.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ti=class{snapshot;type=Q.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pt=class{routerEvent;position;anchor;scrollBehavior;type=Q.Scroll;constructor(r,e,t,i){this.routerEvent=r,this.position=e,this.anchor=t,this.scrollBehavior=i}toString(){let r=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${r}')`}},Nt=class{},sn=class{},Lt=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Qs(n){return!(n instanceof Nt)&&!(n instanceof Lt)&&!(n instanceof sn)}var ni=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new ut(this.rootInjector)}},ut=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let i=this.getOrCreateContext(e);i.outlet=t,this.contexts.set(e,i)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new ni(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(le(ze))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ii=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=Xi(r,this._root);return e?e.children.map(t=>t.value):[]}firstChild(r){let e=Xi(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=Ji(r,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return Ji(r,this._root).map(e=>e.value)}};function Xi(n,r){if(n===r.value)return r;for(let e of r.children){let t=Xi(n,e);if(t)return t}return null}function Ji(n,r){if(n===r.value)return[r];for(let e of r.children){let t=Ji(n,e);if(t.length)return t.unshift(r),t}return[]}var ue=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function Et(n){let r={};return n&&n.children.forEach(e=>r[e.value.outlet]=e),r}var cn=class extends ii{snapshot;constructor(r,e){super(r),this.snapshot=e,dr(this,r)}toString(){return this.snapshot.toString()}};function oo(n,r){let e=Gs(n,r),t=new fe([new Je("",{})]),i=new fe({}),a=new fe({}),o=new fe({}),s=new fe(""),l=new Le(t,i,o,s,a,v,n,e.root);return l.snapshot=e.root,new cn(new ue(l,[]),e)}function Gs(n,r){let e={},t={},i={},o=new Ft([],e,i,"",t,v,n,null,{},r);return new ln("",new ue(o,[]))}var Le=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,e,t,i,a,o,s,l){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=i,this.dataSubject=a,this.outlet=o,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(I(d=>d[hn]))??p(void 0),this.url=r,this.params=e,this.queryParams=t,this.fragment=i,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(I(r=>dt(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(I(r=>dt(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function lr(n,r,e="emptyOnly"){let t,{routeConfig:i}=n;return r!==null&&(e==="always"||i?.path===""||!r.component&&!r.routeConfig?.loadComponent)?t={params:m(m({},r.params),n.params),data:m(m({},r.data),n.data),resolve:m(m(m(m({},n.data),r.data),i?.data),n._resolvedData)}:t={params:m({},n.params),data:m({},n.data),resolve:m(m({},n.data),n._resolvedData??{})},i&&co(i)&&(t.resolve[hn]=i.title),t}var Ft=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[hn]}constructor(r,e,t,i,a,o,s,l,d,h){this.url=r,this.params=e,this.queryParams=t,this.fragment=i,this.data=a,this.outlet=o,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=dt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=dt(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},ln=class extends ii{url;constructor(r,e){super(e),this.url=r,dr(this,e)}toString(){return so(this._root)}};function dr(n,r){r.value._routerState=n,r.children.forEach(e=>dr(n,e))}function so(n){let r=n.children.length>0?` { ${n.children.map(so).join(", ")} } `:"";return`${n.value}${r}`}function qi(n){if(n.snapshot){let r=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Pe(r.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Pe(r.params,e.params)||n.paramsSubject.next(e.params),xs(r.url,e.url)||n.urlSubject.next(e.url),Pe(r.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function er(n,r){let e=Pe(n.params,r.params)&&Rs(n.url,r.url),t=!n.parent!=!r.parent;return e&&!t&&(!n.parent||er(n.parent,r.parent))}function co(n){return typeof n.title=="string"||n.title===null}var lo=new w(""),un=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=v;activateEvents=new j;deactivateEvents=new j;attachEvents=new j;detachEvents=new j;routerOutletData=sa();parentContexts=c(ut);location=c(In);changeDetector=c(he);inputBinder=c(pn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:i}=e.name;if(t)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new H(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new H(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new H(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new H(4013,!1);this._activatedRoute=e;let i=this.location,o=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new tr(e,s,i.injector,this.routerOutletData);this.activated=i.createComponent(o,{index:i.length,injector:l,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ue]})}return n})(),tr=class{route;childContexts;parent;outletData;constructor(r,e,t,i){this.route=r,this.childContexts=e,this.parent=t,this.outletData=i}get(r,e){return r===Le?this.route:r===ut?this.childContexts:r===lo?this.outletData:this.parent.get(r,e)}},pn=new w(""),mr=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,i=Ii([t.queryParams,t.params,t.data]).pipe(xe(([a,o,s],l)=>(s=m(m(m({},a),o),s),l===0?p(s):Promise.resolve(s)))).subscribe(a=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let o=ca(t.component);if(!o){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of o.inputs)e.activatedComponentRef.setInput(s,a[s])});this.outletDataSubscriptions.set(e,i)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})(),hr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,i){t&1&&A(0,"router-outlet")},dependencies:[un],encapsulation:2})}return n})();function ur(n){let r=n.children&&n.children.map(ur),e=r?ce(m({},n),{children:r}):m({},n);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==v&&(e.component=hr),e}function Zs(n,r,e){let t=dn(n,r._root,e?e._root:void 0);return new cn(t,r)}function dn(n,r,e){if(e&&n.shouldReuseRoute(r.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=r.value;let i=Ks(n,r,e);return new ue(t,i)}else{if(n.shouldAttach(r.value)){let a=n.retrieve(r.value);if(a!==null){let o=a.route;return o.value._futureSnapshot=r.value,o.children=r.children.map(s=>dn(n,s)),o}}let t=Ys(r.value),i=r.children.map(a=>dn(n,a));return new ue(t,i)}}function Ks(n,r,e){return r.children.map(t=>{for(let i of e.children)if(n.shouldReuseRoute(t.value,i.value.snapshot))return dn(n,t,i);return dn(n,t)})}function Ys(n){return new Le(new fe(n.url),new fe(n.params),new fe(n.queryParams),new fe(n.fragment),new fe(n.data),n.outlet,n.component,n)}var zt=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},mo="ngNavigationCancelingError";function ri(n,r){let{redirectTo:e,navigationBehaviorOptions:t}=et(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=ho(!1,te.Redirect);return i.url=e,i.navigationBehaviorOptions=t,i}function ho(n,r){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[mo]=!0,e.cancellationCode=r,e}function Xs(n){return uo(n)&&et(n.url)}function uo(n){return!!n&&n[mo]}var nr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,t,i,a){this.routeReuseStrategy=r,this.futureState=e,this.currState=t,this.forwardEvent=i,this.inputBindingEnabled=a}activate(r){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,r),qi(this.futureState.root),this.activateChildRoutes(e,t,r)}deactivateChildRoutes(r,e,t){let i=Et(e);r.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,i[o],t),delete i[o]}),Object.values(i).forEach(a=>{this.deactivateRouteAndItsChildren(a,t)})}deactivateRoutes(r,e,t){let i=r.value,a=e?e.value:null;if(i===a)if(i.component){let o=t.getContext(i.outlet);o&&this.deactivateChildRoutes(r,e,o.children)}else this.deactivateChildRoutes(r,e,t);else a&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let t=e.getContext(r.value.outlet),i=t&&r.value.component?t.children:e,a=Et(r);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,i);if(t&&t.outlet){let o=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:o,route:r,contexts:s})}}deactivateRouteAndOutlet(r,e){let t=e.getContext(r.value.outlet),i=t&&r.value.component?t.children:e,a=Et(r);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,i);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(r,e,t){let i=Et(e);r.children.forEach(a=>{this.activateRoutes(a,i[a.value.outlet],t),this.forwardEvent(new ti(a.value.snapshot))}),r.children.length&&this.forwardEvent(new Jn(r.value.snapshot))}activateRoutes(r,e,t){let i=r.value,a=e?e.value:null;if(qi(i),i===a)if(i.component){let o=t.getOrCreateContext(i.outlet);this.activateChildRoutes(r,e,o.children)}else this.activateChildRoutes(r,e,t);else if(i.component){let o=t.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),qi(s.route.value),this.activateChildRoutes(r,null,o.children)}else o.attachRef=null,o.route=i,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(r,null,o.children)}else this.activateChildRoutes(r,null,t)}},ai=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},Tt=class{component;route;constructor(r,e){this.component=r,this.route=e}};function Js(n,r,e){let t=n._root,i=r?r._root:null;return en(t,i,e,[t.value])}function ec(n){let r=n.routeConfig?n.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:n,guards:r}}function Ut(n,r){let e=Symbol(),t=r.get(n,e);return t===e?typeof n=="function"&&!$r(n)?n:r.get(n):t}function en(n,r,e,t,i={canDeactivateChecks:[],canActivateChecks:[]}){let a=Et(r);return n.children.forEach(o=>{tc(o,a[o.value.outlet],e,t.concat([o.value]),i),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,s])=>nn(s,e.getContext(o),i)),i}function tc(n,r,e,t,i={canDeactivateChecks:[],canActivateChecks:[]}){let a=n.value,o=r?r.value:null,s=e?e.getContext(n.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let l=nc(o,a,a.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new ai(t)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?en(n,r,s?s.children:null,t,i):en(n,r,e,t,i),l&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new Tt(s.outlet.component,o))}else o&&nn(r,s,i),i.canActivateChecks.push(new ai(t)),a.component?en(n,null,s?s.children:null,t,i):en(n,null,e,t,i);return i}function nc(n,r,e){if(typeof e=="function")return de(r._environmentInjector,()=>e(n,r));switch(e){case"pathParamsChange":return!lt(n.url,r.url);case"pathParamsOrQueryParamsChange":return!lt(n.url,r.url)||!Pe(n.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!er(n,r)||!Pe(n.queryParams,r.queryParams);default:return!er(n,r)}}function nn(n,r,e){let t=Et(n),i=n.value;Object.entries(t).forEach(([a,o])=>{i.component?r?nn(o,r.children.getContext(a),e):nn(o,null,e):nn(o,r,e)}),i.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new Tt(r.outlet.component,i)):e.canDeactivateChecks.push(new Tt(null,i)):e.canDeactivateChecks.push(new Tt(null,i))}function gn(n){return typeof n=="function"}function ic(n){return typeof n=="boolean"}function rc(n){return n&&gn(n.canLoad)}function ac(n){return n&&gn(n.canActivate)}function oc(n){return n&&gn(n.canActivateChild)}function sc(n){return n&&gn(n.canDeactivate)}function cc(n){return n&&gn(n.canMatch)}function po(n){return n instanceof Fr||n?.name==="EmptyError"}var jn=Symbol("INITIAL_VALUE");function jt(){return xe(n=>Ii(n.map(r=>r.pipe(ve(1),ot(jn)))).pipe(I(r=>{for(let e of r)if(e!==!0){if(e===jn)return jn;if(e===!1||lc(e))return e}return!0}),G(r=>r!==jn),ve(1)))}function lc(n){return et(n)||n instanceof zt}function go(n){return n.aborted?p(void 0).pipe(ve(1)):new Lr(r=>{let e=()=>{r.next(),r.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function fo(n){return oe(go(n))}function dc(n){return Ie(r=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:i,canDeactivateChecks:a}}=r;return a.length===0&&i.length===0?p(ce(m({},r),{guardsResult:!0})):mc(a,e,t).pipe(Ie(o=>o&&ic(o)?hc(e,i,n):p(o)),I(o=>ce(m({},r),{guardsResult:o})))})}function mc(n,r,e){return X(n).pipe(Ie(t=>vc(t.component,t.route,e,r)),qe(t=>t!==!0,!0))}function hc(n,r,e){return X(r).pipe(Qt(t=>zr(pc(t.route.parent,e),uc(t.route,e),fc(n,t.path),gc(n,t.route))),qe(t=>t!==!0,!0))}function uc(n,r){return n!==null&&r&&r(new ei(n)),p(!0)}function pc(n,r){return n!==null&&r&&r(new Xn(n)),p(!0)}function gc(n,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return p(!0);let t=e.map(i=>wn(()=>{let a=r._environmentInjector,o=Ut(i,a),s=ac(o)?o.canActivate(r,n):de(a,()=>o(r,n));return ht(s).pipe(qe())}));return p(t).pipe(jt())}function fc(n,r){let e=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(a=>ec(a)).filter(a=>a!==null).map(a=>wn(()=>{let o=a.guards.map(s=>{let l=a.node._environmentInjector,d=Ut(s,l),h=oc(d)?d.canActivateChild(e,n):de(l,()=>d(e,n));return ht(h).pipe(qe())});return p(o).pipe(jt())}));return p(i).pipe(jt())}function vc(n,r,e,t){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return p(!0);let a=i.map(o=>{let s=r._environmentInjector,l=Ut(o,s),d=sc(l)?l.canDeactivate(n,r,e,t):de(s,()=>l(n,r,e,t));return ht(d).pipe(qe())});return p(a).pipe(jt())}function _c(n,r,e,t,i){let a=r.canLoad;if(a===void 0||a.length===0)return p(!0);let o=a.map(s=>{let l=Ut(s,n),d=rc(l)?l.canLoad(r,e):de(n,()=>l(r,e)),h=ht(d);return i?h.pipe(fo(i)):h});return p(o).pipe(jt(),vo(t))}function vo(n){return Nr(ne(r=>{if(typeof r!="boolean")throw ri(n,r)}),I(r=>r===!0))}function bc(n,r,e,t,i,a){let o=r.canMatch;if(!o||o.length===0)return p(!0);let s=o.map(l=>{let d=Ut(l,n),h=cc(d)?d.canMatch(r,e,i):de(n,()=>d(r,e,i));return ht(h).pipe(fo(a))});return p(s).pipe(jt(),vo(t))}var He=class n extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,n.prototype)}},mn=class n extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,n.prototype)}};function yc(n){throw new H(4e3,!1)}function wc(n){throw ho(!1,te.GuardRejected)}var ir=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let t=[],i=e.root;for(;;){if(t=t.concat(i.segments),i.numberOfChildren===0)return t;if(i.numberOfChildren>1||!i.children[v])throw yc(`${r.redirectTo}`);i=i.children[v]}}async applyRedirectCommands(r,e,t,i,a){let o=await xc(e,i,a);if(o instanceof re)throw new mn(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),r,t);if(o[0]==="/")throw new mn(s);return s}applyRedirectCreateUrlTree(r,e,t,i){let a=this.createSegmentGroup(r,e.root,t,i);return new re(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let t={};return Object.entries(r).forEach(([i,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);t[i]=e[s]}else t[i]=a}),t}createSegmentGroup(r,e,t,i){let a=this.createSegments(r,e.segments,t,i),o={};return Object.entries(e.children).forEach(([s,l])=>{o[s]=this.createSegmentGroup(r,l,t,i)}),new C(a,o)}createSegments(r,e,t,i){return e.map(a=>a.path[0]===":"?this.findPosParam(r,a,i):this.findOrReturn(a,t))}findPosParam(r,e,t){let i=t[e.path.substring(1)];if(!i)throw new H(4001,!1);return i}findOrReturn(r,e){let t=0;for(let i of e){if(i.path===r.path)return e.splice(t),i;t++}return r}};function xc(n,r,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return $n(ht(de(e,()=>t(r))))}function Cc(n,r){return n.providers&&!n._injector&&(n._injector=En(n.providers,r,`Route: ${n.path}`)),n._injector??r}function Se(n){return n.outlet||v}function kc(n,r){let e=n.filter(t=>Se(t)===r);return e.push(...n.filter(t=>Se(t)!==r)),e}var rr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function _o(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Sc(n,r,e,t,i,a,o){let s=bo(n,r,e);if(!s.matched)return p(s);let l=_o(a(s));return t=Cc(r,t),bc(t,r,e,i,l,o).pipe(I(d=>d===!0?s:m({},rr)))}function bo(n,r,e){if(r.path==="")return r.pathMatch==="full"&&(n.hasChildren()||e.length>0)?m({},rr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(r.matcher||$a)(e,n,r);if(!i)return m({},rr);let a={};Object.entries(i.posParams??{}).forEach(([s,l])=>{a[s]=l.path});let o=i.consumed.length>0?m(m({},a),i.consumed[i.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function Ba(n,r,e,t,i){return e.length>0&&Ic(n,e,t,i)?{segmentGroup:new C(r,Rc(t,new C(e,n.children))),slicedSegments:[]}:e.length===0&&Ec(n,e,t)?{segmentGroup:new C(n.segments,Mc(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new C(n.segments,n.children),slicedSegments:e}}function Mc(n,r,e,t){let i={};for(let a of e)if(si(n,r,a)&&!t[Se(a)]){let o=new C([],{});i[Se(a)]=o}return m(m({},t),i)}function Rc(n,r){let e={};e[v]=r;for(let t of n)if(t.path===""&&Se(t)!==v){let i=new C([],{});e[Se(t)]=i}return e}function Ic(n,r,e,t){return e.some(i=>!si(n,r,i)||!(Se(i)!==v)?!1:!(t!==void 0&&Se(i)===t))}function Ec(n,r,e){return e.some(t=>si(n,r,t))}function si(n,r,e){return(n.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Dc(n,r,e){return r.length===0&&!n.children[e]}var ar=class{};async function Ac(n,r,e,t,i,a,o="emptyOnly",s){return new or(n,r,e,t,i,o,a,s).recognize()}var Tc=31,or=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,t,i,a,o,s,l){this.injector=r,this.configLoader=e,this.rootComponentType=t,this.config=i,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new ir(this.urlSerializer,this.urlTree)}noMatchError(r){return new H(4002,`'${r.segmentGroup}'`)}async recognize(){let r=Ba(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(r),i=new ue(t,e),a=new ln("",i),o=eo(t,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(r){let e=new Ft([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),v,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,v,e),rootSnapshot:e}}catch(t){if(t instanceof mn)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof He?this.noMatchError(t):t}}async processSegmentGroup(r,e,t,i,a){if(t.segments.length===0&&t.hasChildren())return this.processChildren(r,e,t,a);let o=await this.processSegment(r,e,t,t.segments,i,!0,a);return o instanceof ue?[o]:[]}async processChildren(r,e,t,i){let a=[];for(let l of Object.keys(t.children))l==="primary"?a.unshift(l):a.push(l);let o=[];for(let l of a){let d=t.children[l],h=kc(e,l),_=await this.processSegmentGroup(r,h,d,l,i);o.push(..._)}let s=yo(o);return Oc(s),s}async processSegment(r,e,t,i,a,o,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??r,e,l,t,i,a,o,s)}catch(d){if(d instanceof He||po(d))continue;throw d}if(Dc(t,i,a))return new ar;throw new He(t)}async processSegmentAgainstRoute(r,e,t,i,a,o,s,l){if(Se(t)!==o&&(o===v||!si(i,a,t)))throw new He(i);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,t,a,o,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(r,i,e,t,a,o,l);throw new He(i)}async expandSegmentAgainstRouteUsingRedirect(r,e,t,i,a,o,s){let{matched:l,parameters:d,consumedSegments:h,positionalParamSegments:_,remainingSegments:z}=bo(e,i,a);if(!l)throw new He(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Tc&&(this.allowRedirects=!1));let rt=this.createSnapshot(r,i,a,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Fe=await this.applyRedirects.applyRedirectCommands(h,i.redirectTo,_,_o(rt),r),at=await this.applyRedirects.lineralizeSegments(i,Fe);return this.processSegment(r,t,e,at.concat(z),o,!1,s)}createSnapshot(r,e,t,i,a){let o=new Ft(t,i,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Nc(e),Se(e),e.component??e._loadedComponent??null,e,Lc(e),r),s=lr(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(s.params),o.data=Object.freeze(s.data),o}async matchSegmentAgainstRoute(r,e,t,i,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=bn=>this.createSnapshot(r,t,bn.consumedSegments,bn.parameters,o),l=await $n(Sc(e,t,i,r,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!l?.matched)throw new He(e);r=t._injector??r;let{routes:d}=await this.getChildConfig(r,t,i),h=t._loadedInjector??r,{parameters:_,consumedSegments:z,remainingSegments:rt}=l,Fe=this.createSnapshot(r,t,z,_,o),{segmentGroup:at,slicedSegments:Vt}=Ba(e,z,rt,d,a);if(Vt.length===0&&at.hasChildren()){let bn=await this.processChildren(h,d,at,Fe);return new ue(Fe,bn)}if(d.length===0&&Vt.length===0)return new ue(Fe,[]);let Mi=Se(t)===a,qt=await this.processSegment(h,d,at,Vt,Mi?v:a,!0,Fe);return new ue(Fe,qt instanceof ue?[qt]:[])}async getChildConfig(r,e,t){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await $n(_c(r,e,t,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw wc(e)}return{routes:[],injector:r}}};function Oc(n){n.sort((r,e)=>r.value.outlet===v?-1:e.value.outlet===v?1:r.value.outlet.localeCompare(e.value.outlet))}function Pc(n){let r=n.value.routeConfig;return r&&r.path===""}function yo(n){let r=[],e=new Set;for(let t of n){if(!Pc(t)){r.push(t);continue}let i=r.find(a=>t.value.routeConfig===a.value.routeConfig);i!==void 0?(i.children.push(...t.children),e.add(i)):r.push(t)}for(let t of e){let i=yo(t.children);r.push(new ue(t.value,i))}return r.filter(t=>!e.has(t))}function Nc(n){return n.data||{}}function Lc(n){return n.resolve||{}}function Fc(n,r,e,t,i,a,o){return Ie(async s=>{let{state:l,tree:d}=await Ac(n,r,e,t,s.extractedUrl,i,a,o);return ce(m({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function zc(n){return Ie(r=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=r;if(!t.length)return p(r);let i=new Set(t.map(s=>s.route)),a=new Set;for(let s of i)if(!a.has(s))for(let l of wo(s))a.add(l);let o=0;return X(a).pipe(Qt(s=>i.has(s)?jc(s,e,n):(s.data=lr(s,s.parent,n).resolve,p(void 0))),ne(()=>o++),Di(1),Ie(s=>o===a.size?p(r):ae))})}function wo(n){let r=n.children.map(e=>wo(e)).flat();return[n,...r]}function jc(n,r,e){let t=n.routeConfig,i=n._resolve;return t?.title!==void 0&&!co(t)&&(i[hn]=t.title),wn(()=>(n.data=lr(n,n.parent,e).resolve,Uc(i,n,r).pipe(I(a=>(n._resolvedData=a,n.data=m(m({},n.data),a),null)))))}function Uc(n,r,e){let t=Qi(n);if(t.length===0)return p({});let i={};return X(t).pipe(Ie(a=>Bc(n[a],r,e).pipe(qe(),ne(o=>{if(o instanceof zt)throw ri(new $e,o);i[a]=o}))),Di(1),I(()=>i),vt(a=>po(a)?ae:yn(a)))}function Bc(n,r,e){let t=r._environmentInjector,i=Ut(n,t),a=i.resolve?i.resolve(r,e):de(t,()=>i(r,e));return ht(a)}function Ha(n){return xe(r=>{let e=n(r);return e?X(e).pipe(I(()=>r)):p(r)})}var pr=(()=>{class n{buildTitle(e){let t,i=e.root;for(;i!==void 0;)t=this.getResolvedTitleForRoute(i)??t,i=i.children.find(a=>a.outlet===v);return t}getResolvedTitleForRoute(e){return e.data[hn]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:()=>c(xo),providedIn:"root"})}return n})(),xo=(()=>{class n extends pr{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(le(fa))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),it=new w("",{factory:()=>({})}),pt=new w(""),ci=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(ra);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=(async()=>{try{let a=await qa(de(e,()=>t.loadComponent())),o=await So(ko(a));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o,o}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,i),i}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let i=(async()=>{try{let a=await Co(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,i),i}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function Co(n,r,e,t){let i=await qa(de(e,()=>n.loadChildren())),a=await So(ko(i)),o;a instanceof ea||Array.isArray(a)?o=a:o=await r.compileModuleAsync(a),t&&t(n);let s,l,d=!1,h;return Array.isArray(o)?(l=o,d=!0):(s=o.create(e).injector,h=o,l=s.get(pt,[],{optional:!0,self:!0}).flat()),{routes:l.map(ur),injector:s,factory:h}}function Hc(n){return n&&typeof n=="object"&&"default"in n}function ko(n){return Hc(n)?n.default:n}async function So(n){return n}var li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:()=>c($c),providedIn:"root"})}return n})(),$c=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gr=new w(""),fr=new w("");function Mo(n,r,e){let t=n.get(fr),i=n.get(J);if(!i.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(d=>setTimeout(d));let a,o=new Promise(d=>{a=d}),s=i.startViewTransition(()=>(a(),Vc(n)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:l}=t;return l&&de(n,()=>l({transition:s,from:r,to:e})),o}function Vc(n){return new Promise(r=>{yt({read:()=>setTimeout(r)},{injector:n})})}var qc=()=>{},vr=new w(""),di=(()=>{class n{currentNavigation=y(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=y(null);events=new B;transitionAbortWithErrorSubject=new B;configLoader=c(ci);environmentInjector=c(ze);destroyRef=c(je);urlSerializer=c(nt);rootContexts=c(ut);location=c(kt);inputBindingEnabled=c(pn,{optional:!0})!==null;titleStrategy=c(pr);options=c(it,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(li);createViewTransition=c(gr,{optional:!0});navigationErrorHandler=c(vr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>p(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Kn(i)),t=i=>this.events.next(new Yn(i));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;F(()=>{this.transitions?.next(ce(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new fe(null),this.transitions.pipe(G(t=>t!==null),xe(t=>{let i=!1,a=new AbortController,o=()=>!i&&this.currentTransition?.id===t.id;return p(t).pipe(xe(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",te.SupersededByNewNavigation),ae;this.currentTransition=t;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?ce(m({},l),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&h!=="reload")return this.events.next(new Ne(s.id,this.urlSerializer.serialize(s.rawUrl),"",Ot.IgnoredSameUrlNavigation)),s.resolve(!1),ae;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return p(s).pipe(xe(_=>(this.events.next(new tt(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),_.id!==this.navigationId?ae:Promise.resolve(_))),Fc(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),ne(_=>{t.targetSnapshot=_.targetSnapshot,t.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation.update(z=>(z.finalUrl=_.urlAfterRedirects,z)),this.events.next(new sn)}),xe(_=>X(t.routesRecognizeHandler.deferredHandle??p(void 0)).pipe(I(()=>_))),ne(()=>{let _=new on(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:_,extractedUrl:z,source:rt,restoredState:Fe,extras:at}=s,Vt=new tt(_,this.urlSerializer.serialize(z),rt,Fe);this.events.next(Vt);let Mi=oo(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=ce(m({},s),{targetSnapshot:Mi,urlAfterRedirects:z,extras:ce(m({},at),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(qt=>(qt.finalUrl=z,qt)),p(t)}else return this.events.next(new Ne(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Ot.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ae}),I(s=>{let l=new Wn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=t=ce(m({},s),{guards:Js(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),dc(s=>this.events.next(s)),xe(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ri(this.urlSerializer,s.guardsResult);let l=new Qn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!o())return ae;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",te.GuardRejected),ae;if(s.guards.canActivateChecks.length===0)return p(s);let d=new Gn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!o())return ae;let h=!1;return p(s).pipe(zc(this.paramsInheritanceStrategy),ne({next:()=>{h=!0;let _=new Zn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)},complete:()=>{h||this.cancelNavigationTransition(s,"",te.NoDataFromResolver)}}))}),Ha(s=>{let l=h=>{let _=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let z=h._environmentInjector;_.push(this.configLoader.loadComponent(z,h.routeConfig).then(rt=>{h.component=rt}))}for(let z of h.children)_.push(...l(z));return _},d=l(s.targetSnapshot.root);return d.length===0?p(s):X(Promise.all(d).then(()=>s))}),Ha(()=>this.afterPreactivation()),xe(()=>{let{currentSnapshot:s,targetSnapshot:l}=t,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?X(d).pipe(I(()=>t)):p(t)}),ve(1),xe(s=>{let l=Zs(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=ce(m({},s),{targetRouterState:l}),this.currentNavigation.update(h=>(h.targetRouterState=l,h)),this.events.next(new Nt);let d=t.beforeActivateHandler.deferredHandle;return d?X(d.then(()=>s)):p(s)}),ne(s=>{new nr(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),o()&&(i=!0,this.currentNavigation.update(l=>(l.abort=qc,l)),this.lastSuccessfulNavigation.set(F(this.currentNavigation)),this.events.next(new ge(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),oe(go(a.signal).pipe(G(()=>!i&&!t.targetRouterState),ne(()=>{this.cancelNavigationTransition(t,a.signal.reason+"",te.Aborted)}))),ne({complete:()=>{i=!0}}),oe(this.transitionAbortWithErrorSubject.pipe(ne(s=>{throw s}))),xn(()=>{a.abort(),i||this.cancelNavigationTransition(t,"",te.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),vt(s=>{if(i=!0,this.destroyed)return t.resolve(!1),ae;if(uo(s))this.events.next(new we(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Xs(s)?this.events.next(new Lt(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let l=new mt(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let d=de(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof zt){let{message:h,cancellationCode:_}=ri(this.urlSerializer,d);this.events.next(new we(t.id,this.urlSerializer.serialize(t.extractedUrl),h,_)),this.events.next(new Lt(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(d)}}return ae}))}))}cancelNavigationTransition(e,t,i){let a=new we(e.id,this.urlSerializer.serialize(e.extractedUrl),t,i);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=F(this.currentNavigation),i=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==i?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Wc(n){return n!==At}var Ro=new w("");var Io=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:()=>c(Qc),providedIn:"root"})}return n})(),oi=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}},Qc=(()=>{class n extends oi{static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),mi=(()=>{class n{urlSerializer=c(nt);options=c(it,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(kt);urlHandlingStrategy=c(li);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new re;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:i}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,o=i??a;return o instanceof re?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:i}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,i),this.routerState=e):this.rawUrlTree=i}routerState=oo(null,c(ze));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:()=>c(Gc),providedIn:"root"})}return n})(),Gc=(()=>{class n extends mi{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof tt?this.updateStateMemento():e instanceof Ne?this.commitTransition(t):e instanceof on?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Nt?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof we&&!ao(e)?this.restoreHistory(t):e instanceof mt?this.restoreHistory(t,!0):e instanceof ge&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,t){let{extras:i,id:a}=t,{replaceUrl:o,state:s}=i;if(this.location.isCurrentPathEqualTo(e)||o){let l=this.browserPageId,d=m(m({},s),this.generateNgRouterState(a,l,t));this.location.replaceState(e,"",d)}else{let l=m(m({},s),this.generateNgRouterState(a,this.browserPageId+1,t));this.location.go(e,"",l)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,a=this.currentPageId-i;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t,i){return this.canceledNavigationResolution==="computed"?m({navigationId:e,\u0275routerPageId:t},this.routerUrlState(i)):m({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hi(n,r){n.events.pipe(G(e=>e instanceof ge||e instanceof we||e instanceof mt||e instanceof Ne),I(e=>e instanceof ge||e instanceof Ne?0:(e instanceof we?e.code===te.Redirect||e.code===te.SupersededByNewNavigation:!1)?2:1),G(e=>e!==2),ve(1)).subscribe(()=>{r()})}var Me=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(ta);stateManager=c(mi);options=c(it,{optional:!0})||{};pendingTasks=c(Vr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(di);urlSerializer=c(nt);location=c(kt);urlHandlingStrategy=c(li);injector=c(ze);_events=new B;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(Io);injectorCleanup=c(Ro,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(pt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(pn,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Re;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let i=this.navigationTransitions.currentTransition,a=F(this.navigationTransitions.currentNavigation);if(i!==null&&a!==null){if(this.stateManager.handleRouterEvent(t,a),t instanceof we&&t.code!==te.Redirect&&t.code!==te.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof ge)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof Lt){let o=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,i.currentRawUrl),l=m({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Wc(i.source)},o);this.scheduleNavigation(s,At,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Qs(t)&&this._events.next(t)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),At,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,i,a)=>{this.navigateToSyncWithBrowser(e,i,t,a)})}navigateToSyncWithBrowser(e,t,i,a){let o=i?.navigationId?i:null,s=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(a=ce(m({},a),{browserUrl:e})),i){let d=m({},i);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(a.state=d)}let l=this.parseUrl(s);this.scheduleNavigation(l,t,o,a).catch(d=>{this.disposed||this.injector.get(Sn)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return F(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ur),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:i,queryParams:a,fragment:o,queryParamsHandling:s,preserveFragment:l}=t,d=l?this.currentUrlTree.fragment:o,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=m(m({},this.currentUrlTree.queryParams),a);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=a||null}h!==null&&(h=this.removeEmptyProps(h));let _;try{let z=i?i.snapshot:this.routerState.snapshot.root;_=to(z)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),_=this.currentUrlTree.root}return no(_,e,h,d??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let i=et(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(a,At,null,t)}navigate(e,t={skipLocationChange:!1}){return Zc(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Hr(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let i;if(t===!0?i=m({},sr):t===!1?i=m({},rn):i=m(m({},rn),t),et(e))return Gi(this.currentUrlTree,e,i);let a=this.parseUrl(e);return Gi(this.currentUrlTree,a,i)}removeEmptyProps(e){return Object.entries(e).reduce((t,[i,a])=>(a!=null&&(t[i]=a),t),{})}scheduleNavigation(e,t,i,a,o){if(this.disposed)return Promise.resolve(!1);let s,l,d;o?(s=o.resolve,l=o.reject,d=o.promise):d=new Promise((_,z)=>{s=_,l=z});let h=this.pendingTasks.add();return hi(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Zc(n){for(let r=0;r<n.length;r++)if(n[r]==null)throw new H(4008,!1)}var Kc=(()=>{class n{router=c(Me);stateManager=c(mi);fragment=y("");queryParams=y({});path=y("");serializer=c(nt);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ge&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new re(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Bt=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new xt("href"),{optional:!0});reactiveHref=aa(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return F(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return F(this._target)}_target=y(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return F(this._queryParams)}_queryParams=y(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return F(this._fragment)}_fragment=y(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return F(this._queryParamsHandling)}_queryParamsHandling=y(void 0);set state(e){this._state.set(e)}get state(){return F(this._state)}_state=y(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return F(this._info)}_info=y(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return F(this._relativeTo)}_relativeTo=y(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return F(this._preserveFragment)}_preserveFragment=y(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return F(this._skipLocationChange)}_skipLocationChange=y(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return F(this._replaceUrl)}_replaceUrl=y(!1);isAnchorElement;onChanges=new B;applicationErrorHandler=c(Sn);options=c(it,{optional:!0});reactiveRouterState=c(Kc);constructor(e,t,i,a,o,s){this.router=e,this.route=t,this.tabIndexAttribute=i,this.renderer=a,this.el=o,this.locationStrategy=s;let l=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=y(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(et(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,i,a,o){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||i||a||o||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let i=this.renderer,a=this.el.nativeElement;t!==null?i.setAttribute(a,e,t):i.removeAttribute(a,e)}_urlTree=An(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:et(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return F(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(Ae(Me),Ae(Le),Qr("tabindex"),Ae(De),Ae(O),Ae(Kt))};static \u0275dir=E({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,i){t&1&&q("click",function(o){return i.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),t&2&&D("href",i.reactiveHref(),Yr)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ie],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ie],replaceUrl:[2,"replaceUrl","replaceUrl",ie],routerLink:"routerLink"},features:[Ue]})}return n})(),br=(()=>{class n{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new j;link=c(Bt,{optional:!0});constructor(e,t,i,a){this.router=e,this.element=t,this.renderer=i,this.cdr=a,this.routerEventsSubscription=e.events.subscribe(o=>{o instanceof ge&&this.update()})}ngAfterContentInit(){p(this.links.changes,p(null)).pipe(Wt()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(t=>!!t).map(t=>t.onChanges);this.linkInputChangesSubscription=X(e).pipe(Wt()).subscribe(t=>{this._isActive!==this.isLinkActive(this.router)(t)&&this.update()})}set routerLinkActive(e){let t=Array.isArray(e)?e:e.split(" ");this.classes=t.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(t=>{e?this.renderer.addClass(this.element.nativeElement,t):this.renderer.removeClass(this.element.nativeElement,t)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let t=Yc(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?m({},sr):m({},rn);return i=>{let a=i.urlTree;return a?F(cr(a,e,t)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(t){return new(t||n)(Ae(Me),Ae(O),Ae(De),Ae(he))};static \u0275dir=E({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(t,i,a){if(t&1&&be(a,Bt,5),t&2){let o;S(o=M())&&(i.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ue]})}return n})();function Yc(n){let r=n;return!!(r.paths||r.matrixParams||r.queryParams||r.fragment)}var fn=class{};var Eo=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,i,a){this.router=e,this.injector=t,this.preloadingStrategy=i,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(G(e=>e instanceof ge),Qt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let i=[];for(let a of t){a.providers&&!a._injector&&(a._injector=En(a.providers,e,""));let o=a._injector??e;a._loadedNgModuleFactory&&!a._loadedInjector&&(a._loadedInjector=a._loadedNgModuleFactory.create(o).injector);let s=a._loadedInjector??o;(a.loadChildren&&!a._loadedRoutes&&a.canLoad===void 0||a.loadComponent&&!a._loadedComponent)&&i.push(this.preloadConfig(o,a)),(a.children||a._loadedRoutes)&&i.push(this.processRoutes(s,a.children??a._loadedRoutes))}return X(i).pipe(Wt())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return p(null);let i;t.loadChildren&&t.canLoad===void 0?i=X(this.loader.loadChildren(e,t)):i=p(null);let a=i.pipe(Ie(o=>o===null?p(void 0):(t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,this.processRoutes(o.injector??e,o.routes))));if(t.loadComponent&&!t._loadedComponent){let o=this.loader.loadComponent(e,t);return X([a,o]).pipe(Wt())}else return a})}static \u0275fac=function(t){return new(t||n)(le(Me),le(ze),le(fn),le(ci))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Do=new w(""),Xc=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=At;restoredId=0;store={};isHydrating=c(Zr,{optional:!0})??!1;urlSerializer=c(nt);zone=c(se);viewportScroller=c(Ui);transitions=c(di);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&c(Ni).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof tt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof ge?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Ne&&e.code===Ot.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Pt)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){if(this.isHydrating)return;let i=F(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(a=>{setTimeout(a),typeof requestAnimationFrame<"u"&&requestAnimationFrame(a)}),this.zone.run(()=>{this.transitions.events.next(new Pt(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,i))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){Rn()};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})();function yr(n,...r){return Cn([{provide:pt,multi:!0,useValue:n},[],{provide:Le,useFactory:Ao},{provide:Pi,multi:!0,useFactory:To},r.map(e=>e.\u0275providers)])}function Ao(){return c(Me).routerState.root}function vn(n,r){return{\u0275kind:n,\u0275providers:r}}function To(){let n=c(Ee);return r=>{let e=n.get(Ni);if(r!==e.components[0])return;let t=n.get(Me),i=n.get(Oo);n.get(wr)===1&&t.initialNavigation(),n.get(Lo,null,{optional:!0})?.setUpPreloading(),n.get(Do,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Oo=new w("",{factory:()=>new B}),wr=new w("",{factory:()=>1});function Po(){let n=[{provide:Kr,useValue:!0},{provide:wr,useValue:0},Oi(()=>{let r=c(Ee);return r.get(la,Promise.resolve()).then(()=>new Promise(t=>{let i=r.get(Me),a=r.get(Oo);hi(i,()=>{t(!0)}),r.get(di).afterPreactivation=()=>(t(!0),a.closed?p(void 0):a),i.initialNavigation()}))})];return vn(2,n)}function No(){let n=[Oi(()=>{c(Me).setUpLocationChangeListener()}),{provide:wr,useValue:2}];return vn(3,n)}var Lo=new w("");function Fo(n){return vn(0,[{provide:Lo,useExisting:Eo},{provide:fn,useExisting:n}])}function zo(){return vn(8,[mr,{provide:pn,useExisting:mr}])}function jo(n){Mn("NgRouterViewTransitions");let r=[{provide:gr,useValue:Mo},{provide:fr,useValue:m({skipNextTransition:!!n?.skipInitialTransition},n)}];return vn(9,r)}var Uo=[kt,{provide:nt,useClass:$e},Me,ut,{provide:Le,useFactory:Ao},ci,[]],xr=(()=>{class n{constructor(){}static forRoot(e,t){return{ngModule:n,providers:[Uo,[],{provide:pt,multi:!0,useValue:e},[],t?.errorHandler?{provide:vr,useValue:t.errorHandler}:[],{provide:it,useValue:t||{}},t?.useHash?el():tl(),Jc(),t?.preloadingStrategy?Fo(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?nl(t):[],t?.bindToComponentInputs?zo().\u0275providers:[],t?.enableViewTransitions?jo().\u0275providers:[],il()]}}static forChild(e){return{ngModule:n,providers:[{provide:pt,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({})}return n})();function Jc(){return{provide:Do,useFactory:()=>{let n=c(Ui),r=c(it);return r.scrollOffset&&n.setOffset(r.scrollOffset),new Xc(r)}}}function el(){return{provide:Kt,useClass:ma}}function tl(){return{provide:Kt,useClass:da}}function nl(n){return[n.initialNavigation==="disabled"?No().\u0275providers:[],n.initialNavigation==="enabledBlocking"?Po().\u0275providers:[]]}var _r=new w("");function il(){return[{provide:_r,useFactory:To},{provide:Pi,multi:!0,useExisting:_r}]}var al="@",ol=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=c(Ee);loadingSchedulerFn=c(sl,{optional:!0});_engine;constructor(e,t,i,a,o){this.doc=e,this.delegate=t,this.zone=i,this.animationType=a,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-7VYU5K35.js").then(i=>i),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(i=>{throw new H(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let o=new a(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let i=this.delegate.createRenderer(e,t);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new Cr(i);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let s=o.createRenderer(e,t);a.use(s),this.scheduler??=this.injector.get(Wr,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Rn()};static \u0275prov=R({token:n,factory:n.\u0275fac})}return n})(),Cr=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,t,i){this.delegate.insertBefore(r,e,t,i)}removeChild(r,e,t,i){this.delegate.removeChild(r,e,t,i)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,t,i){this.delegate.setAttribute(r,e,t,i)}removeAttribute(r,e,t){this.delegate.removeAttribute(r,e,t)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,t,i){this.delegate.setStyle(r,e,t,i)}removeStyle(r,e,t){this.delegate.removeStyle(r,e,t)}setProperty(r,e,t){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(r,e,t)),this.delegate.setProperty(r,e,t)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,t,i){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(r,e,t,i)),this.delegate.listen(r,e,t,i)}shouldReplay(r){return this.replay!==null&&r.startsWith(al)}},sl=new w("");function Bo(n="animations"){return Mn("NgAsyncAnimations"),Cn([{provide:Jr,useFactory:()=>new ol(c(J),c(ua),c(se),n)},{provide:Gr,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ho=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-RXMCMF6G.js").then(n=>n.HomeComponent)},{path:"about",loadComponent:()=>import("./chunk-NSZ3REP4.js").then(n=>n.AboutComponent)}];var $o={providers:[qr(),yr(Ho),Bo()]};var gi=["*"],ll=["content"],dl=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],ml=["mat-drawer","mat-drawer-content","*"];function hl(n,r){if(n&1){let e=Ge();u(0,"div",1),q("click",function(){We(e);let i=U();return Qe(i._onBackdropClicked())}),g()}if(n&2){let e=U();k("mat-drawer-shown",e._isShowingBackdrop())}}function ul(n,r){n&1&&(u(0,"mat-drawer-content"),x(1,2),g())}var pl=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],gl=["mat-sidenav","mat-sidenav-content","*"];function fl(n,r){if(n&1){let e=Ge();u(0,"div",1),q("click",function(){We(e);let i=U();return Qe(i._onBackdropClicked())}),g()}if(n&2){let e=U();k("mat-drawer-shown",e._isShowingBackdrop())}}function vl(n,r){n&1&&(u(0,"mat-sidenav-content"),x(1,2),g())}var _l=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var bl=new w("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Mr=new w("MAT_DRAWER_CONTAINER"),ui=(()=>{class n extends It{_platform=c(Ke);_changeDetectorRef=c(he);_container=c(Sr);constructor(){let e=c(O),t=c(Da),i=c(se);super(e,t,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,i){t&2&&(Te("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),k("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[ye([{provide:It,useExisting:n}]),_e],ngContentSelectors:gi,decls:1,vars:0,template:function(t,i){t&1&&(Y(),x(0))},encapsulation:2,changeDetection:0})}return n})(),kr=(()=>{class n{_elementRef=c(O);_focusTrapFactory=c(xa);_focusMonitor=c(Tn);_platform=c(Ke);_ngZone=c(se);_renderer=c(De);_interactivityChecker=c(On);_doc=c(J);_container=c(Mr,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ee(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ee(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ee(e))}_opened=y(!1);_openedVia=null;_animationStarted=new B;_animationEnd=new B;openedChange=new j(!0);_openedStream=this.openedChange.pipe(G(e=>e),I(()=>{}));openedStart=this._animationStarted.pipe(G(()=>this.opened),Ei(void 0));_closedStream=this.openedChange.pipe(G(e=>!e),I(()=>{}));closedStart=this._animationStarted.pipe(G(()=>!this.opened),Ei(void 0));_destroyed=new B;onPositionChanged=new j;_content;_modeChanged=new B;_injector=c(Ee);_changeDetectorRef=c(he);constructor(){this.openedChange.pipe(oe(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Pn(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),o(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",i),o=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":yt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,t,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(ve(1)).subscribe(o=>a(o?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(t&1&&Ce(ll,5),t&2){let a;S(a=M())&&(i._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){t&2&&(D("align",null)("tabIndex",i.mode!=="side"?"-1":null),Te("visibility",!i._container&&!i.opened?"hidden":null),k("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:gi,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(Y(),u(0,"div",1,0),x(2),g())},dependencies:[It],encapsulation:2,changeDetection:0})}return n})(),Sr=(()=>{class n{_dir=c(Ia,{optional:!0});_element=c(O);_ngZone=c(se);_changeDetectorRef=c(he);_animationDisabled=Ye();_transitionsEnabled=!1;_allDrawers;_drawers=new Ti;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ee(e)}_autosize=c(bl);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ee(e)}_backdropOverride=null;backdropClick=new j;_start=null;_end=null;_left=null;_right=null;_destroyed=new B;_doCheckSubject=new B;_contentMargins={left:null,right:null};_contentMarginChanges=new B;get scrollable(){return this._userContent||this._content}_injector=c(Ee);constructor(){let e=c(Ke),t=c(Aa);this._dir?.change.pipe(oe(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(oe(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ot(this._allDrawers),oe(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ot(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ur(10),oe(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(oe(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(oe(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(oe(this._drawers.changes)).subscribe(()=>{yt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(oe(ft(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,i,a){if(t&1&&be(a,ui,5)(a,kr,5),t&2){let o;S(o=M())&&(i._content=o.first),S(o=M())&&(i._allDrawers=o)}},viewQuery:function(t,i){if(t&1&&Ce(ui,5),t&2){let a;S(a=M())&&(i._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,i){t&2&&k("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[ye([{provide:Mr,useExisting:n}])],ngContentSelectors:ml,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(Y(dl),$(0,hl,1,2,"div",0),x(1),x(2,1),$(3,ul,2,0,"mat-drawer-content")),t&2&&(V(i.hasBackdrop?0:-1),f(3),V(i._content?-1:3))},dependencies:[ui],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),pi=(()=>{class n extends ui{static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[ye([{provide:It,useExisting:n}]),_e],ngContentSelectors:gi,decls:1,vars:0,template:function(t,i){t&1&&(Y(),x(0))},encapsulation:2,changeDetection:0})}return n})(),Rr=(()=>{class n extends kr{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ee(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Xt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Xt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,i){t&2&&(D("tabIndex",i.mode!=="side"?"-1":null)("align",null),Te("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),k("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[ye([{provide:kr,useExisting:n}]),_e],ngContentSelectors:gi,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(Y(),u(0,"div",1,0),x(2),g())},dependencies:[It],encapsulation:2,changeDetection:0})}return n})(),Vo=(()=>{class n extends Sr{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,i,a){if(t&1&&be(a,pi,5)(a,Rr,5),t&2){let o;S(o=M())&&(i._content=o.first),S(o=M())&&(i._allDrawers=o)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,i){t&2&&k("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[ye([{provide:Mr,useExisting:n},{provide:Sr,useExisting:n}]),_e],ngContentSelectors:gl,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(Y(pl),$(0,fl,1,2,"div",0),x(1),x(2,1),$(3,vl,2,0,"mat-sidenav-content")),t&2&&(V(i.hasBackdrop?0:-1),f(3),V(i._content?-1:3))},dependencies:[pi],styles:[_l],encapsulation:2,changeDetection:0})}return n})(),qo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[Bi,K,Bi]})}return n})();var wl=["*",[["mat-toolbar-row"]]],xl=["*","mat-toolbar-row"],Cl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Wo=(()=>{class n{_elementRef=c(O);_platform=c(Ke);_document=c(J);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,i,a){if(t&1&&be(a,Cl,5),t&2){let o;S(o=M())&&(i._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,i){t&2&&(Ze(i.color?"mat-"+i.color:""),k("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:xl,decls:2,vars:0,template:function(t,i){t&1&&(Y(wl),x(0),x(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Qo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[K]})}return n})();function Go(n){return Error(`Unable to find icon with the name "${n}"`)}function Sl(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Zo(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Ko(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Ve=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},Xo=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,a){return this._addSvgIconConfig(e,t,new Ve(i,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,a){let o=this._sanitizer.sanitize(bt.HTML,i);if(!o)throw Ko(i);let s=Mt(o);return this._addSvgIconConfig(e,t,new Ve("",s,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new Ve(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let a=this._sanitizer.sanitize(bt.HTML,t);if(!a)throw Ko(t);let o=Mt(a);return this._addSvgIconSetConfig(e,new Ve("",o,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(bt.RESOURCE_URL,e);if(!t)throw Zo(e);let i=this._cachedIconsByUrl.get(t);return i?p(fi(i)):this._loadSvgIconFromConfig(new Ve(e,null)).pipe(ne(a=>this._cachedIconsByUrl.set(t,a)),I(a=>fi(a)))}getNamedSvgIcon(e,t=""){let i=Yo(t,e),a=this._svgIconConfigs.get(i);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(i,a),this._getSvgFromConfig(a);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):yn(Go(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?p(fi(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(I(t=>fi(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return p(i);let a=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(vt(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(bt.RESOURCE_URL,o.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),p(null)})));return jr(a).pipe(I(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw Go(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let a=t[i];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(a),s=this._extractSvgIconFromSet(o,e,a.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ne(t=>e.svgText=t),I(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?p(null):this._fetchIcon(e).pipe(ne(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let o=a.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,i);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),i);let s=this._svgElementFromString(Mt("<svg></svg>"));return s.appendChild(o),this._setSvgAttributes(s,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(Mt("<svg></svg>")),i=e.attributes;for(let a=0;a<i.length;a++){let{name:o,value:s}=i[a];o!=="id"&&t.setAttribute(o,s)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,a=i?.withCredentials??!1;if(!this._httpClient)throw Sl();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(bt.RESOURCE_URL,t);if(!o)throw Zo(t);let s=this._inProgressUrlFetches.get(o);if(s)return s;let l=this._httpClient.get(o,{responseType:"text",withCredentials:a}).pipe(I(d=>Mt(d)),xn(()=>this._inProgressUrlFetches.delete(o)),Br());return this._inProgressUrlFetches.set(o,l),l}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(Yo(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let a=this._resolvers[i](t,e);if(a)return Ml(a)?new Ve(a.url,null,a.options):new Ve(a,null)}}static \u0275fac=function(t){return new(t||n)(le(ga,8),le(va),le(J,8),le(kn))};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function fi(n){return n.cloneNode(!0)}function Yo(n,r){return n+":"+r}function Ml(n){return!!(n.url&&n.options)}var Rl=["*"],Il=new w("MAT_ICON_DEFAULT_OPTIONS"),El=new w("mat-icon-location",{providedIn:"root",factory:()=>{let n=c(J),r=n?n.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Jo=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Dl=Jo.map(n=>`[${n}]`).join(", "),Al=/^url\(['"]?#(.*?)['"]?\)$/,Ht=(()=>{class n{_elementRef=c(O);_iconRegistry=c(Xo);_location=c(El);_errorHandler=c(kn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Re.EMPTY;constructor(){let e=c(new xt("aria-hidden"),{optional:!0}),t=c(Il,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,a)=>{i.forEach(o=>{a.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Dl),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)Jo.forEach(o=>{let s=t[a],l=s.getAttribute(o),d=l?l.match(Al):null;if(d){let h=i.get(s);h||(h=[],i.set(s,h)),h.push({name:o,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(ve(1)).subscribe(a=>this._setSvgElement(a),a=>{let o=`Error retrieving icon ${t}:${i}! ${a.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(D("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Ze(i.color?"mat-"+i.color:""),k("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ie],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Rl,decls:1,vars:0,template:function(t,i){t&1&&(Y(),x(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),$t=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[K]})}return n})();var vi=class n{configService=c(Oe);eventBus=c(Xe);toggleSidebar(){this.eventBus.emit("sidebar:toggle",void 0)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-header"]],decls:8,vars:1,consts:[[1,"app-header"],["mat-icon-button","","aria-label","Toggle navigation",3,"click"],[1,"app-title"],[1,"spacer"]],template:function(e,t){e&1&&(u(0,"mat-toolbar",0)(1,"button",1),q("click",function(){return t.toggleSidebar()}),u(2,"mat-icon"),L(3,"menu"),g()(),u(4,"span",2),L(5),g(),A(6,"span",3)(7,"app-digital-clock"),g()),e&2&&(f(5),W(t.configService.appTitle()))},dependencies:[Qo,Wo,Fn,Ln,$t,Ht,La],styles:[".app-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100;background:var(--mat-sys-surface-container);color:var(--mat-sys-on-surface);border-bottom:1px solid var(--mat-sys-outline-variant);gap:8px}.app-title[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);white-space:nowrap}.spacer[_ngcontent-%COMP%]{flex:1}@media(max-width:768px){app-digital-clock[_ngcontent-%COMP%]{display:none}}"]})};var _i=class n{configService=c(Oe);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-footer"]],decls:3,vars:1,consts:[[1,"app-footer"]],template:function(e,t){e&1&&(wt(0,"footer",0)(1,"span"),L(2),Zt()()),e&2&&(f(2),W(t.configService.wording().footerText))},styles:[".app-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:16px 24px;background:var(--mat-sys-surface-container);color:var(--mat-sys-on-surface-variant);border-top:1px solid var(--mat-sys-outline-variant);font:var(--mat-sys-body-small)}"]})};var _n=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Er=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=ee(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ee(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,i){t&2&&(D("aria-orientation",i.vertical?"vertical":"horizontal"),k("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})(),bi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[K]})}return n})();var es=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[K]})}return n})();var Ol=["*"],Pl=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Nl=["unscopedContent"],Ll=["text"],Fl=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],zl=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var jl=new w("ListOption"),Ar=(()=>{class n{_elementRef=c(O);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Ul=(()=>{class n{_elementRef=c(O);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),Tr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),ts=(()=>{class n{_listOption=c(jl,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,hostVars:4,hostBindings:function(t,i){t&2&&k("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),Bl=(()=>{class n extends ts{static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275dir=E({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[_e]})}return n})(),Or=(()=>{class n extends ts{static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275dir=E({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[_e]})}return n})(),Hl=new w("MAT_LIST_CONFIG"),Dr=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ee(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ee(e))}_disabled=y(!1);_defaultOptions=c(Hl,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,hostVars:1,hostBindings:function(t,i){t&2&&D("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),$l=(()=>{class n{_elementRef=c(O);_ngZone=c(se);_listBase=c(Dr,{optional:!0});_platform=c(Ke);_hostElement;_isButtonElement;_noopAnimations=Ye();_avatars;_icons;set lines(e){this._explicitLines=Xt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ee(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ee(e))}_disabled=y(!1);_subscriptions=new Re;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(St).load(Nn);let e=c(Ra,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ma(this,this._ngZone,this._hostElement,this._platform,c(Ee)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ft(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&t===1;i.classList.toggle("mdc-list-item__primary-text",a),i.classList.toggle("mdc-list-item__secondary-text",!a)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,contentQueries:function(t,i,a){if(t&1&&be(a,Bl,4)(a,Or,4),t&2){let o;S(o=M())&&(i._avatars=o),S(o=M())&&(i._icons=o)}},hostVars:4,hostBindings:function(t,i){t&2&&(D("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),k("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var ns=(()=>{class n extends $l{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ee(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,i,a){if(t&1&&be(a,Ul,5)(a,Ar,5)(a,Tr,5),t&2){let o;S(o=M())&&(i._lines=o),S(o=M())&&(i._titles=o),S(o=M())&&(i._meta=o)}},viewQuery:function(t,i){if(t&1&&Ce(Nl,5)(Ll,5),t&2){let a;S(a=M())&&(i._unscopedContent=a.first),S(a=M())&&(i._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,i){t&2&&(D("aria-current",i._getAriaCurrent()),k("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[_e],ngContentSelectors:zl,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,i){t&1&&(Y(Fl),x(0),u(1,"span",1),x(2,1),x(3,2),u(4,"span",2,0),q("cdkObserveContent",function(){return i._updateItemLines(!0)}),x(6,3),g()(),x(7,4),x(8,5),A(9,"div",3))},dependencies:[ya],encapsulation:2,changeDetection:0})}return n})();var is=(()=>{class n extends Dr{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(i){return(e||(e=me(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[ye([{provide:Dr,useExisting:n}]),_e],ngContentSelectors:Ol,decls:1,vars:0,template:function(t,i){t&1&&(Y(),x(0))},styles:[Pl],encapsulation:2,changeDetection:0})}return n})();var rs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[wa,Ea,es,K,bi]})}return n})();var as=new w("CdkAccordion");var os=(()=>{class n{accordion=c(as,{optional:!0,skipSelf:!0});_changeDetectorRef=c(he);_expansionDispatcher=c(_n);_openCloseAllSubscription=Re.EMPTY;closed=new j;opened=new j;destroyed=new j;expandedChange=new j;id=c(Rt).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=y(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",ie],disabled:[2,"disabled","disabled",ie]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[ye([{provide:as,useValue:void 0}])]})}return n})(),ss=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({})}return n})();var Ql=["body"],Gl=["bodyWrapper"],Zl=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Kl=["mat-expansion-panel-header","*","mat-action-row"];function Yl(n,r){}var Xl=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Jl=["mat-panel-title","mat-panel-description","*"];function ed(n,r){n&1&&(wt(0,"span",1),_t(),wt(1,"svg",2),ia(2,"path",3),Zt()())}var cs=new w("MAT_ACCORDION"),ls=new w("MAT_EXPANSION_PANEL"),td=(()=>{class n{_template=c(Xr);_expansionPanel=c(ls,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),ds=new w("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Pr=(()=>{class n extends os{_viewContainerRef=c(In);_animationsDisabled=Ye();_document=c(J);_ngZone=c(se);_elementRef=c(O);_renderer=c(De);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new j;afterCollapse=new j;_inputChanges=new B;accordion=c(cs,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=c(Rt).getId("mat-expansion-panel-header-");constructor(){super();let e=c(ds,{optional:!0});this._expansionDispatcher=c(_n),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ot(null),G(()=>this.expanded&&!this._portal),ve(1)).subscribe(()=>{this._portal=new Ta(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,i,a){if(t&1&&be(a,td,5),t&2){let o;S(o=M())&&(i._lazyContent=o.first)}},viewQuery:function(t,i){if(t&1&&Ce(Ql,5)(Gl,5),t&2){let a;S(a=M())&&(i._body=a.first),S(a=M())&&(i._bodyWrapper=a.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,i){t&2&&k("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",ie],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[ye([{provide:cs,useValue:void 0},{provide:ls,useExisting:n}]),_e,Ue],ngContentSelectors:Kl,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(Y(Zl),x(0),u(1,"div",2,0)(3,"div",3,1)(5,"div",4),x(6,1),Gt(7,Yl,0,0,"ng-template",5),g(),x(8,2),g()()),t&2&&(f(),D("inert",i.expanded?null:""),f(2),Z("id",i.id),D("aria-labelledby",i._headerId),f(4),Z("cdkPortalOutlet",i._portal))},dependencies:[Oa],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return n})();var ms=(()=>{class n{panel=c(Pr,{host:!0});_element=c(O);_focusMonitor=c(Tn);_changeDetectorRef=c(he);_parentChangeSubscription=Re.EMPTY;constructor(){c(St).load(Nn);let e=this.panel,t=c(ds,{optional:!0}),i=c(new xt("tabindex"),{optional:!0}),a=e.accordion?e.accordion._stateChanges.pipe(G(o=>!!(o.hideToggle||o.togglePosition))):ae;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=ft(e.opened,e.closed,a,e._inputChanges.pipe(G(o=>!!(o.hideToggle||o.disabled||o.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(G(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Pn(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,i){t&1&&q("click",function(){return i._toggle()})("keydown",function(o){return i._keydown(o)}),t&2&&(D("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),Te("height",i._getHeaderHeight()),k("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ct(e)]},ngContentSelectors:Jl,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,i){t&1&&(Y(Xl),wt(0,"span",0),x(1),x(2,1),x(3,2),Zt(),$(4,ed,3,0,"span",1)),t&2&&(k("mat-content-hide-toggle",!i._showToggle()),f(4),V(i._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var hs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})();var us=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[ss,Pa,K]})}return n})();var ps="mat-badge-content",id=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return n})(),gs=(()=>{class n{_ngZone=c(se);_elementRef=c(O);_ariaDescriber=c(ka);_renderer=c(De);_animationsDisabled=Ye();_idGenerator=c(Rt);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=c(On);_document=c(J);constructor(){let e=c(St);e.load(id),e.load(_a)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement("span"),t="mat-badge-active";return e.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),e.setAttribute("aria-hidden","true"),e.classList.add(ps),this._animationsDisabled&&e.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??""}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${ps}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,i){t&2&&k("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small",i.size==="small")("mat-badge-medium",i.size==="medium")("mat-badge-large",i.size==="large")("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",ie],disabled:[2,"matBadgeDisabled","disabled",ie],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",ie]}})}return n})(),fs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[Ca,K]})}return n})();var vs=(n,r)=>r.id;function ad(n,r){if(n&1){let e=Ge();u(0,"a",8),q("click",function(){We(e);let i=U(3);return Qe(i.navigated.emit())}),u(1,"mat-icon",9),L(2),g(),u(3,"span",10),L(4),g()()}if(n&2){let e=r.$implicit;Z("routerLink",e.route)("disabled",e.disabled??!1),f(2),W(e.icon),f(2),W(e.label)}}function od(n,r){if(n&1&&(u(0,"mat-expansion-panel",6)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon",7),L(4),g(),u(5,"span"),L(6),g()()(),Li(7,ad,5,4,"a",5,vs),g()),n&2){let e=U().$implicit;k("disabled",e.disabled),f(4),W(e.icon),f(2),W(e.label),f(),Fi(e.children)}}function sd(n,r){if(n&1&&A(0,"span",11),n&2){let e=U(2).$implicit;Z("matBadge",e.badge)}}function cd(n,r){if(n&1){let e=Ge();u(0,"a",8),q("click",function(){We(e);let i=U(2);return Qe(i.navigated.emit())}),u(1,"mat-icon",9),L(2),g(),u(3,"span",10),L(4),g(),$(5,sd,1,1,"span",11),g()}if(n&2){let e=U().$implicit;Z("routerLink",e.route)("disabled",e.disabled??!1),f(2),W(e.icon),f(2),W(e.label),f(),V(e.badge?5:-1)}}function ld(n,r){n&1&&A(0,"mat-divider")}function dd(n,r){if(n&1&&($(0,od,9,4,"mat-expansion-panel",4)(1,cd,6,5,"a",5),$(2,ld,1,0,"mat-divider")),n&2){let e=r.$implicit;V(e.children&&e.children.length>0?0:1),f(2),V(e.dividerAfter?2:-1)}}var yi=class n{configService=c(Oe);navigated=oa();static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-sidebar"]],outputs:{navigated:"navigated"},decls:10,vars:2,consts:[[1,"sidebar-content"],[1,"sidebar-header"],[1,"sidebar-title"],[1,"sidebar-subtitle"],[1,"nav-expansion",3,"disabled"],["mat-list-item","","routerLinkActive","active-link",3,"routerLink","disabled"],[1,"nav-expansion"],[1,"nav-icon"],["mat-list-item","","routerLinkActive","active-link",3,"click","routerLink","disabled"],["matListItemIcon",""],["matListItemTitle",""],["matListItemMeta","","matBadgeColor","primary",3,"matBadge"]],template:function(e,t){e&1&&(u(0,"div",0)(1,"div",1)(2,"span",2),L(3),g(),u(4,"span",3),L(5),g()(),A(6,"mat-divider"),u(7,"mat-nav-list"),Li(8,dd,3,2,null,null,vs),g()()),e&2&&(f(3),W(t.configService.appTitle()),f(2),W(t.configService.appSubtitle()),f(3),Fi(t.configService.menu()))},dependencies:[xr,Bt,br,rs,is,ns,Or,Er,Ar,Tr,$t,Ht,us,Pr,ms,hs,fs,gs,bi],styles:[".sidebar-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.sidebar-header[_ngcontent-%COMP%]{padding:24px 16px 16px;display:flex;flex-direction:column;gap:4px}.sidebar-title[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium);color:var(--mat-sys-on-surface)}.sidebar-subtitle[_ngcontent-%COMP%]{font:var(--mat-sys-body-small);color:var(--mat-sys-on-surface-variant)}.nav-icon[_ngcontent-%COMP%]{margin-right:8px}.nav-expansion[_ngcontent-%COMP%]{box-shadow:none!important;background:transparent}.active-link[_ngcontent-%COMP%]{background:var(--mat-sys-secondary-container)!important;color:var(--mat-sys-on-secondary-container)!important;border-radius:28px}"]})};var wi=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-main-content"]],decls:2,vars:0,consts:[[1,"main-content"]],template:function(e,t){e&1&&(u(0,"main",0),A(1,"router-outlet"),g())},dependencies:[un],styles:[".main-content[_ngcontent-%COMP%]{flex:1;padding:24px;overflow-y:auto}@media(max-width:768px){.main-content[_ngcontent-%COMP%]{padding:16px}}"]})};var md=["determinateSpinner"];function hd(n,r){if(n&1&&(_t(),u(0,"svg",11),A(1,"circle",12),g()),n&2){let e=U();D("viewBox",e._viewBox()),f(),Te("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),D("r",e._circleRadius())}}var ud=new w("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:_s})}),_s=100,pd=10,bs=(()=>{class n{_elementRef=c(O);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=c(ud),t=Sa(),i=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=_s;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-pd)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,i){if(t&1&&Ce(md,5),t&2){let a;S(a=M())&&(i._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,i){t&2&&(D("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),Ze("mat-"+i.color),Te("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),k("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ct],diameter:[2,"diameter","diameter",Ct],strokeWidth:[2,"strokeWidth","strokeWidth",Ct]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,i){if(t&1&&(Gt(0,hd,2,8,"ng-template",null,0,ji),u(2,"div",2,1),_t(),u(4,"svg",3),A(5,"circle",4),g()(),Ai(),u(6,"div",5)(7,"div",6)(8,"div",7),Dn(9,8),g(),u(10,"div",9),Dn(11,8),g(),u(12,"div",10),Dn(13,8),g()()()),t&2){let a=zi(1);f(4),D("viewBox",i._viewBox()),f(),Te("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),D("r",i._circleRadius()),f(4),Z("ngTemplateOutlet",a),f(2),Z("ngTemplateOutlet",a),f(2),Z("ngTemplateOutlet",a)}},dependencies:[ha],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ys=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=P({type:n});static \u0275inj=T({imports:[K]})}return n})();function fd(n,r){n&1&&A(0,"mat-spinner",2)}function vd(n,r){if(n&1&&(u(0,"div",0)(1,"div",1),$(2,fd,1,0,"mat-spinner",2),u(3,"p",3),L(4),g()()()),n&2){let e=U();Z("@fadeInOut",void 0),f(2),V(e.config().showSpinner?2:-1),f(2),W(e.message())}}var xi=class n{eventBus=c(Xe);configService=c(Oe);destroyRef=c(je);visible=y(!1);message=y("");config=this.configService.loading;showTimeout=null;constructor(){this.message.set(this.configService.loading().message),this.eventBus.on("loading:show").pipe(ke(this.destroyRef)).subscribe(r=>{r?.message&&this.message.set(r.message);let e=this.configService.loading().delay;e>0?this.showTimeout=setTimeout(()=>this.visible.set(!0),e):this.visible.set(!0)}),this.eventBus.on("loading:hide").pipe(ke(this.destroyRef)).subscribe(()=>{this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null),this.visible.set(!1),this.message.set(this.configService.loading().message)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-loading-screen"]],decls:1,vars:1,consts:[[1,"loading-overlay"],[1,"loading-content"],["diameter","48"],[1,"loading-message"]],template:function(e,t){e&1&&$(0,vd,5,3,"div",0),e&2&&V(t.visible()?0:-1)},dependencies:[ys,bs],styles:[".loading-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(var(--mat-sys-surface-rgb, 255, 255, 255),.85);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.loading-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px}.loading-message[_ngcontent-%COMP%]{font:var(--mat-sys-body-large);color:var(--mat-sys-on-surface-variant);margin:0}"],data:{animation:[Yt("fadeInOut",[ct(":enter",[Be({opacity:0}),st("200ms ease-in",Be({opacity:1}))]),ct(":leave",[st("200ms ease-out",Be({opacity:0}))])])]}})};function _d(n,r){if(n&1&&(u(0,"strong",5),L(1),g()),n&2){let e=U(2);f(),W(e.notification().title)}}function bd(n,r){if(n&1){let e=Ge();u(0,"button",8),q("click",function(){We(e);let i=U(2);return Qe(i.dismiss())}),u(1,"mat-icon"),L(2,"close"),g()()}}function yd(n,r){if(n&1&&(u(0,"div",1)(1,"div",2)(2,"mat-icon",3),L(3),g(),u(4,"div",4),$(5,_d,2,1,"strong",5),u(6,"span",6),L(7),g()(),$(8,bd,3,0,"button",7),g()()),n&2){let e=U();Ze("message-"+e.notification().type),Z("@slideInOut",void 0),f(3),W(e.iconMap[e.notification().type]),f(2),V(e.notification().title?5:-1),f(2),W(e.notification().message),f(),V(e.notification().dismissible!==!1?8:-1)}}var Ci=class n{eventBus=c(Xe);destroyRef=c(je);visible=y(!1);notification=y(null);iconMap={success:"check_circle",error:"error",warning:"warning",info:"info"};constructor(){this.eventBus.on("message:show").pipe(ke(this.destroyRef)).subscribe(r=>{this.notification.set(r),this.visible.set(!0),r.duration&&r.duration>0&&setTimeout(()=>this.dismiss(),r.duration)}),this.eventBus.on("message:hide").pipe(ke(this.destroyRef)).subscribe(()=>this.dismiss())}dismiss(){this.visible.set(!1),this.notification.set(null)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-message-panel"]],decls:1,vars:1,consts:[[1,"message-panel",3,"class"],[1,"message-panel"],[1,"message-content"],[1,"message-icon"],[1,"message-text"],[1,"message-title"],[1,"message-body"],["mat-icon-button","","aria-label","Dismiss message"],["mat-icon-button","","aria-label","Dismiss message",3,"click"]],template:function(e,t){e&1&&$(0,yd,9,7,"div",0),e&2&&V(t.visible()?0:-1)},dependencies:[$t,Ht,Fn,Ln],styles:[".message-panel[_ngcontent-%COMP%]{padding:16px;border-radius:12px;margin:16px}.message-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px}.message-text[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:4px}.message-title[_ngcontent-%COMP%]{font:var(--mat-sys-title-small)}.message-body[_ngcontent-%COMP%]{font:var(--mat-sys-body-medium)}.message-success[_ngcontent-%COMP%]{background:var(--mat-sys-tertiary-container);color:var(--mat-sys-on-tertiary-container)}.message-error[_ngcontent-%COMP%]{background:var(--mat-sys-error-container);color:var(--mat-sys-on-error-container)}.message-warning[_ngcontent-%COMP%]{background:var(--mat-sys-secondary-container);color:var(--mat-sys-on-secondary-container)}.message-info[_ngcontent-%COMP%]{background:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container)}"],data:{animation:[Yt("slideInOut",[ct(":enter",[Be({transform:"translateY(-100%)",opacity:0}),st("300ms ease-out",Be({transform:"translateY(0)",opacity:1}))]),ct(":leave",[st("200ms ease-in",Be({transform:"translateY(-100%)",opacity:0}))])])]}})};var wd=["sidenav"],ki=class n{configService=c(Oe);eventBus=c(Xe);breakpointObserver=c(ba);destroyRef=c(je);sidenav;sidenavMode=y("side");sidenavOpened=y(!0);isMobile=y(!1);ngOnInit(){let r=this.configService.sidebar();this.breakpointObserver.observe([`(max-width: ${r.mobileBreakpoint}px)`,`(max-width: ${r.tabletBreakpoint}px)`]).pipe(ke(this.destroyRef)).subscribe(e=>{let t=e.breakpoints[`(max-width: ${r.mobileBreakpoint}px)`],i=e.breakpoints[`(max-width: ${r.tabletBreakpoint}px)`];t?(this.isMobile.set(!0),this.sidenavMode.set("over"),this.sidenavOpened.set(!1)):i?(this.isMobile.set(!1),this.sidenavMode.set("push"),this.sidenavOpened.set(!1)):(this.isMobile.set(!1),this.sidenavMode.set("side"),this.sidenavOpened.set(!0))}),this.eventBus.on("sidebar:toggle").pipe(ke(this.destroyRef)).subscribe(()=>this.sidenav?.toggle()),this.eventBus.on("sidebar:open").pipe(ke(this.destroyRef)).subscribe(()=>this.sidenav?.open()),this.eventBus.on("sidebar:close").pipe(ke(this.destroyRef)).subscribe(()=>this.sidenav?.close())}onNavigated(){this.isMobile()&&this.sidenav?.close()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-shell"]],viewQuery:function(e,t){if(e&1&&Ce(wd,5),e&2){let i;S(i=M())&&(t.sidenav=i.first)}},decls:11,vars:3,consts:[["sidenav",""],[1,"shell-container"],[1,"sidenav-container"],["fixedTopGap","64",1,"app-sidenav",3,"openedChange","mode","opened","fixedInViewport"],[3,"navigated"],[1,"sidenav-content"]],template:function(e,t){e&1&&(u(0,"div",1),A(1,"app-header"),u(2,"mat-sidenav-container",2)(3,"mat-sidenav",3,0),q("openedChange",function(a){return t.sidenavOpened.set(a)}),u(5,"app-sidebar",4),q("navigated",function(){return t.onNavigated()}),g()(),u(6,"mat-sidenav-content",5),A(7,"app-message-panel")(8,"app-main-content"),g()(),A(9,"app-footer")(10,"app-loading-screen"),g()),e&2&&(f(3),Z("mode",t.sidenavMode())("opened",t.sidenavOpened())("fixedInViewport",t.isMobile()))},dependencies:[qo,Rr,Vo,pi,vi,_i,yi,wi,xi,Ci],styles:[".shell-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh}.sidenav-container[_ngcontent-%COMP%]{flex:1;overflow:hidden}.app-sidenav[_ngcontent-%COMP%]{width:280px;background:var(--mat-sys-surface-container-low)}.sidenav-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media(max-width:768px){.app-sidenav[_ngcontent-%COMP%]{width:260px}}"]})};var Si=class n{toastService=c(Na);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&A(0,"app-shell")},dependencies:[ki],encapsulation:2})};pa(Si,$o).catch(n=>console.error(n));
