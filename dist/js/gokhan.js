var izindates = []
var farkdates = []
let editorChangeHandlerId;
var dataT;
var gostergelerdata;
var gostergelerArr;
var haberlerArr;
var katsayilar;
var datam;
var toplamSayfa = 20;
var goruntulenecekSayfa = 5;
var sayfadakiHaber = 5;
var sonSayfaZiyaretCount = 0;

function hesaplax(x, y){	
	if (x == null) { 
		x = 0.00;
	}
	
	x = parseFloat(x * 68.31);
	
	if (y == false) { 
		z = parseFloat(x / 4000);		
	} else { 
		z = parseFloat(x / 20000);
	}
		
	return sonuc;
}


function hesapla(x, y){
	maktuharc = 179.90;	
	
	if (x == null) { 
		x = 0.00;
	}
	
	x = parseFloat(x * 68.31);
	
	if (y == false) { 
		z = parseFloat(x / 4000);		
	} else { 
		z = parseFloat(x / 20000);
	}
	
	if (z == 0) {
		sonuc = 0
	} else if (z < maktuharc) { 
		sonuc = maktuharc;
	} else { 
		sonuc = z;
	}	
	return sonuc;
}

function gunlericevir(x) { 
	var dateParts = x.split("/");
	var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
	
	return dateObject;

}

function gunleridus() { 
	var sayi = 0;
	var sayiiki = 0;	

	let uniqueChars = [];
	
	if (izindates.length > 0) { 		
		farkdates.forEach((element) => {
		if (!izindates.includes(element)) {
			uniqueChars.push(element);
		}
		});
	} else { 
		uniqueChars = farkdates;
	}
	
	return uniqueChars.length;
}

function getDates (startDate, endDate) {
	  const dates = []
	  
	  let currentDate = startDate
	  const addDays = function (days) {
		const date = new Date(this.valueOf())
		date.setDate(date.getDate() + days)
		return date
	  }
	  while (currentDate <= endDate) {
		var nowDate = new Date(currentDate); 
		var yil = nowDate.getFullYear();
		
		if (nowDate.getMonth()+1 < 10) { 
			var ay = '0' + (nowDate.getMonth()+1);
		} else { 
			var ay = nowDate.getMonth()+1;
		}
		
		if (nowDate.getDate() < 10) { 
			var gun = '0' + nowDate.getDate();
		} else { 
			var gun = nowDate.getDate();
		}
		
		var date = gun +'/'+ ay +'/'+ yil;
		dates.push(date);
		izindates.push(date);
		let uniqueChars = [...new Set(izindates)];
		izindates = uniqueChars;
		currentDate = addDays.call(currentDate, 1);
	  }
	  return dates
}

function getfarkDates (startDate, endDate) {
	  const dates = []
	  
	  let currentDate = startDate
	  const addDays = function (days) {
		const date = new Date(this.valueOf())
		date.setDate(date.getDate() + days)
		return date
	  }
	  while (currentDate <= endDate) {
		var nowDate = new Date(currentDate); 
		var yil = nowDate.getFullYear();
		
		if (nowDate.getMonth()+1 < 10) { 
			var ay = '0' + (nowDate.getMonth()+1);
		} else { 
			var ay = nowDate.getMonth()+1;
		}
		
		if (nowDate.getDate() < 10) { 
			var gun = '0' + nowDate.getDate();
		} else { 
			var gun = nowDate.getDate();
		}
		
		var date = gun +'/'+ ay +'/'+ yil;
		dates.push(date);
		
		currentDate = addDays.call(currentDate, 1);
	  }
	  return dates
}


function myNoty(MYlayout,MYtype,MYtext){
	noty({
		layout: MYlayout,
		theme: 'relax', 
		type: MYtype, // success, error, warning, information, notification
		text: MYtext,
		timeout: 3000,
		closeWith: ['hover','click'],
	});
}

$.ajax({
  url: "./dist/katsayilar.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    window.katsayilar = data;
  }
});

$.ajax({
  url: "./dist/datalar.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    window.gostergelerArr = data;	
  }
});

function escapeHtml(unsafe)
{
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

$.getJSON('./dist/haberler.json', function(response) {    
	window.haberlerArr = response;	
	var html = '';
	
	for (let i = 0; i < window.haberlerArr.length &&  i < window.sayfadakiHaber; i++) {
	  var resim = window.haberlerArr[i]['resim'];
	  html = html + '<div> <div class="row"><div class="col-auto"><span class="gokhanavatar" style="background-image: url(' + window.haberlerArr[i]['resim'] +')"></span></div><div class="col"><div class="text-truncate p-1">' + window.haberlerArr[i]['baslik'] + '</div><div class="text-muted p-1">' + window.haberlerArr[i]['metin'].substring(0,200) +'</p></div><a href="' + window.haberlerArr[i]['id'] +  '" class="btn btn-ghost-info float-end"> Devam??n?? okuma</a></div></div></div>';
	  
	}	
	$("#habericerikleri").html(html);
	
});

$.getJSON("https://api.countapi.xyz/hit/adliyeci.com.tr/visits", function(response) {
    $("#ziyaretci").html(response.value);	
});	

/*
$.getJSON("https://api.countapi.xyz/hit/adliyeci_" + window.location.pathname.substr(1) + "/" + window.location.search, function(response) {
    //$("#ziyaretci").html(response.value);	
	window.sonSayfaZiyaretCount = response.value;
});	
*/

var d = new Date();
var tarih = d.setHours(0,0,0,0) / 1000;
var url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/adliyecicomtr' + tarih + '/scores/';

$.getJSON(url, function(response) {
	window.datam = response.result;
	window.datam = window.datam.sort((a, b) => {
	  if (a.score > b.score) {
		return -1;
	  }
	});
	window.datam = window.datam.slice(0,5);
	window.datam.forEach(createUserList);
	
	
});

function createUserList(item, index, arr) {	
		const li = document.createElement('li');  
		const ul = document.getElementById('ranklistu');		
        li.innerHTML = '<b>' + (index+1) + '- </b>' + item['user'] + ' - ' + item['score'] +' kelime';
		li.setAttribute ('class', 'list-group-item');		
        ul.appendChild(li);
	
}
 
function getGosterge(derecem) { 

	for(var i = 0; i < window.gostergelerArr.length; i++)
	{
	  if(window.gostergelerArr[i].derece == derecem)
	  {			
		return window.gostergelerArr[i];
	  }
	}
}

function paginate(array, page_size, page_number) {
	//return array.slice((page_number - 1) * page_size, page_number * page_size);
	var sliced = array.slice((page_number - 1) * page_size, page_number * page_size);	
	var html = '';
	
	for (let i = 0; i < sliced.length; i++) {
	  var resim = sliced[i]['resim'];
	  html = html + '<div> <div class="row"><div class="col-auto"><span class="gokhanavatar" style="background-image: url(' + sliced[i]['resim'] +')"></span></div><div class="col"><div class="text-truncate p-1">' + sliced[i]['baslik'] + '</div><div class="text-muted p-1">' + sliced[i]['aciklama'].substring(0,200) +'</p><a href="/oku?id=' + sliced[i]['id'] +  '" class="btn btn-ghost-info float-end"> T??m??n?? Oku</a></div><hr/></div></div>';
	  
	}	
	$("#habericerikleri").html(html);
}


function insertScore(date, isim, score) {	
	
	// Sending a receiving data in JSON format using GET method
	//      
	var xhr = new XMLHttpRequest();
	var url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/adliyecicomtr' + date + '/scores/';
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var json = JSON.parse(xhr.responseText);
			console.log('veri gitti');
		}
	};
	var data = JSON.stringify({"user": isim, "score": score});
	xhr.send(data);
	//console.log(url);
	

}

$(document).ready(function(){
	
	if($('#tinymce-mytextarea').length>0){
		
		let options = {
          selector: '#tinymce-mytextarea',
          height: 300,
          menubar: false,
          statusbar: false,		
		  default_link_target: '_blank',		  
          plugins: [
            'table advlist autolink lists link code image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'code undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol' +
            'removeformat' + ' code,',
          content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; -webkit-font-smoothing: antialiased; }'
        }
        if (localStorage.getItem("tablerTheme") === 'dark') {
          options.skin = 'oxide-dark';
          options.content_css = 'dark';
        }
        tinyMCE.init(options);
	}
	
	
	if($('#avukatlikucret').length>0){
		
		window.dataT = $('#avukatlikucret').DataTable({
			"fixedHeader": true,
			"order": [[ 0, "desc" ]],			
			"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Hepsi"]],
			"dom": '<"topleft"PlBf><"dataTables_filter">rt<"bottom"lip><"clear">',
			"pageLength": 50,
			"buttons": [			
			{	
				"text": "T??m??",				
				"className": "btn btn-sm btn-flat bg-blue",
				"action": function () {
					dataT.column(1).search("").draw();
				},
			},
			{	
				"extend": 'excelHtml5',
				"className": "btn btn-sm btn-flat bg-blue",
				"autoFilter": true,
				"title": "Yasakl?? Listesi - ",
			},			
			],	
			"language": {
            "url": "./dist/tr.json"
			},
		});
	}
	
	if($('#bilirkisiucret').length>0){
		window.dataT = $('#bilirkisiucret').DataTable({
			"fixedHeader": true,
			"order": [[ 0, "desc" ]],			
			"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Hepsi"]],
			"dom": '<"topleft"PlBf><"dataTables_filter">rt<"bottom"lip><"clear">',
			"pageLength": 50,
			"buttons": [			
			{	
				"text": "T??m??",				
				"className": "btn btn-sm btn-flat bg-blue",
				"action": function () {
					dataT.column(1).search("").draw();
				},
				
			},			
			],	
			"language": {
            "url": "./dist/tr.json"
			},
		});
	}
	
	if($('#uzlastirmaciucret').length>0){
		window.dataT = $('#uzlastirmaciucret').DataTable({
			"select": true,
			"fixedHeader": true,
			"order": [[ 0, "desc" ]],
				
			"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Hepsi"]],
			"dom": '<"topleft"PlBf><"dataTables_filter">rt<"bottom"lip><"clear">',
			"pageLength": 50,
			"buttons": [			
			{	
				"text": "T??m??",				
				"className": "btn btn-sm btn-flat bg-blue",
				"action": function () {
					dataT.column(1).search("").draw();
				},
				
			},
			{	
				"extend": 'excelHtml5',
				"className": "btn btn-sm btn-flat bg-blue",
				"autoFilter": true,
				"title": "Yasakl?? Listesi - ",
			},
			],	
			"language": {
            "url": "./dist/tr.json"
			},
		});
	}	
	
	if($('#table').length>0){
		//getter();
	} 
	
	$('input[name="vekaletmiktar"]').keyup(function() {
		var thiz = $(this);
		var deger = thiz.val();
		var kiranafaka = $('input[name="kiranafaka"]').prop('checked');
		var sonuc = parseFloat($('input[name="vekaletmiktar"]').val()).toFixed(2);
		var cikandeger;
		var hesaplanandeger = 0.00;
		var mahkememaktu = $("#mahkeme-maktu").val();		
			
		// ??lk 100.000 i??in %16			
		if (sonuc > 0 && sonuc <= 100000) { 
			hesaplanandeger = sonuc * 0.16;
		}
		
		// Sonraki 100.000 i??in %15 - 200
		if (sonuc > 100000 && sonuc <= 200000) { 
			hesaplanandeger = 100000 * 0.16;
			hesaplanandeger = hesaplanandeger + ((sonuc - 100000) * 0.15);
		} 	
		
		// Sonraki 300.000 i??in %14 - 500		
		if (sonuc > 200000 && sonuc <= 500000) { 
			hesaplanandeger = 100000 * 0.16;
			hesaplanandeger = hesaplanandeger + (100000 * 0.15);
			hesaplanandeger = hesaplanandeger + ((sonuc - 200000) * 0.14);
		} 
		 
		// Sonraki 500.000 i??in %11 - 1m		
		if (sonuc > 500000 && sonuc <= 1000000) { 
			hesaplanandeger = 100000 * 0.16;
			hesaplanandeger = hesaplanandeger + (100000 * 0.15);
			hesaplanandeger = hesaplanandeger + (300000 * 0.14);
			hesaplanandeger = hesaplanandeger + ((sonuc - 500000) * 0.11);
		} 
		
		// Sonraki 700.000 i??in %8 - 1.7m		
		if (sonuc > 1000000 && sonuc <= 1700000) { 
			hesaplanandeger = 100000 * 0.16;
			hesaplanandeger = hesaplanandeger + (100000 * 0.15);
			hesaplanandeger = hesaplanandeger + (300000 * 0.14);
			hesaplanandeger = hesaplanandeger + (500000 * 0.11);
			hesaplanandeger = hesaplanandeger + ((sonuc - 1000000) * 0.08);
		} 
		
		// Sonraki 900.000 i??in %5 - 2.6m
		if (sonuc > 1700000 && sonuc <= 2600000) { 
			hesaplanandeger = 100000 * 0.16;
			hesaplanandeger = hesaplanandeger + (100000 * 0.15);
			hesaplanandeger = hesaplanandeger + (300000 * 0.14);
			hesaplanandeger = hesaplanandeger + (500000 * 0.11);
			hesaplanandeger = hesaplanandeger + (700000 * 0.08);
			hesaplanandeger = hesaplanandeger + ((sonuc - 1700000) * 0.05);
		} 
		
		// Sonraki 1.1m i??in %3 - 3.7m
		if (sonuc > 2600000 && sonuc <= 3700000) { 
			hesaplanandeger = 100000 * 0.16;
			hesaplanandeger = hesaplanandeger + (100000 * 0.15);
			hesaplanandeger = hesaplanandeger + (300000 * 0.14);
			hesaplanandeger = hesaplanandeger + (500000 * 0.11);
			hesaplanandeger = hesaplanandeger + (700000 * 0.08);
			hesaplanandeger = hesaplanandeger + (900000 * 0.05);
			hesaplanandeger = hesaplanandeger + ((sonuc - 2600000) * 0.03);
		} 
		
		// Sonraki 1.3m i??in %2 - 5m
		if (sonuc > 3700000 && sonuc <= 5000000) { 
			hesaplanandeger = 100000 * 0.16;
			hesaplanandeger = hesaplanandeger + (100000 * 0.15);
			hesaplanandeger = hesaplanandeger + (300000 * 0.14);
			hesaplanandeger = hesaplanandeger + (500000 * 0.11);
			hesaplanandeger = hesaplanandeger + (700000 * 0.08);
			hesaplanandeger = hesaplanandeger + (900000 * 0.05);
			hesaplanandeger = hesaplanandeger + (1100000 * 0.03);
			hesaplanandeger = hesaplanandeger + ((sonuc - 3700000) * 0.02);
		}

		// Sonraki 5m sonras?? i??in %1 
		if (sonuc > 5000000) { 
			hesaplanandeger = 100000 * 0.16;
			hesaplanandeger = hesaplanandeger + (100000 * 0.15);
			hesaplanandeger = hesaplanandeger + (300000 * 0.14);
			hesaplanandeger = hesaplanandeger + (500000 * 0.11);
			hesaplanandeger = hesaplanandeger + (700000 * 0.08);
			hesaplanandeger = hesaplanandeger + (900000 * 0.05);
			hesaplanandeger = hesaplanandeger + (1100000 * 0.03);
			hesaplanandeger = hesaplanandeger + (3700000 * 0.02);
			hesaplanandeger = hesaplanandeger + ((sonuc - 5000000) * 0.01);
		}
		
		var yazilacakdeger;
		
		if (hesaplanandeger - mahkememaktu > 0) {
			yazilacakdeger = hesaplanandeger;	
		} else {			
			if (sonuc - mahkememaktu > 0) { 
				yazilacakdeger = mahkememaktu;
			} else { 
				yazilacakdeger = sonuc;
			}			
		}
		
		if (mahkememaktu == '17400') { 
			
			if (yazilacakdeger = mahkememaktu) { 
					hesaplanandeger = 100000 * 0.16;
					if (sonuc > 0 && sonuc <= 100000) { 
						hesaplanandeger = sonuc * 0.16;
					}					
					// Sonraki 100.000 i??in %15 - 200
					if (sonuc > 100000 && sonuc <= 200000) { 
						hesaplanandeger = 100000 * 0.16;
						hesaplanandeger = hesaplanandeger + ((sonuc - 100000) * 0.15);
					} 
					// Sonraki 300.000 i??in %14 - 500		
					if (sonuc > 200000 && sonuc <= 500000) { 
						hesaplanandeger = 100000 * 0.16;
						hesaplanandeger = hesaplanandeger + (100000 * 0.15);
						hesaplanandeger = hesaplanandeger + ((sonuc - 200000) * 0.14);
					} 						
					// Sonraki 500.000 i??in %11 - 1m		
					if (sonuc > 500000 && sonuc <= 1000000) { 
						hesaplanandeger = 100000 * 0.16;
						hesaplanandeger = hesaplanandeger + (100000 * 0.15);
						hesaplanandeger = hesaplanandeger + (300000 * 0.14);
						hesaplanandeger = hesaplanandeger + ((sonuc - 500000) * 0.11);
					} 
					yazilacakdeger = hesaplanandeger;				
			}
		
			if (yazilacakdeger - mahkememaktu > 0) { 
				yazilacakdeger = mahkememaktu;
			}
		
			if (yazilacakdeger - 4000 < 0) {  // sulh ceza ??cretinden az olamaz
				yazilacakdeger = 4000;
			}
		}
		
		if (kiranafaka == true) { 
			if (yazilacakdeger - mahkememaktu < 0) { 
				yazilacakdeger = mahkememaktu;
			}		
		}
		$("#hesapsonuc").html("<h2>??cret-i vekalet :<br>" +  parseFloat(yazilacakdeger).toFixed(2) + " TL </h2>");
	})
	
	$('#mahkeme-maktu').change(function() { 
		$('input[name="vekaletmiktar"]').val('0');
		$("#hesapsonuc").html("<h2></h2>");
	});
	

	$('input[name="miktar"]').keyup(function() {
		var thiz = $(this);
		var deger = thiz.val();
		var olumcismani = $('input[name="olumcismani"]').prop('checked');
		var sonuc = parseFloat(hesapla(deger, olumcismani)).toFixed(2);
		
		if (sonuc > 0) { 
			$("#hesapsonuc").html("<h2>Al??nmas?? gereken har?? :<br>" + parseFloat(hesapla(deger, olumcismani)).toFixed(2) + " TL </h2>");	
		} else { 
			$("#hesapsonuc").html("<h1></h1>");	
		}  
	})
	
	$('input[name="islahmiktar"]').keyup(function() {
		var thiz = $(this);
		var deger = $('input[name="islahmiktar"]').val();
		var davamiktar = $('input[name="davamiktar"]').val();		
		var olumcismani = $('input[name="olumcismanii"]').prop('checked');
		var netice = deger - davamiktar;
		
		if (deger - davamiktar > 0) { 
			var sonuc = parseFloat(hesapla(netice, olumcismani)).toFixed(2);			
		} else { 
			myNoty('topRight','danger','Dava miktar?? ??slah miktar??ndan b??y??k yada e??it olamaz');
		
		}		
		
		if (sonuc > 0) { 
			$("#hesapsonuc").html("<h2>Al??nmas?? gereken har?? :<br>" + parseFloat(hesapla(netice, olumcismani)).toFixed(2) + " TL </h2>");	
		} else { 
			$("#hesapsonuc").html("<h1></h1>");	
		}		  
	})
	
	$('input[name="davamiktar"]').keyup(function() {
		var thiz = $(this);
		var deger = $('input[name="islahmiktar"]').val();
		var davamiktar = $('input[name="davamiktar"]').val();		
		var olumcismani = $('input[name="olumcismanii"]').prop('checked');
		var netice = deger - davamiktar;
		
		if (deger - davamiktar > 0) { 
			var sonuc = parseFloat(hesapla(netice, olumcismani)).toFixed(2);		
		} else { 
			myNoty('topRight','danger','Dava miktar?? ??slah miktar??ndan b??y??k yada e??it olamaz');
		
		}		
		
		if (sonuc > 0) { 
			$("#hesapsonuc").html("<h2>Al??nmas?? gereken har?? :<br>" + parseFloat(hesapla(netice, olumcismani)).toFixed(2) + " TL </h2>");	
		} else { 
			$("#hesapsonuc").html("<h1></h1>");	
		}		  
	})

	$('input[name="olumcismani"]').change(function() {
		
		var deger = $('input[name="miktar"]').val();
		var olumcismani = $('input[name="olumcismani"]').prop('checked');
		var sonuc = parseFloat(hesapla(deger, olumcismani)).toFixed(2);
		
		if (sonuc > 0) { 
			$("#hesapsonuc").html("<h2>Al??nmas?? gereken har?? :<br>" + parseFloat(hesapla(deger, olumcismani)).toFixed(2) + " TL </h2>");	
		} else { 
			$("#hesapsonuc").html("<h1></h1>");	
		} 
		
	})	
	
	$( "#maashesapla" ).click(function() {
		var aylik_gosterge = window.katsayilar[1].aylik_katsayi;		
		var taban_ayligi_katsayisi = window.katsayilar[1].taban_ayligi_katsayi;
		var yan_odeme_katsayisi = window.katsayilar[1].yan_odeme_katsayi;
		var gelir_vergisi_istisna = window.katsayilar[1].gelir_vergisi_istisna;
		var damga_vergisi_istisna = window.katsayilar[1].damga_vergisi_istisna;
		var son_artis = window.katsayilar[1].enflasyon;
		var fark_artis = window.katsayilar[2].enflasyon;
		var toplu_soz_artis = window.katsayilar[3].enflasyon;
		// formdaki veriler 
		var unvan = $('#unvan').val();
		var kadro_derece = $('#kadroderece').val();
		var hizmet_yili = $('input[name="hizmetyili"]').val();
		var medeni_durum = $('#medenidurum').val();
		var cocuk72aydankucuk = $('#cocuk72aydankucuk').val();
		var cocuk72aydanbuyuk = $('#cocuk72aydanbuyuk').val();
		var engellicocuk72aydankucuk = $('#engellicocuk72aydankucuk').val();
		var engellicocuk72aydanbuyuk = $('#engellicocuk72aydanbuyuk').val();
		var sendikauye = $('#sendikauye').val();
		var gorevyeri = $('#gorevyeri').val();
		var yabancidil = $('#yabancidil').val();
		var tabikanun = $('#tabikanun').val();
		var sendikaikramiye = $('#sendikaikramiye').val();
		var ilgili_derece_bilgileri = getGosterge(kadro_derece);
		// ## GEL??RLER ## //
		// g??sterge ayl??????
		var gosterge_ayligi = ilgili_derece_bilgileri['gosterge'];
		var gosterge_ayligi_tutar = parseFloat(aylik_gosterge * gosterge_ayligi).toFixed(2);
		// ek g??sterge
		var ek_gosterge_ayligi;
		
		if (unvan == 1) {  // M??d??r
			ek_gosterge_ayligi = ilgili_derece_bilgileri['ek_gosterge_mudur'];
			
		} else {  
			if (mezuniyet == 1) { 
				ek_gosterge_ayligi = ilgili_derece_bilgileri['ek_gosterge_uni'];
			} else { 
				ek_gosterge_ayligi = ilgili_derece_bilgileri['ek_gosterge_digerleri'];
			}
		}		
		var ek_gosterge_ayligi_tutar = parseFloat(ek_gosterge_ayligi * aylik_gosterge).toFixed(2);		
		// taban ayl??k
		var taban_ayligi_tutar = parseFloat(1000 * taban_ayligi_katsayisi).toFixed(2);
		// k??dem ayl??????;
		if (hizmet_yili > 25) { 
			hizmet_yili = 25;
		}
		var kidem_ayligi_tutar = parseFloat(20 * hizmet_yili * aylik_gosterge).toFixed(2);
		// yan ??deme ayl??????
		var ozel_hizmet_oran;
		var ek_odeme_oran;
		var yan_odeme_oran;
		if (unvan == 1) {  // M??d??r
			ozel_hizmet_oran = ilgili_derece_bilgileri['ozel_hizmet_tazminat_mudur'];
			ek_odeme_oran = ilgili_derece_bilgileri['ek_odeme_ayligi_mudur'];	
			yan_odeme_oran = 	ilgili_derece_bilgileri['yan_odeme_mudur'];			
		} else if (unvan == 2) { // Katip
			ozel_hizmet_oran = ilgili_derece_bilgileri['ozel_hizmet_tazminat_katip'];
			ek_odeme_oran = ilgili_derece_bilgileri['ek_odeme_ayligi_katip'];	
			yan_odeme_oran = 	ilgili_derece_bilgileri['yan_odeme_katip'];					
		} else if (unvan == 3) {  // M??ba??ir
			ozel_hizmet_oran = ilgili_derece_bilgileri['ozel_hizmet_tazminat_mubasir'];	
			ek_odeme_oran = ilgili_derece_bilgileri['ek_odeme_ayligi_mubasir'];
			yan_odeme_oran = 	ilgili_derece_bilgileri['yan_odeme_mubasir'];				
		} 		
		var yan_odeme_tutar = parseFloat(yan_odeme_oran * yan_odeme_katsayisi).toFixed(2);
		
		// aile yard??m?? e??
		var es_yardimi_tutar = parseFloat(medeni_durum * aylik_gosterge).toFixed(2);
		// ??ocuk yard??m??
		var cocuk_yardim_tutar = parseFloat(((cocuk72aydankucuk * 500) + (cocuk72aydanbuyuk * 250) + (engellicocuk72aydankucuk * 750) + (engellicocuk72aydanbuyuk * 375)) * aylik_gosterge).toFixed(2);
		// ??zel hizmet tazminat??			
		var ozel_hizmet_tutar = parseFloat(9500 * aylik_gosterge * ozel_hizmet_oran / 100).toFixed(2);		
		// ek ??deme
		var ek_odeme_tutar = parseFloat(9500 * aylik_gosterge * ek_odeme_oran / 100).toFixed(2);
		// il adalet hizmetleri tazminat??
		var il_adalet_hizmetleri_tazminat_tutar	= parseFloat(9500 * aylik_gosterge * gorevyeri / 100).toFixed(2);
		// sendika ??demesi
		var sendika_ikramiye_tutar = parseFloat(aylik_gosterge * sendikaikramiye * sendikauye).toFixed(2);
		// dil tazminat??
		var dil_tazminat_tutar = parseFloat(aylik_gosterge * yabancidil).toFixed(2);
		
		var artilartoplam = (dil_tazminat_tutar * 1) + (sendika_ikramiye_tutar * 1) + (il_adalet_hizmetleri_tazminat_tutar * 1) + (ek_odeme_tutar * 1) + (ozel_hizmet_tutar * 1) + (cocuk_yardim_tutar * 1) + (es_yardimi_tutar * 1) + (yan_odeme_tutar * 1) + (kidem_ayligi_tutar * 1) + (taban_ayligi_tutar * 1) + (ek_gosterge_ayligi_tutar * 1) + (gosterge_ayligi_tutar *1);
		
		// ## G??DERLER ## //
		// sendika kesintisi
		var sendika_kesinti_tutar = parseFloat(((gosterge_ayligi_tutar *1) + (ek_gosterge_ayligi_tutar *1) + (taban_ayligi_tutar * 1) + (kidem_ayligi_tutar * 1) + (yan_odeme_tutar * 1) + (ozel_hizmet_tutar * 1) + (sendika_ikramiye_tutar * 1) + (ek_odeme_tutar * 1) + (il_adalet_hizmetleri_tazminat_tutar * 1)) * 0.005);
		// gelir vergisi
		var gelir_vergisi = parseFloat(((gelir_vergisi_istisna * 1) - (((gosterge_ayligi_tutar *1) + (ek_gosterge_ayligi_tutar *1) + (taban_ayligi_tutar * 1) + (kidem_ayligi_tutar * 1) + (yan_odeme_tutar * 1) + (sendika_ikramiye_tutar * 1) - (sendika_kesinti_tutar * 1)) * 15 / 100))).toFixed(2);
		if (gelir_vergisi * 1 > 0) { 
			gelir_vergisi = 0.00;
		} else { 
			gelir_vergisi = gelir_vergisi * -1;
		}
		// damga vergisi 
		var damga_vergisi = parseFloat((damga_vergisi_istisna * 1) - (((gosterge_ayligi_tutar *1) + (ek_gosterge_ayligi_tutar *1) + (taban_ayligi_tutar * 1) + (kidem_ayligi_tutar * 1) + (yan_odeme_tutar * 1) + (ozel_hizmet_tutar * 1) + (ek_odeme_tutar * 1) + (il_adalet_hizmetleri_tazminat_tutar * 1) + (sendika_ikramiye_tutar * 1)) * 7.59 / 1000)).toFixed(2);
		if (damga_vergisi * 1 > 0) { 
			damga_vergisi = 0.00;
		} else { 
			damga_vergisi = damga_vergisi * -1;
		}
		// Em.Kes.Kar????l?????? - Devlet
		var em_kes_kisi;
		var gss_primi = 0;
		
		var ozel_hizmet_orani;
		
		if (ek_gosterge_ayligi * 1 >= 3600) { 
			ozel_hizmet_oran = 1.45;
		} else if (ek_gosterge_ayligi * 1 >= 2200) { 
			ozel_hizmet_oran = 0.85;
		} else { 
			ozel_hizmet_oran = 0.55;
		}		
		
		if (tabikanun == 1) {  // bana g??re
			em_kes_kisi = parseFloat(((gosterge_ayligi_tutar *1) + (ek_gosterge_ayligi_tutar *1) + (taban_ayligi_tutar * 1) + (kidem_ayligi_tutar * 1) + (ozel_hizmet_tutar * 1) + (il_adalet_hizmetleri_tazminat_tutar * 1)) * 9 / 100).toFixed(2);
			gss_primi = parseFloat(((gosterge_ayligi_tutar *1) + (ek_gosterge_ayligi_tutar *1) + (taban_ayligi_tutar * 1) + (kidem_ayligi_tutar * 1) + (ozel_hizmet_tutar * 1) + (il_adalet_hizmetleri_tazminat_tutar * 1)) * 5 / 100).toFixed(2);		
		} else if (tabikanun == 2) { // ihsan m??d??re g??re
			em_kes_kisi = parseFloat(((gosterge_ayligi_tutar * 1) + (ek_gosterge_ayligi_tutar * 1) + (taban_ayligi_tutar * 1) + (kidem_ayligi_tutar * 1)  + (9500 * aylik_gosterge * ozel_hizmet_oran)) * 16 / 100).toFixed(2);
		}

		var eksilertoplam = parseFloat((sendika_kesinti_tutar * 1) + (gelir_vergisi * 1) + (damga_vergisi * 1) + (em_kes_kisi * 1) + (gss_primi * 1)).toFixed(2);
		
		net_maas = (artilartoplam * 1) - (eksilertoplam *1);
		var fark_maas = net_maas * (100 + (fark_artis *1)) / 100;
		var toplu_soz_maas = fark_maas * (100 + (toplu_soz_artis * 1)) / 100;
		$("#hesapsonuchtml").html('<div class="mb-3"><div class="row"><div class="mb-3 text-green">Gelirler</div><div class="table"><table class="table table-vcenter card-table"><thead><tr><th>??stihaklar</th><th>Oran</th><th>Tutar</th></tr></thead><tbody><tr><td>G??sterge Ayl??????</td><td>' + gosterge_ayligi +'</td><td>' + gosterge_ayligi_tutar +'</td></tr><tr><td>Ek G??sterge Ayl??????</td><td>' + ek_gosterge_ayligi +'</td><td>' + ek_gosterge_ayligi_tutar +'</td></tr><tr><td>Taban Ayl??????</td><td>' + '1000' + '</td><td>' + taban_ayligi_tutar + '</td></tr><tr><td>K??dem Ayl??????</td><td>' + hizmet_yili + '</td><td>' + kidem_ayligi_tutar + '</td></tr><tr><td>Yan ??deme Ayl??????</td><td>' + yan_odeme_oran + '</td><td>' + yan_odeme_tutar + '</td></tr><tr><td>Aile Yard??m?? (E??)</td><td>' + medeni_durum + '</td><td>' + es_yardimi_tutar + '</td></tr><tr><td>Aile Yard??m?? (??ocuk)</td><td>-</td><td>' + cocuk_yardim_tutar + '</td></tr><tr><td>??zel Hizmet Tazminat??</td><td>' + ozel_hizmet_oran + '</td><td>' + ozel_hizmet_tutar + '</td></tr><tr><td>Ek ??deme</td><td>' + ek_odeme_oran + '</td><td>' + ek_odeme_tutar + '</td></tr><tr><td>??l Adalet Hizmetleri Tazminat??</td><td>' + gorevyeri + '</td><td>' + il_adalet_hizmetleri_tazminat_tutar + '</td></tr><tr><td>Toplu S??zle??me ??kramiyesi</td><td>' + sendikaikramiye + '</td><td>' + sendika_ikramiye_tutar + '</td></tr><tr><td>Dil Tazminat??</td><td>' + yabancidil + '</td><td>' + dil_tazminat_tutar + '</td></tr></tbody></table></div></div><div class="mb-3 text-red">Kesintiler</div><div class="table"><table class="table table-vcenter card-table"><thead><tr><th>Kesintiler</th><th>Oran</th><th>Tutar</th></tr></thead><tbody><tr><td>Gelir Vergisi</td><td>%15</td><td>' + gelir_vergisi + '</td></tr><tr><td>Damga Vergisi</td><td>7,59</td><td>' + damga_vergisi + '</td></tr><tr><td>Em.Kes.Kar????l??????</td><td></td><td>' + em_kes_kisi + '</td></tr><tr><td>GSS Primi</td><td></td><td>' + gss_primi + '</td></tr><tr><td>Sendika Kesintisi</td><td>%0.50</td><td>' + sendika_kesinti_tutar.toFixed(2) + '</td></tr></tbody></table></div><div class="mb-3 text-blue">Toplam</div><div class="table"><table class="table table-vcenter card-table"><thead><tr><th>Toplam</th><th>Tutar</th><th></th></tr></thead><tbody><tr><td>??stihaklar Toplam??</td><td></td><td>' + artilartoplam.toFixed(2) + ' ???</td></tr><tr><td>Kesintiler Toplam??</td><td></td><td>-' + eksilertoplam + ' ???</td></tr><tr><th class="text-green">Net Maa??</th><td></td><td>' + net_maas.toFixed(2) + ' ???</td></tr><tr><td class="text-indigo">%' + fark_artis + ' Enflasyon fark?? Ekli Net Maa??</td><td></td><td>' + fark_maas.toFixed(2) + ' ???</td></tr><tr><td class="text-pink">%' + fark_artis + ' Enflasyon fark?? ve %' + toplu_soz_artis + ' toplu s??zle??me ekli net maa??</td><td></td><td>' + toplu_soz_maas.toFixed(2) + ' ???</td></tr></tbody></table></div></div>');
	})
	

	
	$( "#sozmaashesapla" ).click(function() {
		
		var aylik_gosterge = window.katsayilar[1].aylik_katsayi;		
		var taban_ayligi_katsayisi = window.katsayilar[1].taban_ayligi_katsayi;
		var yan_odeme_katsayisi = window.katsayilar[1].yan_odeme_katsayi;
		var gelir_vergisi_istisna = window.katsayilar[1].gelir_vergisi_istisna;
		var damga_vergisi_istisna = window.katsayilar[1].damga_vergisi_istisna;
		var son_artis = window.katsayilar[1].enflasyon;
		var fark_artis = window.katsayilar[2].enflasyon;
		var toplu_soz_artis = window.katsayilar[3].enflasyon;
		// formdaki veriler 
		var unvan = $('#unvan').val();
		var sozlesme_ucret = $('input[name="sozlesmeucreti"]').val();;				
		var hizmet_yili = $('#hizmetyili').val();
		var medeni_durum = $('#medenidurum').val();
		var cocuk72aydankucuk = $('#cocuk72aydankucuk').val();
		var cocuk72aydanbuyuk = $('#cocuk72aydanbuyuk').val();
		var engellicocuk72aydankucuk = $('#engellicocuk72aydankucuk').val();
		var engellicocuk72aydanbuyuk = $('#engellicocuk72aydanbuyuk').val();
		var sendikauye = $('#sendikauye').val();
		var sendikaikramiye = $('#sendikaikramiye').val();
		
		// ## GEL??RLER ## //
		// aile yard??m?? e??
		var es_yardimi_tutar = parseFloat(medeni_durum * aylik_gosterge).toFixed(2);
		// ??ocuk yard??m??
		var cocuk_yardim_tutar = parseFloat(((cocuk72aydankucuk * 500) + (cocuk72aydanbuyuk * 250) + (engellicocuk72aydankucuk * 750) + (engellicocuk72aydanbuyuk * 375)) * aylik_gosterge).toFixed(2);
		var ek_odeme = parseFloat(9500 * hizmet_yili * aylik_gosterge / 100).toFixed(2);
		// sendika ??demesi
		var sendika_ikramiye_tutar = parseFloat(aylik_gosterge * sendikaikramiye * sendikauye).toFixed(2);
				
		// ## G??DERLER ## //
		// gss primi 
		var gss_primi = parseFloat(5 * sozlesme_ucret / 100).toFixed(2);
		var em_kes_kisi = parseFloat(9 * sozlesme_ucret / 100).toFixed(2);
		var damga_vergisi = parseFloat(damga_vergisi_istisna - (((sozlesme_ucret * 1) + (ek_odeme * 1)) * 0.00759)).toFixed(2);
		
		if (damga_vergisi * 1 > 0) { 
			damga_vergisi = 0.00;
		} else { 
			damga_vergisi = damga_vergisi * -1;
		}
		var sendika_kesinti_tutar = parseFloat(((sozlesme_ucret * 1) + (ek_odeme * 1)) * 0.5 / 100).toFixed(2);
		
		var gelir_vergisi = parseFloat((gelir_vergisi_istisna * 1) - (((sozlesme_ucret *1) - (em_kes_kisi * 1) - (gss_primi *1) - (sendika_kesinti_tutar *1)) * 15 / 100));
		if (gelir_vergisi * 1 > 0) { 
			gelir_vergisi = 0.00;
		} else { 
			gelir_vergisi = gelir_vergisi * -1;
		}
				
		var artilartoplam = parseFloat((sozlesme_ucret * 1) + (sendika_ikramiye_tutar * 1) + (es_yardimi_tutar * 1) + (cocuk_yardim_tutar * 1) + (ek_odeme * 1) + (cocuk_yardim_tutar * 1)).toFixed(2);		
		var eksilertoplam = parseFloat((gelir_vergisi * 1) + (damga_vergisi * 1) + (damga_vergisi * 1) + (em_kes_kisi * 1) + (gss_primi * 1) + (sendika_kesinti_tutar * 1)).toFixed(2);

		net_maas = (artilartoplam * 1) - (eksilertoplam *1);
		var fark_maas = net_maas * (100 + (fark_artis *1)) / 100;
		var toplu_soz_maas = fark_maas * (100 + (toplu_soz_artis * 1)) / 100;
			
		$("#hesapsonuchtml").html('<div class="mb-3"><div class="row"><div class="mb-3 text-green">Gelirler</div><div class="table"><table class="table table-vcenter card-table"><thead><tr><th>??stihaklar</th><th>Oran</th><th>Tutar</th></tr></thead><tbody><tr><td>S??zle??me ??creti</td><td></td><td>' + sozlesme_ucret +'</td></tr><tr><td>Ek ??deme</td><td>' + hizmet_yili +'</td><td>' + ek_odeme +'</td></tr><tr><td>Aile Yard??m?? (E??)</td><td>2273</td><td>' + es_yardimi_tutar +'</td></tr><tr><td>??ocuk Yard??m??</td><td></td><td>' + cocuk_yardim_tutar +'</td></tr><tr><td>Toplu S??zle??me ??kramiyesi</td><td>2119</td><td>' + sendika_ikramiye_tutar +'</td></tr></tbody></table></div></div><div class="mb-3 text-red">Kesintiler</div><div class="table"><table class="table table-vcenter card-table"><thead><tr><th>Kesintiler</th><th>Oran</th><th>Tutar</th></tr></thead><tbody><tr><td>Gelir Vergisi</td><td>%15</td><td>' + gelir_vergisi.toFixed(2) + '</td></tr><tr><td>Damga Vergisi</td><td>7,59</td><td>' + damga_vergisi + '</td></tr><tr><td>Em.Kes.Kar????l?????? - Devlet</td><td>%9</td><td>' + em_kes_kisi + '</td></tr><tr><td>SGK Primi - Ki??i</td><td>%5</td><td>' + gss_primi + '</td></tr><tr><td>Sendika Kesintisi</td><td>%0.50</td><td>' + sendika_kesinti_tutar + '</td></tr></tbody></table></div><div class="mb-3 text-blue">Toplam</div><div class="table"><table class="table table-vcenter card-table"><thead><tr><th>Toplam</th><th>Tutar</th><th></th></tr></thead><tbody><tr><td>??stihaklar Toplam??</td><td></td><td>' + artilartoplam + ' ???</td></tr><tr><td>Kesintiler Toplam??</td><td></td><td>-' + eksilertoplam + ' ???</td></tr><tr><th class="text-green">Net Maa??</th><td></td><td>' + net_maas.toFixed(2) + ' ???</td></tr><tr><td class="text-indigo">%' + fark_artis + ' Enflasyon fark?? Ekli Net Maa??</td><td></td><td>' + fark_maas.toFixed(2) + ' ???</td></tr><tr><td class="text-pink">%' + fark_artis + ' Enflasyon fark?? ve %' + toplu_soz_artis + ' toplu s??zle??me ekli net maa??</td><td></td><td>' + toplu_soz_maas.toFixed(2) + ' ???</td></tr></tbody></table></div></div>');
	})

	
	$( "#emeklimaashesapla" ).click(function() {
		var aylik_gosterge = window.katsayilar[1]['aylik_katsayi'];		
		var taban_ayligi_katsayisi = window.katsayilar[1]['taban_ayligi_katsayi'];
		var son_artis = window.katsayilar[1]['enflasyon'];
		var fark_artis = window.katsayilar[2]['enflasyon'];
		var toplu_soz_artis = window.katsayilar[3]['enflasyon'];		
		var emek_esas_unvan = $('#unvan').val();
		var kadro_derece = $('#kadroderece').val();
		var emek_esas_derece = $('#emekliderece').val();
		var mezuniyet = $('#mezuniyet').val();
		var hizmet_yili = $('input[name="hizmetyili"]').val();
		var kidem_yili = $('input[name="kidemyili"]').val();
		var ikramiye_yili = $('input[name="ikramiyeyili"]').val();		
		var ilgili_derece_bilgileri = getGosterge(kadro_derece);
		var gosterge_ayligi = ilgili_derece_bilgileri['gosterge'];
		var ek_gosterge_ayligi;
		var ozel_hizmet_oran;
		var ozel_hizmet_tutar;
		var gosterge_ayligi_tutar;
		var ek_gosterge_ayligi_tutar;
		var taban_ayligi_tutar;
		var kidem_ayligi_tutar;
		var ek_odeme_tutar;
		var brut_ikramiye;
		var brut_maas;
		var net_ikramiye;
		var net_maas;
		var maas_baglama_orani;
		
		if (kidem_yili > 25) { 
			kidem_yili = 25;
		}
		
		if (emek_esas_unvan == 1) {  // M??d??r
			ek_gosterge_ayligi = ilgili_derece_bilgileri['ek_gosterge_mudur'];
		} else {  
			if (mezuniyet == 1) { 
				ek_gosterge_ayligi = ilgili_derece_bilgileri['ek_gosterge_uni'];
			} else { 
				ek_gosterge_ayligi = ilgili_derece_bilgileri['ek_gosterge_digerleri'];
			}
		}		
		// ek ??deme di??erleri toplam?? %4		
		// ??zel hizmet ayl?????? oran bulma, bulunan oran 9500 ve ayl??k katsay?? ile ??arp??lacak 
		if (ek_gosterge_ayligi >= 3600) { 
			ozel_hizmet_oran = 145;
		} else if (ek_gosterge_ayligi >= 2200) { 
			ozel_hizmet_oran = 85;
		} else { 
			ozel_hizmet_oran = 55;
		}
		
		ozel_hizmet_tutar = parseFloat(9500 * aylik_gosterge * ozel_hizmet_oran / 100).toFixed(2);		
		gosterge_ayligi_tutar = parseFloat(gosterge_ayligi * aylik_gosterge).toFixed(2);
		ek_gosterge_ayligi_tutar = parseFloat(ek_gosterge_ayligi * aylik_gosterge).toFixed(2);
		taban_ayligi_tutar = parseFloat(1000 * taban_ayligi_katsayisi).toFixed(2);
		kidem_ayligi_tutar = parseFloat(20 * kidem_yili * aylik_gosterge).toFixed(2);
		ek_odeme_tutar = parseFloat(((ozel_hizmet_tutar * 1) + (gosterge_ayligi_tutar * 1 ) + (ek_gosterge_ayligi_tutar * 1) + (taban_ayligi_tutar * 1) + (kidem_ayligi_tutar * 1)) * 4 / 100).toFixed(2);
		brut_maas = parseFloat((ozel_hizmet_tutar * 1) + (gosterge_ayligi_tutar * 1) + (ek_gosterge_ayligi_tutar * 1) + (taban_ayligi_tutar * 1) + (kidem_ayligi_tutar * 1) + (ek_odeme_tutar * 1)).toFixed(2);
		brut_ikramiye = parseFloat(ikramiye_yili * brut_maas).toFixed(2);
		net_maas = brut_maas * (50 + (hizmet_yili * 1)) / 100;
		net_ikramiye = (brut_ikramiye *1) - (ek_odeme_tutar * ikramiye_yili);
		maas_baglama_orani = (50 + (hizmet_yili * 1)) / 100;
				
		$("#hesapsonuchtml").html('<div class="table"><table class="table table-vcenter card-table"> <thead><tr> <th>??deme</th> <th>Br??t</th> <th>Net</th></tr></thead> <tbody><tr> <td>Ek ??deme</td><td class="text-muted">' + ek_odeme_tutar + '</td><td class="text-muted">' + (ek_odeme_tutar * maas_baglama_orani).toFixed(2) + '</td></tr><tr> <td>??zel Hizmet Ayl??????</td><td class="text-muted"> ' + ozel_hizmet_tutar + '</td><td class="text-muted"> ' + (ozel_hizmet_tutar * maas_baglama_orani).toFixed(2) + '</td></tr><tr> <td>G??sterge Ayl??????</td><td class="text-muted">' + gosterge_ayligi_tutar +'</td><td class="text-muted">' + (gosterge_ayligi_tutar * maas_baglama_orani).toFixed(2) + '</td></tr><tr> <td>Ek G??sterge Ayl??????</td><td class="text-muted">' + ek_gosterge_ayligi_tutar +'</td><td class="text-muted">' + (ek_gosterge_ayligi_tutar * maas_baglama_orani).toFixed(2) + '</td></tr><tr> <td>Taban Ayl??????</td><td class="text-muted">' + taban_ayligi_tutar +'</td><td class="text-muted">' + (taban_ayligi_tutar * maas_baglama_orani).toFixed(2) + '</td></tr><tr> <td>K??dem Ayl??????</td><td class="text-muted">' + kidem_ayligi_tutar +'</td><td class="text-muted">' + (kidem_ayligi_tutar * maas_baglama_orani).toFixed(2) + '</td></tr><tr> <td><b>Ayl??k Maa??</b></td><td class="text-muted">' + brut_maas +' </td><td class="text-muted text-green"><b>' + net_maas.toFixed(2) +'</b> TL</td></tr><tr><td><b>??kramiye</b></td><td class="text-muted">' + brut_ikramiye +'</td><td class="text-muted text-red"><b>' + net_ikramiye.toFixed(2) +'</b> TL</td></tr></tbody></table> </div>');
	})

	$( "#suryolhesapla" ).click(function() {
		var derece = $('#kadroderece').val();
		var unvan = $('#unvan').val();
		var fertsayisi = $('#fertsayisi').val();
		var mesafemiktar = $('input[name="mesafemiktar"]').val();
		var biletmiktar = $('input[name="biletmiktar"]').val();
		var ekbilgi = '(Al??nacak ??cret ??zerinden binde 7.59 oran??nda damga vergisi kesintisi yap??labilir.)';
		var carpan = 0;
		var hesap = 0;
		var kesintili;
		
		if (unvan == 1) { 
			carpan = 212;
		} else { 
			carpan = parseInt(derece);
		}
		
		hesap = (carpan * 20);
		hesap = hesap + ((fertsayisi +1) * biletmiktar); 
		hesap = hesap + ((mesafemiktar * carpan) / 20);	
		hesap = hesap + carpan;
		
		kesintili = hesap - (hesap * 7.59 / 1000);
		
		if (hesap > 0) { 
			$("#hesapsonuc").html("<h2>Al??nacak ??cret :<br>" + parseFloat(hesap) + " TL </h2><br>" + ekbilgi + '<br>Kesintili miktar:' + parseFloat(kesintili).toFixed(2) );	
		} else { 
			$("#hesapsonuc").html("<h1></h1>");	
		}			
	})
	

	$('input[name="posta"]').change(function() {
		var thiz = $(this);
	})
	
	
	$('input[name="olumcismanii"]').change(function() {
		
		var thiz = $(this);
		var deger = $('input[name="islahmiktar"]').val();
		var davamiktar = $('input[name="davamiktar"]').val();		
		var olumcismani = $('input[name="olumcismanii"]').prop('checked');
		var netice = deger - davamiktar;
		
		if (deger - davamiktar > 0) { 
			var sonuc = parseFloat(hesapla(netice, olumcismani)).toFixed(2);		
		} else { 
			myNoty('topRight','danger','Dava miktar?? ??slah miktar??ndan b??y??k yada e??it olamaz');
		
		}		
		
		if (sonuc > 0) { 
			$("#hesapsonuc").html("<h2>Al??nmas?? gereken har?? :<br>" + parseFloat(hesapla(netice, olumcismani)).toFixed(2) + " TL </h2>");	
		} else { 
			$("#hesapsonuc").html("<h1></h1>");	
		}		  
	})	

	$( "#gunekle" ).click(function() {		
		const dates = getDates(gunlericevir($('input[name="izin-baslama"]').val()), gunlericevir($('input[name="izin-bitis"]').val()));
		tinyMCE.activeEditor.setContent(izindates.join('<br>'));					  
	})	
	
	$( "#modal-team #gonder" ).click(function() {		
		var isim = $('#modal-team #isim').val(); //toDo
		var sc = $('#modal-team #score').text();
		var d = new Date();
		var tarih = d.setHours(0,0,0,0) / 1000;
		setCookie('isim', isim, 90);
		insertScore(tarih, isim, sc);
	})	
	
	$( "#gunhesapla" ).click(function() {
		
		const dates = getfarkDates(gunlericevir($('input[name="tarih-baslama"]').val()), gunlericevir($('input[name="tarih-bitis"]').val()));
		farkdates = dates;
		$("#hesapsonuc").html(
		"<h3>??ki tarih aras??ndaki fark : " + 	farkdates.length + "</h3>" 
		+ "<br>" + 
		"<h3  class='text-success'>??zinler d??????ld??kten sonraki fark : " + 	gunleridus() + "</h3>" 
		);
	})
	
	$( "#haberolustur" ).click(function() {
		var id = $('input[name="haberid"]').val();
		var haberbaslik = $('input[name="haberbaslik"]').val();
		var haberaciklama = $('input[name="haberaciklama"]').val();
		var haberaciklama = $('input[name="haberaciklama"]').val();
		var metin = tinymce.get("tinymce-mytextarea").getContent();
		
		$("#haberjson").text('{ "id": "' + id + '","baslik": "' + haberbaslik + '","aciklama": "' + haberaciklama + '","metin": "' + metin.replaceAll('"', "'") + '","resim": ".\/dist\/img\/logos\/adalet.jpg"},');
		navigator.clipboard.writeText($("#haberjson").text());
	})
	
	$( "#guncelle" ).click(function() {
		var editoricerigi = tinyMCE.activeEditor.getContent();
		editoricerigi = editoricerigi.replaceAll('<p>', '');
		editoricerigi = editoricerigi.replaceAll('</p>', '');
		editoricerigi = editoricerigi.replaceAll('\n', ',');
		editoricerigi = editoricerigi.replaceAll('&nbsp;', ',');						
		izindates = editoricerigi.split(",");								
		myNoty('topRight','success','Liste g??ncellendi.');
	})	
	
	
	$('#carousel-captions').carousel({
	  interval: 2000
	})	
	
	
	var owl = $('#althaber');
		owl.owlCarousel({
			items:4,
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true
	});
	
	$('#pagination-demo').twbsPagination({
        totalPages: Math.ceil(window.haberlerArr.length / 5),
        visiblePages: goruntulenecekSayfa,
		first: "ilk",
		prev: "??nceki",
		next: "sonraki",
		last: "son",
		loop: true,
        onPageClick: function (event, page) {
            //$('#page-content').text('Page ' + page);
			console.log(paginate(window.haberlerArr, 5, page));
        }
    });

});