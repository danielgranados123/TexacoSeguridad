import { sendEmail } from "../utils/mail.js";

const fireAlertController = {};

fireAlertController.sendAlert = async (req, res) => {
    try {
        const { temperature } = req.body;

        if (temperature === undefined) {
            return res.status(400).json({ message: "La temperatura es requerida" });
        }

        // Fecha y hora actual
        const now = new Date();
        const date = now.toLocaleDateString(); // hora local
        const time = now.toLocaleTimeString();

        // Crear el contenido HTML del correo
        const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #fff; border: 1px solid #000; border-radius: 8px; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://logosandtypes.com/wp-content/uploads/2020/08/Texaco.png" alt="Texaco Logo" style="width: 150px;"/>
    </div>
    <h2 style="color: #E10600; text-align: center;">Alerta de Incendio Detectada</h2>
    <p style="color: #000; font-size: 16px;">
      Se ha detectado una <strong>temperatura anormalmente alta</strong> en la estación de servicio Texaco, que puede indicar un <strong>riesgo potencial de incendio</strong>.
    </p>
    <ul style="color: #000; font-size: 16px;">
      <li><strong>Temperatura registrada:</strong> ${temperature} °C</li>
      <li><strong>Fecha:</strong> ${date}</li>
      <li><strong>Hora:</strong> ${time}</li>
    </ul>
    <p style="color: #000; font-size: 14px;">
      Este mensaje es una notificación automática dirigida al gerente para alertar sobre esta condición crítica.
      Se recomienda <strong>tomar las medidas de seguridad inmediatas</strong> y verificar la situación en el sitio.
    </p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
    <p style="text-align: center; color: #E10600; font-weight: bold;">Texaco - Comprometidos con la seguridad y la prevención</p>
  </div>
`;

        // Enviar correo
        await sendEmail(
            "danielgranados008@gmail.com", // correo fijo del gerente
            "Alerta de Incendio en Gasolinera Texaco",
            `Se detectó una temperatura elevada: ${temperature} °C a las ${time} del día ${date}.`,
            htmlContent
        );

        return res.json({ message: "Correo de alerta enviado exitosamente" });
    } catch (error) {
        console.error("Error al enviar alerta:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export default fireAlertController;
