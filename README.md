# YeoOmeka Default Theme

This base theme is packed full of goodies to get your Omeka theme
development off the ground. Not only does it come with some example
themes, it also sets up automation tasks for you with a `Gruntfile` with
goodies like LiveReload, Sass compiliation, and JavaScript support.

Once you have run the setup process with YeoOmeka, you are ready to
start working on your theme. Simply change in to the theme directory and
run grunt:

```shell
$ cd themes/your-theme-name-chose-at-setup
$ grunt
```

This will fire up the watch task to listen for changes in your files and
trigger the appropriate update tasks and reload the browser via
LiveReload.

### Bower Task

```shell
$ grunt bower
```

The `bower` task will take any packages installed via Bower, and add
them to the require config. There is on caveat at the moment as the
`Gruntfile` is in the theme and not the root of the site, the `baseDir`
setting causes this task to build incorrect pasth. 

### Build Task

```shell
$ grunt build
```

This task builds an optimized version of your theme for production. It
runs the following tasks:

* jshint
* sass:production
* imgemin:production
* svgmin:production

For the `imagemin` and `svgmin` tasks, the file are saved directly over the original
files. The `sass:production` builds minified css for the live site in
the `css` directory. 

## todo jsmin tasks




[omeka]: http://omeka.org
