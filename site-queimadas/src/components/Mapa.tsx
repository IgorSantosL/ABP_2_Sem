import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

const redIcon = new L.Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
});

interface Queimada {
  id: number;
  Latitude: number;
  Longitude: number;
  DataHora: string;
  Municipio: string;
  Estado: string;
  Bioma: string;
  RiscoFogo: number;
  FRP: number;
}

export const Mapa = ({ filtros }: { filtros: { estado: string, dataInicio: string, dataFim: string } }) => {
  const [pontos, setPontos] = useState<Queimada[]>([]);

  useEffect(() => {
    if (filtros.estado && filtros.dataInicio && filtros.dataFim) {
      fetch(`http://localhost:3000/api/queimadas?estado=${filtros.estado}&dataInicio=${filtros.dataInicio}&dataFim=${filtros.dataFim}`)
        .then(res => res.json())
        .then(setPontos)
        .catch(err => console.error('Erro ao buscar queimadas:', err));
    }
  }, [filtros]);

  return (
    <div style={{ width: '600px', height: '500px', margin: '0 auto' }}>
      <MapContainer center={[-14, -52]} zoom={4} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pontos.map((ponto, idx) => (
          <Marker key={idx} position={[ponto.Latitude, ponto.Longitude]} icon={redIcon}>
            <Popup>
              <div>
                <strong>Município:</strong> {ponto.Municipio}<br />
                <strong>Estado:</strong> {ponto.Estado}<br />
                <strong>Data:</strong> {new Date(ponto.DataHora).toLocaleString()}<br />
                <strong>Bioma:</strong> {ponto.Bioma}<br />
                <strong>Risco de Fogo:</strong> {ponto.RiscoFogo}<br />
                <strong>FRP:</strong> {ponto.FRP}<br />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
