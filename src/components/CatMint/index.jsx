import catImg from "../../assets/pic-nft.png";
import Footer from "../Footer/Footer";
import {
    Link,
} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProgressBar from "@ramonak/react-progress-bar";

import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'

const ADDRESS = "0x1331c99fdFEe2D6c3574Aaab9Ae42B9d599dea0a"
const ABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "_initBaseURI", "type": "string" }, { "internalType": "string", "name": "_initNotRevealedUri", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "AirDrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ReservedNFT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nftPerAddressLimit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "notRevealedUri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reveal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "revealed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newreserve", "type": "uint256" }], "name": "seReservedNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseExtension", "type": "string" }], "name": "setBaseExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newCost", "type": "uint256" }], "name": "setCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_limit", "type": "uint256" }], "name": "setNftPerAddressLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_notRevealedURI", "type": "string" }], "name": "setNotRevealedURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newmaxMintAmount", "type": "uint256" }], "name": "setmaxMintAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "walletOfOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }];

const providerOptions = {
    binancechainwallet: {
        package: true
    },
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "c0db0b85222f4f5c82dd2bed1fc843f9"
        }
    },
    walletlink: {
        package: WalletLink,
        options: {
            appName: "Net2Dev NFT Minter",
            infuraId: "c0db0b85222f4f5c82dd2bed1fc843f9",
            rpc: "",
            chainId: 1,
            appLogoUrl: null,
            darkMode: true
        }
    },
};

const web3Modal = new Web3Modal({
    network: "mainnet",
    theme: "dark",
    cacheProvider: true,
    providerOptions
});


export const CatMint = () => {

    var web3, contract, accounts;

    async function connectwallet() {
        var provider = await web3Modal.connect();
        web3 = new Web3(provider);
        await window.ethereum.send('eth_requestAccounts');
        accounts = await web3.eth.getAccounts();
        contract = new web3.eth.Contract(ABI, ADDRESS);
    }

    async function mint() {
        var _mintAmount = Number(1);
        var mintRate = Number(await contract.methods.cost().call());
        var totalAmount = mintRate * _mintAmount;
        contract.methods.mint(_mintAmount).send({ from: accounts[0], value: String(totalAmount) });
    }

    return (
        <>
            {/* <HelmetProvider>
                <Helmet>
                    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
                    <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
                    <script type="text/javascript" src="https://unpkg.com/web3modal"></script>
                    <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider"></script>
                    <script src="https://upgrace.in/templates/mint.js" type="text/javascript" />
                </Helmet>
            </HelmetProvider> */}
            <div className='container mx-auto text-white mt-[159px]'>
                <div className='xl:grid grid-cols-2 gap-x-12 mb-[100px]'>
                    <div className='content xl:max-w-[636px]'>
                        <h3 className='font-garmani md:text-[63px] text-[34px] font-normal leading-[42px] sm:leading-[74px]'>
                            MINT A BILLIONAIRE CAT'S MYSTERY BOX
                        </h3>
                        <p className='font-inter mt-4 text-[20px] mb-[37px]'>TO WIN A TESLA MODEL S AND ALOT MORE UPTO 250K IN PRIZES</p>
                        <div className='mint-nft border-2 border-[#E4A841] rounded-2xl py-[57px] px-[40px]'>
                            <h4 className='text-center font-garmani md:text-[61px] text-[34px] font-normal leading-[50px]'>Mint a MysteryBox</h4>
                            <h5 className='text-center mt-[5px] font-inter md:text-[26px] text-[20px] font-normal leading-[42px]'><span id="total_supply">0</span>/1000 NFTs</h5>

                            <form className='mt-[38px]'>
                                <div className='form-control'>
                                    <input className='border-b-4 border-[#373737] w-full bg-transparent placeholder:text-white leading-[42px] sm:text-[26px] text-base focus:outline-none sm:pb-8 pb-4' type='text' placeholder='Balance' />
                                </div>
                                <div className='main-quantity-box mt-12 flex border-b-4 border-[#373737] sm:pb-8 pb-4 items-center justify-between	'>
                                    <div className='form-control '>
                                        <input className='sm:w-32 w-[4rem] bg-transparent placeholder:text-white leading-[42px] sm:text-[26px] text-base focus:outline-none ' type='text' placeholder='Amount' />
                                    </div>
                                    <div className='quantity flex items-center'>
                                        <span style={{ cursor: "pointer" }} id="decrease_btn" className='text-base sm:text-[65px] sm:leading-[97px] sm:mr-12 mr-4'>-</span>
                                        <span id="mint_count" className='text-base sm:text-[65px] sm:leading-[97px] sm:mr-12 mr-4'>1</span>
                                        <span style={{ cursor: "pointer" }} id="increase_btn" className='text-base sm:text-[65px] sm:leading-[97px] '>+</span>
                                    </div>
                                    <button type="button" id="max_btn" className='max-button font-semibold	sm:text-[33px] text-base rounded-[10px] bg-white text-black py-2 sm:py-[9px] sm:px-[31px] px-2 sm:leading-[49px] leading-[20px]'>Max</button>

                                </div>
                                <div className=''>
                                    {/* <Link to='/'className='md:text-[30px] text-[20px] mt-[50px] mb-[15px] font-bold bg-[#E4A841] w-full py-[19px] leading-[54px] rounded-xl block text-center'>Available</Link> */}
                                    <button onClick={connectwallet} id="connect_btn" type="button" className='md:text-[30px] text-[20px] mt-[50px] mb-[15px] font-bold bg-[#E4A841] w-full py-[19px] leading-[54px] rounded-xl block text-center'>Connect Wallet</button>
                                    <button onClick={mint} style={{ display: "None" }} id="mint_btn" type="button" className='md:text-[30px] text-[20px] mt-[50px] mb-[15px] font-bold bg-[#E4A841] w-full py-[19px] leading-[54px] rounded-xl block text-center'>Mint</button>
                                </div>
                                <a id="mint_link" className="text-center text-[#A8A8A8] underline block" href='{#}'>Make sure your MetaMask wallet is connected</a>
                            </form>
                        </div>

                    </div>
                    <figure className='img-section xl:my-auto mt-28'>
                        <img className='ml-auto' src={catImg} />
                    </figure>
                </div>
            </div>
            <Footer />
        </>
    )
}