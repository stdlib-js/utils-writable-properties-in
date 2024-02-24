<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# writablePropertiesIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own and inherited writable property names and [symbols][@stdlib/symbol/ctor].



<section class="usage">

## Usage

```javascript
import writablePropertiesIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-writable-properties-in@esm/index.mjs';
```

#### writablePropertiesIn( obj )

Returns an `array` of an object's own and inherited writable property names and [symbols][@stdlib/symbol/ctor].

```javascript
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs';

var obj = {};

defineProperty( obj, 'a', {
    'configurable': false,
    'enumerable': false,
    'writable': true,
    'value': 'a'
});

var props = writablePropertiesIn( obj );
// returns [ 'a', ... ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs';
import hasSymbolSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@esm/index.mjs';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@esm/index.mjs';
import writablePropertiesIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-writable-properties-in@esm/index.mjs';

var hasSymbols = hasSymbolSupport();

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': true,
        'enumerable': true,
        'writable': false,
        'value': 'b'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'a';
        defineProperty( this, Symbol( 'b' ), {
            'configurable': true,
            'enumerable': true,
            'writable': false,
            'value': 'b'
        });
    }
    return this;
}

Foo.prototype.foo = 'bar';
defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'foo' ) ] = 'bar';
    defineProperty( Foo.prototype, Symbol( 'beep' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'boop'
    });
}

var obj = new Foo();
var props = writablePropertiesIn( obj );
// e.g., returns [ 'a', 'foo', ... ]

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-inherited-writable-properties`][@stdlib/utils/inherited-writable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-writable-properties`][@stdlib/utils/writable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils-properties-in`][@stdlib/utils/properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-writable-properties-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-writable-properties-in

[test-image]: https://github.com/stdlib-js/utils-writable-properties-in/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-writable-properties-in/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-writable-properties-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-writable-properties-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-writable-properties-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-writable-properties-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-writable-properties-in/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-writable-properties-in/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-writable-properties-in/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-writable-properties-in/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-writable-properties-in/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-writable-properties-in/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-writable-properties-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-writable-properties-in/main/LICENSE

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor/tree/esm

<!-- <related-links> -->

[@stdlib/utils/inherited-writable-properties]: https://github.com/stdlib-js/utils-inherited-writable-properties/tree/esm

[@stdlib/utils/writable-properties]: https://github.com/stdlib-js/utils-writable-properties/tree/esm

[@stdlib/utils/properties-in]: https://github.com/stdlib-js/utils-properties-in/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
