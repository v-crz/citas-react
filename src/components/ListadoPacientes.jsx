import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="listado">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="listado-h2">Listado pacientes</h2>
          <p className="listado-p">
            Administra tus {''}
            <span className="listado-p-alt">Pacientes y Citas</span>
          </p>
    
          { pacientes.map((paciente) => 
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          )}
        </>
      ) : (
        <>
          <h2 className="listado-h2">No hay pacientes</h2>
          <p className="listado-p">
            Comienza agregando pacientes {''}
            <span className="listado-p-alt">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes
