## Contributing

Contributing to YeoOmeka is really easy. A Vagrant configuration is
bundled with these files, so setting up and running a server only
requires a single command. Make sure you have [Virtual Box][virtualbox]
and [Vagrant][vagrant] installed, then run:

```shell
$ vagrant up
```

Vagrant will provision a new virtual machine, set up everythin you need
to run Omeka and Yeoman. The virtual machine has port `8080` forwarding
to the test site which is located in `test\site`. To check things in the
browser, you simply open `http://localhost:8080` and you should see your
Omeka installation.

## Pull Requests

Please make all pull requests to the develop branch. And example process
for making a pull request:

1. Fork and clone the repo
1. `$ git checkout -b feature-my-awesome-improvement`
1. Make changes and commit
1. Push changes to Github
1. Create a **pull request** from `feature-my-awesome-improvement` on
   your repo to `develop` on the main repo
1. Celebrate your contribution to Open Source!!

[virtualbox]: https://www.virtualbox.org
[vagrant]: http://www.vagrantup.com/
