# Recuperacao de senha

**Requsitios funcionais**
- I usuario deve poder recuperar sua senha informando o seu e-mail.
- O usuario deve receber um email com instrucoes de recuperacao de senha.
- O usuario deve poder resetar sua senha.

**Requisitos nao funcionais**
- Utilizar Mailtrap para testar envios em ambiente de dev.
- Utilizar amazon SES para envios em producao.
- O envio de e-mails deve acontecer em segundo plano (background job).


**Regra de negocio**
- O link enviado por email para resetar senha, deve expirar em 2h.
- O usuario precisa confirmar a nova senha ao resetar sua senha.

# Atualizacao do perfil

**Requsitios funcionais**
- Usuario deve poder atualizar seu nome, email e senha;

**Regra de negocio**
- O usuario nao pode alterar seu email para um email ja utilizado.
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- para atualizar sua senha, o usuario precisa confirmar a nova senha;

# Painel do prestador
**Requsitios funcionais**
- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificao sempre que houver um novo agendament;
- O prestador deve poder visualizar as notificacoes nao lidas;

**Requisitos nao funcionais**
-  Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificacoes do prestador devem ser armazenadas no MongDB;
- As notificacoes do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regra de negocio**
- A notificao deve ter um status de lida ou nao-lida para que o prestador possa controlar;

# Agendamento de servicos
**Requsitios funcionais**
- O usuario deve poder listar todos os prestadores de servicos cadastrado;
- O usuario deve poder listar os dias de um mes com pelo menos 1 horario disponivel de 1 prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador

**Requisitos nao funcionais**
- A listagem de prestadores deve ser armazenada em cache;


**Regra de negocio**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h (Primeiro as 8h, ultimo as 17h)
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- O usuario nao pode agendar servicos consigo mesmo;

