# PersonalWebsite
Personal and professional website with project and resume details

# How To Description
Please note that my machine is a windows machine running Windows 10. Set-up instructions may vary slightly with other OS (operating systems).
In order to set up a website yourself, follow these simple steps:
1. Make sure you have a clear understanding of HTML (Hyper Text Markup Language), JavaScript (not the same as Java) and CSS (Cascading Style Sheet Computing).
2. Install a text-editor, such as Notepad++ or Atom.
3. If you would like to post your code publically or even keep it private and accessible from any computer, set up a Github repository.
  3.1 Install Git and set up your text editor in your local PATH.
  3.2 Create an account on github.com.
  3.3 Follow the simple steps to create your first repository. Be sure to initialize your repository with a README.md in order to clone it to your computer.
  3.4 Clone the repository. Open the Git Bash, and type "git clone https://www.github.com/your=account/your-project-name".
  3.5 Navigate into the repository by typing "cd your=project-name".
  3.6 Type "ls" to see the README.md file. If you can see this file, you have successfully cloned your repository.
  3.7 Edit the README.md file by typing "atom README.md" or open with your preferred text editor.
  3.8 Once you make a change, save and navigate back to your project directory. Your changes are in your working directory.
  3.9 Type "git add README.md" to add your changes to README.md to your staging area.
  3.10 Type "git commit -m "First commit change to README file."" to commit all your changes in the staging area to the repository.
  3.11 Type "git status" to verify your commit. It is a good habit to do this before and after commits to prevent mistakes.
  3.12 Type "git pull" to get changes from the repo if you have other people adding to the repository.
4. Install a web server program to create a working environment (e.g. Apache, Lighttpd, IIS, nginx). We will use Apache, which is open source and free to use.
  4.0 Note: Apache is pre-installed on Mac OS X. In the world of DNS (Domain Name System), every machine/computer knows the address: localhost. This is a reference to your own server, located on your personal machine. You can hit localhost in the address bar of your browser without even being connected to the Internet. Localhost actually points to a reserved IP address of your own personal machine.
  4.1 Install Visual C++ Redistributable for Visual Studio 2012. This Microsoft software package contains dependencies for the Windows version of Apache server.
  4.2 To install an Apache web server, use a binary distribution (ApacheHaus, Apache Lounge, BitNami WAMP Stack, WampServer, XAMPP) to deploy Apache httpd, optionally along with PHP and MySQL. We will use Apache Launcher found here: https://www.apachelounge.com/download/. Apache Lounge distributes Windows versions of the latest Apache build. You can download from the official Apache site, but will then need to compile your own build, which is well beyond the scope of this tutorial.
  4.3 Download the zip file for your machine and extract its contents. Move the Apache24 folder to your root directory specified in the README file or C:/Apache24 for Windows 10. Note: if you move the folder to another directory, you will have to change many configurations in the httpd.conf file found in C:/Apache24/conf. See below on changing those configurations if you move the folder to a different directory. Please note even if you move Apache24 to the default directory, you will have to edit the document and perform step 4.3.3 and 4.3.7 regardless.
    4.3.1 Open httpd.conf in a text editor, such as notepad++ or atom.
    4.3.2 Find the line that starts with ServerRoot (approximately line 37). Change it to "ServerRoot "your-directory-here/Apache24"", include the quotes around your directory path.
    4.3.3 Find the line that contains ServerName (approximately line 222). Remove the pound sign (#) that precedes it. Then change it to "ServerName localhost:80". This will mean that you access your web server by typing localhost into your browser (http://localhost/).
    4.3.4 Find the line that starts with DocumentRoot (approximately line 246). Change it to reflect the position of your document root, which should be: "DocumentRoot "your-directory-here/Apache24/htdocs". The document root is where Apache looks for your website files.
    4.3.5 Then change the line directly below it to match the new position: "<Directory "your-directory-here/Apache24/htdocs">".
    4.3.6 Scroll down to the line that has DirectoryIndex index.html (approximately line 275). Add index.php in there or any other files you need your server to recognize as index files. For example: "DirectoryIndex index.php index.html".
    4.3.7 Save and close the file with your changes.
  4.4 Navigate to C:/Windows/System32/drivers/etc in windows explorer.
  4.5 Open the hosts file with a text editor as an administrator and add the following line before everything (on its own line): "127.0.0.1 localhost" without the quotes. This tells windows that when you try to navigate to localhost in a browser, it should direct the requests to your own computer. Save the file and close.
  4.6 Navigate to the Apache24/bin folder. Execute httpd.exe to run your server. It should be a blank black screen without any error messages. With your server running, you can use localhost (type it into your browser, like: http://localhost/) to access your web files. Your server uses the web files in Apache24/htdocs. There will already be a simple HTML file in there.
  4.7 You will want to move your document root somewhere other than the default htdocs folder. Open the httpd.conf file again and change the location for the DocumentRoot and the following line (approximately lines 246 and 247): "your-git-repo-directory-on-your-local-machine". You can have it anywhere you want. Note: any changes you make to the httpd.conf file will require a restart of the web server (close it and open it again) to take effect. I use wwwroot for my document root because I originally started on IIS.
  4.8 Enable mod_rewrite on your Apache server. Search for the line that contains mod_rewrite.so (in http.conf) and remove the preceding pound sign (#). Save the file and close.
5. In your text editor, create a file called "homepage.html" and save it in your repo directory. Modify it to your heart's desire.
6. 
