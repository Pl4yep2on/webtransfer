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
use OCP\AppFramework\Http\JsonResponse;

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
    #[OpenAPI(OpenAPI::SCOPE_OPERATION, tags: ['post'])]
    #[FrontpageRoute(verb: 'POST', url: '/post')]
	public function post(): JsonResponse {
		$request = $this->request;
		$uploadedFile = $request->getUploadedFile('zipfile');
	
		if (!$uploadedFile) {
			return new JsonResponse(['error' => 'No file uploaded'], 400);
		}
	
		if ($uploadedFile->getClientMimeType() !== 'application/zip') {
			return new JsonResponse(['error' => 'Invalid file type, only ZIP allowed'], 400);
		}
	
		// Traitement du fichier si nécessaire
		return new JsonResponse(['message' => 'File uploaded successfully'], 200);
	}

}
