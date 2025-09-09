import { JSX } from "react";
import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <header className="flex w-full align-middle justify-between p-4 border-b border-solid border-black/[.08] dark:border-white/[.145]">
      <div className="flex flex-row items-center w-full">
        <Image
          aria-hidden
          src="/logo-transparent.svg"
          alt="Logo"
          width={100}
          height={100}
          className="inline-block mr-4"
          quality={100}
        />
        <h1 className="text-2xl font-bold">Mote donde la tía Nena</h1>
      </div>
      <nav className="flex flex-row items-center">
        <ul className="flex space-x-4 float-right">
          <li>
            <a href="/home" className="text-white hover:text-gray-500">
              Inicio
            </a>
          </li>
          <li>
            <a href="/location" className="text-white hover:text-gray-500">
              Ubicación
            </a>
          </li>
          <li>
            <a href="/prices" className="text-white hover:text-gray-500">
              Precios
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-500">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
