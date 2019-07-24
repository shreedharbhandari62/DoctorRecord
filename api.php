<?php

require_once ('./call.php');
header("Content-Type:application/json");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$methodName=($_SERVER['PATH_INFO']);
$methodType=$_SERVER['REQUEST_METHOD'];
if($methodName==='/adddoctors' ){
    $data = json_decode(file_get_contents("php://input"));
    $obj="'$data->name','$data->email','$data->education','$data->experience','$data->image','$data->about'";
    
    sendResponse(http_response_code(201), 'sucess', $NC_obj->addDataToTable($obj));
}
elseif ($methodName==='/doctors' ){
   sendResponse1(http_response_code(201), 'sucess', $NC_obj->getData());
}
else{
    sendResponse(http_response_code(404), 'Not found', 'Not found');
}
function sendResponse($status,$status_message,$data)
{


    $response['status']=$status;
    $response['status_message']=$status_message;
    $response['data']=$data;

    $json_response = json_encode($response);
    echo ($json_response);
}
function sendResponse1($status,$status_message,$data)
{


    $response['status']=$status;
    $response['status_message']=$status_message;
    $response['data']=$data;

    $json_response = json_encode($response['data']);
    echo ($json_response);
}




?>