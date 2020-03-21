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
  }

  //uint == ID
  mapping (uint => Country) public countries;

  constructor () public {
    genesis();
  }

  function genesis() public {
    countries[countryCount] = Country(0, "America", 100, 99, 98, 97, 96);
    countryCount++;
  }


  function addCountry(string memory name, uint total, uint perCap, uint EPI, uint EH, uint EV) public {

    countries[countryCount] = Country(countryCount, name, total, perCap, EPI, EH, EV);

    countryCount ++;

  }

  function updateCountry(uint id, string memory name, uint total, uint perCap, uint EPI, uint EH, uint EV) public {

    countries[id] = Country(countryCount, name, total, perCap, EPI, EH, EV);

  }

}
