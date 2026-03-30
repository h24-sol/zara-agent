let lang = 'en';

function setLang(l) {
    lang = l;
    document.getElementById('en-btn').className = l === 'en' ? 'btn-active px-4 py-1 text-xs' : 'border border-[#00f2ff] px-4 py-1 text-xs';
    document.getElementById('bn-btn').className = l === 'bn' ? 'btn-active px-4 py-1 text-xs' : 'border border-[#00f2ff] px-4 py-1 text-xs';
}

async function execute() {
    const cmd = document.getElementById('command').value.toLowerCase();
    const output = document.getElementById('zara-output');
    const market = document.getElementById('market-feed');
    const news = document.getElementById('news-feed');

    if (!cmd) return;

    // Check for Developer Info (Manish)
    if (cmd.includes("developer") || cmd.includes("owner")) {
        const devMsg = lang === 'en' ? "Accessing creator record: Manish Haldar (@h24_sol). Email: manis.programmer@gmail.com." : "ক্রিয়েটর রেকর্ড এক্সেস করছি: মনীষ হালদার (@h24_sol)। ইমেইল: manis.programmer@gmail.com।";
        output.innerText = devMsg;
        speak(devMsg);
        return;
    }

    output.innerText = lang === 'en' ? "SYNTHESIZING GLOBAL DATA..." : "বৈশ্বিক ডাটাবেস বিশ্লেষণ করছি...";

    setTimeout(() => {
        const data = {
            en: {
                speech: "Analysis complete. Global uncertainty is at a maximum due to the Iran conflict. Capital is fleeing to Gold and Bitcoin.",
                mkt: `BTC/USD: $92,400 | GOLD: $4,534/oz | INR/BDT: High Volatility. Market Outflow: ₹18.6L Crore wiped from Indian equities in 48h.`,
                nws: `IRAN: Operation Epic Fury cost exceeds $16.5B. Strait of Hormuz blocked. Global shipping down 96%.`
            },
            bn: {
                speech: "বিশ্লেষণ সম্পন্ন। ইরান যুদ্ধের কারণে বিশ্ববাজারে চরম অস্থিরতা। পুঁজি এখন সোনা এবং বিটকয়েনের দিকে ঝুঁকছে।",
                mkt: `বিটকয়েন: $৯২,৪০০ | সোনা: $৪,৫৩৪/আউন্স | ভারতীয় মার্কেট থেকে ১৮.৬ লক্ষ কোটি রুপি লোপাট।`,
                nws: `ইরান যুদ্ধ: ১২ দিনে খরচ ১৬.৫ বিলিয়ন ডলার ছাড়িয়েছে। হরমুজ প্রণালী অবরুদ্ধ; বৈশ্বিক জাহাজ চলাচল ৯৬% হ্রাস পেয়েছে।`
            }
        };

        const res = data[lang];
        market.innerHTML = `<div class='p-2 bg-blue-900/20 border-l-2 border-blue-400'>${res.mkt}</div>`;
        news.innerHTML = `<div class='p-2 bg-purple-900/20 border-l-2 border-purple-400'>${res.nws}</div>`;
        output.innerText = `"${res.speech}"`;
        speak(res.speech);
    }, 1200);
}

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const female = voices.find(v => v.name.includes('Google US English') || v.name.includes('Zira') || v.name.includes('Samantha'));
    if (female) msg.voice = female;
    msg.pitch = 1.3;
    msg.rate = 0.85; // Slow, seductive, yet commanding
    window.speechSynthesis.speak(msg);
}
