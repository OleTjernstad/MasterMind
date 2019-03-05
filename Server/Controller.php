<?php

class Controller
{
    public function App()
    {
        if (isset($_SESSION['fasit'])) {
        } else {
            Pegs::NewPegColors();
        }
    }
}
