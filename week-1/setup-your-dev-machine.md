## Setup your dev machine

Software development makes use of lots of tools that don't come standard on most computers. Many tutorials you will find will say things like "install git", "use brew to install the cli", or something similar. It is easiest if you can set up many of these things up front, that way you are ready when you need them.

:white_check_mark: Do the following (for Mac users):
* [Install Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)
* [Install iTerm2](https://github.com/nicolashery/mac-dev-setup/tree/2.0#iterm2)
* [Install Homebrew](https://github.com/nicolashery/mac-dev-setup/tree/2.0#iterm2) and [Homebrew Services](https://github.com/nicolashery/mac-dev-setup/tree/2.0#homebrew-services)
* [Install and configure git](https://github.com/nicolashery/mac-dev-setup/tree/2.0#git)
* [Install and Configure Sublime Text 3](https://www.loginradius.com/engineering/beginners-guide-for-sublime-text/)
* Install pyenv / python
  - `brew install pyenv`
  - `.bash_profile` is located in your home directory. (you can get there by typing `cd`). Open it by typing `open .bash_profile`. 
  - Paste this code somewhere in your bash profile: `if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi`
  - `pyenv install 3.6.0`
  - `pyenv global 3.6.0` This sets our global python version
  - Type into the terminal `python --version` you should see `Python 3.6.0`
  - Note, pyenv also installed a program called `pip` that is used to download python packages
* Install virtualenv. `pip install virtualenv`
* Install node. `brew install node`
* Install Postgresql. `brew install postgresql`, then `brew services start postgresql`

**NOTE:** To install some programs, you will need to type in your system password. When you type it in, it will not appear in the terminal (to protect your privacy), but it is working. 