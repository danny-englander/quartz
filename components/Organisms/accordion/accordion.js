/**
 * accordion.js ES6 JS functions.
 *
 * @file
 */
// Always use "use strict";
'use strict';

(function (Drupal, drupalSettings, once) {
  Drupal.behaviors.quartzAccordion = {
    attach: function (context, settings) {
      // Query all accordion containers adding once in the process.
      const accordionContainers = once('accordion-containers', document.querySelectorAll('.accordion-container'));
      // Now loop in case there are more than one on a page.
      for (const accordionContainer of accordionContainers) {
        new Accordion(accordionContainer, {
          duration: 400,
          showMultiple: true,
          onOpen(currentElement) {
          },
        });
      }
    },
  };
  // End functions and behaviors
})(Drupal, drupalSettings, once);

