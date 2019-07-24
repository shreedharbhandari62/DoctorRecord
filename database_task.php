<?php
class DATABASE_TASK{

    public function createTable(){
        $SERVER=SERVER;
        $DBNAME=DBNAME;
        try {
            $conn = new PDO("mysql:host=$SERVER;dbname=$DBNAME", DBUSER, DBPASS);
   
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    

            $sql = "CREATE TABLE IF NOT EXISTS Doctors(
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            email VARCHAR(50),
            education VARCHAR(1000),
            experience VARCHAR(1000),
            image VARCHAR(1000),
            about VARCHAR(1000),
            reg_date TIMESTAMP
            )";
            $conn->exec($sql);
            echo "Table Created Successfully"; 

        }catch(PDOException $e){
            echo  $e->getMessage();
    
        }
        $conn=null;
    }
    public function addDataToTable($obj){
        $SERVER=SERVER;
        $DBNAME=DBNAME;
        try {
            
            $conn = new PDO("mysql:host=$SERVER;dbname=$DBNAME", DBUSER, DBPASS);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "INSERT INTO doctors(name, email, education, experience, image, about)
            VALUES($obj)";
            $conn->exec($sql);

            return $obj;
        }catch(PDOException $e){
            echo  $e->getMessage();
    
        }
        $conn=null;
    }
    public function getData(){
        $SERVER=SERVER;
        $DBNAME=DBNAME;
        try {
            
            $conn = new PDO("mysql:host=$SERVER;dbname=$DBNAME", DBUSER, DBPASS);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $conn->prepare("SELECT * FROM doctors"); 
            $stmt->execute();

    // set the resulting array to associative
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $result = $stmt->fetchAll();
            
    
 

            return  $result;
        }catch(PDOException $e){
            echo  $e->getMessage();
    
        }
        $conn=null;
    }

}