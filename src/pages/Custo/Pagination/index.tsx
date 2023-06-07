import IconArrowLeft from '../../../assets/images/ArrowLeft.svg'
import IconArrowRight from '../../../assets/images/ArrowRight.svg'

export function Pagination(){
  return(
    <div className='text-azul-1 flex justify-between items-center text-lg pt-8'>
      <img src={IconArrowLeft} alt="Voltar" className='w-10 cursor-pointer'/>
      <div className='flex'>
        <p className='hover:bg-azul-1 hover:bg-opacity-20 px-4 py-1 cursor-pointer'>1</p>
        <p className='hover:bg-azul-1 hover:bg-opacity-20 px-4 py-1 cursor-pointer'>2</p>
        <p className='hover:bg-azul-1 hover:bg-opacity-20 px-4 py-1 cursor-pointer'>3</p>
        <p className='hover:bg-azul-1 hover:bg-opacity-20 px-4 py-1 cursor-pointer'>4</p>
        <p className='hover:bg-azul-1 hover:bg-opacity-20 px-4 py-1 cursor-pointer'>5</p>
        
      </div>
      <img src={IconArrowRight} alt="Proxima" className='w-10 cursor-pointer'/>
    </div>
  )
}