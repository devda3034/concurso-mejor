export default function handler(req, res) {
  if (req.method === "POST") {
    const { lat, lon } = req.body;
    console.log("Coordenadas recibidas:", lat, lon);

    // Aquí puedes guardar la ubicación en una base de datos
    // Ej: MongoDB, Firebase, Supabase, etc.

    res.status(200).json({ message: "Coordenadas recibidas correctamente" });
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
