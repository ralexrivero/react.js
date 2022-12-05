import './App.css';

function App() {
  return (
    <div className="App container mx-auto px-4">
      <form className="w-full max-w-lg" action=''>
        <div className="flex flex-wrap -mx-3 mb-6">
          <label className='block text-gray-700 text-sm font-bold mb-2' for='usuario'>Usuario</label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='text' name='usuario' id='usuario' autocomplete></input>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className='block text-gray-700 text-sm font-bold mb-2' for='nombre'>Nombre</label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='text' name='nombre' id='nombre' autocomplete placeholder='Juan'></input>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className='block text-gray-700 text-sm font-bold mb-2' for='apellido'>Apellido</label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='text' name='apellido' id='apellido' autocomplete placeholder='Perez'></input>
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className='block text-gray-700 text-sm font-bold mb-2' for='documento'>Documento</label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='text' name='documento' id='documento' autocomplete placeholder='N.NNN.NNN-H'></input>
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block text-gray-700 text-sm font-bold mb-2' for='correo'>Correo</label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='email' name='correo' id='correo' autocomplete placeholder='juan@perez.org'></input>
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className='block text-gray-700 text-sm font-bold mb-2' for='telefono'>telefono</label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='tel' name='telefono' id='telefono' autocomplete placeholder=''></input>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className='block text-gray-700 text-sm font-bold mb-2' for='departamento'>Departamento</label>
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='departamento' id='departamento'>
              <option disabled selected value>-- Departamento --</option>
              <option value='Artigas'>Artigas</option>
              <option value='Canelones'>Canelones</option>
              <option value='Cerro Largo'>Cerro</option>
              <option value='Colonia'>Colonia</option>
              <option value='Durazno'>Durazno</option>
              <option value='Flores'>Flores</option>
              <option value='Florida'>Florida</option>
              <option value='Lavalleja'>Lavalleja</option>
              <option value='Maldonado'>Maldonado</option>
              <option value='Montevideo'>Montevideo</option>
              <option value='Paysandú'>Paysandú</option>
              <option value='Río Negro'>Río</option>
              <option value='Rivera'>Rivera</option>
              <option value='Rocha'>Rocha</option>
              <option value='Salto'>Salto</option>
              <option value='San José'>San</option>
              <option value='Soriano'>Soriano</option>
              <option value='Tacuarembó'>Tacuarembó</option>
              <option value='Treinta y Tres'>Treinta</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className='block text-gray-700 text-sm font-bold mb-2' for='localidad'>Localidad</label>
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='localidad' id='localidad'>
              <option disabled selected value>-- Localidad --</option>
              <option value='PUNTA RUBIA'>PUNTA RUBIA</option>
              <option value='18 DE JULIO'>18 DE JULIO</option>
              <option value='PUEBLO NUEVO'>PUEBLO NUEVO</option>
              <option value='18 DE JULIO'>18 DE JULIO</option>
              <option value='BARRA DE CARRASCO'>BARRA DE CARRASCO</option>
              <option value='BARRIO HIPODROMO'>BARRIO HIPODROMO</option>
              <option value='BARRIO PEREIRA'>BARRIO PEREIRA</option>
              <option value='CANTERAS DE MARELLI'>CANTERAS DE MARELLI</option>
              <option value='CERROS DE LA CALERA'>CERROS DE LA CALERA</option>
              <option value='CIUDAD DE LA COSTA'>CIUDAD DE LA COSTA</option>
              <option value='COLONIA DEL SACRAMENTO'>COLONIA DEL SACRAMENTO</option>
              <option value='DELTA DEL TIGRE Y VILLAS'>DELTA DEL TIGRE Y VILLAS</option>
              <option value='DELTA EL TIGRE'>DELTA EL TIGRE</option>
              <option value='LA ESTANZUELA'>LA ESTANZUELA</option>
              <option value='PASO CAMPAMENTO'>PASO CAMPAMENTO</option>
              <option value='RINCON DE PACHECO'>RINCON DE PACHECO</option>
              <option value='TOPADOR'>TOPADOR</option>
              <option value='FARO JOSE IGNACIO'>FARO JOSE IGNACIO</option>
            </select>
          </div>
        </div>

        <div className='flex flex-wrap -mx-3 mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='notificaciones'>Recibir notificaciones?</label>
          <input className='form-checkbox' type='checkbox' name='notificaciones' id='notificaciones' value='Si' defaultChecked></input>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Registrarse</button>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Cancelar</button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default App;
