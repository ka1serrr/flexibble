'use client';
import { useState, useEffect } from 'react';
import { getProviders, signIn } from 'next-auth/react';

interface Provider {
  id: string;
  name: string;
  type: string;
  signInUrl: string;
  callbackUrl: string;
  signInUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;
export const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await getProviders();

        console.log(res);
        setProviders(res);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      }
    };

    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, index) => (
          <button key={index} onClick={() => signIn(provider?.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    );
  }
  return <div>AuthProviders</div>;
};
