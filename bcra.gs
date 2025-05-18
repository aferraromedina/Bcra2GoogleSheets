/**
 * Método para obtener la lista de todas las estadísticas de Series y Principales Variables publicadas por el BCRA.
 * @customfunction
 */
function principalesVariables() {
    try {
        const url = 'https://api.bcra.gob.ar/estadisticas/v3.0/monetarias';
        const respuesta = JSON.parse( UrlFetchApp.fetch(url));
        
        if (!respuesta || respuesta.status !== 200 || !respuesta.results) {
            return "Error al consultar al BCRA";
        }

        let titulos = ["Identificador", "Descripcion", "Fecha", "Valor"];
        let resultado = [titulos];

        let propiedades = ["idVariable", "descripcion", "fecha", "valor"];

        respuesta.results.forEach((variable) => {
            var fila = propiedades.map((prop) => variable[prop]);
            resultado.push(fila);
        });

        return resultado;

    } catch (error) {
    return "Error al consultar al BCRA: " + error.message;
  }
}

/**
 * Método para obtener los valores para la serie o principal variable en un rango de fechas
* @identificador ID de la variable deseada, la misma se puede consultar usando @principalesVariables
* @fechadesde Fecha desde en formato (YYYY-MM-DD)
* @fechaHasta Date Query Fecha de Fin del rango de búsqueda en formato YYYY-MM-DD).
* @customfunction
*/
function serieHistorica(identificador, fechaDesde, fechaHasta){
    try{
        const url =  `api.bcra.gob.ar/estadisticas/v3.0/monetarias/${identificador}?desde=${fechaDesde}&hasta=${fechaHasta}`;
    
        const respuesta = JSON.parse( UrlFetchApp.fetch(url));
        
        if (!respuesta || respuesta.status !== 200 || !respuesta.results) {
            return "Error al consultar al BCRA";
        }

        let titulos = ["Fecha", "Valor"];
        let resultado = [titulos];

        let propiedades = ["fecha", "valor"];

        respuesta.results.forEach((variable) => {
            var fila = propiedades.map((prop) => variable[prop]);
            resultado.push(fila);
        });

        return resultado;

    } catch (error) {
        return "Error al consultar al BCRA: " + error.message;
    }
}