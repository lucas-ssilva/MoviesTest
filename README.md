Teste LinkApi 

<b>Angular CLI: 9.1.11</b>

<b> Rota padrão:</b> /listaDeFilmes 

<b>Page:</b>  lista-de-filmes  <b>Rota:</b>'/listaDeFilmes'

 • <b>Variáveis</b>
 
  •  <b>Listas</b>
  
   - <u>movies</u> - lista do tipo MovieModel que será preenchida com os dados da requisição já mapeados no formato MovielModel.
   - <u>filteredList</u>  - lista que será preenchida com os objetos tipo MovieModel que foram filtrados pelo usuário. 
   - <u>favorites</u> - lista que será preenchida com todos os objetos tipo MovieModel que foram marcados como favoritos pelo usuário. 
   - <u>listNames</u> - lista de strings com os nomes dos filmes, é usada para o campo autocomplete de busca funcionar(precisa de refatoração para pegar os nomes do response)
   - <u>filteredOptions</u> - lista do tipo Observable(string[]) usada no campo autocomplete de busca.
   
  • <b>demais tipos</b>
  
   - movieSelected:string - variavel que irá armazenar o nome do filme que foi digitado na busca e fazer a comparação com a lista.
   - filtered:boolean variavel usda para determinar se devo mostrar a lista completa de filmes ou só o que foi filtrado. 
   - listaVazia: boolean - variavel usada para determinar se a pesquisa ou a lsita de favoritos está vazia e mostra tela correspondente.
   - onlyFavorites: boolean - variavel usada para determinar se devo mostrar a lista de favoritos. 

  •  <b>Métodos </b>
   - favoritar - método que marca o filme como favorito tanto na lista local do page quanto na lista do serviço.
   - desfavoritar - método que desmarca o filme como favorito tanto na lista local do page quanto na lista do serviço.
   - buscar - método que filtra o nome inserido pelo usuário no campo de busca e traz o resultado.
   - allFavorites - método que faz o filtro somente pelos objetos marcados como favoritos.
   - allMovies - método que faz o filtro por todos os filmes.
   - userScreen - método que leva o usuario para o page perfil. 

<b>Page:</b> detalhes-do-filme <b>Rota</b>: 'listaDeFilmes/detalhes/:id'

 • <b>Variáveis</b>
 
  - movieSelected - variável do tipo MovieModel que irá receber os dados do filme que foi clicado pelo usuario no page lista-de-filmes
  - favorite:boolean - variável que irá determinar se o filme é favorito ou não.
  - id:number - variável que irá receber o id do objeto tipo MovieModel que foi clicado pelo usuario, será interceptado no Oninit
  - index:number - Variável que irá receber o index do objeto tipo MovieModel que foi selecionado na lista que fica no MovieService para que caso exista alteração ele possa ser atualizado entre as telas.

 • <b>Métodos</b>
 
  - favoritar - método que marca o filme como favorito tanto na variável local do page quanto na lista do serviço.
  - desfavoritar - método que desmarca o filme como favorito tanto na variável local do page quanto na lista do serviço.
  - back - método que irá fazer o usuario voltar para o page lista-de-filmes
  - loadMovie - método que é rodado no onInit do page e responsavel por pegar o objeto tipo MovieModel da lista que ficá no serviço com base no ID que foi interceptado quando o usuário clicou no filme, também responsavel por recuperar se o filme clicado era ou não favorito e setar isso na tela.


<b>Page:</b> perfil <b>Rota:</b> 'user'

 • <b>Variáveis </b>
 
  - genres - Lista do tipo string que tem os generos que serão apresentados ao usuário. 
  - name:string - variavel que irá armazenar o nome digitado pelo usuario no input. 
  - age:number - variavel que irá armazenar a idade digitada pelo usuario no input. 
  - favoriteMovie:string - variavel que irá armazenar a o filme favorito digitada pelo usuario no input. 
  - favoriteGenre:string - variavel que irá armazenar a o genero favorito selecionado pelo usuario no mat-select. 
  
 • <b>Métodos</b>
 
  - save - método respónsavel por pegar os dados digitados pelo usuário e salvar na lista que fica no userService.
  - cancel - método que limpa os campos e retorna ao page lista-de-filmes sem salvar os dados.
  - loadData - método executado no onInit do page para recuperar os dados salvos anteriormente pelo usuario da lista que fica no userService.

 
<b>Services</b>

 • <b>MoviesService</b> - responsavel pela comunicação e armazenamento de informações entre os page relacionados a filmes
 
  - url:string - string que armazena a url que será feita a requisição.
  - movies - lista de MoviesModel que irá armazenar os dados da requisção após eles serem mapeados e convertidos para MovieModel.
  - nextID:number - váriavel responsável por armazenar o ID de cada um dos objetos do tipo MovieModel dentro da lista movies
  - updatedMovie: variável responsavel por armazenar o objeto tipo MovieModel caso ele tenha sido alterado na tela de detalhes.

 • <b>Métodos</b>
  - getMovies - método responsável por fazer a requisição tipo GET na variável url, será executado no onInit para carregar a lista movies
  - getData - método responsavel por passar a lista tipo movies para quem fizer a requisição.
  
  • <b>UserService</b>
  
   • <b>Variáveis </b>
   
   - users - lista do tipo UserModel que irá armazenar os dados que foram salvos na page de perfil.
 
