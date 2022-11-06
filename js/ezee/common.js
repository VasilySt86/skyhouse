// JavaScript Document
jQuery(window).bind("load", function() {
   jQuery("#bb_resBookingBox").append("<input type=hidden name=ArDt id=ArDt value=''>");jQuery("#ArDt").val(jQuery("#eZ_chkin").val());
   jQuery("#bb_resBookingBox").append("<input type=hidden name=acturl id=acturl value=''>");jQuery("#acturl").val(document._resBBBox.action);
});
function _setNights(cutoffdays)
{
	jQuery("select[id$='eZ_Nights']").val(parseInt(cutoffdays));
}

function BB_valiDateFomData()
{
	
        if(typeof(jQuery("#eZ_chkout").val())=='undefined')
	{
		if(jQuery("#eZ_chkin").val()=='')
		{
			jQuery('#echeckin').focus();
			return false;
		}		
	}
	else
	{
		if(jQuery("#eZ_chkin").val()=='')
		{
			jQuery('#echeckin').focus();
			return false;
		}
		if(jQuery("#eZ_chkout").val()=='')
		{
			jQuery('#echeckout').focus();
			return false;
		}
		if(jQuery("#eZ_Nights").val()<0)
		{
			 alert("You have select wrong date selection.");
		 	 return false;
		}
		
      
		var calFormat = (jQuery("input[id$='calformat']").val());
		var startDate_format=convertdate_format(jQuery("#eZ_chkin").val(),calFormat);
		var endDate_format=convertdate_format(jQuery("#eZ_chkout").val(),calFormat);
                
		var startdate1 = Date.parse(startDate_format);
		var endDate1 = Date.parse(endDate_format);
	}
	
	//3 years cehcking
	if(parseInt(jQuery("#eZ_Nights").val()) > 1095)
	{
		 alert("Booking for more then 3 year(s) not allowed.");
		 return false;	
	}	
	
	/*added code - flora*/
	var frmurl_rz=jQuery("#acturl").val();
	if(	frmurl_rz!='')
	{
		//alert("call");
		var rzurldata=frmurl_rz.split("-");
               // console.log(rzurldata[rzurldata.length-1]);
		var rzurldata2=rzurldata[0].split("/");
               // console.log(rzurldata2);
                
	}
		
	if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/) && rzurldata[2]!=738 && rzurldata[2]!='katerinacityhotel' && rzurldata[2]!=302
&& rzurldata[2]!=258 && rzurldata[2]!=177)
        {
		//alert("Mobile");
		//console.log(rzurldata2);	
		var promo='';
		if(jQuery("#promotioncode").val()!='' && typeof(jQuery("#promotioncode").val())!='undefined')
		promo=jQuery("#promotioncode").val();
		//console.log(rzurldata[2]);
             //   return false;
             
                     //Pinal - 1.0.50.55 - 3 September 2016 - START
                     //Purpose - Issue of booking box data getting lost while accessing from mobile for responsive ui.
                     
                     //var rz_frm_action='http://'+rzurldata2[2]+'/booking/mroominfo.php?HotelId='+rzurldata[2]+'&eZ_chkin='+jQuery("#eZ_chkin").val()+'&eZ_Nights='+jQuery("#eZ_Nights").val()+'&eZ_adult='+jQuery("#eZ_adult").val()+'&eZ_child='+jQuery("#eZ_child").val()+'&eZ_room='+jQuery("#eZ_room").val()+'&promotion='+promo+'&ArrvalDt='+jQuery("#ArDt").val()+'&executepage=mroominfo';
                     
                     var param='action=GetLayoutTheme&HotelId='+rzurldata[2];
                     
                     var rz_frm_action='http://'+rzurldata2[2]+'/booking/book-rooms-'+rzurldata[2];
                     jQuery.ajax({
                         type: "POST",
                         url: 'http://'+rzurldata2[2]+'/booking/service.php',
                         async:false,
                         data: param, 
                         success: function(response) {
                           
                              if (response.trim()!='2')
                                 rz_frm_action='http://'+rzurldata2[2]+'/booking/mroominfo.php?HotelId='+rzurldata[2]+'&eZ_chkin='+jQuery("#eZ_chkin").val()+'&eZ_Nights='+jQuery("#eZ_Nights").val()+'&eZ_adult='+jQuery("#eZ_adult").val()+'&eZ_child='+jQuery("#eZ_child").val()+'&eZ_room='+jQuery("#eZ_room").val()+'&promotion='+promo+'&ArrvalDt='+jQuery("#ArDt").val()+'&executepage=mroominfo';
                        },
                        complete:function(){
                           document._resBBBox.action=rz_frm_action;
                           document._resBBBox.submit();
                        }
                     });
                     
		//document._resBBBox.action=rz_frm_action;
                
		//console.log(rz_frm_action);
		//return false;
		//document._resBBBox.submit();
		return true;
               
               //Pinal - 1.0.50.55 - 3 September 2016 - END
	}
	else{
		//alert("Desktop");
		document._resBBBox.submit();
		return true;		
	}
	/*added code - flora*/
}

function convertdate_format(dateval,format)
  {
  switch(format)
  {
  case 'dd-mm-yy':
  var dateval_arr=dateval.split("-");
  var d1=dateval_arr[2]+"-"+dateval_arr[1]+"-"+dateval_arr[0];
  break;
  case 'mm-dd-yy':
  var dateval_arr=dateval.split("-");
  //var d1=dateval_arr[1]+"-"+dateval_arr[2]+"-"+dateval_arr[0];
  var d1=dateval_arr[2]+"-"+dateval_arr[0]+"-"+dateval_arr[1]; //Pinal - 1.0.46.51 - 28 July 2015
  break;
  case 'yy-mm-dd':
  var dateval_arr=dateval.split("-"); 
  var d1=dateval_arr[0]+"-"+dateval_arr[1]+"-"+dateval_arr[2];
  break;
  case 'yy-dd-mm':
  var dateval_arr=dateval.split("-");
  var d1=dateval_arr[0]+"-"+dateval_arr[2]+"-"+dateval_arr[1];
  break;
  case 'mm-yy-dd':
  var dateval_arr=dateval.split("-");
  var d1=dateval_arr[1]+"-"+dateval_arr[0]+"-"+dateval_arr[2];
  break; 
  case 'dd-yy-mm':
  var dateval_arr=dateval.split("-");
  var d1=dateval_arr[2]+"-"+dateval_arr[0]+"-"+dateval_arr[1];
  break;
  }
  return d1;	
  } 

