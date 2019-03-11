<?php

class Controller
{
    public function App()
    {
        $response = json_decode(file_get_contents('php://input'), true);


        if (isset($_SESSION['pegs'])) {
            $pegs = $_SESSION['pegs'];
        } else {
            $pegs = new Pegs();
            $_SESSION['pegs'] = $pegs;
            $pegs->NewPegColors();
        }

        $pegs->checkAnswer($response['answer']);
        $pegs->lapNumber();

        if ($pegs->ifAllFourIsCorrect()) {
            unset($_SESSION['pegs']);
            session_destroy();
        }

        echo json_encode($pegs);
        die();
    }

    public function options()
    {
        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' =>'successfull request']);
        die();
    }

    public function reset()
    {
        unset($_SESSION['pegs']);
        session_destroy();
        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' =>'colors reset']);
        die();
    }

    public function score()
    {
        Score::register();
        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' =>'tap registert']);
        die();
    }
}
