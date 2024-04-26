dog = 0;
lion = 0;
elephant = 0;
birds = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NRv4FBVgy/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("got result");
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("count").innerHTML = "Detected Dog - " + dog + "Detected Lion - " + lion + "Detected Elephant - " + elephant + "Detected Birds - " + birds;
        document.getElementById("result").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("count").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";
        document.getElementById("result").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";

        img = document.getElementById("ear");
        if (results[0].label == "dog") {
            img.src = "dog.jpeg";
            dog = dog + 1;
        }
        else if (results[0].label == "lion") {
            img.src = "lion.webp";
            lion = lion + 1;
        }
        else if (results[0].label == "elephant") {
            img.src = "elephant.jpeg";
            elephant = elephant + 1;
        }
        else if(results[0].label == "birds"){
            img.src = "birds.avif";
            birds = birds + 1;
            }
        else{
        img.src = "ear-removebg-preview.png";
        }
    }
}