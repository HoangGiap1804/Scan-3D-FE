import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, useGLTF, useAnimations } from '@react-three/drei';

function Model(props) {
    const group = useRef();
    // Adjust the path if your file is named differently or in a subfolder
    const { scene, animations } = useGLTF('/robot.glb');
    const { actions } = useAnimations(animations, group);

    // Play animation if available
    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            // Play the first animation found
            actions[Object.keys(actions)[0]].play();
        }
    }, [actions]);

    return <primitive ref={group} object={scene} {...props} />;
}

// Preload to avoid loading pause
useGLTF.preload('@/public/robot.glb');

const Hero3D = () => {
    return (
        <div className="w-full h-full absolute inset-0 -z-0">
            <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1} />
                <directionalLight position={[0, 5, 5]} intensity={1.5} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                    <Model position={[0, -3, 0]} scale={7} rotation={[0, -0.5, 0]} />
                </Float>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
