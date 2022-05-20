var quadroTSC

function setup() 
{
createCanvas(400, 400);
quadroTSC= new Tudosobcontrole(100, 150);
}

function draw() 
{
background(220);
quadroTSC.chaveDeAberturaParaUmNovoMundo();
}

