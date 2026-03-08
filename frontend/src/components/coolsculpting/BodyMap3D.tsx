import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Text, Environment, ContactShadows, MeshTransmissionMaterial } from "@react-three/drei";
import { useState, useRef, useMemo, useCallback, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { ArrowRight, Snowflake, Clock, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

// Treatment zone data
const treatmentZones = [
  {
    id: "chin",
    label: "Double Chin",
    position: [0, 2.85, 0.35] as [number, number, number],
    scale: 0.22,
    color: "#4fc3f7",
    fatReduction: "20-25%",
    sessions: "1-2",
    duration: "35 min",
    description: "CoolMini® applicator precisely targets submental fat for a defined jawline without surgery.",
    popular: true,
  },
  {
    id: "arms",
    label: "Upper Arms",
    position: [1.15, 1.6, 0] as [number, number, number],
    scale: 0.2,
    color: "#81c784",
    fatReduction: "20-25%",
    sessions: "1-2",
    duration: "35 min",
    description: "Eliminate stubborn arm fat that won't respond to diet or exercise.",
  },
  {
    id: "chest",
    label: "Chest / Bra Fat",
    position: [0.55, 1.85, 0.2] as [number, number, number],
    scale: 0.22,
    color: "#ce93d8",
    fatReduction: "20-25%",
    sessions: "1-2",
    duration: "35 min",
    description: "Smooth bra bulge and chest fat for a sleeker silhouette.",
  },
  {
    id: "abdomen",
    label: "Abdomen",
    position: [0, 0.8, 0.3] as [number, number, number],
    scale: 0.35,
    color: "#4dd0e1",
    fatReduction: "20-27%",
    sessions: "2-3",
    duration: "35-60 min",
    description: "Our most popular treatment area. Freeze away belly fat with the CoolAdvantage™ applicator.",
    popular: true,
  },
  {
    id: "flanks",
    label: "Love Handles",
    position: [-0.75, 0.9, 0.1] as [number, number, number],
    scale: 0.25,
    color: "#ffb74d",
    fatReduction: "20-25%",
    sessions: "1-2",
    duration: "35 min",
    description: "Sculpt your waistline by targeting resistant flank fat deposits.",
    popular: true,
  },
  {
    id: "back",
    label: "Back Fat",
    position: [-0.6, 1.5, -0.2] as [number, number, number],
    scale: 0.25,
    color: "#a1887f",
    fatReduction: "20-25%",
    sessions: "1-2",
    duration: "35 min",
    description: "Smooth back rolls and bra-line bulge for a contoured back profile.",
  },
  {
    id: "thighs_inner",
    label: "Inner Thighs",
    position: [0.3, -0.5, 0.15] as [number, number, number],
    scale: 0.22,
    color: "#f48fb1",
    fatReduction: "20-25%",
    sessions: "1-2",
    duration: "35 min",
    description: "Reduce inner thigh fat for a slimmer, more proportionate leg contour.",
  },
  {
    id: "thighs_outer",
    label: "Outer Thighs",
    position: [-0.65, -0.3, 0.1] as [number, number, number],
    scale: 0.25,
    color: "#90caf9",
    fatReduction: "20-25%",
    sessions: "1-2",
    duration: "35 min",
    description: "Target saddlebag areas and outer thigh bulges for smoother lines.",
  },
  {
    id: "banana_roll",
    label: "Under Buttock",
    position: [0, -0.85, -0.15] as [number, number, number],
    scale: 0.2,
    color: "#fff176",
    fatReduction: "20-25%",
    sessions: "1-2",
    duration: "35 min",
    description: "Banana roll treatment lifts the under-buttock crease for a perkier contour.",
  },
];

// Glowing hotspot sphere
function Hotspot({
  position,
  scale,
  color,
  isActive,
  onClick,
  label,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  isActive: boolean;
  onClick: () => void;
  label: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.08 + 1;
      meshRef.current.scale.setScalar(scale * (isActive ? 1.4 : pulse));
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.015;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
    if (glowRef.current) {
      glowRef.current.intensity = isActive ? 3 : 1 + Math.sin(state.clock.elapsedTime * 3) * 0.5;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
        {/* Core sphere */}
        <mesh ref={meshRef} onClick={onClick} onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = "pointer"; }} onPointerOut={() => { document.body.style.cursor = "auto"; }}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial
            color={color}
            emissive={color}
            emissiveIntensity={isActive ? 1.5 : 0.6}
            transparent
            opacity={isActive ? 0.95 : 0.7}
            roughness={0.1}
            metalness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Orbiting ring */}
        <mesh ref={ringRef} scale={isActive ? 1.8 : 1.4}>
          <torusGeometry args={[scale * 1.2, 0.02, 16, 64]} />
          <meshBasicMaterial color={color} transparent opacity={isActive ? 0.8 : 0.3} />
        </mesh>

        {/* Outer glow ring */}
        {isActive && (
          <mesh scale={2}>
            <ringGeometry args={[scale * 0.9, scale * 1.1, 64]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} side={THREE.DoubleSide} />
          </mesh>
        )}
      </Float>

      <pointLight ref={glowRef} color={color} intensity={1} distance={3} />
    </group>
  );
}

// Stylized body silhouette using capsule geometry
function BodyModel({ activeZone }: { activeZone: string | null }) {
  const bodyRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (bodyRef.current) {
      bodyRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  const bodyMaterial = useMemo(
    () => (
      <meshPhysicalMaterial
        color="hsl(220, 15%, 20%)"
        transparent
        opacity={0.25}
        roughness={0.4}
        metalness={0.6}
        side={THREE.DoubleSide}
        wireframe={false}
      />
    ),
    []
  );

  return (
    <group ref={bodyRef}>
      {/* Head */}
      <mesh position={[0, 3.2, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        {bodyMaterial}
      </mesh>

      {/* Neck */}
      <mesh position={[0, 2.75, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 0.3, 16]} />
        {bodyMaterial}
      </mesh>

      {/* Torso */}
      <mesh position={[0, 1.5, 0]}>
        <capsuleGeometry args={[0.5, 2, 16, 32]} />
        {bodyMaterial}
      </mesh>

      {/* Left Arm */}
      <mesh position={[0.95, 1.7, 0]} rotation={[0, 0, -0.25]}>
        <capsuleGeometry args={[0.12, 1.4, 8, 16]} />
        {bodyMaterial}
      </mesh>

      {/* Right Arm */}
      <mesh position={[-0.95, 1.7, 0]} rotation={[0, 0, 0.25]}>
        <capsuleGeometry args={[0.12, 1.4, 8, 16]} />
        {bodyMaterial}
      </mesh>

      {/* Left Leg */}
      <mesh position={[0.3, -0.8, 0]}>
        <capsuleGeometry args={[0.18, 2, 8, 16]} />
        {bodyMaterial}
      </mesh>

      {/* Right Leg */}
      <mesh position={[-0.3, -0.8, 0]}>
        <capsuleGeometry args={[0.18, 2, 8, 16]} />
        {bodyMaterial}
      </mesh>

      {/* Subtle grid floor */}
      <gridHelper args={[6, 20, "hsl(220, 50%, 30%)", "hsl(220, 50%, 15%)"]} position={[0, -2, 0]} />
    </group>
  );
}

// Ambient particles
function AmbientParticles() {
  const count = 80;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="hsl(200, 80%, 70%)" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function Scene({
  activeZone,
  setActiveZone,
}: {
  activeZone: string | null;
  setActiveZone: (zone: string | null) => void;
}) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="hsl(220, 60%, 80%)" />
      <directionalLight position={[-3, 3, -3]} intensity={0.3} color="hsl(200, 70%, 70%)" />

      <BodyModel activeZone={activeZone} />

      {treatmentZones.map((zone) => (
        <Hotspot
          key={zone.id}
          position={zone.position}
          scale={zone.scale}
          color={zone.color}
          isActive={activeZone === zone.id}
          onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
          label={zone.label}
        />
      ))}

      <AmbientParticles />
      <ContactShadows position={[0, -2, 0]} opacity={0.3} scale={8} blur={2} far={4} color="hsl(220, 50%, 20%)" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}

export default function BodyMap3D() {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const activeData = treatmentZones.find((z) => z.id === activeZone);

  return (
    <section className="py-28 bg-cosmic relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Interactive Explorer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Explore <em className="text-primary">Treatment Zones</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Click any glowing zone on the 3D body to discover how CoolSculpting® targets and eliminates fat cells in that area.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Zone selector pills - left side */}
          <div className="lg:col-span-1 flex flex-row flex-wrap lg:flex-col gap-2 order-2 lg:order-1">
            {treatmentZones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-sans transition-all duration-300 border ${
                  activeZone === zone.id
                    ? "bg-primary/20 border-primary/50 text-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                    : "bg-card/30 border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: zone.color, boxShadow: activeZone === zone.id ? `0 0 8px ${zone.color}` : "none" }}
                  />
                  <span className="truncate">{zone.label}</span>
                  {zone.popular && (
                    <span className="text-[9px] uppercase tracking-wider bg-primary/20 text-primary px-1.5 py-0.5 rounded-full ml-auto flex-shrink-0">
                      Popular
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* 3D Canvas */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-3xl overflow-hidden border border-primary/10 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none z-10" />
              <Canvas
                camera={{ position: [0, 1, 6], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
              >
                <Suspense fallback={null}>
                  <Scene activeZone={activeZone} setActiveZone={setActiveZone} />
                </Suspense>
              </Canvas>
              {/* Instruction overlay */}
              {!activeZone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-card/80 backdrop-blur-md border border-border/50 rounded-full px-5 py-2.5 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-muted-foreground font-sans tracking-wide">Click a glowing zone to explore</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Info panel - right side */}
          <div className="lg:col-span-1 order-3">
            <AnimatePresence mode="wait">
              {activeData ? (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/60 backdrop-blur-md border border-primary/20 rounded-2xl p-6 space-y-5"
                  style={{ boxShadow: `0 0 40px ${activeData.color}15` }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: activeData.color, boxShadow: `0 0 10px ${activeData.color}` }} />
                      <h3 className="font-serif text-xl text-foreground">{activeData.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeData.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target size={14} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{activeData.fatReduction}</p>
                        <p className="text-xs text-muted-foreground">Fat Reduction</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Snowflake size={14} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{activeData.sessions} Sessions</p>
                        <p className="text-xs text-muted-foreground">Recommended</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock size={14} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{activeData.duration}</p>
                        <p className="text-xs text-muted-foreground">Per Session</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="gold-shimmer text-primary-foreground px-5 py-3 text-xs font-sans uppercase tracking-[0.15em] rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform w-full"
                  >
                    Book This Zone <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 text-center"
                >
                  <Snowflake size={32} className="text-primary/40 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Select a treatment zone to see details</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
