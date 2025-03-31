import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAvailableVoices, generateSpeech, transcribeSpeech, analyzeResponses } from '../src/lib/voice-ai';

// Mock des fonctions globales
global.fetch = vi.fn();

describe('Voice AI Module', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getAvailableVoices', () => {
    it('should return all available voices when no language is specified', async () => {
      const voices = await getAvailableVoices();
      expect(voices).toBeInstanceOf(Array);
      expect(voices.length).toBeGreaterThan(0);
      expect(voices[0]).toHaveProperty('id');
      expect(voices[0]).toHaveProperty('name');
      expect(voices[0]).toHaveProperty('gender');
      expect(voices[0]).toHaveProperty('language');
    });

    it('should filter voices by language when specified', async () => {
      const frenchVoices = await getAvailableVoices('fr');
      expect(frenchVoices).toBeInstanceOf(Array);
      expect(frenchVoices.every(voice => voice.language === 'fr')).toBe(true);
    });
  });

  describe('generateSpeech', () => {
    it('should generate speech from text and voice ID', async () => {
      const text = "Bonjour, comment allez-vous ?";
      const voiceId = "voice1";
      
      const result = await generateSpeech(text, voiceId);
      
      expect(result).toContain('/api/audio/');
      expect(result).toContain(voiceId);
      expect(result).toContain(encodeURIComponent(text));
    });
  });

  describe('transcribeSpeech', () => {
    it('should transcribe audio to text', async () => {
      const audioBlob = new Blob(['fake audio data'], { type: 'audio/wav' });
      
      const result = await transcribeSpeech(audioBlob);
      
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('analyzeResponses', () => {
    it('should analyze candidate responses', async () => {
      const responses = [
        { question: "Pourriez-vous vous présenter ?", answer: "Je m'appelle Jean Dupont, je suis développeur web avec 5 ans d'expérience." }
      ];
      
      const result = await analyzeResponses(responses);
      
      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('strengths');
      expect(result).toHaveProperty('weaknesses');
      expect(result).toHaveProperty('summary');
      expect(result.strengths).toBeInstanceOf(Array);
      expect(result.weaknesses).toBeInstanceOf(Array);
    });
  });
});
