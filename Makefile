NODEBIN = ./node_modules/.bin
ANTI_CACHING_HASH = $(shell cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 12 | head -n 1)


help:
	@echo
	@echo "  The Factolculator"
	@echo
	@echo "  \033[36mbuild\033[0m            build webpack assets"
	@echo "  \033[36mserver\033[0m           run development server"
	@echo "  \033[36mcopy_asssets\033[0m     copy static files to dist folder"
	@echo "  \033[36mlint\033[0m             run eslint on source"
	@echo

build: copy_assets
	NODE_ENV=production $(NODEBIN)/webpack --optimize-minimize --output-public-path /assets/ src/js/index.js dist/assets/bundle.js

server: copy_assets
	NODE_ENV=development $(NODEBIN)/webpack-dev-server --content-base dist/ --output-public-path /assets/ --devtool source-map --watch-poll --inline src/js/index.js

copy_assets:
	rm -rf dist/
	mkdir -p dist/
	cp src/index.html dist/
	sed -i 's/_ANTI_CACHING_HASH_/$(ANTI_CACHING_HASH)/g' dist/index.html

lint:
	$(NODEBIN)/eslint src/js/
