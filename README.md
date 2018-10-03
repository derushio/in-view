# in-view.ts :eyes:
fork by: https://github.com/camwiegert/in-view

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
