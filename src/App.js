
import { useState } from 'react';
import Topo from './componentes/topo';
import SecaoBanner from './componentes/secaoBanner';
import SecaoExperienciaTrabalho from './componentes/secaoExperienciaTrabalho';
import Rodape from './componentes/rodape';
import './App.css';

export default function App() {

	const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <main>
	    <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <SecaoBanner ehTemaEscuro={ehTemaEscuro}/>
      <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro}/>
      <Rodape ehTemaEscuro={ehTemaEscuro}/>
		</main>
  );
}