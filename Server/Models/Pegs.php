<?php

class Pegs
{
    private $pegColors = [];

    public $score = [];

    public $completed = false;

    private $numberCorrect = 0;

    private $kordinater = 'N60° 18.429 E11° 41.657';

    public $lapNumber = 0;

    public function NewPegColors()
    {
        for ($i=1; $i < 5 ; $i++) {
            $key = 'peg' . $i;
            $this->pegColors[$key] = $this->radomColor();
        }

        return $this->pegColors;
    }
    public function lapNumber()
    {
        $this->lapNumber++;
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
        $this->score = [];
        $this->numberCorrect = 0;
        $fasit = $this->pegColors;
        // correct color in correct place
        foreach ($fasit as $key => $value) {
            if ($answer[$key] == $value) {
                $this->score[] = 'correct';
                $this->numberCorrect++;

                unset($fasit[$key]);
                unset($answer[$key]);
            }
        }

        foreach ($answer as $key => $value) {
            $placeKey = array_search($value, $fasit);
            if ($placeKey) {
                $this->score[] = 'correctColor';
                unset($fasit[$placeKey]);
            }
        }
    }

    public function ifAllFourIsCorrect()
    {
        if ($this->numberCorrect == 4) {
            $this->completed = true;
            $this->FinaleKoordinater = $this->kordinater;

            return true;
        }
        return false;
    }
}
