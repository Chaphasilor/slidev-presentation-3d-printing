---
# try also 'default' to start simple
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
# https://sli.dev/custom/highlighters.html
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# Welcome to Slidev

Presentation slides for developers

---

<toc/>

---

# What is 3D Printing?

<tabler-heart/>

<!--
Here is another comment.
-->

---

# How does it work?

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# What do we need?

- 3D Object
- Slicing Software
- 3D Printer

---

# Getting 3D Objects

- Use pre-existing ones
  - <printables.com>
  - <thingiverse.com>
- Create a custom one

<v-clicks>

- like this

</v-clicks>

<!-- <showcase-3mf class="w-full h-96 opacity-0 transition-all duration-500" :class="{'opacity-100': $slidev.nav.clicks > 0}"/> -->
<showcase-3mf-new 
  :model="`/3d models/Gear.3mf`"
  :color="`#ee8833`"
  :position="[0, 0, 0]"
  :rotation="[-Math.PI/8, Math.PI/8, Math.PI/4]"
  :scale="0.75"
  :width="800" 
  :height="500"
  class="absolute top-0 opacity-0 right-0 m-6 transition-all duration-500"
  :class="{'opacity-100': $slidev.nav.clicks > 0}"
/>
<showcase-3mf-new 
  :model="`/3d models/Hair Dryer Addon v17.3mf`"
  :color="`#ff5858`"
  :brightness="25"
  :position="[25, 2, 0]"
  :rotation="[Math.PI/(-2 - 0.5), Math.PI/16, 0]"
  :scale="0.2" 
  :width="800" 
  :height="500"
  class="absolute top-0 opacity-0 right-0 m-6 transition-all duration-500"
  :class="{'opacity-100': $slidev.nav.clicks > 0}"
/>

---

# Computer-Aided Design (CAD)


---

# OpenSCAD

Use code snippets and get the highlighting directly![^1]

```ts {all|2|1-6|9|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

<arrow v-click="3" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" />

[^1]: [Learn More](https://sli.dev/guide/syntax.html#line-highlighting)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Fusion 360

---

# Slicing Software (Slicers)

- Ultimaker Cura
- PrusaSlicer
- Chitubox

---

# Printers

- Prusa
- Creality
- Ultimaker
- Voron

<!-- Carousel here? -->

---

# Printing Workflow

---

## Preparing the 3D Object

<!-- Live OpenSCAD demo? -->

## Slicing the file

<!-- Cura 5 -->

## Printing!

<!-- Timelapse of print with explanations? v-click to start next segment? -->

---

# Use Cases

---

## Examples

---

# Common Problems & Solutions


---
src: ./pages/multiple-entries.md
hide: false
---
