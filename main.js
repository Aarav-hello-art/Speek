Webcam.set({
    height : 300,
    width : 300,
    img_format : "png",
    png_quality : 90
});

Webcam.attach("camera");

function capture(){
    Webcam.snap(
        function (image){
            document.getElementById("snap").innerHTML = `<img id="cp_img" src= ${image}>`
        }
    )
}

console.log("ml5version :" + ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-hKgiS3PM/model.json",model_loaded)

function model_loaded(){
    console.log("Your model is working")
}

function speak() {
    api = window.speechSynthesis
    speakdata1 = "The first prediction is " + prediction1
    speakdata2 = "The second prediction is" + prediction2
    utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2)
    api.speak(utterthis)
}