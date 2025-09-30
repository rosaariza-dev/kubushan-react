const CardMenu = ({title, description , price, image}) => {
  return (
    <div className='flex items-center justify-start flex-col  gap-3 bg-custom-card-menu py-10 px-6 shadow-lg max-w-[380px] rounded-36'>
        <div className='size-[250px] '>
            {image ?
            (<img src={image} alt={title} className='w-full h-full object-contain aspect-auto' />)
                : (
                    <div className="font-medium animate-pulse  uppercase flex items-center justify-center text-4xl text-gray-400 bg-gray-300 rounded-36 w-full h-full">kubushan</div>
                )
            }
        </div>
        <span className='font-primary capitalize text-custom-black font-semibold text-3xl'>{title}</span>
        <span className='font-secondary text-base text-gray-500 first-letter:uppercase'>{description}</span>
        <span className='font-primary text-lg bg-custom-black rounded-36 text-white px-4 py-1 font-semibold'>${price}</span>
    </div>
  )
}

export default CardMenu