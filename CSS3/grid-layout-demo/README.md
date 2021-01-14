## CSS Grid

```scss
.grid-container {
  display: grid;
  /* grid-template-line */
  grid-template-columns: 200px repeat(3, minmax(100px, 1fr));
  grid-template-rows: repeat(4, 1fr);
  grid-template: 200px repeat(3, minmax(100px, 1fr)) / repeat(4, 1fr);
  /* grid-auto-line */
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  /* grid-flow */
  grid-auto-flow: row;
  /* grid-template-areas */
  grid-template-areas:
    "h h h h"
    "sb m m m"
    "sb s1 s2 s3"
    "f f f f";
  /* grid-gap */
  column-gap: 15px;
  row-gap: 15px;
  gap: 15px;
  /* content-alignment */
  justify-content: start;
  align-content: end;
  place-content: end / start;
  /* items-alignment */
  justify-items: start;
  align-items: end;
  place-items: end / start;
}

.grid-items {
  /* grid-column */
  grid-column-start: 1;
  grid-column-end: -1;
  grid-column: 1 / -1;
  /* grid-row */
  grid-row-start: 1;
  grid-row-end: 2;
  grid-row: 1 / 2;
  /* grid-area */
  grid-area: m;
  grid-area: 1 / 1 / span 1 / span 4;
  /* self-alignment */
  justify-self: start;
  align-self: end;
  place-self: end / start;
}

.grid-responsive {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```
