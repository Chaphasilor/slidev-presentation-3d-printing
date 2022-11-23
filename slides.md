---
theme: ./theme
background: https://source.unsplash.com/collection/94734566/1920x1080
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: 3D-Printing @ EEL
---

# 3D-Printing @ EEL

<!--
picture with Ultimaker and Benchies?
-->
---

# Overview

<toc/>

<style>
* {
    @apply text-xs;
}
</style>

---

# What is 3D Printing?

- A type of *additive manufacturing*
  - Parts are created layer-by-layer
- Can be more efficient and versatile than subtractive manufacturing (e.g. machining)
  - But usually at the cost of structural strength
- Due to the nature of the process, it is often less reliable than other manufacturing techniques

<!--
Here is another comment.
-->

---
layout: image-bottom
image: /3d-print_workflow.webp
attribution: https://www.3dmakerengineering.com/blogs/3d-printing/how-3d-printing-works
---

# How does it work?

- Take a 3D object
- Split the part into many layers of equal thickness
- "Build" the print layer by layer
  - Details on next slide!

---

# How does it work? - cont.

## FFF Printing

- Use filament or powder as the material source
- Melt the material at the correct position and let it cool off
  - Next layer can be placed on top as soon as the previous layer has solidified enough
- todo image

---

# How does it work? - cont.

## SLA Printing

- Resin
- Screen with UV backlight
- Harden resin layer by layer
- todo image

---

# What do we need?

<ul class="mt-12 flex -mx-10 flex-row justify-around items-end">

<li v-click="1" class="w-full block">
  <!-- <img class="" src="https://source.unsplash.com/collection/94734566/800x800" /> -->
  <showcase-3mf-new 
    class=""
    :model="`/3d models/3DBenchy.3mf`"
    :color="`#ee8833`"
    :brightness="0.5"
    :position="[0, -7, 0]"
    :rotation="[-Math.PI/2 + Math.PI/8, 0, 0]"
    :scale="0.3"
    :width="128" 
    :height="128"
  />
  <span class="w-full inline-block text-center"><tabler-3d-cube-sphere/> 3D Object</span>
</li>
<li v-click="2" class="w-full block">
  <img class="mb-10 rounded-md" src="/cura_benchy.png" />
  <span class="w-full inline-block text-center"><tabler-slice/> Slicing Software</span>
</li>
<li v-click="3" class="w-full block overflow-hidden">
  <img class="aspect-square" src="/Ultimaker-S5-desktop-3D-printer-hero.webp" />
  <span class="w-full inline-block text-center"><tabler-printer/> 3D Printer</span>
</li>

</ul>

<!-- <v-clicks>

- 3D Object
- Slicing Software
- 3D Printer

</v-clicks> -->

<!-- Animation where the three sections slide in from the right and squish together -->
---
clicks: 3
---

# Getting 3D Objects

<v-clicks>

- Use pre-existing ones
  - <https://printables.com>
  - <https://thingiverse.com>
- Create custom ones

</v-clicks>

<!-- <showcase-3mf class="w-full h-96 opacity-0 transition-all duration-500" :class="{'opacity-100': $slidev.nav.clicks > 0}"/> -->
<!-- TODO add delay for showing objects instead of clicks? -->
<showcase-3mf-new
  v-if="$slidev.nav.clicks > 1"
  :model="`/3d models/Gear.3mf`"
  :color="`#ee8833`"
  :position="[3, 4, 0]"
  :rotation="[-Math.PI/8, Math.PI/8, Math.PI/4]"
  :scale="0.15"
  :width="800" 
  :height="500"
  class="absolute top-0 opacity-100 right-0 m-6 transition-all duration-0 ease-in-out"
/>
  <!-- :class="{'opacity-100': $slidev.nav.clicks > 1}" -->
  <!-- TODO add delay for showing objects instead of clicks? -->
<showcase-3mf-new
  v-if="$slidev.nav.clicks > 2"
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :position="[17, 7, 0]"
  :rotation="[Math.PI/(-4.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.05" 
  :width="800" 
  :height="500"
  class="absolute top-0 opacity-100 right-0 m-6 transition-all duration-0 ease-in-out"
/>
  <!-- :class="{'opacity-100': $slidev.nav.clicks > 2}" -->

---

# Computer-Aided Design (CAD)

- Tools for constructing 3D objects
- Either done visually or programmatically
- Works by specifying geometric shapes with certain sizes and positions
  - Shapes are combined into a single object
  - Modifications (rounding, cuts, etc.) can be added at the end
- Finished object is rendered and exported
- Alternative: 3D scanning existing objects 

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

1. Prepare the 3D Object
2. Slice the object
3. Print it!

---

# Printing Workflow - cont.

## Preparing the 3D Object

```js {all|4|3-4|2-4|all}
// a basic cube
transform([0, 0, 3])
  rotate([90, 0, 0])
   cube([5, 5, 5]);
```

<v-after>

```openscad {monaco}
// a basic cube
transform([0, 0, 3])
  rotate([90, 0, 0])
   cube([5, 5, 5]);
```

</v-after>

- todo
<!-- Live OpenSCAD demo based on editor contents? -->

---

# Printing Workflow - cont.

## Slicing the file

- todo

<!-- Cura 5 -->

---

# Printing Workflow - cont.

## Printing!

- todo

<!-- Timelapse of print with explanations? v-click to start next segment? -->

---

# Use Cases

- [/r/CookingWith3dPrinters](https://reddit.com/r/cookingwith3dprinters)

---

## Examples

<!-- existing prints for EEL -->

---

<!-- start of advanced section -->

# Common Problems & Solutions

- printing multiple things at once (temperature)

---

# Filaments


