import React, { useState } from 'react';
import IconThreepoints from "../../../assets/images/threePoints.svg";
import { Link } from 'react-router-dom';

const ModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>
        <img src={IconThreepoints} alt="" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white w-96 p-6 rounded shadow-md z-10">
            <h2 className="text-2xl font-bold mb-4">Atenção</h2>
            <p className='mb-4'>O que você deseja fazer?</p>
            <div className='flex justify-between'>
              <button className="mt-4 text-vermelho-1 w-1/2 py-2 px-4 " onClick={closeModal}>
                Remover
              </button>
              <Link to="/menu/editar-custo" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white w-1/2 py-2 px-4 ">
                Editar
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalButton;