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

<div class="mt-16 text-xl">

<v-clicks>

- A type of *additive manufacturing*
  - Parts are created layer-by-layer

- Can be more efficient and versatile than subtractive manufacturing (e.g. machining)
  - But usually at the cost of structural strength or accuracy
- Due to the nature of the process, it is often less reliable than other manufacturing techniques
  - There are a number of reasons why prints could fail, we will talk about them later

</v-clicks>

</div>

<!--
Here is another comment.
-->

---
layout: image-bottom
image: /3d-print_workflow.webp
attribution: https://www.3dmakerengineering.com/blogs/3d-printing/how-3d-printing-works
class: click-transition slide-right
---

# How does it work?

<v-clicks>

- Take a 3D object
- Split ("slice") the part into many layers of equal thickness
- "Build" the print layer by layer
  - Details on the next slide!

</v-clicks>

---
clicks: 5
---

# How does it work? - FFF/FDM Printing

<sup>"Fused Filament Fabrication" or "Fused Deposition Modeling"</sup>

<div class="click-transition slide-right">

<v-clicks>

- Uses filament (= "plastic wire") as the material source
- Melt the material, push it through a nozzle and let it cool off
  - The nozzle moves along the shape of the layer while the filament is being extruded
  - Next layer can be placed on top as soon as the previous layer has solidified enough
- Come in two different flavors:

</v-clicks>

<ol class="ml-12">

<v-clicks>

- `XYZ` printers use three axis for correctly positioning the nozzle
  - Forward/backward, left/right and up/down
  - During regular printing, the nozzle never moves back down, because everything below it is already done
- `Delta` printers use three arms that can be extended or shortened with regard to the build platform
  - Very simple operating principle that still covers the X, Y and Z axis
  - Works by using parallel rods on each arm to prevent the nozzle from rotating or tilting

</v-clicks>

</ol>

</div>

<div v-click="4"><Popover-Image :class="`absolute top-12 h-64 right-6`" src="/prusa_MK3Splus.png"/></div>
<div v-click="5"><Popover-Image :class="`absolute bottom-11 h-50 left-1`" src="/delta-printer_trilab.jpg"/></div>

---
layout: split
class: click-transition slide-right
---

## FFF - Advantages & Limitations

::left::

- **Pro**
  <v-clicks>

  - Can use different materials for a single print
  - Only little post-processing necessary
  - Can print a wide range of materials

  </v-clicks>

::right::

- **Con**
  <v-clicks>

  - Overhangs are limited / need support structures
  - Nozzle diameter causes tradeoff between speed and accuracy
  - Each layer is extruded sequentially

  </v-clicks>

---
class: click-transition slide-right
---

# How does it work? - SLA and Powder-Based Printing

<sup>"Stereolithography"</sup>

<Popover-Image :class="`absolute bottom-16 h-64 right-0`" src="/sla.png"/>

<v-clicks>

- Uses liquid resin as the material source
- Prints the part upside-down
  - *Build plate* is lowered into a tank filled with resin
  - Screen with UV backlight at the bottom of the tank
  - Cures the resin between the screen and build plate / finished layers
- Resin is cured (hardened) into solid plastic layer by layer
- Very high accuracy / printing resolution (50μm)
- A whole layer is cured at once
  - This means that only the height of the object influences the print time!

</v-clicks>

---
class: click-transition scale
---

# What do we need?

<ul class="mt-12 flex -mx-10 flex-row justify-around items-end">

<v-clicks>

<li class="w-full block">
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
<li class="w-full block">
  <Popover-Image :class="`mb-10 rounded-md`" src="/cura_benchy.png"/>
  <span class="w-full inline-block text-center"><tabler-slice/> Slicing Software</span>
</li>
<li class="w-full block overflow-hidden">
  <Popover-Image :class="`aspect-square`" src="/Ultimaker-S5-desktop-3D-printer-hero.webp"/>
  <span class="w-full inline-block text-center"><tabler-printer/> 3D Printer</span>
</li>

</v-clicks>

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
  :model="`/3d models/febex3-bp-holder.3mf`"
  :color="`#ee8833`"
  :brightness="0.4"
  :position="[-17, 4, 0]"
  :rotation="[-Math.PI/4, Math.PI/8, Math.PI/4]"
  :rotationSpeed="0.4"
  :scale="0.035"
  :width="800"
  :height="500"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>
<showcase-3mf-new
  v-if="$slidev.nav.clicks > 1"
  :model="`/3d models/Gear.3mf`"
  :color="`#338833`"
  :position="[0, -6, 0]"
  :rotation="[-Math.PI/6, Math.PI/6, Math.PI/4]"
  :scale="0.2"
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
  :position="[10, -7, 0]"
  :rotation="[Math.PI/(-3.5), -Math.PI/32, Math.PI/2]"
  :rotationSpeed="-0.15"
  :scale="0.1" 
  :width="400" 
  :height="250"
  class="absolute top-0 opacity-100 left-0 m-6 transition-all duration-0 ease-in-out"
/>
  <!-- :class="{'opacity-100': $slidev.nav.clicks > 2}" -->

---
class: click-transition slide-right
---

# Computer-Aided Design (CAD)

<v-clicks>

- Tools for constructing 3D objects

- Either done visually or programmatically
- Works by specifying geometric shapes with certain sizes and positions
  - Shapes are combined into a single object
  - Modifications (rounding, cuts, etc.) can be added at the end
- Finished object is rendered and exported
- Alternative: 3D scanning existing objects

</v-clicks>

---
class: click-transition slide-right
---

# Parametric Design

<v-clicks>

- Define solutions (= objects) as explicitly as possible
- Be able to improve our solution by improving the problem statement
  - Fix the measuring error, not the object dimensions
- It's about re-using information dynamically
  - "Variables"
- Example:
  - Make sure the wall thickness of an object is consistent by using a parameter instead of typing out the thickness value each time
  - Create an object that has the same properties as another one, but with different dimensions/measurements
- Prevents modeling errors and saves time

</v-clicks>

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
class: click-transition slide-left
---

# Slicing Software (Slicers)

<ul class="mt-20 flex -mx-10 flex-row justify-around items-end">

<v-clicks>

<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-42`" src="/cura_benchy.png" />
  <div class="flex flex-col gap-0">
    <span class="w-full inline-block text-center">Ultimaker Cura</span>
    <a class="w-full inline-block text-center italic text-xs tracking-relaxed opacity-60" href="https://ultimaker.com/software/ultimaker-cura">https://ultimaker.com/software/ultimaker-cura</a>
  </div>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Easy to use</li>
    <li>Powerful, but convoluted</li>
    <li>Open Source</li>
  </ul>
</li>
<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-42`" src="/prusaslicer.jpg" :attribution="`https://3dlabprint.com/`" />
  <div class="flex flex-col gap-0">
    <span class="w-full inline-block text-center">PrusaSlicer</span>
    <a class="w-full inline-block text-center italic text-xs tracking-relaxed opacity-60" href="https://www.prusa3d.com/page/prusaslicer_424/">https://www.prusa3d.com/page/prusaslicer_424/</a>
  </div>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Very straight-forward</li>
    <li>Powerful, better algorithms than Cura</li>
    <li>Open Source</li>
  </ul>
</li>
<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-42`" src="/chitubox.jpg" :attribution="`https://ngroku.com/?p=4770`" />
  <div class="flex flex-col gap-0">
    <span class="w-full inline-block text-center">Chitubox</span>
    <a class="w-full inline-block text-center italic text-xs tracking-relaxed opacity-60" href="https://www.chitubox.com/en/index">https://www.chitubox.com/</a>
  </div>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>SLA-Slicer</li>
    <li>Not as many features (not necessary)</li>
    <li>Commercial</li>
  </ul>
</li>

</v-clicks>

</ul>

---
class: click-transition slide-left
---

# Popular Printers <sup>(FFF only)</sup>

<ul class="mt-12 flex -mx-10 flex-row justify-around items-end">

<v-clicks>

<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-52`" src="/prusa_MK3Splus.png" />
  <span class="w-full inline-block text-center">Prusa MK3(S+)</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Easy to set up, easy to use</li>
    <li>Tried & Tested</li>
  </ul>
</li>
<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-4 h-42`" src="/xyz_ender-3-pro.png" />
  <span class="w-full inline-block text-center">Creality Ender 3</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Cheap</li>
    <li>Prints well after some tweaks</li>
  </ul>
</li>
<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-4 h-52`" src="/Ultimaker-S5-desktop-3D-printer-hero.webp" />
  <span class="w-full inline-block text-center">Ultimaker S5</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Made for low maintenance</li>
    <li>Dual Extruder</li>
  </ul>
</li>
<li class="w-full block">
  <img class="mx-auto mb-5 h-40" src="/voron-V2.4_RED1_front_clear.png" />
  <span class="w-full inline-block text-center">Voron 2.4</span>
  <ul class="text-xs text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Open Source</li>
    <li>Moddable & very performant</li>
  </ul>
</li>

</v-clicks>

</ul>

---
clicks: 15
---

# Printing!

<div class="click-transition slide-right">
<v-clicks>

- Ideally: insert USB drive, select file, start the print
- Make sure the printer is ready before beginning!
  - Is the build plate empty?
    - Use spatula (below printer) to remove any residue
  - Is there enough filament installed?
    - You can ask someone to change it for you, or try it yourself!
- <tabler-alert-triangle /> Careful: printer has a heated bed!
  - Can reach up to 130°C, depending on material / print settings

</v-clicks>

</div>

<div class="absolute bottom-2 left-0 w-full flex flex-row justify-around">

<div v-click="4"><EmbeddedVideo :at="4" class="h-40 rounded-md" src="/start_print.mp4" /></div>
<div v-click="8"><EmbeddedVideo :at="8" class="h-40 rounded-md" src="/timelapse_print.mp4" /></div>
<div v-click="12"><EmbeddedVideo :at="12" class="h-40 rounded-md" src="/finish_print.mp4" /></div>

</div>

<!-- Timelapse video of print with explanations? v-click to start next segment? -->

---
clicks: 4
---

# Printing Workflow

<div class="click-transition slide-right">
<v-clicks>

1. Prepare the 3D Object
2. Slice the object
3. Print it!

</v-clicks>

</div>

<div v-after="4" class="grid content-center w-full text-center z-10 h-64 text-6xl font-semibold">
   <confetti>
      <h2>Demo time! 🥳</h2>
   </confetti>
</div>

<!-- 
- create simple model with ~~OpenSCAD~~ Fusion
- export as STL
- load into Cura and slice
- save file to USB drive
- start print
-->

---
class: click-transition slide-right
---

# Use Cases



<ul>

<v-clicks>

<li>
  Replace broken parts
  <Popover-Image :class="`absolute top-[0rem] right-[0rem] h-52`" src="/replacement_fountain_head.jpg" :attribution="`/u/DieingFetus - https://www.reddit.com/r/functionalprint/comments/z3p7lx/replacement_fountain_head_60_70g_of_old_abs_150/`" />
</li>

<li>
  Create custom cases or front shields
  <Popover-Image :class="`absolute top-[1rem] right-[2rem] h-52`" src="/Case_2.jpg" />
</li>

<li>
  Test drafts before ordering machined parts
  <Popover-Image :class="`absolute top-[2rem] right-[4rem] h-60`" src="drafts.jpg" :attribution="`https://xyples.com/replacement-part/`" />
</li>

<li>
  Print trinkets and decorations
  <Popover-Image :class="`absolute top-[3rem] right-[6rem] h-64 w-92`" src="/stitch_trinket.jpg" :attribution="`MBD_3D - https://www.thingiverse.com/thing:5637214`" />
</li>

<li>
  <a href="https://reddit.com/r/cookingwith3dprinters">/r/CookingWith3dPrinters</a>
  <Popover-Image :class="`absolute top-[4rem] right-[8.5rem] h-68`" src="/cooking.jpg" :attribution="`/u/YeetDisDue - https://www.reddit.com/r/cookingwith3dprinters/comments/oi1chf/breakfast/`" />
</li>

</v-clicks>

</ul>

---

## Deployed Prints @ EEL

<div class="w-full h-7/8 mt-4 grid grid-rows-3 grid-cols-4 gap-8">

  <Popover-Image :class="`h-32 mx-auto`" src="/Emergency_Shutdown_Bumper.jpg" :attribution="`Fabi for Karsten`"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/Rack_1.jpg" :attribution="`Henning for Sven`"/>

  <div class="flex flex-row justify-around">
    <Popover-Image :class="`h-32`" src="/Rack_and_Cable_Relief.jpg" :attribution="``"/>
    <Popover-Image :class="`h-32`" src="/Rack_and_Cable_Relief_2.jpg" :attribution="`Zoomed`"/>
  </div>

  <Popover-Image :class="`h-32 mx-auto`" src="/Rack_no_Cable_Relief.jpg" :attribution="``"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/Case_2.jpg" :attribution="`Fabi for Sven`"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/Case_3.jpg" :attribution="`Fabi for Sven`"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/Plugboard_Stand.jpg" :attribution="`Fabi for Peter W.`"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/Backplane_Holder.jpg" :attribution="`Fabi for Manuel`"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/PSU_Replacement_Knob.jpg" :attribution="`Fabi`"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/Temp_Sensor_Holder.jpg" :attribution="``"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/Apfel_Piggy_Cover_1.jpg" :attribution="``"/>

  <Popover-Image :class="`h-32 mx-auto`" src="/Apfel_Piggy_Cover_2.jpg" :attribution="``"/>

<!-- <showcase-3mf-new
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
-->

</div>

<!--
existing prints for EEL

- Emergency Shutdown Addon
- Cable relief
- Backplane holders ("old" and new)
- PSU Knob
- Poland 8CH MB1 Case
- Spool Holder w/ lip
- AOI Connector Shield

-->

---
layout: split
class: click-transition slide-right
---
<!-- start of advanced section -->

# Basic Parameters

<sup class="block mt-6 -mb-10">FFF/FDA only</sup>

::left::

<v-clicks>

- Layer Height
  - Controls surface quality, strength and print time
  - "Resolution" of the print
- Wall/Top/Bottom Thickness
  - Increases strength of hollow prints
- Infill Density
  - Controls how much material is put inside of "hollow" prints
  - Truly hollow prints can simply be squished together
  - Different infill patterns for different applications

</v-clicks>

::right::

<v-clicks>

- Build Plate Adhesion (Brim/Skirt)
  - Primes the nozzle (making sure filament starts to extrude right away)
  - Brims and Rafts can help tall prints stick to the build plate
    - If a print comes loose while printing <tabler-arrow-right /> failed print
- Support
  - You can't print in mid-air
  - Support structures add extra material to brace ("support") layers above

</v-clicks>

---

# Common Problems

<sup class="block mt-6 -mb-3">FFF/FDA only</sup>

<div class="click-transition slide-right">

<v-clicks>

- 3D printing mainly constrained by thermodynamics
  - Governs print speed, print quality
  - Introduces some peculiar effects
- Overhangs & Bridging
  - Solution: cooling & support structures (slicer setting)
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

</div>

<div v-after>
  <Popover-Image :class="`absolute bottom-16 right-8 h-56`" src="/spaghetti.jfif" :attribution="`https://help.prusa3d.com/article/5lvyc9jhka-spagheti-monster`" />
</div>

---
class: click-transition slide-left
---

# Filaments

<ul class="flex flex-col gap-4 items-center flex-wrap w-full h-7/8 overflow-hidden">

<v-clicks>

<vertical-list-item src="/tough-pla-drill-jig.webp" attribution="https://ultimaker.com/materials/tough-pla">
  <template #default>(Tough) PLA</template>
  <template #extra>easy to print <tabler-circle class="text-[6px]"/> versatile</template>
</vertical-list-item>
<vertical-list-item src="/abs-battery-side.webp" attribution="https://ultimaker.com/materials/abs">
  <template #default>ABS</template>
  <template #extra>durable <tabler-circle class="text-[6px]"/> needs an even temperature</template>
</vertical-list-item>
<vertical-list-item src="/nylon-gear.webp" attribution="https://ultimaker.com/materials/nylon">
  <template #default>Nylon</template>
  <template #extra>high toughness <tabler-circle class="text-[6px]"/> resistant to wear</template>
</vertical-list-item>
<vertical-list-item src="/tpu95a-flex-tool.webp" attribution="https://ultimaker.com/materials/tpu-95a">
  <template #default>TPU (95A) / TPC / TPE</template>
  <template #extra>flexible <tabler-circle class="text-[6px]"/> chemically resistant <tabler-circle class="text-[6px]"/> hard to print</template>
</vertical-list-item>
<vertical-list-item src="/CPE-research-lab-custom-funnel.webp" attribution="https://ultimaker.com/materials/cpe">
  <template #default>CPE</template>
  <template #extra>high chemical resistance</template>
</vertical-list-item>
<vertical-list-item src="/pp-custom-clamp-2.webp" attribution="https://ultimaker.com/materials/pp">
  <template #default>PP</template>
  <template #extra>high fatigue resistance <tabler-circle class="text-[6px]"/> low friction coefficient</template>
</vertical-list-item>
<vertical-list-item src="/pc-outdoor-lamp-with-infra-red-sensor.webp" attribution="https://ultimaker.com/materials/pc">
  <template #default>PC</template>
  <template #extra>good thermal resistance <tabler-circle class="text-[6px]"/> high strength</template>
</vertical-list-item>
<vertical-list-item badge="Support" src="/pva-skeeler-skate-prototype-water-soluble-support.webp" attribution="https://ultimaker.com/materials/pva">
  <template #default>PVA</template>
  <template #extra>water-soluble <tabler-circle class="text-[6px]"/> messy to print</template>
</vertical-list-item>
<vertical-list-item badge="Support" src="/breakaway-tool.webp" attribution="https://ultimaker.com/materials/breakaway">
  <template #default>Breakaway</template>
  <template #extra>brittle <tabler-circle class="text-[6px]"/> doesn't bond well with other materials</template>
</vertical-list-item>
<vertical-list-item src="/3D-Filaments.png" attribution="https://all3dp.com/buy-3d-printing-filament/">...and many more</vertical-list-item>

</v-clicks>

</ul>

<!-- 
- Tough PLA:
  - easy to print
  - durable enough for most applications
- ABS:
  - very durable
  - needs a high and static temperature
- Nylon:
  - very high physical durability
  - wear resistant
- TPU:
  - flexible
  - can be challenging to print
  - also somewhat chemically resistant
- CPE:
  - chemical resistance
- PP:
  - high fatigue resistance (living hinges)
  - low friction coefficient
- PC:
  - high temperature resistance (110°C)
  - high strength
- PVA:
  - water-soluble
  - support material
- Breakaway:
  - brittle
  - doesn't bond well with other materials
  - support material
 -->

---
clicks: 9
---

# Advanced Troubleshooting

<div class="relative">
  <v-clicks>
  <div class="absolute flex flex-col gap-4" v-click-hide="2">
    <span>Failed prints not always as easy to diagnose as this:</span>
    <Popover-Image :class="`h-72`" src="/Failed_Print_1.jpg" />
  </div>

  <div class="absolute flex flex-col gap-4" v-click-hide="3">
    <span>(Axis came loose)</span>
    <Popover-Image :class="`h-72`" src="/Failed_Print_2_inked.jpg" />
  </div>
  </v-clicks>
</div>

<ul class="text-[14px]">

<v-clicks at="3">

<li>
  Elephant's foot<br>
  <tabler-arrow-right /> Initial Layer Line Width
  <div v-click-hide="4"><Popover-Image :class="`absolute top-2 right-2 h-52`" src="/troubleshooting/elephants_foot.jpg" :attribution="`https://support.3dverkstan.se/article/23-a-visual-ultimaker-troubleshooting-guide`" /></div>
</li>
<li>
  Ugly Overhangs<br>
  <tabler-arrow-right /> Print Cooling, Tree Support and printing multiple objects at once
  <div v-click-hide="5"><Popover-Image :class="`absolute top-2 right-2 h-52`" src="/troubleshooting/ugly_overhangs.jpg" :attribution="`https://support.3dverkstan.se/article/23-a-visual-ultimaker-troubleshooting-guide`" /></div>
</li>
<li>
  Dual Extrusion Problems<br>
  <tabler-arrow-right /> Prime/Wipe Tower and Retraction
</li>
<li>
  Underextrusion<br>
  <tabler-arrow-right /> Material Flow and Printing Temperature
  <div v-click="7">
    Also: check filament feeders for grinding!
    <div v-click-hide="8"><Popover-Image :class="`absolute top-2 right-2 h-52`" src="/troubleshooting/grinding.jpg" :attribution="`https://support.3dverkstan.se/article/23-a-visual-ultimaker-troubleshooting-guide`" /></div>
    <div v-click-hide="8"><Popover-Image :class="`fixed bottom-4 right-8 h-52`" src="/troubleshooting/grinding_feeder.jpg" :attribution="`https://forum.fablab-luebeck.de/t/erfahrungsbericht-under-extrusion-filament-grinding/3415`" /></div>
  </div>
</li>
</v-clicks>

<v-clicks at="8">
<li>
  Scratches<br>
  <tabler-arrow-right /> Z-Hop or Combing Mode
  <div v-click-hide="9"><Popover-Image :class="`absolute top-2 right-2 h-52`" src="/troubleshooting/scratches.jpg" :attribution="`https://support.3dverkstan.se/article/23-a-visual-ultimaker-troubleshooting-guide`" /></div>
</li>
<li>
  Ugly Seam<br>
  <tabler-arrow-right /> Z-Seam Alignment
  <div v-click-hide="10"><Popover-Image :class="`absolute top-2 right-2 h-72`" src="/troubleshooting/seam.jpeg" :attribution="`https://www.reddit.com/r/3Dprinting/comments/44kefh/does_s3d_let_you_decide_where_your_seam_goes_does/`" /></div>
</li>

</v-clicks>

</ul>

<!-- 

- Support:
  - Always try to use as little support as possible
  - Cura Plugin: Auto Orientation
  - Use Tree Support wherever possible to reduce print time, used material and post-processing
- Infill Pattern
  - Cuboid works pretty well
  - Made for good liquid/gas flow, so not the strongest/stiffest
  - Triangles or Hexagons better suited for high strength
- Printing Temperature
  - Small Adjustments (~5°C) can improve the quality of the print under certain conditions
  - E.g. when printing multiple objects at once, bridging or dealing with overhangs
- Material Flow
  - 

 -->

---
class: click-transition slide-right
---

# Conclusion

<v-clicks>

- 3D Printing isn't hard!

- It just gets harder the more you deviate from "normal" prints
- You can print a ton of things & there are many applications
- Different printers for different tasks
  - Fast, durable, rough: **FFF/FDM**
  - High-precision & batches of small prints: **SLA**
- 3D Printing can solve many problems you might have
  - Especially good for ***custom*** solutions
  - Just ask me if you need help!

</v-clicks>

---
layout: center
---

# Thanks for your attention!

<confetti />
