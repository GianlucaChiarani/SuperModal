# SuperModal
A simple and lightweight jQuery plugin that lets you create a beautiful, responsive and fully-customizable window dialog with back button support.

[Demo](https://codepen.io/GianlucaChiarani/pen/LYbdOzZ)

## Compatibility
SuperModal will work with a wide range of modern browsers. The plugin supports any version of jQuery since 1.7.2. 

The tests are still ongoing. Please report any incompatibilities.

## Installation
First of all, you will need a copy of jQuery framework and Font awesome 5 library (optional, for default icons):
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
```

Secondly, you will need to integrate SuperModal script and css:
```
<link rel="stylesheet" href="css/supermodal.css" />
<script type="text/javascript" src="js/supermodal.js"></script>
```
### CDN
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/GianlucaChiarani/SuperModal@0.90/supermodal.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/GianlucaChiarani/SuperModal@0.90/supermodal.js"></script>
```

## Basic Usage
The basic usage of SuperModal is pretty easy!

1. Create an element with the modal content and assign it an unique ID and the class `supermodal`:
```
<div id="mymodal" class="supermodal">
    <div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada est sit amet scelerisque porttitor. Cras in tempus massa. Donec rhoncus feugiat egestas. Cras id lectus facilisis felis vulputate facilisis.</p>
    </div>
</div>
```

2. Add a `data-modal` attribute containing the ID of content container on the element that will open the modal on click:
```
<div data-modal="mymodal">Click here!</div>
```

3. Call Supermodal Plugin after page load:
```
$(function($) {
    $.supermodal();
});
```

## Options
It is possible to customize the behavior and appearance of the modals by setting general or specific options.

The general options can be set in the supermodal function:
```
$(function($) {
    $.supermodal({
      maxWidth: '1024px',
      maxHeight: '300px'
    });
});
```

It is possible to overwrite the general options by adding `data-modal-[OPTION NAME]` attributes on the open element:
```
<div data-modal="mymodal" data-modal-title="Modal Title" data-modal-maxWidth="1024px" data-modal-maxHeight="300px">Click here!</div>
```

The following options are available:
| Name  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| backButton  | `Bool`  | `true` | Enable closing the modal with the back button of the browser. |
| maxWidth  | `String`  | `'1024px'`  | `max-width` of the modal. |
| maxHeight  | `String`  | `'100%'`  | `max-height` of the modal. |
| background  | `String`  | `'#fff'`  | `background` of the modal. |
| color  | `String`  | `''`  | `color` of the modal. |
| shadow  | `String`  | `'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'`  | `box-shadow` of the modal. |
| containerBackground | `String`  | `'rgba(0,0,0,0.2)'` | `background` of the modal container. |
| containerZIndex  | `String`  | `'1000'` | `z-index` of the modal container.  |
| containerClass | `String` | `''` | Additional custom classes of the modal container. |
| showTitle  | `Bool`  | `true` | Enable the title bar. |
| title  | `String`  | Content ID | Title displayed in the title bar. |
| titleColor  | `String`  | `'#fff'` | `color` of the title bar. |
| titleBackground  | `String`  | `'#212529'` | `background` of the title bar. |
| closeButton  | `Bool`  | `true` | Show the closing button. |
| closeButtonIcon  | `String`  | `'fa fa-times'` | Close button icon class (e.g. Font Awesome, Bootstrap icons). |
| lazyLoading | `Bool` | `false` | Enable lazy loading of images on open. |
