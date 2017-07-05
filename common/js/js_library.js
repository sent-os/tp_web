/*����v���_�E���쐬�֐�*/
function CreateYears() {
    var i;
    date = new Date();
    var nowYear = (date.getYear()<1000)?
	 date.getYear()+1900:date.getYear();
    var year = nowYear;
    var optionTag;
   
    for( i = 0; i < 3; i++ ) {
        if( year == nowYear ) {
            optionTag = "<option value=\"" + year + "\" selected>" + year + "</option>\n";
        } else {
            optionTag = "<option value=\"" + year + "\">" + year + "</option>\n";
        }
        year++;
        document.write( optionTag );
    }
}

/*���v���_�E���쐬�֐�*/
function CreateMonths() {
    var i;
    date = new Date();
    var nowMonth = date.getMonth() + 1;
    var optionTag;
   
    for( i = 1; i <= 12; i++ ) {
        if( i == nowMonth ) {
            optionTag = "<option value=\"" + i + "\" selected>" + i + "</option>\n";
        } else {
            optionTag = "<option value=\"" + i + "\">" + i + "</option>\n";
        }
        document.write( optionTag );
    }
}

/*���v���_�E���쐬�֐�*/
function CreateDays() {
    var i;
    date = new Date();
    var nowDay = date.getDate();
    var optionTag;
   
    for( i = 1; i <= 31; i++ ) {
        if( i == nowDay ) {
            optionTag = "<option value=\"" + i + "\" selected>" + i + "</option>\n";
        } else {
            optionTag = "<option value=\"" + i + "\">" + i + "</option>\n";
        }
        document.write( optionTag );
    }
}

/*�v���_�E�������t�ύX�֐�*/
function setDay(){
    var year = document.getElementById( "year" ).value;
    var month = document.getElementById( "month" ).value;
    var day = document.getElementById( "day" );

    var lastday = february( year, month );
    var itemnum = day.length;
    if ( lastday - 1 < day.selectedIndex ) {
        day.selectedIndex = lastday - 1;
    }
    day.length = lastday;
    for ( cnt = ( itemnum + 1 ); cnt <= lastday; cnt++ ) {
        day.options[cnt - 1].text = cnt;
    }
}

/*2���̓��t����֐�*/
function february( year, month ){
    var lastday = new Array( 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 );
    if ( ( (year % 4 == 0) && (year % 100 != 0) ) || ( year % 400 == 0 ) ) {
        lastday[1] = 29;
    }
    return lastday[month - 1];
}

/*�{�^�������ɓ��t��\������֐�*/
function showDate() {
    var year = document.getElementById( "year" ).value;
    var month = document.getElementById( "month" ).value;
    var day = document.getElementById( "day" ).value;
   
    var show = "���Ȃ����I�������̂́A" + year + "�N" + month + "��" + day + "���ł��B";
   
    var selectDate = document.getElementById( "selectDate" );
   
    selectDate.innerHTML = show;
   
    return false;

}

/*URL�̔��s����*/
function do_url() {
<!-- baseURL��URL���Ǘ���ʂŎ擾�ł���v�����ꗗ�ɃZ�b�g����// -->
  var baseURL = "http://www.jhpds.net/lhotel-du-lac/uw/uwp3100/uww3101.do?yadNo=329124"
  var stayYear = document.getElementById( "year" ).value;
  var stayMonth = document.getElementById( "month" ).value;
  var stayDay = document.getElementById( "day" ).value;

  var listURL = baseURL
	+ "&stayYear=" + stayYear
	+ "&stayMonth=" + stayMonth
	+ "&stayDay=" + stayDay

<!-- ����E�B���h�E�J�ڂ̏ꍇ�͎c��// -->
  //document.location.href = listURL;
<!-- �ʃE�B���h�E�J�ڂ̏ꍇ�͎c��// -->
  window.open(listURL);
}