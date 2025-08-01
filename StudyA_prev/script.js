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
let DemographicData = ["", "", "", "", "", "", "", "", "", ""]; // To store the demographic data
let firstSurveyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // To store the first survey data
let secondSurveyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // To store the second survey data
let susSurveyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // To store the SUS survey data
let if_detailed_report = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // To store the detailed report data
let susScoreData = -1; // To store the SUS score data
let concernsSurveyData = ""; // To store the user's concerns survey data
let praiseSurveyData = ""; // To store the user's praise survey data
let case101SurveyData = ""; // To store the user's case 101 data
let case110SurveyData = ""; // To store the user's case 110 data
let AbilityTrustQuestionData = [0, 0, 0, 0]; // To store the user's ability trust question data
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
let clickDetailStartTime = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // To track the start time of clicking the detail button
let secondSurveyEndTime = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // To track the end time of the second survey
let menu3StartTime = -1; // To track the start time of the menu3
let menu3EndTime = -1; // To track the end time of the menu3
let susSurveyStartTime = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // To track the start time of the SUS survey
let susSurveyEndTime = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; // To track the end time of the SUS survey
let concernsSurveyStartTime = -1; // To track the start time of the concerns survey
let concernsSurveyEndTime = -1; // To track the end time of the concerns survey
let praiseSurveyStartTime = -1; // To track the start time of the praise survey
let praiseSurveyEndTime = -1; // To track the end time of the praise survey
let menu4StartTime = -1; // To track the start time of the menu4
let menu4EndTime = -1; // To track the end time of the menu4
let case101StartTime = -1; // To track the start time of the case 101
let case101EndTime = -1; // To track the end time of the case 101
let case110StartTime = -1; // To track the start time of the case 110
let case110EndTime = -1; // To track the end time of the case 110
let AbilityTrustQuestionStartTime = -1; // To track the start time of the ability trust question
let AbilityTrustQuestionEndTime = -1; // To track the end time of the ability trust question
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
                smishingAbility: document.getElementById('smishingAbility').value,  
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
            DemographicData[8] = personalData.smishingAbility;
            DemographicData[9] = personalData.trustAI;

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
        // Create a button to show more details, in .css file, the classname is .more-details-button
        const detailsButton = document.createElement('button');
        detailsButton.className = 'more-details-button';
        detailsButton.innerText = 'Click to see more details of the AI report';
        detailsButton.onclick = () => {
            clickDetailStartTime[currentProjectIndex] = new Date().getTime(); // Start time
            if_detailed_report[currentProjectIndex] = 1;
            showDetails();
        }
        element.appendChild(detailsButton);
        // Show the follow-up survey after typing is complete
        showFollowUpSurvey();
    }, text.length * 20); // Wait for typing to finish before showing follow-up survey   
}

// Function to show the details of the AI report
function showDetails() {
    const item = data[currentProjectIndex];
    // Create a section to display detailed analysis
    const detailedSection = document.createElement('div');
    detailedSection.className = 'detailed-section';

    if (item.img_path !== "" && item.img_path.startsWith("img/")) {
        // Add webpage screenshot
        const screenshot = document.createElement('img');
        screenshot.src = item.img_path;
        screenshot.alt = 'Webpage Screenshot';
        screenshot.className = 'clickable-image';
        screenshot.onclick = () => openImageModal(screenshot.src);
        detailedSection.appendChild(screenshot);
    }
    // Add more detailed text analysis
    const detailedText = document.createElement('p');
    detailedText.innerHTML = item.detailed_report; // Assuming 'detailed_report' holds the text
    detailedSection.appendChild(detailedText);

    // Append detailed section to the screen
    const screen = document.getElementById('screen');
    screen.appendChild(detailedSection);
    // screen scroll down 300px smoothly
    screen.scrollBy({
        top: 300,
        behavior: 'smooth'
    });
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

    // Show the survey container
    const container_Q = document.getElementById('container_Q');
    container_Q.style.display = 'block';

    // Survey questions
    const SystemUsibilityScale = [
        { text: "I think that I would like to use this system frequently.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }, 
        { text: "I found the system unnecessarily complex.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "I thought the system was easy to use.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "I think that I would need the support of a technical person to be able to use this system.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "I found the various functions in this system were well integrated.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "Please select 'Strongly Disagree' to show you are paying attention to this question.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "I thought there was too much inconsistency in this system.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "I would imagine that most people would learn to use this system very quickly.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "I found the system very cumbersome to use.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "I felt very confident using the system.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
        { text: "I needed to learn a lot of things before I could get going with this system.", options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }
    ];

    let currentQuestionIndex = 0;
    let selectedOption = null;

    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = 'block';
    nextButton.innerText = 'Next';

    function showMenu3() {
        const Menu3 = document.getElementById('Menu3');
        const container_Q = document.getElementById('container_Q');

        // Show the menu page
        Menu3.style.display = 'block';
        menu3StartTime = new Date().getTime(); // Start time
        container_Q.style.display = 'none';

        // Handle the "Next" button click
        document.getElementById('Menu_next_button3').addEventListener('click', function() {
            Menu3.style.display = 'none';
            menu3EndTime = new Date().getTime(); // End time
            container_Q.style.display = 'block';
            renderQuestion();
        });
    }

    function renderQuestion() {
        const question = SystemUsibilityScale[currentQuestionIndex];
        // Check if it's a SUS question (first 10 questions)

        questionText.textContent = `Question ${currentQuestionIndex + 1}/11: ${question.text}`;
        optionsContainer.innerHTML = ""; // clear previous options
        nextButton.disabled = true; // disable "Next" button until an option is selected
        susSurveyStartTime[currentQuestionIndex] = new Date().getTime(); // Start time

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectOption(optionDiv, index);
            optionsContainer.appendChild(optionDiv);
        });
    }

    function selectOption(optionDiv, index) {
        const options = document.querySelectorAll(".option");
        options.forEach(option => option.classList.remove("selected"));
        
        optionDiv.classList.add("selected");
        selectedOption = index; // store the selected option
        nextButton.disabled = false; // enable "Next" 
    }

    // First remove any previous event listener to prevent multiple triggers
    nextButton.removeEventListener('click', handleNextButtonClick);
    nextButton.addEventListener('click', handleNextButtonClick);

    function handleNextButtonClick() {
        // Save the answer for the current question
        answers.push({
            questionIndex: currentQuestionIndex,
            selectedOptionIndex: selectedOption,
            selectedOptionText: SystemUsibilityScale[currentQuestionIndex].options[selectedOption]
        });

        scores.push(selectedOption + 1); // Add 1 to the selected option index to get the score
        susSurveyData[currentQuestionIndex] = selectedOption + 1;
        susSurveyEndTime[currentQuestionIndex] = new Date().getTime(); // End time

        if (currentQuestionIndex < SystemUsibilityScale.length - 1) {
            currentQuestionIndex++;
            renderQuestion(); // Load the next question
        } else {
            // If it's the last question, show the low score questions
            nextButton.innerText = 'Finish';
            show_low_score_questioins();
        }
        selectedOption = null; // reset the selected option
    }

    // load the first question
    showMenu3();
}

function calculateSUS() {
    let SUS_Score = 0;
    for (let i = 0; i < 11; i++) {
        if (i < 5) {
            if (i % 2 === 0) {
                SUS_Score += scores[i] - 1;
            } else {
                SUS_Score += 5 - scores[i];
            }
        }

        if (i > 5) {
            j = i - 1;
            if (j % 2 === 0) {
                SUS_Score += scores[i] - 1;
            } else {
                SUS_Score += 5 - scores[i];
            }
        }
    }
    SUS_Score *= 2.5;
    return SUS_Score;
}

function show_low_score_questioins() {
    let SUS_Score = calculateSUS();
    susScoreData = SUS_Score;

    const ExplainContainer1 = document.getElementById('ScoreExplain1');
    const ExplainContainer2 = document.getElementById('ScoreExplain2');
    const ScoreQuestion1 = document.getElementById('ScoreQuestion1');
    const ScoreQuestion2 = document.getElementById('ScoreQuestion2');
    const ScoreQuestionInput1 = document.getElementById('ScoreQuestionInput1');
    const ScoreQuestionInput2 = document.getElementById('ScoreQuestionInput2');
    const ScoreQuestionSubmit1 = document.getElementById('ScoreQuestionSubmit1');
    const ScoreQuestionSubmit2 = document.getElementById('ScoreQuestionSubmit2');

    const container_Q = document.getElementById('container_Q');



    // Hide the survey and show the custom question container
    container_Q.style.display = 'none';
    ScoreQuestionInput1.innerText = "";
    ScoreQuestionInput2.innerText = "";
    
    // Set up the question asking for more details

    if (SUS_Score < 80.3) {
        ScoreQuestion1.innerText = "It seems that you have some concerns about the usability of the AI agent, can you briefly explain your concerns and make suggestions on potential improvements?";
        ScoreQuestion2.innerText = "Is there anything you liked about the AI agent? Please tell us what you liked and any suggestions for further improvements.";
        ExplainContainer1.style.display = 'block';
        concernsSurveyStartTime = new Date().getTime(); // Start time
    }
    
    else {
        ScoreQuestion1.innerText = "It seems that you are satisfied with the usability of the AI agent, can you briefly explain what you liked about the AI agent and any suggestions for further improvements?";
        ScoreQuestion2.innerText = "Is there anything you disliked about the AI agent? Please tell us what you disliked and any suggestions for further improvements.";
        ExplainContainer1.style.display = 'block';
        praiseSurveyStartTime = new Date().getTime(); // Start time
    }

    // Handle submit action
    ScoreQuestionSubmit1.onclick = () => {
        const explanation1 = ScoreQuestionInput1.value.trim();
        if (explanation1) {
            if (SUS_Score < 80.3){
                concernsSurveyData = explanation1;
                concernsSurveyEndTime = new Date().getTime(); // End time
            }
            else {
                praiseSurveyData = explanation1;
                praiseSurveyEndTime = new Date().getTime(); // End time
            }
            // Add "slide-out-up" class to slide out the ExplainContainer1
            ExplainContainer1.classList.remove('customized-slide-out-up');
            ExplainContainer1.classList.add('customized-slide-out-up');
            ExplainContainer2.classList.add('customized-slide-in-up');
            // Show the next question after 500ms
            setTimeout(() => {
                ExplainContainer1.style.display = 'none';
                setTimeout(() => {
                    ExplainContainer2.style.display = 'block';
                    if (SUS_Score < 80.3){
                        praiseSurveyStartTime = new Date().getTime(); // Start time
                    }
                    else {
                        concernsSurveyStartTime = new Date().getTime(); // Start time
                    }
                    ScoreQuestionSubmit2.onclick = () => {
                        const explanation2 = ScoreQuestionInput2.value.trim();
                        if (explanation2) {
                            if (SUS_Score < 80.3){
                                praiseSurveyData = explanation2;
                                praiseSurveyEndTime = new Date().getTime(); // End time
                            }
                            else {
                                concernsSurveyData = explanation2;
                                concernsSurveyEndTime = new Date().getTime(); // End time
                            }
                            ExplainContainer2.style.display = 'none';
                            ExplainContainer2.classList.remove('customized-slide-in-up');
                            showMenu4();
                        } else {
                            alert("Please provide an explanation.");
                        }
                    }
                }   , 500);
            }, 500);
        } else {
            alert("Please provide an explanation.");
        }
    }
}

function showMenu4() {
    const Menu4 = document.getElementById('Menu4');
    const container_Q = document.getElementById('container_Q');
    container_Q.style.display = 'none';
    Menu4.style.display = 'block';
    menu4StartTime = new Date().getTime(); // Start time

    document.getElementById('Menu_next_button4').addEventListener('click', function() {
        Menu4.style.display = 'none';
        menu4EndTime = new Date().getTime(); // End time
        show_customized_questions();
    });
}

// This function is for other Question-Option pairs in the Part 4 of the survey
function showOtherQuestions() {
    const otherQuestions = [
        { text: "How easy was it to understand the AI report?", options: ["Very Easy", "Somewhat Easy", "Neutral", "Somewhat Difficult", "Very Difficult"] },
        { text: "Do you want AI reports to provide more details, or more concise?", options: ["Much Detailed", "Detailed", "Do not change", "Concise", "Much Concise"] },
    ];

    // Hide the screen and show the questions
    const screen = document.getElementById('screen');
    const container = document.getElementById('container');
    const survey = document.getElementById('survey');
    const completionModal = document.getElementById('completionModal');
    screen.innerHTML = ''; // Clear the screen
    screen.style.display = 'none';
    container.style.display = 'none';
    survey.style.display = 'block';
    completionModal.style.display = 'none';
    const container_Q = document.getElementById('container_Q');
    container_Q.style.display = 'none';

    const container_other_Q = document.getElementById('container_other_Q');
    //container_other_Q.style.display = 'block';

    let QuestionIndex = 0;
    let selectedOption = null;

    const other_questionText = document.getElementById("other-question-text");
    const other_optionsContainer = document.getElementById("other-options-container");
    const other_nextButton = document.getElementById("other-next-button");
    other_nextButton.style.display = 'block';
    other_nextButton.innerText = 'Next';


    function renderQuestion() {
        const question = otherQuestions[QuestionIndex];
        
        other_questionText.textContent = `Question ${QuestionIndex + 1}/2: ${question.text}`;
        
        other_optionsContainer.innerHTML = ""; // clear previous options
        other_nextButton.disabled = true; // disable "Next" button until an option is selected

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
            other_nextButton.disabled = false; // start "Next" 
        }
    
        other_nextButton.addEventListener('click', function() {
            // save the answer for the current question
            answers.push({
                questionIndex: QuestionIndex,
                selectedOptionIndex: selectedOption,
                selectedOptionText: otherQuestions[QuestionIndex].options[selectedOption]
            });
    
            scores.push(selectedOption + 1); // Add 1 to the selected option index to get the score
            if (QuestionIndex < otherQuestions.length - 1) {
                QuestionIndex++;
                if (QuestionIndex === otherQuestions.length - 1) {
                    other_nextButton.innerText = 'Finish';
                    other_nextButton.onclick = function() {
                        show_customized_questions();
                        return;
                    }
                }
                renderQuestion();
            } 
            selectedOption = null; // reset the selected option
        }
    );
    renderQuestion();
    
}

let AI_judgement = [];
let case_101_index = -1;
let case_110_index = -1;
function show_customized_questions() {
    // This section will show up after all the questions are answered,so there is no current question index
    // Analyse user's selections and show customized questions
    // If in some survey, user disagrees with the AI report, show a question asking for the reason
    // 2 cases: 1. User's 2 selections are different with the AI report (101) 2. User's first selection is the same with the AI report, but the second selection is different (110)
    
    // deal with the user selection data
    const container_Q = document.getElementById('container_Q');
    const other_questions = document.getElementById('container_other_Q');
    container_Q.style.display = 'none';
    other_questions.style.display = 'none';


    AI_judgement = data.map(item => item.legitimacy);
    for (let i = 0; i < AI_judgement.length; i++) {
        AI_judgement[i] = AI_judgement[i].replace("\n", "").replace("\r", "");
        if (AI_judgement[i] === "Legitimate") {
            AI_judgement[i] = false;
        }
        else if (AI_judgement[i] === "Phishing") {
            AI_judgement[i] = true;
        }
    }
    
    // 101
    let case_101 = [];
    let if_101 = false;
    for (let i = 0; i < userSMSInitialSelection.length; i++) {
        if ((userSMSInitialSelection[i] !== AI_judgement[i]) && (userSMSInitialSelection[i] === userSMSFollowUpSelection[i])) {
            case_101.push(i);
            case_101_index = i;
            if_101 = true; 
        }    
    }

    // 110
    let case_110 = [];
    let if_110 = false;
    for (let i = 0; i < userSMSInitialSelection.length; i++) {
        if ((userSMSInitialSelection[i] === AI_judgement[i]) && (userSMSInitialSelection[i] !== userSMSFollowUpSelection[i])) {
                case_110.push(i);
                case_110_index = i;
                if_110 = true;
        }
    }


    let case_101_completed = false;
    let case_110_completed = false;
    if_show_thank_you = false; 

    if (if_101 === false && if_110 === false && if_show_thank_you === false) {
        show_AI_mistake_question()
        if_show_thank_you = true;
    }

    else if (if_101 === true || if_110 === true) {
        workCustomizedQuestion();
    }
    

    function workCustomizedQuestion(){

        if (if_101 === true && if_110 === false && case_101_completed === false) {
            showCustomizedQuestion101(case_101_index);
        }
    
        else if (if_101 === false && if_110 === true && case_110_completed === false) {
            showCustomizedQuestion110(case_110_index);
        }

        else if (if_101 === true && if_110 === true && case_101_completed === false && case_110_completed === false) {
            showCustomizedQuestion101(case_101_index);
        }

        else if (if_101 === true && if_110 === true && case_101_completed === true && case_110_completed === false) {
            showCustomizedQuestion110(case_110_index);
        }

        else if (if_101 === true && if_110 === false && case_101_completed === true && if_show_thank_you === false) {
            show_AI_mistake_question() 
            if_show_thank_you = true;
        }

        else if (if_101 === false && if_110 === true && case_110_completed === true && if_show_thank_you === false) {
            show_AI_mistake_question()
            if_show_thank_you = true;
        }

        else if (if_101 === true && if_110 === true && case_101_completed === true && case_110_completed === true && if_show_thank_you === false) {
            show_AI_mistake_question()
            if_show_thank_you = true;
        }
    }
    
    function showCustomizedQuestion110(case_110_index) {
        const customizedContainer = document.getElementById('customizedQuestionContainer');
        const questionText = document.getElementById('customQuestionText');
        const submitButton = document.getElementById('customQuestionSubmit');
        const explanationInput = document.getElementById('customQuestionInput');
        const container_Q = document.getElementById('container_Q');
        const case_101 = document.getElementById('case_101');
        const case_101_ai = document.getElementById('case_101_ai');
        
        // Hide the previous content
        container_Q.style.display = 'none';
        case_101.style.display = 'none';
        case_101_ai.style.display = 'none';
        explanationInput.value = ""; // Clear the input field

        
        // Show the Case 110 SMS and AI report
        const case_110_sms = data[case_110_index].message;
        const case_110_ai_report = data[case_110_index].ai_report;
        const case_110 = document.getElementById('case_110');
        const case_110_ai = document.getElementById('case_110_ai');
        const case_content = document.getElementById('caseContent');
        
        case_110.innerText = case_110_sms;
        case_110_ai.innerText = case_110_ai_report;
        
        customizedContainer.classList.remove('customized-slide-out-up');
        customizedContainer.classList.add('customized-slide-in-up');
        setTimeout(() => { 
            case110StartTime = new Date().getTime(); // Start time
            // Show the customized question container
            customizedContainer.style.display = 'block';
            case_content.style.display = 'block';
            case_110.style.display = 'block';
            case_110_ai.style.display = 'block';
        }, 500);
        
        // Set the customized question text
        let Select1 = "";
        if (userSMSInitialSelection[case_110_index] === false) {
            Select1 = "Legitimate";
        }
        else if (userSMSInitialSelection[case_110_index] === true) {
            Select1 = "Fraudulent";
        }

        let Select2 = "";
        if (userSMSFollowUpSelection[case_110_index] === false) {
            Select2 = "Legitimate";
        }
        else if (userSMSFollowUpSelection[case_110_index] === true) {
            Select2 = "Fraudulent";
        }

        let AI_judgement_text = "";
        if (AI_judgement[case_110_index] === false) {
            AI_judgement_text = "Legitimate";
        }
        else if (AI_judgement[case_110_index] === true) {
            AI_judgement_text = "Fraudulent";
        }
        
        if (AI_judgement_text === "Legitimate") {
            questionText.innerHTML = "We want to ask a follow up question about a specific case. For the below message, your initial selection was: <span style='color: green;'> <strong> Legitimate </strong> </span>. The AI also suggests that this SMS is <span style='color: green;'> <strong> Legitimate </strong> </span>. However, after reading the AI report, you changed your mind and selected to <span style='color: red;'> <strong> Fraudulent </strong> </span>. Can you explain why you changed your mind?";
        }
        else {
            questionText.innerHTML = "We want to ask a follow up question about a specific case. For the below message, your initial selection was: <span style='color: red;'> <strong> Fraudulent </strong> </span>. The AI also suggests that this SMS is <span style='color: red;'> <strong> Fraudulent </strong> </span>. However, after reading the AI report, you changed your mind and selected to <span style='color: green;'> <strong> Legitimate </strong> </span>. Can you explain why you changed your mind?";
        }


    
        // Handle the submit button click
        submitButton.onclick = () => {
            const explanation = explanationInput.value.trim();
            if (explanation) {
                case_110_completed = true;
                case110SurveyData = explanation;
                case110EndTime = new Date().getTime(); // End time
                customizedContainer.classList.remove('customized-slide-in-up');
                customizedContainer.classList.add('customized-slide-out-up');
                setTimeout(() => {
                    workCustomizedQuestion();
                }, 500);
            } else {
                alert("Please provide an explanation.");
            }
        };
    }
    
    function showCustomizedQuestion101(case_101_index) {
        const customizedContainer = document.getElementById('customizedQuestionContainer');
        const questionText = document.getElementById('customQuestionText');
        const submitButton = document.getElementById('customQuestionSubmit');
        const explanationInput = document.getElementById('customQuestionInput');
        const container_Q = document.getElementById('container_Q');
        
        // Hide the previous content
        container_Q.style.display = 'none';
        explanationInput.value = ""; // Clear the input field

        // Show the Case 101 SMS and AI report
        const case_101_sms = data[case_101_index].message;
        const case_101_ai_report = data[case_101_index].ai_report;
        const case_101 = document.getElementById('case_101');
        const case_101_ai = document.getElementById('case_101_ai');
        const case_content = document.getElementById('caseContent');
        
        case_101.innerText = case_101_sms;
        case_101_ai.innerText = case_101_ai_report;

        customizedContainer.classList.remove('customized-slide-out-up');
        customizedContainer.classList.add('customized-slide-in-up');
        setTimeout(() => {
            case101StartTime = new Date().getTime(); // Start time
            // Show the customized question container
            customizedContainer.style.display = 'block';
            case_content.style.display = 'block';
            case_101.style.display = 'block';
            case_101_ai.style.display = 'block';
        }, 500);
        
        // Set the customized question text
        let Select1 = "";
        if (userSMSInitialSelection[case_101_index] === false) {
            Select1 = "Legitimate";
        }
        else if (userSMSInitialSelection[case_101_index] === true) {
            Select1 = "Fraudulent";
        }

        let Select2 = "";
        if (userSMSFollowUpSelection[case_101_index] === false) {
            Select2 = "Legitimate";
        }
        else if (userSMSFollowUpSelection[case_101_index] === true) {
            Select2 = "Fraudulent";
        }

        let AI_judgement_text = "";
        if (AI_judgement[case_101_index] === false) {
            AI_judgement_text = "Legitimate";
        }
        else if (AI_judgement[case_101_index] === true) {
            AI_judgement_text = "Fraudulent";
        }
          
        if (AI_judgement_text === "Legitimate") {
            questionText.innerHTML = "We want to ask some follow up questions about a specific case. For the below message, your selection was: <span style='color: red;'> <strong> Fraudulent </strong> </span>. The AI suggests that this SMS is <span style='color: green;'> <strong> Legitimate </strong> </span>. After reading the AI report, you insisted that this SMS is <span style='color: red;'> <strong> Fraudulent </strong> </span>. Can you explain why you disagree with the AI report?";
        }
        else {
            questionText.innerHTML = "We want to ask some follow up questions about a specific case. For the below message, your selection was: <span style='color: green;'> <strong> Legitimate </strong> </span>. The AI suggests that this SMS is <span style='color: red;'> <strong> Fraudulent </strong> </span>. After reading the AI report, you insisted that this SMS is <span style='color: green;'> <strong> Legitimate </strong> </span>. Can you explain why you disagree with the AI report?";
        }        
    
        // Handle the submit button click
        submitButton.onclick = () => {
            const explanation = explanationInput.value.trim();
            if (explanation) {
                case_101_completed = true;
                case101SurveyData = explanation;
                case101EndTime = new Date().getTime(); // End time
                customizedContainer.classList.remove('customized-slide-in-up');
                customizedContainer.classList.add('customized-slide-out-up');
                setTimeout(() => {
                    workCustomizedQuestion();
                }, 500);
            } else {
                alert("Please provide an explanation.");
            }
        };
    }
}


function show_AI_mistake_question() {
    const customizedContainer = document.getElementById('customizedQuestionContainer');
    const questionText = document.getElementById('customQuestionText');
    const submitButton = document.getElementById('customQuestionSubmit');
    const explanationInput = document.getElementById('customQuestionInput');
    const container_Q = document.getElementById('container_Q');
    const case_101 = document.getElementById('case_101');
    const case_101_ai = document.getElementById('case_101_ai');
    const case_110 = document.getElementById('case_110');
    const case_110_ai = document.getElementById('case_110_ai');

    
    // Hide the previous content
    container_Q.style.display = 'none';
    case_101.style.display = 'none';
    case_101_ai.style.display = 'none';
    case_110.style.display = 'none';
    case_110_ai.style.display = 'none';
    explanationInput.value = ""; // Clear the input field
  
    
    showAbilityTrustQuestion();
}

function showAbilityTrustQuestion() {
    const otherQuestions = [
        { text: "How would you rate your ability to recognize phishing (fraudulent) messages <u> before taking this survey</u>?", options: ["Poor", "Fair", "Good", "Very Good", "Excellent"] },
        { text: "Now that you've reviewed the 10 messages and their corresponding AI reports, how would you rate your ability to recognize phishing (fraudulent) messages?", options: ["Poor", "Fair", "Good", "Very Good", "Excellent"]},
        { text: "How much do you trust the AI agent's judgement on SMS messages?", options: ["Very distrusting", "Somewhat distrusting", "Neutral", "Somewhat trusting", "Very trusting"] },
        { text: "During this study, you had the option to view a <u>detailed AI report</u> by clicking a button whenever a <u>brief explanation</u> was shown. Would you want this option to access <u>detailed explanations</u> in the future?", options: ["Yes, definitely", "Probably yes", "Neutral", "Probably no", "No, definitely not"] }
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
    AbilityTrustQuestionStartTime = new Date().getTime(); // Start time


    function renderQuestion() {
        const question = otherQuestions[QuestionIndex];
        
        other_questionText.innerHTML = `Question ${QuestionIndex + 1}/4: ${question.text}`;

        // If the question is the last one, insert 2 images after the other-question-text, before the other-options-container
        //<h2 id="other-question-text"></h2>
        //<div id="other-options-container"></div>
        //<button id="other-next-button" disabled>Next</button>


        if (QuestionIndex === otherQuestions.length - 1) {
            const img1 = document.createElement("img");
            img1.src = "img/brief_report.png";
            img1.style.width = "40%";
            img1.style.height = "40%";
            img1.style.margin = "8px";
            const img2 = document.createElement("img");
            img2.src = "img/detailed_report.png";
            img2.style.width = "40%";
            img2.style.height = "40%";
            img2.style.margin = "8px";
            other_questionText.appendChild(img1);
            other_questionText.appendChild(img2);
        }
        
        other_optionsContainer.innerHTML = ""; // clear previous options
        other_nextButton.disabled = true; // disable "Next" button until an option is selected

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
            other_nextButton.disabled = false; // start "Next" 
        }
    
        other_nextButton.addEventListener('click', function() {
            // save the answer for the current question
            answers.push({
                questionIndex: QuestionIndex,
                selectedOptionIndex: selectedOption,
                selectedOptionText: otherQuestions[QuestionIndex].options[selectedOption]
            });
    
            scores.push(selectedOption + 1); // Add 1 to the selected option index to get the score
            AbilityTrustQuestionData[QuestionIndex] = otherQuestions[QuestionIndex].options[selectedOption];
            if (QuestionIndex < otherQuestions.length - 1) {
                QuestionIndex++;
                if (QuestionIndex === otherQuestions.length - 1) {
                    other_nextButton.innerText = 'Finish';
                    AbilityTrustQuestionEndTime = new Date().getTime(); // End time
                    other_nextButton.onclick = function() {
                        showComplainQuestion();
                        return;
                    }
                }
                renderQuestion();
            } 
            selectedOption = null; // reset the selected option
        }
    );
    renderQuestion();
}


function showComplainQuestion() {
    const complainContainer = document.getElementById('complainQuestionContainer');
    const questionText = document.getElementById('complainQuestionText');
    const submitButton = document.getElementById('complainQuestionSubmit');
    const explanationInput = document.getElementById('complainQuestionInput');
    const container_Q = document.getElementById('container_Q');
    const other_questions = document.getElementById('container_other_Q');
    const case_101 = document.getElementById('case_101');
    const case_101_ai = document.getElementById('case_101_ai');
    const case_110 = document.getElementById('case_110');
    const case_110_ai = document.getElementById('case_110_ai');
    const case_content = document.getElementById('caseContent');
    const customizedContainer = document.getElementById('customizedQuestionContainer');

    // Hide the previous content
    container_Q.style.display = 'none';
    case_101.style.display = 'none';
    case_101_ai.style.display = 'none';
    case_110.style.display = 'none';
    case_110_ai.style.display = 'none';
    case_content.style.display = 'none';
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
    const case_101 = document.getElementById('case_101');
    const case_101_ai = document.getElementById('case_101_ai');
    const case_110 = document.getElementById('case_110');
    const case_110_ai = document.getElementById('case_110_ai');
    const case_content = document.getElementById('caseContent');
    const customizedContainer = document.getElementById('customizedQuestionContainer');
    const complainContainer = document.getElementById('complainQuestionContainer');

    // Hide the previous content
    container_Q.style.display = 'none';
    case_101.style.display = 'none';
    case_101_ai.style.display = 'none';
    case_110.style.display = 'none';
    case_110_ai.style.display = 'none';
    case_content.style.display = 'none';
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
    let ifSUSCompleted = true;
    let ifAbilityTrustCompleted = true;

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

    for (let i = 0; i < susSurveyData.length; i++) {
        if (susSurveyData[i] === 0) {
            ifSUSCompleted = false;
        }
    }

    for (let i = 0; i < AbilityTrustQuestionData.length; i++) {
        if (AbilityTrustQuestionData[i] === 0) {
            ifAbilityTrustCompleted = false;
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

    else if (ifSUSCompleted === false) {
        alert("It seems that you skipped some questions in the survey. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }

    else if (susScoreData === -1) {
        alert("It seems that you skipped some questions in the survey. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }

    else if (ifAbilityTrustCompleted === false) {
        alert("It seems that you skipped some questions in the survey. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }

    else if (concernsSurveyData === "") {
        alert("It seems that you skipped some questions in the survey. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }

    else if (praiseSurveyData === "") {
        alert("It seems that you skipped some questions in the survey. Please do not try to skip any steps in the survey. Click 'OK' to retake the survey.");
        location.reload(true);
    }


    // Save in JSON: consentAccepted, DemographicData, firstSurveyData, secondSurveyData, susSurveyData, susScoreData, concernsSurveyData, praiseSurveyData, case101SurveyData, case110SurveyData, ProblemSurveyData
    else {
        // Deal with time data
        let backgroundTurorialTime = (menu2EndTime - backgroundStartTime) / 1000;
        let firstSurveyTime = firstSurveyEndTime.map((item, index) => (item - firstSurveyStartTime[index]) / 1000);
        let secondSurveyTime = secondSurveyEndTime.map((item, index) => (item - secondSurveyStartTime[index]) / 1000);
        let susSurveyTime = susSurveyEndTime.map((item, index) => (item - susSurveyStartTime[index]) / 1000);
        let totalTime = (problemSurveyEndTime - backgroundStartTime) / 1000;
        let detailViewTime = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < if_detailed_report.length; i++) {
            if (if_detailed_report[i] === 1) {
                detailViewTime[i] = (secondSurveyEndTime[i] - clickDetailStartTime[i]) / 1000;
            }
        }

        currentURL = window.location.href;
        
        const sendUserTime = JSON.stringify({ totalTime, backgroundTurorialTime, firstSurveyTime, secondSurveyTime, detailViewTime, susSurveyTime, backgroundStartTime, backgroundEndTime, demographicStartTime, demographicEndTime, menuPageStartTime, menuPageEndTime, menu1StartTime, menu1EndTime, tutorial1StartTime, tutorial1EndTime, tutorial2StartTime, tutorial2EndTime, tutorial3StartTime, tutorial3EndTime, menu2StartTime, menu2EndTime, firstSurveyStartTime, firstSurveyEndTime, secondSurveyStartTime, secondSurveyEndTime, menu3StartTime, menu3EndTime, susSurveyStartTime, susSurveyEndTime, menu4StartTime, menu4EndTime, concernsSurveyStartTime, concernsSurveyEndTime, praiseSurveyStartTime, praiseSurveyEndTime, case101StartTime, case101EndTime, case110StartTime, case110EndTime, AbilityTrustQuestionStartTime, AbilityTrustQuestionEndTime, problemSurveyStartTime, problemSurveyEndTime});
        const sendUserData = JSON.stringify({ message_order, currentURL, consentAccepted, DemographicData, firstSurveyData, secondSurveyData, if_detailed_report, susSurveyData, susScoreData, concernsSurveyData, praiseSurveyData, case_101_index, case101SurveyData, case_110_index, case110SurveyData,  AbilityTrustQuestionData, ProblemSurveyData });
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
