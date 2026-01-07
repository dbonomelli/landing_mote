import Card from "@/components/Card/Card";
import { JSX } from "react";

export default function Prices(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 p-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Precios en carro</h1>
        <p>Puede ser vasos de vidrio o de plástico.</p>
      </div>
      <div className="space-y-6">
        <Card title="Mote Simple" price="$1.800" description="Mote con huesillo de xx lt"/>
        <Card title="Mote Mediano" price="$2.300" description="Mote con huesillo de xx lt"/>
        <Card title="Mote Grande" price="$3.300" description="Mote con huesillo de xx lt"/>
      </div>
      <h1 className="text-3xl font-bold mb-2">Precio por mayor</h1>
      <div className="space-y-6">
        <Card title="Mote Simple" price="$1.800" description="Mote con huesillo de xx lt"/>
        <Card title="Mote Mediano" price="$2.300" description="Mote con huesillo de xx lt"/>
        <Card title="Mote Grande" price="$3.300" description="Mote con huesillo de xx lt"/>
      </div>
    </div>
  );
}
