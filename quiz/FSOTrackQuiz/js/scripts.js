//Update manually according to HTML file
const maxOptions = 5;

//Index of list elem that you want to display on results page
const resInfo1Ind = 4;

//Index of list elem that you want to display on results page
const resInfo2Ind = 5;

// num questions
const numQuestions = Object.keys(questions).length;
const shift = 100 / numQuestions;

// for keeping track of the score
var score = {};

// for keep track of the current question
var currentQn = 0;

initScore(results);

function setVisible(div2) {
            var div2 = document.getElementById(div2);
            if (div2) {

                if (div2.style.display == 'none') {
                    div2.style.display = 'block';
                }
                else {
                    div2.style.display = 'none';
                }
            }
}

function initScore(results) {
  // Takes in a results object and uses its keys as attributes in a score object

  resultKeys = Object.keys(results);
  // console.log("resultKeys is "+ resultKeys);
  resultKeys.forEach(function (resultKey, _) {
    score[resultKey] = 0;
    // console.log("score reskey is "+ resultKey);
  });

}

// for setting up each of the questions
function setupQuestion() {
  // find out the current percentage of completion and updates the css
  var progress = shift + currentQn * shift;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/" + numQuestions;

  // get the current questions content
  var qn = questions["question" + currentQn];
  var qnText = document.getElementById("question");
  qnText.innerText = qn.question;


  var numOptions = qn.numOptions;
  // updates each of the options for the current question
  var currOptNum = 0;
  for (; currOptNum < numOptions; currOptNum++) {


    var option = document.getElementById("option" + currOptNum);
    //todo: show div
    option.style.visibility = 'visible';
    var content = option.getElementsByClassName("content")[0];
    var qnOption = qn["option" + currOptNum];
    if (qnOption.type == "image") {
      var htmlStr = "<img src='" + qnOption.content + "'>";
      content.innerHTML = htmlStr;
    } else {
      var htmlStr = "<p>" + qnOption.content + "</p>";
      content.innerHTML = htmlStr;
    }
  }

  for (; currOptNum < maxOptions; currOptNum++) {
    //todo: hide div
    var option = document.getElementById("option" + currOptNum);
    option.style.visibility = 'hidden';
  }
  
}

// to unselect all of the options
function resetOptions() {
  var btn = document.getElementsByTagName("input");
  for (var i = 0; i < btn.length; i++) {
     btn[i].checked = false;
  }
}

// to select the option that is clicked
function select(element) {
  // check if the option requires an alert message to be sent
  // let ans = $("input[name=answer]:checked").val();
  // var displayAlert = questions["question" + currentQn]["option" + ans].isAlertOption;
  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];

  var btn = element.getElementsByTagName("input")[0];
  btn.checked = true;
  next();

}

function increasePersonalityPoints(qn, ans, personality) {
  // increase the score of the personality by the points gained value
  var pointsGained = qn["option" + ans].pointsGained;
  score[personality] += pointsGained;
}
// get the next questions, or display result if all questions were answered
function next() {
  // get the current select option
  var ans = $("input[name=answer]:checked").val();
  var qn = questions["question" + currentQn];
  // get the personality type for the option selected
  var personalityLst = qn["option" + ans].personality;

  // increase points for each personality
  for (i = 0; i < personalityLst.length; i++) {
    increasePersonalityPoints(qn, ans, personalityLst[i])
  }

  // increase the question count by 1
  currentQn++;
  // unselect all options
  resetOptions();
  // check if quiz is completed
  if (currentQn < numQuestions) {
    // if quiz not completed, setup the next question
    setupQuestion();
  } else {
    // else quiz is completed
    // assume that the highest score is the adventurous personality
    // and go through each of the personality type, and update the highest score and personality
    const highestAttributes = findHighest(score);
    var highestScore = highestAttributes[0];
    var highestPersonality = highestAttributes[1];
    var highestPersonalityImageLst = highestAttributes[2];

    setResultpage(results, highestPersonality, highestPersonalityImageLst);



    // set question count to 0 so that when the user wishes to retry, the quiz is on the right question count
    currentQn = 0;
    //reset score
    initScore(results);
    showPage(1);
  }
}

function findHighest(score) {

    var highestScore = -Number.MAX_VALUE;
    var highestPersonality = [];
    var highestPersonalityImageLst = [];

    // todo edge case: ties

    //normalizes scrore+get highest
    for (var [key, value] of Object.entries(score)) {
      score[key] = value * 100 / maxScores[key];
      value = score[key];
      if (highestScore == value) {
        highestPersonality.push(key);
        highestPersonalityImageLst.push(results[key][6]); // last index is the image
      } else if (highestScore < value) {
        highestScore = value;
        highestPersonality = [key];
        highestPersonalityImageLst = [results[key][6]];
      }
    }
    console.log("imageList is" + highestPersonalityImageLst);
        console.log("tets is" + ["sd"]);
    return [highestScore, highestPersonality, highestPersonalityImageLst];
}

/* Assumption - trait score is a percentage */
function getOptionNum(traitScore) {
   
  if (traitScore < 50) {
    return 0;
  } else if (traitScore < 70) {
    return 1;
  } else if (traitScore < 80) {
    return 2;
  } else {
    return 3;
  }
}

function addPictures(images) {
    // Adds pictures to result page
    for(var i = 0;i<images.length; i++){

            var a = document.createElement('a');

            var img = document.createElement('img');
            img.src = images[i];
            a.appendChild(img);

            document.getElementById('myImg').appendChild(a);
    }
}
function prettyWithAnd(highestPersonality) {
  /* returns a string of words in the list highestPersonality, with commas and ands. */
  /* assumes len highest personality >= 1 */
  var finalStr = "";
  if (highestPersonality.length == 1) {
    return highestPersonality[0];
  }
  if (highestPersonality.length == 2) {
    return highestPersonality[0] + " and " + highestPersonality[1]; 
  }
  for (var i = 0; i < highestPersonality.length - 1; i++) {
    finalStr = finalStr + highestPersonality[i] + ", ";
  }
  return finalStr + "and " + highestPersonality[highestPersonality.length - 1];
}


function highestInfoResults(results, highestPersonality) {
  // Gets the results string for the highest Personality traits
   var finalStr = "";
  for (var i = 0; i < highestPersonality.length; i++) {
    finalStr += results[highestPersonality[i]][resInfo1Ind] + "\n\n";
    finalStr += results[highestPersonality[i]][resInfo2Ind] + "\n\n";
    finalStr += "\n\n";
  }
  return finalStr;
}

function setResultpage(results, highestPersonality, highestPersonalityImgLst) {
    // get the description of the personality and update the result page
    document.getElementById("personality-type").innerText =
      "You are best suited for " + prettyWithAnd(highestPersonality) + "!"; //todo: chaneg to accomodate ties
    document.getElementById("myHighestTrait").innerText = highestInfoResults(results, highestPersonality);
    addPictures(highestPersonalityImgLst);

    // take care of other personalities

     for (const [i, [trait, traitScore]] of Object.entries(Object.entries(score))) {
          console.log(i);
          console.log(trait);
          document.getElementById("option" + i + "-title").textContent = "About " + trait;
          const optionNum = getOptionNum(traitScore);
          document.getElementById("option" + i + "-suitability").textContent = results[trait][optionNum];

          //set progress bar
          var barKey = "option"+ i + "-progress";
          var optionbar = document.getElementById(barKey);
          optionbar.style.width =  traitScore + "%";
          optionbar.innerText = traitScore.toFixed(1) + "%";

          //option0-info1 & 2
          if (optionNum != 0) {
            document.getElementById("option" + i + "-info1").textContent = results[trait][4];
            document.getElementById("option" + i + "-info2").textContent = results[trait][5];
          } else {
            document.getElementById("option" + i + "-info1").textContent = "";
            document.getElementById("option" + i + "-info2").textContent = "";
          }
     }
     
}

// bring the particular page into view.
// page 0: start page
// page 1: result page
// page 2: quiz
function showPage(num) {
  if (num == 0) {
        //hide toggle divs on results page
        var fsoResultDiv = document.getElementById("fso");
        console.log ("in show page");
        if (fsoResultDiv) {
            fsoResultDiv.style.display = 'none';
            console.log ("in fso results");
        }
        var fssResultDiv = document.getElementById("fss");
        if (fssResultDiv) {
            fssResultDiv.style.display = 'none';
        }
        var csResultDiv = document.getElementById("civil-service");
        if (csResultDiv) {
            csResultDiv.style.display = 'none';
        }

        var myImgDiv = document.getElementById('myImg');
        while (myImgDiv.hasChildNodes()) {
          myImgDiv.removeChild(myImgDiv.childNodes[0]); 
        }
        
 
  }
  var pages = document.getElementsByClassName("container");
  pages[0].style.display = "none";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  pages[num].style.display = "block";
}

function setUpTraitProgress(divName){
  var progress = shift + currentQn * shift;
  var progressbar = document.getElementById("progress");
  progressbar.style.width = progress + "%";
  progressbar.innerText = currentQn + 1 + "/" + numQuestions;
}
