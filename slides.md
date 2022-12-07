---
theme: ./theme
# background: https://source.unsplash.com/collection/94734566/1920x1080
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: 3D-Printing @ EEL
layout: cover
background: /3D-Printing-at-EEL_2_edited.jpg
---

# 3D-Printing @ EEL

---
layout: background-video
video: /Cool 3D Printing Timelapse Effect.mp4
type: mp4
attribution: https://www.youtube.com/watch?v=Is10iN43UjI
---

# What is 3D Printing?

- A type of *additive manufacturing*
  - Parts are created layer-by-layer

- Can be more efficient and versatile than subtractive manufacturing (e.g. machining)
  - But usually at the cost of structural strength or accuracy
- Due to the nature of the process, it is often less reliable than other manufacturing techniques
  - There are a number of reasons why prints could fail, we will talk about them later

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
  - Details on the next slide!

---

# How does it work? - FFF/FDM Printing

<sup>"Fused Filament Fabrication" or "Fused Deposition Modeling"</sup>

<Popover-Image :class="`absolute top-12 h-64 right-6`" src="/prusa_MK3Splus.png"/>

- Uses filament (= "plastic wire") as the material source
- Melt the material, push it through a nozzle and let it cool off
  - The nozzle moves along the shape of the print while the filament is being extruded
  - Next layer can be placed on top as soon as the previous layer has solidified enough
- Come in two different variations
  - `XYZ` printers use three axis for correctly positioning the nozzle
    - Forward/backward, left/right and up/down
    - During regular printing, the nozzle never moves back down, because everything below it is already done
  - `Delta` printers use three arms that can be extended or shortened with regard to the build platform
    - Very simple operating principle that still covers the X, Y and Z axis
    - Works by using parallel rods on each arm to prevent the nozzle from rotating or tilting
    <Popover-Image :class="`floating h-50 -left-20`" src="/delta-printer_trilab.jpg"/>

---

## FFF - Advantages & Limitations

- Pro:
  - Can use different materials for a single print
  - Only little post-processing necessary
  - Can print a wide range of materials

- Con:
  - Overhangs are limited / need support structures
  - Nozzle diameter causes tradeoff between speed and accuracy
  - Each layer is extruded sequentially

---

# How does it work? - SLA and Powder-Based Printing

<sup>"Stereolithography"</sup>

<Popover-Image :class="`absolute bottom-16 h-64 right-0`" src="/sla.png"/>

- Uses liquid resin as the material source
- Prints the part upside-down
  - *Build plate* is lowered into a tank filled with resin
  - Screen with UV backlight at the bottom of the tank
  - Cures the resin between the screen and build plate / finished layers
- Resin is cured (hardened) into solid plastic layer by layer
- Very high accuracy / printing resolution
- A whole layer is cured at once
  - This means that only the height of the object influences the print time!

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
  <Popover-Image :class="`mb-10 rounded-md`" src="/cura_benchy.png"/>
  <span class="w-full inline-block text-center"><tabler-slice/> Slicing Software</span>
</li>
<li v-click="3" class="w-full block overflow-hidden">
  <Popover-Image :class="`aspect-square`" src="/Ultimaker-S5-desktop-3D-printer-hero.webp"/>
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
clicks: 2
---

# Getting 3D Objects

<div v-click="1">
  <Popover-Image :class="`absolute right-24 top-20 h-64`" src="/www.printables.com_edited.jpeg"/>
</div>

<v-clicks at="1">

- Use pre-existing ones
  - <https://printables.com>
  - <https://thingiverse.com>
- Create custom ones

</v-clicks>

<!-- TODO add delay for showing objects instead of clicks? -->
<showcase-3mf-new
  v-if="$slidev.nav.clicks > 1"
  :model="`/3d models/Gear.3mf`"
  :color="`#ee8833`"
  :position="[-13, -4, 0]"
  :rotation="[-Math.PI/6, Math.PI/6, Math.PI/4]"
  :scale="0.3"
  :width="400" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>
  <!-- :class="{'opacity-100': $slidev.nav.clicks > 1}" -->
  <!-- TODO add delay for showing objects instead of clicks? -->
<showcase-3mf-new
  v-if="$slidev.nav.clicks > 1"
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[12, -10, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.15"
  :scale="0.1" 
  :width="400" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
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

# Parametric Design

- Define solutions (= objects) as explicitly as possible
- Be able to improve our solution by improving the problem statement
  - Fix the measuring error, not the object dimensions
- It's about re-using information dynamically
  - "Variables"
- Example:
  - Make sure the wall thickness of an object is consistent by using a parameter instead of typing out the thickness value each time
- Prevents modeling errors and saves time

<!-- 
- As scientists and engineers, we want to define problems and solutions as explicitly as possible
 -->

---

# Example 1: OpenSCAD

<Popover-Image :class="`absolute right-8 top-20 h-56`" src="/openscad-screenshot.png" :attribution="`https://forums.autodesk.com/t5/fusion-360-ideastation-archived/openscad-compatible-scripting-mode/idi-p/6015290`"/>

- Programmatic CAD Tool
- Free & Open Source
- Possibilities are nearly endless, as long as you can program it
- Works really well with parametric design principles
  - Use and combine variables
  - Define allowed values, customize easily
  - Create ***multiple sets*** of parameters
  - Supply parameters as launch arguments
- Easy to integrate with other tools
- You won't get very far without helper libraries
  - Takes too long to build complex shapes without them
  - But: Extensibility is one of OpenSCAD's strengths!
- Objects become (very) slow to render with increasing complexity

<!-- <arrow x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" /> -->

<Popover-Image :class="`absolute right-72 bottom-20 h-32`" src="/openscad-parametric.png"/>
<Popover-Image :class="`absolute right-10 bottom-20 h-32`" src="/openscad-parametric-customizer.png"/>


<span class="absolute bottom-3 right-4">[OpenSCAD Website](https://openscad.org/) | [BOSL2 Utility Library](https://github.com/revarbat/BOSL2)</span>

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

# Example 2: Fusion 360

<Popover-Image :class="`absolute right-8 top-20 h-56`" src="/fusion360_ui-overview.png" :attribution="`https://help.autodesk.com/view/fusion360/ENU/?guid=GUID-E647CA56-7187-406A-ACE4-EAC59914FAE4`" />

- Graphical CAD Tool
- Paid and Cloud-Based
- Very powerful, very easy to use
- Even complex shapes are easy to design
- Renders very quickly
- Useful timeline of modeling steps
  - Even allows rewinding to a previous step
  - ***Much more*** maintainable for complex designs
- Additional CAD features (rendering, animating, manufacturing, simulating)
- Multiple parameter sets only possible through an add-on
  - Saved to a separate file and inconvenient to switch

<Popover-Image :class="`absolute right-8 bottom-16 h-32`" src="/Parametric_APFEL_Cover_Fusion.png" />
  
<span class="absolute bottom-3 right-4">Shoutout to Marco! :D</span>

---

# Slicing Software (Slicers)

<ul class="mt-20 flex -mx-10 flex-row justify-around items-end">

<li v-click="1" class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-42`" src="/cura_benchy.png" />
  <span class="w-full inline-block text-center">Ultimaker Cura</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Easy to use</li>
    <li>Powerful, but convoluted</li>
    <li>Open Source</li>
  </ul>
</li>
<li v-click="2" class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-42`" src="/prusaslicer.jpg" :attribution="`https://3dlabprint.com/`" />
  <span class="w-full inline-block text-center">PrusaSlicer</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Very straight-forward</li>
    <li>Powerful, better algorithms than Cura</li>
    <li>Open Source</li>
  </ul>
</li>
<li v-click="3" class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-42`" src="/chitubox.jpg" :attribution="`https://ngroku.com/?p=4770`" />
  <span class="w-full inline-block text-center">Chitubox</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>SLA-Slicer</li>
    <li>Not as many features (not necessary)</li>
    <li>Commercial</li>
  </ul>
</li>

</ul>

---

# Popular Printers <sup>(FFF only)</sup>

<ul class="mt-12 flex -mx-10 flex-row justify-around items-end">

<li v-click="1" class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-52`" src="/prusa_MK3Splus.png" />
  <span class="w-full inline-block text-center">Prusa MK3(S+)</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Easy to set up, easy to use</li>
    <li>Tried & Tested</li>
  </ul>
</li>
<li v-click="2" class="w-full block">
  <Popover-Image :class="`mx-auto mb-4 h-42`" src="/xyz_ender-3-pro.png" />
  <span class="w-full inline-block text-center">Creality Ender 3</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Cheap</li>
    <li>Prints well after some tweaks</li>
  </ul>
</li>
<li v-click="3" class="w-full block">
  <Popover-Image :class="`mx-auto mb-4 h-52`" src="/Ultimaker-S5-desktop-3D-printer-hero.webp" />
  <span class="w-full inline-block text-center">Ultimaker S5</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Made for low maintenance</li>
    <li>Dual Extruder</li>
  </ul>
</li>
<li v-click="4" class="w-full block">
  <img class="mx-auto mb-5 h-40" src="/voron-V2.4_RED1_front_clear.png" />
  <span class="w-full inline-block text-center">Voron 2.4</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Open Source</li>
    <li>Moddable & very performant</li>
  </ul>
</li>

</ul>

---
clicks: 4
---

# Printing Workflow

<v-clicks>

1. Prepare the 3D Object
2. Slice the object
3. Print it!

</v-clicks>

<div v-after="4" class="grid content-center w-full text-center z-10 h-64 text-6xl font-semibold">
   <confetti>
      <h2>Demo time! 🥳</h2>
   </confetti>
</div>

<!-- 
- create simple model with OpenSCAD
- export as STL
- load into Cura and slice
- save file to USB drive
-->

---

# Printing!

- Ideally: insert USB drive, select file, start the print
- Make sure the printer is ready before beginning!
  - Is the build plate empty?
    - Use spatula (below printer) to remove any residue
  - Is there enough filament installed?
    - You can ask someone to change it for you, or try it yourself!
- Careful: printer has a heated bed!
  - Can reach up to 130°C, depending on material / print settings

<!-- Timelapse of print with explanations? v-click to start next segment? -->

---

# Use Cases

- Replace broken parts
- Create custom cases or front shields
- Test drafts before ordering parts
- Print trinkets and decorations
- [/r/CookingWith3dPrinters](https://reddit.com/r/cookingwith3dprinters)

---

## Examples

- Emergency Shutdown Addon
- Cable relief
- Backplane holders ("old" and new)
- PSU Knob
- Poland 8CH MB1 Case
- Spool Holder w/ lip
- AOI Connector Shield
- Designs from others? Ask them for files/pictures
- TODO use images instead of 3d objects if available

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[-25, -10, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[-10, -10, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[5, -10, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[-25, -2, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[-25, 6, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[-10, -2, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[-10, 6, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[5, -2, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<showcase-3mf-new
  :model="`/3d models/cable-relief.3mf`"
  :color="`#ff5858`"
  :brightness="0.5"
  :position="[5, 6, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="0.25"
  :scale="0.1" 
  :width="600" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>

<!-- existing prints for EEL -->

---

<!-- start of advanced section -->

# Common Problems

<v-clicks>

- 3D printing mainly constrained by thermodynamics
  - Governs print speed, print quality
  - Introduces some peculiar effects
- Warping
  - Filament contracts while cooling down
  - Can deform the print or cause it to fail
  - To counter: heated bed + enclosure
- Printing multiple objects at once
  - For each additional object, the "layer time" increases
  - Material has more time to cool in-between layers
  <tabler-arrow-right /> Possibly different print results
- If a print fails <tabler-arrow-right /> Spaghetti 🍝

</v-clicks>

<div v-click="4">
  <Popover-Image :class="`absolute bottom-16 right-8 h-56`" src="/spaghetti.jfif" :attribution="`https://help.prusa3d.com/article/5lvyc9jhka-spagheti-monster`" />
</div>

---

# Basic Troubleshooting

- TODO add more content
- https://support.3dverkstan.se/article/23-a-visual-ultimaker-troubleshooting-guide

---

# Filaments

- 

