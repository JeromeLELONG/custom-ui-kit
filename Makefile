.DEFAULT_GOAL := help

export UID=$(shell id -u)
export GID=$(shell id -g)

DOCKER ?= docker run --rm \
	-v "${PWD}:/app" \
	-w /app \
	--user ${UID}:${GID} \

DOCKER_NODE := $(DOCKER) -e HOME="/tmp" -v "${PWD}/var/cache:/tmp/.cache/" node:10

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install yarn packages
	$(DOCKER_NODE) yarn

start: ## Start the application in development mode
	$(DOCKER) --publish "3010:3010" node:10 yarn start

test: ## Run tests
	$(DOCKER_NODE) yarn test

test-watch: ## Run tests in watch mode
	$(DOCKER_NODE) yarn run test-watch

get-current-version: ## Set the current package version in the environment variable
	$(eval UI_KIT_VERSION = $(shell node -p "require('./package.json').version"))

build:
	rm -Rf build
	yarn build > /dev/null


deploy: get-current-version ## Deploy TAG version to build branch
	@ if [ "${TAG}" = "" ]; then \
		echo "Environment variable TAG is not set"; \
		echo "The current version is ${UI_KIT_VERSION}"; \
		exit 1; \
	fi

	$(MAKE) build
	rm -Rf /tmp/build || true
	cp -Rf build /tmp/build
	git fetch -a
	(git branch | grep build) || git checkout --track origin/build
	git checkout build
	git pull origin build
	cp -Rf /tmp/build .
	git add .
	yarn version --new-version ${TAG}
	git commit -m "Version ${TAG}" || true
	git push origin build --tags
	git checkout master
	yarn version --no-git-tag-version --new-version ${TAG}
	git add .
	git commit -m "Update to version ${TAG}"
	git push origin master
