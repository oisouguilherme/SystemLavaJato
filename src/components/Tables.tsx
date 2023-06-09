import IconPlus from '../assets/images/plus.svg'
import Icondate from '../assets/images/data.svg'
import IconFixed from '../assets/images/fixed.svg'
import IconBandeira from '../assets/images/band.svg'
import IconPoint from '../assets/images/points.svg'

export function Tables(){
  return(
    <div className='bg-white p-3 space-y-3'>
      <div className=''>
        <p>José Onofre</p>
        <p className='font-bold'>Gol Preto - JHG-2911</p>
      </div>
      <div className='border rounded-xl overflow-hidden'>
        <table className='w-full'>
          <tbody>
            <tr className='rounded-full'>
              <td className='p-1'>Americana - P</td>
              <td className='p-1 text-end'>R$50,00</td>
            </tr>
            <tr className='bg-cinza-1'>
              <td className='p-1'>Americana - P</td>
              <td className='p-1 text-end'>R$50,00</td>
            </tr>
            <tr>
              <td className='p-1'>Americana - P</td>
              <td className='p-1 text-end'>R$50,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className='bg-vermelho-1 text-white rounded-xl font-semibold'>
              <td className='p-1'>Não Pago</td>
              <td className='p-1 text-end'>R$100,00</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-6'>
          <img src={IconPlus} alt="Icone adicionar mais" className='cursor-pointer'/>
          <img src={Icondate} alt="Data" className='cursor-pointer'/>
          <img src={IconFixed} alt="Fixar" className='cursor-pointer'/>
          <img src={IconBandeira} alt="Salvar" className='cursor-pointer'/>
        </div>
        
        <img src={IconPoint} alt="Mais opções" className='cursor-pointer'/>
      </div>
    </div>
  )
}