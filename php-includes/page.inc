<?php

/**
 * @file
 * Page functions to support theming in the Quartz theme.
 */

use Drupal\node\NodeInterface;

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
