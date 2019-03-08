<?php

class Pegs
{
    private $pegColors = [];

    public $score = [];

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
    /**
     * Sjekke svaret fra bruker
     * @param  array  $answer svaret
     * @return array         scorePinsColors
     */
    public function checkAnswer($answer = [])
    {
        $fasit = $this->pegColors;
        // correct color in correct place
        foreach ($fasit as $key => $value) {
            if ($answer[$key] == $value) {
                $this->score[] = 2;

                unset($fasit[$key]);
                unset($answer[$key]);
            }
        }

        foreach ($answer as $key => $value) {
            if (array_search($value, $fasit)) {
                $this->score[] = 1;
                unset($fasit[$key]);
            }
        }
    }
}
