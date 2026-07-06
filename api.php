<?php
// Suppress all errors/warnings to prevent invalidating JSON output
error_reporting(0);

// Handle CORS for local development
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Avatar-Key');

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$url = 'https://apihut.in/api/country/phone-codes';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'X-Avatar-Key: avatarhubadmin'
));

// Disable SSL verification to prevent issues on local dev environments
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);

if ($response === false || $httpcode >= 400) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to fetch data from remote API',
        'details' => $error,
        'http_code' => $httpcode
    ]);
} else {
    $decoded = json_decode($response, true);
    // Since api.js expects an array to run .forEach(), we return the 'data' array
    if (isset($decoded['data']) && is_array($decoded['data'])) {
        echo json_encode($decoded['data']);
    } else {
        // Fallback to echoing the raw response if structure differs
        echo $response;
    }
}
?>
