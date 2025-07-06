import { coworkingItems } from '../../data'
import { images } from '../../data/resources'
import CoworkingItem from '../ui/CoworkingItem'

const Coworking = () => {
  return (
    <section id='coworking' className='bg-linear-to-l from-custom-gray-gradient to-white flex flex-col md:flex-row flex-wrap'>
        <div className='realtive aspect-[631/946] w-full overflow-hidden flex flex-1/2 items-stretch'>
            <picture>
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
                    className='w-full h-full md:object-cover md:object-top-left'
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

            <ul className='flex flex-col gap-2'>
                {coworkingItems.map(({title, description, icon}) => (
                    <li key={title}><CoworkingItem key={title} title={title} description={description} icon={icon} /></li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Coworking
