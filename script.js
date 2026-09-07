/* ============================================================
   Tarık Gülezgin — portfolio interactions
   Vanilla JS, no dependencies.
   ============================================================ */
(() => {
  'use strict';

  // marks the document as script-driven so CSS can hide-then-reveal safely
  document.documentElement.classList.add('js');

  /* ---------- config ---------- */
  const CONFIG = {
    // used by the contact form (mailto); not shown anywhere on the page
    email: 'tarikgulezgin@gmail.com',
    // the rotating titles from the old site, in the same order
    roles: [
      'Software Engineer',
      'Artificial Intelligence Engineer',
      'Mid.Python Developer',
      'Jr.Java Developer',
      'Mid.Web Developer',
      'Jr.Machine Learning Engineer',
      'Jr.Embedded Systems Developer',
      'Mid. Data Scientist / Data Engineer / Web Scraper'
    ]
  };
  /* ---------- projects: titles, images and links exactly as on the old site ----------
     c = category, used only by the filter buttons                                      */
  const PROJECTS = [
    { t: "Remote-access-trojan", c: 'security', i: 'images/rat.jpeg', u: 'https://github.com/gulezgin/Remote-access-trojan', a: "RAT" },
    { t: "Face Recognition", c: 'ai', i: 'images/frec.jpeg', u: 'https://github.com/gulezgin/facial-recognition', a: "Face recognition" },
    { t: "Freeleance Scrape", c: 'data', i: 'images/fresc.jpeg', u: 'https://github.com/gulezgin/freeleance-scraper', a: "Web Crawling" },
    { t: "Earthquake Notification Telegram Bot", c: 'tools', i: 'images/deptgbot.jpeg', u: 'https://github.com/gulezgin/earthquake-notification-telegram-bot', a: "Earthquake Notification Telegram Bot" },
    { t: "Chaotic Pendulum", c: 'data', i: 'images/chpe.jpg', u: 'https://github.com/gulezgin/Chaotic-Pendulum', a: "Chaotic Pendulum" },
    { t: "Netflix Data Analysis", c: 'data', i: 'images/netflix.png', u: 'https://github.com/gulezgin/Netflix-Data-Analysis', a: "Netflix Data Analysis" },
    { t: "Eye Fatigue Analysis Detection", c: 'ai', i: 'images/eye.jpeg', u: 'https://github.com/gulezgin/eye-fatigue-analysis-Detection', a: "Eye Fatigue Analysis Detection" },
    { t: "Tensorflow Object Detection", c: 'ai', i: 'images/tensorflowpng.png', u: 'https://github.com/gulezgin/tensorflow-objectDetection', a: "Tensorflow Object Detection" },
    { t: "Voice Chatbot GCP-OPENAI", c: 'ai', i: 'images/gptvoice.png', u: 'https://github.com/gulezgin/voice-chatbot-GCP-OPENAI', a: "Voice Chatbot GCP-OPENAI" },
    { t: "WEBSITE", c: 'web', i: 'images/websitea.png', u: 'https://www.yusufgulezgin.av.tr/', a: "WEBSITE" },
    { t: "pdfQuestion", c: 'ai', i: 'images/PDF-LangChain.jpg', u: 'https://github.com/gulezgin/pdfQuestion-langchain', a: "pdfQuestion" },
    { t: "Otto Robot", c: 'embedded', i: 'images/otto-robot.png', u: 'https://github.com/gulezgin/otto-robot', a: "otto-robot" },
    { t: "TR Super League", c: 'data', i: 'images/trsuperlig.jpg', u: 'https://github.com/gulezgin/super_league', a: "TRsuperlig" },
    { t: "Api- Spotify Transfer Soundcloud", c: 'tools', i: 'images/SSC.png', u: 'https://github.com/gulezgin/API-spotify-transfer-soundcloud-', a: "api-spotify-transfer-soundcloud" },
    { t: "Vanna AI", c: 'ai', i: 'images/vannaai.png', u: 'https://github.com/gulezgin/vannaAI', a: "vannaai" },
    { t: "Face Tracking Shoter", c: 'ai', i: 'images/facetrackingshot.png', u: 'https://github.com/gulezgin/Face-Tracking-shoter', a: "Face-Tracking-shoter" },
    { t: "WEBSITE", c: 'web', i: 'images/iyk.png', u: 'https://www.iykinsaat.com/', a: "WEBSITE" },
    { t: "Neuro Linguistic Programming", c: 'ai', i: 'images/nlp.png', u: 'https://github.com/gulezgin/-nlp-project-alfa', a: "NLP" },
    { t: "FaceAuth-Vision", c: 'ai', i: 'images/faceauth.jpg', u: 'https://github.com/gulezgin/FaceAuth-Vision---Akilli-Yuz-Tanima-ve-Kimlik-Dogrulama-Sistemi', a: "faceauth" },
    { t: "CrewAI", c: 'ai', i: 'images/crewai.png', u: 'https://github.com/gulezgin/simple-crewai-improvements', a: "crewai" },
    { t: "PDF-MASTER", c: 'web', i: 'images/pdfmaster.png', u: 'https://github.com/gulezgin/online-PDFMaster', a: "pdfmaster" },
    { t: "Sentiment Analysis", c: 'ai', i: 'images/sentimentanalysis.jpg', u: 'https://github.com/gulezgin/Sentiment-Analysis-exercise', a: "Sentiment-Analysis" },
    { t: "YouTube Downloader", c: 'tools', i: 'images/utub.png', u: 'https://github.com/gulezgin/youtube-downloader-v0.1', a: "youtube-downloader-v0.1" },
    { t: "Speech-to-Text", c: 'ai', i: 'images/stotxt.png', u: 'https://github.com/gulezgin/speech-to-text_v0.1', a: "speech-to-text_v0.1" },
    { t: "Hukuk Asistanı Themis - Proof of Concept-r", c: 'ai', i: 'images/themis.png', u: 'https://github.com/gulezgin/Hukuk-Asistan-Themis-Proof-of-Concept-', a: "Hukuk-Asistan-Themis-Proof-of-Concept-" },
    { t: "WordPool TR-EN", c: 'tools', i: 'images/eng-tr.png', u: 'https://github.com/gulezgin/WordPool-TR-EN', a: "WordPool-TR-EN" },
    { t: "WEBSITE", c: 'web', i: 'images/rentacar.png', u: 'https://puturgerentacar.com.tr/', a: "WEBSITE" }
  ];

  const CAT_LABEL = {
    ai: 'AI / ML', web: 'Web', data: 'Data',
    tools: 'Automation', security: 'Security', embedded: 'Embedded'
  };

  const FILTERS = [
    { key: 'all',      label: 'All' },
    { key: 'ai',       label: 'AI / ML' },
    { key: 'web',      label: 'Web' },
    { key: 'data',     label: 'Data' },
    { key: 'tools',    label: 'Automation' },
    { key: 'security', label: 'Security' },
    { key: 'embedded', label: 'Embedded' }
  ];

  /* ---------- helpers ---------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  let toastTimer;
  function toast(message) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('is-open');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-open'), 2600);
  }

  /* ---------- Turkish translation ----------
     Keys are the exact English strings on the page. Proper nouns (Spring, TensorFlow,
     scikit-learn, company names, project names) are deliberately left untranslated.     */
  const ROLES = {
    en: CONFIG.roles,
    tr: [
      "Yazılım Mühendisi",
      "Yapay Zeka Mühendisi",
      "Mid. Python Geliştirici",
      "Jr. Java Geliştirici",
      "Mid. Web Geliştirici",
      "Jr. Makine Öğrenmesi Mühendisi",
      "Jr. Gömülü Sistemler Geliştirici",
      "Mid. Veri Bilimci / Veri Mühendisi / Web Scraper"
    ]
  };

  // headings carry inline markup, so they are swapped as HTML
  const TR_TITLES = {
    ".hero__title": ["Hey, It's <em>Tarık Gülezgin</em>", "Merhaba, Ben <em>Tarık Gülezgin</em>"],
    "#education .section__title": ["Education", "Eğitim"],
    "#experience .section__title": ["Experience", "Deneyim"],
    "#services .section__title": ["Services", "Hizmetler"],
    "#project .section__title": ["Projects", "Projeler"],
    "#contact .section__title": ["Contact <em>Me</em>", "Bana <em>Ulaşın</em>"]
  };

  const TR = {
    // navigation and buttons
    "Home": "Ana Sayfa",
    "Education": "Eğitim",
    "Experience": "Deneyim",
    "Services": "Hizmetler",
    "Project": "Projeler",
    "Projects": "Projeler",
    "Contact": "İletişim",
    "About Me": "Hakkımda",
    "Hire": "İşe Al",
    "Download CV": "CV İndir",
    "scroll": "kaydır",
    "I'm a": "Ben bir",

    // project filters
    "All": "Tümü",
    "Data": "Veri",
    "Automation": "Otomasyon",
    "Security": "Güvenlik",
    "Embedded": "Gömülü",

    // contact form
    "Full Name": "Ad Soyad",
    "Email": "E-posta",
    "Phone Number": "Telefon Numarası",
    "Subject": "Konu",
    "Your message": "Mesajınız",
    "Send Message": "Mesaj Gönder",
    "LinkedIn": "LinkedIn",

    // footer
    "©2024 Tarık Gülezgin | Designed by Tarık Gülezgin | All rights reserved.":
      "©2024 Tarık Gülezgin | Tasarım: Tarık Gülezgin | Tüm hakları saklıdır.",

    // hero
    "I'm an engineer who enjoys solving complex problems and building innovative, value-driven products.My career began in cybersecurity, then moved into embedded systems, and in recent years I've deepened my expertise in AI engineering. This diverse background lets me approach technical problems from multiple angles. I currently work at Gopa Consulting as an IT Specialist and Project Assistant on an EU-funded project. Alongside this, I offer freelance services in web development, custom software/application development, AI solutions, data scraping, and Python-based project development. My goal is to contribute meaningfully to technology by taking part in diverse and challenging projects.":
      "Karmaşık problemleri çözmeyi, yenilikçi ve değer odaklı ürünler geliştirmeyi seven bir mühendisim. Kariyerime siber güvenlik alanında başladım, ardından gömülü sistemlere yöneldim ve son yıllarda yapay zeka mühendisliğinde derinleştim. Bu çok yönlü geçmiş, teknik problemlere farklı açılardan bakabilmemi sağlıyor. Şu anda Gopa Danışmanlık bünyesinde AB fonlu bir projede BT uzmanı ve proje asistanı olarak görev alıyorum. Bunun yanı sıra serbest çalışan olarak web geliştirme, özel yazılım/uygulama geliştirme, yapay zeka çözümleri, veri kazıma ve Python tabanlı proje geliştirme hizmetleri sunuyorum. Hedefim, çeşitli ve zorlu projelerde yer alma fırsatı yakalamak.",

    // education
    "University": "Üniversite",
    "High School": "Lise",
    "School": "Okul",
    "Through the university entrance exam, I was admitted to Fırat University — home to Turkey's first Software Engineering department — and graduated in 2025 with a GPA of 2.77. I'm proud to have studied under distinguished professors at a globally ranked faculty.":
      "Üniversite giriş sınavı sonucunda, Türkiye'nin ilk Yazılım Mühendisliği bölümünü açan Fırat Üniversitesi'ne kabul edildim ve buradan 2025 yılında 2.77 not ortalaması ile mezun oldum. Seçkin profesörlerden ders almaktan ve küresel sıralamada yer alan bir fakültededen mezun olmaktan gurur duyuyorum.",
    "As a result of the TEOG exam, I succeeded in placing within the top 5% in Turkey, which allowed me to gain admission to Cumhuriyet Anatolian High School. I particularly excelled in my quantitative subjects and graduated from high school with a GPA of 78.6%.":
      "TEOG sınavı sonucunda Türkiye genelinde ilk %5'e girmeyi başardım ve bu sayede Cumhuriyet Anadolu Lisesi'ne yerleştim. Özellikle sayısal derslerde başarılı oldum ve liseden 78,6 ortalamayla mezun oldum.",
    "I attended elementary and middle school at Şeker School, which is close to my home. I had a successful school life, receiving high grades and achievement certificates. I graduated with a GPA of 80.5%.":
      "İlkokul ve ortaokulu evime yakın olan Şeker Okulu'nda okudum. Yüksek notlar ve başarı belgeleriyle geçen başarılı bir okul hayatım oldu. 80,5 ortalamayla mezun oldum.",

    // experience — dates
    "February 2024 - Nowadays": "Şubat 2024 - Günümüz",
    "April 2025 - Nowadays": "Nisan 2025 - Günümüz",
    "September 2024 - March 2025": "Eylül 2024 - Mart 2025",
    "October 2023 - October 2023": "Ekim 2023 - Ekim 2023",
    "September 2023 - October 2023": "Eylül 2023 - Ekim 2023",
    "August 2022 - September 2022": "Ağustos 2022 - Eylül 2022",

    // experience — roles, places, descriptions
    "Freelance Web Scraper | Web Developer | Software Consultant | Python Developer":
      "Freelance Web Scraper | Web Geliştirici | Yazılım Danışmanı | Python Geliştirici",
    "Recently, I have been working as a freelancer, assisting a company with web scraping tasks and generating income by creating and selling websites.":
      "Son dönemde freelance olarak çalışıyorum; bir şirkete web scraping işlerinde destek veriyor, ayrıca web siteleri geliştirip satarak gelir elde ediyorum.",
    "IT Specialist | Project Assistant": "BT Uzmanı | Proje Asistanı",
    "I provided consultancy on IT infrastructure, website setup, server room installation, data analysis, software requirements, and software-related matters. By supporting communication and stakeholder management, I assisted with budgeting, procurement activities, and decision-making processes.":
       "BT altyapısı, web sitesi kurulumu, sunucu odası kurulumu, veri analizi, yazılım gereksinimleri ve yazılım konularında danışmanlık sağladım. İletişim ve paydaş yönetimini destekleyerek bütçeleme ve satın alma faaliyetlerine, karar alma süreçlerine yardımcı oldum.",
    "Artificial Intelligence Engineer Intern": "Yapay Zeka Mühendisi Stajyeri",
    "As an AI Engineer intern, I am working on various machine learning and artificial intelligence projects, focusing on developing algorithms for data analysis and improving decision-making systems.":
      "Yapay zeka mühendisi stajyeri olarak çeşitli makine öğrenmesi ve yapay zeka projelerinde çalışıyorum; veri analizi için algoritmalar geliştirmeye ve karar verme sistemlerini iyileştirmeye odaklanıyorum.",
    "Software Engineer Intern": "Yazılım Mühendisi Stajyeri",
    "TÜBİTAK BİLGEM YTE, Ankara, Türkiye (Remote)": "TÜBİTAK BİLGEM YTE, Ankara, Türkiye (Uzaktan)",
    "I participated in a one-month internship, focusing on various software development projects. This experience helped me enhance my coding skills and gain practical knowledge in software engineering.":
      "Bir aylık staj programına katılarak çeşitli yazılım geliştirme projelerinde yer aldım. Bu deneyim kodlama becerilerimi geliştirmeme ve yazılım mühendisliğinde pratik bilgi kazanmama yardımcı oldu.",
    "Computer Vision Engineer Intern": "Bilgisayarlı Görü Mühendisi Stajyeri",
    "My second internship was at Başaran İleri Teknoloji, a branch of Aselsan located in Malatya. I worked in the telecommunications field and developed a small-scale image processing and facial recognition project, considering the operation of surveillance cameras. During this process, I gained experience not only in technical skills but also in communication and project management.":
      "İkinci stajımı Malatya'da bulunan Aselsan bayisi Başaran İleri Teknoloji'de yaptım. Telekomünikasyon alanında çalıştım ve güvenlik kameralarının çalışma prensibini göz önünde bulundurarak küçük ölçekli bir görüntü işleme ve yüz tanıma projesi geliştirdim. Bu süreçte yalnızca teknik becerilerde değil, iletişim ve proje yönetimi konularında da deneyim kazandım.",
    "Embedded Systems Engineer Intern": "Gömülü Sistemler Mühendisi Stajyeri",
    "My first internship experience took place at Tümer Engineering, located in Hacettepe Technopolis. I worked on an AHRS system project for avionics systems, specifically for UAVs, in the defense industry. This project was a challenging and technically complex process, but through this experience, I developed my problem-solving skills and gained a deeper understanding of the importance of teamwork.":
      "İlk staj deneyimimi Hacettepe Teknokent'te bulunan Tümer Mühendislik'te yaşadım. Savunma sanayisinde, özellikle İHA'lara yönelik aviyonik sistemler için bir AHRS sistemi projesinde çalıştım. Teknik olarak zorlayıcı ve karmaşık bir süreçti; bu deneyim sayesinde problem çözme becerilerimi geliştirdim ve takım çalışmasının önemini daha iyi kavradım.",

    // services
    "Python Developer": "Python Geliştirici",
    "As a Python Developer, I specialize in designing and developing robust applications using Python. With a strong foundation in various Python libraries and frameworks, I excel in creating scalable and efficient solutions. My experience includes developing web applications, automating tasks, and implementing data processing pipelines. I am passionate about leveraging Python to solve complex problems and continuously improving my skills through hands-on projects and learning.":
      "Python Geliştirici olarak Python ile sağlam uygulamalar tasarlama ve geliştirme konusunda uzmanlaşıyorum. Çeşitli Python kütüphaneleri ve framework'lerindeki güçlü temelim sayesinde ölçeklenebilir ve verimli çözümler üretiyorum. Deneyimlerim arasında web uygulamaları geliştirmek, görevleri otomatikleştirmek ve veri işleme hatları kurmak yer alıyor. Python'u karmaşık problemleri çözmek için kullanmaya tutkuyla bağlıyım; uygulamalı projeler ve sürekli öğrenmeyle kendimi geliştiriyorum.",
    "Java Developer": "Java Geliştirici",
    "As a Java Developer, I focus on building high-performance, scalable applications using Java. My expertise includes working with Java frameworks and technologies such as Spring , and I have experience in developing both web and desktop applications. I am skilled in designing efficient algorithms, managing databases, and ensuring code quality through best practices. Passionate about problem-solving and software design, I continuously seek to enhance my skills and contribute to innovative projects.":
      "Java Geliştirici olarak Java ile yüksek performanslı ve ölçeklenebilir uygulamalar geliştirmeye odaklanıyorum. Uzmanlığım Spring gibi Java framework'leri ve teknolojileriyle çalışmayı kapsıyor; hem web hem de masaüstü uygulamaları geliştirme deneyimim var. Verimli algoritmalar tasarlama, veritabanlarını yönetme ve en iyi uygulamalarla kod kalitesini güvence altına alma konularında yetkinim. Problem çözmeye ve yazılım tasarımına tutkuyla bağlı biri olarak becerilerimi sürekli geliştirmeyi ve yenilikçi projelere katkı sunmayı hedefliyorum.",
    "Web Developer": "Web Geliştirici",
    "As a front-end developer, I excel in creating visually appealing and user-friendly websites using HTML, CSS, and JavaScript. I am skilled in building responsive layouts, implementing interactive features, and ensuring cross-browser compatibility. My experience extends to WordPress development, where I customize themes, build plugins, and optimize websites for performance and SEO. My goal is to combine technical expertise with creative design to deliver engaging web experiences and enhance user satisfaction.":
      "Front-end geliştirici olarak HTML, CSS ve JavaScript kullanarak görsel açıdan çekici ve kullanıcı dostu web siteleri oluşturuyorum. Duyarlı (responsive) tasarımlar kurmak, etkileşimli özellikler geliştirmek ve tarayıcılar arası uyumluluğu sağlamak konusunda yetkinim. Deneyimim WordPress geliştirmeyi de kapsıyor; tema özelleştiriyor, eklenti geliştiriyor ve siteleri performans ile SEO açısından optimize ediyorum. Amacım teknik uzmanlığı yaratıcı tasarımla birleştirerek etkileyici web deneyimleri sunmak ve kullanıcı memnuniyetini artırmak.",
    "Machine Learning Engineer": "Makine Öğrenmesi Mühendisi",
    "As a Machine Learning Engineer, I specialize in designing, developing, and deploying machine learning models to solve complex problems and drive data-driven decisions. My expertise includes working with a variety of machine learning frameworks and libraries such as TensorFlow, Natural Language Processing (NLP), PyTorch, and scikit-learn. I am proficient in data preprocessing, feature engineering, model training, and evaluation. Passionate about leveraging algorithms and statistical methods, I continuously explore new techniques and technologies to enhance model performance and deliver impactful solutions.":
      "Makine Öğrenmesi Mühendisi olarak karmaşık problemleri çözmek ve veriye dayalı kararlar almak için makine öğrenmesi modelleri tasarlama, geliştirme ve dağıtma konusunda uzmanlaşıyorum. Uzmanlığım TensorFlow, Doğal Dil İşleme (NLP), PyTorch ve scikit-learn gibi çeşitli makine öğrenmesi framework'leri ve kütüphaneleriyle çalışmayı kapsıyor. Veri ön işleme, öznitelik mühendisliği, model eğitimi ve değerlendirme konularında yetkinim. Algoritmalardan ve istatistiksel yöntemlerden yararlanmaya tutkuyla bağlı olarak model performansını artırmak ve etkili çözümler sunmak için yeni teknik ve teknolojileri sürekli araştırıyorum.",
    "Embedded Systems Developer": "Gömülü Sistemler Geliştirici",
    "As an Embedded Systems Developer, I specialize in designing and implementing robust embedded solutions for various applications. My expertise includes working with microcontrollers, real-time operating systems (RTOS), and low-level programming in C/C++ to develop efficient and reliable firmware. I have experience in integrating hardware with software, optimizing system performance, and debugging complex issues. Passionate about creating innovative and high-performance embedded systems, I continuously seek to advance my skills and contribute to cutting-edge projects.":
      "Gömülü Sistemler Geliştirici olarak farklı uygulamalar için sağlam gömülü çözümler tasarlama ve hayata geçirme konusunda uzmanlaşıyorum. Uzmanlığım mikrodenetleyiciler, gerçek zamanlı işletim sistemleri (RTOS) ve verimli, güvenilir firmware geliştirmek için C/C++ ile düşük seviyeli programlamayı kapsıyor. Donanımı yazılımla entegre etme, sistem performansını optimize etme ve karmaşık hataları ayıklama deneyimim var. Yenilikçi ve yüksek performanslı gömülü sistemler kurmaya tutkuyla bağlı olarak becerilerimi sürekli ilerletmeyi ve öncü projelere katkı sunmayı amaçlıyorum.",
    "Software Tester": "Yazılım Test Uzmanı",
    "As a Software Tester, I am dedicated to ensuring the quality and reliability of software applications through comprehensive testing and evaluation. My expertise includes creating detailed test plans, executing test cases, and identifying and documenting defects. Passionate about improving user experiences and software quality, I continuously refine my skills and stay updated with industry best practices.":
      "Yazılım Test Uzmanı olarak kapsamlı test ve değerlendirmelerle yazılım uygulamalarının kalitesini ve güvenilirliğini sağlamaya kendimi adadım. Uzmanlığım ayrıntılı test planları hazırlamayı, test senaryolarını yürütmeyi, hataları tespit edip belgelemeyi kapsıyor. Kullanıcı deneyimini ve yazılım kalitesini iyileştirmeye tutkuyla bağlı olarak becerilerimi sürekli geliştiriyor ve sektördeki en iyi uygulamaları takip ediyorum.",
    "Cybersecurity Engineer": "Siber Güvenlik Mühendisi",
    "As a Cybersecurity Engineer, I am committed to protecting organizations from cyber threats and ensuring the security of their digital assets. My expertise includes designing and implementing security measures, conducting risk assessments, and responding to security incidents. I am proficient in various cybersecurity tools and technologies, including firewalls, intrusion detection systems (IDS), and encryption protocols. With a strong foundation in network security, vulnerability management, and incident response, I focus on safeguarding information systems and maintaining compliance with industry standards. Passionate about staying ahead of evolving threats, I continuously enhance my skills and knowledge in cybersecurity.":
      "Siber Güvenlik Mühendisi olarak kurumları siber tehditlerden korumaya ve dijital varlıklarının güvenliğini sağlamaya kendimi adadım. Uzmanlığım güvenlik önlemleri tasarlayıp uygulamayı, risk değerlendirmeleri yapmayı ve güvenlik olaylarına müdahale etmeyi kapsıyor. Güvenlik duvarları, saldırı tespit sistemleri (IDS) ve şifreleme protokolleri dahil olmak üzere çeşitli siber güvenlik araç ve teknolojilerinde yetkinim. Ağ güvenliği, zafiyet yönetimi ve olay müdahalesi konularındaki güçlü temelimle bilgi sistemlerini korumaya ve sektör standartlarına uyumu sürdürmeye odaklanıyorum. Gelişen tehditlerin bir adım önünde olmaya tutkuyla bağlı olarak siber güvenlik alanındaki bilgi ve becerilerimi sürekli artırıyorum.",
    "Data Scientist / Data Engineer / Web Scraper": "Veri Bilimci / Veri Mühendisi / Web Scraper",
    "As a Data Scientist, Data Engineer, and Web Scraper, I specialize in extracting, processing, and analyzing data to drive informed decision-making and uncover valuable insights. My expertise spans data wrangling, statistical analysis, and machine learning, utilizing tools such as Python, R, SQL, and various data visualization libraries. I am skilled in designing and implementing data pipelines, managing large datasets, and developing web scraping solutions to collect and analyze web-based data. With a strong focus on transforming raw data into actionable intelligence, I continuously seek to improve my skills and stay abreast of the latest advancements in data science and engineering.":
      "Veri Bilimci, Veri Mühendisi ve Web Scraper olarak veriyi çıkarma, işleme ve analiz etme konusunda uzmanlaşıyorum; böylece bilinçli kararlar alınmasını sağlıyor ve değerli içgörüler ortaya çıkarıyorum. Uzmanlığım veri düzenleme, istatistiksel analiz ve makine öğrenmesini kapsıyor; bu süreçte Python, R, SQL ve çeşitli veri görselleştirme kütüphanelerinden yararlanıyorum. Veri hatları tasarlayıp kurma, büyük veri kümelerini yönetme ve web tabanlı veriyi toplayıp analiz etmek için web scraping çözümleri geliştirme konularında yetkinim. Ham veriyi eyleme dönüştürülebilir bilgiye çevirmeye odaklanarak becerilerimi geliştirmeye ve veri bilimi ile mühendisliğindeki güncel gelişmeleri takip etmeye devam ediyorum."
  };

  // short interface strings that live in JS rather than in the markup
  const UI = {
    dark:      ["Dark mode", "Koyu tema"],
    light:     ["Light mode", "Açık tema"],
    musicOn:   ["Music on", "Müzik açık"],
    musicOff:  ["Music off", "Müzik kapalı"],
    musicFail: ["Your browser blocked audio playback", "Tarayıcınız ses çalmayı engelledi"],
    formError: ["Please fill in every field correctly", "Lütfen tüm alanları eksiksiz doldurun"],
    mailOpen:  ["Opening your mail app…", "Mail uygulamanız açılıyor…"],
    langOn:    ["Site in English", "Site Türkçe"]
  };

  let LANG = 'en';
  const t = key => UI[key][LANG === 'tr' ? 1 : 0];

  /* ---------- language switch ---------- */
  let i18nNodes = [];

  function collectI18n() {
    i18nNodes = [];
    $$('h1, h2, h3, h4, p, span, a, li, label, button, small, b, div').forEach(el => {
      [...el.childNodes].forEach(node => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        const key = node.textContent.trim();
        if (!key || !TR[key]) return;
        if (el.closest('[data-split]')) return;          // headings are swapped as HTML
        i18nNodes.push({ node, en: node.textContent, tr: node.textContent.replace(key, TR[key]) });
      });
    });
  }

  function applyLang(lang) {
    LANG = lang === 'tr' ? 'tr' : 'en';
    document.documentElement.lang = LANG;

    i18nNodes.forEach(item => { item.node.textContent = LANG === 'tr' ? item.tr : item.en; });

    Object.entries(TR_TITLES).forEach(([sel, [en, tr]]) => {
      const el = $(sel);
      if (!el) return;
      const revealed = el.classList.contains('is-in');   // keep headings that have not
      el.innerHTML = LANG === 'tr' ? tr : en;            // scrolled into view still hidden,
      splitText(el);                                     // so their entrance still plays
      if (revealed) el.classList.add('is-in');
    });

    const btn = $('#lang-toggle');
    if (btn) {
      btn.textContent = LANG === 'tr' ? 'EN' : 'TR';
      btn.setAttribute('aria-label', LANG === 'tr' ? 'Switch to English' : 'Türkçeye geç');
    }

    if (heroStarted) startTypewriter();
  }

  function initI18n() {
    LANG = localStorage.getItem('tg-lang') === 'tr' ? 'tr' : 'en';
    collectI18n();
    applyLang(LANG);

    $('#lang-toggle')?.addEventListener('click', () => {
      applyLang(LANG === 'tr' ? 'en' : 'tr');
      localStorage.setItem('tg-lang', LANG);
      toast(t('langOn'));
    });
  }

  /* ---------- preloader ---------- */
  function initPreloader() {
    const box = $('#preloader');
    const fill = $('#preloader-fill');
    const num = $('#preloader-num');
    if (!box) { startHeroSequence(); return; }

    let value = 0;
    let loaded = false;
    let finished = false;
    window.addEventListener('load', () => { loaded = true; });

    const finish = () => {
      if (finished) return;
      finished = true;
      if (fill) fill.style.width = '100%';
      if (num) num.textContent = '100%';
      box.classList.add('is-done');
      document.body.classList.remove('is-locked');
      setTimeout(() => box.remove(), 900);
      startHeroSequence();
    };

    const tick = () => {
      if (finished) return;
      const target = loaded ? 100 : 92;
      value = Math.min(value + Math.max((target - value) * 0.08, loaded ? 1.5 : 0.35), 100);
      if (fill) fill.style.width = value + '%';
      if (num) num.textContent = Math.round(value) + '%';
      if (value >= 99.5) { finish(); return; }
      requestAnimationFrame(tick);
    };

    document.body.classList.add('is-locked');
    requestAnimationFrame(tick);

    // timers keep running when requestAnimationFrame is paused (background tab),
    // so the page can never stay stuck behind the loader
    setTimeout(() => { loaded = true; }, 3000);
    setTimeout(finish, 5000);
  }

  let heroStarted = false;

  function startHeroSequence() {
    heroStarted = true;
    $$('#home [data-reveal], #home [data-split]').forEach(el => el.classList.add('is-in'));
    startTypewriter();
  }

  /* ---------- theme ---------- */
  function initTheme() {
    const root = document.documentElement;
    const btn = $('#theme-toggle');
    const stored = localStorage.getItem('tg-theme');
    if (stored) root.setAttribute('data-theme', stored);

    btn?.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('tg-theme', next);
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'dark' ? '#07080c' : '#f4f5f9');
      toast(next === 'dark' ? t('dark') : t('light'));
    });
  }

  /* ---------- split text ---------- */
  function splitText(el) {
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          if (!child.textContent.trim()) return;
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; }
            const word = document.createElement('span');
            word.className = 'word';
            const inner = document.createElement('span');
            inner.textContent = part;
            word.appendChild(inner);
            frag.appendChild(word);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE && !child.classList.contains('word')) {
          walk(child);
        }
      });
    };
    walk(el);
    $$('.word > span', el).forEach((s, i) => s.style.setProperty('--i', i));
  }

  /* ---------- reveal on scroll ---------- */
  let revealObserver;
  function initReveal() {
    $$('[data-split]').forEach(splitText);

    if (REDUCED || !('IntersectionObserver' in window)) {
      $$('[data-reveal], [data-split], .skill').forEach(el => el.classList.add('is-in'));
      $$('.counter').forEach(el => el.textContent = el.dataset.count + (el.dataset.suffix || ''));
      return;
    }

    revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        if (entry.target.classList.contains('counter')) countUp(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    observeAll();
  }

  function observeAll() {
    if (!revealObserver) {
      $$('[data-reveal], [data-split], .skill').forEach(el => el.classList.add('is-in'));
      return;
    }
    $$('[data-reveal]:not(.is-in), [data-split]:not(.is-in), .skill:not(.is-in), .counter:not(.is-in)')
      .forEach(el => revealObserver.observe(el));
  }

  function countUp(el) {
    const target = parseFloat(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();
    const step = now => {
      const p = clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- typewriter ---------- */
  let typeTimer = null;

  function startTypewriter() {
    const el = $('#typewriter');
    if (!el) return;
    clearTimeout(typeTimer);

    const words = ROLES[LANG] || ROLES.en;
    if (REDUCED) { el.textContent = words[0]; return; }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    el.textContent = '';

    const loop = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      el.textContent = word.slice(0, charIndex);

      let delay = deleting ? 45 : 85;
      if (!deleting && charIndex === word.length) { delay = 1600; deleting = true; }
      else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 320;
      }
      typeTimer = setTimeout(loop, delay);
    };
    loop();
  }

  /* ---------- custom cursor ---------- */
  function initCursor() {
    if (!FINE_POINTER || REDUCED) return;
    const cursor = $('#cursor');
    if (!cursor) return;
    const dot = $('.cursor__dot', cursor);
    const ring = $('.cursor__ring', cursor);

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    }, { passive: true });

    const render = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    const hoverables = 'a, button, .project, .card, input, textarea, .stat, .tab, .filter';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverables)) cursor.classList.add('is-hover');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverables)) cursor.classList.remove('is-hover');
    });
  }

  /* ---------- particle network ---------- */
  function initNetwork() {
    const canvas = $('#net');
    if (!canvas || REDUCED) { canvas?.remove(); return; }
    const ctx = canvas.getContext('2d');

    const GLYPHS = ['{ }', '</>', '( )', '=>', '[ ]', ';', '01', '10', 'def', 'if', '#', 'AI', '&&', '::', '...', 'fn'];

    let w = 0, h = 0, dpr = 1, particles = [], glyphs = [], raf = null;
    let prevScroll = window.scrollY;
    const pointer = { x: -9999, y: -9999 };

    const accent = () => getComputedStyle(document.documentElement)
      .getPropertyValue('--accent').trim() || '#ff7a18';

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = clamp(Math.round((w * h) / 20000), 30, 100);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.6,
        depth: 0.4 + Math.random() * 0.9
      }));

      const gCount = clamp(Math.round((w * h) / 46000), 10, 34);
      glyphs = Array.from({ length: gCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vy: 0.12 + Math.random() * 0.3,
        size: 11 + Math.random() * 13,
        depth: 0.5 + Math.random() * 1.5,
        alpha: 0.06 + Math.random() * 0.14,
        char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      const color = accent();

      // scrolling drags the whole field, so the background keeps moving with the page
      const sy = window.scrollY;
      const drag = clamp((sy - prevScroll) * 0.35, -60, 60);
      prevScroll = sy;

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy - drag * 0.04 * p.depth;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = p.x - pointer.x, dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130 && dist > 0.1) {
          p.x += (dx / dist) * 0.8;
          p.y += (dy / dist) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 140) continue;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = color;
          ctx.globalAlpha = (1 - d / 140) * 0.18;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      // drifting code fragments — the same field, one layer further back
      for (const g of glyphs) {
        g.y += g.vy - drag * 0.06 * g.depth;
        if (g.y > h + 30) { g.y = -30; g.x = Math.random() * w; }
        if (g.y < -30) { g.y = h + 30; g.x = Math.random() * w; }

        ctx.font = `500 ${g.size}px "JetBrains Mono", ui-monospace, monospace`;
        ctx.fillStyle = color;
        ctx.globalAlpha = g.alpha;
        ctx.fillText(g.char, g.x, g.y);
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    const start = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };

    resize();
    start();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 180);
    });
    window.addEventListener('mousemove', e => { pointer.x = e.clientX; pointer.y = e.clientY; }, { passive: true });
    window.addEventListener('mouseout', () => { pointer.x = pointer.y = -9999; });
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  }

  /* ---------- header, progress, spy, to-top ---------- */
  function initScrollUI() {
    const header = $('#header');
    const bar = $('#scroll-progress');
    const toTop = $('#to-top');
    const links = $$('.nav__link');
    const sections = links
      .map(l => document.querySelector(l.getAttribute('href')))
      .filter(Boolean);

    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      header?.classList.toggle('is-stuck', y > 24);
      if (bar) bar.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;
      toTop?.classList.toggle('is-visible', y > 600);

      let current = sections[0];
      for (const sec of sections) {
        if (sec.offsetTop - window.innerHeight * 0.35 <= y) current = sec;
      }
      if (current) {
        links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + current.id));
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();

    toTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
    });
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    const burger = $('#burger');
    const nav = $('#nav');
    if (!burger || !nav) return;

    const close = () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
    };

    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('is-locked', open);
    });

    nav.addEventListener('click', e => { if (e.target.closest('.nav__link')) close(); });
    window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 1080) close(); });
  }

  /* ---------- magnetic buttons ---------- */
  function initMagnetic() {
    if (!FINE_POINTER || REDUCED) return;
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.28;
        const y = (e.clientY - r.top - r.height / 2) * 0.4;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- 3D tilt ---------- */
  function initTilt() {
    if (!FINE_POINTER || REDUCED) return;
    $$('[data-tilt]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${px * 11}deg) rotateX(${-py * 11}deg)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
      });
    });
  }

  /* ---------- spotlight cards ---------- */
  function initSpotlight() {
    if (!FINE_POINTER) return;
    document.addEventListener('mousemove', e => {
      const card = e.target.closest('[data-spotlight]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ---------- projects ---------- */
  function initProjects() {
    const grid = $('#project-grid');
    const filterBar = $('#filters');
    if (!grid) return;

    const counts = PROJECTS.reduce((acc, p) => {
      acc[p.c] = (acc[p.c] || 0) + 1;
      return acc;
    }, {});

    filterBar.innerHTML = FILTERS
      .filter(f => f.key === 'all' || counts[f.key])
      .map((f, idx) => `
        <button class="filter${idx === 0 ? ' is-active' : ''}" type="button" data-filter="${f.key}">
          ${f.label}<small>${f.key === 'all' ? PROJECTS.length : counts[f.key]}</small>
        </button>`).join('');

    grid.innerHTML = PROJECTS.map((p, idx) => `
      <article class="project" data-cat="${p.c}" data-reveal style="--d:${(idx % 3) * 0.08}s">
        <div class="project__media">
          <span class="project__cat">${CAT_LABEL[p.c] || p.c}</span>
          <img src="${p.i}" alt="${p.a}" loading="lazy" decoding="async">
        </div>
        <div class="project__body">
          <h3>${p.t}</h3>
          <a class="project__link" href="${p.u}" target="_blank" rel="noopener" aria-label="${p.t}">
            <svg class="ico"><use href="#i-external"></use></svg>
          </a>
        </div>
      </article>`).join('');

    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      const key = btn.dataset.filter;

      $$('.filter', filterBar).forEach(f => f.classList.toggle('is-active', f === btn));
      $$('.project', grid).forEach(card => {
        const show = key === 'all' || card.dataset.cat === key;
        card.classList.toggle('is-hidden', !show);
        card.classList.remove('is-entering');
        if (show && !REDUCED) {
          void card.offsetWidth;           // restart the entrance animation
          card.classList.add('is-entering');
        }
      });
    });

    observeAll();
  }

  /* ---------- contact ---------- */
  function initContact() {
    const form = $('#contact-form');
    form?.addEventListener('submit', ev => {
      ev.preventDefault();
      const required = $$('input[required], textarea[required]', form);
      let valid = true;

      required.forEach(field => {
        const ok = field.checkValidity() && field.value.trim() !== '';
        field.parentElement.classList.toggle('has-error', !ok);
        if (!ok && valid) { field.focus(); valid = false; }
      });

      if (!valid) { toast(t('formError')); return; }

      const name = $('#f-name').value.trim();
      const mail = $('#f-mail').value.trim();
      const phone = $('#f-phone').value.trim();
      const subject = $('#f-subject').value.trim();
      const message = $('#f-msg').value.trim();
      const body = message + '\n\n---\n' + name + '\n' + mail + (phone ? '\n' + phone : '');

      window.location.href =
        'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      toast(t('mailOpen'));
    });

    $$('#contact-form input, #contact-form textarea').forEach(field => {
      field.addEventListener('input', () => field.parentElement.classList.remove('has-error'));
    });
  }

  /* ---------- background music ---------- */
  function initSound() {
    const audio = $('#bg-music');
    const btn = $('#sound-toggle');
    if (!audio || !btn) return;

    audio.volume = 0.35;
    btn.addEventListener('click', async () => {
      if (audio.paused) {
        try {
          await audio.play();
          btn.setAttribute('aria-pressed', 'true');
          toast(t('musicOn'));
        } catch {
          toast(t('musicFail'));
        }
      } else {
        audio.pause();
        btn.setAttribute('aria-pressed', 'false');
        toast(t('musicOff'));
      }
    });
  }

  /* ---------- counters, straight from the content ---------- */
  function initStats() {
    const set = (sel, n) => { const el = $(sel); if (el) el.dataset.count = n; };
    set('#stat-projects', PROJECTS.length);
    set('#stat-experience', $$('#experience .tl').length);
    set('#stat-services', $$('#services .card').length);
    set('#stat-education', $$('#education .tl').length);
  }

  /* ---------- misc ---------- */
  function initMisc() {
    // smooth anchor scrolling with header offset
    document.addEventListener('click', e => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: REDUCED ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initStats();
    initPreloader();
    initReveal();
    initProjects();
    initCursor();
    initNetwork();
    initScrollUI();
    initMenu();
    initMagnetic();
    initTilt();
    initSpotlight();
    initContact();
    initSound();
    initMisc();
    initI18n();
  });
})();
