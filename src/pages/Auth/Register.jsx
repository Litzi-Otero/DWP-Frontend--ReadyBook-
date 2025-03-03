import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../services/authService";
import "./Register.css";
import logo from "../../assets/logo.png"; // Importa el logo

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const initialValues = { email: "", password: "", confirmPassword: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Requerido"),
    password: Yup.string().required("Requerido"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Requerido')
  });

  const handleSubmit = async (values) => {
    try {
      await registerUser(values.email, values.password);
      navigate("/login");
    } catch (err) {
      setError("Error al registrar el usuario");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={logo} alt="Logo" className="logo" /> {/* Agrega el logo */}
        <h2>Registro</h2>
        {error && <p className="error-message">{error}</p>}
        
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" className="w-full p-2 border rounded-md" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            
            <div>
              <label>Contraseña:</label>
              <Field type="password" name="password" className="w-full p-2 border rounded-md" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            
            <div>
              <label>Confirmar Contraseña:</label>
              <Field type="password" name="confirmPassword" className="w-full p-2 border rounded-md" />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
            </div>
            
            <button type="submit" className="submit-button">
              Registrarse
            </button>
          </Form>
        </Formik>

        <p className="login-link">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Register;