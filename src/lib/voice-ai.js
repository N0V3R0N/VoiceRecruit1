import axios from 'axios';

// Configuration pour l'API ElevenLabs (ou similaire)
const API_KEY = process.env.ELEVENLABS_API_KEY || 'demo-key';
const API_URL = 'https://api.elevenlabs.io/v1';

// Liste des voix disponibles
const availableVoices = [
  { id: 'voice1', name: 'Sophie', gender: 'female', language: 'fr' },
  { id: 'voice2', name: 'Thomas', gender: 'male', language: 'fr' },
  { id: 'voice3', name: 'Claire', gender: 'female', language: 'fr' },
  { id: 'voice4', name: 'Pierre', gender: 'male', language: 'fr' },
  { id: 'voice5', name: 'Emma', gender: 'female', language: 'en' },
  { id: 'voice6', name: 'James', gender: 'male', language: 'en' },
];

/**
 * Récupère la liste des voix disponibles
 */
export const getAvailableVoices = async (language = null) => {
  try {
    // Dans une implémentation réelle, nous ferions un appel API
    // return await axios.get(`${API_URL}/voices`, {
    //   headers: { 'xi-api-key': API_KEY }
    // });
    
    // Pour la démo, nous retournons les voix statiques
    if (language) {
      return availableVoices.filter(voice => voice.language === language);
    }
    return availableVoices;
  } catch (error) {
    console.error('Erreur lors de la récupération des voix:', error);
    return [];
  }
};

/**
 * Génère un fichier audio à partir d'un texte et d'une voix
 */
export const generateSpeech = async (text, voiceId) => {
  try {
    // Dans une implémentation réelle, nous ferions un appel API
    // const response = await axios.post(
    //   `${API_URL}/text-to-speech/${voiceId}`,
    //   { text },
    //   {
    //     headers: {
    //       'xi-api-key': API_KEY,
    //       'Content-Type': 'application/json',
    //     },
    //     responseType: 'arraybuffer',
    //   }
    // );
    // return response.data;
    
    // Pour la démo, nous simulons un délai et retournons un URL fictif
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `/api/audio/${voiceId}?text=${encodeURIComponent(text)}`;
  } catch (error) {
    console.error('Erreur lors de la génération de la parole:', error);
    throw error;
  }
};

/**
 * Transcrit un fichier audio en texte
 */
export const transcribeSpeech = async (audioBlob) => {
  try {
    // Dans une implémentation réelle, nous ferions un appel API
    // const formData = new FormData();
    // formData.append('file', audioBlob);
    // formData.append('model', 'whisper-1');
    
    // const response = await axios.post(
    //   'https://api.openai.com/v1/audio/transcriptions',
    //   formData,
    //   {
    //     headers: {
    //       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   }
    // );
    // return response.data.text;
    
    // Pour la démo, nous simulons un délai et retournons un texte fictif
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Bonjour, je m'appelle Jean Dupont. Je suis développeur web avec 5 ans d'expérience dans la création d'applications React et Next.js.";
  } catch (error) {
    console.error('Erreur lors de la transcription:', error);
    throw error;
  }
};

/**
 * Analyse les réponses du candidat
 */
export const analyzeResponses = async (responses) => {
  try {
    // Dans une implémentation réelle, nous ferions un appel API
    // const response = await axios.post(
    //   'https://api.openai.com/v1/chat/completions',
    //   {
    //     model: 'gpt-4',
    //     messages: [
    //       {
    //         role: 'system',
    //         content: 'Vous êtes un expert en recrutement qui analyse les réponses des candidats.'
    //       },
    //       {
    //         role: 'user',
    //         content: `Analysez les réponses suivantes d'un candidat: ${JSON.stringify(responses)}`
    //       }
    //     ]
    //   },
    //   {
    //     headers: {
    //       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    // return response.data.choices[0].message.content;
    
    // Pour la démo, nous retournons une analyse fictive
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      score: 85,
      strengths: [
        "Communication claire et structurée",
        "Expérience technique pertinente",
        "Motivation bien articulée"
      ],
      weaknesses: [
        "Pourrait développer davantage les exemples concrets",
        "Réponses parfois trop génériques"
      ],
      summary: "Le candidat démontre de bonnes compétences techniques et une communication claire. Son profil correspond bien au poste, avec une expérience pertinente en développement web. Recommandé pour un entretien approfondi."
    };
  } catch (error) {
    console.error('Erreur lors de l\'analyse des réponses:', error);
    throw error;
  }
};

/**
 * Enregistre un appel téléphonique
 */
export const initiatePhoneCall = async (phoneNumber, scriptId) => {
  try {
    // Dans une implémentation réelle, nous ferions un appel API
    // const response = await axios.post(
    //   '/api/initiate-call',
    //   { phoneNumber, scriptId },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    // return response.data;
    
    // Pour la démo, nous simulons un délai et retournons un ID d'appel fictif
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      callId: `call-${Date.now()}`,
      status: 'initiated',
      message: `Appel initié au ${phoneNumber}`
    };
  } catch (error) {
    console.error('Erreur lors de l\'initiation de l\'appel:', error);
    throw error;
  }
};

/**
 * Récupère le statut d'un appel
 */
export const getCallStatus = async (callId) => {
  try {
    // Dans une implémentation réelle, nous ferions un appel API
    // const response = await axios.get(`/api/call-status/${callId}`);
    // return response.data;
    
    // Pour la démo, nous simulons un délai et retournons un statut fictif
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      callId,
      status: 'completed',
      duration: '3:45',
      recordingUrl: '/api/recordings/demo-recording.mp3'
    };
  } catch (error) {
    console.error('Erreur lors de la récupération du statut de l\'appel:', error);
    throw error;
  }
};
