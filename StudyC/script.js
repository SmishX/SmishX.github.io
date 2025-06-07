let userSMSInitialSelection = []; // To store the user's initial SMS selections
let userSMSFollowUpSelection = []; // To store the user's follow-up SMS selections
let currentProjectIndex = 0; // To track the current project
let data = []; // To store all SMS and AI report data
let surveyCompleted = false; // Flag to check if first survey is completed
let aiReportViewed = false; // Flag to check if AI report has been viewed
let allowNavigation = false; // Flag to allow navigation to the next project

// Data to be sent
let message_order = []; // To store the order of the messages
let consentAccepted = false; // To track if the consent form is accepted
let DemographicData = ["", "", "", "", "", "", "", "", ""]; // To store the demographic data
let firstSurveyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // To store the first survey data
let secondSurveyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // To store the second survey data
let TrustQuestionData = [0]; // To store the user's trust question data
let ProblemSurveyData = ""; // To store the user's problem survey data

// Time to be sent
let backgroundStartTime = -1; // To track the start time of the background intro
let backgroundEndTime = -1; // To track the end time of the background intro
let demographicStartTime = -1; // To track the start time of the demographic survey
let demographicEndTime = -1; // To track the end time of the demographic survey
let menuPageStartTime = -1; // To track the start time of the menu page
let menuPageEndTime = -1; // To track the end time of the menu page
let menu1StartTime = -1; // To track the start time of the menu1
let menu1EndTime = -1; // To track the end time of the menu1
let tutorial1StartTime = -1; // To track the start time of the tutorial1
let tutorial1EndTime = -1; // To track the end time of the tutorial1
let tutorial2StartTime = -1; // To track the start time of the tutorial2
let tutorial2EndTime = -1; // To track the end time of the tutorial2
let tutorial3StartTime = -1; // To track the start time of the tutorial3
let tutorial3EndTime = -1; // To track the end time of the tutorial3
let menu2StartTime = -1; // To track the start time of the menu2
let menu2EndTime = -1; // To track the end time of the menu2
let firstSurveyStartTime = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // To track the start time of the first survey
let firstSurveyEndTime = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // To track the end time of the first survey
let secondSurveyStartTime = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // To track the start time of the second survey
let secondSurveyEndTime = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // To track the end time of the second survey
let menu3StartTime = -1; // To track the start time of the menu3
let menu3EndTime = -1; // To track the end time of the menu3
let menu4StartTime = -1; // To track the start time of the menu4
let menu4EndTime = -1; // To track the end time of the menu4
let TrustQuestionStartTime = -1; // To track the start time of the trust question
let TrustQuestionEndTime = -1; // To track the end time of the trust question
let problemSurveyStartTime = -1; // To track the start time of the problem survey
let problemSurveyEndTime = -1; // To track the end time of the problem survey


let initialSurveyStartTime; // To track the start time of the initial survey
let initialSurveyEndTime; // To track the end time of the initial survey
let followUpSurveyStartTime; // To track the start time of the follow-up survey
let followUpSurveyEndTime; // To track the end time of the follow-up survey
let surveyTimes = []; // To store the time spent on each survey

// Function to show the consent form and handle the acceptance
function showConsentForm() {
    // Initialize the variables
    userSMSInitialSelection = []; 
    userSMSFollowUpSelection = []; 
    currentProjectIndex = 0; 
    data = []; 
    surveyCompleted = false; 
    aiReportViewed = false; 

    const consentForm = document.getElementById('consent');
    const instructions1 = document.getElementById('instructions1');
    const instructions2 = document.getElementById('instructions2');
    const instructions3 = document.getElementById('instructions3');
    //const instructions4 = document.getElementById('instructions4');
    //const instructions5 = document.getElementById('instructions5');
    const mainContent = document.getElementById('mainContent');
    const BackGround = document.getElementById('backgroundIntro');
    const MenuPage = document.getElementById('MenuPage');
    const Menu1 = document.getElementById('Menu1');
    const Menu2 = document.getElementById('Menu2');

    // Display the consent form and hide other content
    consentForm.style.display = 'block';
    instructions1.style.display = 'none';
    instructions2.style.display = 'none';
    instructions3.style.display = 'none';
    //instructions4.style.display = 'none';
    //instructions5.style.display = 'none';
    mainContent.style.display = 'none';
    BackGround.style.display = 'none';
    MenuPage.style.display = 'none';
    Menu1.style.display = 'none';

    // Handle the accept button click
    document.getElementById('acceptConsent').addEventListener('click', function() {
        consentForm.style.display = 'none';
        BackGround.style.display = 'block';
        backgroundStartTime = new Date().getTime(); // Start time
        consentAccepted = true;
    });   
    
    document.getElementById('background-next-button').addEventListener('click', function() {
        BackGround.style.display = 'none'; // Hide background
        backgroundEndTime = new Date().getTime(); // End time
        showPersonalInfoForm(); // Show the personal information form
    });
}

// Function to show the personal information form
function showPersonalInfoForm() {
    let currentURL = window.location.href;
    // https://joymicro.github.io/?PROLIFIC_PID=xxxxxxx&STUDY_ID=xxxxxxxx&SESSION_ID=xxxxxxx
    // Extract the Prolific ID
    let prolificID = currentURL.match(/PROLIFIC_PID=([^&]*)/);
    if (prolificID === null) {
        prolificID = "N/A";
        document.getElementById('prolificIDLabel').display = "block";
        document.getElementById('prolificID').display = "block";
    }
    else {
        document.getElementById('prolificIDLabel').innerText = "Please verify your Prolific ID: ";
        //<input type="text" id="prolificID" name="prolificID" placeholder="Enter your Prolific ID">
        // Show the Prolific ID in the input bar and allow the user to change it
        document.getElementById('prolificID').value = prolificID[1];
        document.getElementById('prolificIDLabel').display = "block";
        document.getElementById('prolificID').display = "block";
    }
    const personalInfoForm = document.getElementById('personalInfoForm');
    const backgroundIntro = document.getElementById('backgroundIntro');
    const MenuPage = document.getElementById('MenuPage');
    const submitQuestionButton = document.getElementById('submitPersonalInfo');

    submitQuestionButton.style.marginLeft = '60'; 
    
    personalInfoForm.style.display = 'block';
    demographicStartTime = new Date().getTime(); // Start time
    backgroundIntro.style.display = 'none'; // Hide the background intro

    // Handle the display of the "Other" input field based on selection
    document.getElementById('techExperience').addEventListener('change', function(event) {
        event.preventDefault();
        const otherOccupationDiv = document.getElementById('otherField');
        const occupationValue = this.value;

        if (occupationValue === 'other') {
            // Show the input field if "Other" is selected
            otherOccupationDiv.style.display = 'block';
        } else {
            // Hide the input field for any other selection
            otherOccupationDiv.style.display = 'none';
            // Clear the input field
            document.getElementById('otherText').value = '';
        }
    });

    document.getElementById('backPersonalInfo').addEventListener('click', function(event) {
        event.preventDefault();
        personalInfoForm.style.display = 'none';
        backgroundIntro.style.display = 'block';
    });

    // Handle the form submission
    document.getElementById('submitPersonalInfo').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
        // Validate that all fields are filled out
        const form = document.getElementById('personalInfo');
        if (form.checkValidity()) {
            const personalData = {
                prolificID: document.getElementById('prolificID').value,
                age: document.getElementById('age').value,
                gender: document.getElementById('gender').value,
                race: document.getElementById('race').value,
                education: document.getElementById('education').value,
                techExperience: document.getElementById('techExperience').value,
                //otherOccupation: document.getElementById('otherText').value || null, // Save only if "Other" is filled
                mobileUsage: document.getElementById('mobileUsage').value,
                phishingExperience: document.getElementById('phishingExperience').value,
                trustAI: document.getElementById('trustAI').value
            };

            // Save the demographic data
            DemographicData[0] = personalData.prolificID;
            DemographicData[1] = personalData.age;
            DemographicData[2] = personalData.gender;
            DemographicData[3] = personalData.race;
            DemographicData[4] = personalData.education;
            DemographicData[5] = personalData.techExperience;
            //DemographicData[6] = personalData.otherOccupation;
            DemographicData[6] = personalData.mobileUsage;
            DemographicData[7] = personalData.phishingExperience;
            DemographicData[8] = personalData.trustAI;

            // Proceed to the consent form after collecting personal information
            personalInfoForm.style.display = 'none';
            MenuPage.style.display = 'block';
            demographicEndTime = new Date().getTime(); // End time
            showMenuInstructions() 
        } else {
            alert("Please fill out all fields before continuing.");
        }
    });
}


function showMenuInstructions() {
    const MenuPage = document.getElementById('MenuPage');
    const Menu1 = document.getElementById('Menu1');
    const Menu2 = document.getElementById('Menu2');
    const instructions1 = document.getElementById('instructions1');
    const instructions2 = document.getElementById('instructions2');
    const instructions3 = document.getElementById('instructions3');
    //const instructions4 = document.getElementById('instructions4');
    //const instructions5 = document.getElementById('instructions5');
    const mainContent = document.getElementById('mainContent');
    const container = document.getElementById('container');

    MenuPage.style.display = 'block';
    menuPageStartTime = new Date().getTime(); // Start time

    document.getElementById('Menu_next_button0').addEventListener('click', function() {
        MenuPage.style.display = 'none'; 
        menuPageEndTime = new Date().getTime(); // End time
        Menu1.style.display = 'block';
        menu1StartTime = new Date().getTime(); // Start time
    });

    document.getElementById('Menu_next_button1').addEventListener('click', function() {
        Menu1.style.display = 'none'; 
        menu1EndTime = new Date().getTime(); // End time
        instructions1.style.display = 'block'; 
        tutorial1StartTime = new Date().getTime(); // Start time
    });

    document.getElementById('next1-button').addEventListener('click', function() {
        instructions1.style.display = 'none';
        tutorial1EndTime = new Date().getTime(); // End time
        instructions2.style.display = 'block';
        tutorial2StartTime = new Date().getTime(); // Start time
    });

    document.getElementById('next2-button').addEventListener('click', function() {
        instructions2.style.display = 'none';
        tutorial2EndTime = new Date().getTime(); // End time
        instructions3.style.display = 'block';
        tutorial3StartTime = new Date().getTime(); // Start time
    });


    document.getElementById('back1-button').addEventListener('click', function() {
        document.getElementById('instructions1').style.display = 'none';
        document.getElementById('Menu1').style.display = 'block';
    });
    
    document.getElementById('back2-button').addEventListener('click', function() {
        document.getElementById('instructions2').style.display = 'none';
        document.getElementById('instructions1').style.display = 'block';
    });
    
    document.getElementById('back3-button').addEventListener('click', function() {
        document.getElementById('instructions3').style.display = 'none';
        document.getElementById('instructions2').style.display = 'block';
    });

    document.getElementById('Menu_back_button0').addEventListener('click', function() {
       MenuPage.style.display = 'none';
       showPersonalInfoForm();
    });

    document.getElementById('Menu_back_button1').addEventListener('click', function() {
        Menu1.style.display = 'none';
        MenuPage.style.display = 'block';
    });

    document.getElementById('Menu_back_button2').addEventListener('click', function() {
        Menu2.style.display = 'none';
        instructions3.style.display = 'block';
    });

    document.getElementById('next3-button').addEventListener('click', function() {
        document.getElementById('instructions3').style.display = 'none';
        tutorial3EndTime = new Date().getTime(); // End time
        document.getElementById('Menu2').style.display = 'block';
        menu2StartTime = new Date().getTime(); // Start time
    });

    // Handle the start survey button click in the instructions
    document.getElementById('Menu_next_button2').addEventListener('click', function() {
        Menu2.style.display = 'none';
        menu2EndTime = new Date().getTime(); // End time
        instructions1.style.display = 'none';
        instructions2.style.display = 'none';
        instructions3.style.display = 'none';
        //instructions4.style.display = 'none';
        //instructions5.style.display = 'none';
        mainContent.style.display = 'block';
        container.style.display = 'block';
        loadCSV().then(csvData => {
            data = csvData;
            // Reorder the data randomly
            data = shuffle(data);
            // Get the shuffled messages
            message_order = data.map(item => item.index);
            message_order = message_order.join();
            // Only keep the number digits and ","
            message_order = message_order.replace(/[^0-9,]/g, '');
            loadNextProject(); // Load the first project
        });
    });
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

// Function to load CSV data
function loadCSV() {
    return fetch('analysis_report.csv')
        .then(response => response.text())
        .then(text => {
            const rows = text.trim().split('\n');
            const header = rows.shift(); // Remove header row
            return rows.map(row => {
                let [sender_name, sender_number, message, ai_report, legitimacy, index, detailed_report, img_path] = row.split('","').map(item => item.replace(/^"|"$/g, ''));
                img_path = img_path.replace(/"/g, '');
                return { sender_name, sender_number, message, ai_report, legitimacy , index, detailed_report, img_path};
            });
        });
}


// Function to load the next project (SMS + Survey + AI Report + Second Survey)
function loadNextProject() {

    const item = data[currentProjectIndex];
    const screen = document.getElementById('screen');

    // Clear previous content
    screen.innerHTML = '';

    // Reset flags
    surveyCompleted = false;
    aiReportViewed = false;

    // Update sender name, user number and legitimacy
    const senderNameElement = document.querySelector('.sender-name');
    const senderNumberElement = document.querySelector('.sender-number');
    const legitimacyElement = document.querySelector('.legitimacy');
    senderNameElement.innerText = item.sender_name;
    senderNumberElement.innerText = item.sender_number;
    legitimacyElement.innerText = item.legitimacy;

    // Create the time stamp
    const timeStamp = document.createElement('div');
    timeStamp.className = 'time-stamp';
    timeStamp.innerText = `Today 10:30 AM - SMS ${currentProjectIndex + 1}`;

    // Create the message container
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    // Create the message bubble (with tail)
    const messageBubble = document.createElement('div');
    messageBubble.className = 'message-bubble'; // This class applies the CSS with the tail
    messageBubble.innerText = item.message;

    // Create the AI button
    const aiButton = document.createElement('button');
    aiButton.className = 'ai-button';
    aiButton.innerText = 'AI';
    aiButton.onclick = () => {
        if (surveyCompleted) {
            showAnalysisBubble(item.ai_report);
        } else {
            showCustomAlert('Please complete the survey question before viewing the AI report.');
        }
    };

    // Create the loading spinner
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';
    loadingSpinner.id = 'loadingSpinner';

    // Append the bubble, button, and spinner to the container
    messageContainer.appendChild(messageBubble);
    messageContainer.appendChild(aiButton);
    messageContainer.appendChild(loadingSpinner);

    // Append the time stamp and message container to the screen
    screen.appendChild(timeStamp);
    screen.appendChild(messageContainer);

    // Show the first survey question after 0ms
    showInitialSurvey();
    
}

// Function to show the initial survey question
function showInitialSurvey() {
    const survey = document.getElementById('survey');
    survey.innerHTML = ''; // Clear previous survey

    const question = document.createElement('p');
    question.innerText = "Do you think this message is a legitimate message or a fraudulent phishing message?";
    
    const legitButton = document.createElement('button');
    legitButton.className = 'legitimate';
    legitButton.innerText = 'Legitimate';
    legitButton.onclick = () => handleSelection(legitButton, "Legitimate");

    const phishingButton = document.createElement('button');
    phishingButton.className = 'phishing';
    phishingButton.innerText = 'Fraudulent';
    phishingButton.onclick = () => handleSelection(phishingButton, "Phishing");
    
    survey.appendChild(question);
    survey.appendChild(legitButton);
    survey.appendChild(phishingButton);

    
    if (currentProjectIndex !== 0) {
        survey.classList.remove('slide-out-up'); // Remove slide-out class if not the first question
    }

    // time
    initialSurveyStartTime = new Date().getTime() + 500; // Start timr, add 500ms for the animation
    firstSurveyStartTime[currentProjectIndex] = new Date().getTime() + 500; // Start time
    // Add animation for sliding in the first question
    survey.classList.add('slide-in-up');
}

/// Function to handle user selection and allow changing the selection
function handleSelection(button, selection) {
    const buttons = button.parentElement.querySelectorAll('button');

    // Remove any existing checkmarks
    buttons.forEach(btn => {
        btn.querySelector('.checkmark')?.remove();
        btn.disabled = false; // Re-enable all buttons for changing selection
    });

    // Add checkmark to the newly selected button
    const checkmark = document.createElement('span');
    checkmark.className = 'checkmark';
    checkmark.innerText = '✔';
    button.appendChild(checkmark);

    if (selection === "Legitimate") {
        userSMSInitialSelection.push(false);
        firstSurveyData[currentProjectIndex] = 1;
    }
    else if (selection === "Phishing") {
        userSMSInitialSelection.push(true);
        firstSurveyData[currentProjectIndex] = 2;
    }

    // Disable the current button
    buttons.forEach(btn => btn.disabled = false); // Allow changing the selection

    // If one of the buttons is clicked, survey is completed
    surveyCompleted = true;
}

// Function to show the AI analysis bubble with loading animation and typing effect
function showAnalysisBubble(aiReport) {
    // Stop tracking time for the initial survey
    initialSurveyEndTime = new Date().getTime(); // End time
    firstSurveyEndTime[currentProjectIndex] = new Date().getTime(); // End time
    const initialSurveyTimeSpent = (initialSurveyEndTime - initialSurveyStartTime) / 1000; // time in seconds
    // Store the initial survey time
    surveyTimes.push({
        smsIndex: currentProjectIndex,
        surveyType: 'Initial Survey',
        timeSpent: initialSurveyTimeSpent
    });
    
    const survey = document.getElementById('survey');
    survey.classList.remove('slide-in-up');
    survey.classList.add('slide-out-up');

    const screen = document.getElementById('screen');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // Show loading spinner and hide the AI button
    loadingSpinner.style.display = 'block';
    screen.querySelector('.ai-button').style.display = 'none';

    // Simulate AI processing delay
    setTimeout(() => {
        loadingSpinner.style.display = 'none'; // Hide spinner

        // Create the AI analysis bubble
        const aiBubble = document.createElement('div');
        aiBubble.className = 'ai-bubble';
        aiBubble.style.opacity = '1'; // Ensure it's visible
        screen.appendChild(aiBubble);

        // Simulate typing effect
        typeText(aiBubble, aiReport);

        // Mark AI report as viewed
        aiReportViewed = true;

    }, 3000); // 3-second delay to simulate processing
}

// Function to simulate typing effect
function typeText(element, text) {

    element.style.display = 'block'; // Show the bubble
    element.style.opacity = '1'; // Ensure it's visible
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
        }
    }, 20); // Type one letter every 20ms

    setTimeout(() => {
        // Show the follow-up survey after typing is complete
        showFollowUpSurvey();
    }, text.length * 20); // Wait for typing to finish before showing follow-up survey   
}



// Function to open modal with enlarged image
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

// Function to close modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Function to show the follow-up survey question
function showFollowUpSurvey() {
    /*
    if (!aiReportViewed) {
        showCustomAlert('Please view the AI report before completing the follow-up survey.');
        return;
    }*/

    // Record the start time for the follow-up survey
    followUpSurveyStartTime = new Date().getTime() + 500; // Start time, add 500ms for the animation
    secondSurveyStartTime[currentProjectIndex] = new Date().getTime() + 500; // Start time

    const survey = document.getElementById('survey');

    setTimeout(() => {
        
        survey.innerHTML = ''; // Clear previous survey
        //Disable the initial survey buttons
        survey.querySelectorAll('button').forEach(btn => {
            btn.disabled = true;
        });

        const followUpQuestion = document.createElement('p');
        //followUpQuestion.innerText = "After reading the AI report, do you now believe this message is legitimate or phishing?";
        // Strongly show the "After reading the AI report", normal show the "do you now believe this message is legitimate or phishing?"
        followUpQuestion.innerHTML = "<strong>After reading the AI report</strong>, do you now believe this message is legitimate or fraudulent?";

        const followUpLegitButton = document.createElement('button');
        followUpLegitButton.className = 'legitimate';
        followUpLegitButton.innerText = 'Legitimate';
        followUpLegitButton.onclick = () => handleFollowUpSelection(followUpLegitButton, 'Legitimate');

        const followUpPhishingButton = document.createElement('button');
        followUpPhishingButton.className = 'phishing';
        followUpPhishingButton.innerText = 'Fraudulent';
        followUpPhishingButton.onclick = () => handleFollowUpSelection(followUpPhishingButton, 'Phishing');
        
        survey.appendChild(followUpQuestion);
        survey.appendChild(followUpLegitButton);
        survey.appendChild(followUpPhishingButton);

        // Remove the slide-out class and add slide-in for the second question
        survey.classList.remove('slide-out-up');
        survey.classList.add('slide-in-up');

    }, 500); // Wait for the slide-out animation to complete before showing the next question

}

/// Function to handle follow-up user selection
function handleFollowUpSelection(button, selection) {
    const checkmark = document.createElement('span');
    checkmark.className = 'checkmark';
    checkmark.innerText = '✔';
    button.appendChild(checkmark);

    if (selection === "Legitimate") {
        userSMSFollowUpSelection.push(false);
        secondSurveyData[currentProjectIndex] = 1;
    }
    else if (selection === "Phishing") {
        userSMSFollowUpSelection.push(true);
        secondSurveyData[currentProjectIndex] = 2;
    }

    // Disable the buttons after selection
    button.parentElement.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
    });

    // Stop tracking time for the follow-up survey
    followUpSurveyEndTime = new Date().getTime(); // End time
    secondSurveyEndTime[currentProjectIndex] = new Date().getTime(); // End time
    const followUpSurveyTimeSpent = (followUpSurveyEndTime - followUpSurveyStartTime) / 1000; // time in seconds

    // Store the follow-up survey time
    surveyTimes.push({
        smsIndex: currentProjectIndex,
        surveyType: 'Follow-Up Survey',
        timeSpent: followUpSurveyTimeSpent
    });
    // Show the completion modal
    showCompletionModal();
}

// Function to show the completion modal with "Next" button
function showCompletionModal() {
    const modal = document.getElementById('completionModal');
    modal.style.display = 'block';
    
    document.getElementById('nextProjectButton').onclick = function() {
        modal.style.display = 'none';
        // Mark project as completed and load the next one
        currentProjectIndex++;
        surveyCompleted = false; // Reset survey completion flag
        if (currentProjectIndex === data.length) {
            showExtraSurvey();
            return;
        }
        loadNextProject();
    }

    document.getElementById('backProjectButton').onclick = function() {
        modal.style.display = 'none';
        showFollowUpSurvey();
    }
}

// Function to show the custom alert modal
function showCustomAlert(message) {
    const modal = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message; // Set the custom message
    modal.style.display = 'block';
    
    // Handle the close button click
    document.getElementById('closeAlert').onclick = function() {
        modal.style.display = 'none';
    }
}


let answers = []; // To store the user's answers
let scores = []; // To store the user's scores

function showExtraSurvey() {
    // Hide the screen and show the questions
    const screen = document.getElementById('screen');
    const container = document.getElementById('container');
    const completionModal = document.getElementById('completionModal');
    screen.innerHTML = ''; // Clear the screen
    container.style.display = 'none';
    completionModal.style.display = 'none';
    showTrustQuestion(); // Show the trust question first
}



function showTrustQuestion() {
    const otherQuestions = [
        { text: "How much do you trust the AI agent's judgement on SMS messages?", options: ["Very distrusting", "Somewhat distrusting", "Neutral", "Somewhat trusting", "Very trusting"] },
    ];

    // Hide the screen and show the questions
    const screen = document.getElementById('screen');
    const container = document.getElementById('container');
    const survey = document.getElementById('survey');
    const completionModal = document.getElementById('completionModal');
    const customizedContainer = document.getElementById('customizedQuestionContainer');
    screen.innerHTML = ''; // Clear the screen
    screen.style.display = 'none';
    container.style.display = 'none';
    survey.style.display = 'block';
    completionModal.style.display = 'none';
    const container_Q = document.getElementById('container_Q');
    container_Q.style.display = 'none';
    customizedContainer.style.display = 'none';

    const container_other_Q = document.getElementById('container_other_Q');
    container_other_Q.style.display = 'block';

    let QuestionIndex = 0;
    let selectedOption = null;

    const other_questionText = document.getElementById("other-question-text");
    const other_optionsContainer = document.getElementById("other-options-container");
    const other_nextButton = document.getElementById("other-next-button");
    other_nextButton.style.display = 'block';
    other_nextButton.innerText = 'Next';
    TrustQuestionStartTime = new Date().getTime(); // Start time

    function renderQuestion() {
        const question = otherQuestions[QuestionIndex];
        
        other_questionText.innerHTML = `Question: ${question.text}`;
        
        other_optionsContainer.innerHTML = ""; // clear previous options
        other_nextButton.disabled = true; // disable "Next" button until an option is selected
        selectedOption = null; // reset the selected option

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectOption(optionDiv, index);
            other_optionsContainer.appendChild(optionDiv);
        });
    }

    function selectOption(optionDiv, index) {
        const options = document.querySelectorAll(".option");
        options.forEach(option => option.classList.remove("selected"));
        
        optionDiv.classList.add("selected");
        selectedOption = index; // store the selected option
        other_nextButton.disabled = false; // enable "Next" 
    }

    function handleNextClick() {
        // Save the answer for the current question
        answers.push({
            questionIndex: QuestionIndex,
            selectedOptionIndex: selectedOption,
            selectedOptionText: otherQuestions[QuestionIndex].options[selectedOption]
        });

        scores.push(selectedOption + 1); // Add 1 to the selected option index to get the score
        TrustQuestionData[QuestionIndex] = otherQuestions[QuestionIndex].options[selectedOption];
        
        if (QuestionIndex < otherQuestions.length - 1) {
            QuestionIndex++;
            if (QuestionIndex === otherQuestions.length - 1) {
                other_nextButton.innerText = 'Finish';
            }
            renderQuestion();
        } else {
            // This is the last question
            TrustQuestionEndTime = new Date().getTime(); // End time
            showComplainQuestion();
        }
    }

    // Add single event listener
    other_nextButton.onclick = handleNextClick;
    
    // Render the first question
    renderQuestion();
}


function showComplainQuestion() {
    const complainContainer = document.getElementById('complainQuestionContainer');
    const questionText = document.getElementById('complainQuestionText');
    const submitButton = document.getElementById('complainQuestionSubmit');
    const explanationInput = document.getElementById('complainQuestionInput');
    const container_Q = document.getElementById('container_Q');
    const other_questions = document.getElementById('container_other_Q');
    const customizedContainer = document.getElementById('customizedQuestionContainer');

    // Hide the previous content
    container_Q.style.display = 'none';
    customizedContainer.style.display = 'none';
    other_questions.style.display = 'none';

    explanationInput.value = ""; // Clear the input field

    // Set the customized question text
    questionText.innerHTML = "In this study, did you encounter any technical problems or have any  suggestions for this <strong>survey</strong>?";

    // Show the complain question container
    complainContainer.style.display = 'block';
    problemSurveyStartTime = new Date().getTime(); // Start time

    // Handle the submit button click

    submitButton.onclick = () => {
        const explanation = explanationInput.value.trim();
        problemSurveyEndTime = new Date().getTime(); // End time
        if (explanation) {
            ProblemSurveyData = explanation;
            showThankYouMessage();
        } else {
            ProblemSurveyData = "No response";
            showThankYouMessage();
        }
    }
}

/*
function getRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}
    */



// Function to show a thank you message
function showThankYouMessage() {
    //let randomCode = getRandomCode(8);
    
    // Hide the survey and show the thank you message
    const thankYouContainer = document.getElementById('thank-you-container');
    const container_Q = document.getElementById('container_Q');
    const customizedContainer = document.getElementById('customizedQuestionContainer');
    const complainContainer = document.getElementById('complainQuestionContainer');

    // Hide the previous content
    container_Q.style.display = 'none';
    customizedContainer.style.display = 'none';
    complainContainer.style.display = 'none';

    sendSelectionsByEmail();
}

(function() {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.head.appendChild(script);
})();


// Function to send the user selections by email automatically using EmailJS
function sendSelectionsByEmail() {
    if (!window.config) {
        const scr = document.createElement('script');
        scr.src = 'config.js';
        document.head.appendChild(scr);

        scr.onload = () => {
            sendEmailWithConfig();
        };

        scr.onerror = () => {
            alert('Failed to load config.js.');
        };
    } else {
        sendEmailWithConfig();
    }
}

function sendEmailWithConfig() {
    const service_id = window.config.serviceID;
    const template_id = window.config.templateID;
    const user_id = window.config.userID;
    const thankYouContainer = document.getElementById('thank-you-container');

    // Check if completed
    // If one of DemographicData is ""
    let ifDemographicDataCompleted = true;
    let ifFirstSurveyDataCompleted = true;
    let ifSecondSurveyDataCompleted = true;
    let ifTrustCompleted = true;

    for (let i = 0; i < DemographicData.length; i++) {
        if (DemographicData[i] === "") {
            ifDemographicDataCompleted = false;
        }
    }

    for (let i = 0; i < firstSurveyData.length; i++) {
        if (firstSurveyData[i] === 0) {
            ifFirstSurveyDataCompleted = false;
        }
    }

    for (let i = 0; i < secondSurveyData.length; i++) {
        if (secondSurveyData[i] === 0) {
            ifSecondSurveyDataCompleted = false;
        }
    }


    for (let i = 0; i < TrustQuestionData.length; i++) {
        if (TrustQuestionData[i] === 0) {
            ifTrustCompleted = false;
        }
    }

    if (consentAccepted === false) {
        alert("You did not accept the consent form. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }

    else if (ifDemographicDataCompleted === false) {
        alert("You did not fill out all the demographic information. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }
 
    else if (ifFirstSurveyDataCompleted === false) {
        alert("It seems that you skipped some questions in the survey. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }   

    else if (ifSecondSurveyDataCompleted === false) {
        alert("It seems that you skipped some questions in the survey. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }


    else if (ifTrustCompleted === false) {
        alert("It seems that you skipped some questions in the survey. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }



    // Save in JSON: consentAccepted, DemographicData, firstSurveyData, secondSurveyData, ProblemSurveyData
    else {
        // Deal with time data
        let backgroundTurorialTime = (menu2EndTime - backgroundStartTime) / 1000;
        let firstSurveyTime = firstSurveyEndTime.map((item, index) => (item - firstSurveyStartTime[index]) / 1000);
        let secondSurveyTime = secondSurveyEndTime.map((item, index) => (item - secondSurveyStartTime[index]) / 1000);
        let totalTime = (problemSurveyEndTime - backgroundStartTime) / 1000;

        currentURL = window.location.href;
        
        const sendUserTime = JSON.stringify({ totalTime, backgroundTurorialTime, firstSurveyTime, secondSurveyTime, backgroundStartTime, backgroundEndTime, demographicStartTime, demographicEndTime, menuPageStartTime, menuPageEndTime, menu1StartTime, menu1EndTime, tutorial1StartTime, tutorial1EndTime, tutorial2StartTime, tutorial2EndTime, tutorial3StartTime, tutorial3EndTime, menu2StartTime, menu2EndTime, firstSurveyStartTime, firstSurveyEndTime, secondSurveyStartTime, secondSurveyEndTime, menu3StartTime, menu3EndTime,  menu4StartTime, menu4EndTime, TrustQuestionStartTime, TrustQuestionEndTime, problemSurveyStartTime, problemSurveyEndTime});
        const sendUserData = JSON.stringify({ message_order, currentURL, consentAccepted, DemographicData, firstSurveyData, secondSurveyData, TrustQuestionData, ProblemSurveyData });
        // Combine the sendUserData and sendUserTime
        const sendData = JSON.stringify({ sendUserData, sendUserTime });  
        var data = {
            service_id: service_id,
            template_id: template_id,
            user_id: user_id,
            template_params: {
                UserData: sendData
            }
        };
    
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            document.getElementById('completionCode').innerText = "C17V95L4";
            // Automatically close the window after sending the email
            thankYouContainer.style.display = 'block';
            document.getElementById('prolificCompletion').addEventListener('click', function() {
                // redirect to https://app.prolific.com/submissions/complete?cc=C17V95L4
                allowNavigation = true;
                window.location.href = "https://app.prolific.com/submissions/complete?cc=C17V95L4";
            });

        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }   
}

// Function to apply zoom based on screen size
function applyZoomForSmallScreens() {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 1366) { // 13-inch screen or smaller
        document.body.style.zoom = "0.8"; 
    } else if (screenWidth > 1366 && screenWidth <= 1600) { // 14-inch screen
        document.body.style.zoom = "0.85"; 
    } else if (screenWidth > 1600 && screenWidth <= 1680) { // 15-inch screen
        document.body.style.zoom = "0.9"; 
    } else {
        document.body.style.zoom = "1.0"; 
    }
}



// Initially disable the button and apply grey styling
document.getElementById('acceptConsent').disabled = false;

/*
// Enable the 'Accept' button only when the checkbox is checked
document.getElementById('readConsent').addEventListener('change', function() {
    const acceptButton = document.getElementById('acceptConsent');
    if (this.checked) {
        acceptButton.disabled = false; // Enable the button
    } else {
        acceptButton.disabled = true;  // Disable the button if unchecked
    }
});
*/


// Call the function to show the consent form on page load
showConsentForm();
// Call the function to apply zoom based on screen size
window.onload = applyZoomForSmallScreens;

// Apply zoom when the window is resized
window.addEventListener('resize', applyZoomForSmallScreens);

(function() {
    // Prevent the user from leaving the page
    window.history.pushState(null, '', window.location.href);

    // Handle the back button
    window.addEventListener('popstate', function(event) {
        if (!allowNavigation) {
            // Ask the user to confirm before leaving the page
            let confirmation = confirm("Are you sure you want to leave the page? Your progress will be lost.");
            if (confirmation) {
                window.history.back(); // Go back to the previous page
            } else {
                // Prevent the user from leaving the page
                window.history.pushState(null, '', window.location.href);
            }
        }
    });

    window.addEventListener('beforeunload', function(event) {
        if (!allowNavigation) {
            // Cancel the event as stated by the standard.
            event.preventDefault();
            // Chrome requires returnValue to be set.
            event.returnValue = 'Are you sure you want to leave the page? Your progress will be lost.';
        }
    });
})();
