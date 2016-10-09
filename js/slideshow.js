/**
 * Created by ruben on 09.10.16.
 */
$(function(){


    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDUXsOJWE21wLpbMZXxtSictrAaEkbicLg",
        authDomain: "rebecca-und-ruben.firebaseapp.com",
        databaseURL: "https://rebecca-und-ruben.firebaseio.com",
        storageBucket: "rebecca-und-ruben.appspot.com",
        messagingSenderId: "196803535290"
    };
    firebase.initializeApp(config);

    var storage = firebase.storage();
    var pathReference = storage.ref('images');

    var images = [
        'IMG_6363.JPG',
        'IMG_6386.JPG',
        'IMG_6404.JPG',
        'IMG_6418.JPG',
        'IMG_6495.JPG'
    ];

    var count = 0;

    $.each(images, function (index, value) {
       console.log(index, value);

        pathReference.child(value).getDownloadURL().then(function(url) {
            console.log('got url', url);
            $( "#slides" ).append( '<img src="' + url + '">');
            // Get the download URL for 'images/stars.jpg'
            // This can be inserted into an <img> tag
            // This can also be downloaded directly

            count ++;

            if(count >= images.length){
                $("#slides").slidesjs({
                    width: 940
                });
            }
        }).catch(function(error) {
            console.error(error);
            // Handle any errors
        });
    });



    console.log(firebase, pathReference);
});