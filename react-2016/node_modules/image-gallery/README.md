# image-gallery

A straight forward to use, simple image gallery.


## Features

* Automatic image layouting (google images style)
* Lazy loading of full size images (via `data-full-src`)
* Responsive
* Lightbox (optional)

[View Demo](https://rawgit.com/nikku/image-gallery/master/test/test.html).


## Usage

Add the style sheet:

```html
<link rel="stylesheet" href="image-gallery/dist/image-gallery.css">
```

Wrap your images inside a `.image-gallery` container:

```html
<div class="image-gallery" style="max-width: 400px">
  <img src="fixtures/1-small.jpg" data-full-src="fixtures/1-large.jpg">
  <!--
    data-full-src is optional
  -->
  <img src="fixtures/2-small.jpg">
  <!--
    may specify pre-computed dimensions
    via data-dimensions="width,height"
  -->
  <img src="fixtures/3-small.jpg" data-dimensions="400,100" data-full-src="fixtures/3-large.jpg">
</div>
```

Instantiate the gallery for one or more container elements:

```html
<script type="text/javascript">
  var gallery = ImageGallery('.image-gallery', {
    use: [
      ImageGallery.LazyLoading,
      ImageGallery.Responsive
    ]
  });
</script>
```


## Extend (e.g. add Lightbox)

You can easily integrate other components such as [a light box](https://github.com/nikku/image-gallery/blob/master/dist/image-gallery-lightbox.js).


## License

MIT