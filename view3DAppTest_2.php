<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Test View</title>
    <style>
            h1 {
                color: red;
                margin-left: 5px;
            }
            
            h2{
                color:blue;
                margin:5px;
            }

            p{
                color: green;
                margin-left: 5px;
            }

            .imgBox {
                padding = 0.25rem;
                margin-top:5px;
                margin-bottom: 5px;
                border: 1px solid #dee2e6;
                border-radius: 0.25rem;
                width: 300px;
            }

            .box{
                border: 1px solid rgba(0,0,0, 1.0);
                padding: 5px;
                float: left;
                margin: 5px;
                height: 280px;
            }
    </style>
</head>

<body>
    <h1>Second 3D App Test View</h1>
    <p>If you are seeing the test Model 3D Image Data below, then your basic MVC framework is working</p>
    <div class="box">
        <h2><?php echo $model_1 ?></h2>
        <img class="imgBox" src='../images/model/<?php echo $image3D_1?><div class=.png'>
    </div>
    <div class="box">
        <h2><?php echo $model_2 ?></h2>
        <img class="imgBox" src='../images/model/<?php echo $image3D_2?><div class=.png'>
    </div>
    <div class="box">
        <h2><?php echo $model_3 ?></h2>
        <img class="imgBox" src='../images/model/<?php echo $image3D_3?><div class=.png'>
    </div>
    <div class="box">
        <h2><?php echo $model_4 ?></h2>
        <img class="imgBox" src='../images/model/<?php echo $image3D_4?><div class=.png'>
    </div>
    <div class="box">
        <h2><?php echo $model_5 ?></h2>
        <img class="imgBox" src='../images/model/<?php echo $image3D_5?><div class=.png'>
    </div>
    <div class="box">
        <h2><?php echo $model_6 ?></h2>
        <img class="imgBox" src='../images/model/<?php echo $image3D_6?><div class=.png'>
    </div>
        
</body>


