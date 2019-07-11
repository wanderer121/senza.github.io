<?php

if(isset($_POST['send'])){
$city =  strip_tags(trim($_POST['city']));
$size =  strip_tags(trim($_POST['size']));
$email =  strip_tags(trim($_POST['email']));
mail('senza.company@mail.ru', "Заказ", "Размер: ".$size." ". "Город: ". $city." ". "Email/телефон: ". $email , 'senza.corporation@mail.ru');

header('Location: '.$_SERVER['PHP_SELF'].'');



}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<title>Senza</title>
	<link rel="stylesheet" href="senzaS.css">
	<link rel="stylesheet" href="animate.css">
	<script src= "wow.min.js"></script>
	<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
	
	<script>
		 new WOW().init();
	</script>
	
</head>
<body>
	
<div class="cover" id = "coverid"></div>

<div class="head">
	<div class="pic">
		
		<div class="tablen">
		
			<div class="wrap" id = "wrap">
			<img class = "headd" src="assets/slice5.png" alt="">
			</div>

				<img class  = "logo" src="assets/senzz.png" alt="">
			
			

		</div>
		
	</div>
	<div class="div-logo"></div>

 	</div>





<div class="model-photo">
	<div class="table"><img class = "mod" src="assets/DSC_001.jpg" alt="" id = "img"></div></div>


<div class="desc">
	<div class="desc-text " >

		Добро пожаловать на сайт SENZA!</br>
         В этой статье мы подробно расскажем вам о том, что</br>
          представляет из себя механизм magnetic wearing, ответим</br>
         на наиболее интересующие всех вопросы и предоставим общую информации о нашей компании.

	</div>



</div>
	
	

<div class="mainblock" id = "mainblock">
	<div class="text">
	<div class="hh wow fadeInLeft"> Без пуговиц </div>
	<p class = "feature">

		Основной особенностью нашей продукции является отсутствие
		 пуговиц и использование магнитов в качестве креплений.
	</p>
	<div class="png"><div class="table">

		
		<div class="vidde">
		<video preload = 'auto' muted = 'muted' loop class="video" id = "vid6">
			<source src = "assets/band-edit.mp4" >
		</video>
		</div>
		


	</div></div>
	<p class="feature margin">На каждом краю рубашки TO:STRIPES располагаются семь неодимовых магнитов, также  два магнита находятся на каждом из<br> рукавов. Магнитные диски вшиты в прослойку между тканями, поэтому оторвать их не получится.

</p>


	<div class="hh wow fadeInLeft">Удобство</div>

	<p class="feature one">При резких поворотах рубашка не расстегивается: магнитной силы
	 хватает, чтобы даже во время активных действий(бега, <br>например)	 края не расходились. Однако несмотря на это, рубашку можно расстегнуть легким движением руки.
</p>

<p class="feature">Торопясь куда-нибудь, одевали ли вы кофту вместо своей любимой
 рубашки только из-за того, что застегивание пуговиц<br>  занимает 
  слишком много времени? Сцепление всей полосы магнитов
   происходит быстрее, чем надевание расстегнутой<br> рубашки на тело.</p>
   
   <p class="hh">Рубашка на магнитах</p>
   <p class="feature">Мы предстваляем вашему вниманию качественно новый продукт, который сочетает в себе стиль, удобство и комфорт.</p>

<div class="picture">

   <div class="pic2" >

   </a><div class="table">


   	<img id = "shr" class = "shirt"  src="assets/stripes.jpg" alt="">
   	<div class="button-div">
   		<a href="#modal"><div class="button" id= "button">Подробнее</div></a>
   	</div>
   </div>
</div>



<div  class="popup" id ="modale" >

	<a href="" name = "modal"></a>
		<div class="popup-cover" id = "popup-cover"></div>
   		<img id = "close" src="assets/close.png" alt="" class="close">
   		<div class="popup-start">
		<div class="content">


			<div class="sizes">
				<img class = "grey" id = "grey" src="assets/DSC_002.jpg" alt="">
				<form action="" method = "post">
				<div class="buttons">
					<input readonly name = "size" class="sml" id = "s" value = "S">
					<input readonly name = "0" class="sml" id = "m" value = "M">
					<input readonly name = "0" class="sml" id = "l" value = "L">
					
				</div>
				<p class="text-gr">Описание: <br>
									хлопок 100% (батист), <br>
									неодимовые магниты </p>

			</div>
  




<div class="sizes-pic-block">
			<div class="sizes-pic">
				<img class = "grey mobile" id = "grey1" src="assets/DSC_002.jpg" alt="">
				<div class="four-sizes-pic">
					<div class="two">
					<img class = "four-sizes-pic-p" src="assets/DSC_003.jpg" alt="" id = "third">
					<img src="assets/icon3.png" alt="" class="four-sizes-pic-p" id = "fourth">
					</div>
					<div class="two s">
					<img class = "four-sizes-pic-p" src="assets/DSC_004.jpg" alt="" id = "first">
					<img class = "four-sizes-pic-p" src="assets/DSC_005.jpg" alt="" id = "second">
					</div>
				</div>
				<div class="buttons mobile">
					<input readonly name = "size" class="sml" id = "sM" value = "S" >
					<input readonly name = "0" class="sml" id = "mM" value = "M">
					<input readonly name = "0" class="sml" id = "lM" value = "L">
					
				</div>
				<p class="text-gr mobile">Описание: <br>
									хлопок 100% (батист), <br>
									неодимовые магниты </p>

			</div>
			<div class="inputs-wrap">
			<div class="inputs">
			<input maxlength = "30" required placeholder = "Укажите ваш город" class = "city" name = "city" type="text" id = "city">
			<input maxlength = "30" placeholder = "Введите Email или телефон" name = "email" type="text" class="email4" id = "email">
			</div>
			
	</div>
			
			<div class="price-wrap"><p class="price">4500р</p></div>
			
			<div class="button-wrap"><input  type = "submit" class="button2"  id = "send" name ="send" value="Заказать">
				<img src="assets/load.gif" alt="" width="50" height="50" class = "gif" id = "gif">
			</div>
		</form>
			
			</div>




				

		</div>
   </div>
</div>
	
<div class="modal-pic" id = "modal-pic">
				<img id = "close2" src="assets/close.png" alt="" class="close">
				<div class="modal-pic-content" id = "content">
					<img src="assets/DSC_003.jpg" alt="" class="change" id = "change">
				</div>

			</div>
	</div>
</div>

	
		





	</div>
		

	
</div>

   	
   	
<div class="requests">
	<div class="hh black">Вопросы и предложения</div>

	<div class="em">
		<input maxlength = "30" placeholder = "Email или телефон" class = "email" type="text">
	
	</div>


	<textarea maxlength = "300" class = "text-inp" placeholder = "Введите текст..." type="text"></textarea>
	<div class="send-div">
	<div class="send">Отправить</div>
</div>









</div>












<script src = "senzajs.js"  type="text/javascript"></script>

	
</body>
</html>
