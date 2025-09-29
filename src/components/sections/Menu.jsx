import CarouselMenu from "../ui/CarouselMenu"

const Menu = () => {
  return (
    <section id="menu">
       <div className='pt-16 pb-10 px-8 md:px-16 text-center'>
            <span className='encabezado'>menú</span>
            <span className='title'>Descubre nuestro menú</span>
            <div className="mt-16">
                <CarouselMenu />
                <div>
                    {/* opciones */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu
