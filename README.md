# in-view.ts :eyes:
fork by: https://github.com/camwiegert/in-view

Get notified when a DOM element enters or exits the viewport. A small (~1.9kb gzipped), dependency-free, javascript utility for IE9+.

[camwiegert.github.io/in-view](https://camwiegert.github.io/in-view)

[![Build Status](https://travis-ci.org/camwiegert/in-view.svg?branch=master)](https://travis-ci.org/camwiegert/in-view)
[![npm/in-view](https://img.shields.io/npm/v/in-view.svg?maxAge=2592000)](https://npmjs.com/package/in-view)

![in-view.js](https://camwiegert.github.io/in-view/lib/images/in-view.png)

---

## Installation

```sh
npm install --save in-view-ts
```

---

## Basic Usage

With in-view-ts, you can register handlers that are called when an element **enters** or **exits** the viewport. Each handler receives one element, the one entering or exiting the viewport, as its only argument.

```js
const inview = new InView(document.getElementById('#parent'));
inview.control(document.getElementById('#target')).registry
    .on('enter', () => {
        console.log('test');
    });

const inview = new InView('#parent');
inview.control('#target').registry
    .on('enter', () => {
        console.log('test');
    });
```

---

### API
see: https://github.com/camwiegert/in-view

---

**License** [MIT](https://opensource.org/licenses/MIT)
