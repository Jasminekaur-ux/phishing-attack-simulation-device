// Phishing Attack Simulation Trainer - Logic Script

// 1. Sample Data
// Array of email objects containing content, phishing status, and explanation.
const emails = [
    {
        from: "IT Support <support-it@company-security.com>",
        subject: "URGENT: Reset your password immediately",
        body: "Dear User, We noticed suspicious activity on your account. Please click the link below to reset your password immediately or your account will be locked within 24 hours. <br><br> [Link: Reset Now]",
        isPhishing: true,
        explanation: "Urgent language ('immediately', '24 hours'), generic greeting ('Dear User'), and a suspicious link are classic signs of phishing."
    },
    {
        from: "HR Department <hr@yourcompany.com>",
        subject: "Updated holiday policy",
        body: "Hi everyone, Please find attached the updated holiday policy for this year. Let us know if you have any questions. Best, HR Team",
        isPhishing: false,
        explanation: "The sender domain matches the company, the tone is professional, and there is no urgency or request for sensitive information."
    },
    {
        from: "CEO <ceo-private-email@gmail.com>",
        subject: "Urgent Wire Transfer Request",
        body: "I am in a meeting and can't talk. I need you to process a wire transfer for a vendor immediately. Please reply with the details. This is urgent.",
        isPhishing: true,
        explanation: "The CEO using a private Gmail address for business and demanding an urgent wire transfer is a common 'CEO Fraud' phishing tactic."
    },
    {
        from: "Netflix Support <info@netflix.com>",
        subject: "Your subscription has been updated",
        body: "Hello, just a quick note to confirm that your subscription plan has been successfully updated as per your request. Enjoy watching!",
        isPhishing: false,
        explanation: "This is a standard notification. The sender address is legitimate, and it's not asking for any action or personal details."
    },
    {
        from: "Amazon Delivery <tracking@amazn-support.net>",
        subject: "Action Required: Package Undeliverable",
        body: "Our driver tried to deliver your package but failed. Please click here to reschedule delivery and pay a small redelivery fee.",
        isPhishing: true,
        explanation: "Look closely at the domain: 'amazn-support.net' is fake. Also, asking for a fee to redeliver is a common scam."
    }
];

// State Variables
let currentEmailIndex = 0;
let scoreCorrect = 0;
let scoreTotal = 0;

// DOM Elements
const fromEl = document.getElementById('email-from');
const subjectEl = document.getElementById('email-subject');
const bodyEl = document.getElementById('email-body-text');

const feedbackSection = document.getElementById('feedback-section');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExplanation = document.getElementById('feedback-explanation');

const scoreCorrectEl = document.getElementById('score-correct');
const scoreTotalEl = document.getElementById('score-total');

const btnSafe = document.getElementById('btn-safe');
const btnPhishing = document.getElementById('btn-phishing');
const btnNext = document.getElementById('btn-next');

// 2. Function to Show Email
function showEmail(index) {
    const email = emails[index];
    
    // Update Layout
    fromEl.textContent = email.from;
    subjectEl.textContent = email.subject;
    // Using innerHTML to allow simple formatting like <br> in body
    bodyEl.innerHTML = email.body; 

    // Reset UI for new round
    feedbackSection.classList.add('hidden');
    feedbackSection.classList.remove('correct', 'incorrect');
    
    // Enable buttons
    btnSafe.disabled = false;
    btnPhishing.disabled = false;
}

// 3. Function to Handle User Choice
function checkAnswer(userSaysPhishing) {
    const email = emails[currentEmailIndex];
    const isCorrect = (userSaysPhishing === email.isPhishing);
    
    // Update Score
    scoreTotal++;
    if (isCorrect) {
        scoreCorrect++;
    }
    updateScoreDisplay();

    // Show Feedback
    feedbackSection.classList.remove('hidden');
    
    if (isCorrect) {
        feedbackTitle.textContent = "Correct!";
        feedbackSection.classList.add('correct');
    } else {
        feedbackTitle.textContent = "Incorrect.";
        feedbackSection.classList.add('incorrect');
    }
    
    feedbackExplanation.textContent = email.explanation;

    // Disable buttons to prevent double answering
    btnSafe.disabled = true;
    btnPhishing.disabled = true;
}

// Helper to update score UI
function updateScoreDisplay() {
    scoreCorrectEl.textContent = scoreCorrect;
    scoreTotalEl.textContent = scoreTotal;
}

// 4. Function for Next Email
function nextEmail() {
    // Increment index, wrap around if at end
    currentEmailIndex = (currentEmailIndex + 1) % emails.length;
    showEmail(currentEmailIndex);
}

// Event Listeners
btnSafe.addEventListener('click', () => checkAnswer(false));
btnPhishing.addEventListener('click', () => checkAnswer(true));
btnNext.addEventListener('click', nextEmail);

// Initialize Simulation
showEmail(currentEmailIndex);
