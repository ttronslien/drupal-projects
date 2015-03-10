(function($) {
	CKEDITOR.plugins.add( 'lu_image_caption', { init: function( editor ){
		
		editor.addCommand( 'caption', {
    	exec : function( editor ) {
   		var basetext = editor.getData();
		var found = $('img.caption:not(.caption-processed)', basetext);
		
		//array of images with class caption
		found.each(function(i) {
			
			//check to see if title is set then apply
			if(found.attr('title')){
				
				//create the current image string		
				var old_string = '<img ';
				old_string+= 'alt="'+found.attr('alt')+'" ';
				old_string+= 'class="'+found.attr('class')+'" ';
				old_string+= 'src="'+found.attr('src')+'" ';
				if(found.attr('style')){ old_string+= 'style="'+found.attr('style')+'" '; }
				old_string+= 'title="'+found.attr('title')+'"';
				old_string+= '>';
		
				//create the new image string
				var new_string='';
		 		var imgwidth = found.width() ? found.width() : false;
      	 		var imgheight = found.height() ? found.height() : false;
     
      			// Get caption from title attribute
      			var captiontext = found.attr('title');
      
      			// Get image alignment and style to apply to container
      			if(found.attr('align')){
        			var alignment = found.attr('align');
        			//found.css({'float':alignment}); // add to css float
        			found.removeAttr('align');
      			}else if(found.css('float')){
    				var alignment = found.css('float');
      			}else{
        			var alignment = 'normal';
      			}
      			
      			found.css('height','');
      			found.css('float','');
      			
      			var style = found.attr('style') ? found.attr('style') : '';
		 	
		 				
		 		// Reset img styles as are added to container instead      
      			found.removeAttr('width');
      			found.removeAttr('height');
      			found.css('width', '');
      			found.removeAttr('align');
      			found.removeAttr('style');
      
      			//Display inline block so it doesn't break any text aligns on the parent contatiner
      			//found.wrap("<span class=\"image-caption-container\" style=\"display:inline-block;" + style + "\"></span>");
      			found.parent().addClass('image-caption-container-' + alignment);
      			
      			// Add class to prevent duplicate caption adding
      			found.addClass('caption-processed');
				
				new_string = '<div class="image-wrapper"><span class="image-caption-container '+found.parent().attr('class')+'" style="display:inline-block;' + style + '"><img alt="'+found.attr('alt')+'" src="'+found.attr('src')+'" class="'+found.attr('class')+'"><span style="display:block;" class="image-caption">' + captiontext + '</span></span></div>';
				
				//replace
				var replaced_text = basetext.replace(old_string, new_string); // you could also use a regex in the replace 
	
				editor.setData(replaced_text);

			}
		});	
    }
});
   
   editor.ui.addButton( 'lu_image_caption', {
	toolbar : 'Insert Caption',
	label: 'Insert Image Captions', //this is the tooltip text for the button
    command: 'caption',
    icon: this.path + 'images/caption.png'
   });
  }
 });
})(jQuery);