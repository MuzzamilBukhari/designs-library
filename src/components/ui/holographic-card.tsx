"use client";
import React, { useRef } from 'react';

const HolographicCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className="component-card holographic-card transition-transform duration-200 ease-out relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800 p-8 min-h-[300px] flex items-center justify-center cursor-pointer" 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="holo-content text-center relative z-10 pointer-events-none">
                <h3 className="component-title" style={{fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', letterSpacing: '-0.025em'}}>
                    Holographic Card
                </h3>
                <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
                    Move your mouse over me!
                </p>
            </div>
            {/* Added some inline styles to make the holo-glow visible without external CSS */}
            <div 
                className="holo-glow absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-color-dodge"
                style={{
                    background: `radial-gradient(circle at var(--bg-x, 50%) var(--bg-y, 50%), rgba(255,255,255,0.4) 0%, transparent 50%)`,
                }}
            ></div>
            <style>{`
                .holographic-card:hover .holo-glow {
                    opacity: 1;
                }
                .holographic-card {
                    transform-style: preserve-3d;
                }
                .holo-content {
                    transform: translateZ(30px);
                }
            `}</style>
        </div>
    );
};

export default HolographicCard;
