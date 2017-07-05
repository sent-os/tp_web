/*西暦プルダウン作成関数*/
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

/*月プルダウン作成関数*/
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

/*日プルダウン作成関数*/
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

/*プルダウン内日付変更関数*/
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

/*2月の日付決定関数*/
function february( year, month ){
    var lastday = new Array( 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 );
    if ( ( (year % 4 == 0) && (year % 100 != 0) ) || ( year % 400 == 0 ) ) {
        lastday[1] = 29;
    }
    return lastday[month - 1];
}

/*ボタン押時に日付を表示する関数*/
function showDate() {
    var year = document.getElementById( "year" ).value;
    var month = document.getElementById( "month" ).value;
    var day = document.getElementById( "day" ).value;
   
    var show = "あなたが選択したのは、" + year + "年" + month + "月" + day + "日です。";
   
    var selectDate = document.getElementById( "selectDate" );
   
    selectDate.innerHTML = show;
   
    return false;

}

/*URLの発行処理*/
function do_url() {
<!-- baseURLのURLを管理画面で取得できるプラン一覧にセットする// -->
  var baseURL = "http://www.jhpds.net/lhotel-du-lac/uw/uwp3100/uww3101.do?yadNo=329124"
  var stayYear = document.getElementById( "year" ).value;
  var stayMonth = document.getElementById( "month" ).value;
  var stayDay = document.getElementById( "day" ).value;

  var listURL = baseURL
	+ "&stayYear=" + stayYear
	+ "&stayMonth=" + stayMonth
	+ "&stayDay=" + stayDay

<!-- 同一ウィンドウ遷移の場合は残す// -->
  //document.location.href = listURL;
<!-- 別ウィンドウ遷移の場合は残す// -->
  window.open(listURL);
}