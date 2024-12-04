<?php

declare(strict_types=1);

namespace OCA\WebTransfer\Controller;

use OCA\WebTransfer\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\FrontpageRoute;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\Attribute\OpenAPI;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;
use OCP\IResponse;
use OCP\AppFramework\Http\JSONResponse;

/**
 * @psalm-suppress UnusedClass
 */
class PageController extends Controller {
	#[NoCSRFRequired]
	#[NoAdminRequired]
	#[OpenAPI(OpenAPI::SCOPE_IGNORE)]
	#[FrontpageRoute(verb: 'GET', url: '/')]
	public function index(): TemplateResponse {
		return new TemplateResponse(
			Application::APP_ID,
			'index',
		);
	}

	#[NoCSRFRequired]
	#[NoAdminRequired]
	#[OpenAPI(OpenAPI::SCOPE_IGNORE)]
	#[FrontpageRoute(verb: 'POST', url: '/zipDrop')]
	public function zipDrop() {
		$subUrl = $this->request->getParam('subUrl');
		if (!$subUrl) {
			return new JSONResponse(['error' => 'subUrl is required'], 400); // Retourner une réponse d'erreur 400 si le paramètre est manquant
		}

		$parameters = array('archiveUrl' => $subUrl);

		// Créer une réponse basée sur un template
		$response = new TemplateResponse(
			Application::APP_ID,
			'index',
			$parameters
		);

		return $response;
	}

	#[NoCSRFRequired]
	#[NoAdminRequired]
	#[OpenAPI(OpenAPI::SCOPE_IGNORE)]
	#[FrontpageRoute(verb: 'POST', url: '/getZipFile')]
	public function getZipFile() {
		// Récupérer les données envoyées dans la requête POST
		$requestData = $this->request->getParams(); // Accéder aux paramètres envoyés
		$zipUrl = $requestData['subUrl'] ?? null; // Récupérer 'subUrl' ou null si absent

		// Valider l'URL
		if (!$zipUrl || filter_var($zipUrl, FILTER_VALIDATE_URL) === false) {
			return new \OCP\AppFramework\Http\DataResponse(['error' => 'Invalid URL'], 400);
		}

		// Utiliser cURL pour récupérer le fichier ZIP à l'URL fournie
		/*$ch = curl_init($zipUrl);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$fileContent = curl_exec($ch);
		$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE); // Récupérer le code HTTP
		curl_close($ch);*/

		// Vérifier si le fichier est récupéré avec succès
		/*if ($fileContent !== false && $httpCode === 200) {
			$response = new \OCP\AppFramework\Http\DownloadResponse($fileContent);
			$response->setContentDisposition('attachment', 'yourfile.zip');
			return $response;
		}

		// Gérer les erreurs si le fichier ne peut pas être récupéré
		return new \OCP\AppFramework\Http\DataResponse(['error' => 'File not found'], 404);

		new JSONResponse(['error' => 'subUrl is required'], 400);
		*/
		try {
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $zipUrl);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

			$response = curl_exec($ch);

			if (curl_errno($ch)) {
				return new JSONResponse(['feur' => curl_error($ch)], 200);
			}
		
			return new JSONResponse(['feur' => $response], 200);
		} catch (Exception $e) {
			return new JSONResponse(['feur' => $e->getMessage()], 500);
		}
	}
}
