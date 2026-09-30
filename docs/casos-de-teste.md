# Cenários de teste:

## CT01 - Login com credenciais válidas:

**Prioridade:** Alta
**Criticidade:** Alta

Dado que insiro username válido
E um password válido
Quando clico em "Login"
Então o sistema deve logar com sucesso
E o usuário deve ser redirecionado para a página de produtos

### Resultado esperado:
O login deve ser realizado com sucesso e o usuário redirecionado para a página de itens.

## CT02 - Login com credenciais inválidas:

**Prioridade:** Alta
**Criticidade:** Alta

Dado que insiro username válido
E um password inválido
Quando clico em "Login"
Então o sistema não permite o login
E deve ser exibida a mensagem "Epic sadface: Username and password do not match any user in this service"

### Resultado esperado:
O login deve exibir uma mensagem de erro ao tentar realizar o login com credenciais inválidas.

## CT03 - Realiza compra:

**Prioridade:** Alta
**Criticidade:** Alta

Dado que estou logado com sucesso no sistema
E seleciono um item e clico em "Add to card"
E clico no carrinho de compras
E clico em "Checkout"
E preencho "First Name", "Last Name", "Zip/Postal Code"
E clico em "Continue"
Quando clico em "Finish"
Então exibe a mensagen "Thank you for your order!"

### Resultado Esperado:
O usuário logado no sistema deve conseguir adicionar um ou mais itens ao carrinho de compras, preencher os dados necessarios para efetuar o pagamento e pagar com sucesso.


## CT04 - Logout do sistema:

**Prioridade:** Média
**Criticidade:** Média

Dado que estou logado com sucesso no sistema
Quando clico no menu superior esquerdo
E clico em "Logout"
Então devo ser deslogado com sucesso do sistema
E ser redirecionado para página de Login

### Resultado Esperado:
O usuário deve realizar o logout com sucesso e ser redirecionado para a página inicial de login.