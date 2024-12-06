
fetch('https://<seu-usuario>.github.io/<nome-do-repositorio>/dados_das_escolas.json')

    .then(response => response.json())  
    .then(data => {
        const tabela = document.getElementById('tabela-escolas');
        data.forEach(escola => {
            // Cria uma nova linha para cada escola
            const linha = document.createElement('tr');

            linha.innerHTML = `
                <td>${escola.cod_rh}</td>
                <td>${escola.cod}</td>
                <td>${escola.escola}</td>
                <td>${escola.inep}</td>
                <td>${escola.endereco}</td>
                <td>${escola.cep}</td>
                <td>${escola.telefone}</td>
                <td>${escola.sed_ue}</td>
                <td>${escola.direcao}</td>
                <td>${escola.assistente_direcao}</td>
                <td>${escola.assistente_coordenacao}</td>
                <td>${escola.secretario}</td>
            `;
            
            // Adiciona a linha na tabela
            tabela.appendChild(linha);
        });
    })
    .catch(error => {
        console.error("Erro ao carregar o arquivo JSON:", error);
    });
