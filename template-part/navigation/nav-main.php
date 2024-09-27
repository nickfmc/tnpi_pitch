<nav id="site-navigation" class="c-main-navigation" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <?php
    walked_nav_menu( 'main-menu', 'c-main-menu', array(
        'walker' => new Custom_Menu_Walker()
    ) ); // Adjust using Menus in WordPress Admin ?>
<button id="search-button" aria-label="Open search" aria-expanded="false" aria-controls="search-popup">
    <svg version="1.1" id="main" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="40.844px" height="40.84px" viewBox="0 0 40.844 40.84" enable-background="new 0 0 40.844 40.84" xml:space="preserve">
        <path fill="#FFFFFF" d="M40.844,37.94L40.844,37.94l-8.84-8.837c2.438-3.065,3.896-6.942,3.896-11.154C35.9,8.052,27.85,0,17.951,0
            S0,8.052,0,17.949c0,9.898,8.053,17.95,17.951,17.95c4.213,0,8.088-1.459,11.154-3.896l8.838,8.836v0.001h2.9V37.94L40.844,37.94z
            M4,17.949C4,10.258,10.26,4,17.951,4S31.9,10.258,31.9,17.949c0,3.563-1.344,6.817-3.551,9.285l-1.111,1.113
            c-2.469,2.207-5.723,3.552-9.287,3.552C10.26,31.899,4,25.642,4,17.949z"/>
    </svg>
</button>

<div id="search-popup" role="dialog" aria-hidden="true" inert="true">
  <button type="button" id="close-search-popup" class="c-search-close-button" aria-label="Close search popup" onclick="closeSearchPopup()"><svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="X" transform="matrix(1,0,0,1,-1792,-1792)">
        <use xlink:href="#_Image1" x="1791" y="1791" width="17px" height="16px"/>
    </g>
    <defs>
        <image id="_Image1" width="17px" height="16px" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcklEQVQ4ja3TSwrAMAgE0NH739muCmEyoxbqLh8fiSLwQwQAVFWd62UUAEREJCWXvq+BNy+Pgy10vTrpwgTJbzPSQbZuClFQW3iHKMh2rkPW0SH8Ats1hzDQQgpxNbAQI1MRJXQi2/m5oKSN7QB+nbU5HjwPHBwBDHaXAAAAAElFTkSuQmCC"/>
    </defs>
</svg></button>
  <form role="search" method="get" id="search-form" class="c-search-form" action="<?php echo home_url( '/' ); ?>">
    <div>
      <label for="s" class="u-visually-hidden">Search for:</label>
      <input type="search" id="s" name="s" value="" class="search-input" placeholder="Search..." />
      <button type="submit" id="search-submit" class="search-submit">Search</button>
    </div>
  </form>
</div>
<div class="c-lang-select" role="navigation" aria-label="Language selector">
    <button class="c-lang-select-btn c-lang-select--current" id="lang-en" aria-label="Select English">EN</button>
    <button class="c-lang-select-btn" id="lang-fr" aria-label="Select French">FR</button>
</div>

</nav>
