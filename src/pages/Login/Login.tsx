import { Link } from 'react-router-dom'
import image from '../../assets/images/image.webp'

export default function Login(){
  return(
    <div className='grid sm:grid-cols-2 h-screen'>
      <img src={image} alt="imagem de teste" className='sm:h-full h-52 w-full object-cover'/>
      <div className='flex flex-col items-center sm:justify-center py-12'>
        <div className='px-4 flex flex-col space-y-3 w-full sm:w-96'>
          <h2 className="text-3xl font-bold pb-4">Entrar</h2>
          <label className='flex flex-col'>
            E-mail:
            <input type="email" placeholder="Informe seu e-mail" className='mt-1 p-4 bg-[#F2F4F8] shadow-md'/>
          </label>
          <label className='flex flex-col'>
            Senha:
            <input type="password" placeholder="Informe sua senha" className='mt-1 p-4 bg-[#F2F4F8] shadow-md'/>
            <p className='text-xs text-[#697077] pt-2'>Informe uma senha segura</p>
          </label>
          <Link to="changepassword" className='text-blue-900 text-sm text-end'>Esqueceu sua senha?</Link>
          <button className='bg-azul-1 text-white py-3'>Entrar</button>
          <br />
          <hr className='pb-6'/>

          <a href="#" className='text-azul-2 text-sm h underline'>Não tem acesso? Clique aqui!</a>
        </div>
      </div>
    </div>
  )
}