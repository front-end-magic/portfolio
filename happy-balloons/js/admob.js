






// app id = ca-app-pub-7833776278050008~3648496001

// banner id = ca-app-pub-7833776278050008/7747523110

//interstitial unit id = ca-app-pub-7833776278050008/1135186767

//publisher id = Publisher ID: pub-7833776278050008











document.addEventListener('deviceready', onDeviceReady, false);
   


    function onDeviceReady() {
    

admob.initAdmob("ca-app-pub-7833776278050008/7747523110","ca-app-pub-7833776278050008/1135186767");//admob id format ca-app-pub-xxxxxxxxxxxxxxxxxxx/xxxxxxxxxx
admob.showBanner(admob.BannerSize.BANNER,admob.Position.TOP_APP);//show banner at the top of app

var admobParam=new  admob.Params();
        //admobParam.extra={'keyword':"admob phonegame"};
        // admobParam.isForChild=true;
        //admobParam.isTesting=true;
        admob.showBanner(admob.BannerSize.BANNER,admob.Position.TOP_CENTER,admobParam);

admob.showBannerAbsolute(admob.BannerSize.BANNER,0,0);//show banner at absolute position x 0,y 70
    
document.addEventListener(admob.Event.onInterstitialReceive, onInterstitialReceive, false);//show in ad receive event fun need add receive listener
 admob.cacheInterstitial();// load admob Interstitial
 function onInterstitialReceive(message) {//show in ad receive event fun
     admob.showInterstitial();
 }



      };