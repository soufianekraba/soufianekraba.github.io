/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Soufiane Kraba",
  title: "Salut, Je suis Soufiane",
  subTitle: emoji(
    "Etudiant en Systèmes & Réseaux 🚀 ."
  ),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
  
};


// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/soufiane-kraba/",
  gmail: "soufianekrabainfo@gmail.com",
  gitlab: "https://gitlab.com/soufianekrabainfo",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "Etudiant en Informatique, Systèmes & Réseaux",
  skills: [
    emoji(
      "⚡ Création Infrastructures systèmes & réseaux"),
    emoji("⚡ Administration Windows Server  (Active Directory, DNS, DHCP...) "),
    emoji(
      "⚡ Administration systèmes Linux (Ubuntu, Fedora, Rocky Linux..)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },

    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-windows"    
    },

     {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"    
    },

    {
      skillName: "Base de données",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redhat",
      fontAwesomeClassname: "fab fa-redhat"
    },
    {
      skillName: "Pare-Feu",
      fontAwesomeClassname: "fas fa-lock"

    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Université de Lille ",
      logo: require("./assets/images/universite_de_lille_logo.png"),
      subHeader: "BUT3 Informatique - Parcours déploiement d'applications communicantes et sécurisées, Mise en réseau de systèmes informatiques et télécommunications ",
      duration: "Septembre 2024 - Juillet 2025",
     // desc: "Participated in the research of XXX and published 3 papers.",
     // descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
     // ]
    },
    {
      schoolName: "Gaston Berger ",
      logo: require("./assets/images/gaston_berger.png"),
      subHeader: "BTS services informatiques aux organisations, solutions d'infrastructure, systèmes et réseaux (SISR)",
      duration: "Septembre 2022 - Juillet 2024",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["test"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Administration Réseaux ", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Administration Systèmes",
      progressPercentage: "70%"
    },
    {
      Stack: "Scripting",
      progressPercentage: "50%"
  
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Stagiaire Adminisrateur Réseaux",
      company: "Scalair",
      companylogo: require("./assets/images/scalair_logo.png"),
      date: "Janvier 2024 – Février 2024",
      desc: "Stage de deuxième année pour mon BTS SIO SISR.",
      descBullets: [
        " Configuration des firewalls Stormshield.",


        " Découverte et implication dans les aspects réseau.",


        " Déploiement et configuration du système Syslog pour la gestion des logs sur le parc informatique des firewalls.",
      ]
    },
    {
      role: "Stagiaire Systèmes & Réseaux",
      company: "Pragmatism IT",
      companylogo: require("./assets/images/pragmatismit.png"),

      date: "Mai 2023 – Juin 2023",
      desc: "Au cours de ma première année de BTS SIO option SISR , j'ai effectué un stage qui m'as permis de découvrir le monde professionnel de l'IT :",
      descBullets: [
        " Installation et configuration d'un pare-feu pfSense",
        " Configuration d'un serveur base de données MariaDB",
        " Configuration d'un serveur Web Apache2", 
        " Mise en place d'un Reverse Proxy Nginx et certificat SSL",
        " Mise en place de l'application Proxy sur l'Azure AD et déploiement du connecteur sur Windows Server 2022",
        " Gestion des Groupes et des affectations d'accès sur l'Azure AD",
        " Implémentation de la vérification en deux étapes (MFA) pour BookStack sur l'Azure AD",
        " Authentification avec un compte Azure AD sur BookStack avec l'App Registration d'Azure AD",
      ]

    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets",
  subtitle: "Les Projets que j'ai fais lors de mes etudes :",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Cerfications 🏆 "),
  subtitle:
    "Les certifications que j'ai obtenu !",

  achievementsCards: [
    {
      title: "Cisco Network Essentials ",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "Télécharger mon CV",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contacte Moi ☎️"),
  subtitle:
    "Discutez d'un projet ou souhaitez simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+33-0767209423",
  email_address: "soufianekrabainfo@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
