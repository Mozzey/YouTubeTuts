<?php
  # Array - Variable that holds multiple values
  /* 
    - Indexed 
    - Associative
    - Multi-Dimensional
  */

  // Indexed
  $people = array('Kevin', 'Jeremy', 'Sara');
  $ids = array(23, 55, 12);
  $cars = ['Honda', 'Toyota', 'Ford'];
  $cars[3] = 'Chevy';
  $cars[] = 'BMW';

  # Array function
  // echo count($cars);

  // print_r($cars);
  // var_dump($cars); #shows info about indexes

  # ASSOCIATIVE ARRAYS - always to create an array with keys and values

  $people = array('Brad' => 35, 'Jose' => 32, 'William' => 37);
  $ids = [22 => 'Brad', 44 => 'Jose', 63 => 'William'];
  // echo $people['Brad'];
  // echo $ids[22];
  $people['Jill'] = 42;
  // echo $people['Jill'];
  // print_r($people);
  // var_dump($people);

  # MULTI DIMENSIONAL
  $cars = array(
    array('Honda', 20, 10),
    array('Toyota', 30, 20),
    array('Ford', 23, 12),
  );

  echo $cars[1][2];

?>