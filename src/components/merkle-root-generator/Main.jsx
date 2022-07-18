import React from 'react'
import PropTypes from 'prop-types'
// import Dropzone from "../../base-components/dropzone/Main";
import { useEffect, useRef, useState } from "react";
import whitelistAddresses from '../../utils/whitelist.json'
import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import whitelist from '../../utils/whitelist';
import { waitFor } from '@testing-library/react';

function Main(props) {


  // const dropzoneSingleRef = useRef();

  const [fileKey, setFileKey] = useState("");
  const [merkleRootGenerated, setMerkleRootGenerated] = useState(false);
  const [merkleRootHash, setMerleRootHash] = useState("");
  const [wlArray, setWlArray] = useState([]);
  const [copiedToClipBoard, setcopiedToClipBoard] = useState(false);

/*   useEffect(() => {
    const elDropzoneSingleRef = dropzoneSingleRef.current;
    elDropzoneSingleRef.dropzone.on("success", (response) => {

      const fileData = JSON.parse(response.xhr.response)
      console.log("success", fileData.key);     
   
     

    });
    elDropzoneSingleRef.dropzone.on("error", () => {
      alert("No more files please!");
    });


  }, []); */

  function onDrop() {

    console.log("onDrop");
  }

  function generateMerkleTree(){
      console.log("Addresses",wlArray)
      setMerkleRootGenerated(false);

      if (wlArray.length < 1) {
        throw '\x1b[31merror\x1b[0m ' + 'The whitelist is empty, please add some addresses to the configuration.';
      }

      const leafNodes = wlArray.map(addr => keccak256((addr).toString()));

      const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
      console.log("Merkle Tree",merkleTree)
      const rootHash = '0x' + merkleTree.getRoot().toString('hex');
      console.log("Root Hash",rootHash)
      setMerkleRootGenerated(true)
      setMerleRootHash(rootHash)
      return rootHash;


  }

  function copyToClipboard(){
    setcopiedToClipBoard(true)
    navigator.clipboard.writeText(merkleRootHash);
    setTimeout(function() {
      setcopiedToClipBoard(false)
    }, 1000);


  }

  return (
    <>



                  
    {/*               <Dropzone
                      getRef={(el) => {
                        dropzoneSingleRef.current = el;
                      }}
                      options={{
                        url: "https://file.io/",
                        thumbnailWidth: 150,
                        maxFilesize: 0.5,
                        maxFiles: 1,
                        headers: null,
                      }}
                      className="dropzone"
                    >
                      <div className="text-lg font-medium">
                        Drop files here or click to upload.
                      </div>
                      <div className="text-gray-600">
                        This is just a demo dropzone. Selected files are
                        <span className="font-medium">not</span> actually
                        uploaded.
                      </div>
                    </Dropzone> */}


<label className="flex text-gray-600 justify-center py-6 text-lg font-bold">
    Or
</label>

<textarea name="comment" id="validation-form-6" className="form-control" placeholder="Copy Paste the Whitelist addresses" style={{height: "152px"}} onChange={(data)=>{
 setWlArray(data.target.value.split(/\r*\n\r*/))
 console.log("data",wlArray)
}}></textarea>

    <div className='flex justify-center mt-6'>
    <button className='flex btn btn-elevated-dark bg-black shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 justify-center' onClick={generateMerkleTree}>Generate</button>
    </div>  

    <div className='flex justify-center mt-8'>
        { merkleRootGenerated ?
        
        <div className=' justify-center text-center'><span className='text-lg py-2 pr-2'>Merkle Root: </span> <p className="text-red-600 text-lg">{merkleRootHash}</p>
        
        <button className='btn btn-dark w-auto my-4 mx-4 focus:outline-none' onClick={copyToClipboard}>
          {copiedToClipBoard ? "Copied" : "Copy"}
          </button>

        </div>
        
        :

        <>Press Generate</>

        }
    </div>
    

      
    </>
  )
}

Main.propTypes = {}

export default Main
