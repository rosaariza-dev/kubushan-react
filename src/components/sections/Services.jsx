import { servicesItems } from "../../data"
import CardService from "../ui/CardService"

const Services = () => {
  return (
    <section id='services' className="py-20 px-8 flex flex-col items-center bg-linear-to-r from-custom-gray-gradient to-white ">
        <span className='encabezado'>servicios</span>
        <span className='title text-center'>Nuestros servicios</span><br />
        <span className="font-secondary block text-xl py-5 text-custom-black">En Kubushan pensamos en todo</span>
        <div className="flex flex-col justify-center gap-14 my-10 items-stretch md:flex-row md:flex-wrap md:gap-10">
            {servicesItems.map(({title, img, description, color}) => (
               <CardService key={title} title={title} description={description} img={img} color={color} />
            ))}
        </div>
    </section>
  )
}

export default Services
