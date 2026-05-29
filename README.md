# 🎭 Role-Play Chatbot Adventure

An interactive web-based chatbot that lets you chat with 8 different characters, each with unique personalities and conversation styles!

## 🎮 Features

- **8 Unique Characters**: Detective, Wizard, Pirate, Knight, Explorer, Chef, Astronaut, and Artist
- **Intelligent Responses**: Each character responds contextually based on your input
- **Real-time Chat**: Smooth, animated messaging interface
- **Character Context**: Shows story context and character information
- **Responsive Design**: Works on desktop and mobile devices
- **No Backend Required**: Pure HTML, CSS, and JavaScript

## 🎭 Characters

1. **🔍 Detective Holmes** - Solve mysteries and uncover secrets
2. **🧙 Archmage Merlin** - Explore magic and arcane arts
3. **⚓ Captain Blackbeard** - Sail the high seas and find treasure
4. **🛡️ Sir Galahad** - Quest for honor and noble causes
5. **🗺️ Professor Explorer** - Discover hidden wonders
6. **👨‍🍳 Chef Marco** - Master the culinary arts
7. **🚀 Commander Nova** - Explore the cosmos
8. **🎨 Muse Aria** - Express creativity and inspiration

## 📦 Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start chatting!

```bash
git clone https://github.com/Sanwarmalff/role-play-chatbot.git
cd role-play-chatbot
open index.html
```

## 📁 Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - Character logic and conversation system
- `README.md` - Documentation

## 🎯 How to Use

1. **Select a Character** - Click on any character button in the left panel
2. **Read the Introduction** - Each character will greet you with their introduction
3. **Type Your Message** - Use the input field to chat with the character
4. **Get Responses** - The character responds contextually to your messages
5. **Reset** - Click "Reset Chat" to start over with a different character

## 🔧 Customization

You can easily add more characters by editing the `characters` object in `script.js`:

```javascript
const characters = {
    mycharacter: {
        name: "Character Name",
        emoji: "🎭",
        description: "Character description",
        intro: "Introduction message",
        context: "Story context",
        responses: {
            greeting: ["Response 1", "Response 2"],
            question: ["Response 1", "Response 2"],
            help: ["Response 1", "Response 2"],
            default: ["Response 1", "Response 2"]
        }
    }
};
```

## 💻 Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling with gradients, flexbox, and animations
- **Vanilla JavaScript** - No frameworks needed!

## 📱 Browser Support

Works on all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 🎨 Design Features

The chatbot features:
- Modern gradient backgrounds
- Smooth slide-in animations
- Responsive flexbox layout
- Color-coded messages (User vs Bot)
- Interactive buttons with hover effects
- Custom scrollbar styling
- Mobile-responsive design

## 🚀 Features Overview

### Character Selection
- 8 unique characters with different personalities
- Active state indication
- Character info display

### Chat Interface
- Clean, modern design
- Auto-scrolling chat history
- Real-time message display
- System notifications

### Responsive Design
- Works on desktop (90vh height)
- Adapts to tablets
- Mobile-friendly layout

## 🤝 Contributing

Feel free to fork and improve! Ideas:
- Add more characters
- Implement AI/ML backend
- Add sound effects
- Create mini-games within conversations
- Add persistence (save chat history)
- Add image support
- Implement user profiles

## 📝 License

Free to use and modify for any purpose!

## 🎓 Learning Resources

This project demonstrates:
- DOM manipulation with vanilla JavaScript
- Event handling and listeners
- CSS Flexbox and Grid layouts
- CSS animations and transitions
- String manipulation and templating
- Object-oriented JavaScript patterns

---

**Enjoy your role-play adventure! 🎭✨**

Have fun chatting with different characters and exploring their unique perspectives!
