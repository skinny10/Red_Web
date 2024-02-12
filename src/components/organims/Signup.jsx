import React from "react";
import ArticleMoelcule from "../molecules/ArticleMoelcule";
import Logo from "../../assets/imagenes/Logo.png";

function Singup() {
  return (
    <>
      <section className="flex flex-col items-center">
        <img src={Logo} alt="Logo" />

        <div className="text-center">
          <ArticleMoelcule content="Iniciar Sesión" />
          <ArticleMoelcule content="Bienvenido a nuestra red social estudiantil. Regístrate ahora" />
          <ArticleMoelcule content=" para conectarte con compañeros, acceder a recursos educativos y participar en eventos emocionantes." />
        </div>
      </section>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">

            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                Apellidos
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="lastname"
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirmar Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="check-container">
              <input
                type="check"
                id="termsCheckbox"
                className="hidden"

              />
              <label htmlFor="termsCheckbox" className="check-label">
                Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad.
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarme
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              ----------°----------
            </p>
          </form>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-zinc-50 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Registrarme con Google
          </button>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta? {' '}
            <a href="#" className="font-semibold leading-6 text-gray-500  hover:text-indigo-500">
              ¡Iniciar secion aqui!
            </a>
          </p>

          <div>

          </div>
        </div>


      </div>


    </>
  )
}

export default Singup;