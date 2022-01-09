//
//  Onload.ts
//  Design System Documentation Site
//
//  Created by Jiri Trecak <jiri@supernova.io>
//  Supernova.io
//

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { useEffect } from "react"

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Template implementation

export default function Onload(props: { tree: JSX.Element }) {
  // You can invoke any onload global code after the entire page was loaded.
  // This is really important for this particular site because some functionality needs
  // to be setup after the tree is rendered into browser. Such functionality
  // includes Sandbox rendering, for example
  useEffect(() => {
    constructSandboxes()
    constructMenuTracker()
  })

  return props.tree
}

/** Construct all sandboxes for the live code loaded into the page */
function constructSandboxes() {
  ;(window as any).sandboxEngine.buildSandboxStartingWith("sandbox")
}

/** Create menu tracker that allows us to see what part of content is currently being focused. This is much easier way to track stuff than to handle it true React components */
function constructMenuTracker() {
  function isElementInViewport(el: Element) {
    var rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  let sections: Array<Element> = []

  // Create intersection observer for all sections
  const observer = new IntersectionObserver((_entries) => {
    /* Use this version if you want to highlight all headers in the viewport
        let isSelected = false
        for (let section of sections) {
            let id = section.getAttribute("id")
            console.log(id)
            if (isElementInViewport(section) && !isSelected) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add("active")
                // isSelected = true
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove("active")
            }
        }*/
    // Use this version if you want to highlight only top-most tracked element in the viewport
    let visibleSections = sections.filter((s) => isElementInViewport(s))
    let sortedVisibleSections = visibleSections.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
    // Unactivate all sections
    for (let section of sections) {
      document.querySelector(`nav li a[href="#${section.getAttribute("id")}"]`)?.parentElement?.classList.remove("active")
    }
    // Activate top most visible in the viewport section
    if (sortedVisibleSections.length > 0) {
      document.querySelector(`nav li a[href="#${sortedVisibleSections[0].getAttribute("id")}"]`)?.parentElement?.classList.add("active")
    }
  })

  // Track all headers that have an `id` applied
  document.querySelectorAll("h1[id]").forEach((section) => {
    observer.observe(section)
    sections.push(section)
  })
  document.querySelectorAll("h2[id]").forEach((section) => {
    observer.observe(section)
    sections.push(section)
  })
  document.querySelectorAll("h3[id]").forEach((section) => {
    observer.observe(section)
    sections.push(section)
  })
}
