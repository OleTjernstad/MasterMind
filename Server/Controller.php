<?php

class Controller
{
    public function App()
    {
        // header("Access-Control-Allow-Origin: *");
        // header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        // header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        header('Content-Type: application/json');

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' =>'successfull request']);
            die();
        }

        if (isset($_GET['reset'])) {
            unset($_SESSION['pegs']);
            session_destroy();
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' =>'colors reset']);
            die();
        }
        $response = json_decode(file_get_contents('php://input'), true);


        if (isset($_SESSION['pegs'])) {
            $pegs = $_SESSION['pegs'];
        } else {
            $pegs = new Pegs();
            $_SESSION['pegs'] = $pegs;
            $pegs->NewPegColors();
        }

        $pegs->checkAnswer($response['answer']);

        if ($pegs->ifAllFourIsCorrect()) {
            unset($_SESSION['pegs']);
            session_destroy();
        }

        echo json_encode($pegs);
        die();
    }
}
