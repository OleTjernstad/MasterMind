<?php

class Score
{
    public static function register($status)
    {
        $sql = 'INSERT INTO stilling (status)
                        VALUES (:status)';

        $db = self::getDB();
        $stmt = $db->prepare($sql);

        $stmt->bindValue(':status', $status, PDO::PARAM_STR);

        if ($stmt->execute()) {
            self::updateImage();
        }
    }

    protected static function count($status)
    {
        $sql = 'SELECT COUNT(status) as status
                FROM stilling
                WHERE status=:status;';

        $db = self::getDB();
        $stmt = $db->prepare($sql);

        $stmt->bindValue(':status', $status, PDO::PARAM_STR);

        $stmt->execute();
        return $stmt->fetch();
    }

    public static function updateImage()
    {
        $lose = self::count('lose');
        $win = self::count('win');
        // FETCH IMAGE & WRITE TEXT
        $img = imagecreatefromjpeg('/home/otj/domains/olet.no/public_html/GC82P3Y/api/badge.jpg');
        $white = imagecolorallocate($img, 0, 0, 0);

        $font = "/home/otj/domains/olet.no/public_html/GC82P3Y/api/28-Days-Later.ttf";
        imagettftext($img, 68, 0, 260, 230, $white, $font, $win['status']);
        imagettftext($img, 48, 0, 760, 305, $white, $font, $lose['status']);

        // OUTPUT IMAGE
        // header('Content-type: image/jpeg');
        // imagejpeg($img);
        // imagedestroy($jpg_image);

        // OR SAVE TO A FILE
        // THE LAST PARAMETER IS THE QUALITY FROM 0 to 100
        imagejpeg($img, "/home/otj/domains/olet.no/public_html/GC82P3Y/mastermind.jpg", 90);
        imagedestroy($img);
    }

    /**
     * Get the PDO database connection
     *
     * @return mixed
     */
    protected static function getDB()
    {
        static $db = null;

        if ($db === null) {
            $dsn = 'mysql:host=' . 'localhost' . ';dbname=' . 'otj_mastermind' . ';charset=utf8';
            $db = new PDO($dsn, 'otj_mastermind', 'idJtSOKl0dSSTy');

            // Throw an Exception when an error occurs
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        return $db;
    }
}
