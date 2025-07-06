import { images } from '../../data/resources'

const Coworking = () => {
  return (
    <section id='coworking' className='bg-linear-to-l from-custom-gray-gradient to-white flex flex-col md:flex-row flex-wrap'>
        <div className='aspect-[631/946] overflow-hidden flex flex-1/2 items-stretch'>
            <picture className='w-full h-full'>
                <source
                    media="(min-width: 1440px)"
                    srcSet={images.coworking.coworkingDesktop}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={images.coworking.coworkingMedium}
                />
                <img
                    src={images.coworking.coworkingSmall}
                    width="631"
                    height="946"
                    alt="zona de coworking"
                    className='w-full h-full object-cover object-top-left'
                />
            </picture>
        </div>
        <div className='py-14 px-8 flex-1/2 md:px-16'>
            <span className="encabezado">servicios</span>
            <span className="title"
            >Zona Coworking: <br />
            Trabaja al siguiente nivel</span>
            <p className="description py-8">
            En Kubushan llevamos el café al siguiente nivel. <br />Nuestra zona
            coworking combina diseño moderno, tecnología de punta y el ambiente
            ideal para crear, trabajar y crecer.
            </p>
        </div>
    </section>
  )
}

export default Coworking
