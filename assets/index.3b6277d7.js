(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function y(){}function we(e){return e()}function ue(){return Object.create(null)}function j(e){e.forEach(we)}function $e(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let H;function Ee(e,t){return H||(H=document.createElement("a")),H.href=t,e===H.href}function Ne(e){return Object.keys(e).length===0}function Le(e,...t){if(e==null)return y;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function x(e,t,n){e.$$.on_destroy.push(Le(t,n))}function p(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function B(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function L(){return I(" ")}function Oe(){return I("")}function z(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ze(e){return Array.from(e.childNodes)}function Ae(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ae(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let oe;function F(e){oe=e}const M=[],fe=[],D=[],de=[],Re=Promise.resolve();let se=!1;function je(){se||(se=!0,Re.then(Ce))}function le(e){D.push(e)}const ee=new Set;let G=0;function Ce(){const e=oe;do{for(;G<M.length;){const t=M[G];G++,F(t),Ie(t.$$)}for(F(null),M.length=0,G=0;fe.length;)fe.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];ee.has(n)||(ee.add(n),n())}D.length=0}while(M.length);for(;de.length;)de.pop()();se=!1,ee.clear(),F(e)}function Ie(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}const K=new Set;let Me;function U(e,t){e&&e.i&&(K.delete(e),e.i(t))}function te(e,t,n,s){if(e&&e.o){if(K.has(e))return;K.add(e),Me.c.push(()=>{K.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function ne(e){e&&e.c()}function W(e,t,n,s){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),s||le(()=>{const r=e.$$.on_mount.map(we).filter($e);e.$$.on_destroy?e.$$.on_destroy.push(...r):j(r),e.$$.on_mount=[]}),i.forEach(le)}function Y(e,t){const n=e.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(e,t){e.$$.dirty[0]===-1&&(M.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,s,l,i,r,o=[-1]){const c=oe;F(e);const f=e.$$={fragment:null,ctx:[],props:i,update:y,not_equal:l,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:ue(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};r&&r(f.root);let d=!1;if(f.ctx=n?n(e,t.props||{},(g,k,..._)=>{const m=_.length?_[0]:k;return f.ctx&&l(f.ctx[g],f.ctx[g]=m)&&(!f.skip_bound&&f.bound[g]&&f.bound[g](m),d&&Fe(e,g)),k}):[],f.update(),d=!0,j(f.before_update),f.fragment=s?s(f.ctx):!1,t.target){if(t.hydrate){const g=ze(t.target);f.fragment&&f.fragment.l(g),g.forEach(w)}else f.fragment&&f.fragment.c();t.intro&&U(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),Ce()}F(c)}class Q{$destroy(){Y(this,1),this.$destroy=y}$on(t,n){if(!$e(n))return y;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Te="/assets/svelte.a39f39b7.svg";function Pe(e){let t,n,s,l,i;return{c(){t=v("header"),n=v("img"),l=L(),i=v("div"),i.innerHTML=`<span class="nerdle-name svelte-375sbh">nerdle</span> 
    <span class="nerdle-dot svelte-375sbh">.</span>`,Ee(n.src,s=Te)||h(n,"src",s),h(n,"class","logo svelte"),h(n,"alt","Svelte Logo"),h(i,"class","logo nerdle svelte-375sbh"),h(t,"class","header svelte-375sbh")},m(r,o){C(r,t,o),p(t,n),p(t,l),p(t,i)},p:y,i:y,o:y,d(r){r&&w(t)}}}class Ve extends Q{constructor(t){super(),J(this,t,null,Pe,P,{})}}const S={notVerified:"not-verified",notIncluded:"not-included",included:"included",correct:"correct"},O={success:"success",failed:"failed",continue:"continue"},E={success:"success",error:"error"},ie={formulaError:"That guess doesn't compute!",gameClear:"Congratulations!",gameFailed:e=>`You lost, the calculation was ${e}.`},qe=(e,t={})=>{const n=["12+32=44","12+35=47","89-76=13","1*3*8=24","9/3+8=11"];return n[Math.floor(Math.random()*n.length)]},me=e=>{let t={};for(let n=0;n<e.length;n++)e[n]in t?t[e[n]]+=1:t[e[n]]=1;return t},He=(e,t,n={})=>{const s=qe(t,n),l=me(s);return{rowSize:e,columnSize:t,grid:[...Array(e)].map(r=>Array(t).fill({value:"",state:S.notVerified})),gridSummary:[1,2,3,4,5,6,7,8,9,0,"+","-","*","/","="].reduce((r,o)=>({...r,[o]:S.notVerified}),{}),setValue:function(r,o){r.row>=0&&r.row<this.rowSize&&r.column>=0&&r.column<this.columnSize&&(this.grid[r.row][r.column]={...this.grid[r.row][r.column],value:o})},setState:function(r,o){r.row>=0&&r.row<this.rowSize&&r.column>=0&&r.column<this.columnSize&&(this.grid[r.row][r.column]={...this.grid[r.row][r.column],state:o})},updateSummaryState:function(r,o){const c=this.gridSummary[r];c===S.correct||c===S.notIncluded||(this.gridSummary[r]=o)},problem:s,problemCountStr:l,gameState:O.continue,verify:function(r){let o="";for(let d=0;d<this.columnSize;d++)o+=this.grid[r][d].value+"";const c=this.verifyFormulaState(o);return c===E.error?c:this.verifyGameState(r,o)},verifyGameState:function(r,o){for(let d=0;d<this.columnSize;d++){if(this.problem.indexOf(o[d])===-1){this.setState({row:r,column:d},S.notIncluded),this.updateSummaryState(o[d],S.notIncluded);continue}if(this.problem[d]===o[d]){this.setState({row:r,column:d},S.correct),this.updateSummaryState(o[d],S.correct);continue}this.setState({row:r,column:d},S.included),this.updateSummaryState(o[d],S.included)}const c=me(o);for(const[d,g]of Object.entries(c)){if(g<=1||!(d in this.problemCountStr))continue;let k=this.problemCountStr[d];if(g<=k)continue;let _=g-k;for(let m=0;m<this.columnSize&&!(this.grid[r][m].value==d&&this.grid[r][m].state!==S.correct&&(this.setState({row:r,column:m},S.notIncluded),_-=1,_<=0));m++);}let f=!0;for(let d=0;d<this.columnSize;d++)if(this.grid[r][d].state!==S.correct){f=!1;break}return f?this.gameState=O.success:r===this.rowSize-1?this.gameState=O.failed:this.gameState=O.continue,this.gameState},verifyFormulaState:function(r){if(r.length!==this.columnSize)return E.error;const o=r.split("=");if(o.length!==2)return E.error;const c=/^[1-9][0-9]*$/;if(!c.test(o[1]))return E.error;const f=/\+|-|\*|\//,d=o[0].split(f);if(d.includes(""))return E.error;for(let _ of d)if(!c.test(_))return E.error;const g=Function("return ("+o[0]+");")(),k=Number(o[1]);return g!==k?E.error:E.success}}},R=[];function ce(e,t=y){let n;const s=new Set;function l(o){if(P(e,o)&&(e=o,n)){const c=!R.length;for(const f of s)f[1](),R.push(f,e);if(c){for(let f=0;f<R.length;f+=2)R[f][0](R[f+1]);R.length=0}}}function i(o){l(o(e))}function r(o,c=y){const f=[o,c];return s.add(f),s.size===1&&(n=t(l)||y),o(e),()=>{s.delete(f),s.size===0&&(n(),n=null)}}return{set:l,update:i,subscribe:r}}const T=ce(!1),X=ce("sample message"),Z=ce("clear"),Ge=e=>{T.set(!0),setTimeout(()=>{T.set(!1)},e)},Be=()=>{T.set(!0),X.set(ie.gameClear),Z.set("#d4edda")},De=e=>{T.set(!0),X.set(ie.gameFailed(e)),Z.set("pink")},Ke=()=>{Ge(2e3),X.set(ie.formulaError),Z.set("pink")},re={gameClear:Be,gameFailed:De,formulaError:Ke},Ue=(e,t)=>({row:0,column:0,moveNextRow:function(){this.row>=0&&this.row<e-1&&(this.row+=1,this.column=0)},moveRight:function(){this.column>=0&&this.column<t-1&&(this.column+=1)},moveLeft:function(){this.column>0&&(this.column-=1)},fixed:function(){this.row=-1,this.column=-1}});function he(e,t,n){const s=e.slice();return s[16]=t[n],s}function _e(e,t,n){const s=e.slice();return s[19]=t[n],s}function ge(e,t,n){const s=e.slice();return s[22]=t[n],s[24]=n,s}function pe(e,t,n){const s=e.slice();return s[25]=t[n],s[27]=n,s}function be(e){let t,n=e[0].grid[e[24]][e[27]].value+"",s,l,i,r;return{c(){t=v("div"),s=I(n),h(t,"class",l="block "+e[0].grid[e[24]][e[27]].state+" "+(e[1].row==e[24]&&e[1].column==e[27]?"selected":"")+" svelte-7ig644"),h(t,"role","navigation"),h(t,"name","cell"+e[24]+e[27])},m(o,c){C(o,t,c),p(t,s),i||(r=[z(t,"click",e[5]),z(t,"keyup",Ye)],i=!0)},p(o,c){c&1&&n!==(n=o[0].grid[o[24]][o[27]].value+"")&&Ae(s,n),c&3&&l!==(l="block "+o[0].grid[o[24]][o[27]].state+" "+(o[1].row==o[24]&&o[1].column==o[27]?"selected":"")+" svelte-7ig644")&&h(t,"class",l)},d(o){o&&w(t),i=!1,j(r)}}}function ve(e){let t,n,s=[...Array(e[3]).keys()],l=[];for(let i=0;i<s.length;i+=1)l[i]=be(pe(e,s,i));return{c(){t=v("div");for(let i=0;i<l.length;i+=1)l[i].c();n=L(),h(t,"class","row svelte-7ig644"),h(t,"name","row"+e[24])},m(i,r){C(i,t,r);for(let o=0;o<l.length;o+=1)l[o].m(t,null);p(t,n)},p(i,r){if(r&35){s=[...Array(i[3]).keys()];let o;for(o=0;o<s.length;o+=1){const c=pe(i,s,o);l[o]?l[o].p(c,r):(l[o]=be(c),l[o].c(),l[o].m(t,n))}for(;o<l.length;o+=1)l[o].d(1);l.length=s.length}},d(i){i&&w(t),B(l,i)}}}function ye(e){let t,n,s,l,i;function r(){return e[9](e[19])}return{c(){t=v("button"),n=I(e[19]),h(t,"aria-label",e[19]+""),h(t,"class",s="input-button "+e[0].gridSummary[e[19]]+" svelte-7ig644")},m(o,c){C(o,t,c),p(t,n),l||(i=z(t,"click",r),l=!0)},p(o,c){e=o,c&1&&s!==(s="input-button "+e[0].gridSummary[e[19]]+" svelte-7ig644")&&h(t,"class",s)},d(o){o&&w(t),l=!1,i()}}}function Se(e){let t,n,s,l,i;function r(){return e[10](e[16])}return{c(){t=v("button"),n=I(e[16]),h(t,"aria-label",e[16]),h(t,"class",s="input-button "+e[0].gridSummary[e[16]]+" svelte-7ig644")},m(o,c){C(o,t,c),p(t,n),l||(i=z(t,"click",r),l=!0)},p(o,c){e=o,c&1&&s!==(s="input-button "+e[0].gridSummary[e[16]]+" svelte-7ig644")&&h(t,"class",s)},d(o){o&&w(t),l=!1,i()}}}function We(e){let t,n,s,l,i,r,o,c,f,d,g,k,_=[...Array(e[2]).keys()],m=[];for(let u=0;u<_.length;u+=1)m[u]=ve(ge(e,_,u));let V=[1,2,3,4,5,6,7,8,9,0],$=[];for(let u=0;u<10;u+=1)$[u]=ye(_e(e,V,u));let q=["+","-","*","/","="],A=[];for(let u=0;u<5;u+=1)A[u]=Se(he(e,q,u));return{c(){t=v("div");for(let u=0;u<m.length;u+=1)m[u].c();n=L(),s=v("div"),l=v("div");for(let u=0;u<10;u+=1)$[u].c();i=L(),r=v("div");for(let u=0;u<5;u+=1)A[u].c();o=L(),c=v("button"),c.innerHTML='<span class="text-base svelte-7ig644">Enter</span>',f=L(),d=v("button"),d.innerHTML='<span class="text-base svelte-7ig644">Delete</span>',h(t,"class","grid svelte-7ig644"),h(l,"class","button-area svelte-7ig644"),h(c,"aria-label","Enter"),h(c,"class","input-button text svelte-7ig644"),h(d,"aria-label","Delete"),h(d,"class","input-button text svelte-7ig644"),h(r,"class","button-area svelte-7ig644")},m(u,b){C(u,t,b);for(let a=0;a<m.length;a+=1)m[a].m(t,null);C(u,n,b),C(u,s,b),p(s,l);for(let a=0;a<10;a+=1)$[a].m(l,null);p(s,i),p(s,r);for(let a=0;a<5;a+=1)A[a].m(r,null);p(r,o),p(r,c),p(r,f),p(r,d),g||(k=[z(window,"keydown",e[6]),z(c,"click",e[11]),z(d,"click",e[12])],g=!0)},p(u,[b]){if(b&43){_=[...Array(u[2]).keys()];let a;for(a=0;a<_.length;a+=1){const N=ge(u,_,a);m[a]?m[a].p(N,b):(m[a]=ve(N),m[a].c(),m[a].m(t,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=_.length}if(b&145){V=[1,2,3,4,5,6,7,8,9,0];let a;for(a=0;a<10;a+=1){const N=_e(u,V,a);$[a]?$[a].p(N,b):($[a]=ye(N),$[a].c(),$[a].m(l,null))}for(;a<10;a+=1)$[a].d(1)}if(b&145){q=["+","-","*","/","="];let a;for(a=0;a<5;a+=1){const N=he(u,q,a);A[a]?A[a].p(N,b):(A[a]=Se(N),A[a].c(),A[a].m(r,o))}for(;a<5;a+=1)A[a].d(1)}},i:y,o:y,d(u){u&&w(t),B(m,u),u&&w(n),u&&w(s),B($,u),B(A,u),g=!1,j(k)}}}const Ye=()=>{};function Je(e,t,n){const s=parseInt("6")||6,l=parseInt("8")||8;let i=He(s,l),r=Ue(s,l);function o(){r.moveNextRow(),n(1,r)}function c(){r.moveRight(),n(1,r)}function f(){r.moveLeft(),n(1,r)}function d(){r.fixed(),n(1,r)}function g(u){const b=u.target.getAttribute("name");if(!b||!(b.startsWith("cell")&&b.length===6))return;b.slice(-2,-1)==r.row&&n(1,r.column=parseInt(b.slice(-1)),r)}function k(u){if(i.gameState===O.continue)switch(u.key){case"ArrowRight":c();return;case"ArrowLeft":f();return;case"Enter":m();return;case"Backspace":case"Delete":_("");return;case"+":case"-":case"*":case"/":case"=":_(u.key),c();return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":_(parseInt(u.key)),c();return;default:return}}function _(u){i.setValue(r,u),n(0,i)}function m(){switch(i.verify(r.row)){case O.success:re.gameClear(),d();break;case O.continue:o();break;case E.error:re.formulaError();break;case O.failed:default:re.gameFailed(i.problem),d();break}n(0,i)}return[i,r,s,l,c,g,k,_,m,u=>{_(u),c()},u=>{_(u),c()},()=>m(),()=>{_("")}]}class Qe extends Q{constructor(t){super(),J(this,t,Je,We,P,{})}}function ke(e){let t,n;return{c(){t=v("div"),n=I(e[2]),h(t,"class","alert svelte-2a1k87"),ae(t,"background-color",e[1])},m(s,l){C(s,t,l),p(t,n)},p(s,l){l&4&&Ae(n,s[2]),l&2&&ae(t,"background-color",s[1])},d(s){s&&w(t)}}}function Xe(e){let t,n=e[0]&&ke(e);return{c(){n&&n.c(),t=Oe()},m(s,l){n&&n.m(s,l),C(s,t,l)},p(s,[l]){s[0]?n?n.p(s,l):(n=ke(s),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:y,o:y,d(s){n&&n.d(s),s&&w(t)}}}function Ze(e,t,n){let s,l,i;return x(e,T,r=>n(0,s=r)),x(e,Z,r=>n(1,l=r)),x(e,X,r=>n(2,i=r)),[s,l,i]}class xe extends Q{constructor(t){super(),J(this,t,Ze,Xe,P,{})}}function et(e){let t,n,s,l,i,r,o;return n=new xe({}),l=new Ve({}),r=new Qe({}),{c(){t=v("div"),ne(n.$$.fragment),s=L(),ne(l.$$.fragment),i=L(),ne(r.$$.fragment),h(t,"class","container svelte-1mswkp4")},m(c,f){C(c,t,f),W(n,t,null),p(t,s),W(l,t,null),p(t,i),W(r,t,null),o=!0},p:y,i(c){o||(U(n.$$.fragment,c),U(l.$$.fragment,c),U(r.$$.fragment,c),o=!0)},o(c){te(n.$$.fragment,c),te(l.$$.fragment,c),te(r.$$.fragment,c),o=!1},d(c){c&&w(t),Y(n),Y(l),Y(r)}}}class tt extends Q{constructor(t){super(),J(this,t,null,et,P,{})}}new tt({target:document.getElementById("app")});
