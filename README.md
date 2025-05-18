# Bcra2GoogleSheets
Fucniones para utilizar desde Google Sheets la informacion expuesta por BCRA via api publica

## Instalación

Para utilizar estas funciones en Google Sheets, sigue estos pasos:

1. Abre tu hoja de cálculo de Google Sheets
2. Ve al menú "Extensiones" > "Apps Script"
3. En el editor de Apps Script, crea un nuevo archivo haciendo clic en el ícono "+" junto a "Archivos"
4. Nombra el archivo como "bcra.gs"
5. Copia y pega todo el contenido del archivo bcra.gs en el editor
6. Guarda el proyecto (Ctrl + S o ⌘ + S)
7. Vuelve a tu hoja de cálculo

## Funciones Disponibles

### principalesVariables()
Obtiene la lista completa de series y variables principales publicadas por el BCRA.

Uso en celda:
=principalesVariables()


### serieHistorica(identificador, fechaDesde, fechaHasta)
Obtiene los valores históricos de una serie o variable principal para un rango de fechas específico.

Parámetros:
- `identificador`: ID de la variable deseada (se puede obtener usando principalesVariables())
- `fechaDesde`: Fecha de inicio en formato YYYY-MM-DD
- `fechaHasta`: Fecha de fin en formato YYYY-MM-DD

Uso en celda:
=serieHistorica(1, "2023-01-01", "2023-12-31")

## Notas
- Las funciones requieren conexión a internet para acceder a la API del BCRA
- Los datos son obtenidos en tiempo real desde la API pública del BCRA
- Este proyecto está bajo la licencia GNU GPL v3

## Contribuciones
Las contribuciones son bienvenidas. Por favor, siéntete libre de:
- Reportar bugs
- Sugerir nuevas funcionalidades
- Enviar pull requests

## Licencia
Este proyecto está licenciado bajo GNU General Public License v3.0 - ver el archivo [LICENSE](LICENSE) para más detalles.

