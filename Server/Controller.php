<?php

class Controller
{
    public function App()
    {
        if (isset($_SESSION['pegs'])) {
            $pegs = $_SESSION['pegs'];
        } else {
            $pegs = new Pegs();
            $_SESSION['pegs'] = $pegs;
            $pegs->NewPegColors();
        }

        $pegs->checkAnswer(['peg1' =>5, 'peg2' => 6, 'peg3' => 2, 'peg4' => 2]);

        print_r($pegs);
    }
}
