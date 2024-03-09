<?php

/**
 * @file
 * Page functions to support theming in the Quartz theme.
 */

use Drupal\node\NodeInterface;

/**
 * Implements hook_preprocess_HOOK() for page.html.twig.
 */
function quartz_preprocess_page(array &$vars) {
  // Define the node.
  $node = \Drupal::routeMatch()->getParameter('node');

  if ($node instanceof NodeInterface) {
    // Check for field_hide_page_title.
    if (
      $node->hasField('field_hide_page_title') &&
      !$node->get('field_hide_page_title')->isEmpty()
    ) {
      // Correctly access the value of the field.
      if ($node->get('field_hide_page_title')->get(0)->value === '1') {
        // If the boolean is checked, remove the standard page title.
        unset($vars['page']['content']['quartz_page_title']);
      }
    }
  }
}

/**
 * Implements hook_preprocess_HOOK() for page.html.twig.
 */
function quartz_page_attachments(array &$attachments) {
  $attachments['#attached']['html_head'][] = [
    [
      '#tag' => 'link',
      '#attributes' => [
        'rel' => 'preconnect',
        'href' => 'https://fonts.googleapis.com',
      ],
    ],
    'preconnect_fonts_googleapis',
  ];

  $attachments['#attached']['html_head'][] = [
    [
      '#tag' => 'link',
      '#attributes' => [
        'rel' => 'preconnect',
        'href' => 'https://fonts.gstatic.com',
        'crossorigin' => '',
      ],
    ],
    'preconnect_fonts_gstatic',
  ];
}
