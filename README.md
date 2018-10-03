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
// watch window scroll
const inview = new InView();
inview.control(document.getElementById('#target')).registry
    .on('enter', (element) => {
        console.log(element);
    });
```

```js
// watch parent scroll
const inview = new InView(document.getElementById('#parent'));
inview.control(document.getElementById('#target')).registry
    .on('enter', (element) => {
        console.log(element);
    });
```

```js
// watch parent scroll
const inview = new InView('#parent');
inview.control('#target').registry
    .on('enter', (element) => {
        console.log(element);
    });
```

---

### API
see: https://github.com/camwiegert/in-view

---

**License** [MIT](https://opensource.org/licenses/MIT)
