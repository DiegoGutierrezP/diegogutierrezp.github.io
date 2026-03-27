'use client'

import React, { useState } from 'react'

interface Props {
    images: { src: string }[]
    title: string
}

export const Carousel = ({ images, title }: Props) => {
    const [current, setCurrent] = useState(0)

    if (!images || images.length === 0) return null

    const prev = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const next = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="carousel">
            <button className="carousel-btn left" onClick={prev} aria-label="Anterior">
                ‹
            </button>

            <div className="carousel-track">
                <img
                    src={images[current].src}
                    alt={`${title} screenshot ${current + 1}`}
                    className="carousel-image"
                />
            </div>

            <button className="carousel-btn right" onClick={next} aria-label="Siguiente">
                ›
            </button>

            <div className="carousel-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>

            <style>{`
        .carousel {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }

        .carousel-track {
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
        }

        .carousel-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background 0.2s ease;
        }

        .carousel-btn:hover {
          background: rgba(0, 0, 0, 0.8);
        }

        .carousel-btn.left {
          left: 12px;
        }

        .carousel-btn.right {
          right: 12px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .dot.active {
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>
        </div>
    )
}