pragma solidity ^0.5.16;

contract CountryData {

  uint public countryCount = 0;

  struct Country {
    uint id;
    string country;
    uint totalCO2 ;
    uint perCapCO2;
    uint envPerfIndex;
    uint envHealth;
    uint ecoVitality;
    uint changes;
  }

  //uint == ID
  mapping (uint => Country) public countries;
  mapping (string => Country[]) public history;

  constructor () public {
    genesis();
  }


  function genesis() public {
    countries[countryCount] = Country(0, "America", 100, 99, 98, 97, 96, 0);
    countryCount++;
  }


  function addCountry(string memory name, uint total, uint perCap, uint EPI, uint EH, uint EV) public {

    countries[countryCount] = Country(countryCount, name, total, perCap, EPI, EH, EV, 0);

    countryCount ++;

  }

  function updateCountry(uint id, string memory name, uint total, uint perCap, uint EPI, uint EH, uint EV) public {

    uint oldTotal = countries[id].totalCO2;
    uint oldPerCap = countries[id].perCapCO2;
    uint oldEPI = countries[id].envPerfIndex;
    uint oldEH = countries[id].envHealth;
    uint oldEV = countries[id].ecoVitality;
    uint numRevisions = countries[id].changes;

    storeOldCountry(id, name, oldTotal, oldPerCap, oldEPI, oldEH, oldEV, numRevisions);

    countries[id] = Country(id, name, total, perCap, EPI, EH, EV, (numRevisions+1) );
  }

  function storeOldCountry(uint id, string memory name, uint oldTotal, uint oldPerCap, uint oldEPI, uint oldEH, uint oldEV, uint numRevisions) public {

    Country memory countryHistory = Country(id, name, oldTotal, oldPerCap, oldEPI, oldEH, oldEV, numRevisions);

    history[name].push(countryHistory);

  }

}
