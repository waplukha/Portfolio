const EMAIL="info@ramkrishnabantawa.com"; // TODO: replace with the real contact address
const AG="https://books.ambition.guru/authors/1459";
//const G="https://books.google.com/books/content?id=JnsAMwEACAAJ&printsec=frontcover&img=1&zoom=1"; //used for Shrill Mist cover, but not used in code
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P=[["index","Home","गृह"],["about","About","परिचय"],["works","Works","कृतिहरू"],["contact","Contact","सम्पर्क"]];
// k: b=book, a=album, s=song. d = detail lines [EN, NE]. Add covers as assets/covers/<slug>.jpg
const ITEMS=[
{k:"b",y:1988,t:"Kharani",n:"खरानी",f:"Novel",en:"His debut novel, the work that began a literary career now spanning decades.",ne:"उनको पहिलो उपन्यास, जसले दशकौं लामो साहित्यिक यात्रा सुरु गर्‍यो।",d:[["Form: novel","विधा: उपन्यास"],["Published in 1988 while he was living outside Nepal","१९८८ मा प्रकाशित"]]},
{k:"b",y:1995,t:"Ashiskshya ko Pratiphal",n:"अशिक्ष्या को प्रतिफल",f:"Drama",en:"A drama about the consequences of illiteracy.",ne:"अशिक्षाको परिणाममाथि लेखिएको नाटक।",d:[["Form: drama","विधा: नाटक"],["Published in 1995, the same year as the song book Bhag Ek","१९९५ मा प्रकाशित, ‘भाग एक’ गीत सङ्ग्रहकै वर्ष"]]},
{k:"b",y:1996,t:"Atma",n:"आत्मा",f:"Novel",en:"His second novel, published in 1996.",ne:"१९९६ मा प्रकाशित उनको दोस्रो उपन्यास।",d:[["Form: novel","विधा: उपन्यास"],["Followed Kharani by eight years","‘खरानी’ पछि आठ वर्षमा प्रकाशित"]]},
{k:"b",y:1997,t:"Radha Ram",n:"राधा राम",f:"Novel",en:"A novel published in 1997.",ne:"१९९७ मा प्रकाशित उपन्यास।",d:[["Form: novel","विधा: उपन्यास"],["Part of a prolific 1995 to 1999 run of books and songs","१९९५ देखि १९९९ सम्मको सक्रिय लेखनकालको कृति"]]},
{k:"b",y:1998,t:"Ama Chhori",n:"आमाछोरी",f:"Novel",en:"A story of the bond between mother and daughter.",ne:"आमा र छोरीको सम्बन्धको कथा।",d:[["Form: novel (English: Mother Daughter)","विधा: उपन्यास"],["A later edition is cited from Sunsari, 2001","पछिल्लो संस्करण सुनसरीबाट, २००१"]]},
{k:"b",y:1999,t:"Mayajaal",n:"मायाजाल",f:"Poetry",en:"A short epic and poetry collection.",ne:"लघु महाकाव्य तथा कविता सङ्ग्रह।",d:[["Form: poetry, a short epic","विधा: कविता, लघु महाकाव्य"],["Published in 1999","१९९९ मा प्रकाशित"]]},
{k:"b",y:2008,t:"Saghan Tuwanlo",n:"साघन तुवाँलो",f:"Novel",en:"His best-known novel: the courage, love and injustice faced by two women across more than a century of Nepal.",ne:"उनको सबैभन्दा चर्चित उपन्यास: एक शताब्दीभन्दा लामो नेपालको पृष्ठभूमिमा दुई महिलाको साहस, प्रेम र अन्यायको कथा।",d:[["Covers Nepal's history from 1846 to 2001","१८४६ देखि २००१ सम्मको नेपालको इतिहास समेट्छ"],["English edition: Shrill Mist, translated by Nara Devi Rai","अंग्रेजी संस्करण: Shrill Mist, अनुवाद नारा देवी राई"]],l:[["Shrill Mist on Google Books","https://books.google.com.np/books/about/Shrill_Mist.html?id=JnsAMwEACAAJ","Google Books मा Shrill Mist"]]},
{k:"b",y:"Translation",t:"Shrill Mist",n:"श्रिल मिस्ट",f:"Novel in English", en:"The English translation of Saghan Tuwanlo, the story of courage, love and injustice faced by two women across more than a century of Nepal.",ne:"‘साघन तुवाँलो’ को अंग्रेजी अनुवाद: ...",d:[["English translation of Saghan Tuwanlo","साघन तुवाँलोको अंग्रेजी अनुवाद"],["Translated by Nara Devi Rai","अनुवाद नारा देवी राई"]],l:[["Shrill Mist on Google Books","https://books.google.com.np/books/about/Shrill_Mist.html?id=JnsAMwEACAAJ","Google Books मा Shrill Mist"]]},
{k:"b",y:2019,t:"Aamalai Chitthi",n:"आमालाई चिठी",f:"Novel",en:"A 1,156-page epic novel and his most recent major work.",ne:"११५६ पृष्ठको महाउपन्यास र उनको पछिल्लो प्रमुख कृति।",d:[["1,156 pages, published in 2019","११५६ पृष्ठ, २०१९ मा प्रकाशित"],["Being translated into English by Dr. Devi Panthi","डा. देवी पन्थीद्वारा अंग्रेजीमा अनुवाद हुँदैछ"]],l:[["NepalKhoj profile","https://www.nepalkhoj.com/2021/09/10/120884/","नेपालखोज प्रोफाइल"]]},
{k:"a",y:"1995",t:"Bhag Ek",n:"भाग एक",f:"Song books",en:"Song book of modern Nepali lyrics.",ne:"आधुनिक नेपाली गीतको सङ्ग्रह।",d:[["Bhag Ek (Part 1) in 1995","भाग एक १९९५"],["All lyrics by Ram Krishna Bantawa","सबै गीत रामकृष्ण वान्तवाका"]]},
{k:"a",y:"1998",t:"Bhag Dui",n:"भाग दुई",f:"Song books",en:"Song book of modern Nepali lyrics.",ne:"आधुनिक नेपाली गीतको सङ्ग्रह।",d:[["Bhag Dui Part 2 in 1998","भाग दुई १९९८"],["All lyrics by Ram Krishna Bantawa","सबै गीत रामकृष्ण वान्तवाका"]]},
{k:"a",y:1998,t:"Dhuwa",n:"धुवा",f:"Album",en:"His first music album.",ne:"उनको पहिलो सङ्गीत एल्बम।",d:[["Produced in 1998","१९९८ मा निर्मित"],["The start of his work as a lyricist for recorded music","रेकर्ड गरिएको सङ्गीतका लागि गीतकारका रूपमा सुरुवात"]]},
{k:"a",y:2005,t:"Aavaa",n:"आभा",f:"Album",en:"A folk, contemporary and pop album sung solo by Abha Mukarung.",ne:"आभा मुकारुङको एकल स्वरमा लोक, समकालीन र पप एल्बम।",d:[["Brought stardom to singer Abha Mukarung across Nepal","गायिका आभा मुकारुङलाई नेपालभर चिनायो"],["Home of the enduring hit Kata Hideko","चर्चित गीत ‘कता हिडेको’ यसैमा छ"]]},
{k:"a",y:2006,t:"Aawaz",n:"आवाज",f:"Album",en:"An album dedicated to peace.",ne:"शान्तिप्रति समर्पित एल्बम।",d:[["Music by Nagendra Shrestha","सङ्गीत नगेन्द्र श्रेष्ठ"],["Sung by Bikal Pardhan and Abha Mukarung","स्वर विकल प्रधान र आभा मुकारुङ"],["Includes Kunai Phool Jasto Lagyo and Aawaj Sanga","‘कुनै फूल जस्तो लाग्यो’ र ‘आवाज सँग’ समावेश"]]},
{k:"a",y:2020,t:"Covid-19 Le Sikaidyo",n:"कोभिड–१९ ले सिकाइदियो",f:"Single",en:"A pandemic-era song dedicated to everyone fighting the virus.",ne:"भाइरससँग लड्ने सबैलाई समर्पित महामारीकालीन गीत।",d:[["Composed by CL Sharma","सङ्गीत सीएल शर्मा"],["Sung by Mahesh Silpakar and Suresh Chand","स्वर महेश शिल्पकार र सुरेश चाँद"]]},
{k:"a",y:2023,t:"Hamro Maya",n:"हाम्रो माया",f:"Single",en:"A song for lovers to love unconditionally, with no boundaries.",ne:"सीमाविना, शर्तविना माया गर्न प्रेरित गर्ने गीत।",d:[["Composed by CL Sharma","सङ्गीत सीएल शर्मा"],["Sung by Mahesh Silpakar and Melina Rai","स्वर महेश शिल्पकार र मेलिना राई"]]}];
const SONGS=[["9hlYOMYBhdg","Kata Hideko","कता हिडेको","Album Aavaa · sung by Abha Mukarung · 2005","एल्बम आभा · स्वर आभा मुकारुङ · २००५"],["G2B2IXuEEa8","Kunai Phool Jasto Lagyo","कुनै फूल जस्तो लाग्यो","Album Aawaz · sung by Bikal Pardhan · 2006","एल्बम आवाज · स्वर विकल प्रधान · २००६"],["Mb6gzp__4fQ","Featured video","विशेष भिडियो","Click to play","हेर्न क्लिक गर्नुहोस्"]];
const TL=[["1967","Born on 1 January in Khotang District, Nepal.","खोटाङ जिल्लामा १ जनवरीमा जन्म।"],["1988","Publishes his first novel, Kharani.","पहिलो उपन्यास ‘खरानी’ प्रकाशित।"],["1995","Drama Ashiskshya ko Pratiphal and song book Bhag Ek appear.","नाटक ‘अशिक्ष्या को प्रतिफल’ र गीत सङ्ग्रह ‘भाग एक’।"],["1996–1998","Novels Atma, Radha Ram and Ama Chhori; Bhag Dui; first album Dhuwa.","उपन्यास आत्मा, राधा राम, आमाछोरी; ‘भाग दुई’; पहिलो एल्बम ‘धुवा’।"],["1999","Poetry collection Mayajaal.","कविता सङ्ग्रह ‘मायाजाल’।"],["2005","Album Aavaa brings stardom to Abha Mukarung; Kata Hideko becomes a classic.","‘आभा’ एल्बमले आभा मुकारुङलाई प्रसिद्धि दिलायो; ‘कता हिडेको’ कालजयी बन्यो।"],["2006","Peace album Aawaz released.","शान्ति एल्बम ‘आवाज’ सार्वजनिक।"],["2008","Saghan Tuwanlo published, later translated as Shrill Mist.","‘साघन तुवाँलो’ प्रकाशित, पछि ‘Shrill Mist’ नामले अनुवाद।"],["2019","The 1,156-page Aamalai Chitthi is published.","११५६ पृष्ठको ‘आमालाई चिठी’ प्रकाशित।"],["2020","Pandemic song Covid-19 Le Sikaidyo released.","‘कोभिड–१९ ले सिकाइदियो’ गीत सार्वजनिक।"],["2022","Chief Guest at a Charu Sahitya Pratishthan event at Kavya Hall, Hotel Hardik, Kathmandu.","चारु साहित्य प्रतिष्ठानको कार्यक्रममा प्रमुख अतिथि, काव्य हल, होटल हार्दिक, काठमाडौं।"],["2023","Song Hamro Maya released.","‘हाम्रो माया’ गीत सार्वजनिक।"]];
const slug=t=>t.toLowerCase().replace(/\W+/g,"-");
const cover=b=>`<div class="cover ${b.k=="a"?"alb":""}"><span class="yr">${b.y}</span><h3>${b.t}</h3><em>${b.n}</em><img src="${b.c||"assets/covers/"+slug(b.t)+".jpg"}" alt="Cover of ${b.t}" loading="lazy" onerror="this.remove()"></div>`;
const card=(b,i)=>`<article class="bk rv" data-i="${i}">${cover(b)}<div class="meta"><span class="tag">${b.f}</span><p data-ne="${b.ne}">${b.en}</p><button class="more" data-ne="विवरण हेर्नुहोस्">View details</button></div></article>`;
const wide=(b,i)=>`<article class="wk rv" data-g="${b.k}">${cover(b)}<div><span class="tag">${b.f} · ${b.y}</span><h3>${b.t}</h3><p class="nn">${b.n}</p><p data-ne="${b.ne}">${b.en}</p><div class="facts">${b.d.map(x=>`<div><p data-ne="${x[1]}">${x[0]}</p></div>`).join("")}</div></div></article>`;
const vid=s=>`<div class="rv"><div class="yt" data-id="${s[0]}"></div><h3 data-ne="${s[2]}">${s[1]}</h3><p class="cap" data-ne="${s[4]}">${s[3]}</p></div>`;
const tli=a=>a.map(x=>`<li class="rv"><b>${x[0]}</b><p data-ne="${x[2]}">${x[1]}</p></li>`).join("");
const idx=(k)=>ITEMS.map((b,i)=>[b,i]).filter(x=>x[0].k==k);
document.documentElement.classList.add("js");
const cur=(location.pathname.split("/").pop()||"index.html").replace(".html","")||"index",home=cur=="index";
document.body.insertAdjacentHTML("afterbegin",`<div id="pg"></div><header><div class="wrap bar"><a class="logo" href="index.html">Ram Krishna <b>Bantawa</b></a><nav id="nav"><ul>${P.map(p=>`<li><a href="${p[0]}.html" class="${p[0]==cur?"on":""}" data-ne="${p[2]}">${p[1]}</a></li>`).join("")}</ul></nav><div class="tools"><button class="lang" id="lang">नेपाली</button><button class="burger" id="bg" aria-label="Menu">☰</button></div></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><span>© ${new Date().getFullYear()} Ram Krishna Bantawa (रामकृष्ण वान्तवा)</span><span data-ne="लेखक · उपन्यासकार · गीतकार">Author · Novelist · Lyricist</span></div></footer>`);
const put=(id,h)=>{const e=$("#"+id);e&&(e.innerHTML=h)};
put("hb",idx("b").map(x=>card(...x)).join(""));put("ha",idx("a").map(x=>card(...x)).join(""));
put("wb",idx("b").map(x=>wide(...x)).join(""));put("wa",idx("a").map(x=>wide(...x)).join(""));
put("hv",SONGS.map(vid).join(""));put("ws",SONGS.map(vid).join(""));
put("tm",tli(TL.filter(x=>"1967 1988 2005 2008 2019 2023".includes(x[0]))));
put("tl",'<div class="fill"></div>'+tli(TL));
$$(".marq div").forEach(m=>m.innerHTML+=m.innerHTML);
const dlg=document.body.appendChild(document.createElement("dialog"));
dlg.onclick=e=>(e.target==dlg||e.target.classList.contains("x"))&&dlg.close();
document.addEventListener("click",e=>{const a=e.target.closest("[data-i]");if(!a)return;const b=ITEMS[+a.dataset.i];
const ls=(b.l||[]).concat(b.k=="b"?[["Buy my books on Ambition Guru",AG,"अम्बिसन गुरुमा मेरा पुस्तक किन्नुहोस्"]]:[]);
dlg.innerHTML=`<button class="x" aria-label="Close">×</button><div class="mg">${cover(b)}<div><div class="eye">${b.y} · ${b.f}</div><h3>${b.t}</h3><p class="nn">${b.n}</p><p data-ne="${b.ne}">${b.en}</p><div class="facts">${b.d.map(x=>`<div><p data-ne="${x[1]}">${x[0]}</p></div>`).join("")}</div>${ls.map(l=>`<a class="btn" href="${l[1]}" target="_blank" rel="noopener" data-ne="${l[2]}">${l[0]}</a>`).join("")}</div></div>`;
tr(dlg);dlg.showModal()});
let L="en";try{L=localStorage.lang||"en"}catch(e){}
function tr(r=document){r.querySelectorAll("[data-ne]").forEach(e=>{e.dataset.en??=e.innerHTML;e.innerHTML=L=="ne"?e.dataset.ne:e.dataset.en})}
function setLang(l){L=l;try{localStorage.lang=l}catch(e){}document.documentElement.lang=l;tr();$("#lang").textContent=l=="ne"?"English":"नेपाली"}
setLang(L);$("#lang").onclick=()=>setLang(L=="en"?"ne":"en");
$("#bg").onclick=()=>$("#nav").classList.toggle("open");
$$("#nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
$$(".rv").forEach(e=>io.observe(e));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const n=+e.target.dataset.count,t0=performance.now();
(function s(t){const p=Math.min((t-t0)/1400,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString();p<1&&requestAnimationFrame(s)})(t0)}));
$$("[data-count]").forEach(e=>co.observe(e));
$$(".yt").forEach(y=>{y.style.backgroundImage=`url(https://i.ytimg.com/vi/${y.dataset.id}/hqdefault.jpg)`;y.tabIndex=0;y.setAttribute("role","button");y.setAttribute("aria-label","Play video");
const go=()=>{y.classList.add("on");y.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${y.dataset.id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="YouTube video"></iframe>`};
y.onclick=go;y.onkeydown=e=>e.key=="Enter"&&go()});
$$(".chips button").forEach(b=>b.onclick=()=>{$$(".chips button").forEach(x=>x.classList.toggle("on",x==b));
$$("[data-s]").forEach(s=>s.style.display=b.dataset.f=="all"||s.dataset.s==b.dataset.f?"":"none")});
const tl=$(".tl"),fill=$(".tl .fill");
function sc(){const h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);$("#pg").style.width=p*100+"%";
if(tl){const r=tl.getBoundingClientRect();fill.style.height=Math.max(0,Math.min(r.height,innerHeight*.6-r.top))+"px"}}
addEventListener("scroll",sc,{passive:true});sc();
const f=$("#cf");f&&(f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
location.href=`mailto:${EMAIL}?subject=${encodeURIComponent(d.get("s")||"Message from website")}&body=${encodeURIComponent(d.get("m")+"\n\n— "+d.get("n")+" ("+d.get("e")+")")}`});
