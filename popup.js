var FBport = chrome.extension.connect(
    {
        name: "popup-Background"
    }
)

const  FE = document.querySelector("#fbext");
FE.addEventListener("submit" , function() {
    var t=document.querySelector("#fb").value;
    console.log("t", t)
   
chrome.tabs.query(
    {
        active: true,
        currentWindow: true
    },
    function(tabs) {
        var auto= {
            action: "startAutoliker",
            liked : {
                time: t,
                tabID: tabs[0].id
            }
        };
        sendRequest(auto);
      }
      )        
    }
)





const sendRequest = (data) => {
    try {
        FBport.postMessage(data);
    }
    catch(ext) {
        alert("please reload ");
    }
}