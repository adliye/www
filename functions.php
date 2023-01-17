<?php
if (!defined('ab139329')) { die(); }

function my_direction(){
	$return = 'index';
	$uri = $_SERVER['REQUEST_URI'];
	$exp = explode("/",$uri);
	if(isset($exp[1])){
		$exp2 = explode("?",$exp[1]);
		if(ctype_alnum($exp2[0])){
			$return = $exp2[0];
		}
	}
	return $return;
}

