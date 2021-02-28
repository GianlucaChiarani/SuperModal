# SuperModal
A simple and lightweight jQuery plugin that lets you create a beautiful, responsive and fully-customizable window dialog / popup with back button support.

## Compatibility
SuperModal will work with a wide range of browsers. The plugin supports any version of jQuery since 1.7.2. 

The tests are still ongoing. Please report any incompatibilities.

## Installation
First of all, you will need a copy of jQuery framework and Font awesome 5 library (optional, for default icons).

### CDN
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
```

Secondly, you will need to integrate SuperModal script and css.
```
<link rel="stylesheet" href="css/supermodal.css" />
<script type="text/javascript" src="js/supermodal.js"></script>
```

## Basic Usage
The basic usage of SuperModal is pretty easy!

1. Create an element with the modal content and assign it an unique ID and the class supermodal.
```
<div id="mymodal" class="supermodal">
    <div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada est sit amet scelerisque porttitor. Cras in tempus massa. Donec rhoncus feugiat egestas. Cras id lectus facilisis felis vulputate facilisis.</p>
    </div>
</div>
```

2. Add a data-modal attribute containing the ID of content container on the element that will open the modal on click.
```
<div data-modal="mymodal">Click here!</div>
```

3. Call Supermodal Plugin after page load.
```
$(function($) {
    $.supermodal();
});
```
## Options
You can customize the functionality and appearance of modals through a set of general and specific options.
The general options are set like this:
```
$(function($) {
    $.supermodal({
      maxWidth: '1024px',
      maxHeight: '100%'
    });
});
```

It is possible to overwrite the general options by adding `data-modal-[SETTING NAME]` attributes on the open element:
```
<div data-modal="mymodal" data-modal-title="Modal Title" data-modal-maxWidth="1024px" data-modal-maxHeight="100%">Click here!</div>
```

You can use the following options:
| Name  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| backButton  | `Bool`  | `true` | Enable closing the modal with the back button of the browser. |
| maxWidth  | `String`  | `'1024px'`  | max-width of the modal. |
| maxHeight  | `String`  | `'100%'`  | max-height of the modal. |
| background  | `String`  | `'#fff'`  | background property of the modal. |
| color  | `String`  | `''`  | color property of the modal. |
| shadow  | `String`  | `'0 0 60px 10px rgba(0, 0, 0, 0.3)'`  | box-shadow property of the modal. |
| containerBackground | `String`  | 'rgba(0,0,0,0.2)' | background property of the modal container. |
| containerZIndex  | `String`  | `'100'` | z-index property of the modal container.  |
| containerClass | `String` | `''` | Additional custom classes of the modal container. |
| showTitle  | `Bool`  | `true` | Enable the title bar. |
| title  | `String`  | Content ID | Title displayed in the title bar. |
| titleColor  | `String`  | `'#fff'` | color property of the title bar. |
| titleBackground  | `String`  | '#212529' | background property of the title bar. |
| closeButton  | `Bool`  | `true` | Show the closing button. |
| closeButtonIcon  | `String`  | 'fa fa-times' | Close button icon class. |
| lazyLoading | `Bool` | `false` | Enable lazy loading of images in the modal. |
