// src/components/QuickActions.js
import { Button } from "./Button";
import { MapPin, Upload, Archive, List } from "lucide-react";

const actions = [
  { icon: MapPin, label: "Objetos Perdidos" },
  { icon: Upload, label: "Publicar Objeto" },
  { icon: Archive, label: "Almacén de Objetos" },
  { icon: List, label: "Listas Externas" },
];

const QuickActions = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Acciones rápidas</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((item, index) => (
          <Button
            key={index}
            className="h-24 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-300"
          >
            <item.icon className="h-6 w-6 mb-2" />
            <span>{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;