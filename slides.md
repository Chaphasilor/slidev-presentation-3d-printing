---
theme: ./theme
# background: https://source.unsplash.com/collection/94734566/1920x1080
lineNumbers: false
info: |
  ## Schichtarbeit @ GSI
  ### Eine kurze Einführung in 3D-Druck
  2024-02-01
drawings:
  persist: false
title: Schichtarbeit @ GSI
layout: cover-video
video: /Cool 3D Printing Timelapse Effect.mp4
type: mp4
attribution: https://www.youtube.com/watch?v=Is10iN43UjI
---

# Schichtarbeit @ GSI

---
layout: background-video
video: /Cool 3D Printing Timelapse Effect.mp4
type: mp4
attribution: https://www.youtube.com/watch?v=Is10iN43UjI
---

# Was ist 3D-Druck?

<div class="mt-16 text-xl">

- Grundprinzip: Additive Fertigung
  - Teile werden durch Hinzufügen von Material hergestellt
- Je nach Anwendung effizienter und vielseitiger als traditionelle Fertigungstechniken
  - Macht "unmögliche" Formen möglich
- Aber auch Nachteile:
  - Kleine Teile deutlich weniger stabil
  - Weniger zuverlässig

</div>

---
layout: image-bottom
image: /3d-print_workflow.webp
attribution: https://www.3dmakerengineering.com/blogs/3d-printing/how-3d-printing-works
class: click-transition slide-right
---

# Und... wie geht das?

1. 3D Objekt beschaffen
2. 3D Objekt "slicen" (vorverarbeiten)
3. Drucken!

...also eigentlich ganz einfach!

<!-- # How does it work?

<v-clicks>

- Take a 3D object
- Split ("slice") the part into many layers of equal thickness
- "Build" the print layer by layer
  - Details on the next slide!

</v-clicks> -->

---
clicks: 5
---

# Wie druckt ein 3D Drucker?
## (FDM-Druck)

<div class="mt-16 text-xl">

- Drucker hat eine Düse, die er über dem Druckbett bewegen kann
  - Plastik wird geschmolzen und durch Düse gepresst
- Druckt Schicht für Schicht
  - Wenn eine Schicht fertig, nächste darüber
- Bis die nächste Schicht anfängt, ist vorherige abgekühlt
  - Aber noch nicht komplett fest
  - Die Schichten verbinden sich
- Auflösung durch Schichthöhe und Düsengröße bestimmt

</div>

<div v-click="1"><EmbeddedVideo :at="1" class="absolute top-8 right-8 h-40 rounded-md" src="/nozzle-cam.mp4" /></div>

<div v-click="5" class="text-xl">

- Wenn was schief geht <tabler-arrow-right /> Spaghetti 🍝

<Popover-Image :class="`absolute bottom-24 right-4 h-52 rounded-xl`" src="/spaghetti.jfif" :attribution="`https://help.prusa3d.com/article/5lvyc9jhka-spagheti-monster`" />
</div>

<!--
TODO bild! oder besser video?
beispielgeometrien, welche kann man drucken, welche nicht?
-->

---

# Arten von 3D Druck

<ul class="flex flex-row gap-4 items-center justify-between w-full h-7/8 overflow-hidden">

<v-clicks>

<feature-list-item class="click-transition slide-right" src="/BambuLab_A1-2_1600x1600.png" attribution="https://eu.store.bambulab.com/products/a1?variant=47554015691100">
  <template #default>Fused Deposition Modelling (FDM)</template>
  <template #extra><span>Rohmaterial: <b>Plastik-Filament</b></span><span>Geeignet für: <b>Prototypen, schnelles & günstiges Drucken</b></span></template>
</feature-list-item>

<feature-list-item class="click-transition slide-right" src="/SLA.png" attribution="https://eu.store.bambulab.com/products/a1?variant=47554015691100">
  <template #default>(Masked) Stereo-Lithography ((M)SLA)</template>
  <template #extra><span>Rohmaterial: <b>Plastik-Harz</b></span><span>Geeignet für: <b>Filigrane Teile</b></span></template>
</feature-list-item>

<feature-list-item class="click-transition slide-right" src="/sls.jpg" attribution="https://www.beamler.com/3d-printing-capabilities/processes/sls-selective-laser-sintering/">
  <template #default>Selective Laser Sintering (SLS)</template>
  <template #extra><span>Rohmaterial: <b>Metall-Staub</b></span><span>Geeignet für: <b>Besonders robuste (Metall-)Teile</b></span></template>
</feature-list-item>

</v-clicks>

</ul>

<!--
Fused Deposition Modelling (FDM): Modellierung durch Schmelzschichttechnik
Masked Stereolithography (MSLA): Maskierte Stereolithographie
Selective Laser Sintering (SLS): Selektives Lasersintern
-->

---

# Was brauchen wir zum Drucken?

<ul class="mt-12 flex -mx-10 flex-row justify-around items-end">

<v-clicks>

<li class="w-full block">
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
  <span class="w-full inline-block text-center"><tabler-3d-cube-sphere/> 3D Objekt</span>
</li>
<li class="w-full block">
  <Popover-Image :class="`mb-10 rounded-md`" src="/cura_benchy.png"/>
  <span class="w-full inline-block text-center"><tabler-slice/> Slicer-Programm</span>
</li>
<li class="w-full block overflow-hidden">
  <Popover-Image :class="`aspect-square`" src="/Ultimaker-S5-desktop-3D-printer-hero.webp"/>
  <span class="w-full inline-block text-center"><tabler-printer/> 3D Drucker</span>
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

# Woher kann man 3D Objekte bekommen?

<div v-click="1">
  <Popover-Image :class="`absolute right-24 top-20 h-64`" src="/www.printables.com_edited.jpeg"/>
</div>

<v-clicks at="0">

- Einfach herunterladen
  - <https://printables.com>
  - <https://thingiverse.com>
- Selbst erstellen

</v-clicks>

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
class: click-transition slide-left
---

# Beliebte Drucker <sup>(FDM)</sup>

<ul class="mt-12 flex -mx-10 flex-row justify-around items-end">

<v-clicks>

<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-48 rounded-xl`" src="/BambuLab_X1-Carbon_1700x1700.jpg" />
  <span class="w-full inline-block text-center">BambuLab X1 Carbon</span>
  <ul class="text-sm text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Sehr schnell</li>
    <li>Viele Funktionen</li>
  </ul>
</li>
<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-3 h-52`" src="/Prusa_mk4.jpg" />
  <span class="w-full inline-block text-center">Prusa MK4</span>
  <ul class="text-sm text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Einfach zu benutzen</li>
    <li>Zuverlässig</li>
  </ul>
</li>
<li class="w-full block">
  <Popover-Image :class="`mx-auto mb-4 h-40 rounded-xl`" src="/BambuLab_A1-mini_1800x1800.png" />
  <span class="w-full inline-block text-center">BambuLab A1 mini</span>
  <ul class="text-sm text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Günstig & klein</li>
    <li>Trotzdem schnell</li>
  </ul>
</li>
<li class="w-full block">
  <img class="mx-auto mb-5 h-46" src="/voron-V2.4_RED1_front_clear.png" />
  <span class="w-full inline-block text-center">Voron 2.4</span>
  <ul class="text-sm text-gray-700 dark:text-gray-300 mt-6 ml-6">
    <li>Quelloffen</li>
    <li>Bauset</li>
  </ul>
</li>

</v-clicks>

</ul>

<!--
TODO interaktiv gestalten, preis schätzen lassen
1. BambuLab X1 Carbon: **1.250€**
2. Prusa MK4: **1.200€**
3. BambuLab A1 mini: **320€**
4. Voron 2.4: **900 - 1.300€**
-->

---
clicks: 15
---

# Grenzen Ausreizen

<div class="click-transition slide-right">

<v-clicks>

- 3D-Drucker haben sich lange nicht verändert
  - Im letzten Jahr viel passiert
- Drucker sind jetzt schnell, und drucken gut & zuverlässig
  - Ohne teurer geworden zu sein
- Innovationen gehen von Community aus
  - Leute treiben ihre Drucker an die Grenzen
  - Finden Probleme, und Lösungen dafür

</v-clicks>

</div>

<div class="absolute bottom-2 left-0 w-full flex flex-row justify-around">

<div v-click="4"><EmbeddedVideo :at="4" class="h-40 rounded-md" src="/large_printer.mp4" /></div>
<div v-click="8"><EmbeddedVideo :at="8" class="h-40 rounded-md" src="/speed_benchy.mp4" /></div>
<div v-click="12"><EmbeddedVideo :at="12" class="h-40 rounded-md" src="/suspended_printing.mp4" /></div>

</div>

<!--
TODO dauer schätzen lassen
1. 1.1x1.1x2.2m Bauraum
TODO dauer für 3DBenchy schätzen lassen (bild mit maßstab einblenden)
2. Beschleunigung: 200.000 mm/s² = 200 m/s² = 720 km/h / s
3. Drucker nur an Faden aufgehängt, druckt genau so gut wie auf nem Tisch
-->

---

# Einsatzmöglichkeiten

<ul>

<v-clicks>

<li>
  Ersatzteile
  <Popover-Image :class="`absolute rounded-xl top-[0rem] right-[0rem] h-52`" src="/replacement_fountain_head.jpg" :attribution="`/u/DieingFetus - https://www.reddit.com/r/functionalprint/comments/z3p7lx/replacement_fountain_head_60_70g_of_old_abs_150/`" />
</li>

<li>
  Spezielle Gehäuse, Hilfsmittel, oder Befestigungen 
  <Popover-Image :class="`absolute rounded-xl top-[2rem] right-[3rem] h-52`" src="/Case_2.jpg" />
</li>

<li>
  Prototypen
  <Popover-Image :class="`absolute rounded-xl top-[4rem] right-[6rem] h-60`" src="drafts.jpg" :attribution="`https://xyples.com/replacement-part/`" />
</li>

<li>
  <!-- Print trinkets and decorations -->
  Deko
  <Popover-Image :class="`absolute rounded-xl top-[6rem] right-[9rem] h-64 w-92`" src="/stitch_trinket.jpg" :attribution="`MBD_3D - https://www.thingiverse.com/thing:5637214`" />
</li>

<li>
  <a href="https://reddit.com/r/cookingwith3dprinters">/r/CookingWith3dPrinters</a>
  <Popover-Image :class="`absolute rounded-xl top-[8rem] right-[12rem] h-68`" src="/cooking.jpg" :attribution="`/u/YeetDisDue - https://www.reddit.com/r/cookingwith3dprinters/comments/oi1chf/breakfast/`" />
</li>

</v-clicks>

</ul>

---
layout: statement
---

# Fragen?

<confetti confettiId="2" />
