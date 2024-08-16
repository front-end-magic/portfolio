







document.addEventListener('deviceready', onDeviceReady, false);
   


    function onDeviceReady() {
    

admob.initAdmob("ca-app-pub-7833776278050008~8829053967","ca-app-pub-7833776278050008/4898930705");//admob id format ca-app-pub-xxxxxxxxxxxxxxxxxxx/xxxxxxxxxx
admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP);//show banner at the top of app

var admobParam=new  admob.Params();
        //admobParam.extra={'keyword':"admob phonegame"};
        admobParam.isForChild=true;
        //admobParam.isTesting=true;
        admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_CENTER,admobParam);

admob.showBannerAbsolute(admob.BannerSize.BANNER,0,70);//show banner at absolute position x 0,y 70

document.addEventListener('pageLeave', function () {
	// body...

document.addEventListener(admob.Event.onInterstitialReceive, onInterstitialReceive, false);//show in ad receive event fun need add receive listener
 admob.cacheInterstitial();// load admob Interstitial
 function onInterstitialReceive(message) {//show in ad receive event fun
     admob.showInterstitial();
}
})

 }



     