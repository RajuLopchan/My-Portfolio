import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, useTexture } from '@react-three/drei';
import { Box, Typography, useTheme } from '@mui/material';
import * as THREE from 'three';

interface Skill3DIconProps {
  logo: string;
  name: string;
  category: string;
  index: number;
}

// 3D Icon Component
const SkillIcon3D = ({ logo, name, index, textureError }: { logo: string; name: string; index: number; textureError: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  
  // Load texture with error handling
  const texture = useTexture(logo);
  
  // Create a simple 3D geometry based on the skill
  const getGeometry = () => {
    switch (name.toLowerCase()) {
      case 'react js':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'javascript':
        return <sphereGeometry args={[0.6, 32, 32]} />;
      case 'html':
        return <boxGeometry args={[1.2, 0.8, 0.2]} />;
      case 'css':
        return <cylinderGeometry args={[0.5, 0.5, 1, 6]} />;
      case 'typescript':
        return <octahedronGeometry args={[0.6]} />;
      case 'tailwind css':
        return <torusGeometry args={[0.5, 0.2, 16, 32]} />;
      case 'material ui':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'java':
        return <sphereGeometry args={[0.6, 32, 32]} />;
      case 'git':
        return <coneGeometry args={[0.5, 1, 6]} />;
      case 'github':
        return <boxGeometry args={[1, 1, 0.2]} />;
      case 'figma':
        return <sphereGeometry args={[0.6, 32, 32]} />;
      case 'mongodb':
        return <cylinderGeometry args={[0.4, 0.4, 1.2, 8]} />;
      case 'mysql':
        return <boxGeometry args={[1, 1.2, 0.8]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  // Get color based on skill
  const getColor = () => {
    switch (name.toLowerCase()) {
      case 'react js':
        return '#61DAFB';
      case 'javascript':
        return '#F7DF1E';
      case 'html':
        return '#E34F26';
      case 'css':
        return '#1572B6';
      case 'typescript':
        return '#3178C6';
      case 'tailwind css':
        return '#06B6D4';
      case 'material ui':
        return '#0081CB';
      case 'java':
        return '#ED8B00';
      case 'git':
        return '#F05032';
      case 'github':
        return '#181717';
      case 'figma':
        return '#F24E1E';
      case 'mongodb':
        return '#47A248';
      case 'mysql':
        return '#4479A1';
      default:
        return theme.palette.primary.main;
    }
  };

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the mesh
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      meshRef.current.rotation.y += 0.01;
      
      // Add hover effect
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {getGeometry()}
        <meshStandardMaterial
          map={textureError ? null : texture}
          color={textureError ? getColor() : (hovered ? '#ffffff' : '#ffffff')}
          metalness={textureError ? 0.3 : 0.1}
          roughness={textureError ? 0.4 : 0.2}
          emissive={hovered ? getColor() : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
          transparent={true}
          opacity={textureError ? 1 : 0.9}
        />
      </mesh>
    </Float>
  );
};

// Main 3D Icon Component
const Skill3DIcon: React.FC<Skill3DIconProps> = ({ logo, name, category, index }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [isLoaded, setIsLoaded] = useState(false);
  const [fallback2D, setFallback2D] = useState(false);
  const [textureError, setTextureError] = useState(false);

  React.useEffect(() => {
    // Small delay to ensure proper mounting
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Fallback to 2D if 3D fails
  const handle3DError = React.useCallback(() => {
    setFallback2D(true);
  }, []);

  // Handle texture loading errors
  const handleTextureError = React.useCallback(() => {
    setTextureError(true);
  }, []);

  return (
    <Box
      sx={{
        minWidth: { xs: 100, sm: 170, md: 200 },
        maxWidth: { xs: 120, sm: 200, md: 240 },
        minHeight: { xs: 90, sm: 150, md: 200 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        position: 'relative',
      }}
    >
      {/* 3D Canvas Container */}
      <Box
        sx={{
          width: { xs: 80, sm: 100, md: 120 },
          height: { xs: 80, sm: 100, md: 120 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 0.8, sm: 1.2 },
          position: 'relative',
        }}
      >
        {isLoaded && !fallback2D ? (
          <Canvas
            camera={{ position: [0, 0, 3], fov: 50 }}
            style={{ width: '100%', height: '100%' }}
            gl={{ antialias: true, alpha: true }}
            onError={handle3DError}
            key={`canvas-${name}-${index}`}
          >
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
            <Environment preset="city" />
            <SkillIcon3D logo={logo} name={name} index={index} textureError={textureError} />
          </Canvas>
        ) : (
          // Fallback 2D image
          <Box
            component="img"
            src={logo}
            alt={`${name} logo`}
            sx={{
              width: { xs: 48, sm: 60, md: 72 },
              height: { xs: 48, sm: 60, md: 72 },
              objectFit: 'contain',
              filter: isLight ? 'none' : 'brightness(1.1)',
            }}
          />
        )}
      </Box>

      {/* Skill Name */}
      <Typography 
        fontWeight={700} 
        fontSize={{ xs: 12, sm: 16 }} 
        color={theme.palette.text.primary} 
        textAlign="center"
        sx={{ mb: 0.5 }}
      >
        {name}
      </Typography>

      {/* Category */}
      <Typography 
        fontSize={{ xs: 9, sm: 11 }} 
        color={theme.palette.text.secondary} 
        textAlign="center"
      >
        {category}
      </Typography>
    </Box>
  );
};

export default Skill3DIcon; 