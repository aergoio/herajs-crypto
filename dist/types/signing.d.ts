/// <reference types="node" />
import { ec } from 'elliptic';
/**
 * Returns signature encoded in DER format in base64.
 * @param sig
 */
declare const encodeSignature: (sig: ec.Signature, enc?: string) => string;
/**
 * Sign transaction with key.
 * @param {object} tx transaction
 * @param {BN} key key pair or private key
 */
declare const signMessage: (msgHash: Buffer, key: ec.KeyPair, enc?: string) => Promise<string>;
/**
 * Sign transaction with key.
 * @param {object} tx transaction
 * @param {BN} key key pair or private key
 */
declare const signTransaction: (tx: any, key: ec.KeyPair, enc?: string) => Promise<string>;
/**
 * Verify that a signature for msg was generated by key
 * @param key key pair or public key
 */
declare const verifySignature: (msg: Buffer, key: ec.KeyPair, signature: string, enc?: string) => Promise<boolean>;
/**
 * Verify that a signature for tx was generated by key
 */
declare const verifyTxSignature: (tx: any, key: ec.KeyPair, signature: string) => Promise<boolean>;
export { signMessage, signTransaction, verifySignature, verifyTxSignature, encodeSignature };
