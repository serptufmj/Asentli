function Login() {
  return (
    <div>
      <h1>Welcome to Asentli</h1>

      <form>
        <label>Nombres</label>
        <input
          type="text"
          name="nombres"
          placeholder="Ingresa tus nombres"
        />

        <label>Apellidos</label>
        <input
          type="text"
          name="apellidos"
          placeholder="Ingresa tus apellidos"
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          name="correo"
          placeholder="Ingresa tu correo"
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="contraseña"
          placeholder="Ingresa tu contraseña"
        />

        <label>DUI</label>
        <input
          type="text"
          name="dui"
          placeholder="00000000-0"
        />

        <label>Fecha de nacimiento</label>
        <input
          type="date"
          name="fechaNacimiento"
        />

        <button type="submit">
          Crear cuenta
        </button>
      </form>
    </div>
  );
}

export default Login;