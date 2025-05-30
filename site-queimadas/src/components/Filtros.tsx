import React, { useEffect, useState } from 'react';

interface Props {
  onFiltrar: (estado: string, dataInicio: string, dataFim: string) => void;
}

export const Filtros: React.FC<Props> = ({ onFiltrar }) => {
  const [estados, setEstados] = useState<string[]>([]);
  const [estado, setEstado] = useState('todos');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/estados')
      .then(res => res.json())
      .then(data => setEstados(data));
  }, []);
  
  return (
    <div className="p-4">
      <select 
        value={estado} 
        onChange={e => setEstado(e.target.value)}
        className="mr-2 p-2 border rounded"
      >
        <option value="todos">Todos os estados</option>
        {estados.map(est => (
          <option key={est} value={est}>{est}</option>
        ))}
      </select>
      <input 
        type="date" 
        value={dataInicio} 
        onChange={e => setDataInicio(e.target.value)}
        className="mr-2 p-2 border rounded"
      />
      <input 
        type="date" 
        value={dataFim} 
        onChange={e => setDataFim(e.target.value)}
        className="mr-2 p-2 border rounded"
      />
      <button 
        onClick={() => onFiltrar(estado, dataInicio, dataFim)}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Filtrar
      </button>
    </div>
  );
};