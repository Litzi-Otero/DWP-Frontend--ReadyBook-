import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import logo from "../../assets/logo.png"; 

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const initialValues = { email: "test@example.com", password: "password123" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Requerido"),
    password: Yup.string().required("Requerido"),
  });

  const handleSubmit = async (values) => {

    if (values.email === "test@example.com" && values.password === "password123") {
      navigate("/dashboard"); 
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="logo" /> 
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