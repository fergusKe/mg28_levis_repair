(function($) {
	let canvas, stage, exportRoot
	let _moveContainer

	$(function() {
		alignContCenter()
		loading()
	})

	function loading() {
		$('body').css({
			overflowY: 'hidden'
		})

		let imgsEle = $('.s1, .s2, .s3, .s4').find('img')
		// let imgsEle = $('.container img');
		let imgsArr = imgsEle.map(function(idx, item) {
			let src = $(item).attr('src')
			return src
		})

		let index = 0,
        len = imgsArr.length,
        $progress = $('.loading-percent span')

		$.preload(imgsArr, {
      each: function(count) {
        $progress.html(Math.round((count + 1) / len * 100) + '%');
      },
      all: function() {
				$('#loading').addClass('hideLoading');
				$('body').css({
					overflowY: 'auto'
				})

				setButton()

				s1()
				s3()
				s4()
				s5()
				s6()

      }
    })
	}

	function alignContCenter() {
		$(window).resize(function() {
			let winW = Math.max($(window).width(), 1349)
			let winH = $(window).height()
			let contW = 2000
	
			_moveContainer = Math.ceil((contW - winW) / 2)
	
			$('.container').css({
				left: -_moveContainer
			})

			// 螢幕高度比較低時，調整 kv 大小
			let s1W = 2000
			let s1H = 950
			let propagandaTop = 610
			let propagandaleft = 1316

			if (winW < 1390) {
				if (winH < 800) {
					$('.s1').css({
						height: s1H * 0.7,
						left: (s1W - s1W * 0.7) / 2
					})
					$('.mouse').css({
						left: -(s1W - s1W * 0.7)
					})
					$('.propaganda').css({
						transform: 'scale(0.7)',
						top: propagandaTop * 0.7,
						left: propagandaleft * 0.7
					})
				} else {
					$('.s1').css({
						height: s1H * 0.8,
						left: (s1W - s1W * 0.8) / 2
					})
					$('.mouse').css({
						left: -(s1W - s1W * 0.8)
					})
					$('.propaganda').css({
						transform: 'scale(0.8)',
						top: propagandaTop * 0.8,
						left: propagandaleft * 0.8
					})
				}
			} else if (winW < 1600) {
				if (winH < 840) {
					$('.s1').css({
						height: s1H * 0.8,
						left: (s1W - s1W * 0.8) / 2
					})
					$('.mouse').css({
						left: -(s1W - s1W * 0.8)
					})
					$('.propaganda').css({
						transform: 'scale(0.8)',
						top: propagandaTop * 0.8,
						left: propagandaleft * 0.8
					})
				} else if (winH < 910) {
					$('.s1').css({
						height: s1H * 0.9,
						left: (s1W - s1W * 0.9) / 2
					})
					$('.mouse').css({
						left: -(s1W - s1W * 0.9)
					})
					$('.propaganda').css({
						transform: 'scale(0.9)',
						top: propagandaTop * 0.9,
						left: propagandaleft * 0.9
					})
				} else {
					$('.s1').css({
						height: s1H,
						left: 0
					})
					$('.mouse').css({
						left: 0
					})
					$('.propaganda').css({
						transform: 'scale(1)',
						top: propagandaTop,
						left: propagandaleft
					})
				}
			} else {
				$('.s1').css({
					height: s1H,
					left: 0
				})
				$('.mouse').css({
					left: 0
				})
				$('.propaganda').css({
					transform: 'scale(1)',
					top: propagandaTop,
					left: propagandaleft
				})
			}
		}).resize()
	}

	function setButton() {
		// s2
		$('.tvc').on('click', function(e) {
			e.stopPropagation()
			popupShow('.s2-popup')
		})

		$('.popup, .popup-close-btn').on('click', function(e) {
			e.stopPropagation()
			popupHide()
		})

		var s2_item01_swiper = new Swiper('.s2 .item01', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
		})
		
		var s2_item02_swiper = new Swiper('.s2 .item02', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
		})
		
		var s2_item03_swiper = new Swiper('.s2 .item03', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    })

		

		
	}

	function s1() {
		let winH = $(window).height()
		let $mouse = $('.s1 .mouse')
		let $arrow = $('.s1 .mouse-arrow')
		$mouse.css({ top: winH - 82 - 67 - 50 })
		let TW_s1_arrow = TweenMax.to($arrow, 0.5, {top:'+=5', repeat:-1, yoyo:true})
	}

	function s3() {
		let menItemBox = $('.men-product .item-box')
		let womenItemBox = $('.women-product .item-box')
		let menItemNav = $('.men-product .nav')
		let womenItemNav = $('.women-product .nav')
		let menItemLength = 17
		let womenItemLength = 36

		let menItemHtml = ''
		let womenItemHtml = ''
		let menItemNavHtml = ''
		let womenItemNavHtml = ''
		let classActive = ''

		for (let i = 1; i <= menItemLength; i++) {
			if (i === 1) {
				classActive = 'active'
			} else {
				classActive = ''
			}
			if (i % 3 === 1) {
				menItemNavHtml += `<li class="${classActive}"><a href="javascript:;"></a></li>`
			}
			menItemHtml += `
				${i % 3 === 1 ? `<ul class="item ${classActive}">` : '' }
					<li>
						<div class="pic">
							<img class="cloudzoom c${i}" src="./images/s3/men/product/pic/normal/${Fun.str_pad(i, 2, "0")}.jpg" data-cloudzoom="zoomImage:'./images/s3/men/product/pic/big/${Fun.str_pad(i, 2, "0")}.jpg',zoomPosition:'inside', zoomOffsetX:0 " />
						</div>
						<div class="text">
							<img src="./images/s3/men/product/text/${Fun.str_pad(i, 2, "0")}.png" />
						</div>
						<div class="btn">
							<a href="javascript:;">
								BUY NOW
							</a>
						</div>
					</li>
				${i % 3 === 0 || i === menItemLength ? '</ul>' : '' }
			`
		}

		menItemBox.html(menItemHtml)
		menItemNav.html(menItemNavHtml)

		for (let i = 1; i <= womenItemLength; i++) {
			if (i === 1) {
				classActive = 'active'
			} else {
				classActive = ''
			}
			if (i % 3 === 1) {
				womenItemNavHtml += `<li class="${classActive}"><a href="javascript:;"></a></li>`
			}
			womenItemHtml += `
				${i % 3 === 1 ? `<ul class="item ${classActive}">` : '' }
					<li>
						<div class="pic">
							<img class="cloudzoom c${i}" src="./images/s3/women/product/pic/normal/${Fun.str_pad(i, 2, "0")}.jpg" data-cloudzoom="zoomImage:'./images/s3/women/product/pic/big/${Fun.str_pad(i, 2, "0")}.jpg',zoomPosition:'inside', zoomOffsetX:0 " />
						</div>
						<div class="text">
							<img src="./images/s3/women/product/text/${Fun.str_pad(i, 2, "0")}.png" />
						</div>
						<div class="btn">
							<a href="javascript:;">
								BUY NOW
							</a>
						</div>
					</li>
				${i % 3 === 0 || i === womenItemLength ? '</ul>' : '' }
			`
		}

		womenItemBox.html(womenItemHtml)
		womenItemNav.html(womenItemNavHtml)

		CloudZoom.quickStart()


		let $men = $('.s3 .men')
		let $women = $('.s3 .women')
		let $menBtn = $('.men-btn')
		let $womenBtn = $('.women-btn')
		let $menBtnImg = $('.men-btn img')
		let $womenBtnImg = $('.women-btn img')
		let winW = $(window).width() + 17
		let intervalId
		let interval = 6000

		let TW_s3_menBtn = TweenMax.to($menBtnImg, 0.5, {right:'-=5', repeat:-1, yoyo:true});
		let TW_s3_womenBtn = TweenMax.to($womenBtnImg, 0.5, {left:'-=5', repeat:-1, yoyo:true});

		$menBtn.on('click', function() {
			if ($menBtn.hasClass('active')) {
				// $womenBtn.click()
				clearInterval(intervalId)

				$menBtn.find('img').attr('src', './images/s3/men/open-btn.png')

				$('.men-product').css({display: 'none'})
				$men.find('.bg').css({left: 0}).find('li').eq(0).addClass('active').siblings().removeClass('active')

				TweenMax.to($men, .7, {
					width: '50%',
					ease: Power1.easeInOut,
					onStart: function() {
						setTimeout(function() {
							$('.control-men').fadeOut()
							$('.control-women').fadeOut()
							$('.s3 .title .main').fadeIn().siblings().fadeOut()
							$('.men-btn').removeClass('active')
							$('.control-men .next').text('1')
						}, 400)
					},
					onComplete: function() {
						TW_s3_menBtn.play()
						TW_s3_womenBtn.play()
					}
				})
				return
			}

			clearInterval(intervalId)
			intervalId = setInterval(function () {
				$('.control-men .control-right').click()
			}, interval)

			$menBtn.css({ left: '' })
			$womenBtn.css({ left: '' })
			TW_s3_menBtn.pause()
			TW_s3_womenBtn.pause()

			$('.s3 .title .men').fadeIn().siblings().fadeOut()

			let move = $(window).width() + 17 + _moveContainer
			// console.log('_moveContainer  =', _moveContainer)
			// console.log('move  =', move)

			TweenMax.to($men, .7, {
				width: move,
				ease: Power1.easeInOut,
				onStart: function() {
					setTimeout(function() {
						$('.men-product').fadeIn()
						$('.control-men').fadeIn()
					}, 400)
				}
			})
			
			$('.women-product').fadeOut()
			$('.control-women').fadeOut()
			$menBtn.addClass('active')
			$womenBtn.removeClass('active')
			$menBtn.find('img').attr('src', './images/s3/men/back-btn.png')
			$womenBtn.find('img').attr('src', './images/s3/women/open-btn.png')
		})

		$womenBtn.on('click', function() {
			if ($womenBtn.hasClass('active')) {
				// $menBtn.click()
				// $('.s3 .product').fadeOut()
				clearInterval(intervalId)
				$womenBtn.find('img').attr('src', './images/s3/women/open-btn.png')

				$('.women-product').css({display: 'none'})
				$women.find('.bg').css({left: 0}).find('li').eq(0).addClass('active').siblings().removeClass('active')

				TweenMax.to($men, .7, {
					width: '50%',
					ease: Power1.easeInOut,
					onStart: function() {
						setTimeout(function() {
							$('.control-men').fadeOut()
							$('.control-women').fadeOut()
							$('.s3 .title .main').fadeIn().siblings().fadeOut()
							$('.women-btn').removeClass('active')
							$('.control-women .next').text('1')
						}, 400)
					},
					onComplete: function() {
						TW_s3_menBtn.play()
						TW_s3_womenBtn.play()
					}
				})
				return
			}

			clearInterval(intervalId)
			intervalId = setInterval(function () {
				$('.control-women .control-right').click()
			}, interval)

			$menBtn.css({ left: '' })
			$womenBtn.css({ left: '' })
			TW_s3_menBtn.pause()
			TW_s3_womenBtn.pause()

			$('.s3 .title .women').fadeIn().siblings().fadeOut()

			TweenMax.to($men, .7, {
				width: _moveContainer,
				ease: Power1.easeInOut,
				onStart: function() {
					setTimeout(function() {
						$('.women-product').fadeIn()
						$('.control-women').fadeIn()
					}, 400)
				}
			})

			$('.men-product').fadeOut()
			$('.control-men').fadeOut()
			$menBtn.removeClass('active')
			$womenBtn.addClass('active')
			$menBtn.find('img').attr('src', './images/s3/men/open-btn.png')
			$womenBtn.find('img').attr('src', './images/s3/women/back-btn.png')
		})

		$('.s3 .product .nav li').on('click', function() {
			let $this = $(this)
			if ($this.hasClass('active')) return

			let $item = $this.parents('.product').find('.item')
			let idx = $this.index()
			let showNum = 3
			let startIdx = idx * 3
			// $('.item li').fadeOut().slice(startIdx, startIdx + showNum).fadeIn()
			// $item.eq(idx).addClass('active').siblings().removeClass('active')
			$item.eq(idx).addClass('active').siblings('.item').removeClass('active')
			$this.addClass('active').siblings().removeClass('active')
		})

		$('.s3 .men-product .next-btn').on('click', function() {
			let $this = $(this)
			let $itemBox = $this.parents('.product').find('.item-box')
			let $itemLi = $itemBox.find('.item')
			let $nav = $this.parents('.product').find('.nav')
			let $navLi = $nav.find('li')
			let itemLength = $itemLi.length
			let idx = $itemBox.find('.item.active').index()

			idx++
			if (idx >= itemLength) {
				idx = 0
			}

			$itemLi.eq(idx).addClass('active').siblings('.item').removeClass('active')
			$navLi.eq(idx).addClass('active').siblings('li').removeClass('active')
		})

		$('.s3 .men-product .prev-btn').on('click', function() {
			let $this = $(this)
			let $itemBox = $this.parents('.product').find('.item-box')
			let $itemLi = $itemBox.find('.item')
			let $nav = $this.parents('.product').find('.nav')
			let $navLi = $nav.find('li')
			let itemLength = $itemLi.length
			let idx = $itemBox.find('.item.active').index()

			idx--
			if (idx < 0) {
				idx = itemLength - 1
			}

			$itemLi.eq(idx).addClass('active').siblings('.item').removeClass('active')
			$navLi.eq(idx).addClass('active').siblings('li').removeClass('active')
		})

		$('.s3 .women-product .next-btn').on('click', function() {
			let $this = $(this)
			let $itemBox = $this.parents('.product').find('.item-box')
			let $itemLi = $itemBox.find('.item')
			let $nav = $this.parents('.product').find('.nav')
			let $navLi = $nav.find('li')
			let itemLength = $itemLi.length
			let idx = $itemBox.find('.item.active').index()

			idx++
			if (idx >= itemLength) {
				idx = 0
			}

			$itemLi.eq(idx).addClass('active').siblings('.item').removeClass('active')
			$navLi.eq(idx).addClass('active').siblings('li').removeClass('active')
		})

		$('.s3 .women-product .prev-btn').on('click', function() {
			let $this = $(this)
			let $itemBox = $this.parents('.product').find('.item-box')
			let $itemLi = $itemBox.find('.item')
			let $nav = $this.parents('.product').find('.nav')
			let $navLi = $nav.find('li')
			let itemLength = $itemLi.length
			let idx = $itemBox.find('.item.active').index()

			idx--
			if (idx < 0) {
				idx = itemLength - 1
			}

			$itemLi.eq(idx).addClass('active').siblings('.item').removeClass('active')
			$navLi.eq(idx).addClass('active').siblings('li').removeClass('active')
		})

		// s3 bg
		let $menBg = $('.s3 .men .bg')
		let $menBgLi = $('.s3 .men .bg li')
		let $menBgNow = $('.s3 .control-men .now')
		let $menBgNext = $('.s3 .control-men .next')
		let menBgLength = $menBgLi.length

		let isAnimate = false

		// men
		$menBg.append($menBgLi.eq(0).clone().removeClass('active'))
		// $menBg.prepend($menBgLi.eq(menBgLength - 1).clone())

		$menBg.css({
			width: (menBgLength + 1) * 2000
		})

		$('.control-men .total').text(menBgLength)

		$('.control-men .control-right').on('click', function() {
			if (isAnimate) return

			isAnimate = true
			let now = $menBg.find('.active').index()
			let next = now + 1
			
			if (next >= menBgLength) {
				next = 0
				// $menBg.css({left: 0})
				TweenMax.to($menBg, 1, {
					left: -menBgLength * 2000,
					onComplete: function() {
						isAnimate = false
						$menBg.css({left: 0})
					}
				})
			} else {
				TweenMax.to($menBg, 1, {
					left: -next * 2000,
					onComplete: function() {
						isAnimate = false
					}
				})
			}

			$menBgLi.eq(next).addClass('active').siblings().removeClass('active')

			TweenMax.fromTo($menBgNow, .5, {
				top: 6
			}, {
				top: -30,
				onComplete: function() {
					$menBgNow.text(next + 1)
				}
			})

			TweenMax.fromTo($menBgNext, .5, {
				top: 30,
				onStart: function() {
					$menBgNext.text(next + 1)
				}
			}, {
				top: 6
			})

			
		})

		$('.control-men .control-left').on('click', function() {
			if (isAnimate) return

			isAnimate = true
			let now = $menBg.find('.active').index()
			let next = now - 1

			if (next < 0) {
				next = menBgLength - 1
				
				$menBg.css({left: -(menBgLength) * 2000})
				TweenMax.to($menBg, 1, {
					left: -(menBgLength - 1) * 2000,
					onComplete: function() {
						isAnimate = false
					}
				})
			} else {
				TweenMax.to($menBg, 1, {
					left: -next * 2000,
					onComplete: function() {
						isAnimate = false
					}
				})
			}

			$menBgLi.eq(next).addClass('active').siblings().removeClass('active')

			TweenMax.fromTo($menBgNow, .5, {
				top: 6
			}, {
				top: 30,
				onComplete: function() {
					$menBgNow.text(next + 1)
				}
			})

			TweenMax.fromTo($menBgNext, .5, {
				top: -30,
				onStart: function() {
					$menBgNext.text(next + 1)
				}
			}, {
				top: 6
			})

		})


		// women
		let $womenBg = $('.s3 .women .bg')
		let $womenBgLi = $('.s3 .women .bg li')
		let $womenBgNow = $('.s3 .control-women .now')
		let $womenBgNext = $('.s3 .control-women .next')
		let womenBgLength = $womenBgLi.length

		$womenBg.append($womenBgLi.eq(0).clone().removeClass('active'))

		$womenBg.css({
			width: (womenBgLength + 1) * 2000
		})
		$('.control-women .total').text(womenBgLength)
		
		$('.control-women .control-right').on('click', function() {
			if (isAnimate) return

			isAnimate = true
			let now = $womenBg.find('.active').index()
			let next = now + 1
			
			if (next >= womenBgLength) {
				next = 0
				// $menBg.css({left: 0})
				TweenMax.to($womenBg, 1, {
					left: -womenBgLength * 2000,
					onComplete: function() {
						isAnimate = false
						$womenBg.css({left: 0})
					}
				})
			} else {
				TweenMax.to($womenBg, 1, {
					left: -next * 2000,
					onComplete: function() {
						isAnimate = false
					}
				})
			}

			$womenBgLi.eq(next).addClass('active').siblings().removeClass('active')

			TweenMax.fromTo($womenBgNow, .5, {
				top: 6
			}, {
				top: -30,
				onComplete: function() {
					$womenBgNow.text(next + 1)
				}
			})

			TweenMax.fromTo($womenBgNext, .5, {
				top: 30,
				onStart: function() {
					$womenBgNext.text(next + 1)
				}
			}, {
				top: 6
			})

		})

		$('.control-women .control-left').on('click', function() {
			if (isAnimate) return

			isAnimate = true
			let now = $womenBg.find('.active').index()
			let next = now - 1

			if (next < 0) {
				next = womenBgLength - 1
				
				$womenBg.css({left: -(womenBgLength) * 2000})
				TweenMax.to($womenBg, 1, {
					left: -(womenBgLength - 1) * 2000,
					onComplete: function() {
						isAnimate = false
					}
				})
			} else {
				TweenMax.to($womenBg, 1, {
					left: -next * 2000,
					onComplete: function() {
						isAnimate = false
					}
				})
			}

			$womenBgLi.eq(next).addClass('active').siblings().removeClass('active')

			TweenMax.fromTo($womenBgNow, .5, {
				top: 6
			}, {
				top: 30,
				onComplete: function() {
					$womenBgNow.text(next + 1)
				}
			})

			TweenMax.fromTo($womenBgNext, .5, {
				top: -30,
				onStart: function() {
					$womenBgNext.text(next + 1)
				}
			}, {
				top: 6
			})

			TweenMax.to($womenBg, 1, {
				left: -next * 2000,
				onComplete: function() {
					isAnimate = false
				}
			})
		})
	}

	function s4() {
		let $s4_MenBtn = $('.s4-men-btn')
		let $s4_WomenBtn = $('.s4-women-btn')
		let TW_s4_menBtn = TweenMax.to($s4_MenBtn, 0.5, {right:'+=5', repeat:-1, yoyo:true})
		let TW_s4_womenBtn = TweenMax.to($s4_WomenBtn, 0.5, {left:'+=5', repeat:-1, yoyo:true})

		$('.s4-women').on('click', function(e) {
			e.stopPropagation()
			popupShow('.s4-popup.women')
			$('.s4-popup .women').addClass('active').siblings('.item').removeClass('active')
		})
		$('.s4-men').on('click', function(e) {
			e.stopPropagation()
			popupShow('.s4-popup.men')
			$('.s4-popup .men').addClass('active').siblings('.item').removeClass('active')
		})
		$('.s4-popup .cont').on('click', function(e) {
			e.stopPropagation()
			
		})

		$('.s4-popup .next-btn').on('click', function() {
			let $this = $(this)
			let $item = $this.parents('.cont').find('.item')
			let $itemLi = $item.find('li')
			let itemLength = $itemLi.length
			let idx = $item.find('li.active').index()

			idx++
			if (idx >= itemLength) {
				idx = 0
			}

			$itemLi.eq(idx).addClass('active').fadeIn().siblings('li').removeClass('active').fadeOut()
		})

		$('.s4-popup .prev-btn').on('click', function() {
			let $this = $(this)
			let $item = $this.parents('.cont').find('.item')
			let $itemLi = $item.find('li')
			let itemLength = $itemLi.length
			let idx = $item.find('li.active').index()

			idx--
			if (idx < 0) {
				idx = itemLength - 1
			}

			$itemLi.eq(idx).addClass('active').fadeIn().siblings('li').removeClass('active').fadeOut()
		})
	}

	function s5() {
		$('.lookbook-btn').on('click', function() {
			$('.s5-gallery a').eq(0).click()
		})
	}

	function s6() {
		init()
	}

	function popupShow(item) {
		$(item).fadeIn()
		$('body').css({
			overflow: 'hidden'
		})

		if (item === '.s2-popup') {
			// $('.s2-popup .video').html('<iframe width="796" height="499" src="https://www.youtube.com/embed/N8-rd4KIK1s?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>')
		}
	}

	function popupHide(item) {
		$('.popup').fadeOut('normal', function() {
			$('.s2-popup .video').html('')
			$('.s2-popup .video').html('<iframe width="796" height="499" src="https://www.youtube.com/embed/pzZRADFsTxc?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>')
			// console.log('video remove')
		})
		$('body').css({
			'overflow': ''
		})

		// if (item === '.s2-popup') {
		// 	$('.2-popup .video').html('<iframe width="796" height="499" src="https://www.youtube.com/embed/N8-rd4KIK1s?rel=0" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>')
		// }
	}

	function init() {
		canvas = document.getElementById("canvas");
		images = images||{};
	
		var manifest = [
			{src:"images/s6/animate/bg.png", id:"bg"},
			{src:"images/s6/animate/icon_cloth.png", id:"icon_cloth"},
			{src:"images/s6/animate/icon01_fan.png", id:"icon01_fan"},
			{src:"images/s6/animate/icon02_airdown.png", id:"icon02_airdown"},
			{src:"images/s6/animate/icon02_airup.png", id:"icon02_airup"},
			{src:"images/s6/animate/icon03_air.png", id:"icon03_air"},
			{src:"images/s6/animate/icon03_drop.png", id:"icon03_drop"},
			{src:"images/s6/animate/icon03_drop02.png", id:"icon03_drop02"},
			{src:"images/s6/animate/icon04_air.png", id:"icon04_air"},
			{src:"images/s6/animate/icon04_airtop.png", id:"icon04_airtop"},
			{src:"images/s6/animate/position.jpg", id:"position"}
		];
	
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(manifest);
	}
	
	function handleFileLoad(evt) {
		if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
	}
	
	function handleComplete() {
		exportRoot = new lib.part6_icon_v2();
	
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
	
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", stage);
	}
})(jQuery)