// RecentItems.js o cualquier nombre que prefieras
import { Button } from "./Button";
import { ChevronRight } from "lucide-react";

function RecentItems() {
  const items = [
    { id: 1, title: "Objeto #1", description: "Descripción breve del objeto...", author: "Juan Pérez", imageUrl: "https://link-a-imagen.com/imagen.jpg" },
    { id: 2, title: "Objeto #2", description: "Descripción breve del objeto...", author: "Ana López", imageUrl: "https://link-a-imagen.com/imagen.jpg" },
    { id: 3, title: "Objeto #3", description: "Descripción breve del objeto...", author: "Carlos Sánchez", imageUrl: "https://link-a-imagen.com/imagen.jpg" },
  ];

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Objetos recientes</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl hover:shadow-lg transition-shadow duration-300">
            <figure>
              <img src={item.imageUrl} alt="Imagen del objeto" className="w-full h-32 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-500 mt-2">Publicado: {new Date().toLocaleDateString()}</p>
              <p className="text-sm text-gray-500 mt-1">Publicado por: {item.author}</p>
              <div className="card-actions justify-end">
                <Button className="mt-2 p-0">
                  Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentItems;