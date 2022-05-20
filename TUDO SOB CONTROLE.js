class Tudosobcontrole{
constructor (largura, altura){
this.x= 200;
this.y= 200;
this.larg= largura;
this.altu= altura;
}
chaveDeAberturaParaUmNovoMundo(){
rect(this.x, this.y, this.larg, this.altu);
}
}