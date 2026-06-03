import type { VercelRequest, VercelResponse } from '@vercel/node';

interface Translation {
  title: string;
  update: string;
  intro: string;
  sections: { title: string; content: string }[];
  footer: string;
}

const translations: Record<string, Translation> = {
  es: {
    title: "Política de Privacidad - Deceptra",
    update: "Última actualización: 29 de Mayo de 2026",
    intro: "Gracias por jugar a <strong>Deceptra</strong> (\"la Aplicación\"). Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestra aplicación móvil.",
    sections: [
      {
        title: "1. Recopilación y Uso de Datos y Autenticación",
        content: "<p>La Aplicación ofrece la posibilidad de iniciar sesión utilizando su cuenta de Google (<strong>Google Sign-In</strong>) o de Apple (<strong>Sign in with Apple</strong>). Si decide utilizar estos métodos, recibiremos cierta información de su perfil (como su nombre, dirección de correo electrónico y foto de perfil en el caso de Google, o los datos de correo y nombre provistos por Apple). Esta información se utiliza exclusivamente para crear y mantener su perfil de usuario dentro del juego y para sincronizar su progreso y paquetes de palabras personalizados entre dispositivos.</p><p><strong>Fotos de perfil personalizadas:</strong> Si decide personalizar su perfil subiendo una imagen desde la galería de su dispositivo o tomando una fotografía con su cámara, dicha imagen será procesada, recortada localmente y subida de forma segura a nuestros servidores de almacenamiento (<strong>Firebase Storage</strong>). Esta fotografía se utiliza únicamente para mostrarla como su avatar en las partidas y no se compartirá con terceros.</p><p>No recopilamos ni almacenamos contraseñas de Google ni de Apple. Toda la autenticación es manejada de forma segura por Google, Apple y Firebase Authentication.</p><p>También permitimos el uso de cuentas anónimas, en cuyo caso solo guardamos los datos asociados a un identificador único anónimo generado por Firebase.</p>"
      },
      {
        title: "2. Acceso al Micrófono y Chat de Voz en Tiempo Real (LiveKit)",
        content: "<p>Durante las partidas en línea, la Aplicación ofrece una funcionalidad de chat de voz interactivo utilizando tecnología WebRTC a través de los servicios de <strong>LiveKit</strong>. Para utilizar esta función, la Aplicación le solicitará permiso para acceder al micrófono de su dispositivo.</p><p>Los datos de audio capturados por su micrófono se transmiten en tiempo real únicamente al resto de participantes de la partida activa. <strong>No grabamos, almacenamos ni archivamos las conversaciones de audio</strong> en ningún servidor; la transmisión es exclusivamente en directo y temporal.</p>"
      },
      {
        title: "3. Anuncios (Google AdMob)",
        content: "<p>Nuestra Aplicación utiliza los servicios de <strong>Google AdMob</strong> para mostrar anuncios. AdMob puede recopilar y utilizar datos de su dispositivo, como su ID de publicidad, dirección IP y otra información del sistema y de la red, de acuerdo con la <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Política de Privacidad de Google</a>.</p>"
      },
      {
        title: "4. Compras dentro de la aplicación (Google Play, Apple App Store y RevenueCat)",
        content: "<p>Ofrecemos compras dentro de la aplicación (In-App Purchases) y suscripciones a través de Google Play y Apple App Store, gestionadas por <strong>RevenueCat</strong>. Las transacciones se procesan mediante los sistemas de facturación de <strong>Google Play Billing</strong> y <strong>Apple App Store Billing</strong>, que pueden usar métodos de pago asociados a su cuenta de Google o Apple. Ni nosotros ni RevenueCat tenemos acceso ni almacenamos los detalles de su tarjeta de crédito. Para más información, consulte la <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">Política de Privacidad de RevenueCat</a>.</p>"
      },
      {
        title: "5. Análisis de Datos (Firebase Analytics)",
        content: "<p>Podemos utilizar <strong>Firebase Analytics</strong> para comprender mejor el uso de nuestra Aplicación y mejorar el servicio. Esto capta datos de interacciones anónimas y reportes de errores (Crashlytics). Puede consultar la privacidad de Firebase <a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">aquí</a>.</p>"
      },
      {
        title: "6. Reportes de Errores y Sugerencias (Soporte)",
        content: "<p>Si decide enviar un reporte de error o sugerencia desde la sección de ajustes de la Aplicación, recopilaremos el texto de su mensaje junto con metadatos técnicos de diagnóstico de su dispositivo (como el sistema operativo, modelo del dispositivo y versión instalada de la aplicación). Estos datos se procesan de forma segura en <strong>Firebase Firestore</strong> y se utilizan exclusivamente para resolver incidencias técnicas y mejorar la aplicación.</p>"
      },
      {
        title: "7. Compartir su información",
        content: "<p>No vendemos, intercambiamos ni alquilamos su información personal a terceros. Solo proporcionamos datos a los servicios mencionados anteriormente (Google, Firebase, LiveKit, RevenueCat) para el funcionamiento fundamental y la monetización de la aplicación.</p>"
      },
      {
        title: "8. Sus derechos",
        content: "<p>Los usuarios en la Unión Europea tienen derecho a la portabilidad, acceso y borrado de los datos almacenados (GDPR). Si desea borrar sus datos o restablecer su identificador de anuncios, póngase en contacto con nosotros.</p>"
      },
      {
        title: "9. Cambios a esta política",
        content: "<p>Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos publicando la nueva Política de Privacidad en esta misma página.</p>"
      }
    ],
    footer: "Para cualquier duda contacta con el soporte de Deceptra escribiendo a <strong>support.deceptra&#64;gmail.com</strong>."
  },
  ca: {
    title: "Política de Privadesa - Deceptra",
    update: "Última actualització: 29 de Maig de 2026",
    intro: "Gràcies per jugar a <strong>Deceptra</strong> (\"l'Aplicació\"). Aquesta política de privadesa explica com recopilem, utilitzem i protegim la seva informació quan fa servir la nostra aplicació mòbil.",
    sections: [
      {
        title: "1. Recopilació i Ús de Dades i Autenticació",
        content: "<p>L'Aplicació ofereix la possibilitat d'iniciar sessió utilitzant el seu compte de Google (<strong>Google Sign-In</strong>) o d'Apple (<strong>Sign in with Apple</strong>). Si decideix utilitzar aquests mètodes, rebrem certa informació del seu perfil (com el seu nom, correu electrònic i foto de perfil en el cas de Google, o les dades de correu i nom provistes per Apple). Aquesta informació s'utilitza exclusivament per crear i mantenir el seu perfil d'usuari dins del joc i per sincronitzar el seu progrés i paquets de paraules personalitzats entre dispositius.</p><p><strong>Fotos de perfil personalitzades:</strong> Si decideix personalitzar el seu perfil pujant una imatge des de la galeria del seu dispositiu o prenent una fotografia amb la seva càmera, aquesta imatge serà processada, retallada localment i pujada de forma segura als nostres servidors d'emmagatzematge (<strong>Firebase Storage</strong>). Aquesta fotografia s'utilitza únicament per mostrar-la com el seu avatar a les partides i no es compartirà amb tercers.</p><p>No recopilem ni emmagatzemem contrasenyes de Google ni d'Apple. Tota l'autenticació és gestionada de forma segura per Google, Apple i Firebase Authentication.</p><p>També permetem l'ús de comptes anònims, en aquest cas només desem les dades associades a un identificador únic anònim generat per Firebase.</p>"
      },
      {
        title: "2. Accés al Micròfon i Xat de Veu en Temps Real (LiveKit)",
        content: "<p>Durant les partides en línia, l'Aplicació ofereix una funcionalitat de xat de veu interactiu utilitzant tecnologia WebRTC a través dels serveis de <strong>LiveKit</strong>. Per utilitzar aquesta funció, l'Aplicació li sol·licitarà permís per accedir al micròfon del seu dispositiu.</p><p>Les dades d'àudio capturades pel seu micròfon es transmeten en temps real únicament a la resta de participants de la partida activa. <strong>No enregistrem, emmagatzemem ni arxivem les converses d'àudio</strong> a cap servidor; la transmissió és exclusivament en directe i temporal.</p>"
      },
      {
        title: "3. Anuncis (Google AdMob)",
        content: "<p>La nostra Aplicació utilitza els serveis de <strong>Google AdMob</strong> per mostrar anuncis. AdMob pot recopilar i utilitzar dades del seu dispositiu, com el seu ID de publicitat, adreça IP i altra informació del sistema i de la xarxa, d'acord amb la <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Política de Privadesa de Google</a>.</p>"
      },
      {
        title: "4. Compres dins de l'aplicació (Google Play, Apple App Store i RevenueCat)",
        content: "<p>Oferim compres dins de l'aplicació (In-App Purchases) i subscripcions a través de Google Play i Apple App Store, gestionades per <strong>RevenueCat</strong>. Les transaccions es processen mitjançant els sistemes de facturació de <strong>Google Play Billing</strong> i <strong>Apple App Store Billing</strong>, que poden utilitzar mètodes de pagament associats al seu compte de Google o Apple. Ni nosaltres ni RevenueCat tenim accés ni emmagatzemem els detalls de la seva targeta de crèdit. Per a més informació, consulteu la <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">Política de Privadesa de RevenueCat</a>.</p>"
      },
      {
        title: "5. Anàlisi de Dades (Firebase Analytics)",
        content: "<p>Podem utilitzar <strong>Firebase Analytics</strong> per comprendre millor l'ús de la nostra Aplicació i millorar el servei. Això capta dades d'interaccions anònimes i informes d'errors (Crashlytics). Pot consultar la privadesa de Firebase <a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">aquí</a>.</p>"
      },
      {
        title: "6. Informes d'Errors i Suggeriments (Suport)",
        content: "<p>Si decideix enviar un informe d'error o suggeriment des de la secció de configuració de l'Aplicació, recopilarem el text del seu missatge juntament amb metadades tècniques de diagnòstic del seu dispositiu (com el sistema operatiu, model del dispositiu i versió instal·lada de l'aplicació). Aquestes dades es processen de forma segura a <strong>Firebase Firestore</strong> i s'utilitzen exclusivament per resoldre incidències tècniques i millorar l'aplicació.</p>"
      },
      {
        title: "7. Compartir la seva informació",
        content: "<p>No venem, intercanviem ni lloguem la seva informació personal a tercers. Només proporcionem dades als serveis esmentats anteriorment (Google, Firebase, LiveKit, RevenueCat) per al funcionament fonamental i la monetització de l'aplicació.</p>"
      },
      {
        title: "8. Els seus drets",
        content: "<p>Els usuaris a la Unió Europea tenen dret a la portabilitat, accés i esborrat de les dades emmagatzemades (GDPR). Si desitja esborrar les seves dades o restablir el seu identificador d'anuncis, poseu-vos en contacte amb nosaltres.</p>"
      },
      {
        title: "9. Canvis a aquesta política",
        content: "<p>Podem actualitzar la nostra Política de Privadesa de tant en tant. Li notificarem publicant la nova Política de Privadesa en aquesta mateixa pàgina.</p>"
      }
    ],
    footer: "Per a qualsevol dubte contacta amb el suport de Deceptra escrivint a <strong>support.deceptra&#64;gmail.com</strong>."
  },
  en: {
    title: "Privacy Policy - Deceptra",
    update: "Last updated: May 29, 2026",
    intro: "Thank you for playing <strong>Deceptra</strong> (\"the App\"). This privacy policy explains how we collect, use, and protect your information when you use our mobile application.",
    sections: [
      {
        title: "1. Data Collection, Use, and Authentication",
        content: "<p>The App offers the ability to sign in using your Google Account (<strong>Google Sign-In</strong>) or Apple Account (<strong>Sign in with Apple</strong>). If you choose to use these methods, we will receive certain profile information (such as your name, email address, and profile picture for Google, or the email and name details provided by Apple). This information is used exclusively to create and maintain your user profile within the game and to sync your progress and custom word packages across devices.</p><p><strong>Custom profile pictures:</strong> If you choose to customize your profile by uploading an image from your device's gallery or taking a photo with your camera, this image will be processed, cropped locally, and securely uploaded to our storage servers (<strong>Firebase Storage</strong>). This photo is only used to display it as your avatar in games and will not be shared with third parties.</p><p>We do not collect or store Google or Apple passwords. All authentication is handled securely by Google, Apple, and Firebase Authentication.</p><p>We also allow the use of anonymous accounts, in which case we only save the data associated with a unique anonymous identifier generated by Firebase.</p>"
      },
      {
        title: "2. Microphone Access and Real-Time Voice Chat (LiveKit)",
        content: "<p>During online games, the App offers interactive voice chat functionality using WebRTC technology through <strong>LiveKit</strong> services. To use this feature, the App will request permission to access your device's microphone.</p><p>The audio data captured by your microphone is transmitted in real time only to the other participants in the active game. <strong>We do not record, store, or archive audio conversations</strong> on any server; the transmission is purely live and temporary.</p>"
      },
      {
        title: "3. Ads (Google AdMob)",
        content: "<p>Our App uses <strong>Google AdMob</strong> services to display ads. AdMob may collect and use data from your device, such as your advertising ID, IP address, and other system and network information, in accordance with the <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Google Privacy Policy</a>.</p>"
      },
      {
        title: "4. In-App Purchases (Google Play, Apple App Store, and RevenueCat)",
        content: "<p>We offer in-app purchases (In-App Purchases) and subscriptions through Google Play and Apple App Store, managed by <strong>RevenueCat</strong>. Transactions are processed through <strong>Google Play Billing</strong> and <strong>Apple App Store Billing</strong> systems, which may use payment methods associated with your Google or Apple account. Neither we nor RevenueCat have access to or store your credit card details. For more information, see the <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">RevenueCat Privacy Policy</a>.</p>"
      },
      {
        title: "5. Data Analytics (Firebase Analytics)",
        content: "<p>We may use <strong>Firebase Analytics</strong> to better understand the usage of our App and improve the service. This captures anonymous interaction data and error reports (Crashlytics). You can view the Firebase privacy policy <a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">here</a>.</p>"
      },
      {
        title: "6. Bug Reports and Suggestions (Support)",
        content: "<p>If you choose to send a bug report or suggestion from the App's settings section, we will collect the text of your message along with technical diagnostics metadata from your device (such as operating system, device model, and installed version of the app). This data is processed securely in <strong>Firebase Firestore</strong> and is used exclusively to resolve technical issues and improve the app.</p>"
      },
      {
        title: "7. Sharing Your Information",
        content: "<p>We do not sell, trade, or rent your personal information to third parties. We only provide data to the services mentioned above (Google, Firebase, LiveKit, RevenueCat) for the fundamental operation and monetization of the app.</p>"
      },
      {
        title: "8. Your Rights",
        content: "<p>Users in the European Union have the right to portability, access, and deletion of stored data (GDPR). If you wish to delete your data or reset your advertising identifier, please contact us.</p>"
      },
      {
        title: "9. Changes to This Policy",
        content: "<p>We may update our Privacy Policy from time to time. We will notify you by posting the new Privacy Policy on this same page.</p>"
      }
    ],
    footer: "For any questions, please contact Deceptra support by writing to <strong>support.deceptra&#64;gmail.com</strong>."
  },
  fr: {
    title: "Politique de Confidentialité - Deceptra",
    update: "Dernière mise à jour: 29 Mai 2026",
    intro: "Merci de jouer à <strong>Deceptra</strong> (\"l'Application\"). Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre application mobile.",
    sections: [
      {
        title: "1. Collecte, utilisation des données et authentification",
        content: "<p>L'Application offre la possibilité de se connecter en utilisant votre compte Google (<strong>Google Sign-In</strong>) ou Apple (<strong>Sign in with Apple</strong>). Si vous choisissez d'utiliser ces méthodes, nous recevrons certaines informations de profil (comme votre nom, adresse e-mail et photo de profil pour Google, ou les informations de courrier et de nom fournies par Apple). Ces informations sont utilisées exclusivement pour créer et maintenir votre profil d'utilisateur dans le jeu et pour synchroniser votre progression et vos paquets de mots personnalisés sur tous vos appareils.</p><p><strong>Photos de profil personnalisées:</strong> Si vous décidez de personnaliser votre profil en téléchargeant une image depuis la galerie de votre appareil ou en prenant une photo avec votre appareil photo, cette image sera traitée, recadrée localement et téléchargée en toute sécurité sur nos serveurs de stockage (<strong>Firebase Storage</strong>). Cette photo est uniquement utilisée pour l'afficher en tant qu'avatar dans les parties et ne sera pas partagée avec des tiers.</p><p>Nous ne collectons ni ne stockons les mots de passe Google ou Apple. Toute l'authentification est gérée en toute sécurité par Google, Apple et Firebase Authentication.</p><p>Nous autorisons également l'utilisation de comptes anonymes, auquel cas nous enregistrons uniquement les données associées à un identifiant unique anonyme généré par Firebase.</p>"
      },
      {
        title: "2. Accès au microphone et chat vocal en temps réel (LiveKit)",
        content: "<p>Lors des parties en ligne, l'Application offre une fonctionnalité de chat vocal interactif utilisant la technologie WebRTC via les services de <strong>LiveKit</strong>. Pour utiliser cette fonctionnalité, l'Application vous demandera l'autorisation d'accéder au microphone de votre appareil.</p><p>Les données audio capturées par votre microphone sont transmises en temps réel uniquement aux autres participants de la partie active. <strong>Nous n'enregistrons pas, ne stockons pas et n'archivons pas les conversations audio</strong> sur un serveur; la transmission est uniquement en direct et temporaire.</p>"
      },
      {
        title: "3. Annonces (Google AdMob)",
        content: "<p>Notre Application utilise les services de <strong>Google AdMob</strong> pour afficher des publicités. AdMob peut collecter et utiliser des données de votre appareil, telles que votre identifiant publicitaire, votre adresse IP et d'autres informations système et réseau, conformément à la <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Politique de Confidentialité de Google</a>.</p>"
      },
      {
        title: "4. Achats intégrés (Google Play, Apple App Store et RevenueCat)",
        content: "<p>Nous proposons des achats intégrés (In-App Purchases) et des abonnements via Google Play et l'Apple App Store, gérés par <strong>RevenueCat</strong>. Les transactions sont traitées via les systèmes de facturation de <strong>Google Play Billing</strong> et <strong>Apple App Store Billing</strong>, qui peuvent utiliser des modes de paiement associés à votre compte Google ou Apple. Ni nous ni RevenueCat n'avons accès à vos coordonnées bancaires et nous ne les stockons pas. Pour plus d'informations, consultez la <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">Politique de Confidentialité de RevenueCat</a>.</p>"
      },
      {
        title: "5. Analyse de données (Firebase Analytics)",
        content: "<p>Nous pouvons utiliser <strong>Firebase Analytics</strong> pour mieux comprendre l'utilisation de notre Application et améliorer le service. Cela capture des données d'interaction anonymes et des rapports d'erreurs (Crashlytics). Vous pouvez consulter la politique de confidentialité de Firebase <a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">ici</a>.</p>"
      },
      {
        title: "6. Rapports d'erreurs et suggestions (Support)",
        content: "<p>Si vous choisissez d'envoyer un rapport d'erreur ou une suggestion depuis la section des paramètres de l'Application, nous collecterons le texte de votre message ainsi que des métadonnées de diagnostic technique de votre appareil (telles que le système d'exploitation, le modèle d'appareil et la version installée de l'application). Ces données sont traitées en toute sécurité dans <strong>Firebase Firestore</strong> et sont utilisées exclusivement pour résoudre des problèmes techniques et améliorer l'application.</p>"
      },
      {
        title: "7. Partage de vos informations",
        content: "<p>Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous ne fournissons des données qu'aux services mentionnés ci-dessus (Google, Firebase, LiveKit, RevenueCat) pour le fonctionnement fondamental et la monétisation de l'application.</p>"
      },
      {
        title: "8. Vos droits",
        content: "<p>Les utilisateurs de l'Union européenne ont un droit de portabilité, d'accès et de suppression des données stockées (RGPD). Si vous souhaitez supprimer vos données ou réinitialiser votre identifiant publicitaire, veuillez nous contacter.</p>"
      },
      {
        title: "9. Modifications de cette politique",
        content: "<p>Nous pouvons mettre à jour notre Politique de Confidentialité de temps à autre. Nous vous en informerons en publiant la nouvelle Politique de Confidentialité sur cette même page.</p>"
      }
    ],
    footer: "Pour toute question, veuillez contacter le support de Deceptra par e-mail à <strong>support.deceptra&#64;gmail.com</strong>."
  },
  de: {
    title: "Datenschutzerklärung - Deceptra",
    update: "Zuletzt aktualisiert: 29. Mai 2026",
    intro: "Vielen Dank, dass Sie <strong>Deceptra</strong> („die App“) spielen. Diese Datenschutzerklärung erklärt, wie wir Ihre Informationen erfassen, verwenden und schützen, wenn Sie unsere mobile Anwendung nutzen.",
    sections: [
      {
        title: "1. Datenerfassung, -verwendung und -authentifizierung",
        content: "<p>Die App bietet die Möglichkeit, sich über Ihr Google-Konto (<strong>Google Sign-In</strong>) oder Ihr Apple-Konto (<strong>Sign in with Apple</strong>) anzumelden. Wenn Sie diese Methoden nutzen, erhalten wir bestimmte Profilinformationen (wie Ihren Namen, Ihre E-Mail-Adresse und Ihr Profilbild bei Google bzw. die von Apple bereitgestellten E-Mail- und Namensdaten). Diese Informationen werden ausschließlich zur Erstellung und Pflege Ihres Benutzerprofils im Spiel sowie zur Synchronisierung Ihres Spielfortschritts und Ihrer benutzerdefinierten Wortpakete zwischen Geräten verwendet.</p><p><strong>Benutzerdefinierte Profilbilder:</strong> Wenn Sie Ihr Profil anpassen möchten, indem Sie ein Bild aus der Galerie Ihres Geräts hochladen oder ein Foto mit Ihrer Kamera aufnehmen, wird dieses Bild verarbeitet, lokal zugeschnitten und sicher auf unsere Speicherserver (<strong>Firebase Storage</strong>) hochgeladen. Dieses Foto wird ausschließlich zur Anzeige als Ihr Avatar in Spielen verwendet und nicht an Dritte weitergegeben.</p><p>Wir erfassen oder speichern keine Google- oder Apple-Passwörter. Die gesamte Authentifizierung wird sicher von Google, Apple und Firebase Authentication abgewickelt.</p><p>Wir ermöglichen auch die Nutzung anonymer Konten. In diesem Fall speichern wir nur die Daten, die mit einer von Firebase generierten eindeutigen anonymen Kennung verknüpft sind.</p>"
      },
      {
        title: "2. Mikrofonzugriff und Echtzeit-Sprachchat (LiveKit)",
        content: "<p>Bei Online-Spielen bietet die App eine interaktive Sprachchat-Funktion mittels WebRTC-Technologie über die Dienste von <strong>LiveKit</strong>. Um diese Funktion zu nutzen, bittet Sie die App um die Erlaubnis, auf das Mikrofon Ihres Geräts zuzugreifen.</p><p>Die von Ihrem Mikrofon erfassten Audiodaten werden in Echtzeit nur an die anderen Teilnehmer des aktiven Spiels übertragen. <strong>Wir zeichnen keine Audiogespräche auf, speichern sie nicht und archivieren sie auf keinem Server</strong>; die Übertragung erfolgt ausschließlich live und temporär.</p>"
      },
      {
        title: "3. Werbung (Google AdMob)",
        content: "<p>Unsere App nutzt die Dienste von <strong>Google AdMob</strong>, um Werbung anzuzeigen. AdMob kann Daten von Ihrem Gerät, wie Ihre Werbe-ID, IP-Adresse sowie andere System- und Netzwerkinformationen, gemäß der <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Datenschutzerklärung von Google</a> erfassen und verwenden.</p>"
      },
      {
        title: "4. In-App-Käufe (Google Play, Apple App Store und RevenueCat)",
        content: "<p>Wir bieten In-App-Käufe und Abonnements über Google Play und den Apple App Store an, die von <strong>RevenueCat</strong> verwaltet werden. Transaktionen werden über die Abrechnungssysteme von <strong>Google Play Billing</strong> und <strong>Apple App Store Billing</strong> abgewickelt, die mit Ihrem Google- oder Apple-Konto verknüpfte Zahlungsmethoden nutzen können. Weder wir noch RevenueCat haben Zugriff auf Ihre Kreditkartendaten oder speichern diese. Weitere Informationen finden Sie in der <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">Datenschutzerklärung von RevenueCat</a>.</p>"
      },
      {
        title: "5. Datenanalyse (Firebase Analytics)",
        content: "<p>Wir können <strong>Firebase Analytics</strong> nutzen, um die Nutzung unserer App besser zu verstehen und den Dienst zu verbessern. Dadurch werden anonyme Interaktionsdaten und Fehlerberichte (Crashlytics) erfasst. Die Datenschutzbestimmungen von Firebase können Sie <a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">hier</a> einsehen.</p>"
      },
      {
        title: "6. Fehlerberichte und Vorschläge (Support)",
        content: "<p>Wenn Sie einen Fehlerbericht oder Vorschlag aus dem Einstellungsbereich der App senden, erfassen wir den Text Ihrer Nachricht zusammen mit technischen Diagnose-Metadaten Ihres Geräts (wie Betriebssystem, Gerätemodell und installierte App-Version). Diese Daten werden sicher in <strong>Firebase Firestore</strong> verarbeitet und ausschließlich zur Behebung technischer Probleme und zur Verbesserung der App verwendet.</p>"
      },
      {
        title: "7. Weitergabe Ihrer Informationen",
        content: "<p>Wir verkaufen, handeln oder vermieten Ihre personenbezogenen Daten nicht an Dritte. Wir stellen Daten nur den oben genannten Diensten (Google, Firebase, LiveKit, RevenueCat) für den grundlegenden Betrieb und die Monetarisierung der App zur Verfügung.</p>"
      },
      {
        title: "8. Ihre Rechte",
        content: "<p>Nutzer in der Europäischen Union haben das Recht auf Datenübertragbarkeit, Auskunft und Löschung der gespeicherten Daten (DSGVO). Wenn Sie Ihre Daten löschen oder Ihre Werbekennung zurücksetzen möchten, kontaktieren Sie uns bitte.</p>"
      },
      {
        title: "9. Änderungen dieser Richtlinie",
        content: "<p>Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen.</p>"
      }
    ],
    footer: "Bei Fragen wenden Sie sich bitte an den Deceptra-Support unter <strong>support.deceptra&#64;gmail.com</strong>."
  },
  it: {
    title: "Informativa sulla Privacy - Deceptra",
    update: "Ultimo aggiornamento: 29 Maggio 2026",
    intro: "Grazie per aver giocato a <strong>Deceptra</strong> (\"l'Applicazione\"). Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni quando utilizzi la nostra applicazione mobile.",
    sections: [
      {
        title: "1. Raccolta dati, utilizzo e autenticazione",
        content: "<p>L'Applicazione offre la possibilità di accedere utilizzando il proprio account Google (<strong>Google Sign-In</strong>) o Apple (<strong>Sign in with Apple</strong>). Se si decide di utilizzare questi metodi, riceveremo alcune informazioni sul profilo (come nome, indirizzo e-mail e immagine del profilo per Google, o i dati e-mail e nome forniti da Apple). Queste informazioni vengono utilizzate esclusivamente per creare e mantenere il profilo utente all'interno del gioco e per sincronizzare i progressi e i pacchetti di parole personalizzati tra i dispositivi.</p><p><strong>Immagini del profilo personalizzate:</strong> Se si decide di personalizzare il proprio profilo caricando un'immagine dalla galleria del dispositivo o scattando una foto con la fotocamera, tale immagine verrà elaborata, ritagliata localmente e caricata in modo sicuro sui nostri server di archiviazione (<strong>Firebase Storage</strong>). Questa foto viene utilizzata solo per essere visualizzata come avatar nei giochi e non sarà condivisa con terze parti.</p><p>Non raccogliamo né memorizziamo password Google o Apple. Tutta l'autenticazione è gestita in modo sicuro da Google, Apple e Firebase Authentication.</p><p>Consentiamo anche l'uso di account anonimi, nel qual caso salviamo solo i dati associati a un identificativo anonimo univoco generato da Firebase.</p>"
      },
      {
        title: "2. Accesso al microfono e chat vocale in tempo reale (LiveKit)",
        content: "<p>Durante i giochi online, l'Applicazione offre funzionalità di chat vocale interattiva utilizzando la tecnologia WebRTC tramite i servizi <strong>LiveKit</strong>. Per utilizzare questa funzione, l'Applicazione richiederà il permesso di accedere al microfono del dispositivo.</p><p>I dati audio acquisiti dal microfono vengono trasmessi in tempo reale solo agli altri partecipanti al gioco attivo. <strong>Non registriamo, memorizziamo o archiviamo conversazioni audio</strong> su alcun server; la trasmissione è puramente live e temporanea.</p>"
      },
      {
        title: "3. Annunci (Google AdMob)",
        content: "<p>La nostra Applicazione utilizza i servizi <strong>Google AdMob</strong> per mostrare annunci. AdMob può raccogliere e utilizzare dati dal dispositivo, come l'ID pubblicitario, l'indirizzo IP e altre informazioni di sistema e di rete, in conformità con le <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Norme sulla Privacy di Google</a>.</p>"
      },
      {
        title: "4. Acquisti in-app (Google Play, Apple App Store e RevenueCat)",
        content: "<p>Offriamo acquisti in-app (In-App Purchases) e abbonamenti tramite Google Play e Apple App Store, gestiti da <strong>RevenueCat</strong>. Le transazioni vengono elaborate attraverso i sistemi di fatturazione di <strong>Google Play Billing</strong> e <strong>Apple App Store Billing</strong>, che possono utilizzare metodi di pagamento associati all'account Google o Apple. Né noi né RevenueCat abbiamo accesso o memorizziamo i dettagli della tua carta di credito. Per ulteriori informazioni, consulta l'Adempimento sulla <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">Privacy di RevenueCat</a>.</p>"
      },
      {
        title: "5. Analisi dei dati (Firebase Analytics)",
        content: "<p>Possiamo utilizzare <strong>Firebase Analytics</strong> per comprendere meglio l'uso della nostra Applicazione e migliorare il servizio. Questo acquisisce dati anonimi sull'interazione e rapporti sugli errori (Crashlytics). Puoi consultare le norme sulla privacy di Firebase <a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">qui</a>.</p>"
      },
      {
        title: "6. Rapporti sugli errori e suggerimenti (Supporto)",
        content: "<p>Se decidi di inviare un rapporto di errore o un suggerimento dalla sezione delle impostazioni dell'Applicazione, raccoglieremo il testo del tuo messaggio insieme ai metadati di diagnostica tecnica del tuo dispositivo (come sistema operativo, modello del dispositivo e versione dell'applicazione installata). Questi dati vengono elaborati in modo sicuro in <strong>Firebase Firestore</strong> e vengono utilizzati esclusivamente per risolvere problemi tecnici e migliorare l'applicazione.</p>"
      },
      {
        title: "7. Condivisione delle informazioni",
        content: "<p>Non vendiamo, scambiamo o affittiamo le tue informazioni personali a terze parti. Forniamo dati solo ai servizi sopra menzionati (Google, Firebase, LiveKit, RevenueCat) per il funzionamento fondamentale e la monetizzazione dell'applicazione.</p>"
      },
      {
        title: "8. I tuoi diritti",
        content: "<p>Gli utenti dell'Unione Europea hanno il diritto alla portabilità, all'accesso e alla cancellazione dei dati memorizzati (GDPR). Se desideri eliminare i tuoi dati o reimpostare il tuo identificatore pubblicitario, contattaci.</p>"
      },
      {
        title: "9. Modifiche alla presente informativa",
        content: "<p>Potremmo aggiornare periodicamente la nostra Informativa sulla Privacy. Ti informeremo pubblicando la nuova Informativa sulla Privacy in questa stessa pagina.</p>"
      }
    ],
    footer: "Per qualsiasi domanda, contatta il supporto di Deceptra scrivendo a <strong>support.deceptra&#64;gmail.com</strong>."
  },
  pt: {
    title: "Política de Privacidade - Deceptra",
    update: "Última atualização: 29 de Maio de 2026",
    intro: "Obrigado por jogar <strong>Deceptra</strong> (\"a Aplicação\"). Esta política de privacidade explica como recolhemos, usamos e protegemos a sua informação quando utiliza a nossa aplicação móvel.",
    sections: [
      {
        title: "1. Recolha, Uso e Autenticação de Dados",
        content: "<p>A Aplicação oferece a possibilidade de iniciar sessão utilizando a sua conta Google (<strong>Google Sign-In</strong>) ou Apple (<strong>Sign in with Apple</strong>). Se decidir utilizar estes métodos, receberemos certas informações de perfil (como o seu nome, endereço de e-mail e foto de perfil no caso do Google, ou os dados de e-mail e nome fornecidos pela Apple). Esta informação é utilizada exclusivamente para criar e manter o seu perfil de utilizador no jogo e para sincronizar o seu progresso e pacotes de palavras personalizados entre dispositivos.</p><p><strong>Fotos de perfil personalizadas:</strong> Se decidir personalizar o seu perfil enviando uma imagem da galeria do seu dispositivo ou tirando uma foto com a sua câmara, essa imagem será processada, recortada localmente e enviada de forma segura para os nossos servidores de armazenamento (<strong>Firebase Storage</strong>). Esta foto é utilizada apenas para exibição como o seu avatar nos jogos e não será partilhada com terceiros.</p><p>Não recolhemos nem armazenamos palavras-passe do Google ou Apple. Toda a autenticação é gerida de forma segura pelo Google, Apple e Firebase Authentication.</p><p>Também permitimos o uso de contas anónimas, caso em que apenas guardamos os dados associados a um identificador anónimo exclusivo gerado pelo Firebase.</p>"
      },
      {
        title: "2. Acesso ao Microfone e Chat de Voz em Tempo Real (LiveKit)",
        content: "<p>Durante os jogos online, a Aplicação oferece uma funcionalidade de chat de voz interativo usando tecnologia WebRTC através dos serviços da <strong>LiveKit</strong>. Para utilizar esta funcionalidade, a Aplicação solicitará permissão para aceder ao microfone do seu dispositivo.</p><p>Os dados de áudio capturados pelo seu microfone são transmitidos em tempo real apenas para os outros participantes do jogo ativo. <strong>Não gravamos, armazenamos ou arquivamos conversas de áudio</strong> em nenhum servidor; a transmissão é puramente ao vivo e temporária.</p>"
      },
      {
        title: "3. Anúncios (Google AdMob)",
        content: "<p>Nossa Aplicação utiliza os serviços do <strong>Google AdMob</strong> para exibir anúncios. O AdMob pode recolher e usar dados do seu dispositivo, como o seu ID de publicidade, endereço IP e outras informações do sistema e da rede, de acordo com a <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Política de Privacidade do Google</a>.</p>"
      },
      {
        title: "4. Compras na aplicação (Google Play, Apple App Store e RevenueCat)",
        content: "<p>Oferecemos compras na aplicação (In-App Purchases) e subscrições através da Google Play e Apple App Store, geridas pela <strong>RevenueCat</strong>. As transações são processadas através dos sistemas de faturação da <strong>Google Play Billing</strong> e <strong>Apple App Store Billing</strong>, que podem usar métodos de pagamento associados à sua conta Google ou Apple. Nem nós nem a RevenueCat temos acesso ou armazenamos os detalhes do seu cartão de crédito. Para mais informações, consulte a <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">Política de Privacidade da RevenueCat</a>.</p>"
      },
      {
        title: "5. Análise de Dados (Firebase Analytics)",
        content: "<p>Podemos usar o <strong>Firebase Analytics</strong> para entender melhor o uso da nossa Aplicação e melhorar o serviço. Isto recolhe dados de interação anónimos e relatórios de erros (Crashlytics). Pode consultar a política de privacidade do Firebase <a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">aqui</a>.</p>"
      },
      {
        title: "6. Relatórios de Erros e Sugestões (Suporte)",
        content: "<p>Se decidir enviar um relatório de erro ou sugestão na secção de definições da Aplicação, recolheremos o texto da sua mensagem juntamente com metadados de diagnóstico técnico do seu dispositivo (como o sistema operativo, modelo do dispositivo e versão instalada da aplicação). Estes dados são processados de forma segura no <strong>Firebase Firestore</strong> e são utilizados exclusivamente para resolver problemas técnicos e melhorar a aplicação.</p>"
      },
      {
        title: "7. Partilha das suas informações",
        content: "<p>Não vendemos, trocamos ou alugamos as suas informações pessoais a terceiros. Apenas fornecemos dados aos serviços acima mencionados (Google, Firebase, LiveKit, RevenueCat) para o funcionamento fundamental e monetização da aplicação.</p>"
      },
      {
        title: "8. Os seus direitos",
        content: "<p>Os utilizadores na União Europeia têm direito à portabilidade, acesso e eliminação dos dados armazenados (RGPD). Se desejar eliminar os seus dados ou repor o seu identificador de publicidade, contacte-nos.</p>"
      },
      {
        title: "9. Alterações a esta política",
        content: "<p>Podemos atualizar a nossa Política de Privacidade periodicamente. Iremos notificá-lo publicando a nova Política de Privacidade nesta mesma página.</p>"
      }
    ],
    footer: "Para qualquer dúvida, contacte o suporte de Deceptra escrevendo para <strong>support.deceptra&#64;gmail.com</strong>."
  },
  ru: {
    title: "Политика конфиденциальности - Deceptra",
    update: "Последнее обновление: 29 мая 2026 г.",
    intro: "Благодарим вас за игру в <strong>Deceptra</strong> («Приложение»). Настоящая политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при использовании нашего мобильного приложения.",
    sections: [
      {
        title: "1. Сбор, использование данных и аутентификация",
        content: "<p>Приложение предлагает возможность входа с использованием вашей учетной записи Google (<strong>Google Sign-In</strong>) или Apple (<strong>Sign in with Apple</strong>). Если вы решите использовать эти методы, мы получим определенную информацию профиля (такую как ваше имя, адрес электронной почты и изображение профиля для Google или данные электронной почты и имени, предоставленные Apple). Эта информация используется исключительно для создания и поддержания вашего профиля пользователя в игре, а также для синхронизации вашего прогресса и пользовательских пакетов слов между устройствами.</p><p><strong>Пользовательские изображения профиля:</strong> Если вы решите настроить свой профиль, загрузив изображение из галереи вашего устройства или сделав снимок с помощью камеры, это изображение будет обработано, обрезано локально и безопасно загружено на наши серверы хранения (<strong>Firebase Storage</strong>). Это фото используется только для отображения в качестве вашего аватара в играх и не будет передаваться третьим лицам.</p><p>Мы не собираем и не храним пароли Google или Apple. Вся аутентификация безопасно обрабатывается Google, Apple и Firebase Authentication.</p><p>Мы также разрешаем использование анонимных учетных записей, и в этом случае мы сохраняем только данные, связанные с уникальным анонимным идентификатором, созданным Firebase.</p>"
      },
      {
        title: "2. Доступ к микрофону и голосовой чат в реальном времени (LiveKit)",
        content: "<p>Во время онлайн-игр Приложение предлагает функцию интерактивного голосового чата с использованием технологии WebRTC через службы <strong>LiveKit</strong>. Чтобы использовать эту функцию, Приложение запросит разрешение на доступ к микрофону вашего устройства.</p><p>Аудиоданные, полученные вашим микрофоном, передаются в режиме реального времени только другим участникам активной игры. <strong>Мы не записываем, не храним и не архивируем голосовые разговоры</strong> на каком-либо сервере; передача является исключительно прямой и временной.</p>"
      },
      {
        title: "3. Реклама (Google AdMob)",
        content: "<p>Наше Приложение использует службы <strong>Google AdMob</strong> для показа рекламы. AdMob может собирать и использовать данные с вашего устройства, такие как ваш рекламный идентификатор, IP-адрес и другую системную и сетевую информацию, в соответствии с <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Политикой конфиденциальности Google</a>.</p>"
      },
      {
        title: "4. Покупки в приложении (Google Play, Apple App Store и RevenueCat)",
        content: "<p>Мы предлагаем покупки в приложении (In-App Purchases) и подписки через Google Play и Apple App Store, управляемые <strong>RevenueCat</strong>. Транзакции обрабатываются через биллинговые системы <strong>Google Play Billing</strong> и <strong>Apple App Store Billing</strong>, которые могут использовать способы оплаты, связанные с вашей учетной записью Google или Apple. Ни мы, ни RevenueCat не имеем доступа к данным вашей кредитной карты и не храним их. Для получения дополнительной информации см. <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">Политику конфиденциальности RevenueCat</a>.</p>"
      },
      {
        title: "5. Аналитика данных (Firebase Analytics)",
        content: "<p>Мы можем использовать <strong>Firebase Analytics</strong> для лучшего понимания использования нашего Приложения и улучшения сервиса. Это фиксирует анонимные данные взаимодействия и отчеты об ошибках (Crashlytics). Вы можете ознакомиться с политикой конфиденциальности Firebase <a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">здесь</a>.</p>"
      },
      {
        title: "6. Отчеты об ошибках и предложения (Поддержка)",
        content: "<p>Если вы решите отправить отчет об ошибке или предложение из раздела настроек Приложения, мы соберем текст вашего сообщения вместе с техническими диагностическими метаданными вашего устройства (такими как операционная система, модель устройства и установленная версия приложения). Эти данные безопасно обрабатываются в <strong>Firebase Firestore</strong> и используются исключительно для решения технических проблем и улучшения приложения.</p>"
      },
      {
        title: "7. Обмен вашей информацией",
        content: "<p>Мы не продаем, не обмениваем и не сдаем в аренду вашу личную информацию третьим лицам. Мы предоставляем данные только упомянутым выше службам (Google, Firebase, LiveKit, RevenueCat) для фундаментальной работы и монетизации приложения.</p>"
      },
      {
        title: "8. Ваши права",
        content: "<p>Пользователи в Европейском Союзе имеют право на переносимость, доступ и удаление сохраненных данных (GDPR). Если вы хотите удалить свои данные или сбросить рекламный идентификатор, свяжитесь с нами.</p>"
      },
      {
        title: "9. Изменения в этой политике",
        content: "<p>Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы сообщим вам, опубликовав новую Политику конфиденциальности на этой странице.</p>"
      }
    ],
    footer: "По любым вопросам обращайтесь в службу поддержки Deceptra по адресу <strong>support.deceptra&#64;gmail.com</strong>."
  },
  zh: {
    title: "隐私政策 - Deceptra",
    update: "最后更新日期：2026年5月29日",
    intro: "感谢您游玩 <strong>Deceptra</strong>（下称“本应用”）。本隐私政策旨在向您说明在您使用我们的移动应用时，我们如何收集、使用和保护您的信息。",
    sections: [
      {
        title: "1. 数据收集、使用与登录验证",
        content: "<p>本应用支持您使用 Google 帐户（<strong>Google Sign-In</strong>）或 Apple 帐户（<strong>Sign in with Apple</strong>）进行登录。如果您选择使用这些方式，我们将获取您特定的公开个人资料信息（例如 Google 帐户中的昵称、电子邮箱及头像，或 Apple 账户中您同意提供的电子邮箱和昵称）。这些信息将仅用于在游戏内为您创建并维护个人档案，以便在不同设备间同步您的游戏进度和自定义词包。</p><p><strong>自定义头像：</strong>如果您选择使用设备图库中的图片或使用相机拍摄照片来作为自定义头像，该图片将被在本地裁剪后安全地上传至我们的存储服务器（<strong>Firebase Storage</strong>）。该照片仅用于在游戏中展示您的头像，不会与任何第三方分享。</p><p>我们不会收集或存储您的 Google 或 Apple 账户密码。所有登录验证工作均通过 Google、Apple 和 Firebase Authentication 安全完成。</p><p>我们同样支持使用匿名帐户，在此情况下，我们仅保存与 Firebase 生成的唯一匿名标识符相关联的数据。</p>"
      },
      {
        title: "2. 麦克风权限与实时语音聊天 (LiveKit)",
        content: "<p>在线游戏期间，本应用通过 <strong>LiveKit</strong> 服务，利用 WebRTC 技术为您提供实时语音通话功能。为了使用该功能，本应用将向您申请麦克风访问权限。</p><p>您的麦克风捕获的语音数据仅会实时传输给当前游戏局内的其他玩家。<strong>我们不会在任何服务器上录制、存储或归档您的语音通话内容</strong>；该数据传输是纯实时的、临时的。</p>"
      },
      {
        title: "3. 广告推送 (Google AdMob)",
        content: "<p>我们的应用使用 <strong>Google AdMob</strong> 服务展示广告。AdMob 可能会根据 <a href=\"https://policies.google.com/privacy\" target=\"_blank\">Google 隐私权政策</a> 收集并使用您的设备数据（例如广告 ID、IP 地址以及其他系统和网络信息）。</p>"
      },
      {
        title: "4. 应用内购买 (Google Play, Apple App Store 及 RevenueCat)",
        content: "<p>我们通过 Google Play 和 Apple App Store 提供应用内购买及订阅，购买记录由 <strong>RevenueCat</strong> 统一进行验证与管理。所有交易均通过 <strong>Google Play Billing</strong> 和 <strong>Apple App Store Billing</strong> 支付系统处理，这可能会使用与您的 Google 或 Apple 帐户相关联 cylindrical 的支付方式。我们与 RevenueCat 均无法获取也绝不存储您的信用卡信息。如需了解更多，请参阅 <a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">RevenueCat 隐私政策</a>。</p>"
      },
      {
        title: "5. 数据分析 (Firebase Analytics)",
        content: "<p>我们可能会使用 <strong>Firebase Analytics</strong> 来更好地了解本应用的使用情况并改进服务。这会收集匿名交互数据和崩溃日志 (Crashlytics)。您可以在<a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">此处</a>查看 Firebase 隐私政策条款。</p>"
      },
      {
        title: "6. 错误报告与建议反馈 (技术支持)",
        content: "<p>如果您选择从本应用的设置界面提交错误报告或建议，我们将收集您输入的反馈内容以及设备的系统诊断信息（例如操作系统类型、设备型号和安装的应用版本）。这些数据将被安全地保存在 <strong>Firebase Firestore</strong> 中，仅用于排查技术故障和持续改进本应用。</p>"
      },
      {
        title: "7. 信息共享",
        content: "<p>我们不会向任何第三方出售、交易或出租您的个人身份信息。我们仅会将数据提供给上述服务提供商（Google、Firebase、LiveKit、RevenueCat），以保障本应用的基本运行与盈利功能。</p>"
      },
      {
        title: "8. 您的权利",
        content: "<p>位于欧盟境内的用户根据《通用数据保护条例》(GDPR) 拥有数据可携权、访问权以及删除已存储数据的权利。如果您希望删除您的数据或重置广告标识符，请与我们取得联系。</p>"
      },
      {
        title: "9. 隐私政策的变更",
        content: "<p>我们可能会不时更新我们的隐私政策。如有变更，我们将在本页面发布最新的隐私政策以向您知会。</p>"
      }
    ],
    footer: "如有任何疑问，请发送邮件至 <strong>support.deceptra&#64;gmail.com</strong> 联系 Deceptra 团队。"
  },
  ja: {
    title: "プライバシーポリシー - Deceptra",
    update: "最終更新日: 2026年5月29日",
    intro: "<strong>Deceptra</strong>（以下「本アプリ」）をご利用いただきありがとうございます。本プライバシーポリシーでは、お客様がモバイルアプリを使用する際にお客様の情報をどのように収集、使用、および保護するかについて説明します。",
    sections: [
      {
        title: "1. データの収集、使用、および認証",
        content: "<p>本アプリは、Googleアカウント（<strong>Google Sign-In</strong>）またはAppleアカウント（<strong>Sign in with Apple</strong>）を使用してログインする機能を提供しています。これらの方法を使用する場合、プロフィール情報の一部（Googleの場合は名前、メールアドレス、プロフィール写真、Appleの場合は提供されたメールアドレスと名前の詳細）を受信します。この情報は、ゲーム内でユーザープロフィールを作成および維持し、デバイス間で進捗状況やカスタム単語パッケージを同期するためにのみ使用されます。</p><p><strong>カスタムプロフィール写真:</strong> デバイスのギャラリーから画像をアップロードするか、カメラで写真を撮影してプロフィールをカスタマイズすることを選択した場合、その画像は処理され、ローカルでトリミングされ、ストレージサーバー（<strong>Firebase Storage</strong>）に安全にアップロードされます。この写真は、ゲームでアバターとして表示するためだけに使用され、第三者と共有されることはありません。</p><p>GoogleまたはAppleのパスワードを収集または保存することはありません。すべての認証は、Google、Apple、およびFirebase Authenticationによって安全に処理されます。</p><p>また、匿名アカウントの使用も許可しています。その場合、Firebaseによって生成された一意の匿名識別子に関連付けられたデータのみを保存します。</p>"
      },
      {
        title: "2. マイクへのアクセスとリアルタイムボイスチャット（LiveKit）",
        content: "<p>オンラインゲーム中、本アプリは<strong>LiveKit</strong>サービスを介してWebRTC技術を使用したインタラクティブなボイスチャット機能を提供します。この機能を使用するには、アプリがデバイスのマイクへのアクセス許可を要求します。</p><p>マイクによってキャプチャされた音声データは、アクティブなゲームの他の参加者にのみリアルタイムで送信されます。<strong>音声会話をサーバーに録音、保存、またはアーカイブすることはありません。</strong>送信は完全にライブかつ一時的なものです。</p>"
      },
      {
        title: "3. 広告について (Google AdMob)",
        content: "<p>本アプリは、広告を表示するために<strong>Google AdMob</strong>サービスを使用しています。AdMobは、<a href=\"https://policies.google.com/privacy\" target=\"_blank\">Googleプライバシーポリシー</a>に従って、広告ID、IPアドレス、その他のシステムおよびネットワーク情報などのデータをデバイスから収集および使用する場合があります。</p>"
      },
      {
        title: "4. アプリ内購入（Google Play、Apple App Store、およびRevenueCat）",
        content: "<p>Google PlayおよびApple App Storeを通じて、アプリ内購入（In-App Purchases）および定期購読を提供しており、これらは<strong>RevenueCat</strong>によって管理されています。取引は、Google PlayまたはAppleアカウントに関連付けられた支払い方法を使用できる<strong>Google Play Billing</strong>および<strong>Apple App Store Billing</strong>決済システムを通じて処理されます。当社およびRevenueCatは、クレジットカードの詳細にアクセスすることも保存することもありません。詳細については、<a href=\"https://www.revenuecat.com/privacy\" target=\"_blank\">RevenueCatのプライバシーポリシー</a>を参照してください。</p>"
      },
      {
        title: "5. データ分析（Firebase Analytics）",
        content: "<p>本アプリの使用状況をよりよく理解し、サービスを向上させるために、<strong>Firebase Analytics</strong>を使用する場合があります。これにより、匿名のアクティビティデータやクラッシュレポート（Crashlytics）が収集されます。Firebaseのプライバシーについては<a href=\"https://firebase.google.com/support/privacy\" target=\"_blank\">こちら</a>をご確認ください。</p>"
      },
      {
        title: "6. バグレポートと提案 (サポート)",
        content: "<p>アプリの設定セクションからバグレポートまたは提案を送信することを選択した場合、メッセージのテキストと、デバイスからの技術的な診断メタデータ（OS、デバイスモデル、インストールされているアプリのバージョンなど）が収集されます。このデータは<strong>Firebase Firestore</strong>で安全に処理され、技術的な問題の解決とアプリの改善のみに使用されます。</p>"
      },
      {
        title: "7. 情報の共有について",
        content: "<p>当社はお客様の個人情報を第三者に販売、取引、または貸し出すことはありません。アプリの基本的な機能と収益化のために、上記のサービス（Google、Firebase、LiveKit、RevenueCat）にのみデータを提供します。</p>"
      },
      {
        title: "8. お客様の権利",
        content: "<p>EU域内のユーザーは、保存されたデータのポータビリティ、アクセス、および消去の権利を有します（GDPR）。 データを消去するか、広告識別子をリセットしたい場合は、お問い合わせください。</p>"
      },
      {
        title: "9. 本ポリシーの変更",
        content: "<p>プライバシーポリシーは随時更新されることがあります。 変更があった場合は、このページに新しいプライバシーポリシーを掲載してお知らせします。</p>"
      }
    ],
    footer: "ご不明な点がございましたら、<strong>support.deceptra&#64;gmail.com</strong>宛てに電子メールでお問い合わせください。"
  }
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  const queryLang = (req.query.lang as string || 'es').toLowerCase().split('-')[0];
  const policy = translations[queryLang] || translations['en'] || translations['es'];
  const langCode = translations[queryLang] ? queryLang : 'en';

  const html = `
<!DOCTYPE html>
<html lang="${langCode}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${policy.title}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1, h2 { color: #2c3e50; }
        h1 { border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        p { margin-bottom: 15px; }
        a { color: #3498db; text-decoration: none; }
        a:hover { text-decoration: underline; }
        hr { border: 0; border-top: 1px solid #ddd; margin: 30px 0; }
    </style>
</head>
<body>
    <h1>${policy.title}</h1>
    <p><strong>${policy.update}</strong></p>
    <p>${policy.intro}</p>

    ${policy.sections.map(s => `
        <h2>${s.title}</h2>
        ${s.content}
    `).join('')}

    <hr>
    <p style="font-size: 14px; text-align: center; color: #7f8c8d;">${policy.footer}</p>
</body>
</html>
  `;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
