'use client';

import React from 'react';
import { ToastProvider, useToast, Button } from '@siberui/react';

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button 
        variant="neon" 
        onClick={() => toast({ 
          title: 'Connection Established', 
          description: 'Secure socket layer initialized successfully.',
          variant: 'info'
        })}
      >
        Info Toast
      </Button>
      <Button 
        variant="neonGreen" 
        onClick={() => toast({ 
          title: 'Decryption Complete', 
          description: 'Files have been successfully decrypted.',
          variant: 'success'
        })}
      >
        Success Toast
      </Button>
      <Button 
        variant="destructive" 
        onClick={() => toast({ 
          title: 'Threat Detected', 
          description: 'Unauthorized access attempt blocked.',
          variant: 'destructive'
        })}
      >
        Destructive Toast
      </Button>
    </div>
  );
}

export function ToastDemoApp() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  );
}
