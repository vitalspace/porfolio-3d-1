function T(){}const Qe=e=>e;function Ue(e){return e()}function ke(){return Object.create(null)}function W(e){e.forEach(Ue)}function de(e){return typeof e=="function"}function he(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let K;function pe(e,t){return e===t?!0:(K||(K=document.createElement("a")),K.href=t,e===K.href)}function qe(e){return Object.keys(e).length===0}function Ke(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Pe=typeof window<"u";let et=Pe?()=>window.performance.now():()=>Date.now(),me=Pe?e=>requestAnimationFrame(e):T;const P=new Set;function Re(e){P.forEach(t=>{t.c(e)||(P.delete(t),t.f())}),P.size!==0&&me(Re)}function tt(e){let t;return P.size===0&&me(Re),{promise:new Promise(n=>{P.add(t={c:e,f:n})}),abort(){P.delete(t)}}}let le=!1;function nt(){le=!0}function it(){le=!1}function lt(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function rt(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const u=[];for(let a=0;a<t.length;a++){const m=t[a];m.claim_order!==void 0&&u.push(m)}t=u}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let u=0;u<t.length;u++){const a=t[u].claim_order,m=(r>0&&t[n[r]].claim_order<=a?r+1:lt(1,r,p=>t[n[p]].claim_order,a))-1;i[u]=n[m]+1;const c=m+1;n[c]=u,r=Math.max(c,r)}const o=[],l=[];let s=t.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(o.push(t[u-1]);s>=u;s--)l.push(t[s]);s--}for(;s>=0;s--)l.push(t[s]);o.reverse(),l.sort((u,a)=>u.claim_order-a.claim_order);for(let u=0,a=0;u<l.length;u++){for(;a<o.length&&l[u].claim_order>=o[a].claim_order;)a++;const m=a<o.length?o[a]:null;e.insertBefore(l[u],m)}}function st(e,t){e.appendChild(t)}function We(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function ct(e){const t=w("style");return t.textContent="/* empty */",ot(We(e),t),t.sheet}function ot(e,t){return st(e.head||e,t),t.sheet}function x(e,t){if(le){for(rt(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function C(e,t,n){le&&!n?x(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function X(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function J(e){return document.createTextNode(e)}function V(){return J(" ")}function te(){return J("")}function Ye(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ge(e){return e.dataset.svelteH}function N(e){return Array.from(e.childNodes)}function at(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function He(e,t,n,i,r=!1){at(e);const o=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const s=e[l];if(t(s)){const u=n(s);return u===void 0?e.splice(l,1):e[l]=u,r||(e.claim_info.last_index=l),s}}for(let l=e.claim_info.last_index-1;l>=0;l--){const s=e[l];if(t(s)){const u=n(s);return u===void 0?e.splice(l,1):e[l]=u,r?u===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,s}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function ut(e,t,n,i){return He(e,r=>r.nodeName===t,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];n[s.name]||o.push(s.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(t))}function k(e,t,n){return ut(e,t,n,w)}function Q(e,t){return He(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(t),!0)}function z(e){return Q(e," ")}function ft(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}function Ie(e,t){return new e(t)}const ne=new Map;let ie=0;function dt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function ht(e,t){const n={stylesheet:ct(t),rules:{}};return ne.set(e,n),n}function Ne(e,t,n,i,r,o,l,s=0){const u=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=u){const E=t+(n-t)*o(y);a+=y*100+`%{${l(E,1-E)}}
`}const m=a+`100% {${l(n,1-n)}}
}`,c=`__svelte_${dt(m)}_${s}`,p=We(e),{stylesheet:d,rules:f}=ne.get(p)||ht(p,e);f[c]||(f[c]=!0,d.insertRule(`@keyframes ${c} ${m}`,d.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${c} ${i}ms linear ${r}ms 1 both`,ie+=1,c}function pt(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),ie-=r,ie||mt())}function mt(){me(()=>{ie||(ne.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&v(t)}),ne.clear())})}let _e;function H(e){_e=e}const U=[],Ee=[];let R=[];const Me=[],gt=Promise.resolve();let ae=!1;function _t(){ae||(ae=!0,gt.then(Xe))}function q(e){R.push(e)}const ce=new Set;let Z=0;function Xe(){if(Z!==0)return;const e=_e;do{try{for(;Z<U.length;){const t=U[Z];Z++,H(t),vt(t.$$)}}catch(t){throw U.length=0,Z=0,t}for(H(null),U.length=0,Z=0;Ee.length;)Ee.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];ce.has(n)||(ce.add(n),n())}R.length=0}while(U.length);for(;Me.length;)Me.pop()();ae=!1,ce.clear(),H(e)}function vt(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}function bt(e){const t=[],n=[];R.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),R=t}let Y;function yt(){return Y||(Y=Promise.resolve(),Y.then(()=>{Y=null})),Y}function oe(e,t,n){e.dispatchEvent(ft(`${t?"intro":"outro"}${n}`))}const ee=new Set;let F;function re(){F={r:0,c:[],p:F}}function se(){F.r||W(F.c),F=F.p}function D(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function G(e,t,n,i){if(e&&e.o){if(ee.has(e))return;ee.add(e),F.c.push(()=>{ee.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const xt={duration:0};function je(e,t,n,i){let o=t(e,n,{direction:"both"}),l=i?0:1,s=null,u=null,a=null,m;function c(){a&&pt(e,a)}function p(f,h){const y=f.b-l;return h*=Math.abs(y),{a:l,b:f.b,d:y,duration:h,start:f.start,end:f.start+h,group:f.group}}function d(f){const{delay:h=0,duration:y=300,easing:E=Qe,tick:L=T,css:S}=o||xt,$={start:et()+h,b:f};f||($.group=F,F.r+=1),"inert"in e&&(f?m!==void 0&&(e.inert=m):(m=e.inert,e.inert=!0)),s||u?u=$:(S&&(c(),a=Ne(e,l,f,y,h,E,S)),f&&L(0,1),s=p($,y),q(()=>oe(e,f,"start")),tt(A=>{if(u&&A>u.start&&(s=p(u,y),u=null,oe(e,s.b,"start"),S&&(c(),a=Ne(e,l,s.b,s.duration,0,E,o.css))),s){if(A>=s.end)L(l=s.b,1-l),oe(e,s.b,"end"),u||(s.b?c():--s.group.r||W(s.group.c)),s=null;else if(A>=s.start){const I=A-s.start;l=s.a+s.d*E(I/s.duration),L(l,1-l)}}return!!(s||u)}))}return{run(f){de(o)?yt().then(()=>{o=o({direction:f?"in":"out"}),d(f)}):d(f)},end(){c(),s=u=null}}}function O(e){return e?.length!==void 0?e:Array.from(e)}function Te(e){e&&e.c()}function wt(e,t){e&&e.l(t)}function ue(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),q(()=>{const o=e.$$.on_mount.map(Ue).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...o):W(o),e.$$.on_mount=[]}),r.forEach(q)}function fe(e,t){const n=e.$$;n.fragment!==null&&(bt(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(e,t){e.$$.dirty[0]===-1&&(U.push(e),_t(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(e,t,n,i,r,o,l=null,s=[-1]){const u=_e;H(e);const a=e.$$={fragment:null,ctx:[],props:o,update:T,not_equal:r,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:ke(),dirty:s,skip_bound:!1,root:t.target||u.$$.root};l&&l(a.root);let m=!1;if(a.ctx=n?n(e,t.props||{},(c,p,...d)=>{const f=d.length?d[0]:p;return a.ctx&&r(a.ctx[c],a.ctx[c]=f)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](f),m&&$t(e,c)),p}):[],a.update(),m=!0,W(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){nt();const c=N(t.target);a.fragment&&a.fragment.l(c),c.forEach(v)}else a.fragment&&a.fragment.c();t.intro&&D(e.$$.fragment),ue(e,t.target,t.anchor),it(),Xe()}H(u)}class be{$$=void 0;$$set=void 0;$destroy(){fe(this,1),this.$destroy=T}$on(t,n){if(!de(n))return T;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const kt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(kt);function It(e){let t,n=`<div class="flex justify-between space-x-4 place-items-center"><h2 class="text-justify text-2xl xl:text-4xl">I&#39;m Vital. Fullstack Developer Mexico City Metropolitan Area.</h2> <img class="w-24 h-24 xl:w-40 xl:h-40 bg-slate-200 border-2 border-purple-900 rounded-xl" src="vital.png" alt=""/></div> <div><p class="text-md">I am a fullstack developer with over 5 years of experience, specializing
      in creating interactive user interfaces and scalable backend solutions. My
      work spans from developing modern web applications to building desktop
      bots and hybrid mobile apps.</p></div> <div><h3 class="text-xl">Experience</h3></div> <div class="space-y-2"><span class="underline">LarEngine | Core Team January 2024 - Present | Remote</span> <p class="text-sm">At LarEngine, I contribute to the development of cutting-edge technologies
      using C and Zig. My role involves leveraging Git and GitHub for efficient
      version control. I am currently working on building a new JavaScript
      runtime called Lar, utilizing JavaScriptCore libraries. Additionally, I am
      designing and implementing a JavaScript interpreter from scratch in Zig,
      focusing on creating the lexer, parser, and AST.</p></div> <div class="space-y-2"><span class="underline">Fiverr | Freelance August 2019 - Present | Mexico City</span> <p class="text-sm">As a freelance developer, I have worked on a wide range of projects,
      creating highly interactive user interfaces with frameworks like React,
      Vue, and Svelte. On the backend, I have extensive experience with Node.js,
      Express, MongoDB, Nest.js, and MySQL. I have also developed desktop
      applications using Electron.js and hybrid mobile apps using React Native
      Expo and Ionic Capacitor. My projects include e-commerce platforms,
      inventory management systems, and real-time chat applications, providing
      custom-tailored solutions to meet client needs.</p></div> <div class="space-y-2"><span class="underline">Weku.io | Frontend Developer | March 2019 - December 2020</span> <p class="text-sm">Remote At Weku.io, I was responsible for
      maintaining and implementing new features on the main website, utilizing
      technologies like Angular and Bootstrap to ensure a smooth user
      experience. I also managed version control of the main codebase with Git
      and GitHub, and worked with Steem.js to integrate blockchain technology
      into the platform.</p></div>`;return{c(){t=w("div"),t.innerHTML=n,this.h()},l(i){t=k(i,"DIV",{class:!0,"data-svelte-h":!0}),ge(t)!=="svelte-8jrr6m"&&(t.innerHTML=n),this.h()},h(){b(t,"class","grid gap-y-4")},m(i,r){C(i,t,r)},p:T,i:T,o:T,d(i){i&&v(t)}}}class Nt extends be{constructor(t){super(),ve(this,t,null,It,he,{})}}function Ce(e,t,n){const i=e.slice();return i[1]=t[n],i}function De(e,t,n){const i=e.slice();return i[4]=t[n],i}function Ae(e,t,n){const i=e.slice();return i[7]=t[n],i}function Se(e){let t,n,i=e[7]+"",r,o;return{c(){t=w("span"),n=J("#"),r=J(i),o=V(),this.h()},l(l){t=k(l,"SPAN",{class:!0});var s=N(t);n=Q(s,"#"),r=Q(s,i),o=z(s),s.forEach(v),this.h()},h(){b(t,"class","text-xs text-green-500")},m(l,s){C(l,t,s),x(t,n),x(t,r),x(t,o)},p:T,d(l){l&&v(t)}}}function Ve(e){let t,n;return{c(){t=w("img"),this.h()},l(i){t=k(i,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){pe(t.src,n=e[4])||b(t,"src",n),b(t,"class","text-xs w-6 h-6"),b(t,"alt","")},m(i,r){C(i,t,r)},p:T,d(i){i&&v(t)}}}function ze(e){let t,n,i,r,o,l,s,u=e[1].title+"",a,m,c,p=e[1].description+"",d,f,h,y,E,L,S=O(e[1].tags),$=[];for(let _=0;_<S.length;_+=1)$[_]=Se(Ae(e,S,_));let A=O(e[1].technologies),I=[];for(let _=0;_<A.length;_+=1)I[_]=Ve(De(e,A,_));return{c(){t=w("a"),n=w("header"),i=w("img"),o=V(),l=w("section"),s=w("h2"),a=J(u),m=V(),c=w("p"),d=J(p),f=V(),h=w("div");for(let _=0;_<$.length;_+=1)$[_].c();y=V(),E=w("div");for(let _=0;_<I.length;_+=1)I[_].c();L=V(),this.h()},l(_){t=k(_,"A",{href:!0,target:!0,class:!0});var j=N(t);n=k(j,"HEADER",{class:!0});var g=N(n);i=k(g,"IMG",{class:!0,src:!0,alt:!0}),g.forEach(v),o=z(j),l=k(j,"SECTION",{class:!0});var M=N(l);s=k(M,"H2",{class:!0});var ye=N(s);a=Q(ye,u),ye.forEach(v),m=z(M),c=k(M,"P",{class:!0});var xe=N(c);d=Q(xe,p),xe.forEach(v),f=z(M),h=k(M,"DIV",{});var we=N(h);for(let B=0;B<$.length;B+=1)$[B].l(we);we.forEach(v),y=z(M),E=k(M,"DIV",{class:!0});var $e=N(E);for(let B=0;B<I.length;B+=1)I[B].l($e);$e.forEach(v),M.forEach(v),L=z(j),j.forEach(v),this.h()},h(){b(i,"class","w-full h-40 rounded-lg bg-red-400"),pe(i.src,r=e[1].img)||b(i,"src",r),b(i,"alt",""),b(n,"class","bg-purple-100 w-full flex place-content-center rounded-xl"),b(s,"class","font-bold text-lg"),b(c,"class","text-sm"),b(E,"class","flex space-x-2"),b(l,"class","p-4 grid gap-2 h-60"),b(t,"href",e[1].url),b(t,"target","_blank"),b(t,"class","w-full flex justify-center flex-col place-items-center gap-y-2 bg-black rounded-xl hover:-translate-y-2 transition-all cursor-pointer")},m(_,j){C(_,t,j),x(t,n),x(n,i),x(t,o),x(t,l),x(l,s),x(s,a),x(l,m),x(l,c),x(c,d),x(l,f),x(l,h);for(let g=0;g<$.length;g+=1)$[g]&&$[g].m(h,null);x(l,y),x(l,E);for(let g=0;g<I.length;g+=1)I[g]&&I[g].m(E,null);x(t,L)},p(_,j){if(j&1){S=O(_[1].tags);let g;for(g=0;g<S.length;g+=1){const M=Ae(_,S,g);$[g]?$[g].p(M,j):($[g]=Se(M),$[g].c(),$[g].m(h,null))}for(;g<$.length;g+=1)$[g].d(1);$.length=S.length}if(j&1){A=O(_[1].technologies);let g;for(g=0;g<A.length;g+=1){const M=De(_,A,g);I[g]?I[g].p(M,j):(I[g]=Ve(M),I[g].c(),I[g].m(E,null))}for(;g<I.length;g+=1)I[g].d(1);I.length=A.length}},d(_){_&&v(t),X($,_),X(I,_)}}}function Et(e){let t,n=O(e[0]),i=[];for(let r=0;r<n.length;r+=1)i[r]=ze(Ce(e,n,r));return{c(){t=w("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){t=k(r,"DIV",{class:!0});var o=N(t);for(let l=0;l<i.length;l+=1)i[l].l(o);o.forEach(v),this.h()},h(){b(t,"class","flex flex-wrap xl:grid xl:grid-cols-3 gap-4")},m(r,o){C(r,t,o);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(t,null)},p(r,[o]){if(o&1){n=O(r[0]);let l;for(l=0;l<n.length;l+=1){const s=Ce(r,n,l);i[l]?i[l].p(s,o):(i[l]=ze(s),i[l].c(),i[l].m(t,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},i:T,o:T,d(r){r&&v(t),X(i,r)}}}function Mt(e){return[[{id:1,title:"Create Desktop Apps with bun.js",description:"Build Desktop Apps with bun.js and chromium-based browsers.",img:"https://user-images.githubusercontent.com/29004070/193175313-cca3836d-ed39-4fad-975e-2ef750b5c7c4.png",tags:["Desktop","App's","Bun.js","Golang"],url:"https://github.com/Bunland/webapp",technologies:["https://raw.githubusercontent.com/get-icon/geticon/master/icons/javascript.svg","https://camo.githubusercontent.com/31b40da8322ac8762d2982905de54d0e45b4105e0ad8c96c0f2eb9e2999e6026/68747470733a2f2f62756e2e73682f6c6f676f2d7371756172652e706e67","https://raw.githubusercontent.com/get-icon/geticon/master/icons/go.svg","https://raw.githubusercontent.com/get-icon/geticon/master/icons/svelte-icon.svg","https://raw.githubusercontent.com/get-icon/geticon/master/icons/vite.svg"]},{id:2,title:"JobFly",description:"A social network to search and publish jobs",img:"jobfly.png",tags:["Svelte","Bun.js","Elysia.js","Mongodb","Tailwindcss"],url:"https://github.com/vitalspace/jobfly",technologies:["https://raw.githubusercontent.com/get-icon/geticon/master/icons/svelte-icon.svg","https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/typescript-icon.svg","https://camo.githubusercontent.com/31b40da8322ac8762d2982905de54d0e45b4105e0ad8c96c0f2eb9e2999e6026/68747470733a2f2f62756e2e73682f6c6f676f2d7371756172652e706e67","https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/tailwindcss-icon.svg","https://raw.githubusercontent.com/get-icon/geticon/master/icons/mongodb-icon.svg","https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/capacitorjs-icon.svg"]},{id:3,title:"MoebanDB",description:"A JSON Database system designed to store and manipulate data in JSON format.",img:"https://private-user-images.githubusercontent.com/29004070/274068061-372ced48-4be8-48c3-885e-e690916a7129.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYwOTE0NzMsIm5iZiI6MTcyNjA5MTE3MywicGF0aCI6Ii8yOTAwNDA3MC8yNzQwNjgwNjEtMzcyY2VkNDgtNGJlOC00OGMzLTg4NWUtZTY5MDkxNmE3MTI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTExVDIxNDYxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc1MGU4N2ZlNTg1MzQyNmFkNTVjMzJkYjZhMmIwYmIxYmI1NjdkZWQyMGVhNzVkNTBiOGMyNjc0MTdlZWU0ZmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.mcQyFrrG_Dtvz1qH-GBhv2i6k_qH8Zlvvx6D0nS9Y-o",tags:["Zig","JSON","ODM"],url:"https://github.com/larengine/moeban",technologies:["https://raw.githubusercontent.com/ziglang/logo/4f97e7a9ebce12fa48511c0b6502b6190005bc0e/zig-mark.svg","https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/json.svg"]}]]}class jt extends be{constructor(t){super(),ve(this,t,Mt,Et,he,{})}}function Tt(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function Oe(e,{delay:t=0,duration:n=400,easing:i=Tt,amount:r=5,opacity:o=0}={}){const l=getComputedStyle(e),s=+l.opacity,u=l.filter==="none"?"":l.filter,a=s*(1-o),[m,c]=Ke(r);return{delay:t,duration:n,easing:i,css:(p,d)=>`opacity: ${s-a*d}; filter: ${u} blur(${d*m}${c});`}}function Fe(e,t,n){const i=e.slice();return i[6]=t[n],i}function Ge(e,t,n){const i=e.slice();return i[6]=t[n],i}function Le(e){let t,n,i,r="Close",o,l,s,u,a,m=O(e[4]),c=[];for(let d=0;d<m.length;d+=1)c[d]=Je(Ge(e,m,d));const p=d=>G(c[d],1,1,()=>{c[d]=null});return{c(){t=w("div"),n=w("div"),i=w("button"),i.textContent=r,o=V();for(let d=0;d<c.length;d+=1)c[d].c();this.h()},l(d){t=k(d,"DIV",{class:!0});var f=N(t);n=k(f,"DIV",{class:!0});var h=N(n);i=k(h,"BUTTON",{class:!0,"data-svelte-h":!0}),ge(i)!=="svelte-16w3oxt"&&(i.textContent=r),h.forEach(v),o=z(f);for(let y=0;y<c.length;y+=1)c[y].l(f);f.forEach(v),this.h()},h(){b(i,"class","border-2 border-purple-500 bg-purple-600 rounded-md my-2 text-white px-2"),b(n,"class","w-full flex justify-between place-items-center"),b(t,"class","absolute top-0 xl:static w-full xl:w-4/5 font-serif border border-purple-900 flex flex-col gap-y-4 bg-[#17171799] backdrop-blur-[3px] backdrop-saturate-[100%] p-8 rounded-xl")},m(d,f){C(d,t,f),x(t,n),x(n,i),x(t,o);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(t,null);s=!0,u||(a=Ye(i,"click",e[5]),u=!0)},p(d,f){if(f&17){m=O(d[4]);let h;for(h=0;h<m.length;h+=1){const y=Ge(d,m,h);c[h]?(c[h].p(y,f),D(c[h],1)):(c[h]=Je(y),c[h].c(),D(c[h],1),c[h].m(t,null))}for(re(),h=m.length;h<c.length;h+=1)p(h);se()}},i(d){if(!s){for(let f=0;f<m.length;f+=1)D(c[f]);d&&q(()=>{s&&(l||(l=je(t,Oe,{},!0)),l.run(1))}),s=!0}},o(d){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)G(c[f]);d&&(l||(l=je(t,Oe,{},!1)),l.run(0)),s=!1},d(d){d&&v(t),X(c,d),d&&l&&l.end(),u=!1,a()}}}function Be(e){let t,n,i;var r=e[6].component;function o(l,s){return{}}return r&&(t=Ie(r,o())),{c(){t&&Te(t.$$.fragment),n=te()},l(l){t&&wt(t.$$.fragment,l),n=te()},m(l,s){t&&ue(t,l,s),C(l,n,s),i=!0},p(l,s){if(r!==(r=l[6].component)){if(t){re();const u=t;G(u.$$.fragment,1,0,()=>{fe(u,1)}),se()}r?(t=Ie(r,o()),Te(t.$$.fragment),D(t.$$.fragment,1),ue(t,n.parentNode,n)):t=null}},i(l){i||(t&&D(t.$$.fragment,l),i=!0)},o(l){t&&G(t.$$.fragment,l),i=!1},d(l){l&&v(n),t&&fe(t,l)}}}function Je(e){let t,n,i=e[6].value===e[0]&&Be(e);return{c(){i&&i.c(),t=te()},l(r){i&&i.l(r),t=te()},m(r,o){i&&i.m(r,o),C(r,t,o),n=!0},p(r,o){r[6].value===r[0]?i?(i.p(r,o),o&1&&D(i,1)):(i=Be(r),i.c(),D(i,1),i.m(t.parentNode,t)):i&&(re(),G(i,1,1,()=>{i=null}),se())},i(r){n||(D(i),n=!0)},o(r){G(i),n=!1},d(r){r&&v(t),i&&i.d(r)}}}function Ze(e){let t,n,i,r,o,l;return{c(){t=w("button"),n=w("img"),r=V(),this.h()},l(s){t=k(s,"BUTTON",{});var u=N(t);n=k(u,"IMG",{src:!0,alt:!0,class:!0}),r=z(u),u.forEach(v),this.h()},h(){pe(n.src,i=e[6].img)||b(n,"src",i),b(n,"alt",e[6].label),b(n,"class","w-6 cursor-pointer hover:-translate-y-1")},m(s,u){C(s,t,u),x(t,n),x(t,r),o||(l=Ye(t,"click",e[2](e[6].value)),o=!0)},p(s,u){e=s},d(s){s&&v(t),o=!1,l()}}}function Ct(e){let t,n,i='<div><h1 class="text-9xl"><span class="text-6xl">Hello i&#39;m</span> Vital</h1> <p>Full Stack Developer.</p></div> <div class="flex justify-evenly"><a href="https://x.com/vitalcodexyz" target="_blank"><img src="x.svg" alt="x" title="x" class="w-8"/></a> <a href="https://github.com/vitalspace" target="_blank"><img src="g.svg" alt="x" title="x" class="w-8"/></a> <a href="/"><img src="l.svg" alt="x" title="x" class="w-8"/></a></div>',r,o,l,s,u,a=e[1]&&Le(e),m=O(e[4]),c=[];for(let p=0;p<m.length;p+=1)c[p]=Ze(Fe(e,m,p));return{c(){t=w("div"),n=w("section"),n.innerHTML=i,r=V(),a&&a.c(),o=V(),l=w("div"),s=w("div");for(let p=0;p<c.length;p+=1)c[p].c();this.h()},l(p){t=k(p,"DIV",{class:!0});var d=N(t);n=k(d,"SECTION",{class:!0,"data-svelte-h":!0}),ge(n)!=="svelte-1uhhnuj"&&(n.innerHTML=i),r=z(d),a&&a.l(d),d.forEach(v),o=z(p),l=k(p,"DIV",{class:!0});var f=N(l);s=k(f,"DIV",{class:!0});var h=N(s);for(let y=0;y<c.length;y+=1)c[y].l(h);h.forEach(v),f.forEach(v),this.h()},h(){b(n,"class","text-center w-4/5 grid gap-y-10"),b(t,"class","flex justify-center xl:grid xl:grid-cols-2 text-white absolute h-screen w-full place-items-center"),b(s,"class","flex rounded-full bg-black opacity-80 space-x-4 px-4 py-2 border-2 border-gray-700"),b(l,"class","fixed bottom-10 w-full flex justify-center")},m(p,d){C(p,t,d),x(t,n),x(t,r),a&&a.m(t,null),C(p,o,d),C(p,l,d),x(l,s);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(s,null);u=!0},p(p,[d]){if(p[1]?a?(a.p(p,d),d&2&&D(a,1)):(a=Le(p),a.c(),D(a,1),a.m(t,null)):a&&(re(),G(a,1,1,()=>{a=null}),se()),d&20){m=O(p[4]);let f;for(f=0;f<m.length;f+=1){const h=Fe(p,m,f);c[f]?c[f].p(h,d):(c[f]=Ze(h),c[f].c(),c[f].m(s,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=m.length}},i(p){u||(D(a),u=!0)},o(p){G(a),u=!1},d(p){p&&(v(t),v(o),v(l)),a&&a.d(),X(c,p)}}}function Dt(e,t,n){let i=0,r=!1;const o=a=>()=>{n(1,r=!0),n(0,i=a)},l=()=>{n(1,r=!1)};return[i,r,o,l,[{label:"Profile",value:1,component:Nt,img:"profile.svg"},{label:"Projects",value:2,component:jt,img:"briefcase.svg"}],()=>l()]}class At extends be{constructor(t){super(),ve(this,t,Dt,Ct,he,{})}}export{At as default};