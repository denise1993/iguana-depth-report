$(function(){


  let coverVideo = $('#cover__video')[0];  
  let WindowWidth = $(window).width();

  if (WindowWidth < 1200) {
    coverVideo.src = 'video/video1-mobile.mp4';
  } else {      
    coverVideo.src = 'video/video1-desktop.mp4';
  }

  let controllerCover = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave', //觸發位置(定位依視窗) onLeave onCenter onEnter
      duration: "50%" //時間(依視窗比例)
    }
  });

  let slides = document.querySelectorAll(".parallax");
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {
        pushFollowers: false //前一個吸住 置後不動
        //pushFollowers: true //前一個吸住 往上帶					
      })
      // .addIndicators()
      .addTo(controllerCover);
  }


  let controllerMap1 = new ScrollMagic.Controller();
  // let mapContentH = $('.map1').height() - 100;
  let mapContentH = $('.map1').height() * 1.3;
  // let mapContentH = $('.map1').height() * .8;
  let duration = WindowWidth > 768 ? (mapContentH / 5) : (mapContentH / 4);
  for (var i=0; i<4; i++) {
    new ScrollMagic.Scene({
        triggerElement: ".map1",
        triggerHook: 0.06,
        duration: duration,
        offset: i*(mapContentH / 4) 
      })
      .setPin(".map1")
      .setClassToggle(".map1", `show-map${i}`)
      // .addIndicators()
      .addTo(controllerMap1);
  }


  // 視差-圖表類 ========================
	function chart1() {
    Chart.defaults.global.elements.line.fill = false;
    let ctx = document.querySelector('#chart1').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line', //圖表種類
      data: {
        labels: ['102年', '103年', '104年', '105年', '106年', '107年', '108年', '109年'], //X軸
        datasets: [
          {
            label: '屏東縣', //Y軸
            data: [26, 21, 47, 31, 1068, 1082, 4239, 8420], //Y軸 資料數字
            backgroundColor: '#454C5E',
            borderColor: '#454C5E',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          },
          {
            label: '高雄市', //Y軸
            data: [80, 77, 368, 244, 262, 295, 1046, 3047], //Y軸 資料數字
            backgroundColor: '#B29980',
            borderColor: '#B29980',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          },
          {
            label: '台南市', //Y軸
            data: [0, 0, 71, 121, 142, 403, 327, 281], //Y軸 資料數字
            backgroundColor: '#664B20',
            borderColor: '#664B20',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          },
          {
            label: '嘉義縣', //Y軸
            data: [0, 9, 158, 131, 893, 348, 506, 1549], //Y軸 資料數字
            backgroundColor: '#5D8D9D',
            borderColor: '#5D8D9D',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          },
          {
            label: '彰化縣', //Y軸
            data: [0, 0, 0, 0, 0, 27, 73, 426], //Y軸 資料數字
            backgroundColor: '#D0644D',
            borderColor: '#D0644D',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          },
          {
            label: '台中市', //Y軸
            data: [0, 0, 0, 0, 0, 28, 36, 41], //Y軸 資料數字
            backgroundColor: '#E47190',
            borderColor: '#E47190',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          },
          {
            label: '台東縣', //Y軸
            data: [0, 0, 0, 0, 0, 0, 0, 100], //Y軸 資料數字
            backgroundColor: '#E98E3A',
            borderColor: '#E98E3A',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          },
          {
            label: '其他', //Y軸
            data: [0, 0, 0, 0, 0, 0, 0, 50], //Y軸 資料數字
            backgroundColor: '#7946E2',
            borderColor: '#7946E2',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          },
          {
            label: '屏科大', //Y軸
            data: [0, 0, 0, 0, 0, 1474, 1841, 1567], //Y軸 資料數字
            backgroundColor: '#11A288',
            borderColor: '#11A288',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          }
        ],
      },
      options: {
        maintainAspectRatio: false, //寬RWD 高度固定
        elements: {
          line: {
            tension: 0, //貝茲曲線
          },
					// point:{ 
					// 	radius: 0
					// }
        },
        legend: {
          //資料對應說明
          position: 'bottom', //定位 'left'   'right'   'top'  'bottom'
          labels: {
            //說明標籤
            boxWidth: 20,
            padding: 20,
            // usePointStyle: true,
          },
        },
        scales: {
          xAxes: [
            {
              // scaleLabel: {
              // 	display: true,
              // 	labelString: "單位：（萬）人",
              // },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true, //從0開始
                min: 0, //最小
                stepSize: 1000, //一階5
                // callback: function (value, index, values) {
                //   return value + '萬';
                // },
              },
              gridLines: {
                // drawBorder: false, //圖表框線
                color: '#ADADAD', // 格線顏色,
                borderDash: [5, 5],
                zeroLineColor: '#ADADAD',
                // zeroLineBorderDash: [5, 5],
              },
            },
          ],
        },
        tooltips: {
          enabled: true, //啟用
          backgroundColor: 'rgba(255, 255, 255, 1)',
          titleFontSize: 0,
          titleMarginBottom: 0,
					titleFontFamily: '"微軟正黑體", Arial, Helvetica, sans-serif, "新細明體"',
					bodyFontFamily: '"微軟正黑體", Arial, Helvetica, sans-serif, "新細明體"',
          bodyFontSize: 14,
          bodyFontColor: '#000',
          xPadding: 10, //對話框 X軸 邊距
          yPadding: 10, //對話框 Y軸 邊距
          caretSize: 10, //箭頭 大小
          displayColors: false,
					mode: 'nearest',
          callbacks: {
            label: function (tooltipItems, data) {
              // return `${data.datasets[tooltipItems.datasetIndex].label}${tooltipItems.xLabel}：${tooltipItems.yLabel}萬人`

              return [
                data.datasets[tooltipItems.datasetIndex].label,
                tooltipItems.xLabel,
                tooltipItems.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '隻',
              ];
            },
          },

          /*
						callback: function (value, index, values) {
								return "第" + value + "週";
							}
						*/
        },
      },
    });
  }
	// chart1();

	function chart2() {
    Chart.defaults.global.elements.line.fill = false;
    let ctx = document.querySelector('#chart2').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line', //圖表種類
      data: {
        labels: ['108年', '109年', '110年'], //X軸
        datasets: [
          {
            // label: '屏東縣', //Y軸
            data: [825, 13515, 16791], //Y軸 資料數字
            backgroundColor: '#454C5E',
            borderColor: '#454C5E',
            pointRadius: 8,
            pointHoverRadius: 8, //hover交錯點直徑大小
          }
        ],
      },
      options: {
        maintainAspectRatio: false, //寬RWD 高度固定
        elements: {
          line: {
            tension: 0, //貝茲曲線
          },
					// point:{ 
					// 	radius: 0
					// }
        },
        legend: {
					display: false,
          //資料對應說明
          position: 'bottom', //定位 'left'   'right'   'top'  'bottom'
          labels: {
            //說明標籤
            boxWidth: 20,
            padding: 20,
            // usePointStyle: true,
          },
        },
        scales: {
          xAxes: [
            {
              // scaleLabel: {
              // 	display: true,
              // 	labelString: "單位：（萬）人",
              // },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true, //從0開始
                min: 0, //最小
                stepSize: 2000, //一階
                // callback: function (value, index, values) {
                //   return value + '萬';
                // },
              },
              gridLines: {
                // drawBorder: false, //圖表框線
                color: '#ADADAD', // 格線顏色,
                borderDash: [5, 5],
                zeroLineColor: '#ADADAD',
                // zeroLineBorderDash: [5, 5],
              },
            },
          ],
        },
        tooltips: {
          enabled: true, //啟用
          backgroundColor: 'rgba(255, 255, 255, 1)',
          titleFontSize: 0,
          titleMarginBottom: 0,
					titleFontFamily: '"微軟正黑體", Arial, Helvetica, sans-serif, "新細明體"',
					bodyFontFamily: '"微軟正黑體", Arial, Helvetica, sans-serif, "新細明體"',
          bodyFontSize: 14,
          bodyFontColor: '#000',
          xPadding: 10, //對話框 X軸 邊距
          yPadding: 10, //對話框 Y軸 邊距
          caretSize: 10, //箭頭 大小
          displayColors: false,
					mode: 'nearest',
          callbacks: {
            label: function (tooltipItems, data) {
              // return `${data.datasets[tooltipItems.datasetIndex].label}${tooltipItems.xLabel}：${tooltipItems.yLabel}萬人`

              return [
                // data.datasets[tooltipItems.datasetIndex].label,
                tooltipItems.xLabel,
                tooltipItems.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '隻',
              ];
            },
          },

          /*
						callback: function (value, index, values) {
								return "第" + value + "週";
							}
						*/
        },
      },
    });
  }
	// chart2();
  let controllerChart = new ScrollMagic.Controller();	
  $('.chart').each(function(index, el){		
    let activeChart = $(this).find('canvas').attr('id');    
    let ourScene = new ScrollMagic.Scene({
      triggerElement: this,
      duration: '1500px', 
      triggerHook: 0.5
    })
      .setClassToggle(this, 'active')
      .on('start', function(){
        switch (true) {
          case activeChart === 'chart1':
            chart1()
            break;
          case activeChart === 'chart2':
            chart2()
            break;
          default:
            break;
        }
      })
      .addTo(controllerChart);
  });


  /*
  btns show
  scroll-down fadeOut
  */ 
  $(window).on('scroll', function(){
    $('.scroll-down').css("visibility","hidden");
    let winScrollY = $(this).scrollTop();
    let winH = $(window). height() - 200;
    if(winH < winScrollY){
      $('.btns').addClass('btns-show');
    }else{
      $('.btns').removeClass('btns-show');
    }
  });

  $('.btns__gototop').on('click', function(){
    let $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({scrollTop: 0}, 150);
		return false;
  });

  $('.btn__side--open').on('click', function(){
    $('.side').fadeIn();
  });

  $('.btn__side--close').on('click', function(){
    $('.side').fadeOut();
  });

  $('.nav__link').on('click', function(){
    $('.side').fadeOut();
  });


  $('.list-2__item').on('click', function(){
    $(this).siblings().removeClass('show-info');
    $(this).toggleClass('show-info');
  });


	// map2 圖解綠鬣蜥 =================
	let isIconShow = true;
	let isInfoShow = true;
	// 提示按鈕-點擊看各部位介紹
	$(".map2__icon").on('click', function(){
		$(this).fadeOut(1000);
		isIconShow = false;
	});

	//監聽下載圖片 ====================
	function preloadImage(argSrc, callback){
		let img = new Image();
		img.src = argSrc;
		img.onload = function(){
			if(callback){
				callback();
			}			
		}
	}
	// 點擊看各部位介紹
	$(".map2__point").on('click', function(){
    console.log('click-----');
    // 滾到視窗頂
    let offsetTop = $('.map2').offset().top;    
    let $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({scrollTop: offsetTop - 80}, 100);

    // 顯示各部位介紹
		let index = $(this).index();
		$(".point-line").hide();
		let addPoint = $(".map2__point").width() / 2;
		if( isIconShow === true ){
			$(".map2__icon").fadeOut();
		}
		if( isInfoShow === false ){
			$('.map2__info').fadeIn();
		}		
		
		$(".map2__point").eq(index).addClass('map2__point--current').siblings().removeClass('map2__point--current');
		$('.map2__img').attr('src', `images/pic-${index}.svg`);
		let locationHref = location.href.split('index.htm')[0];
		preloadImage(`${locationHref}images/pic-${index}.svg`, function(){
      let pointLeft = Math.round($(".map2__point").eq(index).position().left);      
			let pointTop = Math.round($(".map2__point").eq(index).position().top);      
			let infoLeft = Math.round($('.map2__info').position().left);
      let infoTop = Math.round($('.map2__info').position().top);
			
			$(".map2__point-line line")[0].setAttribute("x1", pointLeft + addPoint);
			$(".map2__point-line line")[0].setAttribute("y1", pointTop + addPoint);
			$(".map2__point-line line")[0].setAttribute("x2", infoLeft);
			$(".map2__point-line line")[0].setAttribute("y2", infoTop);
			$(".map2__point-line").show();
		});
		
	});

	$('.map2__btn-close').on('click', function(){
		$(".map2__point-line").hide();
		$('.map2__info').fadeOut();
		isInfoShow = false;
	});

});