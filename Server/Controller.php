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

        $pegs->checkAnswer([1, 2, 3, 4]);

        print_r($pegs);
    }
}
