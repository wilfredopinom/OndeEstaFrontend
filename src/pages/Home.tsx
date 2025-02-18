import { Search } from "lucide-react";
import CardBuscarObj from "../components/CardBuscarObj";
import CardPublicObj from "../components/CardPublicObj";
import QuickActions from "../components/QuickActions";
import RecentItems from "../components/RecentItems";

export default function Home() {
  return (
 
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white w-full"> 
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">ONDEESTA</h1>
        <h2 className="text-xl text-gray-600 mb-2">Plataforma colaborativa</h2>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 overflow-y-auto">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Encuentra y publica objetos perdidos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únete a nuestra comunidad y ayuda a reconectar personas con sus pertenencias perdidas.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <CardBuscarObj />
          <CardPublicObj />
        </div>

        <QuickActions />

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Búsqueda avanzada</h3>
          <div className="flex items-center space-x-2">
            <input type="search" placeholder="Describe el objeto que buscas..." className="flex-grow p-2 border rounded" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </button>
          </div>
        </div>

        <RecentItems />
      </main>
    </div>
  );
}
