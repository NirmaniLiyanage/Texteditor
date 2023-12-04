document.addEventListener("DOMContentLoaded", function () {
    var contentDiv = document.getElementById("output");
  
    function executeCommand(command, value = null) {
        document.execCommand(command, false, value);
    }
  
  function changeTextColor() {
      var colorPicker = document.createElement("input");
      colorPicker.type = "color";
    
      colorPicker.click();
    
      colorPicker.addEventListener("input", function () {
        var selectedColor = colorPicker.value;
        document.querySelector('#colorButton .selected-color').style.backgroundColor = selectedColor;
        executeCommand("foreColor", selectedColor);
      });
    }
    
  
    document.querySelector('button[data-cmd="bold"]').addEventListener("click", function () {
        executeCommand("bold");
    });
  
    document.querySelector('button[data-cmd="underline"]').addEventListener("click", function () {
        executeCommand("underline");
    });
  
    document.querySelector('button[data-cmd="italic"]').addEventListener("click", function () {
        executeCommand("italic");
    });
  
    document.querySelector('#colorButton').addEventListener("click", function () {
        changeTextColor();
    });
  
    document.getElementById('colorButton').addEventListener('click', function() {
      var selectedColor = getSelectedColor();
    
   document.querySelector('.selected-color').style.backgroundColor = selectedColor;
    });
    
  function getSelectedColor() {
      return 'black';
    }
    
  
    document.querySelector('button[data-cmd="justifyLeft"]').addEventListener("click", function () {
        executeCommand("justifyLeft");
    });
  
    document.querySelector('button[data-cmd="justifyCenter"]').addEventListener("click", function () {
        executeCommand("justifyCenter");
    });
  
    document.querySelector('button[data-cmd="justifyRight"]').addEventListener("click", function () {
        executeCommand("justifyRight");
    });
  
    document.querySelector('button[data-cmd="justifyFull"]').addEventListener("click", function () {
        executeCommand("justifyFull");
    });
  
    document.querySelector('button[data-cmd="undo"]').addEventListener("click", function () {
        executeCommand("undo");
    });
  
    document.querySelector('button[data-cmd="redo"]').addEventListener("click", function () {
        executeCommand("redo");
    });
  });