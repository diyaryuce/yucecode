export const translations = {
  en: {
    nav: {
      home: "Home",
      service: "Service",
      about: "About",
      contact: "Contact",
    },

    hero: {
      intro: "Hi, I,m",
      desc: "I develop modern digital experiences that combine clean design, solid engineering, and intuitive user interaction.",
      connect: "Let's connect",
      moreAbout: "More about me",
    },

    services: {
      title: "SERVICES",
      frontendTitle: "Frontend",
      frontendText:
        "Frontend is the visual layer of every digital product, shaping the user's first impression and overall experience. I develop modern, responsive, and high-performing interfaces that combine clean design with seamless usability. The goal is simple: create experiences that look impressive, feel intuitive, and leave a lasting impact.",
      backendTitle: "Backend + Database",
      backendText:
        "Backend is the foundation that powers a digital product behind the scenes. I build reliable server-side systems and database solutions that handle data, business logic, authentication, and application functionality efficiently. My focus is on creating secure, scalable, and maintainable architectures that keep applications running smoothly and provide a solid foundation for the user experience.",
      tech: "Tech that powers my work",
    },

    aboutMe: {
      about: "ABOUT ME",
      who: "Who am I?",
      para1:
        "I started coding because I was curious about how the websites and applications I used every day were actually built. At first, it was mostly experimentation, changing small things, breaking them, fixing them, and slowly understanding how everything connected. That curiosity grew into a real interest in software development, especially the process of turning an idea into something people can actually use.",
      para2:
        "As I learned more, I became interested in both the visual and technical sides of development. I enjoyed frontend because it let me combine design with code, but I also wanted to understand what was happening behind the interface, which pushed me toward backend development, databases, and data engineering. Since then, I've focused on becoming a well-rounded developer who can understand the full picture and build applications that are clean, reliable, and thoughtfully designed.",
      based: "BASED IN",
      loc: "Trondheim, Norway",
      focus: "FOCUS",
      focusList: ["Full-stack development", "Data engineering"],
      currently: "CURRENTLY",
      currentlyList: ["Studying Data Engineering"],
      interest: "INTEREST",
      interestList: [
        "Data and coding",
        "Gym and weightlifting",
        "Gaming",
        "Football, basketball etc.",
      ],
      touch: "Get in touch",
    },

    footer: {
      rights: "© 2026 yucecode.no. All rights reserved.",
    },

    contactDialog: {
      title: "Get in touch",
      desc: "Have an idea or project in mind? Get in touch, and let's turn it into something real.",
      name: "Your name",
      email: "Your email",
      message: "Message",
      write: "Write your message...",
      submit: "Submit",
      cancel: "Cancel",
    },
  },

  no: {
    nav: {
      home: "Hjem",
      service: "Tjenester",
      about: "Om meg",
      contact: "Kontakt",
    },

    hero: {
      intro: "Hei, jeg er",
      desc: "Jeg utvikler moderne digitale løsninger som kombinerer rent design, solid utvikling og intuitiv brukeropplevelse.",
      connect: "Ta kontakt",
      moreAbout: "Mer om meg",
    },

    services: {
      title: "TJENESTER",
      frontendTitle: "Frontend",
      frontendText:
        "Frontend er det visuelle laget i ethvert digitalt produkt og former brukerens førsteinntrykk og helhetsopplevelse. Jeg utvikler moderne, responsive og effektive grensesnitt som kombinerer rent design med sømløs brukervennlighet. Målet er enkelt: å skape opplevelser som ser bra ut, føles intuitive og gir et varig inntrykk.",
      backendTitle: "Backend + Database",
      backendText:
        "Backend er grunnlaget som driver et digitalt produkt i bakgrunnen. Jeg bygger pålitelige serversystemer og databaseløsninger som håndterer data, forretningslogikk, autentisering og applikasjonsfunksjonalitet på en effektiv måte. Fokuset mitt er å lage sikre, skalerbare og vedlikeholdbare løsninger som holder applikasjoner stabile og gir et solid fundament for brukeropplevelsen.",
      tech: "Teknologi som driver arbeidet mitt",
    },

    aboutMe: {
      about: "OM MEG",
      who: "Hvem er jeg?",
      para1:
        "Jeg begynte å kode fordi jeg var nysgjerrig på hvordan nettsidene og applikasjonene jeg brukte hver dag faktisk var bygget. I starten handlet det mest om å eksperimentere, endre små ting, ødelegge dem, fikse dem og gradvis forstå hvordan alt hang sammen. Denne nysgjerrigheten utviklet seg til en genuin interesse for programvareutvikling, spesielt prosessen med å gjøre en idé om til noe folk faktisk kan bruke.",
      para2:
        "Etter hvert som jeg lærte mer, ble jeg interessert i både den visuelle og tekniske siden av utvikling. Jeg likte frontend fordi det lot meg kombinere design med kode, men jeg ønsket også å forstå hva som skjedde bak grensesnittet. Det førte meg videre til backend-utvikling, databaser og dataingeniørfaget. Siden da har jeg fokusert på å bli en allsidig utvikler som forstår helheten og kan bygge applikasjoner som er ryddige, pålitelige og gjennomtenkte.",
      based: "BASERT I",
      loc: "Trondheim, Norge",
      focus: "FOKUS",
      focusList: ["Fullstack-utvikling", "Dataingeniørfag"],
      currently: "FOR TIDEN",
      currentlyList: ["Studerer dataingeniør"],
      interest: "INTERESSER",
      interestList: [
        "Data og koding",
        "Trening og styrketrening",
        "Gaming",
        "Fotball, basketball osv.",
      ],
      touch: "Ta kontakt",
    },

    footer: {
      rights: "© 2026 yucecode.no. Alle rettigheter reservert.",
    },

    contactDialog: {
      title: "Ta kontakt",
      desc: "Har du en idé eller et prosjekt i tankene? Ta kontakt, så gjør vi det til virkelighet sammen.",
      name: "Ditt navn",
      email: "Din e-post",
      message: "Melding",
      write: "Skriv din melding...",
      submit: "Send",
      cancel: "Avbryt",
    },
  },
};

export type Language = keyof typeof translations;

export type Translation = (typeof translations)[Language];
