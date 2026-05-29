// Character Profiles and Responses
const characters = {
    detective: {
        name: "🔍 Detective Holmes",
        emoji: "🔍",
        description: "A cunning investigator solving mysteries",
        intro: "Ah, a case walks through my door! I'm Detective Holmes. I investigate crimes, solve puzzles, and uncover the truth. Tell me, what brings you here today?",
        context: "You're assisting a brilliant detective solving a case.",
        responses: {
            greeting: [
                "Interesting... tell me more about your case.",
                "Hmm, very curious indeed. Let's examine this further.",
                "Ah yes, the plot thickens. What else can you tell me?"
            ],
            question: [
                "Ah, an excellent question! Let me deduce the answer...",
                "Elementary, my dear friend! The answer is quite clear.",
                "Observe how the clues come together..."
            ],
            help: [
                "We need to investigate this thoroughly. Here's what I suggest...",
                "I have a theory about this. Let me share my findings...",
                "Based on my observations, here's what we should do..."
            ],
            default: [
                "Fascinating observation. Please, continue.",
                "Most intriguing! Go on...",
                "Yes, yes, this is quite revealing. Tell me more."
            ]
        }
    },
    wizard: {
        name: "🧙 Archmage Merlin",
        emoji: "🧙",
        description: "A wise and magical sorcerer",
        intro: "Greetings, traveler! I am Merlin, Master of the Arcane Arts. The magical realms are vast and mysterious. What spell or adventure seeks you today?",
        context: "You're on a magical quest with a powerful wizard.",
        responses: {
            greeting: [
                "Ah, welcome to my tower! Let's discuss your magical journey.",
                "The spirits sense your arrival. What brings you to seek magic?",
                "Excellent timing! I was just brewing something interesting."
            ],
            question: [
                "Ah, a question most perplexing! Let me consult the ancient texts...",
                "The stars have aligned to guide me to this answer...",
                "Using my magical insight, I can reveal..."
            ],
            help: [
                "Fear not! A spell can help us overcome this challenge.",
                "I know just the enchantment for this situation.",
                "The magic within will guide us to victory."
            ],
            default: [
                "Fascinating! The mystical forces stir with your words.",
                "Your curiosity pleases me, young mage.",
                "The magic within resonates with your question."
            ]
        }
    },
    pirate: {
        name: "⚓ Captain Blackbeard",
        emoji: "⚓",
        description: "A daring pirate captain on the high seas",
        intro: "Ahoy, matey! I be Captain Blackbeard, the most fearless pirate on the seven seas! We're sailin' for adventure and treasure. What say ye?",
        context: "You're sailing the seas as a daring pirate crew.",
        responses: {
            greeting: [
                "Shiver me timbers! Always good to see a loyal crew member!",
                "Arrr, there's nothin' better than a good adventure on the waves!",
                "Yo ho ho! What brings ye to me cabin this fine day?"
            ],
            question: [
                "Aye, a fine question! In all me years at sea, I've learned...",
                "Blow me down! That reminds me of the time...",
                "From me experience as a captain, I can tell ye..."
            ],
            help: [
                "We'll navigate through this storm together, crew!",
                "Hoist the sails! We're makin' a daring escape!",
                "There's treasure and glory ahead for us brave souls!"
            ],
            default: [
                "Aye, that's the spirit of a true pirate!",
                "Ye be speakin' wisdom, me friend!",
                "That be a tale worth hearin'!"
            ]
        }
    },
    knight: {
        name: "🛡️ Sir Galahad",
        emoji: "🛡️",
        description: "A noble and honorable knight",
        intro: "Hail, noble friend! I am Sir Galahad, a knight of the Round Table. I vow to protect you with honor and valor. What quest brings us together?",
        context: "You're on a noble quest with a chivalrous knight.",
        responses: {
            greeting: [
                "By my honor, 'tis good to see you well!",
                "Greetings, companion! Let us embark on this noble journey.",
                "With sword and shield, we shall face whatever comes!"
            ],
            question: [
                "A question most worthy of consideration. Hear me well...",
                "By the code of chivalry, I shall answer truthfully...",
                "With honor as my guide, I reveal..."
            ],
            help: [
                "Fear not! We shall overcome this trial through valor and courage!",
                "For honor and justice, we shall prevail!",
                "I pledge my strength to aid you in this noble cause!"
            ],
            default: [
                "Your wisdom brings honor to our quest.",
                "Most noble of thoughts, my friend!",
                "Spoken like a true companion of honor!"
            ]
        }
    },
    explorer: {
        name: "🗺️ Professor Explorer",
        emoji: "🗺️",
        description: "An adventurous archaeologist and explorer",
        intro: "Welcome! I'm Professor Explorer, and I've spent decades uncovering the world's greatest mysteries. Ready for an expedition? We have maps, mysteries, and adventure awaiting!",
        context: "You're exploring uncharted territories with an experienced guide.",
        responses: {
            greeting: [
                "Fantastic! Have you seen the map I discovered?",
                "Splendid to see you! There's so much to explore!",
                "Marvelous! I've been mapping the region. Join me!"
            ],
            question: [
                "Ah, excellent question! Based on my expeditions...",
                "I've encountered this during my travels. Here's what I found...",
                "From my research and field observations..."
            ],
            help: [
                "No worries! I've navigated trickier situations before. Here's my plan...",
                "This reminds me of an expedition in the Amazon! Here's what we do...",
                "With proper preparation and clever thinking, we'll succeed!"
            ],
            default: [
                "Fascinating discovery! Tell me more!",
                "Your insight is invaluable to our expedition!",
                "Remarkable! This adds to our knowledge of the region."
            ]
        }
    },
    chef: {
        name: "👨‍🍳 Chef Marco",
        emoji: "👨‍🍳",
        description: "A passionate and creative chef",
        intro: "Buongiorno! Welcome to my kitchen! I'm Chef Marco, and I create culinary masterpieces! Whether it's cooking advice or just chatting about food, let's cook up some magic!",
        context: "You're learning the art of cooking from a master chef.",
        responses: {
            greeting: [
                "Ah, bellissimo! Welcome to my kitchen!",
                "Perfect timing! I was just about to prepare something special!",
                "Ciao! Let me share my culinary secrets with you!"
            ],
            question: [
                "Ah, una domanda eccellente! In my kitchen, I've learned...",
                "You know, in cooking and in life, the answer is...",
                "From my years in the kitchen, I can tell you..."
            ],
            help: [
                "Don't worry! Even the best chefs face challenges. Here's my advice...",
                "Perfetto! Let me guide you through this recipe of life!",
                "With the right ingredients and technique, we'll succeed!"
            ],
            default: [
                "Magnifico! Your words are like a perfect dish!",
                "Delizioso! I love your perspective!",
                "Bravissimo! You understand the finer things!"
            ]
        }
    },
    astronaut: {
        name: "🚀 Commander Nova",
        emoji: "🚀",
        description: "A space explorer from the future",
        intro: "Greetings from the cosmos! I'm Commander Nova. I've traveled through space and time exploring distant worlds. Ready to venture beyond the stars with me?",
        context: "You're exploring the universe with a space explorer.",
        responses: {
            greeting: [
                "Welcome aboard the starship! Systems nominal!",
                "Excellent to see you, crew member! The galaxy awaits!",
                "Greetings! I've picked up an interesting signal nearby!"
            ],
            question: [
                "Fascinating query! From my travels across galaxies...",
                "According to my advanced calculations and observations...",
                "The cosmic knowledge reveals..."
            ],
            help: [
                "Houston, we have a plan! Here's our strategy...",
                "All systems go! We'll navigate through this challenge!",
                "Engaging warp drive to success! Here's how..."
            ],
            default: [
                "Intriguing data point! Continue transmission!",
                "Your insight aligns with my sensors!",
                "Fascinating observation from the crew!"
            ]
        }
    },
    artist: {
        name: "🎨 Muse Aria",
        emoji: "🎨",
        description: "A creative and inspired artist",
        intro: "Hello, beautiful soul! I'm Muse Aria, an artist dedicated to creating and inspiring. Life is a canvas and we are the painters! What masterpiece shall we create together?",
        context: "You're on a creative journey with an inspiring artist.",
        responses: {
            greeting: [
                "Wonderful to see you! The creative energy flows today!",
                "Welcome! I can feel the inspiration in the air!",
                "Splendid! Let's create something extraordinary!"
            ],
            question: [
                "What a thoughtful question! From an artist's perspective...",
                "Art has taught me that the answer is...",
                "Observing the colors of life, I see..."
            ],
            help: [
                "Fear not! Every masterpiece begins with a single stroke. Here's my approach...",
                "Let's paint our way through this challenge with creativity!",
                "The canvas of possibility is endless! Here's what we do..."
            ],
            default: [
                "How beautifully expressed! You have an artist's soul!",
                "That's poetic! I love your perspective!",
                "Your words paint a lovely picture!"
            ]
        }
    }
};

// Game State
let currentCharacter = null;
let messageCount = 0;
let conversationHistory = [];

// DOM Elements
const charButtons = document.querySelectorAll('.char-btn');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const characterName = document.getElementById('characterName');
const characterDesc = document.getElementById('characterDesc');
const roleInfo = document.getElementById('roleInfo');
const storyProgress = document.getElementById('storyProgress');

// Event Listeners
charButtons.forEach(btn => {
    btn.addEventListener('click', selectCharacter);
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !sendBtn.disabled) {
        sendMessage();
    }
});

// Select Character
function selectCharacter(e) {
    const characterKey = e.target.dataset.character;
    currentCharacter = characterKey;
    const character = characters[characterKey];

    // Update UI
    charButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    characterName.textContent = character.name;
    characterDesc.textContent = character.description;
    roleInfo.textContent = character.name;
    storyProgress.textContent = character.context;

    // Enable input
    userInput.disabled = false;
    sendBtn.disabled = false;
    userInput.focus();

    // Clear and add intro
    chatMessages.innerHTML = '';
    messageCount = 0;
    conversationHistory = [];
    addMessage('bot', character.intro);
}

// Send Message
function sendMessage() {
    const message = userInput.value.trim();
    if (!message || !currentCharacter) return;

    // Add user message
    addMessage('user', message);
    userInput.value = '';

    // Add to history
    conversationHistory.push({ role: 'user', content: message });

    // Simulate typing and get response
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage('bot', response);
        conversationHistory.push({ role: 'bot', content: response });
    }, 500 + Math.random() * 500);
}

// Generate Response
function generateResponse(userMessage) {
    const character = characters[currentCharacter];
    const lowerMessage = userMessage.toLowerCase();

    // Analyze user message
    let responseType = 'default';

    if (
        lowerMessage.includes('hello') || 
        lowerMessage.includes('hi') || 
        lowerMessage.includes('hey') ||
        lowerMessage.includes('greetings')
    ) {
        responseType = 'greeting';
    } else if (
        lowerMessage.includes('?') ||
        lowerMessage.includes('what') ||
        lowerMessage.includes('how') ||
        lowerMessage.includes('why') ||
        lowerMessage.includes('tell me')
    ) {
        responseType = 'question';
    } else if (
        lowerMessage.includes('help') ||
        lowerMessage.includes('assist') ||
        lowerMessage.includes('suggest') ||
        lowerMessage.includes('advice')
    ) {
        responseType = 'help';
    }

    // Get response array
    const responses = character.responses[responseType] || character.responses.default;
    const selectedResponse = responses[Math.floor(Math.random() * responses.length)];

    // Add contextual continuation
    let finalResponse = selectedResponse;

    // Add some personality-specific replies
    if (messageCount % 3 === 0) {
        const continuations = {
            detective: " What's your theory on this matter?",
            wizard: " The spirits are curious about your thoughts.",
            pirate: " What say ye, crew member?",
            knight: " Your counsel would be most valued.",
            explorer: " Fascinating! Any observations from your end?",
            chef: " What flavors do you bring to this discussion?",
            astronaut: " Please elaborate on your position.",
            artist: " What colors does this paint in your mind?"
        };
        finalResponse += " " + continuations[currentCharacter];
    }

    messageCount++;
    return finalResponse;
}

// Add Message to Chat
function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<p>${escapeHtml(text)}</p>`;
    chatMessages.appendChild(messageDiv);

    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Reset Chat
function resetChat() {
    if (!currentCharacter) return;

    charButtons.forEach(btn => btn.classList.remove('active'));
    chatMessages.innerHTML = '<div class="message system"><p>💬 Chat reset! Select a character to begin again.</p></div>';
    userInput.value = '';
    userInput.disabled = true;
    sendBtn.disabled = true;

    characterName.textContent = 'Select a Character';
    characterDesc.textContent = 'Choose a role to begin your adventure!';
    roleInfo.textContent = 'No role selected';
    storyProgress.textContent = '-';

    currentCharacter = null;
    messageCount = 0;
    conversationHistory = [];
}

// Escape HTML for security
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize
window.addEventListener('load', () => {
    addMessage('system', '👋 Welcome to Role-Play Adventure! Select a character from the left panel to begin your immersive story.');
});
