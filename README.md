# Quartz, a Drupal Starterkit based theme using Single Directory Components

This theme is for Drupal *Single Directory Components* which is now in Drupal 10.1 core. It also uses these contrib modules and other libraries. Most of front-end heavy lifting happens in the theme using a [CL Server patch](https://www.drupal.org/project/cl_server/issues/3369045) so that Storybook and CL server work entirely within the theme.

## Specs
- Drupal 10.2.2
- Storybook v7.6.10
- Laravel Mix 6.0.49
- Node JS v18
- Docker 4.23.0 (120376) with VirtioFS and Kubernetes enabled
- Lando 3.20.8
- PHP 8.2
- MariaDB 10.3.27-MariaDB
- Composer 2.6.6

## Key points
1. SDC templates are entity agnostic, so it's "bring your own content" from Drupal and map it to a an SDC template. So whether you are using custom blocks, Paragraphs, ECK, Nodes as Micro-content, or some other custom entity type the same SDC template will work for any of these.
1. Vanilla CSS with PostCSS for missing features via Laravel Mix, a wrapper for Webpack running inside Lando.
1. Storybook server for theming and component presentation independent of Drupal, also runs inside Lando.

## Overview
1. quartz, a custom Starterkit theme which houses the components
1. Storybook, which makes theming a component easier as you do not need to connect it to data in Drupal
1. A Drupal / Storybook bridge via its NPM working inside Lando, `"@lullabot/storybook-drupal-addon`
1. Laravel Mix working inside Lando to compile CSS using PostCSS. `web/themes/custom/quartz/webpack.mix.js` This is more secure, more up to date, and faster than Gulp.

## Get Started
1. Add this theme to a Drupal 10 Lando / composer based project
1. Read about the [example files](example-settings/) to get up and running with the correct Lando configs or use them as a guide for an existing project.
1. Once you are set with Lando and all other settings as per the above, from the root of the project, run `lando start`.
1. Use your existing site database or inititalize a new drupal site using the Lando command
1. Run `lando drush uli` - Make sure you can login as admin
1. Now map your own content to the Single Directory components. For examples of this, you can look at these templates, `block--inline-block--accordion.html.twig` and `block--inline-block--accordion.html.twig`. These map Drupal content to the SDC entity agnostic templates,`accordion.twig`and `accordion-item.twig` respectively.
1. Run `lando storybook`- This will start storybook in the theme and you can access it at `http://localhost:9210/`
1. Run `lando watch` - This will start Laravel Mix watching for CSS changes and stylelint the CSS at `http://localhost:3000/`

## Debugging
It would be ideal to get up and running with Xdebug whether you are using PHPStorm or VS Code. You can also use `{{ drupal_breakpoint() }}` to use Xdebug inside twig templates which comes in handy when debugging components.

If you need more info on how to get up and running with Xdebug, see Lando's documentation for PHPStorm and VS Code.

## Key contrib modules
1. <del>[Single Directory Components | Drupal.org](https://www.drupal.org/project/sdc) Note, this is now in Drupal 10.1 core so no need to install this on its own anymore</del>
1. [Component Libraries: Theme Server](https://www.drupal.org/project/cl_server) - Lets you use component libraries, like Storybook, in your Drupal project, without Twig.js!
1. [No Markup](https://www.drupal.org/project/nomarkup) - Presents a custom field formatter to remove field markup which is crucial to keep component markup intact. This module us highly recommended for SDC work
1. [Twig Tweak](https://www.drupal.org/project/twig_tweak) - Provides a Twig extension with some useful functions and filters that can improve development experience as well as allowing Xdebug to be used in Twig templates

## NPMs
See `web/themes/custom/quartz/package.json` for a list of NPMs used on this project.
Of note is [Lullabot/storybook-drupal-addon: Storybook addon to facilitate integrating Storybook with Drupal projects.](https://github.com/lullabot/storybook-drupal-addon)
which connects Storybook to Drupal.

## Issues of note
- [CL server unable to render the stories when storybook not installed at root of Drupal Installation](https://www.drupal.org/project/cl_server/issues/3369045)
There is an MR open for this and composer has been updated to pull in the changes.
This issue is still in progress so expect there to be changes. `"drupal/cl_server": "dev-3369045-cl-server-unable",`

## Videos
- [Single Directory Components in Core: Pittsburgh 2023 - YouTube](https://www.youtube.com/watch?v=gDd7pCK9KsA&list=PLpeDXSh4nHjTZrlCUtl_xp87F3plT7czE&index=81)
- [Drupal: Converting a component to Single Directory Components (SDC) - YouTube](https://www.youtube.com/watch?v=DbpZOhiq_Ho)
- [Ignite Our Approach to Design Systems and Faster Site Building: Pittsburgh 2023 - YouTube](https://www.youtube.com/watch?v=tMQYT53Dzdw&list=PLpeDXSh4nHjTZrlCUtl_xp87F3plT7czE&index=7)
- [Components as Site Building Tools](https://video.mateuaguilo.com/w/sC5nv52GLQrPHYcjBUvEeN)

## @TODO
- <del>Get storybook working in Lando.</del>
- <del>Get [Laravel Mix](https://laravel-mix.com/) working in Lando. This will replace gulp.</del>
- <del>Watch for Twig changes</del>
- add a JS watch in `webpack.mix.js`.
- Create a theme composer.json file so it can be pulled in to other projects via Composer
- Create a theme config so that blocks are placed appropriately upon theme activation
- Create more components!
  - Button link modifiers and states
  - Card with modifiers
  - CTA modifiers
  - Hero (in process)
