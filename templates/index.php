<?php

declare(strict_types=1);

use OCP\Util;

Util::addScript(OCA\WebTransfer\AppInfo\Application::APP_ID, 'main');

$archiveUrl = isset($_['archiveUrl']) ? $_['archiveUrl'] : ''; // Valeur par défaut vide si non définie
$token = isset($_['token']) ? $_['token'] : ''; // Valeur par défaut vide si non définie
?>

<div id="webtransfer">
</div>

<div id="archiveInfos"
     data-archive-url="<?php echo htmlspecialchars($archiveUrl); ?>" 
     data-token="<?php echo htmlspecialchars($token); ?>"
>
</div>
