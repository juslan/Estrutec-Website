import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@estrutec.com.bo'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Estrutec Web <onboarding@resend.dev>'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const { nombre, email, telefono, mensaje } = req.body ?? {}

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Nombre, correo y mensaje son obligatorios.' })
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nueva cotización de ${nombre} — sitio web Estrutec`,
      text: [
        `Nombre: ${nombre}`,
        `Correo: ${email}`,
        `Teléfono: ${telefono || 'No proporcionado'}`,
        '',
        'Mensaje:',
        mensaje,
      ].join('\n'),
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(502).json({ error: 'No se pudo enviar el mensaje. Intenta nuevamente.' })
  }
}
