#############################
# Static Buildprocess
#############################

ARGS = $(filter-out $@,$(MAKECMDGOALS))
MAKEFLAGS += --silent


#############################
# Our own variables
#############################

BP_PROJECT := $(shell cat package.json | grep -o -m 1 '"name": "[a-z][a-z0-9._\s-]*"' | cut -d"\"" -f4)
BP_PATH := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))


#############################
# List available commands
#############################

list:
	sh -c "echo; $(MAKE) -p no_targets__ | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | grep -v 'Makefile'| sort"


#############################
# Docker related tasks
#############################

# Build the base build process image
image:
	docker build -t "ruhmesmeile/static-$(BP_PROJECT):lerna" .;

# Watch local, uncompressed, static version
watch:
	docker run --name "static-$(BP_PROJECT)" --rm -v $(BP_PATH):/data -i -t ruhmesmeile/static-$(BP_PROJECT):lerna npm start;

# Build local, compressed, static version
compile:
	docker run --name "static-$(BP_PROJECT)" --rm -v $(BP_PATH):/data -i -t ruhmesmeile/static-$(BP_PROJECT):lerna npm run build;

# Kill running build process, especially useful to stop the watch task (needs secondary terminal window to execute)
kill:
	docker kill "static-$(BP_PROJECT)";

integrate:
	cp dist/css/* ~/Projects/Sheepstreet/code/rm-dist/web/typo3conf/ext/rm_base_instance/Resources/Public/Sheepstreet/Css/
	cp dist/js/* ~/Projects/Sheepstreet/code/rm-dist/web/typo3conf/ext/rm_base_instance/Resources/Public/Sheepstreet/Javascript/
	cp -r dist/images/* ~/Projects/Sheepstreet/code/rm-dist/web/typo3conf/ext/rm_base_instance/Resources/Public/Sheepstreet/Images/
	cp dist/css/* ~/Projects/Sheepstreet/code/rm-dist/web/typo3conf/ext/rm_base_instance/Resources/Public/Goatstreet/Css/
	cp dist/js/* ~/Projects/Sheepstreet/code/rm-dist/web/typo3conf/ext/rm_base_instance/Resources/Public/Goatstreet/Javascript/
	cp -r dist/images/* ~/Projects/Sheepstreet/code/rm-dist/web/typo3conf/ext/rm_base_instance/Resources/Public/Goatstreet/Images/
