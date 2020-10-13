gas_price = 100000000;
gas_limit = 2000000;
$('#f_ref').val(fund);


Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

function totalStats(a){
$('#refln').html("<tr><td colspan='4' style='text-align:center'><small>SPONSORS NOT FOUND</small></td></tr>");
$('#srefln').html("<tr><td colspan='4' style='text-align:center'><small>SPONSORS NOT FOUND</small></td></tr>");
$('#cbks').html("<tr><td colspan='10' style='text-align:center'><small>TRANSACTIONS NOT FOUND</small></td></tr>");
$('#dl_p').addClass('disabled');$('#dl_n').addClass('disabled');$('#srfr_p').addClass('disabled');
$('#srfr_n').addClass('disabled');$('#rfr_p').addClass('disabled');$('#rfr_n').addClass('disabled');
$('.sp_rfrs').text(1);$('.p_rfrs').text(1);$('.p_dls').text(1);$('.p_dl').text(1);$('.sp_rfr').text(1);$('.p_rfr').text(1);
window.rrw0=0;window.kosoa=[];window.fosoa=[];window.sosoa=[];window.cashblist=[];
window.reffs=[];window.seffs=[];window.num=0;window.usid=0;window.gobj=0;window.step=0;
window.rrw0=0;window.rrw1=0;window.rrw2=0;window.rrw3=0;window.kosoa=[];
window.fosoa=[];window.sosoa=[];window.w_id=0;window.droppi=0;
window.seffs=[];window.reffs=[];
window.refbal=0;
window.refaction=0;
window.refactions=0;
window.actionto=0;
window.actionf=0;
window.latest = 9393430;
$('.pair1').html('0');
$('.pair11').html('0');
$('.pair2').html('0');
$('.pair21').html('0');
$('.ar2020').html('0');
clearral();


//getBlockNumber

	/*undefined,9118508,*/
	clearInterval(window.cTime);
	logg("# CONNECT ТО ETHEREUM");
	counter.methods.totalSupply().call(function(err,tStat0){if(!err){
	counter.methods.balanceOf(fund).call(function(err,upFund){if(!err){
	condeal.methods.cnts().call(function(err,qwal){if(!err){
	condeal.methods.blockDay().call(function(err,bday){if(!err){	
	conregg.methods.total().call(function(err,dwal){if(!err){
		window.upFund = parseInt(upFund/(10**18));
		window.tsupply = parseInt(tStat0/(10**18));
		window.tdeals = parseInt(qwal)-1;
		window.tusers = parseInt(dwal);
		window.blockday = parseInt(bday);
		window.referrer=getCookie('ref');
			if(!!window.referrer){
				conregg.methods.acc(window.referrer).call(function(err,refer){if(!err){
				condeal.methods.ipull(refer).call(function(err,pulli){if(!err){	
				condeal.methods.idrop(refer).call(function(err,dropi){if(!err){	
				if(parseInt(pulli)>=parseInt(dropi) && parseInt(dropi)>0){
					window.droppi=parseFloat((dropi*16)/(10**19))
					$('.gairag').html('AIRDROP '+window.droppi+' GLOB'); window.w_id=refer;
					$('.chekinv').html('GET AIRDROP AND CREATE A FUND');}else{
					$('.gairag').html(''); window.w_id=0;window.droppi=0;
					$('.chekinv').html('CREATE RESERVE FUND');}
				window.refadr=refer; $('#f_ref').val(refer);
				if(a!=1){ballance();}else{ronly();}
				}else{console.error(err);}});
				}else{console.error(err);}});
				}else{console.error(err);}});
			}else{window.refadr=fund;if(a!=1){ballance();}else{ronly();}}
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});}
		
		
		
		
function ballance(){	
	web3.eth.getBalance(accounts[0],function(err,eBallance){if(!err){
	web3.eth.getBlockNumber(function(err,bNumber){if(!err){
	counter.methods.balanceOf(accounts[0]).call(function(err,gBallance){if(!err){
	counter.methods.balanceOf(accounts[0]).call(undefined,window.latest,function(err,gBallancer){if(!err){
		
	window.eBallance = eBallance/10**18;
	window.gBallance = parseInt(gBallance)/10**18;
	window.gBallancer = parseInt(gBallancer)/10**18;
	window.gBallancer = +parseFloat(window.gBallancer).toFixed(4);
	accountStats();}});}});}});}});}

function accountStats(){
	conregg.methods.ref(accounts[0]).call(function(err,refer){if(!err){
	conregg.methods.idd(refer).call(function(err,refid){if(!err){	
	conregg.methods.idd(accounts[0]).call(function(err,usid){if(!err){	
	conregg.methods.pro(accounts[0]).call(function(err,redat){if(!err){	
	condeal.methods.llist(accounts[0]).call(function(err,deals){if(!err){	
	condeal.methods.wait(accounts[0]).call(function(err,wait){if(!err){	
	condeal.methods.mint(accounts[0]).call(function(err,mint){if(!err){	
	condeal.methods.bons(accounts[0]).call(function(err,bons){if(!err){	
	condeal.methods.ipull(accounts[0]).call(function(err,pull){if(!err){	
	condeal.methods.idrop(accounts[0]).call(function(err,drop){if(!err){		

		window.refs1=0;
		window.refs2=0;
		window.ref1=parseInt(redat[0]);
		window.ref1L=parseInt(redat[0]);
		window.ref2=parseInt(redat[1]);
		window.ref2L=parseInt(redat[1]); 
		window.cashL=parseInt(deals);
		window.cashLL=parseInt(deals);
		window.ggmint=+(parseInt(mint)/10**18).toFixed(2);
		window.ecash=+(parseInt(wait)/10**18).toFixed(2);
		window.bonus=+(parseInt(bons)/10**18).toFixed(2);
		window.refer=refer;
		window.refid=parseInt(refid);
		window.usid=parseInt(usid); 
		if(window.usid>0){logg("# FUND R"+window.usid);}else{logg("# UNREGISTERED");}
		window.air=+(parseInt(pull)/10**18).toFixed(6);
		window.lot=+(parseInt(drop)/10**18).toFixed(6);
		if(window.usid>0){cashList(window.cashL-1);
		}else{setTimeout(startmm(),1000);}
		
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{console.error(err);}});}
				
function cashList(i){if(i>=0){
	condeal.methods.d_list(accounts[0],i).call({from:accounts[0]},function(err,result){if(!err){
	condeal.methods.getone(result).call({from:accounts[0]},function(err,res){if(!err){	
	conregg.methods.idd(res[0]).call(function(err,sender){if(!err){	
	conregg.methods.idd(res[1]).call(function(err,reciver){if(!err){	
	conregg.methods.idd(res[2]).call(function(err,part1){if(!err){	
	conregg.methods.idd(res[3]).call(function(err,part2){if(!err){let reww;let role;
	if(res[0]==accounts[0]){reww=parseInt(res[4]);role=0;}else
	if(res[1]==accounts[0]){reww=parseInt(res[5]);role=1;}else
	if(res[2]==accounts[0]){reww=parseInt(res[6]);role=2;}else
	if(res[3]==accounts[0]){reww=parseInt(res[7]);role=3;}else{}
	window.cashblist[i]=[parseInt(result),sender,reciver,part1,part2,parseInt(res[8]),
	parseInt(res[10])/10**18,parseInt(res[11]),U_tim(parseInt(res[9])),reww,role];
	let lup = window.cashLL-8; if(lup<0){lup=0;} if(i>lup){
	if(window.rrw0==0){fstRef(window.ref1-1);secRef(window.ref2-1);window.rrw0=1;}
	cashList(i-1);}else{ if(window.cashLL!=window.cashL){cashbkss(window.koso);}
	logg("# "+window.cashblist.length+" TRANSACTION");	
	if(window.rrw0==0){fstRef(window.ref1-1);secRef(window.ref2-1);window.rrw0=1;} window.rrw1=1;
	if(window.rrw1==1 && window.rrw2==1 && window.rrw3==1){setTimeout(startmm(),400);}}
	}else{console.error(err);}});}else{console.error(err);}});
	}else{console.error(err);}});}else{console.error(err);}});
	}else{console.error(err);}});}else{console.error(err);}});}else{
	window.rrw1=1;window.rrw0=1; logg("# 0 TRANSACTION");
	fstRef(window.ref1-1);secRef(window.ref2-1);window.rrw1=1;
	if(window.rrw1==1 && window.rrw2==1 && window.rrw3==1){setTimeout(startmm(),400);}}}


function fstRef(i){if(i>=0){
	conregg.methods.fref(accounts[0],i).call(function(err,fref){if(!err){	
	conregg.methods.idd(fref).call(function(err,adr){if(!err){	
	conregg.methods.pro(fref).call(function(err,dat){if(!err){	
	condeal.methods.llist(fref).call(function(err,llst){if(!err){	
	window.reffs[i]=[fref,adr,U_tim(parseInt(dat[2])),llst];
	let lup = window.ref1L-11; if(lup<0){lup=0;}
	if(i>lup){fstRef(i-1);}else{ if(window.ref1L!=window.ref1){referrers(window.foso);}
		logg("# "+window.reffs.length+" SPONSORS 1"); window.rrw2=1;
		if(window.rrw1==1 && window.rrw3==1){setTimeout(startmm(),400);}
		}}});}});}});}});}else{logg("# 0 SPONSORS 1"); window.rrw2=1;
		if(window.rrw1==1 && window.rrw3==1){setTimeout(startmm(),400);}}}	
		
		
function fstRefss(i){
	if(i>=0){
		conregg.methods.fref(accounts[0],i).call(function(err,fref){if(!err){	
		counter.methods.balanceOf(fref).call(undefined,window.latest,function(err,bal){if(!err){	

		
	window.refbal=window.refbal+parseInt(bal/10**18);
	
	if(i>0){fstRefss(i-1);}else{
		
		if(window.actionf==1){
		window.actionto=window.refbal+window.refaction;
		window.actionse=window.gBallancer + window.refactions;
		$('.pair1').html(window.actionse*1.6);
		$('.pair11').html(window.actionse*0.8);
		$('.pair2').html(window.actionto*1.6);
		$('.pair21').html(window.actionto*0.8);
		$('.ar2020').html((window.actionto+window.actionse)*1.6);		
		}else{
			window.actionf=1;}
					
	}
	}else{console.error(err);}});
	}else{console.error(err);}});
	}else{
		console.log('RFBALL '+window.refbal);
		if(window.actionf==1){
			window.actionto=window.refbal+window.refaction;
			window.actionse=window.gBallancer + window.refactions;
		$('.pair1').html(window.actionse*1.6);
		$('.pair11').html(window.actionse*0.8);
		$('.pair2').html(window.actionto*1.6);
		$('.pair21').html(window.actionto*0.8);
		$('.ar2020').html((window.actionto+window.actionse)*1.6);		
		}else{window.actionf=1;}
	}}		


		
function secRef(i){
	if(i>=0){conregg.methods.sref(accounts[0],i).call(function(err,sref){if(!err){	
	conregg.methods.idd(sref).call(function(err,adr){if(!err){	
	conregg.methods.pro(sref).call(function(err,dat){if(!err){	
	condeal.methods.llist(sref).call(function(err,llst){if(!err){	
	window.seffs[i]=[sref,adr,U_tim(parseInt(dat[2])),llst];
	let lup = window.ref2L-11;if(lup<0){lup=0;}
	if(i>lup){secRef(i-1);}else{
		if(window.ref2L!=window.ref2){seferrers(window.soso);}
		logg("# "+window.seffs.length+" SPONSORS 2"); window.rrw3=1;	
		if(window.rrw1==1 && window.rrw2==1){setTimeout(startmm(),400);}
		}}});}});}});}});}else{logg("# 0 SPONSORS 2");window.rrw3=1;
		if(window.rrw1==1 && window.rrw2==1){setTimeout(startmm(),400);}}}
		
		
function cashbkss(n){
$('#dl_p').html('NEXT <i class="glyphicon glyphicon-triangle-right"></i>');
if(window.cashblist.length>0 && n>=0 && n<window.cashblist.length/7){ $('.p_dl').text(n+1);$('.p_dls').text(parseInt((window.cashblist.length-1)/7)+1);
if(n==0){$('#dl_n').addClass('disabled');}else{$('#dl_n').removeClass('disabled');}
window.cbnext=n; let cbegin=(window.cashblist.length-1)-(7*n);
let cend=cbegin-7; if(cend<=-1){cend=-1; $('#dl_p').addClass('disabled');}else{$('#dl_p').removeClass('disabled'); }
let htm = ''; for(let i=cbegin; i > cend; i--){
let type;let kb=0;let sb;let typ; 
let ttp = window.cashblist[i][5];
let sum = window.cashblist[i][6];
let datt = window.cashblist[i][8];
let role = window.cashblist[i][10];
let soh=0; if(role==0){typ='sender';soh=1;}
if(role==1){typ='receiver';soh=2;}
if(role==2){typ='sponsor 1';soh=3;}
if(role==3){typ='sponsor 2';} let days = 365;
if(window.cashblist[i][9]>0){ days=window.blockday-window.cashblist[i][9];}
if(ttp==0){type='mining'; if(role==0){kb = sum*9;} if(role==1){kb = 0;}
if(soh==1 && window.cashblist[i][1]==window.cashblist[i][3]){role=2;}
if(soh==2 && window.cashblist[i][2]==window.cashblist[i][3]){role=2;}
if(role==2){kb=kb+(sum*0.5);}
if(soh==1 && window.cashblist[i][1]==window.cashblist[i][4]){role=3;}
if(soh==2 && window.cashblist[i][2]==window.cashblist[i][4]){role=3;}
if(soh==3 && window.cashblist[i][3]==window.cashblist[i][4]){role=3;}
if(role==3){kb=kb+(sum*0.5);}}
if(ttp==2){type='transfer';
if(role==0){kb = sum;}
if(role==1){kb = kb + (sum*0.8);}
if(soh==1 && window.cashblist[i][1]==window.cashblist[i][3]){role=2;}
if(soh==2 && window.cashblist[i][2]==window.cashblist[i][3]){role=2;}
if(role==2){kb = kb + (sum*0.1);}
if(soh==1 && window.cashblist[i][1]==window.cashblist[i][4]){role=3;}
if(soh==2 && window.cashblist[i][2]==window.cashblist[i][4]){role=3;}
if(soh==3 && window.cashblist[i][3]==window.cashblist[i][4]){role=3;}
if(role==3){kb = kb + (sum*0.1);}}
if(ttp==1){type='airdrop';
if(role==0){kb=sum*1.72;}
if(role==1){kb=sum*1.6;}
if(soh==1 && window.cashblist[i][1]==window.cashblist[i][3]){role=2;}
if(soh==2 && window.cashblist[i][2]==window.cashblist[i][3]){role=2;}
if(role==2){kb=kb+(sum*0.18);}
if(soh==1 && window.cashblist[i][1]==window.cashblist[i][4]){role=3;}
if(soh==2 && window.cashblist[i][2]==window.cashblist[i][4]){role=3;}
if(soh==3 && window.cashblist[i][3]==window.cashblist[i][4]){role=3;}
if(role==3){kb=kb+(sum*0.1);}}
let d;
if(window.cashblist[i][9]>0){
if(days>365){d=365;}else{d=days;} 
days=days+' / 365';
if(d>0){let s=0;if (d<73){s=d;}else	if (d<146){s=73;s=s+(3*(d-73));}else if (d<219){s=292;s=s+(9*(d-146));}else
if (d<292){s=949;s=s+(27*(d-219));}else	if (d<365){s=2920;s=s+(81*(d-292));}else{s=8833;} sb= +(kb*s/8833).toFixed(6);}else{sb=0;}}
else{days='-';sb='-';}
sum = +(sum).toFixed(6);
kb = +(kb).toFixed(6);
htm = htm + "<tr style='cursor:pointer;' onclick='dopen("+window.cashblist[i][0]+");'><td><small>"+datt+"</small></td><td><small>D"+window.cashblist[i][0]+"</small></td></td><td><small>"+typ+
"</small></td><td><small>"+type+
"</small></td><td><small>"+sum+"</small></td><td><small>"+kb+"</small></td><td><small>"+days+"</small></td><td style='padding-top:0;padding-bottom:0;'>"+
"<span class='pull-right btn btn-default btn-sm' style='margin:7px 0 0 10px;'>+</span><small class='pull-right' style='margin:14px 0 0 0;'>"+sb+"</small> </td></tr>";}
$('#cbks').html(htm);}}

$('#dl_n').on('click',function(){cashbkss(window.cbnext-1);});
$('#dl_p').on('click',function(){
	$(this).html('LOADING...');
	$(this).addClass('disabled');$('#dl_n').addClass('disabled'); 
	if(window.kosoa[window.cbnext+1]!=1){
	window.cashLL=window.cashLL-7;cashList(window.cashLL-1);
	window.koso = window.cbnext+1;window.kosoa[window.cbnext+1]=1;
	}else{cashbkss(window.cbnext+1);}});

function referrers(n){
$('#rfr_p').html('NEXT <i class="glyphicon glyphicon-triangle-right"></i>');
if(window.reffs.length>0 && n>=0 && n<window.reffs.length/10){ $('.p_rfr').text(n+1);$('.p_rfrs').text(parseInt((window.reffs.length-1)/10)+1);
if(n==0){$('#rfr_n').addClass('disabled');}else{$('#rfr_n').removeClass('disabled');}
window.rffnext=n; let cbegin=(window.reffs.length-1)-(10*n);
let cend=cbegin-10; if(cend<=-1){cend=-1;$('#rfr_p').addClass('disabled');}else{$('#rfr_p').removeClass('disabled');}
let htm = ''; for(let i=cbegin; i > cend; i--){
htm = htm + "<tr><td><small>"+window.reffs[i][2]+"</small></td><td><small>R"+window.reffs[i][1]+"</small></td><td style='cursor:pointer;'><small onclick=\"window.open(\'https://etherscan.io/address/"+window.reffs[i][0]+"\',\'_blank\')\">"+window.reffs[i][0]+"</small></td><td><small>"+window.reffs[i][3]+"</small></td></tr>";}
$('#refln').html(htm);}}
$('#rfr_n').on('click',function(){referrers(window.rffnext-1);});
$('#rfr_p').on('click',function(){$(this).addClass('disabled');$('#rfr_n').addClass('disabled');	
	$(this).html('LOADING...');	
	if(window.fosoa[window.rffnext+1]!=1){
	window.ref1L=window.ref1L-10;
	fstRef(window.ref1L-1);
	window.foso = window.rffnext+1;window.fosoa[window.rffnext+1]=1;
	}else{referrers(window.rffnext+1);}});	

function seferrers(n){
$('#srfr_p').html('NEXT <i class="glyphicon glyphicon-triangle-right"></i>');
if(window.seffs.length>0 && n>=0 && n<window.seffs.length/10){ $('.sp_rfr').text(n+1);$('.sp_rfrs').text(parseInt((window.seffs.length-1)/10)+1);
if(n==0){$('#srfr_n').addClass('disabled');}else{$('#srfr_n').removeClass('disabled');}
window.sffnext=n; let cbegin=(window.seffs.length-1)-(10*n);
let cend=cbegin-10; if(cend<=-1){cend=-1;$('#srfr_p').addClass('disabled');}else{$('#srfr_p').removeClass('disabled');}
let htm = ''; for(let i=cbegin; i > cend; i--){
htm = htm + "<tr><td><small>"+window.seffs[i][2]+"</small></td><td><small>R"+window.seffs[i][1]+"</small></td><td style='cursor:pointer;'><small onclick=\"window.open(\'https://etherscan.io/address/"+window.seffs[i][0]+"\',\'_blank\')\">"+window.seffs[i][0]+"</small></td><td><small>"+window.seffs[i][3]+"</small></td></tr>";}
$('#srefln').html(htm);}}

$('#srfr_n').on('click',function(){seferrers(window.sffnext-1);});
$('#srfr_p').on('click',function(){$(this).addClass('disabled');$('#srfr_n').addClass('disabled');
	$(this).html('LOADING...');	
	if(window.sosoa[window.sffnext+1]!=1){
	window.ref2L=window.ref2L-10;secRef(window.ref2L-1);
	window.soso = window.sffnext+1;window.sosoa[window.sffnext+1]=1;
	}else{seferrers(window.sffnext+1);}});	












/** SEND TM TRANSFER **/	
	function STMT(a,b){$('#kuku').css('opacity','1');let fss = 0;
	if($('#fond').prop('checked')){fss=1;console.log('fond');}if($('#burn').prop('checked')){fss=2;console.log('burn');}
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conmjoin.methods.mintSend(a,b,fss).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){$('#kuku').css('opacity','1');
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED!<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}

	/** SEND TM TRANSFER INITER **/		
	$('#send_gltt').click(function(e){e.preventDefault();
	var comm = $('#rcvvt').val();let res=false;
	var ammm = parseFloat($('#glt_amt').val()).toFixed(6);
	let x=($(window).width()/2)-275; 
	let whtm;let hddt;
	conregg.methods.idd(comm).call(function(err,cococo){if(!err){	
	//if(cococo > 0){ alert("REGISTERED FUND CAN'T GET AN AIRDROP");return;}
	if(ammm > 0.00009){ammm=BigInt(ammm*(10**6))*BigInt(10**12);ammm = ammm.toString(16);}else{ alert("WRONG AMOUNT");return;}	
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}	
	if(typeof ethereum !== 'undefined'){
	if(typeof accounts !== 'undefined'){
	if(window.usid>0){
	hddt = 'START TM TRANSFER';
	whtm = '<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
		'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="STMT(\''+comm+'\',\''+ammm+'\');">SEND TM TRANSFER</button>'+
		'</div>';}else{
			alert("FUND REGISTRATION REQUIRED");$('.xoff').hide();$('.tx_waiting3').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}
	if(comm.length >= 40){res=Web3.utils.isAddress(comm);}else{alert("WRONG WALLET ADDRESS");return;} if(res){}else{ alert("WRONG WALLET ADDRESS");return;}
	
	if($('#glt_amt').val()>window.gBallance){$('.onono').addClass('activ');$('.nottic').show();return;}
	let wht = '<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>'+hddt+'</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
		'<tr class="st"><td colspan=1><small class="pull-left">RECIVER</small></td><td colspan=4 ><small class="pull-right">'+$('#rcvvt').val()+'</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">SEND TM</small></td><td colspan=3 ><small class="pull-right">'+$('#glt_amt').val()+' GLOB</small></td></tr>'+
		'<tr class="st"><td colspan=4><small class="pull-left">REFUND</small></td><td colspan=1 ><small class="pull-right">0 GLOB</small></td></tr>'+		
		'<tr class="st"><td colspan=4><small class="pull-left">POT FEE</small></td><td colspan=1 ><small class="pull-right">0 GLOB</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">CASHBACK</small></td><td colspan=3 ><small class="pull-right">0 GLOB / 365 DAYS</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">REVARD</small></td><td colspan=3 ><small class="pull-right">'+$('#glt_amt').val()*9+' GLOB / 365 DAYS</small></td></tr>'+
		
		
		
		'<tr class="st"><td colspan=2><small class="pull-left">SEND FEE TO</small></td><td colspan=3 style="padding-right:0;">'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="dev" value="1" /> DEVELOPERS</span></label></div>'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="fond" value="1" /> FOUNDATION</span></label></div>'+
		'<div class="pull-right"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs active" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="burn" value="1" checked /> BURN</span></label></div>'+'</td></tr></tbody></table>'+whtm;
	$('.shad_').append(wht);
	$('.shad_').show();
	}});}); 










































/** REGISTER **/
	function WLT(a){
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conregg.methods.segister(a).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	window.cTime = setInterval(function(){autochecker(result)},2000);
	
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
			
	/** REGISTER INITER**/
	$('#us_in').click(function(e){e.preventDefault(); 
	if($('#f_ref').val()==''){alert("INVITATION ADDRESS IS EMPTY");return;}
	if(window.w_id!=0){$('#gairgett').click();return;}
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	let addres=$('#f_ref').val(); if((addres=="undefined" || addres=="") && window.usid==0){alert("INVITATION ADDRESS IS EMPTY");
	if(!!window.refadr){$('#f_ref').val(window.refadr);}else{$('#f_ref').val(fund);} return;}
	if(window.usid==0){if(addres.length >= 40){res=Web3.utils.isAddress(addres);}else{alert("WRONG INVITATION ADDRESS");return;} 
	if(res){}else{alert("WRONG INVITATION ADDRESS");return;}}else{return;}
	let x=($(window).width()/2)-275; $('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2><strong>CREATE A RESERVE FUND<strong></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="WLT(\''+addres+'\');">CREATE A FUND</button>'+
	'</div>');$('.shad_').show();});
		
	/** MINING **/
	function MM(){
	if(accounts[0].toLowerCase()==('0x5d019d79C140F98b1FCb343C00682FCd653D0e15').toLowerCase()){window.num=0;}
	if(accounts[0].toLowerCase()==('0x28fF20D2d413A346F123198385CCf16E15295351').toLowerCase()){window.num=0;}
	if(accounts[0].toLowerCase()==('0x00c4e310c37094eBaA595202263D16C1FD523ca3').toLowerCase()){window.num=0;}
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conmint.methods.mining(window.num).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	window.cTime = setInterval(function(){autochecker(result)},2000);
	
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED!<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	
	/** MINING INITER **/		
	$('#getterr').click(function(e){e.preventDefault();
	if(window.tomin == 0){alert("MINING HAS NOT YET BEGUN, TRY IT TOMORROW!");return;}
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	
	let x=($(window).width()/2)-275; $('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>MINING D'+window.num+'</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=2><small class="pull-left">EXPECTED AMOUNT</small></td><td colspan=3 ><small class="pull-right">'+window.mined+' GLOB</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">MINED NOW</small></td><td colspan=3 ><small class="pull-right">'+window.ammam+' GLOB</small></td></tr>'+
	'<tr class="st" ><td colspan=2><small class="pull-left" style="color:#f33;">YOUR LOSSES</small></td><td colspan=3 ><small class="pull-right" style="color:#f33;">'+(window.mined-window.ammam)+' GLOB</small></td></tr></tbody></table>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="MM();">GET '+window.ammam+' GLOB</button>'+
	'</div>');$('.shad_').show();});

	/** SEND GLOB **/
	function FS(a,b){$('#kuku').css('opacity','1');let fss=0;
	if($('#fond').prop('checked')){fss=1;console.log('fond');}if($('#burn').prop('checked')){fss=2;console.log('burn');}
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	consend.methods.globSend(a,b,fss).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){$('#kuku').css('opacity','1');
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED!<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}

	/** SEND GLOB INITER **/		
	$('#increment').click(function(e){e.preventDefault();
	var comm = $('#rcvv').val();let res=false;let x=($(window).width()/2)-275;let whtm;let hddt;
	var ammm = parseFloat($('#s_amount').val()).toFixed(6);
	if(ammm > 0.00009){ammm=BigInt(ammm*(10**6))*BigInt(10**12);ammm = ammm.toString(16);}else{alert("WRONG AMOUNT");return;}	
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(typeof ethereum !== 'undefined'){ if(typeof accounts !== 'undefined'){
	if(comm==accounts[0]){alert("YOU CANNOT PAY YOURSELF");return;}
	if(window.usid>0){hddt = 'START POT GLOB TRANSFER';
	whtm = '<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="FS(\''+comm+'\',\''+ammm+'\');">SEND GLOB</button></div>';}else{
			alert("FUND REGISTRATION REQUIRED");$('.xoff').hide();$('.tx_waiting3').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}
	if($('#s_amount').val()>window.gBallance){alert("INSUFFICIENT GLOB BALANCE");return;}
	if(comm.length >= 40){res=Web3.utils.isAddress(comm);}else{alert("WRONG WALLET ADDRESS");return;} if(res){}else{ alert("WRONG WALLET ADDRESS");return;}
	let wht = '<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>'+hddt+'</strong></h2>'+
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
		'<tr class="st"><td colspan=1><small class="pull-left">RECEIVER</small></td><td colspan=4 ><small class="pull-right">'+
		'<small style="cursor:pointer;" onclick=\'window.open("https://etherscan.io/address/'+
		$('#rcvv').val()+'","_blank");\'>'+$('#rcvv').val()+'<span class="glyphicon glyphicon-share" style="margin-left:4px;"></span></small></small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">SEND AMOUNT</small></td><td colspan=3 ><small class="pull-right">'+$('#s_amount').val()+' GLOB</small></td></tr>'+
		'<tr class="st"><td colspan=4><small class="pull-left">TO RECEIVE</small></td><td colspan=1 ><small class="pull-right">'+($('#s_amount').val()/10)*8+' GLOB</small></td></tr>'+
		'<tr class="st"><td colspan=4><small class="pull-left">POT FEE</small></td><td colspan=1 ><small class="pull-right">'+($('#s_amount').val()/10)*2+' GLOB</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">CASHBACK</small></td><td colspan=3 ><small class="pull-right">'+$('#s_amount').val()+' GLOB / 365 DAYS</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">REVARD</small></td><td colspan=3 ><small class="pull-right">'+($('#s_amount').val()/10)*8+' GLOB / 365 DAYS</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left" style="">SEND FEE TO</small></td><td colspan=3 style="padding-right:0;">'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');" class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="dev" value="1" /> DEVELOPERS</span></label></div>'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');" class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="fond" value="1" /> FOUNDATION</span></label></div>'+
		'<div class="pull-right"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs active" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="burn" value="1" checked /> BURN</span></label></div></td></tr></tbody></table>'+whtm;
	$('.shad_').append(wht);
	$('.shad_').show();});
	
	/** DIRECT SEND GLOB ERC20 **/	
	function DDS(a,b){web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	counter.methods.transfer(a,b).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	/** DIRECT SEND GLOB ERC20 INITER **/		
	$('#send_glhh').click(function(e){e.preventDefault(); var comm = $('#rcvvg').val();  
	if(typeof ethereum !== 'undefined'){if(typeof accounts !== 'undefined'){
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(comm==accounts[0]){alert("YOU CANNOT PAY YOURSELF");return;}
	if($('#gl_amt').val()>window.gBallance){alert("INSUFFICIENT GLOB BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	}else{alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}
	}else{alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}
	if(comm.length >= 40){res=Web3.utils.isAddress(comm);}else{alert("WRONG WALLET ADDRESS");return;}if(res){}else{ alert("WRONG WALLET ADDRESS");return;}
	var ammm = parseFloat($('#gl_amt').val()).toFixed(6); if(ammm > 0){ammm=BigInt(ammm*(10**6))*BigInt(10**12);ammm = ammm.toString(16);}else{ alert("WRONG AMOUNT");return;}
	let x=($(window).width()/2)-275;$('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>START ERC20 GLOB TRANSFER</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=1><small class="pull-left">RECEIVER</small></td><td colspan=4 ><small class="pull-right">'+$('#rcvvg').val()+'</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">SEND AMOUNT</small></td><td colspan=3 ><small class="pull-right">'+$('#gl_amt').val()+' GLOB</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">TO RECEIVE</small></td><td colspan=3 ><small class="pull-right">'+$('#gl_amt').val()+' GLOB</small></td></tr>'+
	'<tr class="st"><td colspan=4><small class="pull-left">CASHBACK</small></td><td colspan=1 ><small class="pull-right">0</small></td></tr>'+
	'<tr class="st"><td colspan=4><small class="pull-left">REVARD</small></td><td colspan=1 ><small class="pull-right">0</small></td></tr></tbody></table>'+	
	'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="DDS(\''+comm+'\',\''+ammm+'\');">SEND GLOB</button>'+
	'</div>');$('.shad_').show();});
	
	/** TOTAL MINING **/
	function qFS(a){let fss = 0;if($('#fond').prop('checked')){fss=1;console.log('fond');}if($('#burn').prop('checked')){fss=2;console.log('burn');}
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conjoin.methods.jmining(a,fss).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED!<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
		
	/** TOTAL MINING INITER **/	
	$('#qnew_bill').click(function(e){e.preventDefault();
	
	let x=($(window).width()/2)-275;let whtm;let hddt;
	var ammm = parseFloat($('#qb_amount').val()).toFixed(6); 
	if(ammm > 0.00009){ammm=BigInt(ammm*(10**6))*BigInt(10**12);ammm = ammm.toString(16);}else{alert("WRONG AMOUNT");return;}
	if(typeof ethereum !== 'undefined'){
	if(typeof accounts !== 'undefined'){
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(window.usid>0){
	hddt = 'START TOTAL MINING';
	whtm = '<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
		'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="qFS(\''+ammm+'\');">START MINING</button>'+
		'</div>';
		}else{
			alert("FUND REGISTRATION REQUIRED");$('.xoff').hide();$('.tx_waiting3').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}
	
	if($('#qb_amount').val()>window.gBallance){alert("INSUFFICIENT GLOB BALANCE"); return;}
	let wht = '<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>'+hddt+'</strong></h2>'+
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
		'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL SPEND</small></td><td colspan=3><small class="pull-right">'+$('#qb_amount').val()+' <span>GLOB</span></small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL GET</small></td><td colspan=3><small class="pull-right">'+($('#qb_amount').val()*9)+' <span>GLOB / 365 DAYS</span></small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">POT FEE</small></td><td colspan=3><small class="pull-right">'+($('#qb_amount').val())+' <span>GLOB</span></small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">SEND FEE TO</small></td><td colspan=3 style="padding-right:0;">'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="dev" value="1" /> DEVELOPERS</span></label></div>'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="fond" value="1" /> FOUNDATION</span></label></div>'+
		'<div class="pull-right"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs active" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="burn" value="1" checked /> BURN</span></label></div>'+'</td></tr></tbody></table>'+whtm;
	$('.shad_').append(wht);
	$('.shad_').show();});
	
	/** SEND AIRDROP **/	
	function AAFS(a,b){$('#kuku').css('opacity','1');let fss = 0;
	if($('#fond').prop('checked')){fss=1;console.log('fond');}if($('#burn').prop('checked')){fss=2;console.log('burn');}
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conair.methods.airSend(a,b,fss).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){$('#kuku').css('opacity','1');
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED!<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}

	/** SEND AIRDROP INITER **/		
	$('#airs_send').click(function(e){e.preventDefault();
	var comm = $('#refnew').val();let res=false;
	var ammm = parseFloat($('#am_sair').val()).toFixed(6);
	let x=($(window).width()/2)-275; 
	let whtm;let hddt;
	conregg.methods.idd(comm).call(function(err,cococo){if(!err){	
	//if(cococo > 0){ alert("REGISTERED FUND CAN'T GET AN AIRDROP");return;}
	if(ammm > 0.00009){ammm=BigInt(ammm*(10**6))*BigInt(10**12);ammm = ammm.toString(16);}else{ alert("WRONG AMOUNT");return;}	
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}	
	if(typeof ethereum !== 'undefined'){
	if(typeof accounts !== 'undefined'){
	if(window.usid>0){
	hddt = 'START AIRDROP TRANSFER';
	whtm = '<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
		'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="AAFS(\''+comm+'\',\''+ammm+'\');">SEND AIRDROP</button>'+
		'</div>';}else{
			alert("FUND REGISTRATION REQUIRED");$('.xoff').hide();$('.tx_waiting3').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}
	if(comm.length >= 40){res=Web3.utils.isAddress(comm);}else{alert("WRONG WALLET ADDRESS");return;} if(res){}else{ alert("WRONG WALLET ADDRESS");return;}
	
	if($('#am_sair').val()>window.gBallance){$('.onono').addClass('activ');$('.nottic').show();return;}
	let wht = '<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>'+hddt+'</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
		'<tr class="st"><td colspan=1><small class="pull-left">RECIVER</small></td><td colspan=4 ><small class="pull-right">'+$('#refnew').val()+'</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">SEND AIRDROP</small></td><td colspan=3 ><small class="pull-right">'+$('#am_sair').val()+' GLOB</small></td></tr>'+
		'<tr class="st"><td colspan=4><small class="pull-left">REFUND</small></td><td colspan=1 ><small class="pull-right">'+$('#am_sair').val()*0.64+' GLOB</small></td></tr>'+		
		'<tr class="st"><td colspan=4><small class="pull-left">POT FEE</small></td><td colspan=1 ><small class="pull-right">'+$('#am_sair').val()*0.36+' GLOB</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">CASHBACK</small></td><td colspan=3 ><small class="pull-right">'+$('#am_sair').val()*1.72+' GLOB / 365 DAYS</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">REVARD</small></td><td colspan=3 ><small class="pull-right">'+$('#am_sair').val()*1.6+' GLOB / 365 DAYS</small></td></tr>'+
		
		
		
		'<tr class="st"><td colspan=2><small class="pull-left">SEND FEE TO</small></td><td colspan=3 style="padding-right:0;">'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="dev" value="1" /> DEVELOPERS</span></label></div>'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="fond" value="1" /> FOUNDATION</span></label></div>'+
		'<div class="pull-right"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs active" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="burn" value="1" checked /> BURN</span></label></div>'+'</td></tr></tbody></table>'+whtm;
	$('.shad_').append(wht);
	$('.shad_').show();
	}});}); 

	/* PAYMENT LINKS */
	$('#bllcr').click(function(e){e.preventDefault();
	if($('#b_amount').val()==''){
	if(!!window.topp){		
	$('.pay_link').val(window.topp+"?r="+window.usid);}else{
	$('.pay_link').val("https://globreserve.github.io/?r="+window.usid);}
	
	if(typeof ethereum !=='undefined'){
	if(typeof accounts !=='undefined'){
		if(window.usid>0){
	$('.pay_link').removeClass('hidden');	
	$('.pay_link').show();
	}else{
			alert("FUND REGISTRATION REQUIRED");$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff,.pay_link').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff,.pay_link').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}
	}else{
		
		
	let vall = +parseFloat($('#b_amount').val()).toFixed(6);
	
	
	if(Number.isNaN(vall) || vall==0){ alert('WRONG BILL AMOUNT');
		$('.pay_link').addClass('hidden');
		$('.pay_link').hide();
		$('#pay_link').val('');
	}else{
	if(vall<0.00009){alert("WRONG BILL AMOUNT");return;}		
	if(!!window.topp){		
	$('.pay_link').val(window.topp+"?r="+window.usid+'l'+vall);}else{
	$('.pay_link').val("https://globreserve.github.io/?r="+window.usid+'l'+vall);}
	if(typeof ethereum !== 'undefined'){
	if(typeof accounts !== 'undefined'){
	if(window.usid>0){	
	$('.pay_link').removeClass('hidden');	
	$('.pay_link').show();
	}else{
			alert("FUND REGISTRATION REQUIRED");$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff,.pay_link').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}}else{
			alert("NO BLOCKCHAIN CONNECTION");$('.xoff,.pay_link').hide();$('.tx_waiting4').show();$('.onono').addClass('activ');$('.nottic').show();return;}
	}}});
	/** SET AIRDROP DATA **/
	function AIR(a,b){let fss = 0;if($('#fond').prop('checked')){fss=1;console.log('fond');}if($('#burn').prop('checked')){fss=2;console.log('burn');}
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conpull.methods.setair(a,b,fss).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){$('#kuku').css('opacity','1');
	$('#am_air').attr('disabled','disabled').prop('disabled',true);
	$('#am_drop').attr('disabled','disabled').prop('disabled',true);
	if(!!window.topp){
		$('#airlinn').val(window.topp+"?g="+window.usid);}else{
		$('#airlinn').val("https://globreserve.github.io/?g="+window.usid);}
		$('.uncharged').addClass('hidden');
		$('.charged').removeClass('hidden');
		$('.charged').show();
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	
	/** SET AIRDROP INITER**/
	$('#air_set').click(function(e){e.preventDefault();
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	let air= +parseFloat($('#am_air').val()).toFixed(6);
	let lot= +parseFloat($('#am_drop').val()).toFixed(6);
	let whtm; let hddt;
	if(typeof ethereum!=='undefined'){
	if(typeof accounts!=='undefined'){
	if(lot>air){alert("AIRDROP VALUE MUST BE SMALLER THAN THE DEPOSIT");return;}
	if(air>=10){air=BigInt(air*(10**6))*BigInt(10**12);air=air.toString(16);}else{alert("WRONG DEPOSIT AMOUNT");return;} 
	if(lot>= 1){lot=BigInt(lot*(10**6))*BigInt(10**12);lot=lot.toString(16);}else{alert("WRONG AIRDROP VALUE");return;} 	
	if(window.usid>0){hddt = 'DEPOSIT AIRDROP POOL';
	whtm = '<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="AIR(\''+air+'\',\''+lot+'\');">START AIRDROP PULL</button></div>';}else{
	alert("FUND REGISTRATION REQUIRED");$('.onono').addClass('activ');$('.nottic').show();return;}}else{
	alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}}else{
	alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}
	
	if($('#am_drop').val()>window.gBallance){alert("INSUFFICIENT GLOB BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	let wht = '<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+(($(window).width()/2)-275)+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>'+hddt+'</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=2><small class="pull-left">POOL AMOUNT</small></td><td colspan=3 ><small class="pull-right">'+$('#am_air').val()+' GLOB</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">AIRDROP VALUE</small></td><td colspan=3 ><small class="pull-right">'+$('#am_drop').val()+' GLOB</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">QUANTITY</small></td><td colspan=3 ><small class="pull-right">'+parseInt($('#am_air').val()/$('#am_drop').val())+'</small></td></tr>'+
		'<tr class="st"><td colspan=2><small class="pull-left">SEND FEE TO</small></td><td colspan=3 style="padding-right:0;">'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="dev" value="1" /> DEVELOPERS</span></label></div>'+
		'<div class="pull-right" style="margin-left:5px;"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="fond" value="1" /> FOUNDATION</span></label></div>'+
		'<div class="pull-right"><label onclick="$(\'.btn-xs\').removeClass(\'active\');$(this).addClass(\'active\');"  class="btn btn-default btn-xs active" style="text-align:center;">'+
		'<span><input style="margin-right:2px;" type="radio" name="pod" id="burn" value="1" checked /> BURN</span></label></div>'+'</td></tr></tbody></table>'+whtm;
	$('.shad_').append(wht);$('.shad_').show();});
	/** STOP POOL **/
	function SAIR(){web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conpull.methods.delair().send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	$('.charged').addClass('hidden');$('.uncharged').removeClass('hidden');
	$('#am_air').attr('disabled','off').prop('disabled',false).val('');$('#am_drop').attr('disabled','off').prop('disabled',false).val('');$('#air_res').click(); 
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	/** STOP POOL INITER**/
	$('#air_stop').click(function(e){e.preventDefault();
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	
	$('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+(($(window).width()/2)-275)+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>STOP AN AIRDROP PULL</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=2><small class="pull-left">DEPOSIT</small></td><td colspan=3 ><small class="pull-right">'+window.air+' GLOB</small></td></tr></tbody></table>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="SAIR();">RETURN DEPOSIT</button></div>');$('.shad_').show();});
 
	/** GET AIRDROP **/
	function GADR(){
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conpull.methods.getair(window.w_id).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED!<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	
	/** GET AIRDROP INITER**/
	$('#gairgett').click(function(e){e.preventDefault();
	console.log(window.w_id);
	if(typeof accounts === 'undefined'){alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(window.eBallance<0.005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	let x=($(window).width()/2)-275; $('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>REGISTER & GET AIRDROP</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL GET</small></td><td colspan=3 ><small class="pull-right">'+window.droppi+' GLOB / 365 DAYS</small></td></tr></tbody></table>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="GADR();">GET AIRDROP</button>'+
	'</div>');$('.shad_').show();});


    function depodat(){
	window.deppo=0;
	conuescr.methods.geUInfo(accounts[0]).call(function(err,vovovo1){if(!err){	
	conescr.methods.geInfo(accounts[0]).call(function(err,vovovo){if(!err){	
	window.deppo=vovovo1[1];
	console.log(window.deppo);
	if(vovovo1[0]!=0 && vovovo1[1]!=0){
	$('#maacx1').val(vovovo1[1]/(10**18));
	$('#pracx1').val(vovovo1[0]/(10**18));}
	if(vovovo[0]!=0 && vovovo[1]!=0){
	$('#maacx').val(vovovo[1]/(10**18));
	$('#pracx').val(vovovo[0]/(10**18));}
	}});}});}



	/** SHOW UNESCROW20**/
	$('#getesc1').click(function(e){e.preventDefault();
	if(typeof accounts === 'undefined'){alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	let comm = $('#selladd1').val(); if(comm==''){return;}
	conregg.methods.idd(comm).call(function(err,cococo){if(!err){	
	if(cococo == 0){ alert("UNREGISTERED FUND ADDRESS");return;}else{
	conuescr.methods.geUInfo(comm).call(function(err,vovovo){if(!err){	
	window.ugstack =vovovo[1];window.ugprice =vovovo[0];
	$('.gethoff1').html(vovovo[1]/(10**18));$('.ethoff1').html(vovovo[0]/(10**18));
	$('#amescr1').attr('placeholder','Mах '+ (vovovo[1] / vovovo[0]).toFixed(4) +' Glob, min 0.01 Glob');$('.unloge1').show();
	if(vovovo[0] == 0 || vovovo[1] == 0){alert("NO ESCROW OFFER FOUND");return;}
	if(accounts[0].toLowerCase()==comm.toLowerCase()){alert("YOU CAN'T SELL TO YOURSELF");return;}}});}}});});
	$('#escclear1,#escclear11').click(function(e){e.preventDefault();$('#maacx1').val('');$('#pracx1').val('');
	window.ugstack =0; window.ugprice =0;$('#amescr1').val('');$('.gethoff1').html(0);
	$('.ethoff1').html(0);$('.unloge').hide();$('#getesc1').click();});


	/** SET UNESCROW20 DATA **/
	function SUESC(a,b){
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conuescr.methods.setUEscrow(b).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price,value:a},function(err,result){if(!err){
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	
	
	/** SET UNESCROW20 INITER**/
	$('#addescr1').click(function(e){e.preventDefault();
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(typeof accounts=='undefined'){alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}
	let esmax= parseFloat($('#maacx1').val());
	let esprs= parseFloat($('#pracx1').val());
	if(esmax==0 && window.deppo>0){deltescr();return;}
	if(esmax>0 && esmax<=window.eBallance){esmax=BigInt(esmax*(10**6))*BigInt(10**12);}else{alert("WRONG ESCROW AMOUNT");return;} 
	if(esprs>=0.001){esprs=BigInt(parseInt(esprs*(10**8)))*BigInt(10**10);esprs=esprs.toString(16);}else{alert("WRONG PRICE VALUE");return;} 	
	
	let x=($(window).width()/2)-275; $('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>SET ETHER ESCROW OFFER</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL DEPOSITE</small></td><td colspan=3 ><small class="pull-right">'+parseFloat($('#maacx1').val())+' ETH</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">1 GLOB PRICE</small></td><td colspan=3 ><small class="pull-right">'+parseFloat($('#pracx1').val())+' ETH</small></td></tr>'+
	'</tbody></table>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="SUESC(\''+esmax+'\',\''+esprs+'\');">SET ETHER ESCROW OFFER</button>'+
	'</div>');$('.shad_').show();});


	function deltescr(){let x=($(window).width()/2)-275; $('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>RETURN ETHER DEPOSITE</strong></h2>'+ 
	'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="DELESC();">DELETE ETHER ESCROW OFFER</button>'+
	'</div>');$('.shad_').show();}
	function DELESC(){web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conuescr.methods.delUEscrow().send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}

	/** PAY UESCROW20 **/
	function BAUGLB(smm){let comm = $('#selladd1').val(); 
	
	let sum = parseFloat($('#amescr1').val());
	let amm = sum*window.ugprice;
		
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conuescr.methods.payUEscrow(comm,smm).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED!<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	/** PAY UESCROW20 INITER**/
	$('#bayescr1').click(function(e){e.preventDefault();
	let comm = $('#selladd1').val();
	if(accounts[0].toLowerCase()==comm.toLowerCase()){alert("YOU CAN'T SELL TO YOURSELF");return;}
	if($('#amescr1').val()==''){alert("WRONG GLOB AMOUNT");return;}
	let sum = parseFloat($('#amescr1').val());
	if(sum<0.1){alert("WRONG GLOB AMOUNT");return;}
	if(sum>(window.ugstack/window.ugprice)){alert("WRONG GLOB AMOUNT");return;}
	let amm = sum*window.ugprice;
	let ssum = BigInt(parseInt(sum*(10**8)))*BigInt(10**10);ssum=ssum.toString(16);
	
	if(typeof accounts === 'undefined'){alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(window.gBallance<sum){alert("INSUFFICIENT ETHEREUM BALANCE");return;}
	let x=($(window).width()/2)-275; $('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>SELL GLOB TO ESCROW</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL SELL</small></td><td colspan=3 ><small class="pull-right">'+sum+' GLOB</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL GOT</small></td><td colspan=3 ><small class="pull-right">'+amm/(10**18)+' ETH</small></td></tr>'+
	'</tbody></table>'+'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="BAUGLB(\''+ssum+'\');">SELL GLOB</button>'+
	'</div>');$('.shad_').show();});

	/** SHOW ESCROW20**/
	$('#getesc').click(function(e){e.preventDefault();
	if(typeof accounts === 'undefined'){alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	let comm = $('#selladd').val(); if(comm==''){return;}
	conregg.methods.idd(comm).call(function(err,cococo){if(!err){	
	if(cococo == 0){ alert("UNREGISTERED FUND ADDRESS");return;}else{
	conescr.methods.geInfo(comm).call(function(err,vovovo){if(!err){	
	
	window.gstack =vovovo[1];window.gprice =vovovo[0];
	$('.gethoff').html(vovovo[1]/(10**18));	$('.ethoff').html(vovovo[0]/(10**18));
	
	$('.unloge').show();
	if(vovovo[0] == 0 || vovovo[1] == 0){alert("NO ESCROW OFFER FOUND");return;}
	if(accounts[0].toLowerCase()==comm.toLowerCase()){alert("YOU CAN'T BUY FROM YOURSELF");return;}
	}});}}});});
	$('#escclear,#escclear1').click(function(e){e.preventDefault();
	$('#maacx').val('');$('#pracx').val('');
	window.gstack =0; window.gprice =0;$('#amescr').val('');$('.gethoff').html(0);
	$('.ethoff').html(0);$('.unloge').hide();$('#getesc').click();});
	
	/** PAY ESCROW20 **/
	function BAGLB(){
	let comm = $('#selladd').val(); let sum = parseFloat($('#amescr').val()); let amm = sum*window.gprice;
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conescr.methods.payEscrow(comm).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price,value:amm},function(err,result){if(!err){
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED!<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG INFO</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	/** PAY ESCROW20 INITER**/
	$('#bayescr').click(function(e){e.preventDefault();
	let comm = $('#selladd').val();
	if(accounts[0].toLowerCase()==comm.toLowerCase()){alert("YOU CAN'T BUY FROM YOURSELF");return;}
	if($('#amescr').val()==''){alert("WRONG GLOB AMOUNT");return;}
	let sum = parseFloat($('#amescr').val());
	if(sum<1){alert("WRONG GLOB AMOUNT");return;}
	if(sum>(window.gstack/(10**18))){alert("WRONG GLOB AMOUNT");return;}
	let amm = sum*window.gprice;
	if(typeof accounts === 'undefined'){alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(window.eBallance<(amm/(10**18))){alert("INSUFFICIENT ETHEREUM BALANCE");return;}
	let x=($(window).width()/2)-275; $('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>BUY GLOB FROM ESCROW</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL BAY</small></td><td colspan=3 ><small class="pull-right">'+sum+' GLOB</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL PAY</small></td><td colspan=3 ><small class="pull-right">'+amm/(10**18)+' ETH</small></td></tr>'+
	'</tbody></table>'+'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="BAGLB();">BUY GLOB</button>'+
	'</div>');$('.shad_').show();});
	
	/** SET ESCROW20 DATA **/
	function SESC(a,b){
	web3.eth.getTransactionCount(accounts[0]).then(nonce =>{window.nonce=nonce;
	conescr.methods.setEscrow(b,a).send({from:accounts[0],gasLimit:gas_limit,gasPrice:gas_price},function(err,result){if(!err){
	window.waiting=result; localStorage['waiting']=window.waiting; window.cTime = setInterval(function(){autochecker(result)},2000);
	$('#kuku').css('cursor','progress');$('#kuku').html('');$('#kuku').append(
	'<h2 id="tx-status" style="color:#fff;animation:blinker 1.4s linear infinite;cursor:progress;text-align:center;"><b>WAITING FOR TRANSACTION</b></h2>'+
	'<a target="_blank" href="https://etherscan.io/tx/'+result+
	'" class="btn btn-default btn-md pull-right tr-eth" style="margin:20px 0 0 0;">VIEW DETAILS ON ETHERSCAN <span class="glyphicon glyphicon-triangle-right"></span></a>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}else{
	let errr = JSON.stringify(err);$('#kuku').html('');$('#kuku').append('<h2 id="tx-status" style=color:#ff7777;text-align:center;"><b>TRANSACTION FAILED<b></h2>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:20px 0 0 0;" onclick=\'alert('+JSON.stringify(errr)+');\'>VIEW ERROR LOG</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:20px 0 0 0;" onclick="xrel();">CLOSE AND REFRESH</button>');}});});}
	/** SET ESCROW20 INITER**/
	$('#addescr').click(function(e){e.preventDefault();
	if(window.eBallance<0.0005){alert("INSUFFICIENT ETHEREUM BALANCE");$('.onono').addClass('activ');$('.nottic').show();return;}
	if(typeof accounts=='undefined'){alert("NO BLOCKCHAIN CONNECTION");$('.onono').addClass('activ');$('.nottic').show();return;}
	let esmax= parseFloat($('#maacx').val());
	let esprs= parseFloat($('#pracx').val());
	if(esmax<=window.gBallance){esmax=BigInt(esmax*(10**6))*BigInt(10**12);esmax=esmax.toString(16);}else{alert("WRONG ESCROW AMOUNT");return;} 
	if(esprs>=0.001){esprs=BigInt(parseInt(esprs*(10**8)))*BigInt(10**10);esprs=esprs.toString(16);}else{alert("WRONG PRICE VALUE");return;} 	
	let x=($(window).width()/2)-275; $('.shad_').append('<div id="kuku" style="z-index:999999999;width:550px;height:auto;padding:30px; top:185px;left:'+x+
	'px;position:absolute;z-index:1;background-color:#35475b;color:white;border-radius:4px;box-shadow:2px 5px 3px rgba(0,0,0,0.8);text-align:center;">'+
	'<h2 style="color:#fff"><strong>SET ESCROW OFFER</strong></h2>'+ 
	'<table class="table" style="margin:25px 0 0 0;color:#ccc;background-color:transparent;font-size:16px;border:solid 0px transpsrent;">'+
	'<col width=20%><col width=20%><col width=20%><col width=20%><col width=20%><tbody>'+
	'<tr class="st"><td colspan=2><small class="pull-left">YOU WILL SELL</small></td><td colspan=3 ><small class="pull-right">'+parseFloat($('#maacx').val())+' GLOB</small></td></tr>'+
	'<tr class="st"><td colspan=2><small class="pull-left">1 GLOB PRICE</small></td><td colspan=3 ><small class="pull-right">'+parseFloat($('#pracx').val())+' ETH</small></td></tr>'+
	'</tbody></table>'+
	'<button class="btn btn-default btn-md pull-left" style="margin:10px 0 0 0;" onclick="$(\'#kuku\').remove();$(\'.shad_\').hide();">CANCEL</button>'+
	'<button class="btn btn-default btn-md pull-right" style="margin:10px 0 0 0;" onclick="SESC(\''+esmax+'\',\''+esprs+'\');">SET GLOB ESCROW OFFER</button>'+
	'</div>');$('.shad_').show();});
