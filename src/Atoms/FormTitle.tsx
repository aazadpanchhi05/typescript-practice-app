interface Props {
    text: string
}

export const FormTitle = (props: Props) => {
    return (
        <div className='max-w-md w-full mx-auto'>
            <div className='text-center font-medium text-2xl'>{props.text}</div>
        </div>
    )
}
