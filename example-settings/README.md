# Example settings

First make sure that you have the latest stable version of Lando installed from [github.com/lando/lando/releases](https://github.com/lando/lando/releases). Note each release of Lando comes with its own corresponding version of Docker.

## .example-lando.yml
Rename this to `.lando.yml` and put in the root of your project. As of this writing, `php 8.2` is being used with Drupal 10.2.

## composer.json
This is an opinionated version of composer.json that I am using for my site build. It may not necessarily align with your content strategy but as mentioned, this theme is meant to be entity agnostic. See the main readme for more info.

## example.settings.local.php
1. Copy this file, rename to `settings.local.php`, and place it in `[your-webroot]/sites/default`. Note, webroot is typically either `web` or `docroot`.
1. Add this line in your file `$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/default/localdev.services.yml';`

## example.localdev.services.yml
Copy this file, rename to `localdev.services.yml` and place it in `[your-webroot]sites/default` as per the above instructions. Do not commit this file to git as it will have a custom CORS policy in it so as to connect Storybook and Laravel Mix to Drupal.

## storybook.sh
Place this file at `.lando/build/storybook.sh`

## watch.sh
Place this file at `.lando/build/watch.sh`

## php.ini
Place this file at `.lando/config/php.ini`


