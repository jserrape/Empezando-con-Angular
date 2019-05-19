var app = angular.module("MyFirstApp",[])
app.controller("FirstController", function($scope){
  $scope.nombre = "JC";
  $scope.comentarios=[
    {
      comentario: "Soy el comentario 1",
      usuario: "Usuario 1"
    },
    {
      comentario: "Soy el comentario 2",
      usuario: "Usuario 2"
    },
    {
      comentario: "Soy el comentario 3",
      usuario: "Usuario 3"
    },
    {
      comentario: "Soy el comentario 4",
      usuario: "Usuario 4"
    }
  ];
});
