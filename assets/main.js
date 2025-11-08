let speech = new SpeechSynthesisUtterance()

let voices = []

let voiceSelect = document.getElementById('select')

let loadVoices = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voiceSelect.innerHTML = '';
    voices.forEach((voice,i ) => {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

loadVoices();

window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
}

document.getElementById('convert-btn').addEventListener('click', () => {
    speech.text = document.getElementById('text-input').value;
    window.speechSynthesis.speak(speech);
})