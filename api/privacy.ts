import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Política de Privacidad - Deceptra</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1, h2 { color: #2c3e50; }
        h1 { border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        p { margin-bottom: 15px; }
    </style>
</head>
<body>
    <h1>Política de Privacidad</h1>
    <p><strong>Última actualización:</strong> 29 de Mayo de 2026</p>

    <p>Gracias por jugar a <strong>Deceptra</strong> ("la Aplicación"). Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestra aplicación móvil.</p>

    <h2>1. Recopilación y Uso de Datos y Autenticación</h2>
    <p>La Aplicación ofrece la posibilidad de iniciar sesión utilizando su cuenta de Google (<strong>Google Sign-In</strong>) o de Apple (<strong>Sign in with Apple</strong>). Si decide utilizar estos métodos, recibiremos cierta información de su perfil (como su nombre, dirección de correo electrónico y foto de perfil en el caso de Google, o los datos de correo y nombre provistos por Apple). Esta información se utiliza exclusivamente para crear y mantener su perfil de usuario dentro del juego y para sincronizar su progreso y paquetes de palabras personalizados entre dispositivos.</p>
    <p><strong>Fotos de perfil personalizadas:</strong> Si decide personalizar su perfil subiendo una imagen desde la galería de su dispositivo o tomando una fotografía con su cámara, dicha imagen será procesada, recortada localmente y subida de forma segura a nuestros servidores de almacenamiento (<strong>Firebase Storage</strong>). Esta fotografía se utiliza únicamente para mostrarla como su avatar en las partidas y no se compartirá con terceros.</p>
    <p>No recopilamos ni almacenamos contraseñas de Google ni de Apple. Toda la autenticación es manejada de forma segura por Google, Apple y Firebase Authentication.</p>
    <p>También permitimos el uso de cuentas anónimas, en cuyo caso solo guardamos los datos asociados a un identificador único anónimo generado por Firebase.</p>

    <h2>2. Acceso al Micrófono y Chat de Voz en Tiempo Real (LiveKit)</h2>
    <p>Durante las partidas en línea, la Aplicación ofrece una funcionalidad de chat de voz interactivo utilizando tecnología WebRTC a través de los servicios de <strong>LiveKit</strong>. Para utilizar esta función, la Aplicación le solicitará permiso para acceder al micrófono de su dispositivo.</p>
    <p>Los datos de audio capturados por su micrófono se transmiten en tiempo real únicamente al resto de participantes de la partida activa. <strong>No grabamos, almacenamos ni archivamos las conversaciones de audio</strong> en ningún servidor; la transmisión es exclusivamente en directo y temporal.</p>

    <h2>3. Anuncios (Google AdMob)</h2>
    <p>Nuestra Aplicación utiliza los servicios de <strong>Google AdMob</strong> para mostrar anuncios. AdMob puede recopilar y utilizar datos de su dispositivo, como su ID de publicidad, dirección IP y otra información del sistema y de la red, de acuerdo con la <a href="https://policies.google.com/privacy" target="_blank">Política de Privacidad de Google</a>.</p>

    <h2>4. Compras dentro de la aplicación (Google Play, Apple App Store y RevenueCat)</h2>
    <p>Ofrecemos compras dentro de la aplicación (In-App Purchases) y suscripciones a través de Google Play y Apple App Store, gestionadas por <strong>RevenueCat</strong>. Las transacciones se procesan mediante los sistemas de facturación de <strong>Google Play Billing</strong> y <strong>Apple App Store Billing</strong>, que pueden usar métodos de pago asociados a su cuenta de Google o Apple. Ni nosotros ni RevenueCat tenemos acceso ni almacenamos los detalles de su tarjeta de crédito. Para más información, consulte la <a href="https://www.revenuecat.com/privacy" target="_blank">Política de Privacidad de RevenueCat</a>.</p>

    <h2>5. Análisis de Datos (Firebase Analytics)</h2>
    <p>Podemos utilizar <strong>Firebase Analytics</strong> para comprender mejor el uso de nuestra Aplicación y mejorar el servicio. Esto capta datos de interacciones anónimas y reportes de errores (Crashlytics). Puede consultar la privacidad de Firebase <a href="https://firebase.google.com/support/privacy" target="_blank">aquí</a>.</p>

    <h2>6. Reportes de Errores y Sugerencias (Soporte)</h2>
    <p>Si decide enviar un reporte de error o sugerencia desde la sección de ajustes de la Aplicación, recopilaremos el texto de su mensaje junto con metadatos técnicos de diagnóstico de su dispositivo (como el sistema operativo, modelo del dispositivo y versión instalada de la aplicación). Estos datos se procesan de forma segura en <strong>Firebase Firestore</strong> y se utilizan exclusivamente para resolver incidencias técnicas y mejorar la aplicación.</p>

    <h2>7. Compartir su información</h2>
    <p>No vendemos, intercambiamos ni alquilamos su información personal a terceros. Solo proporcionamos datos a los servicios mencionados anteriormente (Google, Firebase, LiveKit, RevenueCat) para el funcionamiento fundamental y la monetización de la aplicación.</p>

    <h2>8. Sus derechos</h2>
    <p>Los usuarios en la Unión Europea tienen derecho a la portabilidad, acceso y borrado de los datos almacenados (GDPR). Si desea borrar sus datos o restablecer su identificador de anuncios, póngase en contacto con nosotros.</p>

    <h2>9. Cambios a esta política</h2>
    <p>Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos publicando la nueva Política de Privacidad en esta misma página.</p>

    <hr>
    <p style="font-size: 14px; text-align: center; color: #7f8c8d;">Para cualquier duda contacta con el soporte de Deceptra escribiendo a <strong>support.deceptra&#64;gmail.com</strong>.</p>
</body>
</html>
  `;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
