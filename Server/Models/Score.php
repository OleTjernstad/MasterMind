<?php

class Score
{
    public function register()
    {
    }

    public function updateImage()
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
        imagejpeg($img, "mastermind.jpg", 100);
    }
}
