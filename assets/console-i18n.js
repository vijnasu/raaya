/* RAAYA Console i18n — translates the JS-rendered console UI (EN/हिंदी/ಕನ್ನಡ).
   Works by exact-phrase replacement on text nodes + placeholders after each render.
   Leader-entered data and plan action sentences stay in the language they were written. */
(function(){
const PH = {
"Onboarded Leaders":{hi:"पंजीकृत नेता",kn:"ನೋಂದಾಯಿತ ನಾಯಕರು"},
"Every leader gets a profile, plan, tracker and budget.":{hi:"हर नेता को प्रोफ़ाइल, योजना, ट्रैकर और बजट मिलता है।",kn:"ಪ್ರತಿ ನಾಯಕರಿಗೆ ಪ್ರೊಫೈಲ್, ಯೋಜನೆ, ಟ್ರ್ಯಾಕರ್ ಮತ್ತು ಬಜೆಟ್ ಸಿಗುತ್ತದೆ."},
"+ Onboard New Leader":{hi:"+ नया नेता जोड़ें",kn:"+ ಹೊಸ ನಾಯಕರನ್ನು ಸೇರಿಸಿ"},
"Open Profile":{hi:"प्रोफ़ाइल खोलें",kn:"ಪ್ರೊಫೈಲ್ ತೆರೆಯಿರಿ"},
"Remove":{hi:"हटाएँ",kn:"ತೆಗೆದುಹಾಕಿ"},
"Command Dashboard":{hi:"कमांड डैशबोर्ड",kn:"ಕಮಾಂಡ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"},
"All campaigns at a glance.":{hi:"सभी अभियानों की एक झलक।",kn:"ಎಲ್ಲ ಅಭಿಯಾನಗಳ ಒಂದು ನೋಟ."},
"LEADERS":{hi:"नेता",kn:"ನಾಯಕರು"},
"OPEN TASKS":{hi:"खुले कार्य",kn:"ಬಾಕಿ ಕೆಲಸಗಳು"},
"OVERDUE":{hi:"विलंबित",kn:"ವಿಳಂಬಿತ"},
"TOTAL SPENT":{hi:"कुल खर्च",kn:"ಒಟ್ಟು ವೆಚ್ಚ"},
"⤒ Export backup (JSON)":{hi:"⤒ बैकअप निर्यात करें (JSON)",kn:"⤒ ಬ್ಯಾಕಪ್ ರಫ್ತು (JSON)"},
"⤓ Import backup":{hi:"⤓ बैकअप आयात करें",kn:"⤓ ಬ್ಯಾಕಪ್ ಆಮದು"},
/* wizard steps & titles */
"Leader Profile":{hi:"नेता प्रोफ़ाइल",kn:"ನಾಯಕರ ಪ್ರೊಫೈಲ್"},
"Election Target":{hi:"चुनाव लक्ष्य",kn:"ಚುನಾವಣಾ ಗುರಿ"},
"Constituency":{hi:"निर्वाचन क्षेत्र",kn:"ಕ್ಷೇತ್ರ"},
"RAAYA Services":{hi:"RAAYA सेवाएँ",kn:"RAAYA ಸೇವೆಗಳು"},
"Review & Confirm":{hi:"समीक्षा और पुष्टि",kn:"ಪರಿಶೀಲನೆ ಮತ್ತು ದೃಢೀಕರಣ"},
"RAAYA Services Required":{hi:"आवश्यक RAAYA सेवाएँ",kn:"ಬೇಕಾದ RAAYA ಸೇವೆಗಳು"},
"Who are we onboarding?":{hi:"हम किसे जोड़ रहे हैं?",kn:"ನಾವು ಯಾರನ್ನು ಸೇರಿಸುತ್ತಿದ್ದೇವೆ?"},
"Which election is the leader targeting?":{hi:"नेता किस चुनाव को लक्षित कर रहे हैं?",kn:"ನಾಯಕರು ಯಾವ ಚುನಾವಣೆಯನ್ನು ಗುರಿಯಾಗಿಸಿದ್ದಾರೆ?"},
"Where is the battle?":{hi:"मुक़ाबला कहाँ है?",kn:"ಹೋರಾಟ ಎಲ್ಲಿದೆ?"},
"Select every service the campaign needs — this shapes the plan and budget.":{hi:"अभियान के लिए ज़रूरी हर सेवा चुनें — इसी से योजना और बजट बनता है।",kn:"ಅಭಿಯಾನಕ್ಕೆ ಬೇಕಾದ ಪ್ರತಿ ಸೇವೆಯನ್ನು ಆರಿಸಿ — ಇದರಿಂದ ಯೋಜನೆ ಮತ್ತು ಬಜೆಟ್ ರೂಪುಗೊಳ್ಳುತ್ತದೆ."},
"Check the details before creating the leader profile.":{hi:"प्रोफ़ाइल बनाने से पहले विवरण जाँच लें।",kn:"ಪ್ರೊಫೈಲ್ ರಚಿಸುವ ಮೊದಲು ವಿವರ ಪರಿಶೀಲಿಸಿ."},
/* labels */
"Full Name *":{hi:"पूरा नाम *",kn:"ಪೂರ್ಣ ಹೆಸರು *"},
"Party / Affiliation":{hi:"पार्टी / संबद्धता",kn:"ಪಕ್ಷ / ಸಂಬಂಧ"},
"Phone":{hi:"फ़ोन",kn:"ಫೋನ್"},
"Email":{hi:"ईमेल",kn:"ಇಮെയಿಲ್"},
"Current Position":{hi:"वर्तमान पद",kn:"ಪ್ರಸ್ತುತ ಸ್ಥಾನ"},
"Political Experience (years)":{hi:"राजनीतिक अनुभव (वर्ष)",kn:"ರಾಜಕೀಯ ಅನುಭವ (ವರ್ಷ)"},
"Key Strengths / Notes":{hi:"मुख्य ताक़तें / टिप्पणियाँ",kn:"ಮುಖ್ಯ ಸಾಮರ್ಥ್ಯ / ಟಿಪ್ಪಣಿ"},
"Expected Election Date":{hi:"संभावित चुनाव तिथि",kn:"ನಿರೀಕ್ಷಿತ ಚುನಾವಣಾ ದಿನಾಂಕ"},
"Contest Status":{hi:"चुनावी स्थिति",kn:"ಸ್ಪರ್ಧೆಯ ಸ್ಥಿತಿ"},
"State *":{hi:"राज्य *",kn:"ರಾಜ್ಯ *"},
"Constituency / Ward Name *":{hi:"निर्वाचन क्षेत्र / वार्ड नाम *",kn:"ಕ್ಷೇತ್ರ / ವಾರ್ಡ್ ಹೆಸರು *"},
"Approx. Voter Count":{hi:"अनुमानित मतदाता संख्या",kn:"ಅಂದಾಜು ಮತದಾರರ ಸಂಖ್ಯೆ"},
"Urban / Rural Mix":{hi:"शहरी / ग्रामीण मिश्रण",kn:"ನಗರ / ಗ್ರಾಮೀಣ ಮಿಶ್ರಣ"},
"Main Rival(s) & Local Issues":{hi:"मुख्य प्रतिद्वंद्वी और स्थानीय मुद्दे",kn:"ಮುಖ್ಯ ಎದುರಾಳಿಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ವಿಷಯಗಳು"},
"Indicative Budget Band (₹)":{hi:"अनुमानित बजट सीमा (₹)",kn:"ಅಂದಾಜು ಬಜೆಟ್ ಶ್ರೇಣಿ (₹)"},
"Engagement Start":{hi:"कार्य प्रारंभ",kn:"ಕಾರ್ಯಾರಂಭ"},
/* buttons */
"← Back":{hi:"← पीछे",kn:"← ಹಿಂದೆ"},
"Continue":{hi:"आगे बढ़ें",kn:"ಮುಂದುವರಿಸಿ"},
"Cancel":{hi:"रद्द करें",kn:"ರದ್ದುಮಾಡಿ"},
"✓ Create Leader Profile":{hi:"✓ नेता प्रोफ़ाइल बनाएँ",kn:"✓ ನಾಯಕರ ಪ್ರೊಫೈಲ್ ರಚಿಸಿ"},
"Edit Details":{hi:"विवरण संपादित करें",kn:"ವಿವರ ತಿದ್ದಿ"},
"← All Leaders":{hi:"← सभी नेता",kn:"← ಎಲ್ಲ ನಾಯಕರು"},
"🖨 Print Report / PDF":{hi:"🖨 रिपोर्ट प्रिंट / PDF",kn:"🖨 ವರದಿ ಮುದ್ರಣ / PDF"},
"+ Add":{hi:"+ जोड़ें",kn:"+ ಸೇರಿಸಿ"},
"⤓ Import plan actions as tasks":{hi:"⤓ योजना की कार्रवाइयाँ कार्यों में जोड़ें",kn:"⤓ ಯೋಜನೆಯ ಕ್ರಮಗಳನ್ನು ಕೆಲಸಗಳಾಗಿ ಸೇರಿಸಿ"},
"⤓ Suggest allocation from budget band":{hi:"⤓ बजट सीमा से आवंटन सुझाएँ",kn:"⤓ ಬಜೆಟ್ ಶ್ರೇಣಿಯಿಂದ ಹಂಚಿಕೆ ಸೂಚಿಸಿ"},
/* elections */
"Lok Sabha (MP)":{hi:"लोक सभा (सांसद)",kn:"ಲೋಕಸಭೆ (ಸಂಸದ)"},
"Vidhan Sabha (MLA)":{hi:"विधान सभा (विधायक)",kn:"ವಿಧಾನಸಭೆ (ಶಾಸಕ)"},
"MLC / Council":{hi:"एमएलसी / परिषद",kn:"ಎಂಎಲ್‌ಸಿ / ಪರಿಷತ್ತು"},
"Zilla / Taluk Panchayat":{hi:"ज़िला / तालुक पंचायत",kn:"ಜಿಲ್ಲಾ / ತಾಲ್ಲೂಕು ಪಂಚಾಯಿತಿ"},
"Municipal / Corporation":{hi:"नगरपालिका / निगम",kn:"ಪುರಸಭೆ / ಮಹಾನಗರ ಪಾಲಿಕೆ"},
"Gram Panchayat":{hi:"ग्राम पंचायत",kn:"ಗ್ರಾಮ ಪಂಚಾಯಿತಿ"},
"Co-operative / Society":{hi:"सहकारी / सोसाइटी",kn:"ಸಹಕಾರಿ / ಸಂಘ"},
"Party Position":{hi:"पार्टी पद",kn:"ಪಕ್ಷದ ಹುದ್ದೆ"},
/* services */
"Ground Pulse":{hi:"ग्राउंड पल्स",kn:"ಗ್ರೌಂಡ್ ಪಲ್ಸ್"},
"Candidate Blueprint":{hi:"कैंडिडेट ब्लूप्रिंट",kn:"ಅಭ್ಯರ್ಥಿ ಬ್ಲೂಪ್ರಿಂಟ್"},
"Campaign Command":{hi:"कैंपेन कमांड",kn:"ಅಭಿಯಾನ ಕಮಾಂಡ್"},
"Digital Mandate":{hi:"डिजिटल मैंडेट",kn:"ಡಿಜಿಟల్ ಮ್ಯಾಂಡೇಟ್"},
"War Room":{hi:"वॉर रूम",kn:"ವಾರ್ ರೂಮ್"},
"Governance Connect":{hi:"गवर्नेंस कनेक्ट",kn:"ಆಡಳಿತ ಸಂಪರ್ಕ"},
"Astro-Strategy Advisory":{hi:"ज्योतिष-रणनीति सलाह",kn:"ಜ್ಯೋತಿಷ್ಯ-ತಂತ್ರ ಸಲಹೆ"},
"Media Relations":{hi:"मीडिया संबंध",kn:"ಮಾಧ್ಯಮ ಸಂಪರ್ಕ"},
/* statuses & tracker */
"Pending":{hi:"लंबित",kn:"ಬಾಕಿ"},
"In Progress":{hi:"प्रगति पर",kn:"ಪ್ರಗತಿಯಲ್ಲಿ"},
"Done ✓":{hi:"पूर्ण ✓",kn:"ಮುಗಿದಿದೆ ✓"},
"New Task *":{hi:"नया कार्य *",kn:"ಹೊಸ ಕೆಲಸ *"},
"Owner":{hi:"ज़िम्मेदार",kn:"ಜವಾಬ್ದారಿ"},
"Due Date":{hi:"नियत तिथि",kn:"ಅಂತಿಮ ದಿನಾಂಕ"},
"Phase":{hi:"चरण",kn:"ಹಂತ"},
"Unassigned":{hi:"अनिर्धारित",kn:"ನಿಗದಿಯಾಗಿಲ್ಲ"},
"Track every action: owner, deadline, status.":{hi:"हर कार्रवाई पर नज़र: ज़िम्मेदार, समय-सीमा, स्थिति।",kn:"ಪ್ರತಿ ಕ್ರಮದ ಮೇಲೆ ನಿಗಾ: ಜವಾಬ್ದಾರಿ, ಗಡುವು, ಸ್ಥಿತಿ."},
/* budget */
"Budget":{hi:"बजट",kn:"ಬಜೆಟ್"},
"Line Item":{hi:"मद",kn:"ವెಚ್ಚದ ಬಾಬು"},
"Service":{hi:"सेवा",kn:"ಸೇವೆ"},
"Planned ₹":{hi:"नियोजित ₹",kn:"ಯೋಜಿತ ₹"},
"Actual ₹":{hi:"वास्तविक ₹",kn:"ವಾಸ್ತವಿಕ ₹"},
"Balance":{hi:"शेष",kn:"ಬಾಕಿ ಮೊತ್ತ"},
"New Line Item *":{hi:"नई मद *",kn:"ಹೊಸ ಬಾಬು *"},
"PLANNED":{hi:"नियोजित",kn:"ಯೋಜಿತ"},
"SPENT":{hi:"खर्च",kn:"ವೆಚ್ಚ"},
"REMAINING":{hi:"शेष",kn:"ಉಳಿದದ್ದು"},
/* plan */
"Campaign Plan & Timeline":{hi:"अभियान योजना और समय-रेखा",kn:"ಅಭಿಯಾನ ಯೋಜನೆ ಮತ್ತು ಕಾಲರೇಖೆ"},
"Execution Tracker":{hi:"निष्पादन ट्रैकर",kn:"ಅನುಷ್ಠಾನ ಟ್ರ್ಯಾಕರ್"},
"DAYS TO POLL":{hi:"मतदान में दिन",kn:"ಮತದಾನಕ್ಕೆ ದಿನಗಳು"},
"WEEKS":{hi:"सप्ताह",kn:"ವಾರಗಳು"},
"PHASES":{hi:"चरण",kn:"ಹಂತಗಳು"},
"SERVICES":{hi:"सेवाएँ",kn:"ಸೇವೆಗಳು"},
"ACTIVE NOW":{hi:"अभी सक्रिय",kn:"ಈಗ ಸಕ್ರಿಯ"},
"Foundation & Setup":{hi:"नींव और व्यवस्था",kn:"ಅಡಿಪಾಯ ಮತ್ತು ಸಿದ್ಧತೆ"},
"Voter Intelligence":{hi:"मतदाता खुफिया",kn:"ಮತದಾರರ ಗುಪ್ತಚರ"},
"Narrative & Image":{hi:"कथानक और छवि",kn:"ನಿರೂಪಣೆ ಮತ್ತು ವರ್ಚಸ್ಸು"},
"Organisation & Ground Game":{hi:"संगठन और ज़मीनी काम",kn:"ಸಂಘಟನೆ ಮತ್ತು ನೆಲಮಟ್ಟದ ಕೆಲಸ"},
"Digital Surge & War Room":{hi:"डिजिटल तेज़ी और वॉर रूम",kn:"ಡಿಜಿಟಲ್ ಅಲೆ ಮತ್ತು ವಾರ್ ರೂಮ್"},
"Final Blitz":{hi:"अंतिम आक्रमण",kn:"ಅಂತಿಮ ಆಕ್ರಮಣ"},
"Poll Day & Counting":{hi:"मतदान और मतगणना",kn:"ಮತದಾನ ಮತ್ತು ಎಣಿಕೆ"},
/* profile */
"Services Engaged":{hi:"ली गई सेवाएँ",kn:"ಪಡೆದ ಸೇವೆಗಳು"},
"Budget Band":{hi:"बजट सीमा",kn:"ಬಜೆಟ್ ಶ್ರೇಣಿ"},
"Rivals & Issues":{hi:"प्रतिद्वंद्वी और मुद्दे",kn:"ಎದುರಾಳಿಗಳು ಮತ್ತು ವಿಷಯಗಳು"},
"Notes":{hi:"टिप्पणियाँ",kn:"ಟಿಪ್ಪಣಿಗಳು"},
"Leader":{hi:"नेता",kn:"ನಾಯಕ"},
"Contact":{hi:"संपर्क",kn:"ಸಂಪರ್ಕ"},
"Election":{hi:"चुनाव",kn:"ಚುನಾವಣೆ"},
/* booths */
"Booth Management":{hi:"बूथ प्रबंधन",kn:"ಬೂತ್ ನಿರ್ವಹಣೆ"},
"Classify every booth: hold the strong, fight for the swing, watch the weak. The swing booths decide the seat.":{hi:"हर बूथ का वर्गीकरण करें: मज़बूत को थामें, स्विंग के लिए लड़ें, कमज़ोर पर नज़र रखें। स्विंग बूथ ही सीट तय करते हैं।",kn:"ಪ್ರತಿ ಬೂತ್ ವರ್ಗೀಕರಿಸಿ: ಬಲవాದದ್ದನ್ನು ಉಳಿಸಿ, ಸ್ವಿಂಗ್‌ಗಾಗಿ ಹೋರಾಡಿ, ದುರ್ಬಲದ ಮೇಲೆ ನಿಗಾ ಇಡಿ. ಸ್ವಿಂಗ್ ಬೂತ್‌ಗಳೇ ಸೀಟು ನಿರ್ಧರಿಸುತ್ತವೆ."},
"Strong":{hi:"मज़बूत",kn:"ಬಲವಾದ"},
"Swing":{hi:"स्विंग",kn:"ಸ್ವಿಂಗ್"},
"Weak":{hi:"कमज़ोर",kn:"ದುರ್ಬಲ"},
"Booth No. & Name *":{hi:"बूथ नं. और नाम *",kn:"ಬೂತ್ ಸಂ. ಮತ್ತು ಹೆಸರು *"},
"Voters":{hi:"मतदाता",kn:"ಮತದಾರರು"},
"Classification":{hi:"वर्गीकरण",kn:"ವರ್ಗೀಕರಣ"},
"In-charge":{hi:"प्रभारी",kn:"ಉಸ್ತುವಾರಿ"},
"No booths mapped yet — add them below.":{hi:"अभी कोई बूथ नहीं जोड़ा गया — नीचे जोड़ें।",kn:"ಇನ್ನೂ ಬೂತ್ ಸೇರಿಸಿಲ್ಲ — ಕೆಳಗೆ ಸೇರಿಸಿ."},
/* contest statuses & options */
"Ticket confirmed":{hi:"टिकट पक्का",kn:"ಟಿಕೆಟ್ ಖಚಿತ"},
"Seeking ticket":{hi:"टिकट की कोशिश",kn:"ಟಿಕೆಟ್ ಪ್ರಯತ್ನದಲ್ಲಿ"},
"Exploring / undecided":{hi:"विचाराधीन / अनिर्णीत",kn:"ಪರಿಶೀಲನೆಯಲ್ಲಿ / ನಿರ್ಧಾರವಾಗಿಲ್ಲ"},
"Incumbent defending seat":{hi:"मौजूदा सीट की रक्षा",kn:"ಹಾಲಿ ಸ್ಥಾನ ರಕ್ಷಣೆ"},
"Mostly rural":{hi:"अधिकतर ग्रामीण",kn:"ಹೆಚ್ಚಾಗಿ ಗ್ರಾಮೀಣ"},
"Mostly urban":{hi:"अधिकतर शहरी",kn:"ಹೆಚ್ಚಾಗಿ ನಗರ"},
"Mixed / semi-urban":{hi:"मिश्रित / अर्ध-शहरी",kn:"ಮಿಶ್ರ / ಅರೆ-ನಗರ"},
"Immediately":{hi:"तुरंत",kn:"ತಕ್ಷಣ"},
"Within 1 month":{hi:"1 माह के भीतर",kn:"1 ತಿಂಗಳೊಳಗೆ"},
"Within 3 months":{hi:"3 माह के भीतर",kn:"3 ತಿಂಗಳೊಳಗೆ"},
"After ticket confirmation":{hi:"टिकट पक्का होने के बाद",kn:"ಟಿಕೆಟ್ ಖಚಿತವಾದ ನಂತರ"}
};

function lang(){ try{ return localStorage.getItem('raaya_lang')||'en'; }catch(e){ return 'en'; } }
function tr(s){
  const L=lang(); if(L==='en') return null;
  const t=s.trim(); const hit=PH[t];
  if(hit&&hit[L]) return s.replace(t,hit[L]);
  // numbered wizard steps: "3. Constituency"
  const m=t.match(/^(\d+\.\s)(.+)$/);
  if(m&&PH[m[2]]&&PH[m[2]][L]) return s.replace(t,m[1]+PH[m[2]][L]);
  return null;
}
function walk(root){
  const it=document.createNodeIterator(root,NodeFilter.SHOW_TEXT);
  let n; while(n=it.nextNode()){ const r=tr(n.nodeValue); if(r!==null) n.nodeValue=r; }
  root.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el=>{
    const r=tr(el.placeholder); if(r!==null) el.placeholder=r;
  });
}
let busy=false;
function translateApp(){
  const app=document.getElementById('app'); if(!app||busy) return;
  busy=true; walk(app); busy=false;
}
const obs=new MutationObserver(()=>translateApp());
document.addEventListener('DOMContentLoaded',()=>{
  const app=document.getElementById('app');
  if(app){ obs.observe(app,{childList:true,subtree:true}); translateApp(); }
  // language switcher: re-render current console view, then translate
  document.addEventListener('click',e=>{
    if(e.target.closest('.langsw button')) setTimeout(()=>{ if(window.__rerender)window.__rerender(); translateApp(); },0);
  });
});
window.__consoleTranslate=translateApp;
})();
