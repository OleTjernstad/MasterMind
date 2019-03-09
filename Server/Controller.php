<?php

class Controller
{
    public function App()
    {
        header('Content-Type: application/json');

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' =>'successfull request']);
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

        echo json_encode($pegs);
        die();
    }
}
