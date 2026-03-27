'use client'

import React, { useEffect } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export const Modal = ({ isOpen, onClose, children, title }: Props) => {
  useEffect(() => {
    if (!isOpen) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {title ? (
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>

            <button
              type="button"
              onClick={onClose}
              className="modal-close"
              aria-label="Cerrar"
            >
              <CloseIcon />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onClose}
            className="modal-close modal-close--floating"
            aria-label="Cerrar"
          >
            <CloseIcon />
          </button>
        )}

        <div className="modal-content">{children}</div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          padding: 1.5rem;
          display: grid;
          place-items: center;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9999;
          animation: backdropIn 0.25s ease;
          box-sizing: border-box;
        }

        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .modal-box {
          position: relative;
          width: 100%;
          max-width: 800px;
          max-height: calc(100vh - 3rem);
          overflow-y: auto;
          background: var(--color-background);
          border: 1px solid var(--color-background-secondary);
          border-radius: 0.8rem;
          box-shadow:
            0 0 0 0.5px rgba(255,255,255,0.06),
            0 24px 64px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.08);
          animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem 0;
        }

        .modal-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          margin: 0;
          font-family: var(--font-montserrat);
        }

        .modal-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 0.4rem;
          background: transparent;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: color 0.15s, background 0.15s, border-color 0.15s;
          flex-shrink: 0;
        }

        .modal-close:hover {
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
        }

        .modal-close--floating {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .modal-content {
          padding: 1.25rem 1.5rem 1.5rem;
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 480px) {
          .modal-overlay {
            padding: 1rem;
            align-items: flex-end;
          }

          .modal-box {
            max-width: 100%;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation: sheetIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
          }

          @keyframes sheetIn {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </div>
  )
}

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 2l12 12M14 2L2 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)