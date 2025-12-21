
let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (!audioContext) {
    // Safari requires the context to be created with a specific sample rate
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    audioContext = new AudioContext();
  }
  return audioContext;
};

export const playTone = (frequency: number): void => {
  try {
    const context = getAudioContext();
    if (context.state === 'suspended') {
      context.resume();
    }

    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    // Set properties
    oscillator.type = 'sine'; // 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);

    // Envelope to prevent clicking
    const now = context.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.5, now + 0.02); // Attack
    gainNode.gain.linearRampToValueAtTime(0, now + 0.5);   // Decay/Release

    oscillator.start(now);
    oscillator.stop(now + 0.5);
  } catch (error) {
    console.error("Failed to play tone:", error);
  }
};
