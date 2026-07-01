/* RAAYA multilingual engine — English / हिंदी / ಕನ್ನಡ
   Usage: add data-i18n="key" to any element (innerHTML is replaced),
   or data-i18n-ph="key" for input/textarea placeholders.
   Language is remembered in localStorage. */

const I18N = {
  en: {
    brand_sub:"POLITICAL STRATEGY",
    nav_home:"Home", nav_services:"Services", nav_approach:"Approach", nav_about:"About", nav_contact:"Contact",
    cta_book:"Book a Strategy Call", cta_book_long:"Book a Confidential Strategy Call", cta_explore:"Explore Campaign Services",

    hero_chip:"PEOPLE · PERCEPTION · POWER",
    hero_title:"Political strategy for winning <span class='gold'>mandates</span>.",
    hero_sub:"RAAYA helps leaders, candidates and political organisations understand voters, shape narratives, build public trust and execute disciplined campaigns — through data, ground intelligence, digital influence and booth-level strategy.",

    stat1_n:"31", stat1_l:"Districts mapped, Karnataka",
    stat2_n:"360°", stat2_l:"Data · Narrative · Digital · Ground",
    stat3_n:"24×7", stat3_l:"War-room monitoring",
    stat4_n:"100%", stat4_l:"Confidential & ECI-compliant",

    prob_k:"The New Reality of Politics",
    prob_h:"Politics is no longer won by noise.",
    prob_p:"It is won by intelligence, organisation, trust and timing. Popularity is not enough — winning needs research, disciplined execution and a narrative that reaches people where they are.",
    prob1_h:"Ground reality is fragmented", prob1_p:"Every booth, ward and community reads differently. Without granular intelligence, campaigns spend energy in the wrong places.",
    prob2_h:"Narratives move faster than teams", prob2_p:"An unanswered attack sets the agenda for days. Most campaigns react late and lose the framing.",
    prob3_h:"Organisation decides turnout", prob3_p:"Enthusiasm without a functioning booth structure does not convert into votes on polling day.",
    prob4_h:"Trust is the real currency", prob4_p:"Voters reward leaders who listen and deliver. Building visible, credible trust is a discipline — not an accident.",

    svc_k:"What We Do",
    svc_h:"Voter intelligence meets campaign execution.",
    svc_p:"Six integrated capabilities that take a campaign from listening to the ground all the way to a winning mandate and durable public trust.",
    svc1_h:"RAAYA Ground Pulse", svc1_p:"Voter research, local issue discovery, public sentiment, booth-level intelligence and constituency diagnosis.",
    svc2_h:"Candidate Blueprint", svc2_p:"Candidate image analysis, leadership positioning, personal narrative and public-trust strategy.",
    svc3_h:"Campaign Command", svc3_p:"Full campaign planning, field execution, team structure, daily monitoring and booth-level coordination.",
    svc4_h:"Digital Mandate", svc4_p:"Social strategy, WhatsApp campaigns, short-form video, digital reputation and regional-language content.",
    svc5_h:"RAAYA War Room", svc5_p:"Daily tracking, opposition monitoring, issue response, crisis handling and rapid strategy correction.",
    svc6_h:"Governance Connect", svc6_p:"Post-election development communication, achievement branding and long-term reputation building.",

    fw_k:"Our Methodology", fw_h:"The R.A.A.Y.A. Method.",
    fw_p:"A disciplined cycle that moves from listening to the ground, to building strategy, to converting it into daily execution and lasting authority.",
    fw1_h:"Research", fw1_p:"Constituency, people, issues, communities and voter mood.",
    fw2_h:"Analysis", fw2_p:"Voter segments, opposition strength and emotional drivers.",
    fw3_h:"Architecture", fw3_p:"Message, team, booth plan, digital plan and calendar.",
    fw4_h:"Yield", fw4_p:"Outreach, rallies, digital influence and daily monitoring.",
    fw5_h:"Authority", fw5_p:"Credibility, public trust and governance communication.",

    why_k:"Why RAAYA", why_h:"Strategy for leaders who want public trust.",
    why1:"<b>Built for Indian ground reality.</b> Booth, ward, panchayat and community fluency — not imported playbooks.",
    why2:"<b>Data-driven, not guesswork.</b> Bilingual sentiment intelligence and district-wise diagnosis behind every call.",
    why3:"<b>Execution discipline.</b> Daily reporting, war-room rapid response, and accountable field teams.",
    why4:"<b>Ethical & legal by design.</b> Fact-based, ECI-compliant, confidentiality-protected — no fake news, ever.",
    why_panel_h:"Intelligence before noise.",
    why_panel_p:"RAAYA exists for leaders who want serious strategy, not random publicity. We convert public mood into an organised, winning mandate.",
    why_principle:"Strategy before publicity. People before power. Mandate through trust.",

    conf_k:"Our Promise", conf_h:"Confidential by default.",
    conf_p:"All strategic discussions, constituency data, campaign plans, voter research and internal assessments are handled with strict confidentiality. RAAYA does not disclose client information, campaign insights or internal strategy to any third party without written permission.",

    cta_k:"Let's Talk", cta_h:"Build mandates. Build trust. Build leadership.",
    cta_p:"Book a confidential strategy consultation. We'll walk through your constituency, your challenge and how RAAYA can strengthen your winning probability.",

    foot_about:"A premium political strategy management firm — voter intelligence, narrative, digital influence and ground-level execution.",
    foot_services_h:"Services", foot_firm_h:"Firm", foot_consult_h:"Confidential Consultation",
    foot_link_why:"Why RAAYA", foot_link_method:"Our Method", foot_link_approach:"Approach", foot_link_contact:"Contact",
    foot_disc:"Non-partisan strategy firm. All work is fact-based, confidential and compliant with Election Commission norms. RAAYA does not promise guaranteed electoral outcomes.",
    foot_rights:"© 2026 RAAYA — Political Strategy Management. All rights reserved.",
    foot_tag:"People. Perception. Power.",

    /* Services page */
    sv_hero_h:"Services built for Indian ground reality.",
    sv_hero_p:"From listening to the ground, to narrative, to disciplined execution — six core capabilities plus flagship intelligence services that few have operationalised.",
    sd_li:"Includes:",
    sd1_li:"<li>Booth & ward-level voter surveys</li><li>Local issue and grievance mapping</li><li>Community influence grid</li><li>Constituency diagnosis report</li>",
    sd2_li:"<li>Candidate image & perception audit</li><li>Leadership positioning</li><li>Personal narrative & speeches</li><li>Public-trust strategy</li>",
    sd3_li:"<li>Booth & Shakti Kendra structure</li><li>Volunteer training & task allocation</li><li>Daily reporting & review</li><li>Rally & padayatra planning</li>",
    sd4_li:"<li>Kannada-first content calendar</li><li>WhatsApp karyakarta cascade</li><li>Short-form video & reels</li><li>Digital reputation management</li>",
    sd5_li:"<li>Media & sentiment monitoring</li><li>Rapid, fact-based response</li><li>Opposition narrative tracking</li><li>Crisis communication</li>",
    sd6_li:"<li>Delivery & achievement communication</li><li>Public service messaging</li><li>Governance scorecards</li><li>Long-term reputation building</li>",
    fl_k:"Flagship Intelligence", fl_h:"Ideas most consultancies have not operationalised.",
    fl_p:"Feasible, ethical and IP-led services that turn listening into visible action.",
    fl1_h:"Constituency Digital Twin", fl1_p:"A living data model of a constituency to war-game scenarios before spending on the ground.",
    fl2_h:"Grievance-Resolution Cells", fl2_p:"Field cells that get small local problems actually fixed and documented — converting complaints into trust.",
    fl3_h:"Sentiment-to-Action Loop", fl3_p:"Daily district sentiment generates a field-action list; the next day measures the impact.",
    fl4_h:"Narrative War-Gaming", fl4_p:"Simulate the opposition's likely attacks and pre-build fact-based rebuttals.",
    fl5_h:"Diaspora & Migrant Voters", fl5_p:"Engage voters working in cities and abroad to influence opinion in their home constituency.",

    /* Approach page */
    ap_hero_h:"A disciplined method, not guesswork.",
    ap_hero_p:"Every RAAYA engagement runs on the R.A.A.Y.A. Method — a repeatable cycle from ground research to lasting public authority.",
    ap1_h:"Research", ap1_p:"We begin with the constituency: people, issues, emotions, communities, local leadership networks and public sentiment — down to booth level.",
    ap2_h:"Analysis", ap2_p:"We map voter segments, opposition strength, local power structures, emotional drivers and campaign risks to find where the contest is really won.",
    ap3_h:"Architecture", ap3_p:"We build the campaign architecture: message, team, booth plan, digital plan, leader positioning and a day-by-day execution calendar.",
    ap4_h:"Yield", ap4_p:"We convert strategy into action — outreach, public events, digital influence, volunteer work and daily monitoring with corrective action.",
    ap5_h:"Authority", ap5_p:"We build durable credibility, public trust, mandate strength and long-term governance communication that lasts beyond the election.",
    ap_out_k:"How We Report", ap_out_h:"Clear, usable, field-ready outputs.",
    ap_out_p:"Every engagement produces documents your team can act on immediately.",
    ap_out1_h:"Strategy documents", ap_out1_p:"Executive summary, current situation, findings, strategy, execution plan, timeline, risks and metrics.",
    ap_out2_h:"Field formats", ap_out2_p:"Survey templates, booth trackers, daily reporting formats and volunteer task sheets.",
    ap_out3_h:"Live dashboards", ap_out3_p:"District-wise sentiment, war-room monitoring and rapid-response logs, refreshed daily.",

    /* About page */
    ab_hero_h:"Built for modern Indian politics.",
    ab_hero_p:"RAAYA is a premium political strategy management firm for leaders who want serious strategy — not random publicity.",
    ab_long_h:"Who we are",
    ab_long_p1:"RAAYA is built for modern Indian politics, where winning requires more than popularity. It requires research, organisation, timing, communication and disciplined execution.",
    ab_long_p2:"We begin with the constituency — people, issues, emotions, communities, local leadership networks and public sentiment. From there we design a complete strategy covering candidate positioning, voter outreach, booth-level planning, narrative development, digital influence, media response and daily monitoring.",
    ab_princ_h:"What we stand for",
    ab_conf_note:"All strategy is handled with strict confidentiality and full compliance with Election Commission norms.",

    /* Contact page */
    ct_hero_h:"Book a confidential strategy call.",
    ct_hero_p:"Tell us about your constituency and your challenge. We'll respond privately to arrange a consultation.",
    f_name:"Full name", f_role:"You are a…", f_constituency:"Constituency / region", f_email:"Email", f_phone:"Phone", f_service:"Service of interest", f_message:"Your message", f_submit:"Send Confidential Enquiry",
    f_role_cand:"Candidate", f_role_party:"Party / organisation", f_role_leader:"Public leader", f_role_other:"Other",
    ct_card_h:"What to expect",
    ct_expect:"<div class='row'>1 · A private, no-obligation consultation</div><div class='row'>2 · A quick read of your constituency challenge</div><div class='row'>3 · A tailored scope and next-step plan</div>",
    ct_email_label:"Email us",
    ct_conf:"Everything you share is treated as strictly confidential.",
    ct_note:"This form opens your email app with the details pre-filled — no data is stored on this site."
  },

  hi: {
    brand_sub:"राजनीतिक रणनीति",
    nav_home:"मुख्य", nav_services:"सेवाएँ", nav_approach:"कार्यप्रणाली", nav_about:"हमारे बारे में", nav_contact:"संपर्क",
    cta_book:"रणनीति कॉल बुक करें", cta_book_long:"गोपनीय रणनीति कॉल बुक करें", cta_explore:"अभियान सेवाएँ देखें",

    hero_chip:"जनता · धारणा · शक्ति",
    hero_title:"विजयी <span class='gold'>जनादेश</span> के लिए राजनीतिक रणनीति।",
    hero_sub:"RAAYA नेताओं, प्रत्याशियों और राजनीतिक संगठनों को मतदाताओं को समझने, कथानक गढ़ने, जनविश्वास बनाने और अनुशासित अभियान चलाने में मदद करता है — डेटा, ज़मीनी सूचना, डिजिटल प्रभाव और बूथ-स्तरीय रणनीति के माध्यम से।",

    stat1_n:"31", stat1_l:"कर्नाटक में मैप किए गए ज़िले",
    stat2_n:"360°", stat2_l:"डेटा · कथानक · डिजिटल · ज़मीन",
    stat3_n:"24×7", stat3_l:"वॉर-रूम निगरानी",
    stat4_n:"100%", stat4_l:"गोपनीय व चुनाव आयोग अनुरूप",

    prob_k:"राजनीति की नई वास्तविकता",
    prob_h:"राजनीति अब शोर से नहीं जीती जाती।",
    prob_p:"यह बुद्धिमत्ता, संगठन, विश्वास और समय से जीती जाती है। केवल लोकप्रियता पर्याप्त नहीं — जीत के लिए शोध, अनुशासित क्रियान्वयन और ऐसा कथानक चाहिए जो लोगों तक उनकी जगह पहुँचे।",
    prob1_h:"ज़मीनी हकीकत बिखरी हुई है", prob1_p:"हर बूथ, वार्ड और समुदाय अलग सोचता है। सूक्ष्म सूचना के बिना अभियान गलत जगह ऊर्जा लगाते हैं।",
    prob2_h:"कथानक टीमों से तेज़ चलते हैं", prob2_p:"अनुत्तरित हमला कई दिनों तक एजेंडा तय कर देता है। अधिकांश अभियान देर से प्रतिक्रिया देकर पकड़ खो देते हैं।",
    prob3_h:"संगठन मतदान तय करता है", prob3_p:"कार्यशील बूथ ढाँचे के बिना उत्साह मतदान के दिन वोटों में नहीं बदलता।",
    prob4_h:"विश्वास ही असली पूँजी है", prob4_p:"मतदाता उन नेताओं को पुरस्कृत करते हैं जो सुनते और काम करते हैं। दृश्य, विश्वसनीय भरोसा बनाना एक अनुशासन है — संयोग नहीं।",

    svc_k:"हम क्या करते हैं",
    svc_h:"मतदाता सूचना और अभियान क्रियान्वयन का संगम।",
    svc_p:"छह एकीकृत क्षमताएँ जो अभियान को ज़मीन सुनने से लेकर विजयी जनादेश और टिकाऊ जनविश्वास तक ले जाती हैं।",
    svc1_h:"RAAYA ग्राउंड पल्स", svc1_p:"मतदाता शोध, स्थानीय मुद्दों की खोज, जनभावना, बूथ-स्तरीय सूचना और क्षेत्र निदान।",
    svc2_h:"कैंडिडेट ब्लूप्रिंट", svc2_p:"प्रत्याशी छवि विश्लेषण, नेतृत्व स्थिति-निर्धारण, व्यक्तिगत कथानक और जनविश्वास रणनीति।",
    svc3_h:"कैंपेन कमांड", svc3_p:"संपूर्ण अभियान नियोजन, क्षेत्र क्रियान्वयन, टीम ढाँचा, दैनिक निगरानी और बूथ-स्तरीय समन्वय।",
    svc4_h:"डिजिटल मैंडेट", svc4_p:"सोशल रणनीति, व्हाट्सएप अभियान, लघु वीडियो, डिजिटल प्रतिष्ठा और क्षेत्रीय-भाषा सामग्री।",
    svc5_h:"RAAYA वॉर रूम", svc5_p:"दैनिक ट्रैकिंग, विपक्ष निगरानी, मुद्दा-प्रतिक्रिया, संकट प्रबंधन और तीव्र रणनीति सुधार।",
    svc6_h:"गवर्नेंस कनेक्ट", svc6_p:"चुनाव-पश्चात विकास संचार, उपलब्धि ब्रांडिंग और दीर्घकालिक प्रतिष्ठा निर्माण।",

    fw_k:"हमारी पद्धति", fw_h:"R.A.A.Y.A. पद्धति।",
    fw_p:"एक अनुशासित चक्र जो ज़मीन सुनने से रणनीति बनाने, फिर उसे दैनिक क्रियान्वयन और स्थायी अधिकार में बदलता है।",
    fw1_h:"रिसर्च (शोध)", fw1_p:"क्षेत्र, लोग, मुद्दे, समुदाय और मतदाता मनोभाव।",
    fw2_h:"एनालिसिस (विश्लेषण)", fw2_p:"मतदाता वर्ग, विपक्ष की ताकत और भावनात्मक कारक।",
    fw3_h:"आर्किटेक्चर (रचना)", fw3_p:"संदेश, टीम, बूथ योजना, डिजिटल योजना और कैलेंडर।",
    fw4_h:"यील्ड (फल)", fw4_p:"जनसंपर्क, रैलियाँ, डिजिटल प्रभाव और दैनिक निगरानी।",
    fw5_h:"अथॉरिटी (अधिकार)", fw5_p:"विश्वसनीयता, जनविश्वास और शासन संचार।",

    why_k:"RAAYA ही क्यों", why_h:"जनविश्वास चाहने वाले नेताओं के लिए रणनीति।",
    why1:"<b>भारतीय ज़मीनी हकीकत के लिए निर्मित।</b> बूथ, वार्ड, पंचायत और समुदाय की समझ — आयातित नुस्खे नहीं।",
    why2:"<b>डेटा-आधारित, अनुमान नहीं।</b> हर निर्णय के पीछे द्विभाषी भावना-सूचना और ज़िलावार निदान।",
    why3:"<b>क्रियान्वयन अनुशासन।</b> दैनिक रिपोर्टिंग, वॉर-रूम तीव्र प्रतिक्रिया और जवाबदेह क्षेत्र टीमें।",
    why4:"<b>नैतिक व वैध, मूल रूप से।</b> तथ्य-आधारित, चुनाव आयोग अनुरूप, गोपनीयता-सुरक्षित — कभी फ़र्ज़ी खबर नहीं।",
    why_panel_h:"शोर से पहले बुद्धिमत्ता।",
    why_panel_p:"RAAYA उन नेताओं के लिए है जो गंभीर रणनीति चाहते हैं, बेतरतीब प्रचार नहीं। हम जनभावना को संगठित, विजयी जनादेश में बदलते हैं।",
    why_principle:"प्रचार से पहले रणनीति। शक्ति से पहले जनता। विश्वास से जनादेश।",

    conf_k:"हमारा वादा", conf_h:"मूल रूप से गोपनीय।",
    conf_p:"सभी रणनीतिक चर्चाएँ, क्षेत्र डेटा, अभियान योजनाएँ, मतदाता शोध और आंतरिक आकलन कड़ी गोपनीयता से संभाले जाते हैं। RAAYA लिखित अनुमति के बिना किसी तीसरे पक्ष को ग्राहक जानकारी या आंतरिक रणनीति साझा नहीं करता।",

    cta_k:"आइए बात करें", cta_h:"जनादेश बनाएँ। विश्वास बनाएँ। नेतृत्व बनाएँ।",
    cta_p:"गोपनीय रणनीति परामर्श बुक करें। हम आपके क्षेत्र, आपकी चुनौती और RAAYA आपकी जीत की संभावना कैसे बढ़ा सकता है, पर चर्चा करेंगे।",

    foot_about:"एक प्रीमियम राजनीतिक रणनीति प्रबंधन फर्म — मतदाता सूचना, कथानक, डिजिटल प्रभाव और ज़मीनी क्रियान्वयन।",
    foot_services_h:"सेवाएँ", foot_firm_h:"फर्म", foot_consult_h:"गोपनीय परामर्श",
    foot_link_why:"RAAYA ही क्यों", foot_link_method:"हमारी पद्धति", foot_link_approach:"कार्यप्रणाली", foot_link_contact:"संपर्क",
    foot_disc:"गैर-पक्षपाती रणनीति फर्म। सभी कार्य तथ्य-आधारित, गोपनीय और चुनाव आयोग अनुरूप हैं। RAAYA चुनावी परिणाम की गारंटी नहीं देता।",
    foot_rights:"© 2026 RAAYA — राजनीतिक रणनीति प्रबंधन। सर्वाधिकार सुरक्षित।",
    foot_tag:"जनता। धारणा। शक्ति।",

    sv_hero_h:"भारतीय ज़मीनी हकीकत के लिए बनी सेवाएँ।",
    sv_hero_p:"ज़मीन सुनने से कथानक और अनुशासित क्रियान्वयन तक — छह मुख्य क्षमताएँ और प्रमुख इंटेलिजेंस सेवाएँ जिन्हें बहुत कम ने अमल में लाया है।",
    sd_li:"शामिल है:",
    sd1_li:"<li>बूथ व वार्ड-स्तरीय मतदाता सर्वे</li><li>स्थानीय मुद्दा व शिकायत मानचित्रण</li><li>समुदाय प्रभाव ग्रिड</li><li>क्षेत्र निदान रिपोर्ट</li>",
    sd2_li:"<li>प्रत्याशी छवि व धारणा ऑडिट</li><li>नेतृत्व स्थिति-निर्धारण</li><li>व्यक्तिगत कथानक व भाषण</li><li>जनविश्वास रणनीति</li>",
    sd3_li:"<li>बूथ व शक्ति केंद्र ढाँचा</li><li>स्वयंसेवक प्रशिक्षण व कार्य आवंटन</li><li>दैनिक रिपोर्टिंग व समीक्षा</li><li>रैली व पदयात्रा नियोजन</li>",
    sd4_li:"<li>कन्नड़-प्रथम सामग्री कैलेंडर</li><li>व्हाट्सएप कार्यकर्ता श्रृंखला</li><li>लघु वीडियो व रील्स</li><li>डिजिटल प्रतिष्ठा प्रबंधन</li>",
    sd5_li:"<li>मीडिया व भावना निगरानी</li><li>तीव्र, तथ्य-आधारित प्रतिक्रिया</li><li>विपक्ष कथानक ट्रैकिंग</li><li>संकट संचार</li>",
    sd6_li:"<li>उपलब्धि व विकास संचार</li><li>जनसेवा संदेश</li><li>शासन स्कोरकार्ड</li><li>दीर्घकालिक प्रतिष्ठा निर्माण</li>",
    fl_k:"प्रमुख इंटेलिजेंस", fl_h:"ऐसे विचार जिन्हें अधिकांश फर्में अमल में नहीं लाईं।",
    fl_p:"व्यवहार्य, नैतिक और IP-आधारित सेवाएँ जो सुनने को दृश्य कार्रवाई में बदलती हैं।",
    fl1_h:"कॉन्स्टिट्यूएंसी डिजिटल ट्विन", fl1_p:"क्षेत्र का जीवंत डेटा मॉडल — ज़मीन पर खर्च से पहले परिदृश्यों का अभ्यास।",
    fl2_h:"शिकायत-समाधान सेल", fl2_p:"क्षेत्र सेल जो छोटी स्थानीय समस्याएँ सुलझाकर दर्ज करते हैं — शिकायत को विश्वास में बदलते हुए।",
    fl3_h:"सेंटिमेंट-टू-एक्शन लूप", fl3_p:"दैनिक ज़िला भावना से कार्य-सूची बनती है; अगला दिन प्रभाव मापता है।",
    fl4_h:"नैरेटिव वॉर-गेमिंग", fl4_p:"विपक्ष के संभावित हमलों का अनुकरण और तथ्य-आधारित उत्तर पहले से तैयार।",
    fl5_h:"प्रवासी व डायस्पोरा मतदाता", fl5_p:"शहरों व विदेश में कार्यरत मतदाताओं से जुड़कर गृह क्षेत्र की राय प्रभावित करना।",

    ap_hero_h:"अनुशासित पद्धति, अनुमान नहीं।",
    ap_hero_p:"RAAYA का हर कार्य R.A.A.Y.A. पद्धति पर चलता है — ज़मीनी शोध से स्थायी जन-अधिकार तक एक दोहराने योग्य चक्र।",
    ap1_h:"रिसर्च (शोध)", ap1_p:"हम क्षेत्र से शुरू करते हैं: लोग, मुद्दे, भावनाएँ, समुदाय, स्थानीय नेतृत्व और जनभावना — बूथ स्तर तक।",
    ap2_h:"एनालिसिस (विश्लेषण)", ap2_p:"हम मतदाता वर्ग, विपक्ष की ताकत, स्थानीय शक्ति-ढाँचे, भावनात्मक कारक और जोखिम मापते हैं कि लड़ाई वास्तव में कहाँ जीती जाती है।",
    ap3_h:"आर्किटेक्चर (रचना)", ap3_p:"हम अभियान रचना बनाते हैं: संदेश, टीम, बूथ योजना, डिजिटल योजना, नेता स्थिति और दिन-प्रतिदिन का कैलेंडर।",
    ap4_h:"यील्ड (फल)", ap4_p:"हम रणनीति को कार्रवाई में बदलते हैं — जनसंपर्क, कार्यक्रम, डिजिटल प्रभाव, स्वयंसेवक कार्य और सुधारात्मक दैनिक निगरानी।",
    ap5_h:"अथॉरिटी (अधिकार)", ap5_p:"हम टिकाऊ विश्वसनीयता, जनविश्वास, जनादेश-शक्ति और चुनाव के बाद भी चलने वाला शासन संचार बनाते हैं।",
    ap_out_k:"हम कैसे रिपोर्ट देते हैं", ap_out_h:"स्पष्ट, उपयोगी, क्षेत्र-तैयार आउटपुट।",
    ap_out_p:"हर कार्य ऐसे दस्तावेज़ देता है जिन पर आपकी टीम तुरंत अमल कर सके।",
    ap_out1_h:"रणनीति दस्तावेज़", ap_out1_p:"कार्यकारी सार, वर्तमान स्थिति, निष्कर्ष, रणनीति, क्रियान्वयन योजना, समयरेखा, जोखिम और मापदंड।",
    ap_out2_h:"क्षेत्र प्रारूप", ap_out2_p:"सर्वे टेम्पलेट, बूथ ट्रैकर, दैनिक रिपोर्टिंग प्रारूप और स्वयंसेवक कार्य-पत्रक।",
    ap_out3_h:"लाइव डैशबोर्ड", ap_out3_p:"ज़िलावार भावना, वॉर-रूम निगरानी और तीव्र-प्रतिक्रिया लॉग, प्रतिदिन अद्यतन।",

    ab_hero_h:"आधुनिक भारतीय राजनीति के लिए निर्मित।",
    ab_hero_p:"RAAYA एक प्रीमियम राजनीतिक रणनीति प्रबंधन फर्म है — उन नेताओं के लिए जो गंभीर रणनीति चाहते हैं, बेतरतीब प्रचार नहीं।",
    ab_long_h:"हम कौन हैं",
    ab_long_p1:"RAAYA आधुनिक भारतीय राजनीति के लिए बना है, जहाँ जीत के लिए लोकप्रियता से अधिक चाहिए — शोध, संगठन, समय, संचार और अनुशासित क्रियान्वयन।",
    ab_long_p2:"हम क्षेत्र से शुरू करते हैं — लोग, मुद्दे, भावनाएँ, समुदाय, स्थानीय नेतृत्व और जनभावना। वहाँ से हम प्रत्याशी स्थिति, मतदाता संपर्क, बूथ नियोजन, कथानक, डिजिटल प्रभाव, मीडिया प्रतिक्रिया और दैनिक निगरानी की पूर्ण रणनीति बनाते हैं।",
    ab_princ_h:"हम किसके लिए खड़े हैं",
    ab_conf_note:"सभी रणनीति कड़ी गोपनीयता और चुनाव आयोग अनुरूपता के साथ संभाली जाती है।",

    ct_hero_h:"गोपनीय रणनीति कॉल बुक करें।",
    ct_hero_p:"अपने क्षेत्र और चुनौती के बारे में बताएँ। हम परामर्श तय करने के लिए निजी रूप से उत्तर देंगे।",
    f_name:"पूरा नाम", f_role:"आप हैं…", f_constituency:"क्षेत्र / निर्वाचन क्षेत्र", f_email:"ईमेल", f_phone:"फ़ोन", f_service:"रुचि की सेवा", f_message:"आपका संदेश", f_submit:"गोपनीय पूछताछ भेजें",
    f_role_cand:"प्रत्याशी", f_role_party:"पार्टी / संगठन", f_role_leader:"जन नेता", f_role_other:"अन्य",
    ct_card_h:"क्या अपेक्षा करें",
    ct_expect:"<div class='row'>1 · निजी, बिना-बाध्यता परामर्श</div><div class='row'>2 · आपकी क्षेत्र चुनौती का त्वरित आकलन</div><div class='row'>3 · अनुकूलित दायरा व अगली-कदम योजना</div>",
    ct_email_label:"हमें ईमेल करें",
    ct_conf:"आप जो साझा करते हैं वह कड़ाई से गोपनीय रखा जाता है।",
    ct_note:"यह फॉर्म आपके ईमेल ऐप को पहले-से भरे विवरण के साथ खोलता है — इस साइट पर कोई डेटा संग्रहीत नहीं होता।"
  },

  kn: {
    brand_sub:"ರಾಜಕೀಯ ಕಾರ್ಯತಂತ್ರ",
    nav_home:"ಮುಖ್ಯ", nav_services:"ಸೇವೆಗಳು", nav_approach:"ಕಾರ್ಯವಿಧಾನ", nav_about:"ನಮ್ಮ ಬಗ್ಗೆ", nav_contact:"ಸಂಪರ್ಕ",
    cta_book:"ಕಾರ್ಯತಂತ್ರ ಕರೆ ಕಾಯ್ದಿರಿಸಿ", cta_book_long:"ಗೌಪ್ಯ ಕಾರ್ಯತಂತ್ರ ಕರೆ ಕಾಯ್ದಿರಿಸಿ", cta_explore:"ಪ್ರಚಾರ ಸೇವೆಗಳನ್ನು ನೋಡಿ",

    hero_chip:"ಜನ · ಗ್ರಹಿಕೆ · ಶಕ್ತಿ",
    hero_title:"ಗೆಲುವಿನ <span class='gold'>ಜನಾದೇಶ</span>ಕ್ಕಾಗಿ ರಾಜಕೀಯ ಕಾರ್ಯತಂತ್ರ.",
    hero_sub:"RAAYA - ನಾಯಕರು, ಅಭ್ಯರ್ಥಿಗಳು ಮತ್ತು ರಾಜಕೀಯ ಸಂಘಟನೆಗಳಿಗೆ ಮತದಾರರನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ನಿರೂಪಿಸಲು, ಸಾರ್ವಜನಿಕ ವಿಶ್ವಾಸ ಕಟ್ಟಲು ಮತ್ತು ಶಿಸ್ತುಬದ್ಧ ಪ್ರಚಾರ ನಡೆಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ — ಅಂಕಿಅಂಶ, ತಳಸ್ಪರ್ಶಿ ಮಾಹಿತಿ, ಡಿಜಿಟಲ್ ಪ್ರಭಾವ ಮತ್ತು ಮತಗಟ್ಟೆ-ಮಟ್ಟದ ಕಾರ್ಯತಂತ್ರದ ಮೂಲಕ.",

    stat1_n:"31", stat1_l:"ಕರ್ನಾಟಕದ ಮ್ಯಾಪ್ ಮಾಡಿದ ಜಿಲ್ಲೆಗಳು",
    stat2_n:"360°", stat2_l:"ಅಂಕಿಅಂಶ · ನಿರೂಪಣೆ · ಡಿಜಿಟಲ್ · ತಳಸ್ಪರ್ಶಿ",
    stat3_n:"24×7", stat3_l:"ವಾರ್-ರೂಮ್ ನಿಗಾ",
    stat4_n:"100%", stat4_l:"ಗೌಪ್ಯ ಮತ್ತು ಚು.ಆ. ಅನುಸರಣೆ",

    prob_k:"ರಾಜಕೀಯದ ಹೊಸ ವಾಸ್ತವ",
    prob_h:"ರಾಜಕೀಯ ಇನ್ನು ಗದ್ದಲದಿಂದ ಗೆಲ್ಲುವುದಿಲ್ಲ.",
    prob_p:"ಇದು ಬುದ್ಧಿಮತ್ತೆ, ಸಂಘಟನೆ, ವಿಶ್ವಾಸ ಮತ್ತು ಸಮಯದಿಂದ ಗೆಲ್ಲುತ್ತದೆ. ಜನಪ್ರಿಯತೆ ಸಾಕಾಗದು — ಗೆಲುವಿಗೆ ಸಂಶೋಧನೆ, ಶಿಸ್ತುಬದ್ಧ ಅನುಷ್ಠಾನ ಮತ್ತು ಜನರಿರುವಲ್ಲಿ ತಲುಪುವ ನಿರೂಪಣೆ ಬೇಕು.",
    prob1_h:"ತಳಸ್ಪರ್ಶಿ ವಾಸ್ತವ ಚದುರಿದೆ", prob1_p:"ಪ್ರತಿ ಮತಗಟ್ಟೆ, ವಾರ್ಡ್ ಮತ್ತು ಸಮುದಾಯ ಬೇರೆ ಬೇರೆ. ಸೂಕ್ಷ್ಮ ಮಾಹಿತಿ ಇಲ್ಲದೆ ಪ್ರಚಾರಗಳು ತಪ್ಪು ಸ್ಥಳದಲ್ಲಿ ಶಕ್ತಿ ವ್ಯಯಿಸುತ್ತವೆ.",
    prob2_h:"ನಿರೂಪಣೆ ತಂಡಗಳಿಗಿಂತ ವೇಗ", prob2_p:"ಉತ್ತರಿಸದ ದಾಳಿ ದಿನಗಟ್ಟಲೆ ಕಾರ್ಯಸೂಚಿ ನಿರ್ಧರಿಸುತ್ತದೆ. ಬಹುತೇಕ ಪ್ರಚಾರಗಳು ತಡವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸಿ ಹಿಡಿತ ಕಳೆದುಕೊಳ್ಳುತ್ತವೆ.",
    prob3_h:"ಸಂಘಟನೆ ಮತದಾನ ನಿರ್ಧರಿಸುತ್ತದೆ", prob3_p:"ಕಾರ್ಯಶೀಲ ಮತಗಟ್ಟೆ ರಚನೆ ಇಲ್ಲದೆ ಉತ್ಸಾಹ ಮತದಾನದ ದಿನ ಮತವಾಗಿ ಪರಿವರ್ತನೆಯಾಗದು.",
    prob4_h:"ವಿಶ್ವಾಸವೇ ನಿಜವಾದ ಬಂಡವಾಳ", prob4_p:"ಕೇಳಿ ಸಾಧಿಸುವ ನಾಯಕರಿಗೆ ಮತದಾರರು ಪ್ರತಿಫಲ ನೀಡುತ್ತಾರೆ. ಗೋಚರ, ವಿಶ್ವಾಸಾರ್ಹ ನಂಬಿಕೆ ಕಟ್ಟುವುದು ಒಂದು ಶಿಸ್ತು — ಆಕಸ್ಮಿಕವಲ್ಲ.",

    svc_k:"ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ",
    svc_h:"ಮತದಾರ ಮಾಹಿತಿ ಮತ್ತು ಪ್ರಚಾರ ಅನುಷ್ಠಾನದ ಸಂಗಮ.",
    svc_p:"ತಳಸ್ಪರ್ಶಿಯಾಗಿ ಆಲಿಸುವುದರಿಂದ ಗೆಲುವಿನ ಜನಾದೇಶ ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ವಿಶ್ವಾಸದವರೆಗೆ ಪ್ರಚಾರವನ್ನು ಕೊಂಡೊಯ್ಯುವ ಆರು ಸಂಯೋಜಿತ ಸಾಮರ್ಥ್ಯಗಳು.",
    svc1_h:"RAAYA ನೆಲನಾಡಿಮಿಡಿತ", svc1_p:"ಮತದಾರ ಸಂಶೋಧನೆ, ಸ್ಥಳೀಯ ಸಮಸ್ಯೆ ಅನ್ವೇಷಣೆ, ಜನಭಾವನೆ, ಮತಗಟ್ಟೆ-ಮಟ್ಟದ ಮಾಹಿತಿ ಮತ್ತು ಕ್ಷೇತ್ರ ಸಮಸ್ಯೆನಿರ್ಣಯ.",
    svc2_h:"ಅಭ್ಯರ್ಥಿಯ ನೀಲನಕ್ಷೆ", svc2_p:"ಅಭ್ಯರ್ಥಿ ಚಿತ್ರಣ ವಿಶ್ಲೇಷಣೆ, ನಾಯಕತ್ವ ಸ್ಥಾನೀಕರಣ, ವೈಯಕ್ತಿಕ ನಿರೂಪಣೆ ಮತ್ತು ವಿಶ್ವಾಸ ಕಾರ್ಯತಂತ್ರ.",
    svc3_h:"ಪ್ರಚಾರ ಆಜ್ಞೆ", svc3_p:"ಪೂರ್ಣ ಪ್ರಚಾರ ಯೋಜನೆ, ಕ್ಷೇತ್ರ ಅನುಷ್ಠಾನ, ತಂಡ ರಚನೆ, ದೈನಂದಿನ ನಿಗಾ ಮತ್ತು ಮತಗಟ್ಟೆ-ಮಟ್ಟದ ಸಮನ್ವಯ.",
    svc4_h:"ಡಿಜಿಟಲ್ ಸಮ್ಮತಿ", svc4_p:"ಸಾಮಾಜಿಕ ಕಾರ್ಯತಂತ್ರ, ವಾಟ್ಸಾಪ್ ಪ್ರಚಾರ, ಕಿರು ವೀಡಿಯೊ, ಡಿಜಿಟಲ್ ಪ್ರತಿಷ್ಠೆ ಮತ್ತು ಪ್ರಾದೇಶಿಕ-ಭಾಷಾ ವಿಷಯ.",
    svc5_h:"RAAYA ವಾರ್ ರೂಮ್", svc5_p:"ದೈನಂದಿನ ಟ್ರ್ಯಾಕಿಂಗ್, ವಿರೋಧ ನಿಗಾ, ಸಮಸ್ಯೆ-ಪ್ರತಿಕ್ರಿಯೆ, ಬಿಕ್ಕಟ್ಟು ನಿರ್ವಹಣೆ ಮತ್ತು ತ್ವರಿತ ಕಾರ್ಯತಂತ್ರ ತಿದ್ದುಪಡಿ.",
    svc6_h:"ಆಡಳಿತ ಸಂಪರ್ಕ", svc6_p:"ಚುನಾವಣೆ ನಂತರದ ಅಭಿವೃದ್ಧಿ ಸಂವಹನ, ಸಾಧನೆ ಛಾಪು ಮತ್ತು ದೀರ್ಘಕಾಲೀನ ಪ್ರತಿಷ್ಠೆ ನಿರ್ಮಾಣ.",

    fw_k:"ನಮ್ಮ ವಿಧಾನ", fw_h:"R.A.A.Y.A. ವಿಧಾನ.",
    fw_p:"ತಳಸ್ಪರ್ಶಿ ಆಲಿಕೆಯಿಂದ ಕಾರ್ಯತಂತ್ರ ರೂಪಿಸಿ, ಅದನ್ನು ದೈನಂದಿನ ಅನುಷ್ಠಾನ ಮತ್ತು ಶಾಶ್ವತ ಅಧಿಕಾರವಾಗಿ ಪರಿವರ್ತಿಸುವ ಶಿಸ್ತುಬದ್ಧ ಚಕ್ರ.",
    fw1_h:"ಸಂಶೋಧನೆ", fw1_p:"ಕ್ಷೇತ್ರ, ಜನ, ಸಮಸ್ಯೆ, ಸಮುದಾಯ ಮತ್ತು ಮತದಾರ ಮನೋಭಾವ.",
    fw2_h:"ವಿಶ್ಲೇಷಣೆ", fw2_p:"ಮತದಾರ ವರ್ಗ, ವಿರೋಧಿ ಶಕ್ತಿ ಮತ್ತು ಭಾವನಾ ಚಾಲಕಗಳು.",
    fw3_h:"ರಚನೆ", fw3_p:"ಸಂದೇಶ, ತಂಡ, ಮತಗಟ್ಟೆ ಯೋಜನೆ, ಡಿಜಿಟಲ್ ಯೋಜನೆ ಮತ್ತು ಕ್ಯಾಲೆಂಡರ್.",
    fw4_h:"ಫಲ", fw4_p:"ಸಂಪರ್ಕ, ಜಾಥಾಗಳು, ಡಿಜಿಟಲ್ ಪ್ರಭಾವ ಮತ್ತು ದೈನಂದಿನ ನಿಗಾ.",
    fw5_h:"ಅಧಿಕಾರ", fw5_p:"ವಿಶ್ವಾಸಾರ್ಹತೆ, ಸಾರ್ವಜನಿಕ ವಿಶ್ವಾಸ ಮತ್ತು ಆಡಳಿತ ಸಂವಹನ.",

    why_k:"RAAYA ಏಕೆ", why_h:"ಸಾರ್ವಜನಿಕ ವಿಶ್ವಾಸ ಬಯಸುವ ನಾಯಕರಿಗೆ ಕಾರ್ಯತಂತ್ರ.",
    why1:"<b>ಭಾರತೀಯ ತಳಸ್ಪರ್ಶಿ ವಾಸ್ತವಕ್ಕೆ ನಿರ್ಮಿತ.</b> ಮತಗಟ್ಟೆ, ವಾರ್ಡ್, ಪಂಚಾಯತ್ ಮತ್ತು ಸಮುದಾಯ ಪರಿಚಯ — ಆಮದು ಮಾಡಿದ ತಂತ್ರವಲ್ಲ.",
    why2:"<b>ಅಂಕಿಅಂಶ-ಆಧಾರಿತ, ಊಹೆಯಲ್ಲ.</b> ಪ್ರತಿ ನಿರ್ಧಾರದ ಹಿಂದೆ ದ್ವಿಭಾಷಾ ಭಾವನಾ ಮಾಹಿತಿ ಮತ್ತು ಜಿಲ್ಲಾವಾರು ಸಮಸ್ಯೆನಿರ್ಣಯ.",
    why3:"<b>ಅನುಷ್ಠಾನ ಶಿಸ್ತು.</b> ದೈನಂದಿನ ವರದಿ, ವಾರ್-ರೂಮ್ ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ಹೊಣೆಗಾರ ಕ್ಷೇತ್ರ ತಂಡಗಳು.",
    why4:"<b>ನೈತಿಕ ಮತ್ತು ಕಾನೂನುಬದ್ಧ.</b> ವಾಸ್ತವ-ಆಧಾರಿತ, ಚು.ಆ. ಅನುಸರಣೆ, ಗೌಪ್ಯ-ಸಂರಕ್ಷಿತ — ಎಂದಿಗೂ ಸುಳ್ಳು ಸುದ್ದಿ ಇಲ್ಲ.",
    why_panel_h:"ಗದ್ದಲಕ್ಕಿಂತ ಮೊದಲು ಬುದ್ಧಿಮತ್ತೆ.",
    why_panel_p:"RAAYA ಗಂಭೀರ ಕಾರ್ಯತಂತ್ರ ಬಯಸುವ ನಾಯಕರಿಗಾಗಿ, ಯಾದೃಚ್ಛಿಕ ಪ್ರಚಾರಕ್ಕಲ್ಲ. ನಾವು ಜನಭಾವನೆಯನ್ನು ಸಂಘಟಿತ, ಗೆಲುವಿನ ಜನಾದೇಶವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತೇವೆ.",
    why_principle:"ಪ್ರಚಾರಕ್ಕಿಂತ ಮೊದಲು ತಂತ್ರ. ಅಧಿಕಾರಕ್ಕಿಂತ ಮೊದಲು ಜನ. ವಿಶ್ವಾಸದ ಮೂಲಕ ಜನಾದೇಶ.",

    conf_k:"ನಮ್ಮ ಭರವಸೆ", conf_h:"ಸ್ವಾಭಾವಿಕವಾಗಿ ಗೌಪ್ಯ.",
    conf_p:"ಎಲ್ಲಾ ಕಾರ್ಯತಂತ್ರ ಚರ್ಚೆಗಳು, ಕ್ಷೇತ್ರ ಅಂಕಿಅಂಶ, ಪ್ರಚಾರ ಯೋಜನೆಗಳು, ಮತದಾರ ಸಂಶೋಧನೆ ಮತ್ತು ಆಂತರಿಕ ಮೌಲ್ಯಮಾಪನಗಳನ್ನು ಕಟ್ಟುನಿಟ್ಟಿನ ಗೌಪ್ಯತೆಯಿಂದ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ. ಲಿಖಿತ ಅನುಮತಿ ಇಲ್ಲದೆ RAAYA ಯಾವುದೇ ಮೂರನೇ ವ್ಯಕ್ತಿಗೆ ಮಾಹಿತಿ ಬಹಿರಂಗಪಡಿಸುವುದಿಲ್ಲ.",

    cta_k:"ಮಾತನಾಡೋಣ", cta_h:"ಜನಾದೇಶ ಕಟ್ಟಿ. ವಿಶ್ವಾಸ ಕಟ್ಟಿ. ನಾಯಕತ್ವ ಕಟ್ಟಿ.",
    cta_p:"ಗೌಪ್ಯ ಕಾರ್ಯತಂತ್ರ ಸಮಾಲೋಚನೆ ಕಾಯ್ದಿರಿಸಿ. ನಿಮ್ಮ ಕ್ಷೇತ್ರ, ನಿಮ್ಮ ಸವಾಲು ಮತ್ತು RAAYA ನಿಮ್ಮ ಗೆಲುವಿನ ಸಾಧ್ಯತೆ ಹೇಗೆ ಬಲಪಡಿಸಬಹುದು ಎಂಬುದನ್ನು ಚರ್ಚಿಸೋಣ.",

    foot_about:"ಪ್ರತಿಷ್ಠಿತ ರಾಜಕೀಯ ಕಾರ್ಯತಂತ್ರ ನಿರ್ವಹಣಾ ಸಂಸ್ಥೆ — ಮತದಾರ ಮಾಹಿತಿ, ನಿರೂಪಣೆ, ಡಿಜಿಟಲ್ ಪ್ರಭಾವ ಮತ್ತು ತಳಸ್ಪರ್ಶಿ ಅನುಷ್ಠಾನ.",
    foot_services_h:"ಸೇವೆಗಳು", foot_firm_h:"ಸಂಸ್ಥೆ", foot_consult_h:"ಗೌಪ್ಯ ಸಮಾಲೋಚನೆ",
    foot_link_why:"RAAYA ಏಕೆ", foot_link_method:"ನಮ್ಮ ವಿಧಾನ", foot_link_approach:"ಕಾರ್ಯವಿಧಾನ", foot_link_contact:"ಸಂಪರ್ಕ",
    foot_disc:"ಪಕ್ಷಾತೀತ ಕಾರ್ಯತಂತ್ರ ಸಂಸ್ಥೆ. ಎಲ್ಲಾ ಕೆಲಸ ವಾಸ್ತವ-ಆಧಾರಿತ, ಗೌಪ್ಯ ಮತ್ತು ಚುನಾವಣಾ ಆಯೋಗದ ನಿಯಮಗಳಿಗೆ ಅನುಗುಣ. RAAYA ಚುನಾವಣಾ ಫಲಿತಾಂಶದ ಖಾತರಿ ನೀಡುವುದಿಲ್ಲ.",
    foot_rights:"© 2026 RAAYA — ರಾಜಕೀಯ ಕಾರ್ಯತಂತ್ರ ನಿರ್ವಹಣೆ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    foot_tag:"ಜನ. ಗ್ರಹಿಕೆ. ಶಕ್ತಿ.",

    sv_hero_h:"ಭಾರತೀಯ ತಳಸ್ಪರ್ಶಿ ವಾಸ್ತವಕ್ಕೆ ನಿರ್ಮಿತ ಸೇವೆಗಳು.",
    sv_hero_p:"ತಳಸ್ಪರ್ಶಿ ಆಲಿಕೆಯಿಂದ ನಿರೂಪಣೆ ಮತ್ತು ಶಿಸ್ತುಬದ್ಧ ಅನುಷ್ಠಾನದವರೆಗೆ — ಆರು ಪ್ರಮುಖ ಸಾಮರ್ಥ್ಯಗಳು ಮತ್ತು ಕೆಲವರೇ ಅನುಷ್ಠಾನಗೊಳಿಸಿದ ಪ್ರಮುಖ ಮಾಹಿತಿ ಸೇವೆಗಳು.",
    sd_li:"ಒಳಗೊಂಡಿದೆ:",
    sd1_li:"<li>ಮತಗಟ್ಟೆ ಮತ್ತು ವಾರ್ಡ್-ಮಟ್ಟದ ಮತದಾರ ಸಮೀಕ್ಷೆ</li><li>ಸ್ಥಳೀಯ ಸಮಸ್ಯೆ ಮತ್ತು ಕುಂದುಕೊರತೆ ಸಮೀಕರಣ</li><li>ಸಮುದಾಯ ಪ್ರಭಾವ ಗ್ರಿಡ್</li><li>ಕ್ಷೇತ್ರ ಸಮಸ್ಯೆನಿರ್ಣಯ ವರದಿ</li>",
    sd2_li:"<li>ಅಭ್ಯರ್ಥಿ ಚಿತ್ರಣ ಮತ್ತು ಗ್ರಹಿಕೆ ಲೆಕ್ಕಪರಿಶೋಧನೆ</li><li>ನಾಯಕತ್ವ ಸ್ಥಾನೀಕರಣ</li><li>ವೈಯಕ್ತಿಕ ನಿರೂಪಣೆ ಮತ್ತು ಭಾಷಣಗಳು</li><li>ಸಾರ್ವಜನಿಕ ವಿಶ್ವಾಸ ಕಾರ್ಯತಂತ್ರ</li>",
    sd3_li:"<li>ಮತಗಟ್ಟೆ ಮತ್ತು ಶಕ್ತಿ ಕೇಂದ್ರ ರಚನೆ</li><li>ಸ್ವಯಂಸೇವಕ ತರಬೇತಿ ಮತ್ತು ಕಾರ್ಯ ಹಂಚಿಕೆ</li><li>ದೈನಂದಿನ ವರದಿ ಮತ್ತು ಪರಾಮರ್ಶೆ</li><li>ಜಾಥಾ ಮತ್ತು ಪಾದಯಾತ್ರೆ ಯೋಜನೆ</li>",
    sd4_li:"<li>ಕನ್ನಡ-ಮೊದಲ ವಿಷಯ ಕ್ಯಾಲೆಂಡರ್</li><li>ವಾಟ್ಸಾಪ್ ಕಾರ್ಯಕರ್ತ ಸರಪಳಿ</li><li>ಕಿರು ವೀಡಿಯೊ ಮತ್ತು ರೀಲ್ಸ್</li><li>ಡಿಜಿಟಲ್ ಪ್ರತಿಷ್ಠೆ ನಿರ್ವಹಣೆ</li>",
    sd5_li:"<li>ಮಾಧ್ಯಮ ಮತ್ತು ಭಾವನಾ ನಿಗಾ</li><li>ತ್ವರಿತ, ವಾಸ್ತವ-ಆಧಾರಿತ ಪ್ರತಿಕ್ರಿಯೆ</li><li>ವಿರೋಧ ನಿರೂಪಣೆ ಟ್ರ್ಯಾಕಿಂಗ್</li><li>ಬಿಕ್ಕಟ್ಟು ಸಂವಹನ</li>",
    sd6_li:"<li>ಸಾಧನೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಸಂವಹನ</li><li>ಜನಸೇವಾ ಸಂದೇಶ</li><li>ಆಡಳಿತ ಅಂಕಪಟ್ಟಿ</li><li>ದೀರ್ಘಕಾಲೀನ ಪ್ರತಿಷ್ಠೆ ನಿರ್ಮಾಣ</li>",
    fl_k:"ಪ್ರಮುಖ ಬುದ್ಧಿಮತ್ತೆ", fl_h:"ಬಹುತೇಕ ಸಂಸ್ಥೆಗಳು ಅನುಷ್ಠಾನಗೊಳಿಸದ ಕಲ್ಪನೆಗಳು.",
    fl_p:"ಆಲಿಸುವಿಕೆಯನ್ನು ಗೋಚರ ಕ್ರಿಯೆಯಾಗಿ ಪರಿವರ್ತಿಸುವ ಕಾರ್ಯಸಾಧ್ಯ, ನೈತಿಕ ಮತ್ತು ಮೌಲ್ಯಾಧಾರಿತ ಸೇವೆಗಳು.",
    fl1_h:"ಕ್ಷೇತ್ರ ಡಿಜಿಟಲ್ ದ್ವಂದ್ವ", fl1_p:"ತಳಸ್ಪರ್ಶಿಗಾಗಿ ಖರ್ಚು ಮಾಡುವ ಮೊದಲು ಸನ್ನಿವೇಶಗಳನ್ನು ಅಭ್ಯಾಸಿಸಲು ಕ್ಷೇತ್ರದ ಜೀವಂತ ಅಂಕಿಅಂಶ ಮಾದರಿ.",
    fl2_h:"ಕುಂದುಕೊರತೆ-ಪರಿಹಾರ ಘಟಕ", fl2_p:"ಸಣ್ಣ ಸ್ಥಳೀಯ ಸಮಸ್ಯೆಗಳನ್ನು ನಿಜವಾಗಿ ಸರಿಪಡಿಸಿ ದಾಖಲಿಸುವ ಕ್ಷೇತ್ರ ಘಟಕಗಳು — ದೂರುಗಳನ್ನು ವಿಶ್ವಾಸವಾಗಿ ಪರಿವರ್ತಿಸುತ್ತವೆ.",
    fl3_h:"ಭಾವ ಕ್ರಿಯಾ ಕುಣಿಕೆ", fl3_p:"ದೈನಂದಿನ ಜಿಲ್ಲಾ ಭಾವನೆಯಿಂದ ಕ್ಷೇತ್ರ-ಕ್ರಿಯಾ ಪಟ್ಟಿ; ಮರುದಿನ ಪರಿಣಾಮ ಅಳೆಯುತ್ತದೆ.",
    fl4_h:"ನಿರೂಪಣಾ ರಣನೀತಿ", fl4_p:"ವಿರೋಧದ ಸಂಭಾವ್ಯ ದಾಳಿಗಳನ್ನು ಅನುಕರಿಸಿ ವಾಸ್ತವ-ಆಧಾರಿತ ಪ್ರತ್ಯುತ್ತರ ಮೊದಲೇ ಸಿದ್ಧಪಡಿಸಿ.",
    fl5_h:"ವಲಸೆ ಮತ್ತು ಚದುರಿಹೋದ ಮತದಾರರು", fl5_p:"ನಗರ ಮತ್ತು ವಿದೇಶದಲ್ಲಿ ದುಡಿಯುವ ಮತದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ ತವರು ಕ್ಷೇತ್ರದ ಅಭಿಪ್ರಾಯ ಪ್ರಭಾವಿಸಿ.",

    ap_hero_h:"ಶಿಸ್ತುಬದ್ಧ ವಿಧಾನ, ಊಹೆಯಲ್ಲ.",
    ap_hero_p:"RAAYA ದ ಪ್ರತಿ ಕೆಲಸ R.A.A.Y.A. ವಿಧಾನದ ಮೇಲೆ ನಡೆಯುತ್ತದೆ — ತಳಸ್ಪರ್ಶಿ ಸಂಶೋಧನೆಯಿಂದ ಶಾಶ್ವತ ಸಾರ್ವಜನಿಕ ಅಧಿಕಾರದವರೆಗಿನ ಪುನರಾವರ್ತನೀಯ ಚಕ್ರ.",
    ap1_h:"ಸಂಶೋಧನೆ", ap1_p:"ನಾವು ಕ್ಷೇತ್ರದಿಂದ ಆರಂಭಿಸುತ್ತೇವೆ: ಜನ, ಸಮಸ್ಯೆ, ಭಾವನೆ, ಸಮುದಾಯ, ಸ್ಥಳೀಯ ನಾಯಕತ್ವ ಮತ್ತು ಜನಭಾವನೆ — ಮತಗಟ್ಟೆ ಮಟ್ಟದವರೆಗೆ.",
    ap2_h:"ವಿಶ್ಲೇಷಣೆ", ap2_p:"ಸ್ಪರ್ಧೆ ನಿಜವಾಗಿ ಎಲ್ಲಿ ಗೆಲ್ಲುತ್ತದೆ ಎಂದು ಕಂಡುಹಿಡಿಯಲು ಮತದಾರ ವರ್ಗ, ವಿರೋಧಿ ಶಕ್ತಿ, ಸ್ಥಳೀಯ ಶಕ್ತಿ-ರಚನೆ ಮತ್ತು ಅಪಾಯಗಳನ್ನು ನಕ್ಷೆ ಮಾಡುತ್ತೇವೆ.",
    ap3_h:"ರಚನೆ", ap3_p:"ನಾವು ಪ್ರಚಾರ ವ್ಯೂಹ ರಚಿಸುತ್ತೇವೆ: ಸಂದೇಶ, ತಂಡ, ಮತಗಟ್ಟೆ ಯೋಜನೆ, ಡಿಜಿಟಲ್ ಯೋಜನೆ, ನಾಯಕ ಸ್ಥಾನ ಮತ್ತು ದಿನ-ದಿನದ ಅನುಷ್ಠಾನ ಕ್ಯಾಲೆಂಡರ್.",
    ap4_h:"ಫಲ", ap4_p:"ನಾವು ಕಾರ್ಯತಂತ್ರವನ್ನು ಕ್ರಿಯೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತೇವೆ — ಸಂಪರ್ಕ, ಕಾರ್ಯಕ್ರಮ, ಡಿಜಿಟಲ್ ಪ್ರಭಾವ, ಸ್ವಯಂಸೇವಕ ಕೆಲಸ ಮತ್ತು ತಿದ್ದುಪಡಿ ಸಹಿತ ದೈನಂದಿನ ನಿಗಾ.",
    ap5_h:"ಅಧಿಕಾರ", ap5_p:"ನಾವು ಬಾಳಿಕೆ ಬರುವ ವಿಶ್ವಾಸಾರ್ಹತೆ, ಸಾರ್ವಜನಿಕ ವಿಶ್ವಾಸ, ಜನಾದೇಶ-ಶಕ್ತಿ ಮತ್ತು ಚುನಾವಣೆ ಮೀರಿ ಉಳಿಯುವ ಆಡಳಿತ ಸಂವಹನ ಕಟ್ಟುತ್ತೇವೆ.",
    ap_out_k:"ನಾವು ಹೇಗೆ ವರದಿ ನೀಡುತ್ತೇವೆ", ap_out_h:"ಸ್ಪಷ್ಟ, ಉಪಯುಕ್ತ, ಕ್ಷೇತ್ರ-ಸಿದ್ಧ ಫಲಿತಾಂಶ.",
    ap_out_p:"ಪ್ರತಿ ಕೆಲಸ ನಿಮ್ಮ ತಂಡ ತಕ್ಷಣ ಕಾರ್ಯರೂಪಗೊಳಿಸಬಹುದಾದ ದಾಖಲೆಗಳನ್ನು ನೀಡುತ್ತದೆ.",
    ap_out1_h:"ಕಾರ್ಯತಂತ್ರ ದಾಖಲೆಗಳು", ap_out1_p:"ಕಾರ್ಯನಿರ್ವಾಹಕ ಸಾರಾಂಶ, ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ, ಸಂಶೋಧನೆ, ಕಾರ್ಯತಂತ್ರ, ಅನುಷ್ಠಾನ ಯೋಜನೆ, ಕಾಲಮಿತಿ, ಅಪಾಯ ಮತ್ತು ಮಾಪಕಗಳು.",
    ap_out2_h:"ಕ್ಷೇತ್ರ ಸ್ವರೂಪಗಳು", ap_out2_p:"ಸಮೀಕ್ಷೆ ನೀಲಿನಕ್ಷೆ, ಮತಗಟ್ಟೆ ಟ್ರ್ಯಾಕರ್, ದೈನಂದಿನ ವರದಿ ಸ್ವರೂಪ ಮತ್ತು ಸ್ವಯಂಸೇವಕ ಕಾರ್ಯ-ಹಾಳೆಗಳು.",
    ap_out3_h:"ಲೈವ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", ap_out3_p:"ಜಿಲ್ಲಾವಾರು ಭಾವನೆ, ವಾರ್-ರೂಮ್ ನಿಗಾ ಮತ್ತು ತ್ವರಿತ-ಪ್ರತಿಕ್ರಿಯೆ ದಾಖಲೆ, ಪ್ರತಿದಿನ ನವೀಕರಣ.",

    ab_hero_h:"ಆಧುನಿಕ ಭಾರತೀಯ ರಾಜಕೀಯಕ್ಕೆ ನಿರ್ಮಿತ.",
    ab_hero_p:"RAAYA ಗಂಭೀರ ಕಾರ್ಯತಂತ್ರ ಬಯಸುವ ನಾಯಕರಿಗಾಗಿ — ಯಾದೃಚ್ಛಿಕ ಪ್ರಚಾರಕ್ಕಲ್ಲ — ಒಂದು ಪ್ರತಿಷ್ಠಿತ ರಾಜಕೀಯ ಕಾರ್ಯತಂತ್ರ ನಿರ್ವಹಣಾ ಸಂಸ್ಥೆ.",
    ab_long_h:"ನಾವು ಯಾರು",
    ab_long_p1:"RAAYA ಆಧುನಿಕ ಭಾರತೀಯ ರಾಜಕೀಯಕ್ಕೆ ನಿರ್ಮಿತ, ಅಲ್ಲಿ ಗೆಲುವಿಗೆ ಜನಪ್ರಿಯತೆಗಿಂತ ಹೆಚ್ಚು ಬೇಕು — ಸಂಶೋಧನೆ, ಸಂಘಟನೆ, ಸಮಯ, ಸಂವಹನ ಮತ್ತು ಶಿಸ್ತುಬದ್ಧ ಅನುಷ್ಠಾನ.",
    ab_long_p2:"ನಾವು ಕ್ಷೇತ್ರದಿಂದ ಆರಂಭಿಸುತ್ತೇವೆ — ಜನ, ಸಮಸ್ಯೆ, ಭಾವನೆ, ಸಮುದಾಯ, ಸ್ಥಳೀಯ ನಾಯಕತ್ವ ಮತ್ತು ಜನಭಾವನೆ. ಅಲ್ಲಿಂದ ಅಭ್ಯರ್ಥಿ ಸ್ಥಾನ, ಮತದಾರ ಸಂಪರ್ಕ, ಮತಗಟ್ಟೆ ಯೋಜನೆ, ನಿರೂಪಣೆ, ಡಿಜಿಟಲ್ ಪ್ರಭಾವ, ಮಾಧ್ಯಮ ಪ್ರತಿಕ್ರಿಯೆ ಮತ್ತು ದೈನಂದಿನ ನಿಗಾ ಒಳಗೊಂಡ ಪೂರ್ಣ ಕಾರ್ಯತಂತ್ರ ರೂಪಿಸುತ್ತೇವೆ.",
    ab_princ_h:"ನಾವು ಯಾವುದಕ್ಕಾಗಿ ನಿಲ್ಲುತ್ತೇವೆ",
    ab_conf_note:"ಎಲ್ಲಾ ಕಾರ್ಯತಂತ್ರವನ್ನು ಕಟ್ಟುನಿಟ್ಟಿನ ಗೌಪ್ಯತೆ ಮತ್ತು ಚುನಾವಣಾ ಆಯೋಗದ ಅನುಸರಣೆಯೊಂದಿಗೆ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ.",

    ct_hero_h:"ಗೌಪ್ಯ ಕಾರ್ಯತಂತ್ರ ಕರೆ ಕಾಯ್ದಿರಿಸಿ.",
    ct_hero_p:"ನಿಮ್ಮ ಕ್ಷೇತ್ರ ಮತ್ತು ಸವಾಲಿನ ಬಗ್ಗೆ ತಿಳಿಸಿ. ಸಮಾಲೋಚನೆ ಏರ್ಪಡಿಸಲು ನಾವು ಖಾಸಗಿಯಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೇವೆ.",
    f_name:"ಪೂರ್ಣ ಹೆಸರು", f_role:"ನೀವು…", f_constituency:"ಕ್ಷೇತ್ರ / ಪ್ರದೇಶ", f_email:"ಇಮೇಲ್", f_phone:"ದೂರವಾಣಿ", f_service:"ಆಸಕ್ತಿಯ ಸೇವೆ", f_message:"ನಿಮ್ಮ ಸಂದೇಶ", f_submit:"ಗೌಪ್ಯ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",
    f_role_cand:"ಅಭ್ಯರ್ಥಿ", f_role_party:"ಪಕ್ಷ / ಸಂಘಟನೆ", f_role_leader:"ಜನ ನಾಯಕ", f_role_other:"ಇತರೆ",
    ct_card_h:"ಏನನ್ನು ನಿರೀಕ್ಷಿಸಬಹುದು",
    ct_expect:"<div class='row'>1 · ಖಾಸಗಿ, ಬಾಧ್ಯತೆ ಇಲ್ಲದ ಸಮಾಲೋಚನೆ</div><div class='row'>2 · ನಿಮ್ಮ ಕ್ಷೇತ್ರ ಸವಾಲಿನ ತ್ವರಿತ ಅವಲೋಕನ</div><div class='row'>3 · ಸೂಕ್ತ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಮುಂದಿನ-ಹೆಜ್ಜೆ ಯೋಜನೆ</div>",
    ct_email_label:"ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ",
    ct_conf:"ನೀವು ಹಂಚಿಕೊಳ್ಳುವ ಎಲ್ಲವನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಗೌಪ್ಯವಾಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.",
    ct_note:"ಈ ಫಾರ್ಮ್ ವಿವರಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಇಮೇಲ್ ಆ್ಯಪ್ ತೆರೆಯುತ್ತದೆ — ಈ ಸೈಟ್‌ನಲ್ಲಿ ಯಾವ ಅಂಕಿಅಂಶವೂ ಸಂಗ್ರಹವಾಗುವುದಿಲ್ಲ."
  }
};

const LANG_NAMES = { en:"EN", hi:"हिंदी", kn:"ಕನ್ನಡ" };

function applyLang(lang){
  if(!I18N[lang]) lang = "en";
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(dict[k]!==undefined) el.innerHTML = dict[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k = el.getAttribute("data-i18n-ph");
    if(dict[k]!==undefined) el.setAttribute("placeholder", dict[k]);
  });
  document.querySelectorAll(".langsw button").forEach(b=>{
    b.classList.toggle("active", b.getAttribute("data-lang")===lang);
  });
  try{ localStorage.setItem("raaya_lang", lang); }catch(e){}
}

function initLang(){
  let lang = "en";
  try{ lang = localStorage.getItem("raaya_lang") || "en"; }catch(e){}
  // build the switcher
  document.querySelectorAll(".langsw").forEach(sw=>{
    sw.innerHTML = Object.keys(LANG_NAMES).map(l=>
      `<button data-lang="${l}">${LANG_NAMES[l]}</button>`).join("");
    sw.querySelectorAll("button").forEach(b=>{
      b.addEventListener("click", ()=>applyLang(b.getAttribute("data-lang")));
    });
  });
  applyLang(lang);
}

document.addEventListener("DOMContentLoaded", initLang);
