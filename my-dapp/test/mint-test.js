const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('MyNFT', function () {
    it('Should return the index of the minted NFT', async function () {
        const MyNFT = await ethers.getContractFactory('BinaryvillRobotsNFT');
        const robotsNFT = await MyNFT.deploy();
        // await robotsNFT.deployed();
        console.log('Deployed to:', robotsNFT.address);

        const [signer] = await ethers.getSigners();

        const nftdata = await robotsNFT.mintNFT(signer.address, 'ipfs://test-uri/');
        console.log('NFT minted with index:', nftdata);

        expect(await nftdata.value).to.eq(0);
    });
});