import { JSX } from "react";

export default function Prices(): JSX.Element {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Precios</h1>
      <div className="space-y-6">
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Mote Simple</h2>
          <p className="text-lg mb-2">$5.000</p>
          <p>Incluye mote con huesillos y una bebida a elección.</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Mote Completo</h2>
          <p className="text-lg mb-2">$7.000</p>
          <p>
            Incluye mote con huesillos, una bebida a elección y un
            acompañamiento (empanada o sopaipilla).
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Combo Familiar</h2>
          <p className="text-lg mb-2">$20.000</p>
          <p>Incluye 4 motes completos y 4 bebidas a elección.</p>
        </div>
      </div>
    </div>
  );
}
