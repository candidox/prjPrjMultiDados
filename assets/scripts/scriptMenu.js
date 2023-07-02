
var arrayCadastro = [];
var subMenuCadastro =[]

arrayCadastro[0] = `<i class="fa fa-file-text"></i>
					    <span class="title">
					    	Cadastro
					    </span>
					    <span class="arrow ">
					</span>
                    `;

arrayCadastro[1] = `<li>
						<a href="#">Cliente</a>
					</li>`;

arrayCadastro[2] = `<li>
						<a href="#">Fornecedor</a>
					</li>`;

arrayCadastro[3] = `<li>
						<a href="#">Produtos</a>
					</li>`;

arrayCadastro[4] = `<li>
						<a href="#">Perfil de acesso</a>
					</li>`;

arrayCadastro[5] = `<li>
						<a href="#">Usuário</a>
					</li>`;

var cadastro = document.getElementById("menuCadastro");
var subCadastro = document.getElementById("subMenuCadastro");

cadastro.innerHTML += `${arrayCadastro[0]}`;
var x = 1;
for(x;x<arrayCadastro.length;x++){
	subCadastro.innerHTML += `${arrayCadastro[x]}`;
}


var arrayRelatorio = [];
var subMenuRelatorio = [];

arrayRelatorio[0] = `<i class="fa fa-bar-chart-o"></i>
							<span class="title">
								Relatório
							</span>
							<span class="arrow ">
					</span>`;
arrayRelatorio[1] = `<li>
						<a href="#">Cliente</a>
					</li>`;
arrayRelatorio[2] = `<li>
						<a href="#">Faturamento</a>
					</li>`;
arrayRelatorio[3] = `<li>
						<a href="#">Produtos</a>
					</li>`;

var relatorio = document.getElementById("menuRelatorio");
var subRelatorio = document.getElementById("subMenuRelatorio");

relatorio.innerHTML += `${arrayRelatorio[0]}`;
var y = 1;

for(y;y<arrayRelatorio.length;y++){
	subRelatorio.innerHTML += `${arrayRelatorio[y]}`;
}


