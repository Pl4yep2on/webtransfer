<?php

declare(strict_types=1);

use OCP\Util;

Util::addScript(OCA\WebTransfer\AppInfo\Application::APP_ID, 'main');

$archiveUrl = isset($_['archiveUrl']) ? $_['archiveUrl'] : ''; // Valeur par défaut vide si non définie
?>

<div id="webtransfer">
</div>

<div id="archiveInfos"
     dataarchiveurl="<?php echo htmlspecialchars($archiveUrl); ?>" 
>
</div>
