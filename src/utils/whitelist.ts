import whitelistAddresses from './whitelist.json';
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';


export default new class Whitelist {
     merkleTree;
  
     getMerkleTree(wlAddresses)
    {
      if (this.merkleTree === undefined) {
        const leafNodes = wlAddresses.map(addr => keccak256((addr).toString()));
        
        this.merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
      }
  
      return this.merkleTree;
    }
  
     getProofForAddress(address, wlAddresses)
    {
      return this.getMerkleTree(wlAddresses).getHexProof(keccak256(address));
    }
  
     getRawProofForAddress(address, wlAddresses)
    {
      return this.getProofForAddress(address, wlAddresses).toString().replaceAll('\'', '').replaceAll(' ', '');
    }
  
     contains(address, wlAddresses)
    {
      return this.getMerkleTree(wlAddresses).getLeafIndex(Buffer.from(keccak256(address))) >= 0;
    }
  };