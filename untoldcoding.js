var i = 0;
var txt1 =
  "Hi APi.....!  <<               Now I wan't to say something to you. <<<                So , Please read everything ...!                                                                           > I know I break your trust I'm sorry  <<                  It wasn't my intention....! <<                           I don't know I hurt you but can feel the pain ...!                                                     > We made a big mistake ..!                     <<want to apologize for the trust I've broken sincerely. I understand the hurt and disappointment my actions may have caused you, and I take full responsibility for it...!                                                     > I never intended for things to turn out this way, and I regret my choices. I respect you ....!                    << Now You are the only person  who can give us a second chance....!                                                             I will always stay like her friend APi I can not loose Fajar. She is a big part of my life, give us a second chance we wil not break your trust. Even Allah said if someone is properly understand its mistake u should need to forgive them .....! |                  <<<< Give us One chance to Prove us ...!   by Hossam";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
