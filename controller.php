<?php

class Controller{
    public  $load;
    public $model;

    function __construct()
    {
        $this->load = new Load();
        $this-> model = new Model();

        $this ->home();
    }

    function home(){
        $data = $this->model->model3D_info();
        $this->load->view('view3DAppTest_2', $data);
    }

}
?>