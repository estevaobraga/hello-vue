# 1ª INSTALAR O VUE
	npm install -g @vue/cli

# 2ª PARA RODAR ESTE PROJETO
###     2.1 Instalar as dependencias
obs: no diretório do projeto executar o comando

        	npm install
	
###     2.2 Rodar o projeto

        	npm run serve


# 2ª CRIANDO UM PROJETO COM VUE-CLI
```
	vue create hello-world
		Manually:
			Babel
			Router
			Vuex
			Linter / Formatter
			E2E Testing
		Obs: barra de espaço para selecionar
		?Use history mode for router? 
			Y
		? Pick a linter / formatter config: (configuração do ESLint)
			Standard config
		? Pick additional lint features: (Mostrar os erros ao salvar o projeto)
			Lint on save
		? Pick a E2E testing solution: (Framework para os teste E2E)
			Cypress
		? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Forma de configuração para os testes E2E: package.json ou em arquivos separados)
			package.json
		? Save this as a preset for future projects? (Salvar configuração para projetos futuros)
		n
```
# 3ª CRIADO O PROJETO
```
cd hello-world
npm run serve
```

# IMPORTANTE

Style somente para uma view
```
<style scoped>
	css...
</style>
```

# MÉTODOS

Funções v-on ou @
```
v-on:click
.stop
.prevent
.capture
.self
.once
.passive
```

```
v-model="mensagem"
```
# Components
Criar HTML genéricos para serem importados em outras paginas (Reutilização)

# Intalar depedencias

## Axios para realizar solicitações ajax
```
npm install --save axios
```
## BootStrap framework css
```
npm install --save bootstrap-vue
```
## REFERENCIA
```
<input ref="nome"/>

nome: this.$refs.nome
```
