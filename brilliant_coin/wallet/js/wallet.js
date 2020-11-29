var gas_price = 40000000000;
var gas_limit = 550000;
	if(typeof ethereum !== 'undefined'){
		ethereum.autoRefreshOnNetworkChange=false;
		ethereum.on('accountsChanged', function (accounts){metast();})
		/* METAMASK REQUIRED window.open('https://metamask.io/','_blank');*/
	}else{
		/* METAMASK */
	}
	async function startre(){
		host = "https://mainnet.infura.io/v3/e0961ac4b5a44ff68c5855369286db88";
		web3 = new Web3(new Web3.providers.HttpProvider(host));	
		root = new web3.eth.Contract(rabi,raddr);
		forge = new web3.eth.Contract(fabi,faddr);
		setTimeout(starts(0),400);
		console.log('infura connected');
	}
	async function metast() {
		if (window.ethereum) {
			window.web3 = new Web3(ethereum); 
				try {
					await ethereum.enable();
					network=await web3.eth.net.getNetworkType(); 
					console.log(network);
					accounts = await web3.eth.getAccounts();
					root = new web3.eth.Contract(rabi,raddr);
					forge = new web3.eth.Contract(fabi,faddr);
					unlock();
				} catch(error){
					console.log('User denied account access');
				}
		} else {
		/* METAMASK REQUIRED window.open('https://metamask.io/','_blank');*/
		}
	}
	function unlock(){
		web3.eth.getAccounts(function(err, accounts){
		if(err != null){
			console.log(err);
		}else if(accounts.length===0){
			console.log('MetaMask is locked')
		}else{
		//logg("* WALLET LOADING *</br></br>");logg("# METAMASK UNLOCKED");
		setTimeout(starts(1),400);
		}
		});
	}

	function starts(a){

	};