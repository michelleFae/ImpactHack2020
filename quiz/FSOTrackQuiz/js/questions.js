const maxScores = {
  "Consular Affairs Officer (FSO)":60,
  "Economic Affairs Officer (FSO)":60,
  "Management Affairs Officer (FSO)":60,
  "Political Affairs Officer (FSO)":60,
   "Public Diplomacy Officer (FSO)":60,  

   "Medical and Health Specialist (FSS)":60,
   "Information Technology Specialist (FSS)":60,
   "Engineering Specialist (FSS)":80,
   "International Programs and English Language Specialist (FSS)":60,
   "Law Enforcement and Security Specialist (FSS)":60,

   "Foreign Affairs Officer (CSO)":60,
   "Information Technology Management Officer (CSO)":60,
   "Intelligence Series Officer (CSO)":60,
   "Public Affairs Officer (CSO)":60,
   "Language Specialist (CSO)":60
}

// constant to store all the questions and answers
const questions = {
  question1: {
  	numOptions: 3,
    question: "Knowing a foreign language is not necessary to be a diplomat. But out of curiosity - how comfortable are you with learning and using foreign languages?",
    option0: {
      type: "string",
      content: "I'm a language enthusiast! I think I can pick up languages quite well and would love to incorporate this skill in my job.",
      personality: ["Consular Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "International Programs and English Language Specialist (FSS)", "Language Specialist (CSO)"],
      pointsGained: 5,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "I am not a 'language enthusiast' per-se, but I'll be able to pick up a language with sufficient training",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I'd rather not learn any new languages",
      personality: ["Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 5,
      isRequired: false
    }
  },
  question0: {
  	numOptions: 3,
    question: "Alright - first question - What kind of knoweldge-user do you see yourself as?",
    option0: {
      type: "string",
      content: "I see myself as a generalist using knowldege from a variety of categories",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Public Affairs Officer (CSO)", "Intelligence Series Officer (CSO)", "Foreign Affairs Officer (CSO)" ],
      pointsGained: 10,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "I'd like to be a specialist in a position that makes intense use of the knoweldge in my chosen field",
      personality: ["Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Language Specialist (CSO)", "Information Technology Management Officer (CSO)"],
      pointsGained: 10,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I'd enjoy working with either kind of knoweldge",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 10,
      isRequired: false
    }
  },
  question2: {
  	numOptions: 3,
    question: "Are you a people-person? Would you like to make use of your people skills on the job?",
    option0: {
      type: "string",
      content: "Definitely! I love interacting with people and would like to do so quite often on my job!",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "International Programs and English Language Specialist (FSS)", "Foreign Affairs Officer (CSO)", 
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 3,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "I prefer to not interact with too many people.",
      personality: ["Medical and Health Specialist (FSS)",  
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", 
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)"],
      pointsGained: 3,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I don't mind interacting with people, but less interaction with people is not a deal breaker. ",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 1,
      isRequired: false
    }
  },
    question3: { 
   	numOptions: 3,
    question: "How would you describe your public speaking skills?",
    option0: {
      type: "string",
      content: "I have fantastic public speaking skills! I love talking infornt of large audiences!",
      personality: ["Management Affairs Officer (FSO)", "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)",
       "Public Affairs Officer (CSO)"],
      pointsGained: 3,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "I struggle with public speaking and often suffer from stage fright.",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
       "Language Specialist (CSO)"],
      pointsGained: 3,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I don't mind speaking infront of large audiences but the lack of oportunities for public speaking is not a deal breaker.",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 3,
      isRequired: false
    }
  },
    question4: {
   	numOptions: 3,	
    question: "How would you assess your research and writing skills?",
    option0: {
      type: "string",
      content: "I have top-notch reseach and writing skills!",
      personality: [ "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "International Programs and English Language Specialist (FSS)",
       "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 3,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "My reseach and writing skills are terrible and/or this is not a task I enjoy.",
      personality: ["Consular Affairs Officer (FSO)","Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)", 
      "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)"],
      pointsGained: 3,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I have average research and writing skills.",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 3,
      isRequired: false
    }
  },
    question5: {
    numOptions: 3,
    question: "Do you like to manage people and organize things?",
    option0: {
      type: "string",
      content: "I have amazing organizational and management skills!",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
       "Information Technology Management Officer (CSO)",
      "Public Affairs Officer (CSO)"],
      pointsGained: 3,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "I have mediocre management and organizational skills.",
      personality: [ "Economic Affairs Officer (FSO)", 
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 3,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "My management skills are equivalent to those of a two year old. Maybe even worse.",
      personality: ["Economic Affairs Officer (FSO)", 
      "Information Technology Specialist (FSS)", 
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)", "Intelligence Series Officer (CSO)",
     "Language Specialist (CSO)"],
      pointsGained: 3,
      isRequired: false
    }
  },
    question6: {
    numOptions: 3,
    question: "Can you keep your cool and stay calm in times of sudden disasters?",
    option0: {
      type: "string",
      content: "Definitely. I'm usually cool, calm, and collected when disasters hit.",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 3
    },
    option1: {
      type: "string",
      content:
        "Sometimes, nerves get to me",
      personality: ["Economic Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 3
    },
    option2: {
      type: "string",
      content:
        "I can't handle abrupt changes in life",
      personality: ["Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 3
    }
  },

   question9: {
  	numOptions: 5,
    question: "Great work! Now, we're flying out to a country called Berzerkistan! Here in Berzerkistan, you're tasked with helping out the Department of State. Which task would you rather do?",
    option0: {
      type: "string",
      content: "Help register the births of children of U.S. citizens born in Berzerkistan",
      personality: ["Consular Affairs Officer (FSO)"],
      pointsGained: 5,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "With guidance, persuade the government of Berzerkistan to support U.S. policies on a range of economic, environmental and commercial issues",
       personality: ["Economic Affairs Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "Supervise, mentor, and advise a team working on creating a novel feature for the U.S. embassy in Berzerkistan. In this task, you will also need to be comfortable with making decisions and guiding a team.",
      personality: ["Management Affairs Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
      "Deliver official messages, called démarches, from the U.S. government to the Berzerkistan government and report the response to these messages. Additionally, use your skills of persuasion to motivate the Berzerkistan government to comprehend and agree with the stance of the U.S. government.",
       personality: ["Political Affairs Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "Explain America’s history, culture, and the value of American diversity at a conference in Berzerkistan",
       personality: ["Public Diplomacy Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    }
  },
     question10: {
  	numOptions: 5,
    question: "Thank you for helping us out with that task! Due to your great work, you've now been posted in the country of Ambrosia. What task would you like to help out with?",
        option0: {
      type: "string",
      content: "Help resolve a conflict between a newbie local hire and a very experienced one, making sure that you’re able to identify with and connect to each one of them",
      personality: ["Management Affairs Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option1: {
      type: "string",
      content:
        "Research and write numerous congressionally mandated reports on religious freedom and human rights in Ambrosia",
       personality: ["Political Affairs Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "Help repatriate U.S. citizens in Berzerkistan owing to the new laws that Ambrosia passed in relation to U.S. citizens",
      personality: ["Consular Affairs Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
      "Meet with and develop close ties to foreign journalists, government officials, educators, and non-governmental organizations in Ambrosia",
       personality: ["Public Diplomacy Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "Develop a network of contacts in the government of Ambrosia and local business communities so as to keep informed on economic and other developments in Ambrosia",
       personality: ["Economic Affairs Officer (FSO)"],
      pointsGained: 5,
      isRequired: false
    }
  },
     question11: {
  	numOptions: 5,
    question: "Fantastic! On account of your great work in here in Ambrosia, we now need you to help out on another task. What would you like to do?",
    option0: {
      type: "string",
      content: "Ensure that the Department of State’s IT infrastructure is properly functioning in Ambrosia.",
      personality: ["Information Technology Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
        option1: {
      type: "string",
      content:
        "Help in the construction of a new embassy for the U.S.Department of State, in Ambrosia",
       personality: ["Engineering Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "Provide primary medical care to U.S. government employees living in Ambrosia",
      personality: ["Medical and Health Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
      "Securely deliver diplomatic pouches that contain classified and sensitive materials",
       personality: ["Law Enforcement and Security Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "Develop partnerships with English language professionals in Ambrosia and provide them with resources and support, enhancing their ability to positively influence the lives of their students",
       personality: ["International Programs and English Language Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false
    }
  },
     question12: {
  	  	numOptions: 5,
    question: "Perfect! That was some great work over in Ambrosia! Now let's head back to Berzerkistan. You know the drill - what are you helping out with this time?",
    option0: {
      type: "string",
      content: "Design and test security systems in the U.S. Embassy in Berzerkistan to protect U.S. assets from espionage",
      personality: ["Law Enforcement and Security Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
        option1: {
      type: "string",
      content:
        "Carry out english language training programs in Berzerkistan",
       personality: ["International Programs and English Language Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "Debug a technical issue in Berzerkistan’s radio system",
      personality: ["Information Technology Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
      "Work on fixing up the magnetized door in the U.S. Embassy in Berzerkistan",
       personality: ["Engineering Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "Help out a laboratory scientist to analyze the test results of U.S. officials in Berzerkistan who have been exposed to a deadly virus",
       personality: ["Medical and Health Specialist (FSS)"],
      pointsGained: 5,
      isRequired: false
    }
  },
     question7: {
  	numOptions: 5,
    question: "Alrighty then! Thanks for answering those questions! Now let's go on a little trip to Washington D.C. to try to figure out what's your diplomat! What task would you like to do here in Washington?",
    option0: {
      type: "string",
      content: "Advise on, administer and supervise the affairs of the U.S. government with the country of Tescara relating to a shared nuclear power plant",
      personality: ["Foreign Affairs Officer (CSO)"],
      pointsGained: 5,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
        option1: {
      type: "string",
      content:
        "Manage the IT system team at the U.S. government office in Washington D.C",
       personality: ["Information Technology Management Officer (CSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "Attend an official conference and help in the translation and interpretation of a foreign language of your choice so that various government officials can comprehend what’s going on",
      personality: ["Language Specialist (CSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
      "Oversee the social media platform of the U.S. Government and other official U.S. entities",
       personality: ["Public Affairs Officer (CSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "Collect and disseminate classified information that supports the national security efforts of the Intelligence Community",
       personality: ["Intelligence Series Officer (CSO)"],
      pointsGained: 5,
      isRequired: false
    }
  },
     question8: {
  	numOptions: 5,
    question: "Nice work! Now pick another task to do:",
    option0: {
      type: "string",
      content: "Through translation, help the Office of the President can comprehend a suspicious document written in foreign language",
      personality: ["Language Specialist (CSO)"],
      pointsGained: 5,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
        option1: {
      type: "string",
      content:
        "Gather and analyze information from U.S. reconnaissance satellites and produce intelligence that is used by other members of the Intelligence Community",
       personality: ["Intelligence Series Officer (CSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "Organize and attend press conferences to shape the public image of the U.S. Government",
      personality: ["Public Affairs Officer (CSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option3: {
      type: "string",
      content:
      "Research the refugee crisis happening in the United Region of Vadeem",
       personality: ["Foreign Affairs Officer (CSO)"],
      pointsGained: 5,
      isRequired: false
    },
    option4: {
      type: "string",
      content:
        "Engage in technical customer support by operating the IT front desk at the US Embassy",
       personality: ["Information Technology Management Officer (CSO)"],
      pointsGained: 5,
      isRequired: false
    }
  },
     question13: {
  	numOptions: 3,
    question: "Very well done. You'd make a fantastic diplomat. The question is - which type of diplomat would you be? One last question: would you like this little travelling journey even if it was not just digital?",
    option0: {
      type: "string",
      content: "I loved it! I also would love to travel outside the US if I could!",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)"],
      pointsGained: 20,
      isRequired: false,
      requiredMsg: "Selecting this option would automatically deem you unfit for this position."
    },
    option1: {
      type: "string",
      content:
        "The travelling journey was nice only in the digital realm. In real life, I'd prefer to work from within the United States. Travelling abroad is not my cup of tea.",
       personality: ["Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 20,
      isRequired: false
    },
    option2: {
      type: "string",
      content:
        "I don't mind travelling - but as a diplomat, I don't necessarily need to in order to enjoy my job.",
      personality: ["Consular Affairs Officer (FSO)", "Economic Affairs Officer (FSO)", "Management Affairs Officer (FSO)",
      "Political Affairs Officer (FSO)", "Public Diplomacy Officer (FSO)", "Medical and Health Specialist (FSS)", 
      "Information Technology Specialist (FSS)", "Engineering Specialist (FSS)", "International Programs and English Language Specialist (FSS)",
      "Law Enforcement and Security Specialist (FSS)", "Foreign Affairs Officer (CSO)",  "Information Technology Management Officer (CSO)", "Intelligence Series Officer (CSO)",
      "Public Affairs Officer (CSO)", "Language Specialist (CSO)"],
      pointsGained: 20,
      isRequired: false
    }
  }
};
