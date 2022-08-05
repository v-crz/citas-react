import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarId = () => nanoid();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    // Validación del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay al menos un campo vacio');
      setError(true);
      return;
    }
    setError(false);

    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    };

    if(paciente.id){
      // Editando registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(
        pacienteState => 
        pacienteState.id === paciente.id ? 
          objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="form">
      <h2 className="form-title">
        Seguimiento Pacientes
      </h2>

      <p className="form-text">
        Añade Pacientes y {''}
        <span className="form-text-alt">
          Adminístralos
        </span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="form-element"
      >
        {error && <Error>
          <p>Todos los campos son obligatorios</p>
        </Error>}
        <div className="mb-5">
          <label htmlFor="mascota"
            className="form-label">
            Nombre Mascota
          </label>
          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="form-input"
            value={nombre}
            onChange={
              (evt)=> setNombre(evt.target.value)
            }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario"
            className="form-label">
            Nombre Propietario
          </label>
          <input 
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="form-input"
            value={propietario}
            onChange={
              (evt)=> setPropietario(evt.target.value)
            }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email"
            className="form-label">
            Email
          </label>
          <input 
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="form-input"
            value={email}
            onChange={
              (evt)=> setEmail(evt.target.value)
            }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta"
            className="form-label">
            Alta
          </label>
          <input 
            id="alta"
            type="date"
            className="form-input"
            value={fecha}
            onChange={
              (evt)=> setFecha(evt.target.value)
            }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas"
            className="form-label">
            Síntomas
          </label>
          <textarea 
            id="sintomas"
            placeholder="Describe los Síntomas"
            className="form-input"
            value={sintomas}
            onChange={
              (evt)=> setSintomas(evt.target.value)
            }
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
            hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario
