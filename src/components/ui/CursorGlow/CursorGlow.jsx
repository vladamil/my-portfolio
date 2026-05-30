'use client';
import { useEffect, useState } from 'react';

import style from './CursorGlow.module.css';

export default function CursorGlow() {
   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleCursorMove = (e) => {
         setCursorPos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleCursorMove);

      return () => {
         window.removeEventListener('mousemove', handleCursorMove);
      };
   }, []);

   return (
      <div
         className={style.glow}
         style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
         }}
      ></div>
   );
}
