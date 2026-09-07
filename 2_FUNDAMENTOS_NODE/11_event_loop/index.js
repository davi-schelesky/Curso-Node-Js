// Event loop - leitura do código de forma sequencial (procedural)

function a(){
    console.log("Executando a()");
}

function b(){
    console.log("Executando b()");
}

function c(){
    console.log("Executando c()");
    a();
    b();
}

c();