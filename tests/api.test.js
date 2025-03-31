import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  signUp, 
  signIn, 
  signOut, 
  getCurrentUser, 
  createPosition, 
  getPositions, 
  updatePosition, 
  deletePosition,
  createScript,
  getScripts,
  updateScript,
  deleteScript
} from '../src/lib/api';

// Mock de Supabase
vi.mock('@supabase/supabase-js', () => {
  const mockAuth = {
    signUp: vi.fn(),
    signInWithPassword: vi.fn(),
    signOut: vi.fn(),
    getUser: vi.fn()
  };
  
  const mockFrom = {
    insert: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    delete: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn()
  };
  
  const mockClient = {
    auth: mockAuth,
    from: vi.fn().mockReturnValue(mockFrom)
  };
  
  return {
    createClient: vi.fn().mockReturnValue(mockClient)
  };
});

describe('API Module', () => {
  const mockUser = { id: 'user-123', email: 'test@example.com' };
  const mockPosition = { id: 'position-123', title: 'Développeur Frontend' };
  const mockScript = { id: 'script-123', name: 'Entretien technique' };
  
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('Authentication', () => {
    it('should sign up a new user', async () => {
      const email = 'test@example.com';
      const password = 'password123';
      const userData = { full_name: 'Test User', company: 'Test Company' };
      
      const mockResponse = { data: { user: mockUser }, error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().auth.signUp.mockResolvedValue(mockResponse);
      
      const result = await signUp(email, password, userData);
      
      expect(createClient().auth.signUp).toHaveBeenCalledWith({
        email,
        password,
        options: { data: userData }
      });
      expect(result).toEqual(mockResponse.data);
    });

    it('should sign in a user', async () => {
      const email = 'test@example.com';
      const password = 'password123';
      
      const mockResponse = { data: { user: mockUser }, error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().auth.signInWithPassword.mockResolvedValue(mockResponse);
      
      const result = await signIn(email, password);
      
      expect(createClient().auth.signInWithPassword).toHaveBeenCalledWith({
        email,
        password
      });
      expect(result).toEqual(mockResponse.data);
    });

    it('should sign out a user', async () => {
      const mockResponse = { error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().auth.signOut.mockResolvedValue(mockResponse);
      
      await signOut();
      
      expect(createClient().auth.signOut).toHaveBeenCalled();
    });

    it('should get the current user', async () => {
      const mockResponse = { data: { user: mockUser }, error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().auth.getUser.mockResolvedValue(mockResponse);
      
      const result = await getCurrentUser();
      
      expect(createClient().auth.getUser).toHaveBeenCalled();
      expect(result).toEqual(mockUser);
    });
  });

  describe('Positions Management', () => {
    it('should create a new position', async () => {
      const positionData = { 
        title: 'Développeur Frontend', 
        description: 'Poste de développeur frontend React',
        recruiter_id: 'user-123'
      };
      
      const mockResponse = { data: [mockPosition], error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().from().insert.mockReturnThis();
      createClient().from().select.mockResolvedValue(mockResponse);
      
      const result = await createPosition(positionData);
      
      expect(createClient().from).toHaveBeenCalledWith('positions');
      expect(createClient().from().insert).toHaveBeenCalledWith(positionData);
      expect(createClient().from().select).toHaveBeenCalled();
      expect(result).toEqual(mockPosition);
    });

    it('should get all positions for a recruiter', async () => {
      const recruiterId = 'user-123';
      
      const mockResponse = { data: [mockPosition], error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().from().select.mockReturnThis();
      createClient().from().eq.mockResolvedValue(mockResponse);
      
      const result = await getPositions(recruiterId);
      
      expect(createClient().from).toHaveBeenCalledWith('positions');
      expect(createClient().from().select).toHaveBeenCalledWith('*');
      expect(createClient().from().eq).toHaveBeenCalledWith('recruiter_id', recruiterId);
      expect(result).toEqual(mockResponse.data);
    });

    it('should update a position', async () => {
      const positionId = 'position-123';
      const positionData = { title: 'Développeur Frontend Senior' };
      
      const mockResponse = { data: [mockPosition], error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().from().update.mockReturnThis();
      createClient().from().eq.mockReturnThis();
      createClient().from().select.mockResolvedValue(mockResponse);
      
      const result = await updatePosition(positionId, positionData);
      
      expect(createClient().from).toHaveBeenCalledWith('positions');
      expect(createClient().from().update).toHaveBeenCalledWith(positionData);
      expect(createClient().from().eq).toHaveBeenCalledWith('id', positionId);
      expect(createClient().from().select).toHaveBeenCalled();
      expect(result).toEqual(mockPosition);
    });

    it('should delete a position', async () => {
      const positionId = 'position-123';
      
      const mockResponse = { error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().from().delete.mockReturnThis();
      createClient().from().eq.mockResolvedValue(mockResponse);
      
      const result = await deletePosition(positionId);
      
      expect(createClient().from).toHaveBeenCalledWith('positions');
      expect(createClient().from().delete).toHaveBeenCalled();
      expect(createClient().from().eq).toHaveBeenCalledWith('id', positionId);
      expect(result).toBe(true);
    });
  });

  describe('Scripts Management', () => {
    it('should create a new script', async () => {
      const scriptData = { 
        name: 'Entretien technique', 
        description: 'Script pour entretien technique',
        recruiter_id: 'user-123',
        questions: ['Question 1', 'Question 2']
      };
      
      const mockResponse = { data: [mockScript], error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().from().insert.mockReturnThis();
      createClient().from().select.mockResolvedValue(mockResponse);
      
      const result = await createScript(scriptData);
      
      expect(createClient().from).toHaveBeenCalledWith('scripts');
      expect(createClient().from().insert).toHaveBeenCalledWith(scriptData);
      expect(createClient().from().select).toHaveBeenCalled();
      expect(result).toEqual(mockScript);
    });

    it('should get all scripts for a recruiter', async () => {
      const recruiterId = 'user-123';
      
      const mockResponse = { data: [mockScript], error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().from().select.mockReturnThis();
      createClient().from().eq.mockResolvedValue(mockResponse);
      
      const result = await getScripts(recruiterId);
      
      expect(createClient().from).toHaveBeenCalledWith('scripts');
      expect(createClient().from().select).toHaveBeenCalledWith('*');
      expect(createClient().from().eq).toHaveBeenCalledWith('recruiter_id', recruiterId);
      expect(result).toEqual(mockResponse.data);
    });

    it('should update a script', async () => {
      const scriptId = 'script-123';
      const scriptData = { name: 'Entretien technique avancé' };
      
      const mockResponse = { data: [mockScript], error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().from().update.mockReturnThis();
      createClient().from().eq.mockReturnThis();
      createClient().from().select.mockResolvedValue(mockResponse);
      
      const result = await updateScript(scriptId, scriptData);
      
      expect(createClient().from).toHaveBeenCalledWith('scripts');
      expect(createClient().from().update).toHaveBeenCalledWith(scriptData);
      expect(createClient().from().eq).toHaveBeenCalledWith('id', scriptId);
      expect(createClient().from().select).toHaveBeenCalled();
      expect(result).toEqual(mockScript);
    });

    it('should delete a script', async () => {
      const scriptId = 'script-123';
      
      const mockResponse = { error: null };
      const { createClient } = await import('@supabase/supabase-js');
      createClient().from().delete.mockReturnThis();
      createClient().from().eq.mockResolvedValue(mockResponse);
      
      const result = await deleteScript(scriptId);
      
      expect(createClient().from).toHaveBeenCalledWith('scripts');
      expect(createClient().from().delete).toHaveBeenCalled();
      expect(createClient().from().eq).toHaveBeenCalledWith('id', scriptId);
      expect(result).toBe(true);
    });
  });
});
