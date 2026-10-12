<?php
// ====================================================================
// ORBANIX GROUP - PROCESADOR DE FORMULARIO DE CONTACTO (NUVOLINK / PLESK)
// Compatible con PHP 5.6+, 7.x y 8.x
// ====================================================================

// Cabeceras CORS y JSON
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

// Responder a preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Solo admitir método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(array('error' => 'Método no permitido. Solo se acepta POST.'));
    exit;
}

// Obtener datos del cuerpo JSON
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data || !is_array($data)) {
    // Intentar leer de $_POST estándar
    $data = $_POST;
}

// Extraer y limpiar campos
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim(strip_tags($data['email'])) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$company = isset($data['company']) ? trim(strip_tags($data['company'])) : '';
$need = isset($data['need']) ? trim(strip_tags($data['need'])) : 'General';
$message = isset($data['message']) ? trim($data['message']) : '';
$assetTitle = isset($data['assetTitle']) ? trim(strip_tags($data['assetTitle'])) : '';
$assetRef = isset($data['assetRef']) ? trim(strip_tags($data['assetRef'])) : '';

// Validar obligatorios
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(array('error' => 'Por favor complete Nombre, Email y Mensaje.'));
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(array('error' => 'El formato del correo electrónico no es válido.'));
    exit;
}

// Parámetros del envío
$recipient = 'info@orbanixgroup.com';
$dateStr = date('d/m/Y H:i:s');
$reference = 'ORB-' . date('Ymd') . '-' . strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, 5));

$subject = "[ORBANIX GROUP] Nueva Solicitud: {$name} · {$need} [{$reference}]";
$subjectEncoded = '=?UTF-8?B?' . base64_encode($subject) . '?=';

// Mensaje en texto plano
$plainText = "====================================================================\n";
$plainText .= "                   ORBANIX GROUP · CONSULTA WEB                     \n";
$plainText .= "         Real Estate · Investment · Advisory (Catalunya)            \n";
$plainText .= "====================================================================\n\n";
$plainText .= "REFERENCIA  : {$reference}\n";
$plainText .= "FECHA/HORA  : {$dateStr}\n";
$plainText .= "DESTINO     : {$recipient}\n\n";
$plainText .= "--------------------------------------------------------------------\n";
$plainText .= " DATOS DEL SOLICITANTE\n";
$plainText .= "--------------------------------------------------------------------\n";
$plainText .= "Nombre Completo   : {$name}\n";
$plainText .= "Email de Contacto : {$email}\n";
$plainText .= "Teléfono          : " . (!empty($phone) ? $phone : 'No indicado') . "\n";
$plainText .= "Empresa / Entidad : " . (!empty($company) ? $company : 'No indicada') . "\n\n";
$plainText .= "--------------------------------------------------------------------\n";
$plainText .= " DETALLES DE LA SOLICITUD\n";
$plainText .= "--------------------------------------------------------------------\n";
$plainText .= "Tipo / Área       : {$need}\n";
if (!empty($assetTitle)) {
    $plainText .= "Activo Asociado   : {$assetTitle} (" . (!empty($assetRef) ? $assetRef : '') . ")\n";
}
$plainText .= "\n--------------------------------------------------------------------\n";
$plainText .= " MENSAJE DE LA CONSULTA\n";
$plainText .= "--------------------------------------------------------------------\n";
$plainText .= "{$message}\n\n";
$plainText .= "====================================================================\n";
$plainText .= "Protocolo de Confidencialidad y Protección de Datos ORBANIX GROUP\n";
$plainText .= "Enviado a través del formulario web oficial https://orbanixgroup.com\n";
$plainText .= "====================================================================\n";

// Mensaje en HTML de alta calidad
$escapedMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$htmlBody = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>{$subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f0d; color: #edece5; margin: 0; padding: 25px 15px; }
    .wrapper { max-width: 640px; margin: 0 auto; background-color: #121915; border: 1px solid #c6aa7544; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #0e1511 0%, #1a261f 100%); padding: 32px 30px 24px; border-bottom: 2px solid #c6aa75; }
    .header .eyebrow { color: #c6aa75; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px 0; }
    .header h1 { font-family: Georgia, serif; color: #fbfbf7; font-size: 24px; font-weight: normal; margin: 0; }
    .badge { display: inline-block; background-color: #24352b; color: #c6aa75; border: 1px solid #c6aa7566; padding: 3px 8px; font-size: 11px; border-radius: 4px; margin-top: 10px; }
    .content { padding: 28px 30px; }
    .section-title { font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #c6aa75; margin: 24px 0 12px; padding-bottom: 5px; border-bottom: 1px solid #2a3a30; }
    .grid { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
    .grid td { padding: 9px 0; vertical-align: top; border-bottom: 1px solid #1c2720; font-size: 14px; }
    .grid .label { color: #8e9a8f; width: 36%; font-weight: 500; }
    .grid .value { color: #f5f4ef; font-weight: 600; }
    .grid .value a { color: #c6aa75; text-decoration: none; }
    .message-box { background-color: #0b100d; border-left: 3px solid #c6aa75; padding: 18px 20px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #e4e3dd; margin-top: 10px; }
    .footer { background-color: #0c120e; padding: 20px 30px; border-top: 1px solid #1f2b23; text-align: center; font-size: 12px; color: #727e73; line-height: 1.5; }
    .footer strong { color: #c6aa75; }
    .cta-btn { display: inline-block; background: #c6aa75; color: #0d130f !important; padding: 10px 18px; font-size: 13px; font-weight: bold; text-decoration: none; border-radius: 4px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <p class="eyebrow">ORBANIX GROUP · RECEPCIÓN DE SOLICITUDES</p>
      <h1>Nueva Consulta Web Registrada</h1>
      <span class="badge">Ref: {$reference}</span>
      <span class="badge" style="background:#17221b; color:#a2b29f; border-color:#2a3a30;">{$dateStr}</span>
    </div>

    <div class="content">
      <div class="section-title">Datos del Solicitante</div>
      <table class="grid">
        <tr>
          <td class="label">Nombre completo</td>
          <td class="value">{$name}</td>
        </tr>
        <tr>
          <td class="label">Email de contacto</td>
          <td class="value"><a href="mailto:{$email}">{$email}</a></td>
        </tr>
        <tr>
          <td class="label">Teléfono</td>
          <td class="value">{$phone}</td>
        </tr>
        <tr>
          <td class="label">Empresa / Entidad</td>
          <td class="value">{$company}</td>
        </tr>
      </table>

      <div class="section-title">Detalles de la Solicitud</div>
      <table class="grid">
        <tr>
          <td class="label">Tipo de servicio</td>
          <td class="value" style="color: #c6aa75;">{$need}</td>
        </tr>
HTML;

if (!empty($assetTitle)) {
    $htmlBody .= <<<HTML
        <tr>
          <td class="label">Activo consultado</td>
          <td class="value">{$assetTitle} <span style="color:#c6aa75;">({$assetRef})</span></td>
        </tr>
HTML;
}

$htmlBody .= <<<HTML
        <tr>
          <td class="label">Destinatario oficial</td>
          <td class="value"><a href="mailto:{$recipient}">{$recipient}</a></td>
        </tr>
      </table>

      <div class="section-title">Mensaje de la Consulta</div>
      <div class="message-box">{$escapedMessage}</div>

      <div>
        <a class="cta-btn" href="mailto:{$email}?subject=Re:%20[ORBANIX%20GROUP]%20Consulta%20{$reference}">Responder al Solicitante ↗</a>
      </div>
    </div>

    <div class="footer">
      <p>Generado automáticamente desde <strong>orbanixgroup.com</strong> en Nuvolink.<br>
      Tratamiento confidencial de Real Estate & Advisory Catalunya.</p>
    </div>
  </div>
</body>
</html>
HTML;

// Preparar cabeceras para envío en HTML
$headers = array();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: ORBANIX GROUP <info@orbanixgroup.com>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Enviar correo mediante el servidor local de Nuvolink / Plesk
$mailSent = @mail($recipient, $subjectEncoded, $htmlBody, implode("\r\n", $headers));

// Registrar backup en archivo log por seguridad
$logEntry = "[" . date('Y-m-d H:i:s') . "] REF: {$reference} | DE: {$name} <{$email}> | TIPO: {$need} | ENVIADO: " . ($mailSent ? 'SI' : 'NO') . "\n";
@file_put_contents(dirname(__FILE__) . '/contact_leads.log', $logEntry, FILE_APPEND);

echo json_encode(array(
    'success' => true,
    'reference' => $reference,
    'delivered' => $mailSent
));
exit;
