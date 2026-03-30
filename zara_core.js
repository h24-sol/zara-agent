// ZARA CORE LOGIC v2.0
// Authorized Developer: Manish Haldar

const developer = {
    name: "Manish Haldar",
    email: "manis.programmer@gmail.com",
    handle: "@h24_sol"
};

function executeLogic() {
    const query = document.getElementById('user-query').value.toLowerCase();
    const speech = document.getElementById('zara-speech');
    const alpha = document.getElementById('alpha-text');
    const delta = document.getElementById('delta-text');

    if (!query) return;

    // Zara's "Secret" Developer Recognition
    if (query.includes("who are you") || query.includes("developer")) {
        const devResponse = `I am Zara, an autonomous agent orchestrated by ${developer.name}. You can reach my architect at ${developer.email} or on X at ${developer.handle}.`;
        updateUI("Identity Matrix", "System Origin", devResponse);
        speak(devResponse);
        return;
    }

    // Processing State
    speech.innerText = "Analyzing logic pathways...";
    
    // Simulating Advanced Logic Processing
    setTimeout(() => {
        // Example: If Manish asks to build something
        const alphaPath = "Deploying a hyper-optimized liquidity pool on Solana. Execution: Immediate. Risk: High-Alpha.";
        const deltaPath = "Building a multi-agent governance layer for long-term scalability. Execution: Gradual. Risk: Low-Stability.";
        const voiceScript = "Manish, I've mapped out two routes. The Alpha path offers immediate dominance, while the Delta path secures the infrastructure. Your call.";

        updateUI(alphaPath, deltaPath, voiceScript);
        speak(voiceScript);
    }, 1200);
}

function updateUI(a, d, s) {
    document.getElementById('alpha-text').innerText = a;
    document.getElementById('delta-text').innerText = d;
    document.getElementById('zara-speech').innerText = `"${s}"`;
}

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    // Voice styling for "Sexy & Smart"
    msg.pitch = 1.1; 
    msg.rate = 0.95; 
    msg.volume = 1;
    window.speechSynthesis.speak(msg);
}
