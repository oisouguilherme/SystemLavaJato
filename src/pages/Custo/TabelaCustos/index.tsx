import ModalButton from "../Modal";

export function TabelaCustos({date}:any) {
  return (
    <div className="bg-white p-3 space-y-2">
      <h2 className="font-bold">{date}</h2>
      <div className="border rounded-xl">
        <table className="w-full">
          <tbody>
            <tr>
              <th className="text-start pl-5 font-medium py-1">Metasil</th>
              <th className="text-start font-medium">R$ 50,00</th>
              <th className="flex items-center justify-end pr-2 py-1 w-full">
                <ModalButton/>
              </th>
            </tr>
            <tr className="bg-cinza-1">
              <th className="text-start pl-5 font-medium py-1">Solupã</th>
              <th className="text-start font-medium">R$ 100,00</th>
              <th className="flex items-center justify-end pr-2 py-1 w-full">
                <ModalButton/>
              </th>
            </tr>
            <tr>
              <th className="text-start pl-5 font-medium py-1">Falano 01</th>
              <th className="text-start font-medium">R$ 40,00</th>
              <th className="flex items-center justify-end pr-2 py-1 w-full">
                <ModalButton/>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
