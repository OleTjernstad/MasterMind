<?php

class Pegs
{
    private $pegColors = [];
    public function NewPegColors()
    {
        for ($i=1; $i < 5 ; $i++) {
            $key = 'peg' . $i;
            $this->pegColors[$key] = $this->radomColor();
        }

        return $this->pegColors;
    }
    public function test()
    {
        return $this->pegColors;
    }

    private function radomColor()
    {
        return rand(1, 6);
    }
}
