$(function(){

	function photozou(t){
	    var m = t.url.match(/http:\/\/photozou\.jp\/photo\/show\/\d+\/(\d+)/);
	    if(m){
		return {
		    thumb:'http://photozou.jp/p/img/' + m[1],
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function twitpic(t){
	    var m = t.url.match(/http:\/\/twitpic\.com\/([0-9a-zA-Z]+)/);
	    if(m){
		return {
		    thumb:'http://twitpic.com/show/large/' + m[1],
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function imgly(t){
	    var m = t.url.match(/http:\/\/img\.ly\/([0-9a-zA-Z]+)/);
	    if(m){
		return {
		    thumb:'http://img.ly/show/large/' + m[1],
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function insta(t){
	    var m = t.url.match(/http:\/\/(instagram\.com|instagr\.am)\/p\/([\-_0-9a-zA-Z]+)/);
	    if(m){
		return {
		    thumb:'http://instagr.am/p/' + m[2] + '/media/?size=t',
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function lockerz(t){
	    var m = t.url.match(/http:\/\/(|pics\.)lockerz\.com\/s\/([0-9a-zA-Z]+)/);
	    if(m){
		return {
		    thumb:'http://api.plixi.com/api/tpapi.svc/imagefromurl?url=' + t.url,
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}


	function yfrog(t){
	    var m = t.url.match(/http:\/\/(|twitter\.)yfrog\.com\/([0-9a-zA-Z]+)/);
	    if(m){
		return {
		    thumb:'http://yfrog.com/' + m[2] + ':iphone',
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}
	
	function twipple(t){
	    var m = t.url.match(/http:\/\/p\.twipple\.jp\/([0-9a-zA-Z]+)/);
	    if(m){
		return {
		    thumb:'http://p.twipple.jp/show/large/' + m[1],
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function twitphoto(t){
	    var m = t.url.match(/http:\/\/p\.twimg\.com\/([0-9a-zA-Z\-_]+)\.(jpg|png)/);
	    if(m){
		return {
		    thumb:t.url + ':thumb',
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function youtube(t){
	    var m = t.url.match(/http:\/\/www\.youtube\.com\/watch\?v=([0-9a-zA-Z\-_]+)/);
	    if(m){
		return {
		    thumb:'http://img.youtube.com/vi/' + m[1] + '/default.jpg',
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function niconico(t){
	    var m = t.url.match(/http:\/\/www\.nicovideo\.jp\/watch\/sm([0-9]+)/);
	    if(m){
		return {
		    thumb:'http://tn-skr1.smilevideo.jp/smile?i=' + m[1] + '',
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function rawimg(t){
	    var m = t.url.match(/http:\/\/images\.plurk\.com\/([0-9a-zA-Z\-_]+)\.(jpg|png)/);
	    if(m){
		return {
		    thumb:t.url,
			title:t.title,
			url:t.url
			};
	    }
	    return null;
	}

	function amp_decode(s){
	    return s.replace(/&amp;/g,'&');
	}
	function url_elm(url,title){
	    return $('<div>')
		.append($('<span>').addClass('iconbox').append($("<a>").attr('target','_brank').attr('href',url).append($('<img>').css('border','none').attr('src','http://favicon.hatena.ne.jp/?url='+encodeURIComponent(url)))))
		.append($('<span>').append($('<a>').attr('target','_brank').attr('href',url).text(amp_decode(title))))
		.append($('<span>').append($("<a>").attr('target','_brank').attr('href','http://b.hatena.ne.jp/entry/' + url).append($('<img>').css('border','none').attr('src','http://b.hatena.ne.jp/entry/image/'+url))))
		;
	}
	
	function ptweets(url){
	    return $('<div>').append($('<iframe>').attr('src','').attr('src','http://platform.twitter.com/widgets/tweet_button.html?text='+encodeURIComponent('  #maiji')+'&url='+encodeURIComponent(url)).attr('scrolling','no').attr('frameborder','0').css('border','none').css('overflow','hidden').css('width','120px').css('height','21px').attr('allowTransparency','true'));
	}
	function stweets(url){
	    //    return $('<div><iframe allowtransparency="true" frameborder="0" scrolling="no" src="http://platform.twitter.com/widgets/tweet_button.html?url='+encodeURIComponent(url)+'" style="width:130px; height:21px;"></iframe></div>');
	    return $('<div>').append($('<iframe>').attr('src','').attr('src','http://platform.twitter.com/widgets/tweet_button.html?text='+encodeURIComponent(' via [ #maiji | '+document.location.href+' ]')+'&url='+encodeURIComponent(url)).attr('scrolling','no').attr('frameborder','0').css('border','none').css('overflow','hidden').css('width','120px').css('height','21px').attr('allowTransparency','true'));
	}

	function sfacebook(url){
	    return $('<div>').append($('<iframe>').attr('src','').attr('src','http://www.facebook.com/plugins/like.php?href='+encodeURIComponent(url)+'&layout=button_count&show_faces=true&width=120&action=like&colorscheme=light&height=21').attr('scrolling','no').attr('frameborder','0').css('border','none').css('overflow','hidden').css('width','120px').css('height','21px').attr('allowTransparency','true'));

	}


	function convert(t){
	    var e;

	    if(t.media.length > 0){
		return {
		    thumb:t.media[0],
			title:t.title,
			url:t.url
			};
		return $('<div>')
		    .append($('<div>').append(url_elm(t.url,t.title)))
		    //.append($('<div>').text(t.title))
		    .append($('<img>').attr('src',t.media[0] + ':thumb'))
		    ;
	    }

	    e = photozou(t);
	    if(e)return e;

	    e = twitpic(t);
	    if(e)return e;

	    e = imgly(t);
	    if(e)return e;

	    e = insta(t);
	    if(e)return e;

	    e = lockerz(t);
	    if(e)return e;

	    e = yfrog(t);
	    if(e)return e;

	    e = twipple(t);
	    if(e)return e;

	    e = twitphoto(t);
	    if(e)return e;

	    e = youtube(t);
	    if(e)return e;

	    e = niconico(t);
	    if(e)return e;

	    e = rawimg(t);
	    if(e)return e;

	}
	
	// hash解読

	var today  = new Date();
	var target = [""+today.getFullYear(),("0"+(1+today.getMonth())).slice(-2),("0"+today.getDate()).slice(-2),("0"+today.getHours()).slice(-2)];
	function reloadHash(){
	    var hash = document.location.hash.replace('#','');
	    if(hash){
		hash = hash.split('-');
		if(hash.length == 4){
		    target = hash;

		}
	    }
	}
	reloadHash();
	function writeHash(){
	    document.location.hash = target.join('-');
	}
	
	//console.log(target);
	//console.log("target:",target);

	function addHour(n){
	    var d = new Date(parseInt(target[0], 10), parseInt(target[1], 10)-1, parseInt(target[2], 10), parseInt(target[3], 10));
	    var time = d.getTime();
	    var prevtime = time + 1000 * 60 * 60 * n;
	    var prevd = new Date();
	    prevd.setTime(prevtime);
	    var tmp = [];
	    tmp[0] = prevd.getFullYear();
	    tmp[1] = ('0'+(prevd.getMonth() + 1)).slice(-2);
	    tmp[2] = ('0'+(prevd.getDate())).slice(-2);
	    tmp[3] = ('0'+(prevd.getHours())).slice(-2);

	    return tmp;
	}
	/*
	// 時刻表部分
	function mkTables(){
	    var table = $('<table class="timelink">');
	    var tbody = $('<tbody>').appendTo(table);
	    var tr = $('<tr>').appendTo(tbody);
	    for(var i=0; i <= 25; i++){
		if(i==0){
		    tbody.append($('<td>').append(
						  $('<a>')
						  .attr('href','#' + addDay(-1).join('-'))
						  .bind('click' ,function(){
							  movePrevDay();
							  //reloadHash(createTodayString());
							  task = [];
							  $('#contents').empty();
							  mkTables().appendTo($('#contents'));
							  for(var i = 0; i <= 23; i++)task.push(i);
							  get(23);
						      })
						  .text("←"+addDay(-1).join('-'))));
		}else if(i==25){
		    tbody.append($('<td>').append(
						  $('<a>')
						  .attr('href','#' + addDay(1).join('-'))
						  .bind('click',function(){
							  moveNextDay();
							  //reloadHash(createTodayString());
							  task = [];
							  $('#contents').empty();
							    mkTables().appendTo($('#contents'));
							    for(var i = 0; i <= 23; i++)task.push(i);
							  get(23);
							  })
						  .text(addDay(1).join('-') + "→")));
		}else{
		    tbody.append($('<td>').append($('<a>')
						  .attr('href','#'+createTodayString()).text((i-1)+'時')
						  .bind('click',function(i){ return function(){
							      var header = $('#h' + (i-1));
							      if(header){
								  var top = header.offset().top - 30; //なんとなく
								  var speed = 300;
								  $($.browser.safari ? 'body' : 'html').animate({scrollTop:top}, speed, 'swing');
							      }
							  }}(i)
						      )));
		    }
	    }
	    return table;
	}
	//mkTables().appendTo($('#tables'));
	*/

	var popup = $('<div>').addClass('popup').css({
		//position:"absolute"
	    });
	//popup.hide();
	
	var popup_base = $('<div>')
	    .addClass('popup-base')
	    .css({
		    'position':'absolute',
		    'left':'0px',
		    'top':'0px',
		    'width':'100%'/*,
		    'height':'800px',*/
		    })
	    .append(popup);
	popup_base.css('border','solid');
	popup_base.hide();
	popup_base.appendTo(document.body);
	popup_base.bind('click',function(){
		popup_base.hide('fast');
		$('#contents').show();
		});
	popup.bind('click',function(e){

		//e.preventDefault();
		//e.stopPropagation();
		});
	
	var base = $('<div>').css('width','100%').css('height','2000px').css('overflow-x','hidden');
	var inner = $('<div>').css('width','300%').css('position','relative').css('left','-100%');
	var base_left = $('<div>').css('width','33%').css('position','absolute').css('left','0%');
	var base_center = $('<div>').css('width','33%').css('position','absolute').css('left','33%');
	var base_right = $('<div>').css('width','33%').css('position','absolute').css('left','66%');
	inner.append(base_left);
	inner.append(base_center);
	inner.append(base_right);
	base.append(inner);
	$('#contents').append(base);

	//base_center.append($($('.paper')[0]).clone(true));
	//base_left.append($($('.paper')[0]).clone(true));
	//base_right.append($($('.paper')[0]).clone(true));
	
	var wait_flg = false;
	function rightShift(){
	    if(wait_flg==true)return;
	    wait_flg = true;
	    var c = base_center.children();
	    var l = base_left.children();
	    var r = base_right.children();
	    var n;
	    base_right.empty();
	    base_right.append(c);
	    inner.css('left','-200%');
	    base_center.append(l);
	    target = addHour(-1);
	    writeHash();
	    get(addHour(-1),function(c){c.appendTo(base_left);});


	    inner.animate({left:'+=100%'}, 'slow','swing',function(){
		    wait_flg = false;
		});
	}

	function leftShift(){
	    if(wait_flg==true)return;
	    wait_flg = true;
	    var c = base_center.children();
	    var l = base_left.children();
	    var r = base_right.children();
	    var n;
	    base_left.empty();
	    base_left.append(c);
	    inner.css('left','0%');
	    if(r.length==0){
		get(addHour(1),function(c){c.appendTo(base_center);});
	    }else{
		base_center.append(r);
	    }
	    
	    target = addHour(1);
	    writeHash();
	    get(addHour(1),function(c){c.appendTo(base_right);});


	    inner.animate({left:'-=100%'}, 'slow','swing',function(){
		    wait_flg = false;
		});
	}

	$('#leftbutton').bind('click',function(){
		rightShift();
	    });
	$('#rightbutton').bind('click',function(){
		leftShift();
	    });
	/*
	setTimeout(function(){
		rightShift();
	    },2000);
	*/
	//return;
	
	function text_shorter(s){
	    var o = s;
	    o = o.replace(' on Twitpic','');
	    o = o.replace(' ‐ ニコニコ動画(原宿)','');
	    o = o.replace(' - 写真共有サイト「フォト蔵」','');
	    o = o.replace('ついっぷる フォト','');
	    o = o.replace(': ついっぷるフォト','');
	    o = o.replace('Twitpic - Share photos and videos on Twitter','');
	    return o;
	}
	
	//get(createTodayString(target[3]))
	var cache = {};
	function get(target,f){
	    cache = {};
	    $.ajax({
		    type:'GET',
			url:'./data2/' + target.join('-') + '.json',
			dataType:'json',
			error:function(o){
			// ERROR
			var d = $('<div>').addClass('piece');
			$('<h1>').addClass('headding')
			    .append($('<table>').addClass('full')
				    .append($('<tbody>')
					    .append($('<tr>')
						    .append($('<td>').addClass('aleft')
							    .text(target[0] + '年' + target[1] + '月' +target[2] + '日'))
						    .append($('<td>').addClass('acenter').addClass('plogo')
							    .append($('<a>').attr('href','maiji.html').text("毎時新聞"))
							    )
						    .append($('<td>').addClass('aright')
							    .text(target[3]+"時"))
						    )
					    )
				    )
			    .appendTo(d);
			d.append($('<div>').text('まだ発刊されていません'));
			f(d);
		    },
			success:function(o){
			//console.log("success" + hour)
			var base = $('<div class="piece">');
			try{
			    o = JSON.parse(o);
			}catch(e){
			}
			var urls = o.contents.urls;
			var oads = o.amzs;
                        var trtest = o.trends[0];
                        if(trtest==undefined)o.trends = [{trends:[]}];
			var trends = o.trends[0].trends;
			
			$('<h1>').addClass('headding')
			    .append($('<table>').addClass('full')
				    .append($('<tbody>')
					    .append($('<tr>')
						    .append($('<td>').addClass('aleft')
							    .text(target[0] + '年' + target[1] + '月' +target[2] + '日'))
						    .append($('<td>').addClass('acenter').addClass('plogo')
							    .append($('<a>').attr('href','maiji.html').text("毎時新聞"))
							    )
						    .append($('<td>').addClass('aright')
							    .text(target[3]+"時"))
						    )
					    )
				    )
				    .appendTo(base);
			//mkTables().appendTo(base);
			
			var etrends = $('<div class="trends">');
			for(var i = 0; i < trends.length; i++){
			    etrends.append($('<div class="trend">')
					   .append($('<a>').attr('href','https://twitter.com/search/' + encodeURIComponent(trends[i].name)).attr('target','_blank')
						   .text(trends[i].name)))
			}
			$('<br class="clbr">').appendTo(etrends);
			etrends.appendTo(base);

			
			var cont = $('<div class="left imgs">');
			var ads = $('<div class="left ads">');
			var rcont = $('<div class="right urls">');
			var urlcount = 0;
			var imgcount = 0;
			//var preview;
			//cont.append(preview = $('<div class="preview">'));
			for(var i = 0 ;i < oads.length; i++){
			    if(oads[i].length >= 1){
				for(var j = 0; j < oads[i].length; j++){
				    if(!oads[i][j].ImageURL)continue;
				    $('<div>')
					.addClass('lfloat')
					.css({'position':'relative'})
					.addClass('adthumb-outer')
					.append(
							       $('<img class="adthumb">')
							       .attr('src',oads[i][j].ImageURL)
							       .css('height','120px')
							       .css('width','auto')
						)
					.append(overlay = $('<div>').css({
						position:'absolute',
						    'z-index':'100',
						    'background-color':'rgba(0,0,0,0.6)',
						    color:'white',
							bottom:'5px',
						    width:'100%',
						//'font-size':'xx-small',
						'word-break':'break-all',
						'max-height':'3em',
						'overflow':'hidden'
						    }).text(text_shorter(oads[i][j].Title)))
					.bind('mouseover',function(d){
						return function(){
						    d.hide();
						}
					    }(overlay))
					.bind('mouseout',function(d){
						return function(){
						    d.show();
						}
					    }(overlay))
					
					.bind('click',function(d,u){
					    return function(e){
						popup.css({
							top:/*($(window).height()/2)*/0+"px",
							    left:(100)+"px"
							    });
						popup_base.css('min-height',$(document.body).height());
						popup_base.show('fast');
						popup.empty();
						popup.append(
							     $('<h1>').addClass('border').bind('click',function(){
								     popup_base.hide('fast');
								 })
							     );
						popup.append(
							     $('<table>').append($('<tr>').append(
												  $('<td>')
												  .append(
													  $('<a>').attr({'href':d.URL,'target':'_blank'}).append(
																				 $('<img>').css('height','200px').css('width','auto').attr('src',d.ImageURL)
																				 )
													  )
												  )
										 .append($('<td>')
											 .append($('<div>').text(d.Title))
											 .append(
												 stweets(d.URL)
												 )
											 .append(
												 sfacebook(d.URL)
												 )
											 )
										 
										 )
							     )
						    };}(oads[i][j])
						/*
						       .attr('target','_blank')
						       .attr('href',oads[i][j].URL).append(
											   $('<img class="adthumb">')
											   .attr('src',oads[i][j].ImageURL)
											   .css('height','120px')
											   .css('width','auto')
											   )
						*/
					).appendTo(ads);
				    break;
				}
			    }
			}
			// color terror!
			var ngtwitpic = "http://twitpic.com/9wxudthttp://twitpic.com/9wxudkhttp://twitpic.com/9wxudahttp://twitpic.com/9wxucxhttp://twitpic.com/9wxucnhttp://twitpic.com/9wxucmhttp://twitpic.com/9wxubzhttp://twitpic.com/9wxtixhttp://twitpic.com/9wxtezhttp://twitpic.com/9wxtenhttp://twitpic.com/9wxtekhttp://twitpic.com/9wxtedhttp://twitpic.com/9wxtedhttp://twitpic.com/9wxte1http://twitpic.com/9wxtdvhttp://twitpic.com/9wxt62http://twitpic.com/9wxt5vhttp://twitpic.com/9wxt5jhttp://twitpic.com/9wxt50http://twitpic.com/9wxt4nhttp://twitpic.com/9wxt48http://twitpic.com/9wxsz7http://twitpic.com/9wxsyyhttp://twitpic.com/9wxsyqhttp://twitpic.com/9wxsy7http://twitpic.com/9wxsxjhttp://twitpic.com/9wxsxahttp://twitpic.com/9wxsw2http://twitpic.com/9wxsvuhttp://twitpic.com/9wxsvhhttp://twitpic.com/9wxsn1http://twitpic.com/9wxsm9http://twitpic.com/9wxslrhttp://twitpic.com/9wxsajhttp://twitpic.com/9wxsachttp://twitpic.com/9wxsa4http://twitpic.com/9wxs9thttp://twitpic.com/9wxs9ohttp://twitpic.com/9wxs9h";
			for(var i = 0 ;i < urls.length; i++){
			    var d = convert(urls[i]);
			    //console.log(d);
			    if(d==null){
				//url
				//console.log(urls[i]);
				if(urlcount > 15)continue;

				if(cache[urls[i].url] && urlcount > 3){ // 5 over double except
				    continue;
				}
				if(
				   urls[i].url.indexOf('shindanmaker.com') == -1 &&
				   urls[i].url.indexOf('facebook.com') == -1 &&
				   urls[i].url.indexOf('info-zero.jp') == -1 &&
				   urls[i].url.indexOf('utun.jp') == -1 &&
				   urls[i].url.indexOf('twitcasting.tv') == -1 &&
				   urls[i].url.indexOf('tweepie.jp') == -1 &&
				   urls[i].url.indexOf('sumaho-chance.jp') == -1 &&
				   urls[i].url.indexOf('www.intel.com') == -1 &&
				   urls[i].url.indexOf('21.xmbs.jp') == -1 &&
				   urls[i].url.indexOf('fortune.allofu2.com') == -1 &&
				   urls[i].url.indexOf('www.chanchan-ko.com') == -1 &&
				   urls[i].url.indexOf('http://itunes.apple.com') == -1 &&
				   urls[i].url.indexOf('http://twtmanager.com') == -1 &&
				   urls[i].url.indexOf('http://200nippon.blog.so-net.ne.jp') == -1 &&
				   urls[i].url.indexOf('digital-navi.jp') == -1 &&
				   urls[i].url.indexOf('www.rakuten.co.jp') == -1 &&
				   urls[i].url.indexOf('www.cityheaven.net') == -1 &&
				   urls[i].url.indexOf('minhos.jp') == -1 &&
				   urls[i].url.indexOf('blog.so-net.ne.jp') == -1 &&
				   urls[i].url.indexOf('carview.co.jp') == -1 &&
				   urls[i].url.indexOf('t.co') == -1
				   ){
				    cache[urls[i].url] = true;
				    url_elm(urls[i].url, urls[i].title).appendTo(rcont);
				    urlcount ++;
				}
			    }else{
				// image
				if(imgcount > 15)continue;

				if(cache[urls[i].url] && imgcount > 5){ // 5 over double except
				    continue;
				}
				if(urls[i].title.search(/rt|RT/)!=-1 && urls[i].title.indexOf('人')!=-1 || // ウザいのを消す ほかも消える
				   ngtwitpic.indexOf(urls[i].url) != -1)
				    {
					//console.log('skip::' + urls[i].title);
					continue;
				    }
				imgcount ++;
				cache[urls[i].url] = true;
				var overlay;
				$('<div>')
				    .addClass('lfloat')
				    .addClass('thumb-outer')
				    .css({'position':'relative'})
				    .append($('<div>')

				    .append(
					    $('<img>').addClass('thumb').css('height',(imgcount == 1)?'220px':'100px').css('width','auto').attr('src',d.thumb)
					    )
					    .append(overlay = $('<div>').css({
							position:'absolute',
							'z-index':'100',
						    'background-color':'rgba(0,0,0,0.4)',
							color:'white',
							bottom:'5px',
							width:'100%',
							//'font-size':'xx-small',
							'word-break':'break-all',
							'max-height':'3em',
							'overflow':'hidden'
						    }).text(text_shorter(d.title))
						))
				    .bind('mouseover',function(d){
					    return function(){
						d.hide();
					    }
					}(overlay))
				    .bind('mouseout',function(d){
					    return function(){
						d.show();
					    }
					}(overlay))
				    .bind('click',function(d,u){
					    return function(e){
						popup.css({
							top:/*(150)*/0+"px",
							    left:(100)+"px"
							    });
						popup_base.css('min-height',$(document.body).height());
						popup_base.show('fast');
						$('#contents').hide();
						popup.empty();
						/*
						popup.append(
							     $('<h1>').addClass('border').bind('click',function(){
								     popup_base.hide('fast');
								     $('#contents').show();
								 })
							     );
						*/
						var twits;
						popup.append(
							     $('<table>').append($('<tr>').append(
												  $('<td>')
												  .append(
													  $('<a>').attr({'href':d.url,'target':'_blank'}).append(
																				 $('<img>').css('height','200px').css('width','auto').attr('src',d.thumb)
																				 )
													  )
												  )
										 .append($('<td>')
											 .append($('<div>').text(u.title))
											 .append(
												 stweets(d.url)
												 )
											 .append(
												 sfacebook(d.url)
												 )
											 )
										 
										 )
							     )
						    .append(
							    twits = $('<div>')
							    );

						$.getJSON('http://search.twitter.com/search.json?' + 'q=' + encodeURIComponent(d.url) + '&rpp=20&result_type=mixed&callback=?',function(d){
							//console.log(d);
							var list = d.results;
							for(var i=0; i<list.length; i++){
							    $('<div>').text(list[i].from_user+'::'+list[i].text).appendTo(twits);
							}
						    });


					    }}(d,urls[i]))
				    .appendTo(cont);
			    }
			}
			$(base).append($('<table>').append($('<tr>')
								  .append($('<td class="ltd">')
									  .append(cont
										  .append($('<br>').addClass('clbr'))
										  .append(ads))
									  //.append(ads)
									  )
								  .append($('<td class="rtd">').append(rcont)))
					      );
			$('<hr>').addClass('piece-footer').appendTo(base);
			
			f(base);
			//base.appendTo(base_center);
			//base.appendTo(base_left);
			//base.appendTo(base_right);
		    }
		});
	}

	//for(var i = 0; i <= 23; i++)task.push(i);
	get(target, function(c){c.appendTo(base_center)});
	var prev = addHour(-1);
	get(prev, function(c){c.appendTo(base_left)});

	var descflg = false;
	$('#sdesc').css('display','none');
	$('#descbtn').click(function(){
		if(descflg == false){
		    $('#sdesc').fadeIn();
		    descflg = true;
		}else{
		    $('#sdesc').fadeOut();
		    descflg = false;
		}
	    });
	$('.ilink').mouseup(function(){
		var s = $(this).attr('rel');
		var tmp = s.split('-');
		target = tmp;

		$('#contents').empty();
		task = [];
		mkTables().appendTo($('#contents'));
		for(var i = 0; i <= 23; i++)task.push(i);
		get(23);

	    });
    });
