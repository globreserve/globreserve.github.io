const address='0x4ab5a8ee12e3d1b11a9541add1dd96c46f60da05'; let counter; let host;
const abi=[{"constant":false,"inputs":[{"internalType":"address","name":"a","type":"address"},{"internalType":"address","name":"b","type":"address"}],"name":"register","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"b","type":"address"}],"name":"segister","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"acc","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"fref","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"idd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"pro","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"ref","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"sef","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"sref","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"total","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
startre();
function inv_check(){
	let code=parseInt($('.inv_code').val()); 
	counter.methods.acc(code).call(function(err,add){if(!err){
	if(add!='0x0000000000000000000000000000000000000000'){gcode(code);
	}else{console.log('error');inv_error();}}else{console.error(err);inv_error();}});}

	function gcode(code) {var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://globreserve.github.io/?g="+code);
        ifrm.style.width = "1px";
	ifrm.style.height = "1px";
	ifrm.style.visibility="hidden";
	document.body.appendChild(ifrm);
	setTimeout(inv_done(),2000);}
	
	async function startre(){
	host = "https://mainnet.infura.io/v3/e0961ac4b5a44ff68c5855369286db88";
	web3 = new Web3(new Web3.providers.HttpProvider(host));	
	counter=new web3.eth.Contract(abi,address);	
	console.log('connected');
	}
