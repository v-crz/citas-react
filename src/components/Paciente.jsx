const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id}=paciente;

    const handleEliminar = () => {
        const respuesta = confirm('¿Desear eliminar este paciente?');
        if(respuesta) {
            eliminarPaciente(id);
        }
    }
    return (
    <div className="card">
        <p className="card-title">Nombre: {''}
            <span className="card-text">{nombre}</span>
        </p>

        <p className="card-title">Propietario: {''}
            <span className="card-text">{propietario}</span>
        </p>

        <p className="card-title">Email: {''}
            <span className="card-text">{email}</span>
        </p>

        <p className="card-title">Fecha Alta: {''}
            <span className="card-text">{fecha}</span>
        </p>

        <p className="card-title">Síntomas: {''}
            <span className="card-text">{sintomas}</span>
        </p>

        <div className="buttons">
            <button 
                type="button"
                className="btn-edit"
                onClick={() => setPaciente(paciente)}
            >
                Editar
            </button>
            <button 
                type="button"
                className="btn-remove"
                onClick={handleEliminar}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}
 
export default Paciente
