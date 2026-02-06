
$ch = curl_init('https://ads-api-new.vercel.app/api/send'); // Use HTTPS

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'ADS-api-key: ' . getenv('ADS_API_KEY') // fixed getenv usage
    ],
    CURLOPT_POSTFIELDS => json_encode([
        "email" => $email,
        "subject" => $subject,
        "htmlContent" => $htmlContent
    ]),
    CURLOPT_TIMEOUT => 15
]);

$response = curl_exec($ch);
$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE); // ✅ define $httpStatus
$error = curl_error($ch); // ✅ define $error

curl_close($ch);

// ✅ Response Handling
if ($httpStatus == 200) {
    $_SESSION['otp_sent'] = true; // ✅ Mark OTP sent
    echo "✅ Verification code sent successfully to $email.";
} else {
    $_SESSION['otp_sent'] = false; // ❌ Mark OTP not sent
    echo "❌ Failed to send verification email. Please try again later.<br>";
    echo "HTTP Status: $httpStatus<br>";
    echo "Error: " . htmlspecialchars($response ?: $error);
}
