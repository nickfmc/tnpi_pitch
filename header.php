<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  
  <?php // Are you using REAL FAVICON GENERATOR!? You should. If so...  ?>
  <?php // Put generated code in favicon-head.php file; then uncomment line below ?>
  <?php // get_template_part( 'template-part/favicon-head' ); ?>

  <?php // other html head stuff (before WP/theme scripts are loaded) ------- ?>

  <?php wp_head(); // wordpress head functions -- DONOTREMOVE ?>

  <?php // START Google Analytics here ?>
  <?php // END Analytics ?>
</head>

<body <?php body_class(pretty_body_class()); ?> itemscope itemtype="https://schema.org/WebPage">

  <header id="c-page-header" class="o-section c-page-header" role="banner" itemscope itemtype="https://schema.org/WPHeader">
    <div class="o-wrapper-wide  u-relative">
      <?php get_template_part( 'template-part/header/logo' ); ?>
      <?php get_template_part( 'template-part/navigation/nav-main' ); ?>
      <?php get_template_part( 'template-part/navigation/nav-tertiary' ); ?>
      <!-- <div class="c-modal-nav-button-wrap">
        <a class="toggle hc-nav-trigger mobile-nav" href="#" role="button" aria-label="Open Menu" aria-controls="hc-nav-1" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>
        </a>
      </div> -->

      <div class="c-cl-mobile-nav">
        <button href="#" id="open-modal-nav" class="c-modal-nav-button" aria-haspopup="dialog" aria-label="Open menu">
          <svg width="100%" height="100%" viewBox="0 0 12 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <path d="M0,0.5C0,0.226 0.226,0 0.5,0L11.5,0C11.774,0 12,0.226 12,0.5C12,0.774 11.774,1 11.5,1L0.5,1C0.226,1 0,0.774 0,0.5ZM0,4.5C0,4.226 0.226,4 0.5,4L11.5,4C11.774,4 12,4.226 12,4.5C12,4.774 11.774,5 11.5,5L0.5,5C0.226,5 0,4.774 0,4.5ZM0,8.5C0,8.226 0.226,8 0.5,8L11.5,8C11.774,8 12,8.226 12,8.5C12,8.774 11.774,9 11.5,9L0.5,9C0.226,9 0,8.774 0,8.5Z" style="fill-rule:nonzero;"/>
          </svg>
          </button>
        
        <div class="x-body-wrapper"></div>
          <div id="modal-nav-wrap" class="c-modal-nav-wrap" tabindex="-1">
            <button id="close-modal-nav" class="c-close-modal-nav" aria-label="Close menu">
              <svg width="100%" height="100%" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <path d="M6.363,4.95L11.313,0L12.728,1.415L7.778,6.365L12.728,11.315L11.313,12.729L6.363,7.779L1.413,12.729L0,11.314L4.95,6.364L0,1.414L1.413,0.002L6.363,4.952L6.363,4.95Z" style="fill-rule:nonzero;"/>
              </svg>
            </button>
            <nav class="c-modal-nav" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
            <div class="c-modal-nav-header">
              <div class="c-modal-nav-logo">
                <a href="/" rel="nofollow">
                  <img src="<?php bloginfo('template_url') ?>/img/logo.svg" alt="<?php bloginfo('name'); ?>" />
                </a>
              </div> <!-- /c-main-logo -->
            </div>
              <?php  gdt_nav_menu( 'mobile-menu', 'c-mobile-menu' ); // Adjust using Menus in WordPress Admin ?>
            </nav>
          </div> <!-- /modal-nav-wrap -->
      </div>
    </div>
    <!-- /o-wrapper-wide-->
  </header> 
  <!-- /c-page-header -->
