
const CoworkingItem = ({title, description, icon:Icon}) => {
  return (
    <div className="flex items-start gap-3 mb-7 justify-start">
        <div className="bg-custom-purple rounded-xl h-[40px] w-[40px] flex items-center justify-center shrink-0 text-white md:h-[50px] md:w-[50px] ">
            {Icon && <Icon className="w-[25px] h-[25px] md:h-[32px] md:w-[32px]" />}
        </div>
        <div className="flex flex-col gap-1 font-secondary text-custom-black">
            <span className="text-lg font-medium md:text-xl">{title}</span>
            <p className="text-sm  md:text-lg">
                {description}
            </p>
        </div>
    </div>
  )
}

export default CoworkingItem