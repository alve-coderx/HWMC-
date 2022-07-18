import {Lucide, Tippy, Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  PreviewComponent,
  Preview,
  Source,
  Highlight, } from "@/base-components";
import logoUrl from "@/assets/images/logo-icon.png";
import TomSelect from "../../base-components/tom-select/Main";
import {useState} from 'react'
import MerkleRootGenerator from "../../components/merkle-root-generator/Main";
import SmartContractManage from "../../components/smart-contract-manage/Main";
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,


} from "@/base-components";

function Main() {
  

  
  return (
    <>
    <div className="box items-center justify-center mt-4">







<TabGroup>
                      <TabList className="nav-tabs">


                        <Tab className="w-full py-2" tag="button">
                         Smart Contract
                        </Tab>
                        <Tab className="w-full py-2" tag="button">
                          Merkle Root Generator
                        </Tab>

                        
                      </TabList>


                      <TabPanels className="border-l border-r border-b">


                        <TabPanel className="leading-relaxed p-5">
                          <div className="intro-y box flex flex-col items-center justify-center py-8">

                         <SmartContractManage />
                          </div>
                        </TabPanel>


                        <TabPanel className="leading-relaxed p-5">
                           <div className="intro-y box flex flex-col items-center justify-center py-4">
                            <MerkleRootGenerator />
                           
                           </div>
                        </TabPanel>


                      </TabPanels>
                    </TabGroup>


   


      </div>
    </>
  );
}

export default Main;
