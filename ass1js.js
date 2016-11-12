$(document).ready(function(){
    var TheTop = document.getElementById("top");
    var TheMiddle = document.getElementById("middle");
    var TheBottom = document.getElementById("bottom");
    
    $.ajax({ // aka asynchronous JavaScript and XML
        url:"top.html",
        dataType:"html",
        success:function(resp){
            // if successful, come back with a response
            console.log(resp);
            TheTop.innerHTML = resp;
            
            var myPPButton = document.getElementById("ppbutton");
            var myProfilePic = document.getElementsByClassName("profilepic")[0];
            
            var myWidth = 100;
            
            myPPButton.onclick = function(){
                myProfilePic.style.width = myWidth + "%";
                myWidth = Math.round(Math.random()*100);
            } 
        }
    });
    
    $.ajax({ // aka asynchronous JavaScript and XML
        url:"middle.html",
        dataType:"html",
        success:function(resp){
            // if successful, come back with a response
            console.log(resp);
            TheMiddle.innerHTML = resp;
            
            var myColourButton = document.getElementById("colourbutton");
            var myBiosquare = document.getElementById("biosquare");
            var AddSizeBCITButton = document.getElementById("bigbcitbutton");
            var DecreaseSizeBCITButton = document.getElementById("smallbcitbutton");
            var myBCITPic = document.getElementsByClassName("images5")[2];

            var FirstPic = document.getElementsByClassName("images5")[0];
            var SecondPic = document.getElementsByClassName("images5")[1];
            var FourthPic = document.getElementsByClassName("images5")[3];
            var FifthPic = document.getElementsByClassName("images5")[4];

            var ActivateBSButton = document.getElementById("bootstrapbutton");
            // max 12; lg = 2*5 / md = 3*5 / sm = 4*5 / xs = 5*5
            var BootStrapClass = "images5 col-xs-5 col-sm-4 col-md-3 col-lg-2";

            var r = 0;
            var g = 0;
            var b = 0;
            
            var BCITWidth = 17;

            // picture sizes changes by 1200px / 992px / 768px width
            ActivateBSButton.onclick = function(){
                FirstPic.className = BootStrapClass;
                SecondPic.className = BootStrapClass;
                myBCITPic.className = BootStrapClass;
                FourthPic.className = BootStrapClass;
                FifthPic.className = BootStrapClass;
            }

            myColourButton.onclick = function(){
                myBiosquare.style.backgroundColor = 
                "rgb("+r+","+g+","+b+")";
                r = Math.round(Math.random()*255);
                g = Math.round(Math.random()*255);
                b = Math.round(Math.random()*255);
            }
            
            AddSizeBCITButton.onclick = function(){
                BCITWidth = BCITWidth + 1
                myBCITPic.style.width = BCITWidth + "%";
            }

            DecreaseSizeBCITButton.onclick = function(){
                BCITWidth = BCITWidth - 1
                myBCITPic.style.width = BCITWidth + "%";
            }
        }
    });
    
    $.ajax({ // aka asynchronous JavaScript and XML
        url:"bottom.html",
        dataType:"html",
        success:function(resp){
            // if successful, come back with a response
            console.log(resp);
            TheBottom.innerHTML = resp;
            
            var myBannerButton = document.getElementById("bannerbutton");
            var myBannerImage = document.getElementById("part5");

            var NewBridgePic = "url(https://wallpaperscraft.com/image/bridge_sunset_evening_water_san_francisco_california_59203_1280x800.jpg)";
            
            myBannerButton.onclick = function(){
                myBannerImage.style.backgroundImage = NewBridgePic;
            } 
        }
    });
}); 