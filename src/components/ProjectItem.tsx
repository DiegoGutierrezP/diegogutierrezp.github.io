
import React from 'react'

interface Props {
    project: {
        title: string,
        description: string
    }
}

export const ProjectItem = ({ project }: Props) => {
    return (
        <>
            <div className="projects-section__content-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>

            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}
