const fullScreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement || document.msFullScreenElement 

const div = document.querySelector('app')

 document.querySelector("el-icon-full-screen").onclick = function () {
 if(fullScreen) { // 取消全屏
    if (document.cancleFullScreen) {
      document.cancleFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if(document.mozCacelFullScreen) {
      document.mozCacelFullScreen();
    } else if(document.msCanclFullScreen) {
      document.msCanclFullScreen();
    }
   } else {  // 申请全屏
       if (div.requestFullScreen) {
        div.requestFullScreen()
      } else if (div.webkitRequestFullScreen) {
        div.webkitRequestFullScreen()
      } else if (div.mozRequestFullScreen) {
        div.mozRequestFullScreen()
      } else if (div.msRequestFullScreen) {
        div.msRequestFullScreen()
      }
   }
}