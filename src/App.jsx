
import { useEffect, useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'


function App() {
  const [pacientes, setPacientes] = useState( () => JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLs = () => {
  //     const pacientesLs = JSON.parse(localStorage.getItem('pacientes'));
  //     console.log(pacientesLs);
  //     pacientesLs?.length > 0 && setPacientes(pacientesLs);
  //   }

  //   obtenerLs();

  // }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    // console.log(id);
    const pacientesActualizados = pacientes.filter(newPaciente => newPaciente.id !== id)
    setPacientes(pacientesActualizados)
  }


  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

        />
      </div>

    </div>
  )
}

export default App
