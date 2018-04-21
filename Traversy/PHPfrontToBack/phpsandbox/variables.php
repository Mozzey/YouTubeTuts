<?php

  #VARIABLES
  /*
    - Prefix with $
    - Start with a letter or underscore
    - Can only contain letters, numbers and underscores
    - Case sensitive

  */

  # DATA TYPES
  /*
    String
    Integers
    float
    Booleans
    Arrays
    Objects
    NULL
    Resource
  */

  $output = 'Hello World!';

  $num1 = 4;
  $num2 = 10;
  $sum = $num1 + $num2;

  $string1 = 'Hello';
  $string2 = 'World';
  $greeting = $string1 . ' ' . $string2;
  $greeting2 = "$string1 $string2";

  $string3 = 'They\'re Here'; # or "They're Here"

  $float1 = 4.4;
  $bool1 = true;

  define('GREETING', 'Hello Everyone');

  echo GREETING;
?>