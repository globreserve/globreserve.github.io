
$('.puppa').on('click', function(event){event.stopPropagation();
	top.postMessage('go',"*");
	$('.ppgg').addClass('hida');
	window.num=0;
	$('#sssr').val('');
	window.topstring='';
	if(typeof accounts !== 'undefined'){
		$('#home_up').click()}else{
		$('#intro_up').click();
		$('.home').addClass('activ');}});

$('.serrr').on('click',async()=>{
	$('#rcvv').attr('disabled','off').prop('disabled',false);$('#rcvv').val('');
	let globj = $('#sssr').val().split('l')[0];let amtail = $('#sssr').val().split('l')[1];
	if(amtail=='undefined' || !amtail){amtail=''}
	if(globj!=''){if(Number.isNaN(parseInt(globj.substr(1)))){return;}else{window.num = parseInt(globj.substr(1));}
	//**************************************************************
	let soooo = globj.toLowerCase().split('')[0];
	if (soooo=='r' || soooo=='m' || soooo=='g'){
		
	conregg.methods.acc(window.num).call(function(err,resa){if(!err){
	
	if(resa=='0x0000000000000000000000000000000000000000'){return;}	
	document.cookie = "ref="+window.num+'; max-age=604800;SameSite=Lax'; $('#f_ref').val(resa);
	if(amtail!=''){top.postMessage('glob:?'+soooo+'='+window.num+'l'+amtail,"*");}else{
	top.postMessage('glob:?'+soooo+'='+window.num,"*");}
	counter.methods.balanceOf(resa).call(function(err,glob){if(!err){	
	web3.eth.getBalance(resa,function(err,ether){if(!err){
	if(soooo=='m'){$('#minnn').click();}
	if(soooo=='g'){$('.puppa').click();$('#home').click();}
	if(soooo=='r'){$('#senn').click();
	if(typeof accounts == 'undefined' || (typeof accounts !== 'undefined' && resa!==accounts[0])){
	$('#rcvv').val(resa);$('#rcvv').attr('disabled','disabled').prop('disabled',true);
	if(amtail!=''){let suuull=parseFloat(amtail);
	$('#s_amount').val(suuull);$('#s_amount').change();
	$('#s_amount').attr('disabled','disabled').prop('disabled',true);
	}}else{$('.puppa').click();}}
	}else{console.log(err);}});
	}else{console.log(err);}});
	}else{console.log(err);}});	
	//******************************************************************
	}else if (globj.toLowerCase().split('')[0]=='d'){
	condeal.methods.getone(window.num).call(function(err,res){if(!err){if(parseInt(res[9])==0){return;}	
	conregg.methods.idd(res[0]).call(function(err,senderid){if(!err){
	conregg.methods.idd(res[1]).call(function(err,getterid){if(!err){
	conregg.methods.idd(res[2]).call(function(err,partone){if(!err){	
	conregg.methods.idd(res[3]).call(function(err,c){if(!err){			
	
	top.postMessage('glob:?d='+window.num,"*");	
	window.dealamm = parseInt(res[10])/10**18;
	window.dealtimer = U_time(parseInt(res[9]));
	
	if(parseInt(res[8])==2){window.tppt = 'GLOB TRANSFER'; window.gottn = window.dealamm*0.8;}
	if(parseInt(res[8])==1){window.tppt = 'AIRDROPS'; window.gottn = 0;}
	if(parseInt(res[8])==0){window.tppt = 'TURBO MINING'; window.gottn = 0; getterid=senderid;}
	
	$('.dealt').html(window.tppt);
	let datt=0; 
	window.mined=0;
	
	if(!!window.usid){$('.dllmes').hide();
	if(res[0]==accounts[0]){$('.dllmes').show(); datt=parseInt(res[4]);
		if(parseInt(res[8])==0){window.mined=window.mined+window.dealamm*9;}
		if(parseInt(res[8])==1){window.mined=window.mined+window.dealamm*1.72;}
		if(parseInt(res[8])==2){window.mined=window.mined+window.dealamm;}}
	if(res[1]==accounts[0]){$('.dllmes').show(); datt=parseInt(res[5]);     
		if(parseInt(res[8])==0){}
		if(parseInt(res[8])==1){window.mined=window.mined+window.dealamm*1.6;}
		if(parseInt(res[8])==2){window.mined=window.mined+window.dealamm*0.8;}}
	if(res[2]==accounts[0]){ $('.dllmes').show(); datt=parseInt(res[6]);       
		if(parseInt(res[8])==0){window.mined=window.mined+window.dealamm*0.5;}
		if(parseInt(res[8])==1){window.mined=window.mined+window.dealamm*0.18;}
		if(parseInt(res[8])==2){window.mined=window.mined+window.dealamm*0.1;}}
	if(res[3]==accounts[0]){$('.dllmes').show();datt=parseInt(res[7]);
		if(parseInt(res[8])==0){window.mined=window.mined+window.dealamm*0.5;}
		if(parseInt(res[8])==1){window.mined=window.mined+window.dealamm*0.1;}
		if(parseInt(res[8])==2){window.mined=window.mined+window.dealamm*0.1;}}
	}else{$('.dllmes').hide();}	
	
	
	if(datt==0){
	$('.mmttmm').html('0');$('.mmttms').html('0');	
	$('.dealkba').html('0');$('.dealkb').html('0');
	$('.kbtx').html('MINING FINISHED');$('.cbbbk').hide();
	}else{
	$('.cbbbk').show();		
	$('.mmttms').html('365');	
	$('.kbtx').html('GLOB MINED');		
	let time=window.blockday-datt;
	if(time==0){//$('.cbbbk').hide();
	window.tomin = 0;
	}else{window.tomin = 1;}
	$('.mmttmm').html(time);
		let d=time;let s=0;
		if(d<73){s=d;}else 
		if(d<146){s=73;s=s+(3*(d-73));}else
		if(d<219){s=292;s=s+(9*(d-146));}else 
		if(d<292){s=949;s=s+(27*(d-219));}else
		if(d<365){s=2920;s=s+(81*(d-292));}else{s=8833;}
		window.ammam= +((window.mined*s)/8833).toFixed(6);
	$('.dealkba').html(window.ammam);
	$('.dealkb').html(window.mined);}
		
	if(!!window.topp){$('#deallink').val(window.topp+"?d="+window.num);
	}else{$('#deallink').val("https://globreserve.github.io/?d="+window.num);}
	
	$('.delsdr').html('R'+parseInt(senderid));$('.delrsv').html('R'+parseInt(getterid));
	$('.asrrs').html('<span onclick="window.open(\'https://etherscan.io/address/'+res[0]+'\',\'_blank\')">'+res[0]+'</span>');
	if(res[1]=='0x0000000000000000000000000000000000000000'){
	$('.arrrs').html('<span onclick="window.open(\'https://etherscan.io/address/'+res[0]+'\',\'_blank\')">'+res[0]+'</span>');}else{
	$('.arrrs').html('<span onclick="window.open(\'https://etherscan.io/address/'+res[1]+'\',\'_blank\')">'+res[1]+'</span>');}
	
	$('.dsourse').html(window.dealtimer);$('.dealam').html(window.dealamm +' GLOB');$('.dealgot').html(window.gottn +' GLOB');
	$('.be_num').html(window.num);$('.ppgg').addClass('hida');$('.deal').removeClass('hida');$('#deal_up').click();	
	}else{console.log(err);}});	
	}else{console.log(err);}});	
	}else{console.log(err);}});	
	}else{console.log(err);}});	
	}else{console.log(err);}});		
	}}});

function uget(name){if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec('?'+window.topstring))return decodeURIComponent(name[1]);}
$('.ethadr').on('click', function(){if($(this).html()!='NO ADDRESS'){window.open('https://etherscan.io/address/'+$(this).html(),'_blank');}});
$('.tabs-left li').on('click', function(){$('.home').removeClass('activ');}); 

	$('.sst').on('click',function(){
	if($(this).next('.ura').hasClass('hidden')){
	$('.sst').removeClass('blaaa');
	$(this).addClass('blaaa');
	$('.sst').find('span').text('+');
	$('.ura').addClass('hidden');
	$(this).next('.ura').removeClass('hidden');
	$(this).find('span').text('-');}else{
	$('.ura').addClass('hidden');
	$('.sst').find('span').text('+');
	$('.sst').removeClass('blaaa');}});

	function setairl(){
		let str = $('#reflin').val();
		let sop = str.replace('?r','?a');
		sop = sop.replace('?m','?a');
		sop = sop.replace('?g','?a');
		$('#reflin').val(sop);};
	function setfirl(){
		let str = $('#reflin').val();
		let sop = str.replace('?a','?m');
		sop = sop.replace('?g','?m');
		sop = sop.replace('?r','?m');
		$('#reflin').val(sop);};
	function setdirl(){
		let str = $('#reflin').val();
		let sop = str.replace('?a','?g');
		sop = sop.replace('?m','?g');
		sop = sop.replace('?r','?g');
		$('#reflin').val(sop);};	

	function clearral(){
		$('.erc_').hide();$('.pod_').show();
		$('#airs_res').click();
		$('#qb_res').click();
		$('#dgscl').click();
		$('#s_res').click();
		$('#bllcl').click();
		//$('.senair').click();
		$('#air_res').click();
	}
		
	$('.nav-tabs a').on('shown.bs.tab',function(event){
		$('.erc_').hide();$('.pod_').show();
		$('#airs_res').click();
		$('#qb_res').click();
		$('#dgscl').click();
		$('#s_res').click();
		$('#bllcl').click();
		//$('.senair').click();
		//$('#air_res').click();
		});

	$('#qb_res').on('click',function(){
		$('#qb_amount').val('');
		$('.qb_sum1').text('0');
		$('.qb_sum2').text('0');
		$('.qb_sum').text('0');
		$('.qb_sum1i').text('0');
		$('.qb_sum1p').text('0');
		$('.qb_sum2i').text('0');
		$('.qb_sum2p').text('0');
		});
		
	$('#air_res').on('click',function(){
		$("#am_air").val('');
		$('#am_drop').val('');
		$('.eew_sum').text('0');
		$('.eewn_sum').text('0');
		$('.eewp_sum').text('0');
		$('.eew1_sum').text('0');
		$('.eew1n_sum').text('0');
		$('.eew1p_sum').text('0');
		$('.eeww_s').text('0');});
	
	$('#airs_res').on('click',function(){
		$("#am_sair").val('');
		$('#refnew').val('');
		$('#aa_mes').val('');
		$('#aa_mes').text('');
		$('.zxqbw_sum').text('0');
		$('.zxqbr_sum').text('0');
		$('.zxqb_sum').text('0');
		$('.zyqbw_sum').text('0');
		$('.zyqbr_sum').text('0');
		$('.zyqb_sum').text('0');});

	$('#bllcl').on('click',function(){
		$('#b_amount').val('');
		$('.l_sum').text(0);
		$('.lss_sum').text(0);
		$('.ls_sum').text(0);
		$('.ll_sum').text(0);
		$('.llss_sum').text(0);
		$('.lls_sum').text(0);	
		$('.pay_link').addClass('hidden');
		$('.pay_link').hide();
		$('#pay_link').val('');});
		
	$('#s_res').on('click', function(){$('#s_amount').val('');$('#rcvv').val('');
		$('.axqbw_sum').text('0');$('.axqbr_sum').text('0');$('.axqb_sum').text('0');
		$('.ayqbw_sum').text('0');$('.ayqbr_sum').text('0');$('.ayqb_sum').text('0');
		$('#s_amount').attr('disabled','off').prop('disabled',false);
		$('#rcvv').attr('disabled','off').prop('disabled',false);});	
		
	$('#dgscl').on('click', function(){	
		$('#gl_amt').val('');
		$('#rcvvg').val('');
		$('.erc_sum').text('0');
		
		});
	
	$('#am_sair').on('keydown change blur paste',function(){setTimeout(function(){sogggg();},10);});
	$('#am_air').on('keydown change blur paste',function(){setTimeout(function(){sogggss();},10);});
	$('#am_drop').on('keydown change blur paste',function(){setTimeout(function(){sogggss();},10);});
	$('#s_amount').on('keydown change blur paste',function(){setTimeout(function(){sooggg();},10);});
	$('#b_amount').on('keydown change blur paste',function(){setTimeout(function(){soorrr();},10);});
	$('#gl_amt').on('keydown change blur paste',function(){setTimeout(function(){sooggt();},10);});	
	
	
	
	
	
	function sogggg(){
		setTimeout(function(){
		if($('#am_sair').val()==''){
		$('.zxqbw_sum').text('0');
		$('.zxqbr_sum').text('0');
		$('.zxqb_sum').text('0');
		$('.zyqbw_sum').text('0');
		$('.zyqbr_sum').text('0');
		$('.zyqb_sum').text('0');	
		}else{
		let vtt = parseFloat($('#am_sair').val()).toFixed(6)/100;
		if(vtt>10000000){$('#am_sair').val(1000000000);
		vtt = parseFloat($('#am_sair').val()).toFixed(6)/100;}
		$('.zxqbw_sum').text(+(vtt*236).toFixed(4));
		$('.zxqbr_sum').text(+(vtt*64).toFixed(4));
		$('.zxqb_sum').text(+(vtt*172).toFixed(4));
		$('.zyqbw_sum').text(+(vtt*160).toFixed(4));
		$('.zyqbr_sum').text('0');
		$('.zyqb_sum').text(+(vtt*160).toFixed(4));}},5)};
	
	function sogggss(){
		setTimeout(function(){
		if($('#am_air').val()=='' || $('#am_drop').val()==''){
		let vtq = parseFloat($('#am_air').val()).toFixed(6);
		if(vtq>1000000000){$('#am_air').val(1000000000);
		vtq = parseFloat($('#am_air').val()).toFixed(6);}
		let vtt = parseFloat($('#am_drop').val()).toFixed(6)/100;
		if(vtt>1000){$('#am_drop').val(100000)/100;
		vtt = parseFloat($('#am_air').val()).toFixed(6);}			
		$('.eew_sum').text('0');
		$('.eewn_sum').text('0');
		$('.eewp_sum').text('0');
		$('.eew1_sum').text('0');
		$('.eew1n_sum').text('0');
		$('.eew1p_sum').text('0');
		$('.eeww_s').text('0');
		}else{
		let vtq = parseFloat($('#am_air').val()).toFixed(6);
		if(vtq>1000000000){$('#am_air').val(1000000000);
		vtq = parseFloat($('#am_air').val()).toFixed(6);}
		let vtt = parseFloat($('#am_drop').val()).toFixed(6)/100;
		if(vtt>1000){$('#am_drop').val(100000)/100;
		vtt = parseFloat($('#am_air').val()).toFixed(6);}
		$('.eew_sum').text(+(vtt*236).toFixed(4));
		$('.eewn_sum').text(+(vtt*64).toFixed(4));
		$('.eewp_sum').text(+(vtt*172).toFixed(4));
		$('.eew1_sum').text(+(vtt*160).toFixed(4));
		$('.eew1n_sum').text('0');
		$('.eew1p_sum').text(+(vtt*160).toFixed(4));
		if(vtq>0 && vtt>0){
		$('.eeww_s').text(parseInt(vtq/(vtt*100)));
		}else{$('.eeww_s').text('0')}
		}},5)};
	
	function sooggg(){setTimeout(function(){
		let vtt = parseFloat($('#s_amount').val()).toFixed(6)/10;
		if(vtt>100000000){$('#s_amount').val(1000000000);
		vtt = parseFloat($('#s_amount').val()).toFixed(6)/10;}
		$('.aswetx').addClass('active');
		$('.afdrw').text('100%');$('.afdrq').text('160%');
		if(vtt>0){$('.axqbw_sum').text(+(vtt*10).toFixed(6));
		$('.axqbr_sum').text('0');
		$('.axqb_sum').text(+(vtt*10).toFixed(6));
				$('.ayqbw_sum').text(+(vtt*16).toFixed(6));
				$('.ayqbr_sum').text(+(vtt*8).toFixed(6));
				$('.ayqb_sum').text(+(vtt*8).toFixed(6));}else{
				$('.axqbw_sum').text('0');$('.axqbr_sum').text('0');$('.axqb_sum').text('0');
				$('.ayqbw_sum').text('0');$('.ayqbr_sum').text('0');$('.ayqb_sum').text('0');}},5)};
		$('.aswetx').on('click',function(){sooggg();});
	
	function soorrr(){
		setTimeout(function(){
		let vtt = parseFloat($('#b_amount').val()).toFixed(6)/10;
		if(vtt>100000000){$('#b_amount').val(1000000000);
		vtt = parseFloat($('#b_amount').val()).toFixed(6)/10;}
		if($('#b_amount').val()==''){
		$('.l_sum').text(0);
		$('.lss_sum').text(0);
		$('.ls_sum').text(0);
		$('.ll_sum').text(0);
		$('.llss_sum').text(0);
		$('.lls_sum').text(0);
		$('.pay_link').addClass('hidden');
		$('.pay_link').hide();
		$('#pay_link').val('');
		}else{
		$('.l_sum').text(+(vtt*10).toFixed(6));
		$('.lss_sum').text(0);
		$('.ls_sum').text(+(vtt*10).toFixed(6));
		$('.ll_sum').text(+(vtt*16).toFixed(6));
		$('.llss_sum').text(+(vtt*8).toFixed(6));
		$('.lls_sum').text(+(vtt*8).toFixed(6));}
		},5)}

	function sooggt(){
		setTimeout(function(){
		if($('#gl_amt').val()==''){
		$('.erc_sum').text('0');	
		}else{
		let vtt = parseFloat($('#gl_amt').val()).toFixed(6);
		if(vtt>1000000000){$('#gl_amt').val(1000000000);
		vtt = parseFloat($('#gl_amt').val()).toFixed(6);}	
		$('.erc_sum').text(+(parseFloat(vtt).toFixed(6)));}},5)};
	
	$('#qb_amount').on('keydown change blur paste', function(){setTimeout(function(){
		if($('#qb_amount').val()==''){
		$('.qb_sum').text(0);$('.qb_sum1').text(0);
		$('.qb_sum1i').text(0);$('.qb_sum1p').text(0);
		$('.qb_sum2').text(0);$('.qb_sum2i').text(0);
		$('.qb_sum2p').text(0);}else{
		let vtt = parseFloat($('#qb_amount').val()).toFixed(6);
		if(vtt>1000000000){$('#qb_amount').val(1000000000);
		vtt = parseFloat($('#qb_amount').val()).toFixed(6);}
		$('.qb_sum').text(+(vtt*9).toFixed(6));
		$('.qb_sum1').text(+(vtt*0.7).toFixed(6));
		$('.qb_sum1i').text(+(vtt*0.2).toFixed(6));
		$('.qb_sum1p').text(+(vtt*0.5).toFixed(6));
		$('.qb_sum2').text(+(vtt*0.55).toFixed(6));
		$('.qb_sum2i').text(+(vtt*0.05).toFixed(6));
		$('.qb_sum2p').text(+(vtt*0.5).toFixed(6));
		let air= parseFloat($('#qb_amount').val());
		if(Number.isNaN(air)){}else{
			$('#qb_amount').val(air);}}},5)});

	$('#f_ref').on('keydown change blur paste', function(){setTimeout(function(){
		if($('#f_ref').val()!=''){$('.inininv').html('INVITE');$('.inininv').css('cursor','default');
		$('.chekinv').addClass('disabled');$('.chekinv').prop('disabled',true);$('.chekinv').html('CHECKING INVITE...');
		let addresss = $('#f_ref').val();if(addresss.length >= 40){res=Web3.utils.isAddress(addresss);
		if(res){conregg.methods.idd(addresss).call(function(err,cocococ){if(!err){	
				condeal.methods.ipull(addresss).call(function(err,pulli){if(!err){	
				condeal.methods.idrop(addresss).call(function(err,dropi){if(!err){	
				if(cocococ>0){if(parseInt(pulli)>=parseInt(dropi) && parseInt(dropi)>0){
				window.droppi=parseFloat((dropi*16)/(10**19));$('.gairag').html('AIRDROP '+window.droppi+' GLOB'); window.w_id=addresss;
				$('.chekinv').html('GET AIRDROP AND CREATE A FUND'); $('.chekinv').prop('disabled',false);$('.chekinv').removeClass('disabled');
				}else{ $('.gairag').html(''); window.w_id=0;window.droppi=0;$('.chekinv').html('CREATE RESERVE FUND');
				$('.chekinv').prop('disabled',false);$('.chekinv').removeClass('disabled');}
		}else{$('.chekinv').html('WRONG INVITE ADDRESS');$('.gairag').html(''); window.w_id=0;window.droppi=0;}		
		}else{console.error(err);}});}else{console.error(err);}});}else{console.error(err);}});
		}else{$('.chekinv').html('WRONG INVITE ADDRESS');$('.gairag').html(''); window.w_id=0;window.droppi=0;}
		}else{$('.chekinv').html('WRONG INVITE ADDRESS');$('.gairag').html(''); window.w_id=0;window.droppi=0;}
		}else{
			$('.inininv').html('RESTORE');$('.inininv').css('cursor','pointer');window.w_id=0;window.droppi=0;
			$('.gairag').html('');$('.chekinv').html('ENTER INVITE ADDRESS');
			}},5)});
		
	$('.inininv').on('click', function(){$('.inininv').css('cursor','default');
		$('#f_ref').val(window.refadr);$('.inininv').html('INVITE');
		setTimeout(function(){$('#f_ref').change();},50)});
			
$('.seair').on('click', function(){$('.list2').hide();$('.air_list').show();});
$('.senair').on('click', function(){$('.list2').hide();$('.airs_list').show();});
$('.geair').on('click', function(){$('.list2').hide();$('.airg_list').show();});
$('.rreff').on('click', function(){$('.list3').hide();$('.reff_list').show();});
$('.sreff').on('click', function(){$('.list3').hide();$('.seff_list').show();});

function U_time(t){
	let a=new Date(t*1000); if(t==0){a=new Date();}
	let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	let year=a.getFullYear();
	let month=months[a.getMonth()];
	let date=a.getDate();if(date<10){date='0'+date;}
	let hour=a.getHours();if(hour<10){hour='0'+hour;}
	let min=a.getMinutes();if(min<10){min='0'+min;}
	let sec=a.getSeconds();if(sec<10){sec='0'+sec;}
	let time=year +' '+month+' '+date+' '+hour+':'+min+':'+sec;return time;}	
function U_tim(t){
	let a=new Date(t*1000);  if(t==0){a=new Date();}
	let months=['01','02','03','04','05','06','07','08','09','10','11','12'];
	let year=a.getFullYear();
	let month=months[a.getMonth()];
	let date=a.getDate();if(date<10){date='0'+date;}
	let hour=a.getHours();if(hour<10){hour='0'+hour;}
	let min=a.getMinutes();if(min<10){min='0'+min;}
	let sec=a.getSeconds();if(sec<10){sec='0'+sec;}
	let time=year +'-'+month+'-'+date+' '+hour+':'+min; return time;}	
function logg(a){$('.consoley').append('<p>'+a+'</p>');}

function autochecker(a){
	web3.eth.getTransaction(a,function(err,result){if(!err){let bnum = result['blockNumber'];
	if(bnum!=null){console.log('done');
	clearInterval(window.cTime);
	web3.eth.getTransactionReceipt(a,function(err,result){if(!err){
	let bsum; 
	if(!!result['status']){bsum=result['status'];}else{
		bsum=false;};
	$('#tx-status,#kuku').css('cursor','default');
	$('#tx-status').css('animation','none');
	if(bsum!=false){
		$('#tx-status').html('<b>TRANSACTION SUCCESS!</b>');$('#tx-status').css('color','#efb734');
		}else{
		$('#tx-status').html('<b>TRANSACTION ERROR!</b>');$('#tx-status').css('color','red');
		}
	}else{console.log(err);}});}}else{console.log(err);}});}

function xrel(a){
	$('.shad_').hide();
	$('.consoley').html('');
	$('#kuku').remove();
	window.rrw0=0;	
	window.rrw1=0;
	window.rrw2=0;
	window.rrw3=0;
	window.kosoa=[];
	window.fosoa=[];
	window.sosoa=[];
	if(a){}else{metammst();}}
		
function startmm(){
window.rrw1=0;
window.rrw2=0;
window.rrw3=0;
fstRefss(window.ref1-1);

$('.xoff').hide();
$('.tx_waiting6').show();
$('.ffqbw_sum').html(window.upFund);
$('.ethadr').html(accounts[0]);
		 $('.msec').hide();
		 $('.renew').show();
		  $('.home').click();
		  
		  
	//console.log('RRR '+window.w_id);
  
		  
	/*
	
	if(window.usid==0 && parseInt(window.air)>0 && parseInt(window.air)>parseInt(window.lot)){
	
	window.w_id=window.referrer;
	window._airr=(drop*16)/10**19;}
	
	
	
		/*	
	
	//$('.gairlot').html(((drop*16)/10**19)+"<small style='font-size:30px;'> GLOB</small>");
	//$('.gairlot1').html(((drop*16)/10**19));
	
	//$('.hru').removeClass('hidden');
	}
	console.log('RRR '+window.w_id);
	console.log('RR '+window.referrer);
	console.log('AA '+window.air);
	console.log('LL '+window.lot);

	else{
	$('.gairlot').html("<small style='font-size:30px;margin:0;'>AIRDROP DISABLED</small>");	
	
	$('.gairdrop,.uuuppp').hide();
	$('.hru').addClass('hidden');}
	$('.airss').html(window.num);
	*/
		  

if(window.usid==0){
$('.loggged').show();
$('.unloggged').hide();

$('.regonly').addClass('hidden');	
$('.unregregonly').removeClass('hidden');

$('.globid,.usrid').html('UNREGISTERED');
$('.help1').show();	
$('.ethadr').html(accounts[0]);

	$('.fundii').html('STEP 4 <span class="glyphicon glyphicon-ban-circle" style="margin-left:10px;"></span>');
	$('.fundii').css('color','#BFBFBF');
	$('.fundi').html('<b>CHECKING FUND REGISTRATION</b>');
	$('.fundi').css('color','#9C710C');

if(window.eBallance < 0.001){$('.xoff').hide();$('.tx_waiting1').show();}else{$('.xoff').hide();$('.tx_waiting3').show();}
$('.unregistred').show();
$('.acon').addClass('hidden');
$('#reflink').hide();
$('#us_in').show();
	$('.onono').addClass('activ');$('.nottic').show();	
}else{
	
	$('.fundii').html('STEP 4 <span class="glyphicon glyphicon-ok" style="margin-left:10px;"></span>');
	$('.fundii').css('color','#fff');
	$('.fundi').html('<b>THE FUND R'+window.usid+' REGISTERED</b>');
	$('.fundi').css('color','#efb734');
	
	
if(window.eBallance < 0.0005){$('.xoff').hide();$('.tx_waiting1').show();}else{
if(window.gBallance == 0){$('.xoff').hide();$('.tx_waiting5').show();}}

$('#reflink').show();
$('#referreri').hide();
$('#us_in').hide();

if(window.eBallance>0.0005 && window.gBallance>0){
	$('.onono').removeClass('activ');
	$('.nottic').hide();}else{
	$('.onono').addClass('activ');
	$('.nottic').show();}

cashbkss(0);referrers(0);seferrers(0);
$('.unregregonly').hide().addClass('hidden');	
$('.regonly').removeClass('hidden');




$('.refid').html(window.refid);	
$('.usrid').html('R'+window.usid);
if(!!window.topp){		
$('#reflink').val(window.topp+"?r="+window.usid);
$('#reflin').val(window.topp+"?g="+window.usid);
}else{
$('#reflink').val("https://globreserve.github.io/?r="+window.usid);
$('#reflin').val("https://globreserve.github.io/?g="+window.usid);}
$('.globid').html('FUND R'+window.usid);
$('.history_list').show();
$('.help1').hide();}

$('.gmined').html(window.ggmint);
$('.gbonus').html(window.bonus);
$('.deals').html(window.tdeals);
$('.users').html(window.tusers);
$('.supply').html(window.tsupply);

$('.etheee').html(window.eBallance);
$('.getheee').html(window.gBallance);

$('.eth').html(+(window.eBallance).toFixed(4));
$('.geth').html(+(window.gBallance).toFixed(4));

$('.funds').html(+(window.upFund).toFixed(4));
$('.dlscb').html(window.ecash);

$('.dealscb').html(window.cashblist.length);
$('.a_r1').html(window.refs1);
$('.a_r2').html(window.refs2);
$('.a_tt').html(+(window.refs2+window.refs1).toFixed(4));
if(!window.usid || window.usid>2){
$('.t_rff').html(window.reffs.length);
$('.t_rfs').html(window.seffs.length);
$('.t_rft').html(window.reffs.length+window.seffs.length);}else{
$('.t_rff').html(window.reffs.length);
$('.t_rfs').html(window.seffs.length-window.reffs.length);	
$('.t_rft').html(window.seffs.length);}
$('.t_air').text(window.air);
$('.t_drop').text(window.lot);
$('.airpul').text(window.lot);
if(window.air>0 && window.lot>0){$('.aircon').text(parseInt(window.air/window.lot));}else{$('.aircon').text('0');}


if(window.air>0){
	$('.uncharged').addClass('hidden');
	$('.charged').removeClass('hidden');
	$('#am_air').val(window.air);
	$('#am_drop').val(window.lot);
	$('#am_air').attr('disabled','disabled').prop('disabled');
	$('#am_drop').attr('disabled','disabled').prop('disabled');
	if(!!window.topp){
		$('#airlinn').val(window.topp+"?g="+window.usid);}else{
		$('#airlinn').val("https://globreserve.github.io/?g="+window.usid);}
		$('.charged').show();
	sogggss();}else{
	$('.uncharged').removeClass('hidden');
	$('.charged').addClass('hidden');
	$('#am_air').val('');
	$('#am_drop').val('');
	$('#am_air').attr('disabled','off').prop('disabled',false);
	$('#am_drop').attr('disabled','off').prop('disabled',false);}
	
	if(!!window.topp){
		$('#airlinn').val(window.topp+"?g="+window.usid);}else{
		$('#airlinn').val("https://globreserve.github.io/?g="+window.usid);}
	//$('.charged').hide();
	
$('.consoley').hide();
$('#getesc').click();
if(window.usid!=0){$('.wal').removeClass('hida');}
$('.shads_').hide();
if(window.num>0){$('.serrr').click();}
$('.renew').addClass('metam');}

function dopen(n){if(n!='0'){$('#sssr').val('D'+n);$('.serrr').click();}}

function ronly(){
$('.deals').html(window.tdeals);
$('.users').html(window.tusers);
$('.supply').html(window.tsupply);
$('.funds').html(+(window.upFund).toFixed(6));
if(!!uget('d')){$('#sssr').val('D'+uget('d'));$('.serrr').click();}else
if(!!uget('m')){$('#sssr').val('M'+uget('m'));$('.serrr').click();}else
if(!!uget('g')){$('#sssr').val('G'+uget('g'));$('.serrr').click();}else
if(!!uget('r')){$('#sssr').val('R'+uget('r'));$('.serrr').click();}}

function getCookie(name){
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;}