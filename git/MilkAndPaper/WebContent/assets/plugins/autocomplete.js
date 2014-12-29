function autocomplete(){
   $('.alert-success',$('#form_sample_3')).show();
		   $("#submit").click(function() {
			$("#form").submit();
			});
		   $( "#name" ).autocomplete({
	 		   source: function(){
	 			  $.ajax({
					   
//	 				   type: "POST",
				       url : 'invoiceGetCustomer',
				       data: {name: data },
				       success : function(data) {
				    	  var customers=jQuery.parseJSON(data);
				    	  var customer;
				    	  var custonernames=[];
				    			  
				    	  $(customers).each(function(index,customer){
				    		  custonernames.push(customer.name)
				    		 
				    	  })
				    	  
				       	   $( "#name" ).autocomplete({
				 		   source: custonernames
				 		   });
				    	 
				    	  $("#name").change(function(){
				    		 
				    		  var customer = customers.filter(function(val, index, array) {
				    			    return val.name === $("#name").val();
				    			});
				    		 $(customer).each(function(index,customer){ 
				    			 $("#city").val(customer.city);
				    			 $("[name=state]").val(customer.state);
				    			 $("#address").val(customer.address);
				    			 })
				    		  
				    		  });
							
				       }
				   });
	 		   }
	 		   });
		  
		   $( "#name" ).keyup(function(){
			   var data=$( "#name" ).val();
			   $.ajax({
				   
// 				   type: "POST",
			       url : 'invoiceGetCustomer',
			       data: {name: data },
			       success : function(data) {
			    	  var customers=jQuery.parseJSON(data);
			    	  var customer;
			    	  var custonernames=[];
			    			  
			    	  $(customers).each(function(index,customer){
			    		  custonernames.push(customer.name)
			    		 
			    	  })
			    	  
			       	   $( "#name" ).autocomplete({
			 		   source: custonernames
			 		   });
			    	 
			    	  $("#name").change(function(){
			    		 
			    		  var customer = customers.filter(function(val, index, array) {
			    			    return val.name === $("#name").val();
			    			});
			    		 $(customer).each(function(index,customer){ 
			    			 $("#city").val(customer.city);
			    			 $("[name=state]").val(customer.state);
			    			 $("#address").val(customer.address);
			    			 })
			    		  
			    		  });
						
			       }
			   });
		   })
		  
}		