
<head>
<script type="text/javascript"> 

function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)


}

//var addSec = 50;
function display_ct() {
var x = new Date();
//x.setTime(x.getTime() /*- (6 * 60 * 60 * 1000) */ - (464 * 60 * 1000) - (30 * 1000));

//x.setHours(9,47,addSec,0);
//addSec++;
var fiveMinsBefore = new Date();
var fiveMinsAfter = new Date();
var fiveAfterCur = new Date();
var curMins;

var fiveMinsBeforeLunch = new Date();
var fiveMinsAfterLunch = new Date();

var tableTime = new Date();
document.getElementById('ct').innerHTML = x.toLocaleTimeString(/*'en-US-u-hc-h12', { hour: 'numeric', minute: '2-digit' }*/);
curMins = ct.innerHTML.split(':')[1].split(':')[0];	

	var curClass = document.getElementsByClassName('time');
	var periodsGradeA = document.getElementsByClassName('col1 period');
	var startTimesGradeA = document.getElementsByClassName('col2 time');
	var endTimesGradeA = document.getElementsByClassName('col3 time');
	var periodsGradeB = document.getElementsByClassName('col4 period');
	var startTimesGradeB = document.getElementsByClassName('col5 time');
	var endTimesGradeB = document.getElementsByClassName('col6 time');
	var periodsGradeC = document.getElementsByClassName('col7 period');
	var startTimesGradeC = document.getElementsByClassName('col8 time');
	var endTimesGradeC = document.getElementsByClassName('col9 time');
	var periodsGradeD = document.getElementsByClassName('col10 period');
	var startTimesGradeD = document.getElementsByClassName('col11 time');
	var endTimesGradeD = document.getElementsByClassName('col12 time');
	
	//Lunch Vars
	var periodsGradeALunch = document.getElementsByClassName('lunch col1');
	var startTimesGradeALunch = document.getElementsByClassName('lunch col2');
	var endTimesGradeALunch = document.getElementsByClassName('lunch col3');
	var periodsGradeBLunch = document.getElementsByClassName('lunch col4');
	var startTimesGradeBLunch = document.getElementsByClassName('lunch col5');
	var endTimesGradeBLunch = document.getElementsByClassName('lunch col6');
	var periodsGradeCLunch = document.getElementsByClassName('lunch col7');
	var startTimesGradeCLunch = document.getElementsByClassName('lunch col8');
	var endTimesGradeCLunch = document.getElementsByClassName('lunch col9');
	var periodsGradeDLunch = document.getElementsByClassName('lunch col10');
	var startTimesGradeDLunch = document.getElementsByClassName('lunch col11');
	var endTimesGradeDLunch = document.getElementsByClassName('lunch col12');
	
	
	var tableTimeHoursStart;
	var tableTimeMinsStart;
	var tableTimeHoursEnd;
	var tableTimeMinsEnd;
	var tableTimeHoursStartLunch;
	var tableTimeMinsStartLunch;
	var tableTimeHoursEndLunch;
	var tableTimeMinsEndLunch;
	var curTimeHours;
	var curTimeMins;
	var curTimeSec = 0;
	var curTimeMilli = 0;
	var tableTimeStart = new Date();
	var tableTimeEnd = new Date();
	var tableTimeStartLunch = new Date();
	var tableTimeEndLunch = new Date();
	var bgc = "green";
	var bgCount = 0;

	var tableTime = new Date();
	/*for (var i = 0; i < curClass.length; i++){
		var bgc = "blue";
		
		     

			
		/*	curTimeHours = document.getElementById('ct').innerHTML.split(':')[0];
			curTimeMins = document.getElementById('ct').innerHTML.split(':')[1];
			tableTimeHours = curClass[i].innerHTML.split(':')[0];
			tableTimeHours = parseInt(tableTimeHours);
			if(tableTimeHours < 5) {tableTimeHours += 12;}
			tableTimeMins = curClass[i].innerHTML.split(':')[1].split(' ')[0];
			tableTime.setHours(tableTimeHours,tableTimeMins,0,0);

				if(tableTime < x) {
					//curClass[i].style.background = bgc;
					//curClass[i].style.color = "white";
					
				}
		
	}*/
			var schoolSelect = document.getElementById('schools')
		var curSchool = schoolSelect.value;
		//document.getElementById('periodsP').innerHTML = periodsGradeALunch[0].innerHTML;
		
		switch (curSchool){
							case 'RMS':
								bgc = "#1B3C9D";
								break;
							case 'ROSS':
								bgc = "#B30000";
								break;
							case 'CHS':
								bgc = "#400080";
								break;
							case 'KiMS':
								bgc = "#ED8B2E";
								break;
							}
	
	
	//document.getElementById('periodsP').innerHTML = periodsGradeA.length;
	if (document.getElementById('table')){
		gradeAHeader.innerHTML = document.getElementsByClassName('header col2')[0].innerHTML
		gradeBHeader.innerHTML = document.getElementsByClassName('header col5')[0].innerHTML
		gradeCHeader.innerHTML = document.getElementsByClassName('header col8')[0].innerHTML
		if (document.getElementById('gradeDHeader')){
					gradeDHeader.innerHTML = document.getElementsByClassName('header col11')[0].innerHTML;
		}
		var pFiller;

	
		


			
		bgCount = 0;
		for (k = 0; k < periodsGradeA.length; k++) {
			if (startTimesGradeA[k] != null && endTimesGradeA[k] != null) {
			//convert 6th grade start times from table to JS DateTimes
			tableTimeHoursStart = startTimesGradeA[k].innerHTML.split(':')[0];
			tableTimeHoursStart = parseInt(tableTimeHoursStart);
			if(tableTimeHoursStart < 5) {tableTimeHoursStart += 12;}
			tableTimeMinsStart = startTimesGradeA[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeStart.setHours(tableTimeHoursStart,tableTimeMinsStart,0,0);
			
			//convert 6th grade end times from table to JS DateTimes
			tableTimeHoursEnd = endTimesGradeA[k].innerHTML.split(':')[0];
			tableTimeHoursEnd = parseInt(tableTimeHoursEnd);
			if(tableTimeHoursEnd < 5) {tableTimeHoursEnd += 12;}
			tableTimeMinsEnd = endTimesGradeA[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeEnd.setHours(tableTimeHoursEnd,tableTimeMinsEnd,0,0);
			
				
			fiveMinsBefore.setTime(tableTimeEnd.getTime() - (5 * 60 * 1000));
			fiveMinsAfter.setTime(tableTimeEnd.getTime() + (5 * 60 * 1000));
			fiveAfterCur.setTime(x.getTime() + (5 * 60 * 1000));
				
				if (tableTimeStart < fiveAfterCur && x < tableTimeStart){
					periodsGradeA[k].style.background = "yellow";
					periodsGradeA[k].style.color = "black";
					startTimesGradeA[k].style.background = "yellow";
					startTimesGradeA[k].style.color = "black";
					endTimesGradeA[k].style.background = "yellow";
					endTimesGradeA[k].style.color = "black";
					gradeAMarquee.innerHTML = "Changing Classes<br />Heading to <b>" + periodsGradeA[k].innerHTML + "</b>";
					bgCount = 1;
				}
				
				else if (tableTimeStart <= x && fiveMinsBefore > x) {
				//changing 6th grade period to blue
					periodsGradeA[k].style.background = bgc;
					periodsGradeA[k].style.color = "white";
					startTimesGradeA[k].style.background = bgc;
					startTimesGradeA[k].style.color = "white";
					endTimesGradeA[k].style.background = bgc;
					endTimesGradeA[k].style.color = "white";
					gradeAMarquee.innerHTML = "<b>" + periodsGradeA[k].innerHTML + "</b><br />" + startTimesGradeA[k].innerHTML + " - " + endTimesGradeA[k].innerHTML;
					bgCount = 2;
				} 
				
				else if (x >= fiveMinsBefore && x < tableTimeEnd) {
					periodsGradeA[k].style.background = "yellow";
					periodsGradeA[k].style.color = "black";															
					startTimesGradeA[k].style.background = "yellow";															
					startTimesGradeA[k].style.color = "black";															
					endTimesGradeA[k].style.background = "yellow";															
					endTimesGradeA[k].style.color = "black";	
					var minsLeft = tableTimeMinsEnd - curMins;
					if (minsLeft > 1){
						gradeAMarquee.innerHTML = minsLeft + " minutes left" + "<br />" + "Do not call!";
					} else if (minsLeft < 1) {
							minsLeft += 60;
								if (minsLeft > 1){
												gradeAMarquee.innerHTML = minsLeft + " minutes left" + "<br />" + "Do not call!";
												} else {gradeAMarquee.innerHTML = minsLeft + " minute left" + "<br />" + "Do not call!";
														}							
						} else if (minsLeft == 1) {
								gradeAMarquee.innerHTML = minsLeft + " minute left" + "<br />" + "Do not call!";
								}
					bgCount = 3;
					
				} else if (k == periodsGradeA.length - 1 && x >= tableTimeEnd){
					periodsGradeA[k].style.background = "white";
					periodsGradeA[k].style.color = "black";
					startTimesGradeA[k].style.background = "white";
					startTimesGradeA[k].style.color = "black";
					endTimesGradeA[k].style.background = "white";
					endTimesGradeA[k].style.color = "black";
					gradeAMarquee.innerHTML = "School's Out";
				} else {
					periodsGradeA[k].style.background = "white";
					periodsGradeA[k].style.color = "black";
					startTimesGradeA[k].style.background = "white";
					startTimesGradeA[k].style.color = "black";
					endTimesGradeA[k].style.background = "white";
					endTimesGradeA[k].style.color = "black";
				}
				//periodsP.innerHTML = bgCount;
				switch (bgCount) {
					//out of school and default
					case 0: 
							gradeAMarquee.style.background = "white";
							gradeAMarquee.style.color = "black";
							break;
							
					//changing classes
					case 1: 
							gradeAMarquee.style.background = "yellow";
							gradeAMarquee.style.color = "black";
							break;
							
					//normal ops
					case 2: 
							gradeAMarquee.style.background = bgc;
							gradeAMarquee.style.color = "white";
							break;
					//5 mins left do not call
					case 3:
							gradeAMarquee.style.background = "yellow";
							gradeAMarquee.style.color = "black";
							break;
							
				}		
					
			}	
		}	
		
		///////////////////////A Grade Lunch//////////////////////
		for (k = 0; k < periodsGradeALunch.length; k++) {
			if (startTimesGradeALunch[k] != null && endTimesGradeALunch[k] != null) {
			//convert 6th grade start times from table to JS DateTimes
			tableTimeHoursStartLunch = startTimesGradeALunch[k].innerHTML.split(':')[0];
			tableTimeHoursStartLunch = parseInt(tableTimeHoursStartLunch);
			if(tableTimeHoursStartLunch < 5) {tableTimeHoursStartLunch += 12;}
			tableTimeMinsStartLunch = startTimesGradeALunch[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeStartLunch.setHours(tableTimeHoursStartLunch,tableTimeMinsStartLunch,0,0);
			
			//convert 6th grade end times from table to JS DateTimes
			tableTimeHoursEndLunch = endTimesGradeALunch[k].innerHTML.split(':')[0];
			tableTimeHoursEndLunch = parseInt(tableTimeHoursEndLunch);
			if(tableTimeHoursEndLunch < 5) {tableTimeHoursEndLunch += 12;}
			tableTimeMinsEndLunch = endTimesGradeALunch[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeEndLunch.setHours(tableTimeHoursEndLunch,tableTimeMinsEndLunch,0,0);
			
				
			fiveMinsBeforeLunch.setTime(tableTimeEndLunch.getTime() - (5 * 60 * 1000));
			fiveMinsAfterLunch.setTime(tableTimeEndLunch.getTime() + (5 * 60 * 1000));
			fiveAfterCur.setTime(x.getTime() + (5 * 60 * 1000));
				
				if (tableTimeStartLunch < fiveAfterCur && x < tableTimeStartLunch){
					periodsGradeALunch[k].style.background = "red";
					periodsGradeALunch[k].style.color = "white";
					startTimesGradeALunch[k].style.background = "red";
					startTimesGradeALunch[k].style.color = "white";
					endTimesGradeALunch[k].style.background = "red";
					endTimesGradeALunch[k].style.color = "white";
				}
				
				else if (tableTimeStartLunch <= x && fiveMinsBeforeLunch > x) {
				//changing 6th grade period to blue
					periodsGradeALunch[k].style.background = "red";
					periodsGradeALunch[k].style.color = "white";
					startTimesGradeALunch[k].style.background = "red";
					startTimesGradeALunch[k].style.color = "white";
					endTimesGradeALunch[k].style.background = "red";
					endTimesGradeALunch[k].style.color = "white";
				} 
				
				else if (x >= fiveMinsBeforeLunch && x < tableTimeEndLunch) {
					periodsGradeALunch[k].style.background = "red";
					periodsGradeALunch[k].style.color = "white";
					startTimesGradeALunch[k].style.background = "red";
					startTimesGradeALunch[k].style.color = "white";
					endTimesGradeALunch[k].style.background = "red";
					endTimesGradeALunch[k].style.color = "white";																				
				} else {
					periodsGradeALunch[k].style.background = "white";
					periodsGradeALunch[k].style.color = "black";
					startTimesGradeALunch[k].style.background = "white";
					startTimesGradeALunch[k].style.color = "black";
					endTimesGradeALunch[k].style.background = "white";
					endTimesGradeALunch[k].style.color = "black";
				}		
					
			}	
		}
		
		//document.getElementById('periodsP').innerHTML = periodsGradeALunch[0].innerHTML;
		
		///////////////////////B grade////////////////////////////
		bgCount = 0;
		for (k = 0; k < periodsGradeB.length; k++) {
			if (startTimesGradeB[k] != null && endTimesGradeB[k] != null){
			//convert 6th grade start times from table to JS DateTimes
			tableTimeHoursStart = startTimesGradeB[k].innerHTML.split(':')[0];
			tableTimeHoursStart = parseInt(tableTimeHoursStart);
			if(tableTimeHoursStart < 5) {tableTimeHoursStart += 12;}
			tableTimeMinsStart = startTimesGradeB[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeStart.setHours(tableTimeHoursStart,tableTimeMinsStart,0,0);
			
			//convert 6th grade end times from table to JS DateTimes
			tableTimeHoursEnd = endTimesGradeB[k].innerHTML.split(':')[0];
			tableTimeHoursEnd = parseInt(tableTimeHoursEnd);
			if(tableTimeHoursEnd < 5) {tableTimeHoursEnd += 12;}
			tableTimeMinsEnd = endTimesGradeB[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeEnd.setHours(tableTimeHoursEnd,tableTimeMinsEnd,0,0);

			fiveMinsBefore.setTime(tableTimeEnd.getTime() - (5 * 60 * 1000));
			fiveMinsAfter.setTime(tableTimeEnd.getTime() + (5 * 60 * 1000));
			fiveAfterCur.setTime(x.getTime() + (5 * 60 * 1000));				
				
				if (tableTimeStart < fiveAfterCur && x < tableTimeStart){
					periodsGradeB[k].style.background = "yellow";
					periodsGradeB[k].style.color = "black";
					startTimesGradeB[k].style.background = "yellow";
					startTimesGradeB[k].style.color = "black";
					endTimesGradeB[k].style.background = "yellow";
					endTimesGradeB[k].style.color = "black";
					gradeBMarquee.innerHTML = "Changing Classes<br />Heading to <b>" + periodsGradeB[k].innerHTML + "</b>";
					bgCount = 1;
				}
				
				else if (tableTimeStart <= x && fiveMinsBefore > x) {
				//changing 6th grade period to blue
					periodsGradeB[k].style.background = bgc;
					periodsGradeB[k].style.color = "white";
					startTimesGradeB[k].style.background = bgc;
					startTimesGradeB[k].style.color = "white";
					endTimesGradeB[k].style.background = bgc;
					endTimesGradeB[k].style.color = "white";
					gradeBMarquee.innerHTML = "<b>" + periodsGradeB[k].innerHTML + "</b><br />" + startTimesGradeB[k].innerHTML + " - " + endTimesGradeB[k].innerHTML;
					bgCount = 2;
				} 
				
				else if (x >= fiveMinsBefore && x < tableTimeEnd) {
					periodsGradeB[k].style.background = "yellow";
					periodsGradeB[k].style.color = "black";															
					startTimesGradeB[k].style.background = "yellow";															
					startTimesGradeB[k].style.color = "black";															
					endTimesGradeB[k].style.background = "yellow";															
					endTimesGradeB[k].style.color = "black";															
					var minsLeft = tableTimeMinsEnd - curMins;
					//document.getElementById('periodsP').innerHTML = minsLeft;
					if (minsLeft > 1){
						gradeBMarquee.innerHTML = minsLeft + " minutes left" + "<br />" + "Do not call!";
					} else if (minsLeft < 1) {
							minsLeft += 60;
								if (minsLeft > 1){
												gradeBMarquee.innerHTML = minsLeft + " minutes left" + "<br />" + "Do not call!";
												} else {gradeBMarquee.innerHTML = minsLeft + " minute left" + "<br />" + "Do not call!";
														}							
						} else if (minsLeft == 1) {
								gradeBMarquee.innerHTML = minsLeft + " minute left" + "<br />" + "Do not call!";
								}
					bgCount = 3;
				} else if (k == periodsGradeB.length - 1 && x >= tableTimeEnd){
					periodsGradeB[k].style.background = "white";
					periodsGradeB[k].style.color = "black";
					startTimesGradeB[k].style.background = "white";
					startTimesGradeB[k].style.color = "black";
					endTimesGradeB[k].style.background = "white";
					endTimesGradeB[k].style.color = "black";
					gradeBMarquee.innerHTML = "School's Out";
				} else {
					periodsGradeB[k].style.background = "white";
					periodsGradeB[k].style.color = "black";
					startTimesGradeB[k].style.background = "white";
					startTimesGradeB[k].style.color = "black";
					endTimesGradeB[k].style.background = "white";
					endTimesGradeB[k].style.color = "black";
				}
					
				switch (bgCount) {
					//out of school and default
					case 0: 
							gradeBMarquee.style.background = "white";
							gradeBMarquee.style.color = "black";
							break;
							
					//changing classes
					case 1: 
							gradeBMarquee.style.background = "yellow";
							gradeBMarquee.style.color = "black";
							break;
							
					//normal ops
					case 2: 
							gradeBMarquee.style.background = bgc;
							gradeBMarquee.style.color = "white";
							break;
					//5 mins left do not call
					case 3:
							gradeBMarquee.style.background = "yellow";
							gradeBMarquee.style.color = "black";
							break;
							
				}
			}	
		}
		/////////////////////////////////B Grade Lunch///////////////////////
		//document.getElementById('periodsP').innerHTML = periodsGradeBLunch.length;
		for (k = 0; k < periodsGradeBLunch.length; k++) {
			if (startTimesGradeBLunch[k] != null && endTimesGradeBLunch[k] != null) {
			//convert 6th grade start times from table to JS DateTimes
			tableTimeHoursStartLunch = startTimesGradeBLunch[k].innerHTML.split(':')[0];
			tableTimeHoursStartLunch = parseInt(tableTimeHoursStartLunch);
			if(tableTimeHoursStartLunch < 5) {tableTimeHoursStartLunch += 12;}
			tableTimeMinsStartLunch = startTimesGradeBLunch[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeStartLunch.setHours(tableTimeHoursStartLunch,tableTimeMinsStartLunch,0,0);
			
			//convert 6th grade end times from table to JS DateTimes
			tableTimeHoursEndLunch = endTimesGradeBLunch[k].innerHTML.split(':')[0];
			tableTimeHoursEndLunch = parseInt(tableTimeHoursEndLunch);
			if(tableTimeHoursEndLunch < 5) {tableTimeHoursEndLunch += 12;}
			tableTimeMinsEndLunch = endTimesGradeBLunch[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeEndLunch.setHours(tableTimeHoursEndLunch,tableTimeMinsEndLunch,0,0);
			
				
			fiveMinsBeforeLunch.setTime(tableTimeEndLunch.getTime() - (5 * 60 * 1000));
			fiveMinsAfterLunch.setTime(tableTimeEndLunch.getTime() + (5 * 60 * 1000));
			fiveAfterCur.setTime(x.getTime() + (5 * 60 * 1000));
				
				if (tableTimeStartLunch < fiveAfterCur && x < tableTimeStartLunch){
					periodsGradeBLunch[k].style.background = "red";
					periodsGradeBLunch[k].style.color = "white";
					startTimesGradeBLunch[k].style.background = "red";
					startTimesGradeBLunch[k].style.color = "white";
					endTimesGradeBLunch[k].style.background = "red";
					endTimesGradeBLunch[k].style.color = "white";
				}
				
				else if (tableTimeStartLunch <= x && fiveMinsBeforeLunch > x) {
				//changing 6th grade period to blue
					periodsGradeBLunch[k].style.background = "red";
					periodsGradeBLunch[k].style.color = "white";
					startTimesGradeBLunch[k].style.background = "red";
					startTimesGradeBLunch[k].style.color = "white";
					endTimesGradeBLunch[k].style.background = "red";
					endTimesGradeBLunch[k].style.color = "white";
				} 
				
				else if (x >= fiveMinsBeforeLunch && x < tableTimeEndLunch) {
					periodsGradeBLunch[k].style.background = "red";
					periodsGradeBLunch[k].style.color = "white";
					startTimesGradeBLunch[k].style.background = "red";
					startTimesGradeBLunch[k].style.color = "white";
					endTimesGradeBLunch[k].style.background = "red";
					endTimesGradeBLunch[k].style.color = "white";																				
				} else {
					periodsGradeBLunch[k].style.background = "white";
					periodsGradeBLunch[k].style.color = "black";
					startTimesGradeBLunch[k].style.background = "white";
					startTimesGradeBLunch[k].style.color = "black";
					endTimesGradeBLunch[k].style.background = "white";
					endTimesGradeBLunch[k].style.color = "black";
				}		
					
			}			
		}
		
		
		/////////////////////////////////Grade C///////////////////////////
		bgCount = 0;
		for (k = 0; k < periodsGradeC.length; k++) {
			if (startTimesGradeC[k] != null && endTimesGradeC[k] != null) {
			//convert 6th grade start times from table to JS DateTimes
			tableTimeHoursStart = startTimesGradeC[k].innerHTML.split(':')[0];
			tableTimeHoursStart = parseInt(tableTimeHoursStart);
			if(tableTimeHoursStart < 5) {tableTimeHoursStart += 12;}
			tableTimeMinsStart = startTimesGradeC[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeStart.setHours(tableTimeHoursStart,tableTimeMinsStart,0,0);
			
			//convert 6th grade end times from table to JS DateTimes
			tableTimeHoursEnd = endTimesGradeC[k].innerHTML.split(':')[0];
			tableTimeHoursEnd = parseInt(tableTimeHoursEnd);
			if(tableTimeHoursEnd < 5) {tableTimeHoursEnd += 12;}
			tableTimeMinsEnd = endTimesGradeC[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeEnd.setHours(tableTimeHoursEnd,tableTimeMinsEnd,0,0);

			fiveMinsBefore.setTime(tableTimeEnd.getTime() - (5 * 60 * 1000));
			fiveMinsAfter.setTime(tableTimeEnd.getTime() + (5 * 60 * 1000));
			fiveAfterCur.setTime(x.getTime() + (5 * 60 * 1000));				
				
				if (tableTimeStart < fiveAfterCur && x < tableTimeStart){
					periodsGradeC[k].style.background = "yellow";
					periodsGradeC[k].style.color = "black";
					startTimesGradeC[k].style.background = "yellow";
					startTimesGradeC[k].style.color = "black";
					endTimesGradeC[k].style.background = "yellow";
					endTimesGradeC[k].style.color = "black";
					gradeCMarquee.innerHTML = "Changing Classes<br />Heading to <b>" + periodsGradeC[k].innerHTML + "</b>";
					bgCount = 1;
				}
				
				else if (tableTimeStart <= x && fiveMinsBefore > x) {
				//changing 6th grade period to blue
					periodsGradeC[k].style.background = bgc;
					periodsGradeC[k].style.color = "white";
					startTimesGradeC[k].style.background = bgc;
					startTimesGradeC[k].style.color = "white";
					endTimesGradeC[k].style.background = bgc;
					endTimesGradeC[k].style.color = "white";
					gradeCMarquee.innerHTML = "<b>" + periodsGradeC[k].innerHTML + "</b><br />" + startTimesGradeC[k].innerHTML + " - " + endTimesGradeC[k].innerHTML;
					bgCount = 2;
				} 
				
				else if (x >= fiveMinsBefore && x < tableTimeEnd) {
					periodsGradeC[k].style.background = "yellow";
					periodsGradeC[k].style.color = "black";															
					startTimesGradeC[k].style.background = "yellow";															
					startTimesGradeC[k].style.color = "black";															
					endTimesGradeC[k].style.background = "yellow";															
					endTimesGradeC[k].style.color = "black";															
					var minsLeft = tableTimeMinsEnd - curMins;
					if (minsLeft > 1){
						gradeCMarquee.innerHTML = minsLeft + " minutes left" + "<br />" + "Do not call!";
					} else if (minsLeft < 1) {
							minsLeft += 60;
								if (minsLeft > 1){
												gradeCMarquee.innerHTML = minsLeft + " minutes left" + "<br />" + "Do not call!";
												} else {gradeCMarquee.innerHTML = minsLeft + " minute left" + "<br />" + "Do not call!";
														}							
						} else if (minsLeft == 1) {
								gradeCMarquee.innerHTML = minsLeft + " minute left" + "<br />" + "Do not call!";
								}					bgCount = 3;
				} else if (k == periodsGradeC.length - 1 && x >= tableTimeEnd){
					periodsGradeC[k].style.background = "white";
					periodsGradeC[k].style.color = "black";
					startTimesGradeC[k].style.background = "white";
					startTimesGradeC[k].style.color = "black";
					endTimesGradeC[k].style.background = "white";
					endTimesGradeC[k].style.color = "black";
					gradeCMarquee.innerHTML = "School's Out";
				} else {
					periodsGradeC[k].style.background = "white";
					periodsGradeC[k].style.color = "black";
					startTimesGradeC[k].style.background = "white";
					startTimesGradeC[k].style.color = "black";
					endTimesGradeC[k].style.background = "white";
					endTimesGradeC[k].style.color = "black";
				}

				switch (bgCount) {
					//out of school and default
					case 0: 
							gradeCMarquee.style.background = "white";
							gradeCMarquee.style.color = "black";
							break;
							
					//changing classes
					case 1: 
							gradeCMarquee.style.background = "yellow";
							gradeCMarquee.style.color = "black";
							break;
							
					//normal ops
					case 2: 
							gradeCMarquee.style.background = bgc;
							gradeCMarquee.style.color = "white";
							break;
					//5 mins left do not call
					case 3:
							gradeCMarquee.style.background = "yellow";
							gradeCMarquee.style.color = "black";
							break;
							
				}
					
			}	
		}
				/////////////////////////////////C Grade Lunch///////////////////////
		for (k = 0; k < periodsGradeCLunch.length; k++) {
			if (startTimesGradeCLunch[k] != null && endTimesGradeCLunch[k] != null) {
			//convert 6th grade start times from table to JS DateTimes
			tableTimeHoursStartLunch = startTimesGradeCLunch[k].innerHTML.split(':')[0];
			tableTimeHoursStartLunch = parseInt(tableTimeHoursStartLunch);
			if(tableTimeHoursStartLunch < 5) {tableTimeHoursStartLunch += 12;}
			tableTimeMinsStartLunch = startTimesGradeCLunch[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeStartLunch.setHours(tableTimeHoursStartLunch,tableTimeMinsStartLunch,0,0);
			
			//convert 6th grade end times from table to JS DateTimes
			tableTimeHoursEndLunch = endTimesGradeCLunch[k].innerHTML.split(':')[0];
			tableTimeHoursEndLunch = parseInt(tableTimeHoursEndLunch);
			if(tableTimeHoursEndLunch < 5) {tableTimeHoursEndLunch += 12;}
			tableTimeMinsEndLunch = endTimesGradeCLunch[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeEndLunch.setHours(tableTimeHoursEndLunch,tableTimeMinsEndLunch,0,0);
			
				
			fiveMinsBeforeLunch.setTime(tableTimeEndLunch.getTime() - (5 * 60 * 1000));
			fiveMinsAfterLunch.setTime(tableTimeEndLunch.getTime() + (5 * 60 * 1000));
			fiveAfterCur.setTime(x.getTime() + (5 * 60 * 1000));
				
				if (tableTimeStartLunch < fiveAfterCur && x < tableTimeStartLunch){
					periodsGradeCLunch[k].style.background = "red";
					periodsGradeCLunch[k].style.color = "white";
					startTimesGradeCLunch[k].style.background = "red";
					startTimesGradeCLunch[k].style.color = "white";
					endTimesGradeCLunch[k].style.background = "red";
					endTimesGradeCLunch[k].style.color = "white";
				}
				
				else if (tableTimeStartLunch <= x && fiveMinsBeforeLunch > x) {
				//changing 6th grade period to blue
					periodsGradeCLunch[k].style.background = "red";
					periodsGradeCLunch[k].style.color = "white";
					startTimesGradeCLunch[k].style.background = "red";
					startTimesGradeCLunch[k].style.color = "white";
					endTimesGradeCLunch[k].style.background = "red";
					endTimesGradeCLunch[k].style.color = "white";
				} 
				
				else if (x >= fiveMinsBeforeLunch && x < tableTimeEndLunch) {
					periodsGradeCLunch[k].style.background = "red";
					periodsGradeCLunch[k].style.color = "white";
					startTimesGradeCLunch[k].style.background = "red";
					startTimesGradeCLunch[k].style.color = "white";
					endTimesGradeCLunch[k].style.background = "red";
					endTimesGradeCLunch[k].style.color = "white";																				
				} else {
					periodsGradeCLunch[k].style.background = "white";
					periodsGradeCLunch[k].style.color = "black";
					startTimesGradeCLunch[k].style.background = "white";
					startTimesGradeCLunch[k].style.color = "black";
					endTimesGradeCLunch[k].style.background = "white";
					endTimesGradeCLunch[k].style.color = "black";
				}		
					
			}			
		}
		
		
		/////////////////////////////////Grade D///////////////////////////
		bgCount = 0;
		for (k = 0; k < periodsGradeD.length; k++) {
			if (startTimesGradeB[k] != null && endTimesGradeB[k] != null){
			//convert 12th grade start times from table to JS DateTimes
			tableTimeHoursStart = startTimesGradeD[k].innerHTML.split(':')[0];
			tableTimeHoursStart = parseInt(tableTimeHoursStart);
			if(tableTimeHoursStart < 5) {tableTimeHoursStart += 12;}
			tableTimeMinsStart = startTimesGradeD[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeStart.setHours(tableTimeHoursStart,tableTimeMinsStart,0,0);
			
			//convert 12th grade end times from table to JS DateTimes
			tableTimeHoursEnd = endTimesGradeD[k].innerHTML.split(':')[0];
			tableTimeHoursEnd = parseInt(tableTimeHoursEnd);
			if(tableTimeHoursEnd < 5) {tableTimeHoursEnd += 12;}
			tableTimeMinsEnd = endTimesGradeD[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeEnd.setHours(tableTimeHoursEnd,tableTimeMinsEnd,0,0);

			fiveMinsBefore.setTime(tableTimeEnd.getTime() - (5 * 60 * 1000));
			fiveMinsAfter.setTime(tableTimeEnd.getTime() + (5 * 60 * 1000));
			fiveAfterCur.setTime(x.getTime() + (5 * 60 * 1000));				
				
				if (tableTimeStart < fiveAfterCur && x < tableTimeStart){
					periodsGradeD[k].style.background = "yellow";
					periodsGradeD[k].style.color = "black";
					startTimesGradeD[k].style.background = "yellow";
					startTimesGradeD[k].style.color = "black";
					endTimesGradeD[k].style.background = "yellow";
					endTimesGradeD[k].style.color = "black";
					gradeDMarquee.innerHTML = "Changing Classes<br />Heading to <b>" + periodsGradeD[k].innerHTML + "</b>";
					bgCount = 1;
				}
				
				else if (tableTimeStart <= x && fiveMinsBefore > x) {
				//changing 12th grade period to blue
					periodsGradeD[k].style.background = bgc;
					periodsGradeD[k].style.color = "white";
					startTimesGradeD[k].style.background = bgc;
					startTimesGradeD[k].style.color = "white";
					endTimesGradeD[k].style.background = bgc;
					endTimesGradeD[k].style.color = "white";
					gradeDMarquee.innerHTML = "<b>" + periodsGradeC[k].innerHTML + "</b><br />" + startTimesGradeC[k].innerHTML + " - " + endTimesGradeC[k].innerHTML;
					bgCount = 2;
				} 
				
				else if (x >= fiveMinsBefore && x < tableTimeEnd) {
					periodsGradeD[k].style.background = "yellow";
					periodsGradeD[k].style.color = "black";															
					startTimesGradeD[k].style.background = "yellow";															
					startTimesGradeD[k].style.color = "black";															
					endTimesGradeD[k].style.background = "yellow";															
					endTimesGradeD[k].style.color = "black";															
					var minsLeft = tableTimeMinsEnd - curMins;
					if (minsLeft > 1){
						gradeDMarquee.innerHTML = minsLeft + " minutes left" + "<br />" + "Do not call!";
					} else if (minsLeft < 1) {
							minsLeft += 60;
								if (minsLeft > 1){
												gradeDMarquee.innerHTML = minsLeft + " minutes left" + "<br />" + "Do not call!";
												} else {gradeDMarquee.innerHTML = minsLeft + " minute left" + "<br />" + "Do not call!";
														}							
						} else if (minsLeft == 1) {
								gradeDMarquee.innerHTML = minsLeft + " minute left" + "<br />" + "Do not call!";
								}					bgCount = 3;
				} else if (k == periodsGradeD.length - 1 && x >= tableTimeEnd){
					periodsGradeD[k].style.background = "white";
					periodsGradeD[k].style.color = "black";
					startTimesGradeD[k].style.background = "white";
					startTimesGradeD[k].style.color = "black";
					endTimesGradeD[k].style.background = "white";
					endTimesGradeD[k].style.color = "black";
					gradeDMarquee.innerHTML = "School's Out";
				} else {
					periodsGradeD[k].style.background = "white";
					periodsGradeD[k].style.color = "black";
					startTimesGradeD[k].style.background = "white";
					startTimesGradeD[k].style.color = "black";
					endTimesGradeD[k].style.background = "white";
					endTimesGradeD[k].style.color = "black";
				}

				switch (bgCount) {
					//out of school and default
					case 0: 
							gradeDMarquee.style.background = "white";
							gradeDMarquee.style.color = "black";
							break;
							
					//changing classes
					case 1: 
							gradeDMarquee.style.background = "yellow";
							gradeDMarquee.style.color = "black";
							break;
							
					//normal ops
					case 2: 
							gradeDMarquee.style.background = bgc;
							gradeDMarquee.style.color = "white";
							break;
					//5 mins left do not call
					case 3:
							gradeDMarquee.style.background = "yellow";
							gradeDMarquee.style.color = "black";
							break;
							
				}
					
				
		}

		}
		
				/////////////////////////////////D Grade Lunch///////////////////////
		for (k = 0; k < periodsGradeDLunch.length; k++) {
			if (startTimesGradeDLunch[k] != null && endTimesGradeDLunch[k] != null) {
			//convert 6th grade start times from table to JS DateTimes
			tableTimeHoursStartLunch = startTimesGradeDLunch[k].innerHTML.split(':')[0];
			tableTimeHoursStartLunch = parseInt(tableTimeHoursStartLunch);
			if(tableTimeHoursStartLunch < 5) {tableTimeHoursStartLunch += 12;}
			tableTimeMinsStartLunch = startTimesGradeDLunch[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeStartLunch.setHours(tableTimeHoursStartLunch,tableTimeMinsStartLunch,0,0);
			
			//convert 6th grade end times from table to JS DateTimes
			tableTimeHoursEndLunch = endTimesGradeDLunch[k].innerHTML.split(':')[0];
			tableTimeHoursEndLunch = parseInt(tableTimeHoursEndLunch);
			if(tableTimeHoursEndLunch < 5) {tableTimeHoursEndLunch += 12;}
			tableTimeMinsEndLunch = endTimesGradeDLunch[k].innerHTML.split(':')[1].split(' ')[0];
			tableTimeEndLunch.setHours(tableTimeHoursEndLunch,tableTimeMinsEndLunch,0,0);
			
				
			fiveMinsBeforeLunch.setTime(tableTimeEndLunch.getTime() - (5 * 60 * 1000));
			fiveMinsAfterLunch.setTime(tableTimeEndLunch.getTime() + (5 * 60 * 1000));
			fiveAfterCur.setTime(x.getTime() + (5 * 60 * 1000));
				
				if (tableTimeStartLunch < fiveAfterCur && x < tableTimeStartLunch){
					periodsGradeDLunch[k].style.background = "red";
					periodsGradeDLunch[k].style.color = "white";
					startTimesGradeDLunch[k].style.background = "red";
					startTimesGradeDLunch[k].style.color = "white";
					endTimesGradeDLunch[k].style.background = "red";
					endTimesGradeDLunch[k].style.color = "white";
				}
				
				else if (tableTimeStartLunch <= x && fiveMinsBeforeLunch > x) {
				//changing 6th grade period to blue
					periodsGradeDLunch[k].style.background = "red";
					periodsGradeDLunch[k].style.color = "white";
					startTimesGradeDLunch[k].style.background = "red";
					startTimesGradeDLunch[k].style.color = "white";
					endTimesGradeDLunch[k].style.background = "red";
					endTimesGradeDLunch[k].style.color = "white";
				} 
				
				else if (x >= fiveMinsBeforeLunch && x < tableTimeEndLunch) {
					periodsGradeDLunch[k].style.background = "red";
					periodsGradeDLunch[k].style.color = "white";
					startTimesGradeDLunch[k].style.background = "red";
					startTimesGradeDLunch[k].style.color = "white";
					endTimesGradeDLunch[k].style.background = "red";
					endTimesGradeDLunch[k].style.color = "white";																				
				} else {
					periodsGradeDLunch[k].style.background = "white";
					periodsGradeDLunch[k].style.color = "black";
					startTimesGradeDLunch[k].style.background = "white";
					startTimesGradeDLunch[k].style.color = "black";
					endTimesGradeDLunch[k].style.background = "white";
					endTimesGradeDLunch[k].style.color = "black";
				}		
					
			}			
		}
						
		}
		//pFiller = periodsGradeA[0].innerHTML;
		//document.getElementById('periodsP').innerHTML = fiveMinsBefore.toLocaleTimeString();


display_c();
 }



</script>
</head>

<body onload=display_ct();>
<h1 id='ct' ></h1>
<p id='periodsP'></p>


<script type="text/javascript">

    function Upload() {
		var lunchTrigger = 0;
        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var table = document.createElement("table");
					table.id = "table";
					var tableLunches = document.createElement("table");
					tableLunches.id = "tableLunches";
                    var rows = e.target.result.split("\n");
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(",");
						
                        if (cells.length > 1) {
							
							if (lunchTrigger == 0) {
								var row = table.insertRow(-1);
							} else if (lunchTrigger == 1) {
														//document.getElementById('periodsP').innerHTML = "inside row creation";
															var row = tableLunches.insertRow(-1);
															}
															
                            for (var j = 0; j < cells.length; j++) {
							
								
                                
								if ((j == 1 || j == 4 || j == 7 || j == 10) && i != 0 && lunchTrigger != 1) {
								
									cell.classList.add("period");
								}
							
							
							if (lunchTrigger == 0) {
								var cell = row.insertCell(-1);
							} else if (lunchTrigger == 1) {
															//document.getElementById('periodsP').innerHTML = "inside cell creation";
															var cell = row.insertCell(-1);
																if (cells[j] != "" && cells[j] != 0){
																	cell.classList.add('lunch');
																}
															}
															
								var cellDateRaw = new Date();
								var cellDate = new Date(cellDateRaw.toLocaleDateString() + " " + cells[j]);
						
								
///////////////////////////////////////////////////////////////////////////////FIGURE OUT HOW TO IMPORT LUNCHES/////////////////////								
								if (cells[j] == "Lunches") {
									lunchTrigger = 1;
								}
								if (lunchTrigger == 1) {
									//document.getElementById('periodsP').innerHTML = rows.length;
									
								}
								/*	//i = rows.length;
									//j = cells.length;
									//break;
								}*/
							if (lunchTrigger == 0){
								if ( i == 0 || j == 0 || j == 3 || j == 6 || j == 9 || cells[j] == ""){
									cell.innerHTML = cells[j];}
									else {
                                //cell.innerHTML = cellDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' , hour12: true });
										cell.innerHTML = cellDate.toLocaleTimeString('en-US-u-hc-h12', { hour: 'numeric', minute: '2-digit' });
									}
							} else if (lunchTrigger == 1) {
								//document.getElementById('periodsP').innerHTML = "inside row assignment";
															if ( i == 0 || j == 0 || j == 3 || j == 6 || j == 9 || cells[j] == 0){
																												cell.innerHTML = cells[j];
																}
																else {
																	//document.getElementById('periodsP').innerHTML = j;
																	//cell.innerHTML = cellDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' , hour12: true });
																	cell.innerHTML = cellDate.toLocaleTimeString('en-US-u-hc-h12', { hour: 'numeric', minute: '2-digit' });
																}
														}
							switch(i){
								case 0:
									cell.classList.add("header");
									break;
								case 1:
									cell.classList.add("row1");
									break;
								case 2:
									cell.classList.add("row2");
									break;
								case 3:
									cell.classList.add("row3");
									break;
								case 4:
									cell.classList.add("row4");
									break;
								case 5:
									cell.classList.add("row5");
									break;
								case 6:
									cell.classList.add("row6");
									break;
								case 7:
									cell.classList.add("row7");
									break;
								case 8:
									cell.classList.add("row8");
									break;
							}
							switch(j){
								case 0:
									cell.classList.add("col1");
									break;
								case 1:
									cell.classList.add("col2");
									if ( i != 0){
										cell.classList.add("time");
										
									}
									break;
								case 2:
									cell.classList.add("col3");
									if ( i != 0){
										cell.classList.add("time");
									}
									break;
								case 3:
									cell.classList.add("col4");
									break;
								case 4:
									cell.classList.add("col5");
									if ( i != 0){
										cell.classList.add("time");
										
									}
									break;
								case 5:
									cell.classList.add("col6");
									if ( i != 0){
										cell.classList.add("time");
										
									}
									break;
								case 6:
									cell.classList.add("col7");
									break;
								case 7:
									cell.classList.add("col8");
									if ( i != 0){
										cell.classList.add("time");
										
									}
									break;
								case 8:
									cell.classList.add("col9");
									if ( i != 0){
										cell.classList.add("time");
									}
									break;
								case 9:
									cell.classList.add("col10");
									break;
								case 10:
										cell.classList.add("col11");
									if ( i != 0){
										cell.classList.add("time");
									}
									break;
								case 11:
										cell.classList.add("col12");
									if ( i != 0){
										cell.classList.add("time");
									}
									break;
									
							}
							
							if (lunchTrigger == 1) {
													cell.classList.remove('period');
													cell.classList.remove('time');
							}
								
                        }
						
                    }
					
					}
                    var dvCSV = document.getElementById("dvCSV");
                    dvCSV.innerHTML = "";
					var dvCSVLabel = document.getElementById('dvCSVLabel');
					dvCSVLabel.innerHTML = "<h3 id='dvCSVLabel'>Full Schedule</h3>";
					table.deleteRow(-1);
                    dvCSV.appendChild(table);
					var dvLunches = document.getElementById("dvLunches");
					dvLunches.innerHTML = "<h1 id='lunchesLabel'>Lunches</h1>";
					dvLunches.appendChild(tableLunches);
					var lunchTdCount = document.getElementsByClassName('lunch').length;
					var lunchTDs = document.getElementsByClassName('lunch');
					
					/*for (var z = 0; z < lunchTdCount; z++) {
						lunchTDs[z].setAttribute('width', '11.11%');
					}*/
					//document.getElementsByClassName('lunch').setAttribute('width', '33%');
					
						var marqueeDiv = document.getElementById("marquee");
						var headerRow = document.getElementsByClassName("header");
						//document.getElementById('periodsP').innerHTML = headerRow.length;
					if (headerRow.length > 9){
								marqueeDiv.innerHTML = "<table id='marqueeTable'><tr><td id='gradeAHeader' class='marqueeTD4'></td><td id='gradeBHeader' class='marqueeTD4'></td><td id='gradeCHeader' class='marqueeTD4'></td><td id='gradeDHeader' class='marqueeTD4'></td></tr><tr><td id='gradeAMarquee' class='marqueeTD4'></td><td id='gradeBMarquee' class='marqueeTD4'></td><td id='gradeCMarquee' class='marqueeTD4'></td><td id='gradeDMarquee' class='marqueeTD4'></td></tr></table>";
								for (var z = 0; z < lunchTdCount; z++) {
									lunchTDs[z].setAttribute('width', '8.33%');
								}
					}
					else {
							marqueeDiv.innerHTML = "<table id='marqueeTable'><tr><td id='gradeAHeader' class='marqueeTD'></td><td id='gradeBHeader' class='marqueeTD'></td><td id='gradeCHeader' class='marqueeTD'></td></tr><tr><td id='gradeAMarquee' class='marqueeTD'></td><td id='gradeBMarquee' class='marqueeTD'></td><td id='gradeCMarquee' class='marqueeTD'></td></tr></table>";
							for (var z = 0; z < lunchTdCount; z++) {
								lunchTDs[z].setAttribute('width', '11.11%');
							}
							//marqueeDiv.style.
					}
	
					document.getElementsByClassName('header col2')[0].innerHTML = document.getElementsByClassName('header col2')[0].innerHTML + "th Grade";
					document.getElementsByClassName('header col5')[0].innerHTML = document.getElementsByClassName('header col5')[0].innerHTML + "th Grade";
					document.getElementsByClassName('header col8')[0].innerHTML = document.getElementsByClassName('header col8')[0].innerHTML + "th Grade";
					
					if (document.getElementsByClassName('header col11')[0]){
						document.getElementsByClassName('header col11')[0].innerHTML = document.getElementsByClassName('header col11')[0].innerHTML + "th Grade";
						}
                }
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
					
	}
	
	function uploadLunches() {
		//alert("Inside uploadLunches");
	}


</script>


<div id="marquee"></div>
<div id="dvLunches"></div>
<div id="dvCSVLabel"></div>
<div id="dvCSV"></div>

<div id="buttons">
<input type="file" id="fileUpload" />
<input type="button" id="upload" value="Upload" onclick="Upload()" />

<label for='schools' id='schoolsLabel'>Choose your school:</label>
<select name='schools' id='schools'>
	<option value='RMS'>RMS</option>
	<option value='CHS'>CHS</option>
	<option value='ROSS'>ROSS</option>
	<option value='KiMS'>KiMS</option>
</select>
</div>
	


</body>
<style>

#dvCSVLabel {
	text-align: center;
	margin-bottom: 0;
	margin-top: 10px;
}
#dvCSV {
	margin-bottom: 2%;
}
#dvLunches {
	text-align: center;
	margin-bottom: 5%;
}
#lunchesLabel {
	font-size: 2em;
	margin-bottom: 0;
	margin-top: 10px;
}
.lunch.col1 {
	
}
#marqueeTable {
	margin-top: 1%;
	height: 10%;
	text-align: center;
	border: 4px solid black;
	border-collapse: collapse;
	font-size: 1.75em;
}
#marqueeTable td {
	border: 4px solid black;
	font-size: 1.15em;
}
.marqueeTD {
	width: 33%;
}
.marqueeTD4 {
	width: 25%;
}

#gradeAHeader, #gradeBHeader, #gradeCHeader, #gradeDHeader{
	font-weight: bold;
}
#tableLunches td {
	border: 2px solid black;
	border-collapse: collapse;
	padding: 3px;
}
#tableLunches tr {
	border: 2px solid black;
	border-collapse: collapse;
	margin-bottom: 0;
}
#table td {
	border: 2px solid black;
	border-collapse: collapse;
	font-size: 1.15em;
}
#table tr {
	border: 2px solid black;
	border-collapse: collapse;
}
#table {
	padding-bottom: 10%;
}
table {
	width: 95%;
	margin-left: auto;
	margin-right: auto;
	border: 4px solid black;
	border-collapse: collapse;
}
h1 {
	text-align: center;
}
#buttons {
	position: absolute;
	width: 100%;
	margin-top: 1%;
	margin-bottom: 50px;
}
#fileUpload, #upload, #schools, #schoolsLabel {
	float: left;
	margin-bottom: 3%;
}
#schools {
	margin-left: 1%;
}
#schoolsLabel {
	margin-left: 3%;
}
body {
	position: relative;
}
.period {
	text-align: center;
	font-weight: bold;
}
.header {
	border-left: 0 !important;
	border-right: 0 !important;
	border-bottom: 4px solid black !important;
	text-align: center;
	font-weight: bold;
}
.col3, .col6, .col9 {
	border-right: 4px solid black !important;
}
</style>
