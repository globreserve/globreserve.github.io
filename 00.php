<?php
/*
$url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
$parameters = [
  'symbol' => 'GLOB',
  'convert' => 'USD'
];
*/

$headers = [
  'Accepts: application/json',
  'X-CMC_PRO_API_KEY: 073b86ec-f9c8-4ef5-8d18-70f82dddfd68'
];
//$qs = http_build_query($parameters); // query string encode the parameters
//$request = "{$url}?{$qs}"; // create the request URL

$request = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=GLOB&convert=USD&CMC_PRO_API_KEY=073b86ec-f9c8-4ef5-8d18-70f82dddfd68";

$curl = curl_init(); // Get cURL resource
// Set cURL options
curl_setopt_array($curl, array(
  CURLOPT_URL => $request,            // set the request URL
  CURLOPT_HTTPHEADER => $headers,     // set the headers 
  CURLOPT_RETURNTRANSFER => 1         // ask for raw response instead of bool
));

$response = curl_exec($curl); // Send the request, save the response
print_r(json_decode($response)); // print json decoded response
curl_close($curl); // Close request
?>