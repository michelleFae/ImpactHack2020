# The Digital Diplomat Museum

The Digital Diplomat is a 3D interactive museum which lets the user explore their own diplomatic traits, match them to a career in diplomacy, and learn more about all their suitable diplomatic careers. It was made by Michelle D'Souza for the 2020 ImpactHack organized by the U.S. Department of State, using open source libraries.

Check out this demo video for an introduction to the project: https://youtu.be/458BtOm0qyA

## Installation

No installation is necessry. The repo just needs to be hosted on a website for access.

## Compatability

The project is Wordpress compatible. It is also viewable from all devices with modern browsers - from phones to laptops - as long as they have a stable internet connection.

## Contributing
Although pull requests are welcome in order to improve the project, I'm currently holding off on public pull requests as this is a personal submission for the hackathon. If you'd like to make a contribution, please reach out to me or to the Department of State.

For major changes, please open an issue first to discuss what you would like to change.


## Overview of files and directories

The 3D room is essentially a blank room. All of the exhibits within the museum are iframes. Thus adding and removing an exhibit is quite easy and scalable.

### assets/
This directory contains all image assets used in the project. All images are currently either open source or designed by me.

### css/
The directory contains the css file used for the 3D room.

### dimensions/
This directory conatins the files for the dimension interactives for all the 3 diplomat categories. To add a dimension, add an html file to `dimensions/dimensionFrame/indexFiles/<insert_file_name_here>`.

To edit the dimensions in a particular file, change the correponding html file in the `indexFiles` directory.

### index.html
This contains the html file for the 3d rooms. If you'd like to add or amend any of the pop-up info spots, including those for each diplomat's text and video, please do so here.

### interactive/
This contains the simulations for each diplomat category, letting the user experience the shoes of a diplomat of their choosing.

To add to an interactive, amend the corresponding html file in the `FSO_shoes` folder. The html files were created using `Twine` (a free open-source app). Twine can allow a user to modify the story line and flow through it, if you'd prefer to NOT modify the html files directly. Twine also displays the story flow clearly, making it easy to follow along.

A screenshot of one of the interactives displayed using twine:

![](https://i.imgur.com/slvMmk3.jpg)


### js/
This contains the javascript files for the 3d rooms.

If you'd like to add an interactive to the room, please amend the `roomElems.js` file in this directory. I've written out helper functions in `roomFuncs.js`, making this a very simple task. Feel free to use already added elements as a reference.

Adding an element looks like this:

```javascript

/* Adding the infospot for the wheel */
linkPanoInfoSpotWtInfo(new THREE.Vector3(3077.13, 2147.35, -5000.00),"diplomatic-wheel-info" , false, blackRoom, "info for wheel", PANOLENS.DataImage.Info);
```

In a simple manner, this is the format it follows:

```javascript
/* Adding the infospot for the wheel */
linkPanoInfoSpotWtInfo(<3Dvector> ,<name of corresponding div in index.html> , <boolean representing whether you'd want to display this on the navbar> , <panolens room that you'd like this in>, <title that you'd like to have on the navbar>, <icon image>);
```

The documentation for the functions are further explained in `roomFuncs.js`.

Adding interactives to the room is hence very simple. After creating a div in `index.html`, the div just has to be added in `roomElems.js` using the functions mentioned above.

### quiz/
This contains files for the 'What's Your Digital Diplomat' quiz. The `FSOTrackQuiz` folder contains the `quiz.html` file for the quiz. This has the layout and divs for the intro, options, and results in the quiz. 

The `js` folder contains several files. To add a question, add it to the `questions.js` file, in the `questions` data structure.

This is an example format for a question:

```javascript
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
  }

```

`question1` specifies the question number. Questions will be traversed in the order question0, question1, question2, etc.
To add your own question at position `x` in the quiz, define your question using `questionx`.

`numOptions` specifies the number of options you want the user to have for the question defined in `question`. Each question also contains options, specified by `option0`, `option1`, etc.. The options are displayed in ascending order.

Each option contains a `type`. This can be img if you'd like to have only pictures as options. It can be string if you want to have text as the option. `content` describes what will be displayed for the option. If the user clicks that corresponding option, they will gain `pointsGained` points for all the personalities in the `personality` list. If you'd like to ensure that a user clicks a particular option in order to proceed to the next question, set the `isRequired` attribute to `true`, else define it as false.

The `results` data structure in `results.js` contains the corresponding results for each career track. For example:
```javascript=
"Economic Affairs Officer (FSO)": [
    "An interest score of below 50% indicates that Economic Affairs might not be the best choice for you.",
    "A score between 50% to 70% implies that you do show some interest in the Economic Affairs track. You'd be a fair match for an Economic Affairs role!",
     "A score between 70% to 80% implies that you show significant interest in Economic Affairs! You would make a great Economic Affairs Diplomat!",
    "A score above 80% indicates that you are an excellent match for an Economic Affairs position! You'd be a perfect fit on the team!",
    "Economic Officers work with foreign governments and other US Governmental agencies on technology, science, economic, trade, energy, and environmental issues both domestically and overseas.",
    "Just like you, Economic Officers excel at collaborating with a wide variety of government officials, business leaders, international organizations and researchers. They are also very good at developing strong relationships with important economic figures. Economic Officers love spending their time negotiating and maintaining positive economic and trade relations between the US and other countries.",
        "../../assets/officers/fso_econ.png"
  ]
```

The zeroth element in the list contains the message displayed for the attribute, if the user gets a score below 50% for that particular career. The first element is the message displayed if their score is between 50% to 70%. The following element is the message displayed if their score is between 70% to 80%. The element after that is the message displayed if their score is above 80%. The next 2 elements are the text that is displayed if the user gets above 50%. This is done so that the user doesn't have to learn about careers they show no interest in. The last element is the image of the diplomat that is displayed if the user gets that diplomat as their highest ranking one.

### wheel/

This contains the spinning wheels present in the 4 rooms.

## Ending Notes

I enjoyed coming up with this idea and implementing it. I picked up many new skills along the way. Here's hoping that it makes an impact.


