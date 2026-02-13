// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Martynka...",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Zostaniesz moją walentynką? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Czy mnie lubisz?",                                    // First interaction
            yesBtn: "Tak",                                             // Text for "Yes" button
            noBtn: "Nie",                                               // Text for "No" button
            secretAnswer: "Nie lubię cię ale cię kocham ❤️"           // Secret hover message
        },
        second: {
            text: "Jak bardzo ci zależy?",                          // For the love meter
            startText: "Tak bardzo!",                                   // Text before the percentage
            nextBtn: "Dalej ❤️"                                         // Text for the next button
        },
        third: {
            text: "Będziesz moją walentynką? 🌹🌹", // The big question!
            yesBtn: "Tak koniecznie",                                             // Text for "Yes" button
            noBtn: "Nie "                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW Aż tak bardzo?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Nie no napewno jeszcze bardziej 🚀💝",              // Shows when they go past 1000%
        normal: "Jeszcze bardziej! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "WIEDZIAŁEM ŻE SIĘ ZGODZISZ BUZIAK 🎉💖💝💓",
        message: "Fredry 23, 516433979, 409 227",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
colors: {
    backgroundStart: "#ff5f8d",   // mocny róż
    backgroundEnd: "#ffc1d9",     // jasny róż
    buttonBackground: "#ff2f68",  // malinowy
    buttonHover: "#ff6f91",       // hover
    textColor: "#c9184a"          // ciemna czerwień
},


    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dxwzukms9/video/upload/v1770736648/Kali_-_Przeznaczenie_mp3cut.net_fl7kb2.mp3", // Music streaming URL
        startText: "🎵 Włącz muzyke",        // Button text to start music
        stopText: "🔇 Wyłącz muzyke",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
