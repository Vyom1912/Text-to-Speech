let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
  // speech.rate = 1; // Speed of speech (0.1 to 10)
  // speech.pitch = 1; // Pitch of speech (0 to 2)

  //   alert("hhhhh");
});
