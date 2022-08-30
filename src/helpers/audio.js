/**
 * Attempt to speak a phrase with SpeechSynthesizer.
 *
 * TODO: Implement another speech synthesizer. The browser's speech synthesizer has 2 problems: fast users will have to time their presses, and when forceStop is false, the built-in synthesizer waits excessively.
 * @param phrase {string} The word or phrase that the user wants
 * the speech synthesizer to speak.
 * @param forceStop {boolean} If true, the speech synthesizer clears out its queue,
 * allowing it to speak again immediately instead of having a considerable delay between speeches.
 * If false and the synthesizer is already speaking, the function call will have no effect.
 */
function speak(phrase, forceStop = true) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    if (forceStop) {
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    } else if (!speechSynthesis.speaking) {
        speechSynthesis.speak(utterance);
    }
}

export {speak};