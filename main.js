cat = 0;
cow = 0;
dog = 0;
pig = 0;
animal_sound = "";

function start(){
    navigator.mediaDevices.getUserMedia({audio: true}); 
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sX8c3Vxv1/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("Got Result")
    if (error){
        console.log(error);
    }else{
        console.log(results);

        animal_sound = results[0].label;
        
        incrementCount();
        
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        document.getElementById("number_of_times").innerHTML = 'Detected -'+ results[0].label;
        document.getElementById("result_count").style.color = "rgb(" + r + "," + g + "," + b + ")";
    }
}

function incrementCount(){
    if (animal_sound == "Mooing"){
        cow++;
        updateHTML(cow, "Cow", 'cow.jpeg');
        
    }
    else if (animal_sound == "Meowing"){
        cat++;
        updateHTML(cat, "Cat", 'cat.jpeg');
        
    }
    else if (animal_sound == "Barking"){
        dog++;
        updateHTML(dog, "Dog", 'dog.jpeg');
        
    }
    else if (animal_sound == "Grunting"){
        pig++;
        updateHTML(pig, "Pig", 'pig.jpeg');
        
        
    }
}

function updateHTML(animal, animalName, image){
    document.getElementById("result_count").innerHTML = animal +' times';
    document.getElementById("voice").innerHTML = 'Detected voice is of- ' + animalName;
    document.getElementById("image").src = image;

}