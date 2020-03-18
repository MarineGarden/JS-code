function appendCanvas(id){
  var canvas = document.createElement("CANVAS");
  canvas.setAttribute("id", id);
  document.body.appendChild(canvas);
  return canvas;
}

function setCanvasSize(canvas,width,height){
  canvas.style.width = width;
  canvas.style.height = height;
  return canvas;
}

function setCanvasBackground(canvas,color){
  canvas.style.backgroundColor = color;
  return canvas;
}