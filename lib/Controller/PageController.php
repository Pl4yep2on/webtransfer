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
	#[FrontpageRoute(verb: 'GET', url: '/zipDrop')]
	public function zipDrop() {
		// Récupérer le paramètre url (compatible GET et POST)
		$url = $this->request->getParam('url');

		if (!$url) {
			return new \OCP\AppFramework\Http\DataResponse([
				'error' => 'Le paramètre url est manquant'
			], 400);
		}

		// Optionnel : Validation de l'URL
		if (filter_var($url, FILTER_VALIDATE_URL) === false) {
			return new \OCP\AppFramework\Http\DataResponse([
				'error' => 'url n\'est pas une URL valide'
			], 400);
		}

		$parameters = array('archiveUrl' => $url);

		// Réponse de succès
		return new TemplateResponse(
			Application::APP_ID,
			'index',
			$parameters
		);
	}

	#[NoCSRFRequired]
	#[NoAdminRequired]
	#[OpenAPI(OpenAPI::SCOPE_IGNORE)]
	#[FrontpageRoute(verb: 'GET', url: '/getZipFile')]
	public function getZipFile() {
		// Récupérer les données envoyées dans la requête
		$zipUrl = $this->request->getParam('url');

		// Initialiser les paramètres de réponse
		$parameters = [
			'status' => 'error', // Par défaut, la réponse indique une erreur
			'message' => '',
			'data' => null
		];

		// Valider l'URL
		if (!$zipUrl || filter_var($zipUrl, FILTER_VALIDATE_URL) === false) {
			$parameters['message'] = 'Invalid URL';
			return new JsonResponse($parameters, 400); // 400 Bad Request
		}

		try {
			// Initialiser cURL
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $zipUrl);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Timeout de 10 secondes
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Suivre les redirections

			// Récupérer le contenu
			$response = curl_exec($ch);

			// Gérer les erreurs cURL
			if (curl_errno($ch)) {
				$parameters['message'] = 'cURL error: ' . curl_error($ch);
				curl_close($ch);
				return new JsonResponse(['parameters' => $parameters, 'status' => 500]); // 500 Internal Server Error
			}

			// Vérifier le code HTTP
			$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
			curl_close($ch);

			if ($httpCode !== 200) {
				$parameters['message'] = "HTTP error: $httpCode";
				return new JsonResponse(['parameters' => $parameters, 'status' => $httpCode]);
			}

			// Encodage explicite en UTF-8 si nécessaire
			if (!mb_detect_encoding($response, 'UTF-8', true)) {
				$response = utf8_encode($response);
			}

			// Si tout est OK, construire la réponse
			$parameters['status'] = 'success';
			$parameters['message'] = 'File retrieved successfully';
			$parameters['data'] = $response; // Encodage Base64 pour éviter les problèmes d'encodage JSON

			return new JsonResponse(['parameters' => $parameters, 'status' => 200]); // 200 OK
		} catch (\Exception $e) {
			$parameters['message'] = 'Exception: ' . $e->getMessage();
			return new JsonResponse(['parameters' => $parameters, 'status' => 500]); // 500 Internal Server Error
		}
	}
}