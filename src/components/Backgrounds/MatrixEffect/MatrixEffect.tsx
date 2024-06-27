import React, { useEffect, useRef } from 'react';
import './MatrixEffect.css';

const MatrixEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        //making the canvas full screen
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        //characters - taken from the unicode charset
        const matrixString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrix = matrixString.split(""); // converting the string into an array of single characters

        const font_size = 10;
        const columns = canvas.width / font_size;
        const drops: number[] = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {
            if (!ctx || !canvas) return; // Verificação adicional para garantir que ctx e canvas não são null

            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#f4427d";
            ctx.font = `${font_size}px arial`;

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
                    drops[i] = 0;

                drops[i]++;
            }
        }

        const interval = setInterval(draw, 35);

        return () => clearInterval(interval);
    }, []);

    return (
        <canvas ref={canvasRef} id="matrix-canvas"></canvas>
    );
}

export default MatrixEffect;
