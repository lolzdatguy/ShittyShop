Sound in java

<!doctype html>
<html>
  <head>
    <title>Audio</title>
  </head>
  <body>

    <script>
      function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
    </script>

    <input type="button" value="PLAY" onclick="play()">
    <audio id="audio" src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>

  </body>
</html>

2. 
@import url('http://fonts.googleapis.com/css?family=Oswald');
    
    body {
      margin: 0;
      padding: 0;
      background-attachment: fixed;
      background-size: cover;
    }
    
    #video-background {
      position: fixed;
      right: 0; 
      bottom: 0;
      min-width: 100%; 
      min-height: 100%;
      width: auto; 
      height: auto;
      z-index: -100;
    }
    <video autoplay="" loop="" class="fillWidth fadeIn animated" poster="https://s3-us-west-2.amazonaws.com/coverr/poster/Traffic-blurred2.jpg" id="video-background">
        <source src="https://www.youtube.com/watch?v=1S4xFl4CD34" type="video/youtube">
    </video>


https://glitch.com/edit/#!/main-page-it?path=index.html%3A59%3A25