import 'package:flutter/material.dart';
import 'package:master_app/main.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: Splashscreen(title: 'Master App'),   // <--- Directly open the page you want to test
  ));
}
