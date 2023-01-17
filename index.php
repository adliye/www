<!DOCTYPE html>


<?php
session_start();
define('ab139329','OK');
include_once(dirname(__FILE__).'/config.php');
include_once(dirname(__FILE__).'/functions.php');




	$my_direction = my_direction(); ?>
	<script async src="https://api.countapi.xyz/hit/gokhantasci/<?php echo $my_direction ?>?callback=websiteVisits"> </script>
	<?php
	
	include(dirname(__FILE__).'/sayfalar/header/header.php');
	include(dirname(__FILE__).'/sayfalar/navbar/navbar.php');
	if(file_exists(dirname(__FILE__).'/sayfalar/'.$my_direction.'/'.$my_direction.'.php')){
		include(dirname(__FILE__).'/sayfalar/'.$my_direction.'/'.$my_direction.'.php');
	}else{
		include(dirname(__FILE__).'/sayfalar/index/index.php');
	}
	include(dirname(__FILE__).'/sayfalar/footer/footer.php');


exit();