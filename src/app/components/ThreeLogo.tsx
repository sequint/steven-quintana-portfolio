'use client'

import React, { useRef, useEffect } from 'react'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three'

const ThreeLogo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize the scene, camera, and renderer
      const scene = new Scene()
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new WebGLRenderer()

      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)
      renderer.setClearColor('#ffffff')
      containerRef.current?.appendChild(renderer.domElement)
      camera.position.z = 5

      // Generate 3d cube
      const geometery = new BoxGeometry()
      const material = new MeshBasicMaterial({ color: '#06D6A0' })
      const cube = new Mesh(geometery, material)

      cube.position.set(0, 0,  -5)
      cube.rotation.x += Math.PI / 4
      cube.rotation.y += Math.PI / 4
      scene.add(cube)

      // Add this function inside the useEffect hook
      const renderScene = () => {
        requestAnimationFrame(renderScene)
        renderer.render(scene, camera)
      };

      // Call the renderScene function to start the animation loop
      renderScene()
    }
  }, [])

  return <div ref={ containerRef } />
}

export default ThreeLogo
