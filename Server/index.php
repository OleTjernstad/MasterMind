<?php

/**
 * Front controller
 *
 * PHP version 7.0
 */

/**
 * Composer
 */
require dirname(__FILE__) . '/Core/Load.php';


/**
 * Error and Exception handling
 */
error_reporting(E_ALL);
set_error_handler('Core\Error::errorHandler');
set_exception_handler('Core\Error::exceptionHandler');


/**
 * Sessions
 */
session_start();

$app = new Controller();

// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    $app->options();
}

if (isset($_GET['reset'])) {
    $app->reset();
}

if (isset($_GET['score'])) {
    if ($_GET['score'] == 'lose') {
        $app->lose();
    }
}

$app->App();
