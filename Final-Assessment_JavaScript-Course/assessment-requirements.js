// Its a empty value variable that is responsible for holding NFTS
const NFTs = []

/* This function will take in some values as paremeters,
create an NFT object using the parameters passed to it for its metadata
and store it in the variable above
*/ 
function mintNFT (_lastName, _name, _middleName, _shoeBrand, _size, _price){
  const NFT = {
    "LastName" : _lastName.toUpperCase(),
    "Name" : _name.toUpperCase(),
    "MiddleName" : _middleName.toUpperCase(),
    "ShoeBrand" : _shoeBrand.toUpperCase(),
    "Size" : _size,
    "Price" : _price
  }

  //Store or Pushes the object into the variable above
  NFTs.push(NFT);
}

/* In this function, it calculates the total number of NFTs
by measuring the length of the "NFT" object above using for loop.
*/
function listNFTs(){
  for (let i = 0; i < NFTs.length; i++){
    console.log(`\nOrder:  ${i+1}`)
    console.log(`\nLast Name:  \t${NFTs[i].LastName}`);
    console.log(`Name:         \t${NFTs[i].Name}`);
    console.log(`Middle Name:  \t${NFTs[i].MiddleName}`);
    console.log(`Shoe Brand:   \t${NFTs[i].ShoeBrand}`);
    console.log(`Size:         \t${NFTs[i].Size}`);
    console.log(`Price:        \t$${NFTs[i].Price}`);
    console.log("\n-----------------------------------------------------");
  }
}

// This function prints the final output of the listNFTs function.
function getTotalSupply(){
  console.log(`\nTotal Supply: ${NFTs.length}\n`);
}

// Calling the function to execute its code and pass an arguments in a function. 
mintNFT("Curry", "Wardell", "Stephen", "Under Armour", 12, 500);
mintNFT("Acorda", "Megumi", "Cowhead", "Adidas", 9.5, 100);
listNFTs();
getTotalSupply();