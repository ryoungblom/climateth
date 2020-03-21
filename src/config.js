export const COUNTRY_ADDRESS = '0x56700a05031d227594D5B1172d66f1d530b36BB9'

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
	}
]
