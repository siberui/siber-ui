'use client';

import { useState, useEffect } from 'react';
import { VERSION as LOCAL_VERSION } from '@siberui/react';

/**
 * Custom hook to return the current @siberui/react package version.
 * Defaults to package.json version and dynamically checks npm registry for published version updates.
 */
export function usePackageVersion(): string {
  const [version, setVersion] = useState<string>(LOCAL_VERSION);

  useEffect(() => {
    let isMounted = true;
    fetch('https://registry.npmjs.org/@siberui/react/latest')
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        if (isMounted && data?.version) {
          setVersion(data.version);
        }
      })
      .catch(() => {
        // Fallback silently to local package version if offline/failed
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return version;
}

export { LOCAL_VERSION };
