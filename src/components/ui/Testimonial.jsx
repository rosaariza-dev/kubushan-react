import { images } from '../../data/resources'

const Testimonial = () => {
  return (
    <div className='bg-white py-7 px-8 text-custom-black flex items-center justify-center flex-col gap-2.5 font-secondary md:flex-row md:gap-5 md:rounded-36 md:mt-2 md:mb-4 md:mx-16 md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:bg-[#dfdfdf] md:min-h-38 md:max-w-max'>
        <div className='flex items-center justify-center gap-4'>
            <span className='text-5xl'>35+</span>
            <span className='text-base'>Clientes satisfechos</span>
        </div>
        <div className='flex items-center justify-center gap-4 border-l border-l-gray-400 pl-3.5 text-[#4a4a4a]'>
            <img src={images.hero.user} alt="customer" width={50} height={50} className='object-contain' />
            <span className='text-sm'>
                “El mejor café, tiene un servicio impecable y un espacio que
              inspira. ¡Mi lugar favorito!”
            </span>
        </div>
    </div>
  )
}

export default Testimonial