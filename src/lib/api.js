import { createClient } from '@supabase/supabase-js';

// Initialisation du client Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key';
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Authentification
 */

// Inscription d'un utilisateur
export const signUp = async (email, password, userData) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    throw error;
  }
};

// Connexion d'un utilisateur
export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
};

// Déconnexion
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
    throw error;
  }
};

// Récupérer l'utilisateur actuel
export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data?.user;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur:', error);
    return null;
  }
};

/**
 * Gestion des postes
 */

// Créer un nouveau poste
export const createPosition = async (positionData) => {
  try {
    const { data, error } = await supabase
      .from('positions')
      .insert(positionData)
      .select();
    
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erreur lors de la création du poste:', error);
    throw error;
  }
};

// Récupérer tous les postes d'un recruteur
export const getPositions = async (recruiterId) => {
  try {
    const { data, error } = await supabase
      .from('positions')
      .select('*')
      .eq('recruiter_id', recruiterId);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des postes:', error);
    throw error;
  }
};

// Mettre à jour un poste
export const updatePosition = async (positionId, positionData) => {
  try {
    const { data, error } = await supabase
      .from('positions')
      .update(positionData)
      .eq('id', positionId)
      .select();
    
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erreur lors de la mise à jour du poste:', error);
    throw error;
  }
};

// Supprimer un poste
export const deletePosition = async (positionId) => {
  try {
    const { error } = await supabase
      .from('positions')
      .delete()
      .eq('id', positionId);
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du poste:', error);
    throw error;
  }
};

/**
 * Gestion des scripts d'entretien
 */

// Créer un nouveau script
export const createScript = async (scriptData) => {
  try {
    const { data, error } = await supabase
      .from('scripts')
      .insert(scriptData)
      .select();
    
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erreur lors de la création du script:', error);
    throw error;
  }
};

// Récupérer tous les scripts d'un recruteur
export const getScripts = async (recruiterId) => {
  try {
    const { data, error } = await supabase
      .from('scripts')
      .select('*')
      .eq('recruiter_id', recruiterId);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des scripts:', error);
    throw error;
  }
};

// Mettre à jour un script
export const updateScript = async (scriptId, scriptData) => {
  try {
    const { data, error } = await supabase
      .from('scripts')
      .update(scriptData)
      .eq('id', scriptId)
      .select();
    
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erreur lors de la mise à jour du script:', error);
    throw error;
  }
};

// Supprimer un script
export const deleteScript = async (scriptId) => {
  try {
    const { error } = await supabase
      .from('scripts')
      .delete()
      .eq('id', scriptId);
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du script:', error);
    throw error;
  }
};

/**
 * Gestion des candidatures
 */

// Créer une nouvelle candidature
export const createApplication = async (applicationData) => {
  try {
    const { data, error } = await supabase
      .from('applications')
      .insert(applicationData)
      .select();
    
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erreur lors de la création de la candidature:', error);
    throw error;
  }
};

// Récupérer toutes les candidatures pour un poste
export const getApplications = async (positionId) => {
  try {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .eq('position_id', positionId);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des candidatures:', error);
    throw error;
  }
};

// Mettre à jour le statut d'une candidature
export const updateApplicationStatus = async (applicationId, status) => {
  try {
    const { data, error } = await supabase
      .from('applications')
      .update({ status })
      .eq('id', applicationId)
      .select();
    
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut de la candidature:', error);
    throw error;
  }
};

/**
 * Gestion des entretiens
 */

// Créer un nouvel entretien
export const createInterview = async (interviewData) => {
  try {
    const { data, error } = await supabase
      .from('interviews')
      .insert(interviewData)
      .select();
    
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erreur lors de la création de l\'entretien:', error);
    throw error;
  }
};

// Récupérer tous les entretiens d'un recruteur
export const getInterviews = async (recruiterId) => {
  try {
    const { data, error } = await supabase
      .from('interviews')
      .select(`
        *,
        applications (
          *,
          positions (*)
        )
      `)
      .eq('recruiter_id', recruiterId);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des entretiens:', error);
    throw error;
  }
};

// Mettre à jour un entretien
export const updateInterview = async (interviewId, interviewData) => {
  try {
    const { data, error } = await supabase
      .from('interviews')
      .update(interviewData)
      .eq('id', interviewId)
      .select();
    
    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'entretien:', error);
    throw error;
  }
};

// Récupérer les détails d'un entretien
export const getInterviewDetails = async (interviewId) => {
  try {
    const { data, error } = await supabase
      .from('interviews')
      .select(`
        *,
        applications (
          *,
          positions (*)
        ),
        scripts (*)
      `)
      .eq('id', interviewId)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de l\'entretien:', error);
    throw error;
  }
};
