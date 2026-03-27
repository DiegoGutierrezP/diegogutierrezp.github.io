
'use client'
import React, { useEffect, useState } from 'react'
import { Modal } from './ui/Modal'
import { Carousel } from './ui/Carousel'



interface Props {
    project: {
        title: string,
        description: string,
        images?: { src: string }[]
    }
}

export const ProjectItem = ({ project }: Props) => {
    const [open, setOpen] = useState(false)

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <>
            <div onClick={() => setOpen(true)} className="projects-section__content-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>

            <Modal isOpen={open} onClose={closeModal} title={project.title}>
                <div className='carousel'>
                    {/* {
                        project.images?.map((image, index) => (
                            <div key={index} className="carousel-cell">
                                <img key={index} src={image.src} alt={`${project.title} screenshot ${index + 1}`} className="w-full rounded-md mb-4" />
                            </div>
                        ))
                    } */}
                    <Carousel images={project.images ?? []} title={project.title} />
                </div>

            </Modal>
        </>
    )
}
