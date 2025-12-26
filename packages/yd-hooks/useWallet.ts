import { useState, useEffect, useCallback } from 'react';
// @ts-ignore
import { formatWalletAddress } from '@yd/libs';
import { ethers, BrowserProvider, JsonRpcSigner, Eip1193Provider } from 'ethers';

// Declare window.ethereum type
declare global {
  interface Window {
    ethereum: Eip1193Provider & {
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}

export interface UseWalletReturn {
  address: string;
  isConnected: boolean;
  formattedAddress: string;
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

/**
 * Custom hook for wallet operations using ethers.js
 * @returns {UseWalletReturn} Wallet state and methods
 */
const useWallet = (): UseWalletReturn => {
  const [address, setAddress] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [formattedAddress, setFormattedAddress] = useState<string>('');
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Initialize provider
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const _provider = new BrowserProvider(window.ethereum);
      setProvider(_provider);
      
      // Check if already connected
      _provider.listAccounts().then(accounts => {
        if (accounts.length > 0) {
          const account = accounts[0].address;
          setAddress(account);
          setIsConnected(true);
        }
      }).catch(err => {
        console.error("Failed to list accounts", err);
      });

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        } else {
          disconnectWallet();
        }
      };

      const handleChainChanged = () => {
        window.location.reload();
      };

      // Listen for account changes
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      // Listen for chain changes
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        // Cleanup listeners if possible (depends on provider implementation)
      };
    }
  }, []);

  const connectWallet = useCallback(async () => {
    if (!provider) {
      setError('MetaMask is not installed');
      return;
    }

    try {
      setError(null);
      // Request account access
      const accounts = await provider.send("eth_requestAccounts", []);
      const account = accounts[0];
      const _signer = await provider.getSigner();
      
      setSigner(_signer);
      setAddress(account);
      setIsConnected(true);
    } catch (err: any) {
      console.error('Failed to connect wallet:', err);
      setError(err.message || 'Failed to connect wallet');
    }
  }, [provider]);

  const disconnectWallet = useCallback(() => {
    // Note: MetaMask doesn't support programmatic disconnection
    setAddress('');
    setIsConnected(false);
    setFormattedAddress('');
    setSigner(null);
  }, []);

  useEffect(() => {
    if (address) {
      setFormattedAddress(formatWalletAddress(address));
    }
  }, [address]);

  return {
    address,
    isConnected,
    formattedAddress,
    connectWallet,
    disconnectWallet,
    provider,
    signer,
    error
  };
};

export default useWallet;
