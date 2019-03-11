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

    public function test()
    {
        // FETCH IMAGE & WRITE TEXT
        $img = imagecreatefromjpeg('badge.jpg');
        $white = imagecolorallocate($img, 0, 0, 0);

        $font = "C:\www\master-mind\Server\\28-Days-Later.ttf";
        imagettftext($img, 68, 0, 260, 230, $white, $font, 15);
        imagettftext($img, 48, 0, 760, 305, $white, $font, 32);

        // OUTPUT IMAGE
        // header('Content-type: image/jpeg');
        // imagejpeg($img);
        // imagedestroy($jpg_image);

        // OR SAVE TO A FILE
        // THE LAST PARAMETER IS THE QUALITY FROM 0 to 100
        imagejpeg($img, "test.jpg", 100);
        die();
    }
}
