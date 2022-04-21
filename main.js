Prediction1=""
Prediction2=""
Webcam.set({
    width:350,height:300,image_format:"png",png_quality:90
});
addcamera=document.getElementById("camera")
Webcam.attach(addcamera)
function takesnapshot(){
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML="<img id='new_img' src='"+data_url+"'>";    
    });
}
console.log("ml5 version",ml5.version)
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dhiYYzRJf/model.json",modelloaded)
function modelloaded(){
    console.log("modelisloaded")
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="the first prediction is"+Prediction1
    speakdata2="the second prediction is"+Prediction2
    var utter=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utter)
}
speak()