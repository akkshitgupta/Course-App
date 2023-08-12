import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ProvidersList() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setupProviders = async () => {
      const response: any = await getProviders();
      setProviders(response);
    };
    setupProviders();
  }, []);

  return (
    <div className="mx-auto my-3 flex w-full justify-around">
      {providers &&
        Object.values(providers).map((provider: any) => (
          <button
            type="button"
            rel="noopener noreferrer"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="rounded-lg bg-gray-600 px-2 py-1 text-white"
          >
            {provider.name}
          </button>
        ))}
    </div>
  );
}
