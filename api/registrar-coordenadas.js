// api/registrar-coordenadas.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const { lat, lon } = req.body; // recibe latitud y longitud
    console.log("Coordenadas recibidas:", lat, lon);

    // Aquí podrías guardarlas en una base de datos si quieres
    // Ej: MongoDB, Supabase, Firebase, etc.

    res.status(200).json({ message: "Coordenadas recibidas correctamente" });
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
