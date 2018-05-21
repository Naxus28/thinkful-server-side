# Deploying to heroku

In this assignment, you'll learn how to host apps on Heroku. Heroku is a platform-as-a-service (PaaS) that allows you to deploy web applications to virtual machines known as dynos. When someone visits your site, a dyno is accessed and used to serve your content.

Before anything else, you'll need to create a Heroku account if you don't already have one. Shortly after you sign up, you'll receive a confirmation email with a link you'll need to click to activate, and you'll be prompted to create a password. After that, you'll be taken to your Heroku dashboard. Know that it's possible to create a new Heroku app from the Dashboard, but in a moment we'll do this from the command line instead.

Next, you'll need to install Heroku command line (formerly called Heroku toolbelt). Heroku command line allows you to create and destroy Heroku apps, push up Git repos, and run scripts in your Heroku environment, among other things.

Download and run the right installer (Windows v. Mac) from this page. For Windows, you can check if your machine is 32 or 64-bit by typing "about" into Cortana, clicking on "About your PC," and checking the system type. You can go with default values for all of the options in the installer dialogue.

Now we're ready to sign in to Heroku from the command line.


## Signing in for Windows users
Heroku CLI works in Git Bash, except for the heroku login command. This means we'll need to sign in using Windows Command. After that, we'll be able to interact with Heroku from Git Bash.

Type "cmd" into the Cortana interface to open a new command terminal. Then type heroku login. This will prompt additional Heroku files to be downloaded. After that's done, you'll be prompted to provide your Heroku username (the email you signed up with) and your password.


If after typing heroku login your cursor is left hanging and the prompts don't appear, try closing out of the terminal and re-opening it to refresh. You can also type 'heroku version' to confirm that heroku command line installed properly.

Once you've signed in, you can close Windows command. From this point forward, you'll be working with Heroku through Git Bash. You can jump down to the instructions for deploying a demo Node app below.


## Troubleshooting for Windows users

By now you know, things don't always go as planned when working with computers. If you get this error heroku: command not found in either Git Bash or Windows CMD, it likely means that your PATH variable wasn't set up correctly during the installation process.

There are three main ways to troubleshoot for this error:

Try closing Git Bash and restarting it.
Un-install, and re-install Heroku CLI. During the installation process, make sure that you've checked off the box to "Set PATH to Heroku CLI".
Add the PATH variable manually.
In Cortana, type "path" and select "Edit environment variables for your account". Select the PATH variable and click "Edit..." and then click "New". Enter C:\Program Files\Heroku\bin, then click "OK" in both windows.


## Signing in for Mac users
Open a new terminal and type heroku login. You'll be prompted to enter your Heroku username (the email you signed up with) and your password.



## Deploying a demo Node app
Heroku provides a demo Node app that we'll now work with to learn how to deploy to Heroku.

Copy the clone link for this repo. Then from the command line (Git Bash, if you're on Windows), clone the repo down to your projects folder.

Move into the new repo directory with cd node-js-getting-started.

Now we're ready to create a new Heroku app. Run the command heroku create. Heroku generates a random project name for you, and sets up a subdomain at http://example-app.herokuapp.com.

For Node apps, Heroku expects a package.json file to be in the root of the repository. The demo app we've cloned has this, but when you're creating apps from scratch that you'll be deploying to Heroku, ensure this requirement is met.
Your project is now ready to push to Heroku. Heroku sets up a git remote called heroku, so to push your app use the following command: `git push heroku master`.


After it's done, you make sure you have a dyno ("dyno" is Heroku's name for a self-contained Linux container that can run application processes).

```bash
$ heroku ps:scale web=1
Scaling dynos... done, now running web at 1:Free
```

Heroku gives you one free dyno to use per month. Any more than that, and you have to pay. But for now, all you need is one.

Okay, now you've pushed your code to the Heroku platform, and you started a dyno, all with just a few commands. The only thing left to do is to open it up and check it out!

```bash
heroku open
```

This will launch a browser window pointed toward your app on the Heroku servers. (If it doesn't work, you can always find your app via the Heroku Dashboard or at http://app-name.herokuapp.com.


And those are the basics of the Heroku platform. The great thing about Heroku (in addition to giving you a free dyno, which is enough for hosting a personal app) is that it's so easy to use and integrate with your existing Git workflow. If you're interested in getting to know Heroku better, you can check out their Node.js guide.

Some good things to know:

You can run a command — typically scripts and applications that are part of your app — in a one-off dyno using the heroku run command.
You can view a stream of your application logs with heroku logs --tail. Use Ctrl-c to exit. When your app isn't working on Heroku, this is where you should start.
There are a ton of add-ons for Heroku that can help you manage your app: Heroku Add-ons.
If your app uses environment variables (for example, a DB_USER and DB_PASS in the configuration), you can set the Heroku environment variables with heroku config:set VAR_NAME=value. Environment variables are good for things that you don't want published to GitHub (like API keys).

