function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassified('https://teachablemachine.withgoogle.com/models/[...]')
}

function modelReady() {
    classifier.classify(gotResults);
}



function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        cat = 0;
        dog = 0;

        document.getElementById("result_label").innerHTML = 'Voice is of' + 
        results[0].label;


        img = document.getElementById("gifs");

        if (results[0].label == "Meow"){
            img.src = 'Cat.jpg';
            cat = cat + 1;
            document.getElementById("result_label").innerHTML = 'Voice is of cat';

        } 
        
        else if (results[0].label == "Bark"){
            img.src = 'Dog.jpg';
            dog = dog + 1;
            document.getElementById("result_label").innerHTML = 'Voice is of dog';
        }
    }
}
