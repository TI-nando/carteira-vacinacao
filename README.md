# 👶 Carteira de Vacinação Digital — Saúde Infantil

Esta é uma solução digital moderna, responsiva e focada na experiência do usuário (UX), desenvolvida para substituir o uso de cadernetas físicas de vacinação infantil. O projeto foi projetado especificamente para atender de forma clara e objetiva a todos os requisitos arquiteturais e cenários práticos exigidos no processo de avaliação.

---

## 🚀 Demonstração em Tempo Real (Deploy)

A aplicação foi publicada utilizando o **Firebase Hosting**, permitindo a validação direta de sua usabilidade e responsividade em qualquer dispositivo (recomenda-se a visualização simulando telas mobile no inspetor do navegador ou diretamente em um smartphone):

🔗 **Link para a Pagina - https://cyrrus-vacinacao-app.web.app/home**

---

## 🎯 Resolução Prática de Cenários do Desafio

A interface e a modelagem de dados respondem com precisão absoluta aos quatro cenários especificados:

* **Cenário 1 (Vacinas Realizadas e Previstas):** Na caderneta de vacinação individual, o usuário identifica de maneira clara o estado de cada dose. Vacinas concluídas exibem o status `APLICADA` acompanhado da data em que foram administradas. Vacinas futuras ou dentro do prazo regulamentar exibem o status `PENDENTE` juntamente com a data prevista de vencimento.
* **Cenário 2 (Identificação de Atrasos):** Quando o prazo previsto para uma vacinação expira sem o registro correspondente, o sistema atualiza dinamicamente o status do item para `ATRASADA`, alterando o alerta para chamar a atenção visual imediata dos pais.
* **Cenário 3 (Campanhas de Vacinação Ativas):** Um banner informativo prioritário é renderizado diretamente no topo da tela inicial sempre que houver campanhas de vacinação em andamento (ex: Campanha Nacional de Multivacinação). Isso garante que alertas de saúde pública tenham engajamento garantido no momento de abertura do app.
* **Cenário 4 (Múltiplos Dependentes):** A aplicação implementou um controle de abas persistente no topo da página. Ao alternar as abas entre os filhos cadastrados, todo o contexto de dados da tela (dados pessoais, foto de perfil, alertas e listagem de vacinas) é atualizado de forma isolada, eliminando riscos de confusão entre históricos de dependentes diferentes.

---

## 🎨 Design System e Semântica das Cores

A paleta de cores institucional foi mapeada diretamente nos tokens globais de estilo (`src/theme/variables.scss`), sendo herdada pelos componentes nativos do Ionic de forma semântica:

* 🟢 **`#ABC270` (Verde / Primary):** Utilizado em cabeçalhos e para destacar o status de vacinas aplicadas com sucesso, transmitindo segurança.
* 🟡 **`#FEC868` (Amarelo / Secondary):** Cor estratégica aplicada no banner de campanhas de vacinação vigentes e em vacinas pendentes, gerando um nível moderado de atenção.
* 🟠 **`#FDA769` (Laranja / Tertiary):** Reservado exclusivamente como indicador visual para alertas críticos de vacinas em atraso, demandando uma ação urgente por parte do responsável.
* 🟤 **`#473C33` (Marrom / Dark):** Aplicado na tipografia base, títulos e elementos textuais, garantindo excelentes índices de contraste e conformidade com diretrizes de acessibilidade visual.

---

## 💡 Arquitetura e Padrões de Código (POO)

A engenharia do ecossistema Angular foi estruturada adotando as melhores práticas do ecossistema moderno:

1.  **Angular 18+ & Standalone Components:** Arquitetura limpa que elimina a dependência de arquivos `NgModules` globais. Cada componente gerencia e importa de forma autônoma suas dependências declarativas, minimizando o tamanho final do pacote construído e melhorando os tempos de carregamento.
2.  **Separação Rígida de Responsabilidades (Clean Code):**
    * **Models:** Interfaces de tipagem TypeScript rigorosa que blindam a integridade dos dados trafegados (`Child`, `Vaccine`, `Campaign`).
    * **Services (Programação Orientada a Objetos):** Centralização completa da regra de negócios e simulação de busca de dados no `DataService`. O uso de padrões assíncronos (`RxJS Observables`) simula fielmente a comunicação em tempo real com um banco de dados de produção.
    * **Pages:** A página principal (`HomePage`) opera sem lógica pesada injetada, consumindo puramente os fluxos de dados do serviço e focando apenas na renderização da interface com o usuário.

---

## 📂 Organização Estrutural do Repositório

Saída de código organizada de forma semântica e modular, com separação clara entre camadas de dados, serviços e apresentação visual:

```text
src/
 └── app/
     ├── core/
     │   ├── models/        # Contratos e tipagens estruturadas de dados
     │   │   ├── child.model.ts
     │   │   ├── vaccine.model.ts
     │   │   └── campaing.model.ts
     │   └── services/      # Lógica e injeção de serviços assíncronos (POO)
     │       └── data.service.ts
     └── home/              # Camada visual de apresentação (UI/UX)
         ├── home.page.html # Estrutura de tags e componentes de interface Ionic
         ├── home.page.scss # Estilos isolados e customizados em SASS
         └── home.page.ts   # Controlador de fluxo, estados e ciclo de vida da
