

function CardBuscarObj() {
    return (
      <div className="card bg-base-50 shadow-md max-w-xs mx-auto p-2">

      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
            className="h-60 w-full object-cover" />
  </figure>
  <div className="card-body">
  <h2 className="card-title text-lg">Cómo buscar objetos perdidos</h2>
    <ul className="list-decimal list-inside text-gray-700 text-sm">
                <li className="mb-2">Utiliza la barra de búsqueda con palabras clave</li>
                <li className="mb-2">Filtra por categoría y ubicación</li>
                <li className="mb-2">Revisa los resultados y contacta al publicador</li>
              </ul>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Comenzar búsqueda</button>
    </div>
  </div>
</div>
    );}
    
export default CardBuscarObj