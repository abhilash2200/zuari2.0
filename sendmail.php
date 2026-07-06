<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data mapped to data-access-request.html
    $name = isset($_POST['name']) ? strip_tags($_POST['name']) : '';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $mobile = isset($_POST['mobile']) ? strip_tags($_POST['mobile']) : '';
    $user_subject = isset($_POST['subject']) ? strip_tags($_POST['subject']) : '';
    $requestor_type = isset($_POST['requestor_type']) ? strip_tags($_POST['requestor_type']) : '';
    
    $request_actions = '';
    if (isset($_POST['request_actions']) && is_array($_POST['request_actions'])) {
        $actions = array_map('strip_tags', $_POST['request_actions']);
        $request_actions = implode(', ', $actions);
    }
    
    $message = isset($_POST['message']) ? strip_tags($_POST['message']) : '';
    $confirmation = isset($_POST['confirmation']) ? 'Confirmed' : 'Not Confirmed';

    // Recipient email
    $to = "website@sskinfinity.com"; // Replace with your domain email
    $subject = "Data Access Request: " . ($user_subject ? $user_subject : "New Submission");

    // Email body
    $body = "
    <html>
    <head>
        <style>
        table {
            border-collapse: collapse;
            width: 100%;
            font-family: Arial, sans-serif;
        }
        th, td {
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f5f5f5;
            color: #333;
        }
        </style>
    </head>
    <body>
        <h2 style='font-family: Arial, sans-serif; color: #222;'>New Form Submission</h2>
        <table>
        <tr>
            <th>Field</th>
            <th>Details</th>
        </tr>
        <tr>
            <td><strong>Name</strong></td>
            <td>$name</td>
        </tr>
        <tr>
            <td><strong>Email</strong></td>
            <td>$email</td>
        </tr>
        <tr>
            <td><strong>Mobile No.</strong></td>
            <td>$mobile</td>
        </tr>
        <tr>
            <td><strong>Subject</strong></td>
            <td>$user_subject</td>
        </tr>
        <tr>
            <td><strong>Requestor Type</strong></td>
            <td>$requestor_type</td>
        </tr>
        <tr>
            <td><strong>Requested Actions</strong></td>
            <td>$request_actions</td>
        </tr>
        <tr>
            <td><strong>Message</strong></td>
            <td>$message</td>
        </tr>
        <tr>
            <td><strong>Confirmation</strong></td>
            <td>$confirmation</td>
        </tr>
        </table>
    </body>
    </html>
    ";

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtpout.secureserver.net';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'website@sskinfinity.com';
        $mail->Password   = 'Zuari@2026';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
        $mail->Port       = 465;

        // Recipients
        $mail->setFrom('website@sskinfinity.com', 'SSK Infinity');
        $mail->addAddress('sskinfinityventuresllp25@gmail.com');
        $mail->addCC('ab.digitalwolf@gmail.com');
        
        if ($email && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mail->addReplyTo($email, $name ? $name : 'User');
        }

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        header("Location: data-access-thank-you.html?name=" . urlencode($name));
        exit();
    } catch (Exception $e) {
        echo "Failed to send message. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
