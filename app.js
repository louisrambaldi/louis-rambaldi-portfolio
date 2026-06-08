/* ============================================================
   Louis Rambaldi — portfolio interactions (v8)
   Marquee clients · smaller film posters · per-project hoverplay
   (still-before-video) · Vimeo unlisted-hash support · galleries ·
   featured flag · in-box modal playback.
   ============================================================ */
(function () {
  "use strict";

  var PROJECTS = window.PROJECTS || [];

  var CATS = [
    { s: "fashion", l: "Fashion" },{ s: "beauty", l: "Beauty" },
    { s: "commercial", l: "Commercial" },{ s: "comedy", l: "Comedy" },
    { s: "feature-films", l: "Feature Films" },{ s: "music-videos", l: "Music Videos" }
  ];
  var FEATURED_BRANDS = ["dior","balenciaga","loréal","loreal","chloé","chloe","cartier"];

  var POSTERS = {
    "rouge-dior": "https://res.cloudinary.com/north-six/image/upload/v1705948225/Dior_Rouge_1_0687b65509.jpg",
    "dior-women-fall26": "https://res.cloudinary.com/north-six/image/upload/v1777919684/Dior_Women_Fall26_5_ce5b993414.jpg",
    "sonia-rykiel-stardust": "https://www.lottiprojects.com/wp-content/uploads/2024/05/SR-ZOEJ_00-600x405.jpg",
    "balenciaga-spring24-campaign": "https://www.lottiprojects.com/wp-content/uploads/2023/11/230909_13_Balenciaga_Look_43_Eva_3171_1080x1350_LOGO-600x750.jpg",
    "balenciaga-lookbook-sp24": "https://www.lottiprojects.com/wp-content/uploads/2023/07/Front-page-photo-600x600.jpg"
  };

  var BRANDS = ["Dior","Guerlain","Balenciaga","Sonia Rykiel","Chloé","Chanel","L'Oréal","Cartier","Louis Vuitton","Zara","Focal","Total","Canal+","Eucerin","Nike","Mugler","Dacia","Renault","Birkenstock","Darjeeling","Nissan","Garnier","Azzaro"];
  var PRODUCTIONS = ["Iconoclast","1718","Working Girl","La Pac","North Six","Downtown","Big Production","Miles","Lotti","Soixante Quinze","Quad","Mazarine","Prose on Pixels","Prodigious","Division","109 Paris","Zorba","1618","Capsul","Mireille","Hier Soir","Excuse My French","Producing Love"];

  var PALETTE = [
    "linear-gradient(150deg,#2b2926,#141310)","linear-gradient(150deg,#26302e,#111614)",
    "linear-gradient(150deg,#2e2622,#17110d)","linear-gradient(150deg,#222a33,#101418)",
    "linear-gradient(150deg,#332327,#180f11)","linear-gradient(150deg,#2d2c33,#131218)"
  ];
  var GENERIC = {"commercial":1,"music video":1,"feature film":1,"short film":1,"campaign":1,"film":1};

  function slug(s){return String(s).toLowerCase().replace(/\s+/g,"-");}
  function hash(s){var h=0,i;for(i=0;i<s.length;i++){h=(h*31+s.charCodeAt(i))|0;}return Math.abs(h);}
  function el(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n;}
  function label(sl){if(sl==="selected")return "Selected";for(var i=0;i<CATS.length;i++){if(CATS[i].s===sl)return CATS[i].l;}return sl;}
  function yearNum(p){var s=String(p.year||"");var m=s.match(/(\d{4})/);if(m)return +m[1];var m2=s.match(/(\d{2})$/);if(m2)return 2000+(+m2[1]);return 0;}
  function ytId(u){if(!u)return null;var m=u.match(/[?&]v=([\w-]{6,})/)||u.match(/youtu\.be\/([\w-]{6,})/)||u.match(/youtube(?:-nocookie)?\.com\/embed\/([\w-]{6,})/);return m?m[1]:null;}
  function vimeoMeta(u){if(!u)return null;var m=u.match(/vimeo\.com\/(?:video\/)?(\d{6,})(?:[\/?]([0-9a-z]{6,}))?/);if(!m)return null;return {id:m[1],hash:m[2]||null};}
  function isFilm(p){return slug(p.category)==="feature-films";}
  function normBrand(p){return String(p.brand).toLowerCase().replace(/['’‘`]/g,"");}
  function brandKey(p){return normBrand(p).split(" ")[0];}
  function isFeatured(p){if(p.featured===false)return false;if(p.featured===true)return true;var b=normBrand(p);for(var i=0;i<FEATURED_BRANDS.length;i++){if(b.indexOf(FEATURED_BRANDS[i])>=0)return true;}return false;}
  function galleryImages(p){return (p.images&&p.images.length>1)?p.images:null;}
  function campaignName(p){var t=(p.title||"").trim();return GENERIC[t.toLowerCase()]?"":t;}
  function byline(p){var c=p.credits||[],pref=["Director","Photographer","Creative Direction","Creative Director"],r,i;for(r=0;r<pref.length;r++)for(i=0;i<c.length;i++)if(c[i].role===pref[r]&&c[i].name)return c[i].name;return "";}
  function shortRole(r){if(!r)return "";return r.replace(/First /,"1st ").replace(/Second /,"2nd ").replace(/Third /,"3rd ").replace("Assistant Director","AD");}

  function media(p){
    var host=null,id=null,hsh=null;
    if(p.video){var s=String(p.video).split(":");host=s[0];id=s[1];hsh=s[2]||null;}
    if(!host){var y=ytId(p.link);if(y){host="youtube";id=y;}}
    if(!host){var vm=vimeoMeta(p.link);if(vm){host="vimeo";id=vm.id;hsh=vm.hash;}}
    var thumb=p.img||POSTERS[p.id]||null;
    if(host==="youtube")return {kind:"youtube",id:id,thumb:thumb||("https://i.ytimg.com/vi/"+id+"/maxresdefault.jpg")};
    if(host==="vimeo")return {kind:"vimeo",id:id,hash:hsh,thumb:thumb};
    if(thumb)return {kind:"image",thumb:thumb};
    return {kind:"none"};
  }
  function ytEmbed(id){return "https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&mute=1&controls=0&loop=1&playlist="+id+"&modestbranding=1&playsinline=1&rel=0&disablekb=1";}
  function vimeoEmbed(id,hash){return "https://player.vimeo.com/video/"+id+"?background=1&autoplay=1&muted=1&loop=1"+(hash?"&h="+hash:"");}
  function sortByYear(list){return list.slice().sort(function(a,b){return yearNum(b)-yearNum(a);});}
  function byCat(sl){return sortByYear(PROJECTS.filter(function(p){return slug(p.category)===sl;}));}
  function pool(sl){return sl==="selected"?PROJECTS.filter(isFeatured):byCat(sl);}

  function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
  function arrange(list){
    if(list.length<3)return shuffle(list.slice());
    var groups={};list.forEach(function(p){var k=brandKey(p);(groups[k]=groups[k]||[]).push(p);});
    var buckets=Object.keys(groups).map(function(k){return shuffle(groups[k]);});
    var res=[],last=null,guard=0;
    while(res.length<list.length&&guard++<2000){
      buckets.sort(function(a,b){return b.length-a.length;});
      var pick=null,i;
      for(i=0;i<buckets.length;i++){if(buckets[i].length&&brandKey(buckets[i][0])!==last){pick=buckets[i];break;}}
      if(!pick)for(i=0;i<buckets.length;i++){if(buckets[i].length){pick=buckets[i];break;}}
      if(!pick)break;
      var p=pick.shift();res.push(p);last=brandKey(p);
    }
    return res;
  }

  function loadThumb(parent,p,url){
    var probe=new Image();
    probe.onload=function(){var img=el("img","thumb");img.src=url;img.alt=p.brand+" — "+p.title;parent.appendChild(img);requestAnimationFrame(function(){img.classList.add("is-loaded");});};
    probe.onerror=function(){if(url.indexOf("maxresdefault")>=0)loadThumb(parent,p,url.replace("maxresdefault","hqdefault"));};
    probe.src=url;
  }
  function baseLayer(parent,p,m,plain){
    var ph=el("div","ph");ph.style.setProperty("--ph-bg",PALETTE[hash(p.id)%PALETTE.length]);
    if(!plain)ph.appendChild(el("span","ph__brand",p.brand));parent.appendChild(ph);
    if(m.thumb)loadThumb(parent,p,m.thumb);
  }
  function capEl(p){
    var cap=el("div","cap");
    cap.appendChild(el("span","cap__brand",p.brand));
    var camp=campaignName(p);if(camp)cap.appendChild(el("span","cap__camp",camp));
    var by=byline(p);if(by)cap.appendChild(el("span","cap__by",by));
    return cap;
  }
  function mountPreview(mount,p,m){
    if(!mount||mount.dataset.mounted)return;
    if(m.kind==="youtube"){mount.innerHTML='<iframe src="'+ytEmbed(m.id)+'" allow="autoplay" frameborder="0"></iframe>';mount.dataset.mounted="1";}
    else if(m.kind==="vimeo"){mount.innerHTML='<iframe src="'+vimeoEmbed(m.id,m.hash)+'" allow="autoplay" frameborder="0"></iframe>';mount.dataset.mounted="1";}
  }
  function unmountPreview(mount){if(mount&&mount.dataset.mounted){mount.innerHTML="";delete mount.dataset.mounted;}}

  var body=document.body,homeEl=document.getElementById("home"),catEl=document.getElementById("cat"),
      rows=document.getElementById("rows"),catTitle=document.getElementById("catTitle"),
      catCount=document.getElementById("catCount"),catEmpty=document.getElementById("catEmpty"),
      sel=document.getElementById("catSelect"),featMount=document.getElementById("featMount"),
      featMedia=document.getElementById("featMedia"),featCat=document.getElementById("featCat"),
      featProj=document.getElementById("featProj"),
      featPrev=document.getElementById("featPrev"),featNext=document.getElementById("featNext");
  var state={view:"home",cat:"selected"};

  /* clients marquees (duplicated content for a seamless loop) */
  (function(){
    function fillMarquee(track,arr){
      if(!track)return;
      function one(){arr.forEach(function(n){track.appendChild(el("span","mq-item",n));track.appendChild(el("span","mq-sep","·"));});}
      one();one();
    }
    fillMarquee(document.getElementById("brandsTrack"),BRANDS);
    fillMarquee(document.getElementById("prodsTrack"),PRODUCTIONS);
  })();

  /* featured carousel — the current project plays in a loop; manual prev/next only (no auto-advance) */
  var featList=[],featIdx=0,featSlideTimer=null;
  function clearFeatSlides(){if(featSlideTimer){clearInterval(featSlideTimer);featSlideTimer=null;}}
  function startFeatured(){
    clearFeatSlides();featMount.innerHTML="";
    var has=pool(state.cat).filter(function(p){return media(p).kind!=="none";});
    if(!has.length)has=pool(state.cat);
    if(state.cat==="selected"){
      var PIN=["zara-aw23","cartier-watches-wonders"];
      var pinned=PIN.map(function(id){return has.filter(function(p){return p.id===id;})[0];}).filter(Boolean);
      featList=arrange(has.filter(function(p){return PIN.indexOf(p.id)<0;}));
      for(var pi=pinned.length-1;pi>=0;pi--)featList.unshift(pinned[pi]);
    }else{featList=arrange(has);}
    featIdx=0;featCat.textContent=(state.cat==="selected"?"":label(state.cat));if(featProj)featProj.textContent="";
    showFeatured();
  }
  function showFeatured(){
    clearFeatSlides();
    Array.prototype.forEach.call(featMedia.querySelectorAll(".cap,.card__yeartag,.card__roletag"),function(n){n.remove();});
    featMount.innerHTML="";featMedia.classList.remove("is-poster");
    var p=featList[featIdx];if(!p)return;
    var m=media(p),gal=galleryImages(p);
    if(isFilm(p)&&m.kind==="image")featMedia.classList.add("is-poster");
    if(m.kind==="youtube"||m.kind==="vimeo"){
      baseLayer(featMount,p,m,true);
      var mw=el("span","card__mount");featMount.appendChild(mw);mountPreview(mw,p,m);
    }else if(gal){
      var ph=el("div","ph");ph.style.setProperty("--ph-bg",PALETTE[hash(p.id)%PALETTE.length]);featMount.appendChild(ph);
      var layers=gal.map(function(u,i){var im=el("img","fslide"+(i===0?" is-on":""));im.src=u;im.alt=p.brand;im.loading=i?"lazy":"eager";featMount.appendChild(im);return im;});
      var si=0;featSlideTimer=setInterval(function(){layers[si].classList.remove("is-on");si=(si+1)%layers.length;layers[si].classList.add("is-on");},2800);
    }else{
      baseLayer(featMount,p,m,true);
    }
    if(!isFilm(p))featMedia.appendChild(capEl(p));
    if(p.year)featMedia.appendChild(el("span","card__yeartag",p.year));
    if(p.role)featMedia.appendChild(el("span","card__roletag",shortRole(p.role)));
    featMedia._project=p;
  }
  function manualNav(d){if(!featList.length)return;featIdx=(featIdx+d+featList.length)%featList.length;showFeatured();}
  function stopFeatured(){clearFeatSlides();featMount.innerHTML="";}

  /* category view */
  var io=("IntersectionObserver" in window)?new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      var card=e.target,mount=card.querySelector(".card__mount"),p=card._project,m=card._media;
      if(e.isIntersecting){card.classList.add("is-in");if(m&&(m.kind==="youtube"||m.kind==="vimeo")&&!card._hover)mountPreview(mount,p,m);}
      else{unmountPreview(mount);}
    });
  },{rootMargin:"80px 0px"}):null;

  function buildCard(p){
    var m=media(p),film=isFilm(p);
    var card=el("article","card"+(film?" card--poster":""));card._project=p;card._media=m;card._hover=!!p.hoverplay;
    var box=el("div","card__media");
    baseLayer(box,p,m);
    var mount=el("span","card__mount");box.appendChild(mount);
    if(!film)box.appendChild(capEl(p));
    if(p.year)box.appendChild(el("span","card__yeartag",p.year));
    if(p.role)box.appendChild(el("span","card__roletag",shortRole(p.role)));
    var hit=el("button","card__hit");hit.type="button";
    hit.setAttribute("aria-label",p.brand+" — "+p.title+". Open details.");
    hit.addEventListener("click",function(){openModal(p);});
    box.appendChild(hit);card.appendChild(box);
    if(card._hover&&(m.kind==="youtube"||m.kind==="vimeo")){
      card.addEventListener("mouseenter",function(){mountPreview(mount,p,m);});
      card.addEventListener("mouseleave",function(){unmountPreview(mount);});
    }
    if(film){
      var meta=el("div","card__meta");
      meta.appendChild(el("span","card__brand",p.brand));
      var by=byline(p);if(by)meta.appendChild(el("span","card__title",by));
      card.appendChild(meta);
    }
    return card;
  }
  function renderCategory(sl){
    rows.className="rows"+(sl==="feature-films"?" rows--poster":"");
    rows.innerHTML="";
    var list=byCat(sl);
    catTitle.textContent=label(sl);
    catCount.textContent=list.length+(list.length===1?" project":" projects");
    catEmpty.hidden=list.length!==0;
    list.forEach(function(p){var c=buildCard(p);rows.appendChild(c);if(io)io.observe(c);else c.classList.add("is-in");});
  }
  function clearCategory(){
    if(io)Array.prototype.forEach.call(rows.querySelectorAll(".card"),function(c){io.unobserve(c);});
    Array.prototype.forEach.call(rows.querySelectorAll(".card__mount"),unmountPreview);
    rows.innerHTML="";
  }

  function setSel(v){if(sel.value!==v)sel.value=v;}
  function goHome(push){
    state.view="home";state.cat="selected";body.setAttribute("data-view","home");
    catEl.hidden=true;homeEl.hidden=false;clearCategory();setSel("selected");startFeatured();
    if(push!==false&&history.replaceState)history.replaceState(null,"","#home");
    window.scrollTo(0,0);
  }
  function openCat(sl,push){
    state.cat=sl;state.view="category";body.setAttribute("data-view","category");
    stopFeatured();homeEl.hidden=true;catEl.hidden=false;setSel(sl);renderCategory(sl);
    if(push!==false&&history.replaceState)history.replaceState(null,"","#"+sl);
    window.scrollTo(0,0);
  }
  sel.addEventListener("change",function(){
    var v=sel.value;
    if(v==="selected"){goHome();return;}
    if(state.view==="home"){state.cat=v;startFeatured();}else{openCat(v);}
  });
  function enter(){if(state.cat==="selected"){var p=featList[featIdx];if(p)openModal(p);}else{openCat(state.cat);}}
  document.getElementById("featEnter").addEventListener("click",enter);
  featMedia.addEventListener("click",enter);
  featMedia.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();enter();}});
  if(featPrev)featPrev.addEventListener("click",function(e){e.stopPropagation();manualNav(-1);});
  if(featNext)featNext.addEventListener("click",function(e){e.stopPropagation();manualNav(1);});
  Array.prototype.forEach.call(document.querySelectorAll("[data-home]"),function(a){a.addEventListener("click",function(e){e.preventDefault();goHome();});});

  /* modal */
  var modal=document.getElementById("modal"),modalMedia=document.getElementById("modalMedia"),
      modalBrand=document.getElementById("modalBrand"),modalTitle=document.getElementById("modalTitle"),
      modalDesc=document.getElementById("modalDesc"),modalCredits=document.getElementById("modalCredits"),
      modalSource=document.getElementById("modalSource"),lastFocus=null;
  function openModal(p){
    lastFocus=document.activeElement;var m=media(p),gal=galleryImages(p),playable=(m.kind==="youtube"||m.kind==="vimeo")&&!!p.link;
    modalMedia.innerHTML="";modalMedia.onclick=null;
    modalMedia.classList.toggle("is-poster",isFilm(p)&&m.kind==="image");
    modalMedia.classList.toggle("is-gallery",!!gal);
    if(gal){
      var grid=el("div","modal__gallery");
      gal.forEach(function(u){var gi=el("img");gi.loading="lazy";gi.src=u;gi.alt=p.brand+" — "+p.title;grid.appendChild(gi);});
      modalMedia.appendChild(grid);modalMedia.classList.remove("is-playable");
    }else if(playable){
      /* autoplay immediately on open (no click) */
      var src=m.kind==="youtube"
        ? "https://www.youtube-nocookie.com/embed/"+m.id+"?autoplay=1&rel=0&modestbranding=1&playsinline=1"
        : "https://player.vimeo.com/video/"+m.id+"?autoplay=1"+(m.hash?"&h="+m.hash:"");
      var f=el("iframe");f.src=src;f.allow="autoplay; fullscreen";f.setAttribute("allowfullscreen","");f.setAttribute("frameborder","0");
      modalMedia.appendChild(f);modalMedia.classList.remove("is-playable");
    }else{
      if(m.thumb){var img=el("img","modal__still");img.src=m.thumb;img.alt=p.brand+" — "+p.title;
        if(m.thumb.indexOf("maxresdefault")>=0)img.onerror=function(){img.src=m.thumb.replace("maxresdefault","hqdefault");};
        modalMedia.appendChild(img);}
      else baseLayer(modalMedia,p,m);
      modalMedia.classList.remove("is-playable");
    }
    modalBrand.textContent=p.brand+(p.year?" · "+p.year:"");
    modalTitle.textContent=campaignName(p)||p.title;
    modalDesc.textContent=p.description||"";
    modalCredits.innerHTML="";
    var creds=(p.credits||[]).filter(function(c){return c&&c.name;});
    creds.push({role:"Role",name:p.role||"Assistant Director"});
    creds.forEach(function(c){var row=el("div","row");row.appendChild(el("dt",null,c.role));row.appendChild(el("dd",c.role==="Production"?"u-upper":null,c.name));modalCredits.appendChild(row);});
    if(p.link){modalSource.href=p.link;modalSource.textContent=isFilm(p)?"View on IMDb ↗":(playable?"Watch ↗":"View original ↗");modalSource.style.display="";}else modalSource.style.display="none";
    modal.hidden=false;modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
    requestAnimationFrame(function(){modal.classList.add("is-open");});
    var cb=modal.querySelector(".modal__close");if(cb)cb.focus();
  }
  function closeModal(){modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";setTimeout(function(){modal.hidden=true;modalMedia.innerHTML="";modalMedia.onclick=null;},380);if(lastFocus&&lastFocus.focus)lastFocus.focus();}
  modal.addEventListener("click",function(e){if(e.target.hasAttribute("data-close"))closeModal();});
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape"&&!modal.hidden){closeModal();return;}
    if(modal.hidden&&state.view==="home"){if(e.key==="ArrowLeft")manualNav(-1);else if(e.key==="ArrowRight")manualNav(1);}
  });

  var hdr=document.getElementById("hdr");
  function onScroll(){hdr.classList.toggle("is-scrolled",window.scrollY>8);}
  onScroll();window.addEventListener("scroll",onScroll,{passive:true});

  /* bio EN/FR toggle */
  (function(){
    var btns=document.querySelectorAll(".bio__lang [data-lang]");
    if(!btns.length)return;
    function set(l){
      Array.prototype.forEach.call(document.querySelectorAll("[data-lang-text]"),function(n){n.hidden=(n.getAttribute("data-lang-text")!==l);});
      Array.prototype.forEach.call(btns,function(b){b.classList.toggle("is-active",b.getAttribute("data-lang")===l);});
    }
    Array.prototype.forEach.call(btns,function(b){b.addEventListener("click",function(){set(b.getAttribute("data-lang"));});});
    set("en");
  })();

  document.getElementById("year").textContent=new Date().getFullYear();
  var SLUGS=CATS.map(function(c){return c.s;});
  function route(){
    var h=(location.hash||"").replace("#","");
    if(SLUGS.indexOf(h)>=0){if(!(state.view==="category"&&state.cat===h))openCat(h,false);}
    else if(h===""||h==="home"||h==="selected"){if(state.view!=="home")goHome(false);}
  }
  window.addEventListener("hashchange",route);
  (function init(){
    var h=(location.hash||"").replace("#","");
    if(SLUGS.indexOf(h)>=0)openCat(h,false);else goHome(false);
  })();
})();
