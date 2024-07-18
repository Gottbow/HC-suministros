import prodDestacados from '../home/prodDestacados1.json';
import Productbox from './Productbox';

export default function ProductSection () {

const carruselProd = [...prodDestacados, ...prodDestacados];
  return (
    <section className='my-5'>
        <article className='w-full py-10 bg-[--clr-rojo]'>
            <h2 className=' text-center text-3xl text-white font-bold'>Productos Destacados</h2>
        </article>
        <article className='my-5'>
            <div className="overflow-hidden w-full">
                <div className="flex whitespace-nowrap phone-a-scroll md:animate-scroll">
                    {carruselProd.map((prodDestacado, index) => (
                        <Productbox prodDestacado={prodDestacado} key={index} />
                    ))}
                </div>
            </div>
        </article>
    </section>
  )
}