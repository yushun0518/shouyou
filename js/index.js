$(function(){
	(function(){
		$('#nav-ico').click(function(){
        		$('.navbar-collapse').toggle();
    	});
    	
    	$('.index_nav >li >a').click(function(){
    		$('.navbar-collapse').hide();
    	});
    	
	})();
	
	(function(){
		var _txt;
		$('section.m_game .link').hover(
			function(){
				_txt  = $(this).text();
				$(this).text('点击下载')
			},
			function(){
				$(this).text(_txt)
			}
		);
	})();
	
	(function(){
		//全部游戏菜单切换
		$('.g_nav >ul >li').click(function(){
			var _index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('#game_box').find('.g_list').eq(_index).addClass('show').siblings().removeClass('show');
		});
		
		$('.p_game_nav >li').click(function(){
			var _index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('#p_game_box').find('.p_game_list').eq(_index).addClass('show').siblings().removeClass('show');
		});
		
		$('#game_nav').click(function(){
			$(this).next().toggle();
		})
		
		if(!IsPC()){
			$('.g_nav >ul >li').click(function(){
				$('.g_nav').hide();
			});
		}
		
		$(window).resize(function(){
			if(IsPC()){
				$('.g_nav').show();
			}else{
				$('.g_nav').hide();
			}
			if(!IsPC()){
				$('.g_nav >ul >li').click(function(){
					$('.g_nav').hide();
				});
			}
		})
		
		
		
	})();
	
	
	(function(){
		//删除已输入文字
		$('button.cancel').click(function(){
			$(this).closest('.button').prev('.input').val('')[0].focus();
		});
		var _txt;
		$('.tl_gbox >a').hover(
			function(){
				_txt  = $(this).text();
				$(this).find('>p').text('点击下载');
			},
			function(){
				$(this).find('>p').text(_txt);
			}
		);
		
		
	})();
	
	
	(function(){
		$('.order_l .t_ul >li').click(function(){
			$('.order_l >ul >li').removeClass('active');
			$(this).addClass('active');
			$('.order').find('.order_r').removeClass('show');
			$('#order_box_t').find('.order_r').eq($(this).index()).addClass('show');
		});
		
		$('.order_l .b_ul >li').click(function(){
			$('.order_l >ul >li').removeClass('active');
			$(this).addClass('active');
			$('.order').find('.order_r').removeClass('show');
			$('#order_box_b').find('.order_r').eq($(this).index()).addClass('show');
		});
		
		$('.order_r .page >a').click(function(){
			$('.order_r .page >a').removeClass('active');
			$(this).addClass('active');
		});
		
		$('h3.h_tip >i').click(function(){
			$(this).next('.tips').toggle();
		})
	})();
	
	
	
	function IsPC() {
		    var userAgentInfo = navigator.userAgent;
		    var Agents = ["Android", "iPhone",
		                "SymbianOS", "Windows Phone",
		                "iPad", "iPod"];
		    var flag = true;
		    for (var v = 0; v < Agents.length; v++) {
		        if (userAgentInfo.indexOf(Agents[v]) > 0) {
		            flag = false;
		            break;
		        }
		    }
		    return flag;
		}
})
