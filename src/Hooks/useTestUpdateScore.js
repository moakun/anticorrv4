import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useTestUpdateScore = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const testUpdateScore = async (userName, score) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'http://localhost:3000/api/user/testUpdateScore',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName,
          score,
        }),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save user to local storage
      localStorage.setItem('user', JSON.stringify(json));
      //update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      setIsLoading(false);
    }
  };

  return { testUpdateScore, isLoading, error };
};
