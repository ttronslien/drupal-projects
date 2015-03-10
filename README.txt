DESCRIPTION:
This module adds a plugin to the WYSIWYG editor.
The image title attribute is used to create the image

EXAMPLE:
<img src="/files/example.jpg" title="example caption" class="caption" />
This will result in an image with the caption of 'example caption'

Important:
Only images with the class of 'caption' will be included in processing.

INSTALL:
1. Copy the module folder to your Drupal modules folder
2. Add the css definition: .caption{} to the stylesheet used by your WYWSIWYG editor,
   or perhaps to your theme style.css file.
3. Enable the module in Drupal module administration.
4. After install, go to WYSIQWYG editor and enable the plugin
