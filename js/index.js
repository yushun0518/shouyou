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
})
