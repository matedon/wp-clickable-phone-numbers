<?php
/*
Plugin Name: Clickable Phone Numbers
Plugin URI: https://cjratliff.net
Description: Scans active page and modifies phone number(s) to allow clickable telephone links.
Version: 0.1
Author: CJ Ratliff / A+ Media
Author URI: https://cjratliff.net
*/

// Create Class
class clickable_phone_numbers
{
  // Constructor
  public function __construct()
  {
    add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
  }

  // Styles and Scripts
  public function enqueue_scripts()
  {
    wp_enqueue_script('cpn_main', plugins_url('js/cpn_main.js', __FILE__), array('jquery'), '', true);
  }
}

global $clickable_phone_numbers;
$clickable_phone_numbers = new clickable_phone_numbers();
