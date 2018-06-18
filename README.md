# react-video-app

Video-app feito utilizando a API da Google, contém dois containeirs(stateful components) e três components(stateless components).

O componente pai App, passa via props para os componentes filho os dados necessários. App passa para SearchBar a função videoSearch, SearchBar contém o termo pesquisado e chama a função videoSearch passando o termo como parâmetro. A função videoSearch chama YTSearch, a função que faz a comunicação com a API. YTSearch tem como parâmetros a API key, o termo pesquisado, a quantidade de vídeos que deseja como resultado e uma função callback que define o novo estado com os vídeos do termo pesquisado e define o vídeo padrão selecionado como sendo sempre o primeiro. Então o componente Video renderiza o vídeo selecionado utilizando o dados que recebeu como props, VideoList renderiza uma lista de vídeos utilizando o método map() para passar uma função callback a cada item do array de vídeos que recebeu como props de App e chamando VideoListItem para cada um deles. VideoListItem renderiza a thumbnail e o título de cada vídeo individual, que recebe como props de VideoList. Também recebe como props uma função para selecionar o vídeo ao ser clicado.

#Para instar a aplicação:

Link de download: https://github.com/vtrpza/video-app

npm install

npm start
