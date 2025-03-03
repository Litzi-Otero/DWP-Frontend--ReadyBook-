import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../services/authService";
import "./Login.css";
import logo from "../../assets/logo.png"; // Importa el logo

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Requerido"),
    password: Yup.string().required("Requerido"),
  });

  const handleSubmit = async (values) => {
    try {
      await loginUser(values.email, values.password);
      navigate("/");
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="logo" /> {/* Agrega el logo */}
        <h2>INICIO DE SESIÓN</h2>
        {error && <p className="error-message">{error}</p>}
        
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
            <div>
              <label>Correo:</label>
              <Field type="email" name="email" className="w-full p-2 border rounded-md" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            
            <div>
              <label>Contraseña:</label>
              <Field type="password" name="password" className="w-full p-2 border rounded-md" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            
            <button type="submit" className="submit-button">
              Ingresar
            </button>
          </Form>
        </Formik>

        <p className="register-link">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;