all: help

.PHONY: help
help: Makefile
	@echo
	@echo " Choose a make command to run"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo

## init: initialize environment
.PHONY: init
init:
	npm install

## watch: watch for changes and compile
.PHONY: watch
watch:
	npm run watch

## diff: compare deployed stack with current state
.PHONY: diff
diff:
	npx cdk diff

## synth: emits the synthesized CloudFormation template
.PHONY: synth
synth:
	npx cdk synth

## deploy: deploy this stack to your default AWS account/region
.PHONY: deploy
deploy:
	npx cdk deploy

## output: show the stack outputs
.PHONY: output
output:
	aws cloudformation describe-stacks --stack-name CdkVpcStack | jq '.Stacks | .[] | .Outputs'

## destroy: destroy this stack
.PHONY: destroy 
destroy:
	npx cdk destroy
