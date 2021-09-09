import React, { ReactElement } from 'react'

interface Props {
    error: string
}

export default function Alert(props: Props): ReactElement {

    const classes = 'bg-red-100 border-l-4 border-red-500 text-red-700 p-4'

    return (
        <div className={classes} role="alert">
            <p className="font-bold">{props.error}</p>
        </div>
    )
}
