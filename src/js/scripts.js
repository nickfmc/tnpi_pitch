/**
 * GutenDevTheme scripts (footer)
 * This file contains any js scripts you want added to the theme's footer. 
 */

// *********************** START CUSTOM JS *********************************

// // grab element for Headroom
// var headroomElement = document.querySelector("#c-page-header");
// console.log(headroomElement);

// // get height of element for Headroom
// var headerHeight = headroomElement.offsetHeight; 
// console.log(headerHeight);

// // construct an instance of Headroom, passing the element
// var headroom = new Headroom(headroomElement, {
//   "offset": headerHeight,
//   "tolerance": 5,
//   "classes": {
//     "initial": "animate__animated",
//     "pinned": "animate__slideInDown",
//     "unpinned": "animate__slideOutUp"
//   }
// });
// headroom.init();

// *********************** END CUSTOM JS *********************************



document.getElementById('open-modal-nav').addEventListener('click', function(){
  document.querySelector('html').classList.add('has-modal-nav-open');
});

document.getElementById('close-modal-nav').addEventListener('click', function(){
  document.querySelector('html').classList.remove('has-modal-nav-open');
});

// Close modal nav when clicking outside of it when it already open
  document.addEventListener('click', function(e){
    var isClickOnButton = e.target.closest('#open-modal-nav') !== null;
    var isClickInsideModal = e.target.closest('.c-modal-nav-wrap') !== null;
    var isModalOpen = document.querySelector('html').classList.contains('has-modal-nav-open');

    if (!isClickOnButton && !isClickInsideModal && isModalOpen) {
      document.querySelector('html').classList.remove('has-modal-nav-open');
    }
  });

    // Close modal nav when pressing the escape key
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') {
        document.querySelector('html').classList.remove('has-modal-nav-open');
      }
    });


     // Trap focus inside the modal nav
  function trapFocus(element) {
    var focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    var firstFocusableElement = focusableElements[0];
    var lastFocusableElement = focusableElements[focusableElements.length - 1];
  
    firstFocusableElement.focus();
  
    element.addEventListener('keydown', function(e) {
      var isTabPressed = e.key === 'Tab' || e.keyCode === 9;
  
      if (!isTabPressed) {
        return; 
      }
  
      if (e.shiftKey) { // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else { // if tab key is pressed
        if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    });
  }
  var modalNavWrap = document.querySelector('.c-modal-nav-wrap');
  trapFocus(modalNavWrap);



// SLIDING VERSION ////////////////////
// Get all the menu items that have a submenu
var menuItems = document.querySelectorAll('.c-mobile-menu .menu-item-has-children');

// Loop through the menu items
menuItems.forEach(function(menuItem) {
  // Get the link inside the menu item
  var link = menuItem.querySelector('a');

  // Clone the link
  var clonedLink = link.cloneNode(true);

  // Get the submenu inside the menu item
  var submenu = menuItem.querySelector('.sub-menu');

  // Insert the cloned link at the top of the submenu
  submenu.insertBefore(clonedLink, submenu.firstChild);

  // Add a click event listener to the original link
  link.addEventListener('click', function(event) {
    // Prevent the link from navigating to the href
    event.preventDefault();

    // Add the 'open' class to the submenu
    submenu.classList.add('open');
  });

  // Add a back button to the submenu
  var backButton = document.createElement('button');
  backButton.textContent = 'Back';
  backButton.addEventListener('click', function() {
    // Remove the 'open' class from the submenu
    submenu.classList.remove('open');
  });
  submenu.insertBefore(backButton, submenu.firstChild);
});
// SLIDING VERSION ////////////////////



// // ACCORDION VERSION ////////////////////
// // Get all the menu items that have a submenu
// var menuItems = document.querySelectorAll('.c-mobile-menu .menu-item-has-children');

// // Loop through the menu items
// menuItems.forEach(function(menuItem) {
//   // Get the link inside the menu item
//   var link = menuItem.querySelector('a');

//   // Clone the link
//   var clonedLink = link.cloneNode(true);

//   // Add 'Overview' to the cloned link text
//   clonedLink.textContent += ' Overview';

//   // Get the submenu inside the menu item
//   var submenu = menuItem.querySelector('.sub-menu');

//   // Insert the cloned link at the top of the submenu
//   submenu.insertBefore(clonedLink, submenu.firstChild);

//   // Add a click event listener to the original link
//   link.addEventListener('click', function(event) {
//     // Prevent the link from navigating to the href
//     event.preventDefault();

//     // Close all other menu items
//     menuItems.forEach(function(otherMenuItem) {
//       if (otherMenuItem !== menuItem) {
//         otherMenuItem.classList.remove('is-open');
//         var otherSubmenu = otherMenuItem.querySelector('.sub-menu');
//         otherSubmenu.style.height = null;
//         otherSubmenu.classList.remove('open');
//       }
//     });

//     // Toggle the 'open' class on the submenu
//     submenu.classList.toggle('open');

//     // Toggle the 'is-open' class on the menu item
//     menuItem.classList.toggle('is-open');

//     // If the submenu is open, set its height to its scrollHeight
//     if (submenu.classList.contains('open')) {
//       submenu.style.height = submenu.scrollHeight + 'px';
//     } else {
//       submenu.style.height = null;
//     }
//   });
// });
// // ACCORDION VERSION ////////////////////







// *********************** START CUSTOM JQUERY DOC READY SCRIPTS *******************************
jQuery( document ).ready(function( $ ) {

   // get Template URL
   var templateUrl = object_name.templateUrl;
   

  //  $('#mobile-nav').hcOffcanvasNav({
  //   disableAt: 1024,
  //   width: 280,
  //   customToggle: $('.toggle'),
  //    pushContent: '.menu-slide',
  //   levelTitles: true,
  //   position: 'right',
  //   levelOpen: 'expand',
  //   navTitle: $('<div class="c-mobile-menu-header"><a href="/"><img src="'+ templateUrl + '/img/logo.svg"></a></div>'),
  //   levelTitleAsBack: true
  // });


  // modal menu init ----------------------------------
  // var modal_menu = jQuery("#c-modal-nav-button").animatedModal({
  //   modalTarget: 'modal-navigation',
  //   animatedIn: 'slideInDown',
  //   animatedOut: 'slideOutUp',
  //   animationDuration: '0.40s',
  //   color: '#dedede',
  //   afterClose: function() {
  //     $( 'body, html' ).css({ 'overflow': '' });
  //   }
  // });

  // // get last and current hash + update on hash change
  // var currentHash = function() {
  //   return location.hash.replace(/^#/, '')
  // }
  // var last_hash
  // var hash = currentHash()
  // $(window).bind('hashchange', function(event) {
  //   last_hash = hash;
  //   hash = currentHash();
  // });

  // enable back/foward to close/open modal --------------------------
  // $("#c-modal-nav-button").on('click', function(){ window.location.href = ensureHash("#menu"); });
  // function ensureHash(newHash) {
  //   if (window.location.hash) {
  //     return window.location.href.substring(0, window.location.href.lastIndexOf(window.location.hash)) + newHash;
  //   }
  //   return window.location.hash + newHash;
  // }
  // // if back button is pressed, close the modal
  // $(window).on('hashchange', function (event) {
  //   if (last_hash == 'menu' && hash == '') {
  //     modal_menu.close();
  //     history.replaceState('', document.title, window.location.pathname);
  //   } // if forward button, open the modal
  //   else if (window.location.hash == "#menu"){
  //     modal_menu.open();
  //   }
  // });

  // // if close button is clicked, clear the #menu hash added above
  // $('.close-modal-navigation').on('click', function (e) {
  //   history.replaceState('', document.title, window.location.pathname);
  // });

  // // close modal menu if esc key is used ------------------------
  // $(document).keyup(function(ev){
  //   if(ev.keyCode == 27 && hash == 'menu') {
  //     window.history.back();
  //   }
  // });


  // Magnific as menu popup
  // MENU POPUP
  // $('#c-modal-nav-button').magnificPopup({
  //   type: 'inline',
  //   removalDelay: 700, //delay removal by X to allow out-animation
  //   showCloseBtn: false,
  //   closeOnBgClick: false,
  //   autoFocusLast: false,
  //   fixedContentPos: false, 
  //   fixedContentPos: true,
  //   callbacks: {
  //     beforeOpen: function() {
  //        this.st.mainClass = 'mfp-move-from-side menu-popup';
  //        $('body').addClass('mfp-active');
  //     },
  //     open: function() { 
  //       $('#close-modal, .close-modal-navigation').on('click',function(event){
  //         event.preventDefault();
  //         $.magnificPopup.close(); 
  //       }); 
  //   },
  //   beforeClose: function() {
  //   $('body').removeClass('mfp-active');
  // }
  //   },
  //   midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  // });

});
// *********************** END CUSTOM JQUERY DOC READY SCRIPTS *********************************
