var page = (function($){

	function filterEvent(e){
        e.stopPropagation();
        e.preventDefault();
        return false;
    }
 
	//disable text selection on page
	$('body').on('selectstart', filterEvent).on('drop', filterEvent).on('dragover', filterEvent).css({
        '-webkit-user-select':'none',
        '-moz-user-select':'none',
        '-ms-user-select':'none',
        '-o-user-select':'none',
        'user-select':'none'
        });

    var page = {};
    
    $('a').on('click', function(e){
        window.location = "http://" + e.type + "/" + this.id + "/" + $(this).text() + "/";
        return filterEvent(e);
    })


    return page;
 
 })(jQuery);