export const COUNTRY_ADDRESS = '0x94D737F3275Fb80c081D564767412FEB2c02E5b1'

export const COUNTRY_ABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "perCap",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "EPI",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "EH",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "EV",
				"type": "uint256"
			}
		],
		"name": "addCountry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "countries",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalCO2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "perCapCO2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "envPerfIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "envHealth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ecoVitality",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "changes",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "countryCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "genesis",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "history",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalCO2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "perCapCO2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "envPerfIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "envHealth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ecoVitality",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "changes",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "oldTotal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "oldPerCap",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "oldEPI",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "oldEH",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "oldEV",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numRevisions",
				"type": "uint256"
			}
		],
		"name": "storeOldCountry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "perCap",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "EPI",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "EH",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "EV",
				"type": "uint256"
			}
		],
		"name": "updateCountry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
