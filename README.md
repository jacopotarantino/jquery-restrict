# jQuery Restrict

A jQuery plugin to restrict characters in input boxes to a fixed pattern.

## Installation

The preferred method of installation is via Bower.

```
bower install jquery-restrict
```

Then add it to the page after jQuery.

```html
<head>
	<script src='assets/jquery/jquery.min.js'></script>
	<script src='assets/jquery.restrict/jquery.restrict.min.js'></script>
```

## Usage

```javascript
// Makes the input only accept dates in the form of MM/DD/YYYY
var regex = /^[01](\d(\/([0123](\d(\/([12](\d(\d(\d)?)?)?)?)?)?)?)?)?$/;
$('.myCalendarInput').restrict(regex);
```

## License

MIT. Have fun with it!