<?php

use PHPMailer\PHPMailer\PHPMailer;
// require __DIR__ . '/vendor/autoload.php';
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$errors = [];
$errorMessage = '';

$email = $_POST['email'];
$message = $_POST['message'];
$name = $_POST['name'];
$topic = $_POST['topic'];

if (empty($email)) {
    $errors[] = 'Email is empty';
} else if (!filter_var($email, FILTER_VALIDATE_REGEXP, array(
    "options" => array("regexp"=>'/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
))) {
    $errors[] = 'Email is invalid';
}

if (empty($message)) {
    $errors[] = 'Message is empty';
}

if (empty($name)) {
    $errors[] = 'Name is empty';
}

if (!empty($errors)) {
    $allErrors = join('<br/>', $errors);
    $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    echo $errorMessage;
} else {
    $mail = new PHPMailer();
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->CharSet = "UTF-8";
    $mail->PluginDir = "phpmailer/";
    $mail->From = $email;
    $mail->FromName = "Dawid Mieszczak CV Site form";
    $mail->Host = "smtp.gmail.com";
    $mail->Mailer = "smtp";
    $mail->Username = "-"; //username
    $mail->Password = "-"; //password    
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl'; 
    $mail->Port = 465; //port poczty
    $mail->SetLanguage("pl", "phpmailer/language/");
    $mail->Subject = "CVSite message"; //temat wiadomości
    $mail->Body = 'Wiadomość od : ' . $name . ' ' . $email . ',
    Temat: ' . $topic . ',
    Treść wiadomości: ' . $message . '.'; //wiadomość
    $mail->AddAddress("dmiecvsite@gmail.com", "Dawid Mieszczak"); //do kogo ma być wysłana
    $mail->AddReplyTo($email, 'Reply to name');

    if($mail->send()){
        // header('Location: thank-you.html'); // redirect to 'thank you' page
        echo 'ok'; //odpowiedź
    } else {
        $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
        echo $errorMessage;
    }

    $mail->ClearAddresses();
    $mail->ClearAttachments();
}
?>