import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

// Types
interface TrailElement {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  delay: number;
}

interface MouseTrailProps {
  // Trail Configuration
  trailLength?: number;
  trailSize?: number;
  trailColor?: string;
  trailOpacity?: number;
  
  // Animation Settings
  followSpeed?: number;
  fadeSpeed?: number;
  scaleRange?: [number, number];
  
  // Visual Effects
  blurAmount?: number;
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'difference' | 'exclusion';
  glowIntensity?: number;
  
  // Responsive & Performance
  hideOnMobile?: boolean;
  maxFPS?: number;
  enablePerformanceMode?: boolean;
  
  // Interaction
  clickEffect?: boolean;
  hoverEffect?: boolean;
  
  // Styling
  className?: string;
  zIndex?: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const TRAIL_ELEMENTS = 24;
const TRAIL_SIZE_HEAD = 22;
const TRAIL_SIZE_TAIL = 6;
const TRAIL_OPACITY_HEAD = 0.7;
const TRAIL_OPACITY_TAIL = 0.05;
const TRAIL_COLOR = '#b9fbc0'; // Soft pastel, change as needed
const TRAIL_FOLLOW_SPEED = 0.45;
const TRAIL_TOTAL_LENGTH = 90; // px

const MouseTrail: React.FC<MouseTrailProps> = ({
  trailLength = TRAIL_ELEMENTS,
  trailSize = TRAIL_SIZE_HEAD,
  trailColor = TRAIL_COLOR,
  trailOpacity = TRAIL_OPACITY_HEAD,
  followSpeed = TRAIL_FOLLOW_SPEED,
  scaleRange = [0.3, 1],
  blurAmount = 8,
  blendMode = 'difference',
  glowIntensity = 30,
  hideOnMobile = true,
  maxFPS = 60,
  enablePerformanceMode = true,
  clickEffect = false,
  hoverEffect = false,
  className = '',
  zIndex = 9999
}) => {
  // Refs
  const trailRef = useRef<TrailElement[]>([]);
  const mousePos = useRef<MousePosition>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const lastTime = useRef<number>(0);
  const animationId = useRef<number>();
  const isHovering = useRef<boolean>(false);
  const clickRipples = useRef<Array<{ x: number; y: number; time: number; id: number }>>([]);
  const rippleId = useRef<number>(0);

  // State
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [performanceMode, setPerformanceMode] = useState<boolean>(false);
  const [, setTick] = useState(0); // Dummy state to force re-render

  // Performance monitoring
  const fpsCounter = useRef<{ frames: number; lastTime: number; fps: number }>({
    frames: 0,
    lastTime: 0,
    fps: 60
  });

  // Memoized values
  const frameInterval = useMemo(() => 1000 / maxFPS, [maxFPS]);
  const [minScale, maxScale] = scaleRange;

  // Initialize trail elements
  const initializeTrail = useCallback(() => {
    const elements: TrailElement[] = [];
    for (let i = 0; i < trailLength; i++) {
      const t = i / (trailLength - 1);
      const size = TRAIL_SIZE_HEAD + (TRAIL_SIZE_TAIL - TRAIL_SIZE_HEAD) * t;
      const opacity = TRAIL_OPACITY_HEAD + (TRAIL_OPACITY_TAIL - TRAIL_OPACITY_HEAD) * t;
      elements.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        opacity,
        scale: 1,
        delay: 0
      });
    }
    trailRef.current = elements;
  }, [trailLength]);

  // Performance monitoring
  const updateFPS = useCallback((currentTime: number) => {
    fpsCounter.current.frames++;
    if (currentTime - fpsCounter.current.lastTime >= 1000) {
      fpsCounter.current.fps = fpsCounter.current.frames;
      fpsCounter.current.frames = 0;
      fpsCounter.current.lastTime = currentTime;
      
      // Enable performance mode if FPS drops below 30
      if (enablePerformanceMode && fpsCounter.current.fps < 30) {
        setPerformanceMode(true);
      } else if (fpsCounter.current.fps > 45) {
        setPerformanceMode(false);
      }
    }
  }, [enablePerformanceMode]);

  // Animation loop
  const animate = useCallback((currentTime: number) => {
    if (currentTime - lastTime.current < frameInterval) {
      animationId.current = requestAnimationFrame(animate);
      return;
    }

    updateFPS(currentTime);
    lastTime.current = currentTime;

    if (trailRef.current.length > 0) {
      // Snap first element to mouse instantly
      trailRef.current[0].x = mousePos.current.x;
      trailRef.current[0].y = mousePos.current.y;
      trailRef.current[0].scale = 1;

      // Each subsequent element follows the previous one closely
      for (let i = 1; i < trailRef.current.length; i++) {
        const leader = trailRef.current[i - 1];
        const follower = trailRef.current[i];
        // Use a high follow speed for strong overlap
        const followSpeedAdjusted = 0.55;
        follower.x += (leader.x - follower.x) * followSpeedAdjusted;
        follower.y += (leader.y - follower.y) * followSpeedAdjusted;
        follower.scale += (1 - follower.scale) * 0.2;
      }
    }

    setTick(t => t + 1); // Force re-render
    animationId.current = requestAnimationFrame(animate);
  }, [frameInterval, updateFPS]);

  // Event handlers
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    isHovering.current = true;
  }, []);

  const handleMouseLeaveHover = useCallback(() => {
    isHovering.current = false;
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    if (clickEffect && isVisible) {
      clickRipples.current.push({
        x: e.clientX,
        y: e.clientY,
        time: performance.now(),
        id: rippleId.current++
      });
    }
  }, [clickEffect, isVisible]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize and start animation
  useEffect(() => {
    if (isMobile && hideOnMobile) return;

    initializeTrail();
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeaveHover);
    if (clickEffect) {
      document.addEventListener('click', handleClick);
    }

    // Start animation
    animationId.current = requestAnimationFrame(animate);

    return () => {
      // Cleanup
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeaveHover);
      if (clickEffect) {
        document.removeEventListener('click', handleClick);
      }
      
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [isMobile, hideOnMobile, initializeTrail, handleMouseMove, handleMouseLeave, handleMouseEnter, handleMouseLeaveHover, handleClick, animate, clickEffect]);

  // Don't render on mobile if hideOnMobile is true
  if (isMobile && hideOnMobile) return null;

  return (
    <>
      {/* SVG Filter for blur and glow effects */}
      <svg className="fixed inset-0 pointer-events-none" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="mouse-trail-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation={blurAmount} result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${glowIntensity} -10`}
              result="glow" 
            />
          </filter>
        </defs>
      </svg>

      {/* Mouse Trail Container */}
      <div 
        className={`fixed pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          mixBlendMode: blendMode,
          filter: 'url(#mouse-trail-filter)',
          zIndex: zIndex
        }}
        aria-hidden="true"
      >
        {/* Trail Elements */}
        {trailRef.current.map((trail, index) => {
          const t = index / (trailRef.current.length - 1);
          const size = TRAIL_SIZE_HEAD + (TRAIL_SIZE_TAIL - TRAIL_SIZE_HEAD) * t;
          const opacity = TRAIL_OPACITY_HEAD + (TRAIL_OPACITY_TAIL - TRAIL_OPACITY_HEAD) * t;
          return (
            <div
              key={index}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: trail.x - size / 2,
                top: trail.y - size / 2,
                width: size,
                height: size,
                backgroundColor: trailColor,
                opacity: opacity,
                boxShadow: `0 0 16px 2px ${trailColor}`,
                transition: 'none',
              }}
            />
          );
        })}

        {/* Click Ripples */}
        {clickEffect && clickRipples.current.map((ripple) => {
          const age = performance.now() - ripple.time;
          const progress = Math.min(age / 1000, 1);
          const scale = 1 + progress * 3;
          const opacity = 1 - progress;
          
          return (
            <div
              key={ripple.id}
              className="absolute rounded-full pointer-events-none border-2"
              style={{
                left: ripple.x - 20,
                top: ripple.y - 20,
                width: 40,
                height: 40,
                borderColor: trailColor,
                opacity: opacity,
                transform: `scale(${scale})`,
                transition: 'all 0.1s ease-out'
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default MouseTrail; 