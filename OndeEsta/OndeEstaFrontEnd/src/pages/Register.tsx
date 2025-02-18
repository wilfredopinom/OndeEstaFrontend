import React, { ChangeEvent, FormEvent, useState } from "react";

import { AuthService } from "../services/authService";
import User from "../models/User";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ErrorMsgData from "../utils/ErrorMsgData";

const Register: React.FC = () => {
  const [formData, setFormData] = useState<Partial<User>>({
    name: "",
    surname: "",
    email: "",
    password: "",
    course: "",
    accepNotifications: false,
  });

  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue
    try {
      setLoading(true);
      setErrors({});

      await AuthService.registerUser(formData);
      toast.success("Usuario registrado con éxito!");
      navigate("/offers");
    } catch (error) {
      toast.error("Error al registrar el usuario.");

      if (Array.isArray(error)) {
        const errorObj: Record<string, string> = error.reduce((acc: Record<string, string>, err: unknown) => {
          const errorDetail = err as ErrorMsgData;
          acc[errorDetail.path] = errorDetail.msg;
          return acc;
        }, {});
        setErrors(errorObj);
      } else if (error instanceof Error) {
        setErrors({ message: error.message || "Error desconocido" });
      } else {
        setErrors({ message: "Error desconocido" });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Register Background"
            src="/public/perdidos.webp"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
            
              Bienvenidos a OndeEsta🔍
           
            </h1>
            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Register now to get access to exclusive offers and updates.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Nombres
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Last Name */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Apellidos
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Email */}
              <div className="col-span-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              {/* Password */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Confirma la contraseña
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>








              {/* Checkbox */}
              <div className="col-span-6">
                <label htmlFor="accepNotifications" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="accepNotifications"
                    name="accepNotifications"
                    checked={formData.accepNotifications}
                    onChange={handleChangeCheckbox}
                    className="size-5 rounded-md border-gray-200 bg-white shadow-xs dark:border-gray-700 dark:bg-gray-800"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    I want to receive updates and offers.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="col-span-6">
                <button className="w-full rounded-md bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                  Create an account
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
