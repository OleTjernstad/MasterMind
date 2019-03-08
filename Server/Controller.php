<?php

class Controller
{
    public function App()
    {
        $req_dump = print_r(json_decode(file_get_contents('php://input'), true), true);
        $fp = fopen('request.log', 'a');
        fwrite($fp, $req_dump);
        fclose($fp);


        if (isset($_SESSION['pegs'])) {
            $pegs = $_SESSION['pegs'];
        } else {
            $pegs = new Pegs();
            $_SESSION['pegs'] = $pegs;
            $pegs->NewPegColors();
        }

        $pegs->checkAnswer(['peg1' =>5, 'peg2' => 6, 'peg3' => 2, 'peg4' => 2]);

        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        header('Content-Type: application/json');
        echo json_encode($pegs);
        die();
    }
}
