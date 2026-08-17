import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) newErrors.email = "El correo es obligatorio";
    else if (!emailRegex.test(email)) newErrors.email = "Correo no válido";

    if (!password) newErrors.password = "La contraseña es obligatoria";
    else if (password.length < 6) newErrors.password = "Debe tener al menos 6 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login exitoso ✅");
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Welcome to Asentli</h1>
      <p style={styles.subtitle}>Fintech familiar</p>

      <form style={styles.form} onSubmit={handleLogin}>
        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={styles.errorText}>{errors.email}</p>}

        <label style={styles.label}>Password</label>
        <input
          style={styles.input}
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={styles.errorText}>{errors.password}</p>}

        <button type="submit" style={styles.button}>GO!</button>
      </form>

      <p style={styles.footer}>
        Don't have an account?{" "}
        <span style={styles.link}>Sign up for free</span>
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#F5EBE1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 15px",
  },
  title: { color: "#003223", fontSize: 22 },
  subtitle: { color: "#777", fontSize: 13, marginBottom: 20 },
  form: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 350,
    padding: 20,
    borderRadius: 8,
    border: "1px solid #ddd",
  },
  label: {
    display: "block",
    fontSize: 13,
    marginBottom: 6,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 10,
    border: "1px solid #ccc",
    borderRadius: 6,
    marginBottom: 6,
    fontSize: 14,
  },
  errorText: { color: "red", fontSize: 12, marginBottom: 10 },
  button: {
    width: "100%",
    backgroundColor: "#FF6400",
    color: "#fff",
    padding: 12,
    borderRadius: 6,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    border: "none",
    cursor: "pointer",
  },
  footer: { marginTop: 16, fontSize: 13, color: "#555" },
  link: { color: "#FF6400", fontWeight: "bold", cursor: "pointer" },
};