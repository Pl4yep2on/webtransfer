<?php

namespace OCA\WebServer\Controller;

use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Controller;
use OCP\Files\Node;
use OCP\IRequest;

class FileController extends Controller {
    public function __construct(IRequest $request) {
        parent::__construct($appName, $request);
    }

    /**
     * @NoCSRFRequired
     * @NoAdminRequired
     */
    public function upload() {
        $uploadedFile = $this->request->getUploadedFile('file');
        
        // Vérifiez si le fichier a été bien reçu
        if (!$uploadedFile) {
            return new DataResponse(['status' => 'error', 'message' => 'No file uploaded'], 400);
        }
    
        try {
            // Sauvegardez le fichier dans le dossier de l'utilisateur
            $userFolder = \OC::$server->getUserFolder();
            $userFolder->newFile($uploadedFile['name'], file_get_contents($uploadedFile['tmp_name']));
    
            return new DataResponse(['status' => 'success', 'filename' => $uploadedFile['name']]);
    
        } catch (\Exception $e) {
            // Loggez l'erreur pour plus de détails
            \OC::$server->getLogger()->error("File upload error: " . $e->getMessage(), ['app' => 'webserver']);
            
            return new DataResponse(['status' => 'error', 'message' => 'Failed to save file'], 500);
        }
    }
    
}
