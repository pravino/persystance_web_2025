import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ThreeDViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const isRotatingRef = useRef(isRotating);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: THREE.WebGLRenderer;
    
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      
      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
      });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      shininess: 100,
      specular: 0x00ffff,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x00ffff, 0.5);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    camera.position.z = 5;

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotatingRef.current) {
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        if (containerRef.current && renderer.domElement.parentNode) {
          containerRef.current.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.warn("WebGL not available:", error);
      setWebGLAvailable(false);
      return () => {};
    }
  }, []);

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">3D Spatial Viewer</h3>
          <p className="text-sm text-muted-foreground">
            Interactive 3D model demonstrating our spatial computing and AR/VR capabilities
          </p>
        </div>
        
        {webGLAvailable ? (
          <>
            <div 
              ref={containerRef} 
              className="w-full h-64 rounded-md bg-gradient-to-br from-background to-muted"
              data-testid="canvas-3d-viewer"
            />
            
            <Button
              onClick={() => setIsRotating(!isRotating)}
              data-testid="button-toggle-rotation"
            >
              {isRotating ? "Pause Rotation" : "Resume Rotation"}
            </Button>
          </>
        ) : (
          <div className="w-full h-64 rounded-md bg-gradient-to-br from-background to-muted flex items-center justify-center" data-testid="canvas-3d-viewer">
            <p className="text-sm text-muted-foreground">WebGL not available in this environment</p>
          </div>
        )}
      </div>
    </Card>
  );
}
