"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const AIMLBackground = (props: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(3000), { radius: 2.5 })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 30;
        ref.current.rotation.y -= delta / 35;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#00d9ff"
                    size={0.002}
                    sizeAttenuation={true}
                    dethWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[-1]">
        {/* Simple AI/ML Themed Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0f0728] to-[#030014]">
            {/* Subtle Grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                    linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px'
            }} />
        </div>
        
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <AIMLBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;