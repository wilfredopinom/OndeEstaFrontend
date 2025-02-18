

function CardPublicObj() {
    return (
      

<div className="card bg-base-50 shadow-md max-w-xs mx-auto p-2">

  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album"
        className="h-60 w-full object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Cómo publicar objetos encontrados</h2>
    <ol className="list-decimal list-inside text-gray-700">
                <li className="mb-2">Haz click en publicar un objeto</li>
                <li className="mb-2">Proporciona una descriocion detallada y fotos</li>
                <li className="mb-2">Especifica la ubicacion y fecha del hallazgo</li>
              </ol>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> Publicar objeto </button>
    </div>
  </div>
</div>
    );}
    
export default CardPublicObj