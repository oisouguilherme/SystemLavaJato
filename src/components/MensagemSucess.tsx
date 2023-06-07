import IconClose from '../assets/images/closed.svg'
import IconCheck from '../assets/images/check.svg'

export function MensagemSucess(){
  return(
    <div className='w-full flex justify-between border-l-4 border-verde-1 py-4 bg-verde-1 bg-opacity-10 fixed bottom-[60px] px-2 sm:px-8'>
      <div className=' flex gap-1 sm:gap-3'>
        <img src={IconCheck} alt="" />
        <p className='font-semibold text-sm sm:text-base'>Novo custo adicionado com sucesso</p>
      </div>
      <button className='cursor-pointer'>
        <img src={IconClose} alt="" />
      </button>
    </div>
  )
}